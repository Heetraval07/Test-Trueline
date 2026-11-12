"use client";

/**
 * TrueConnect — floating guided-enquiry widget.
 *
 * Entirely client-side: no network calls, no persistence, no AI. Answers live
 * in `ChatState` and are discarded on reload or restart (see flow.ts for the
 * seam where a backend would plug in later).
 */
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { MessageCircle, RotateCcw, X } from "lucide-react";
import { ASSISTANT, MESSAGES, categoryById, questionsFor, subServiceById, type CategoryId } from "./config";
import {
  INITIAL_STATE,
  PROGRESS_STEPS,
  nextStep,
  prevStep,
  pruneAnswers,
  pruneOrphanServices,
  stepIndex,
  toggleId,
  type ChatState,
  type CompanyInfo,
  type Contact,
  type Step,
} from "./flow";
import { AgentAvatar } from "./icons";
import { CategoryStep, DetailsStep, NeedsStep, SubServiceStep } from "./steps/SelectionSteps";
import { CompanyStep, ContactStep, ExtraStep } from "./steps/FormSteps";
import SummaryStep from "./steps/SummaryStep";
import styles from "./chatbot.module.css";

const TYPING_MS = 650;
const NUDGE_MS = 6000;
const CLOSE_MS = 200;

function BotRow({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowAvatar}><AgentAvatar size={28} /></span>
      <div className={styles.bubble}>
        {paragraphs.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </div>
  );
}

function UserRow({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <div className={`${styles.row} ${styles.rowUser}`}>
      <div className={`${styles.bubble} ${styles.bubbleUser} ${muted ? styles.bubbleMuted : ""}`}>{children}</div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [typing, setTyping] = useState(false);
  const [state, setState] = useState<ChatState>(INITIAL_STATE);

  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  // ── Navigation ─────────────────────────────────────────────────────────
  /* Forward moves get a short "typing" pause; going back is instant. */
  const showTyping = useCallback(() => {
    setTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setTyping(false), TYPING_MS);
  }, []);

  const advance = useCallback(
    (step: Step) => {
      setState((s) => ({ ...s, step }));
      showTyping();
    },
    [showTyping]
  );
  const goNext = useCallback(() => advance(nextStep(state.step)), [advance, state.step]);
  const goBack = useCallback(() => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setTyping(false);
    setState((s) => ({ ...s, step: prevStep(s.step) }));
  }, []);

  const restart = useCallback(() => {
    setState(INITIAL_STATE);
    showTyping();
  }, [showTyping]);

  // ── Open / close ───────────────────────────────────────────────────────
  const openPanel = useCallback(() => {
    setNudge(false);
    setOpen(true);
  }, []);
  const closePanel = useCallback(() => {
    setClosing(true);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setClosing(false);
      setOpen(false);
      launcherRef.current?.focus();
    }, CLOSE_MS);
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closePanel();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => setNudge(true), NUDGE_MS);
    return () => clearTimeout(t);
  }, [open]);

  // ── Derived transcript ─────────────────────────────────────────────────
  const idx = stepIndex(state.step);
  /* Bot replies up to `reveal` are on screen; while typing the newest is held back. */
  const reveal = typing ? idx - 1 : idx;
  const active = (step: Step) => state.step === step && !typing;

  /* Keep the newest message in view; on the opening step keep the welcome at the top. */
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    if (idx === 0) body.scrollTop = 0;
    else {
      // scroll so the latest bot bubble sits near the top of the viewport
      const bubbles = body.querySelectorAll(`.${styles.row}:not(.${styles.rowUser})`);
      const last = bubbles[bubbles.length - 1] as HTMLElement | undefined;
      body.scrollTop = last ? Math.max(0, last.offsetTop - 12) : body.scrollHeight;
    }
  }, [open, typing, idx]);

  const toggleCategory = (id: CategoryId) =>
    setState((s) => {
      const categories = toggleId(s.categories, id);
      return {
        ...s,
        categories,
        services: pruneOrphanServices(s.services, categories),
        answers: pruneAnswers(s.answers, categories),
      };
    });
  const toggleService = (id: string) => setState((s) => ({ ...s, services: toggleId(s.services, id) }));
  const setGroup = (ids: string[], on: boolean) =>
    setState((s) => ({
      ...s,
      services: on ? Array.from(new Set([...s.services, ...ids])) : s.services.filter((x) => !ids.includes(x)),
    }));
  const patchCompany = (p: Partial<CompanyInfo>) => setState((s) => ({ ...s, companyInfo: { ...s.companyInfo, ...p } }));
  const patchContact = (p: Partial<Contact>) => setState((s) => ({ ...s, contact: { ...s.contact, ...p } }));

  const categoryLabels = state.categories.map((id) => categoryById(id).label);
  const serviceLabels = state.services.map((id) => subServiceById(id)?.label).filter((l): l is string => !!l);
  const answered = questionsFor(state.categories).filter((q) => state.answers[q.id]);

  return (
    <div className={styles.root}>
      <button
        ref={launcherRef}
        type="button"
        className={`${styles.launcher} ${open ? styles.launcherHidden : ""}`}
        aria-label={ASSISTANT.tagline}
        aria-expanded={open}
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        onClick={openPanel}
      >
        <span className={styles.launcherRing} aria-hidden="true" />
        <AgentAvatar size={60} />
        <span className={styles.online} aria-hidden="true" />
        {nudge && <span className={styles.nudge}>Need IT help? Let&apos;s talk 👋</span>}
      </button>

      {open && (
        <div
          ref={panelRef}
          className={`${styles.panel} ${closing ? styles.panelClosing : ""}`}
          role="dialog"
          aria-modal="false"
          aria-label={`${ASSISTANT.name} — ${ASSISTANT.status}`}
          tabIndex={-1}
        >
          <header className={styles.header}>
            <span className={styles.headerAvatar}>
              <AgentAvatar size={40} />
              <span className={styles.online} aria-hidden="true" />
            </span>
            <div className={styles.headerText}>
              <div className={styles.headerName}>{ASSISTANT.name}</div>
              <div className={styles.headerStatus}>{ASSISTANT.status}</div>
            </div>
            <div className={styles.headerBtns}>
              <button type="button" className={styles.iconBtn} onClick={restart} aria-label="Restart conversation" title="Restart">
                <RotateCcw size={16} />
              </button>
              <button type="button" className={styles.iconBtn} onClick={closePanel} aria-label="Close chat" title="Close">
                <X size={18} />
              </button>
            </div>
          </header>

          <div className={styles.progress} aria-hidden="true">
            {Array.from({ length: PROGRESS_STEPS }, (_, i) => (
              <span key={i} className={`${styles.progressSeg} ${i <= idx ? styles.progressSegOn : ""}`} />
            ))}
          </div>

          <div className={styles.body} ref={bodyRef} aria-live="polite">
            {/* 1 — main categories */}
            {reveal >= 0 && <BotRow paragraphs={MESSAGES.welcome} />}
            {active("category") && <CategoryStep selected={state.categories} onToggle={toggleCategory} onContinue={goNext} />}

            {/* 2 — sub-services */}
            {idx >= 1 && (
              <UserRow>
                <ul>{categoryLabels.map((l) => <li key={l}>{l}</li>)}</ul>
              </UserRow>
            )}
            {reveal >= 1 && <BotRow paragraphs={MESSAGES.services} />}
            {active("services") && (
              <SubServiceStep
                categories={state.categories}
                selected={state.services}
                onToggle={toggleService}
                onSetGroup={setGroup}
                onBack={goBack}
                onContinue={goNext}
              />
            )}

            {/* 3 — main need */}
            {idx >= 2 && (
              <UserRow>
                <ul>{serviceLabels.map((l) => <li key={l}>{l}</li>)}</ul>
              </UserRow>
            )}
            {reveal >= 2 && <BotRow paragraphs={MESSAGES.needs} />}
            {active("needs") && (
              <NeedsStep
                need={state.need}
                note={state.needNote}
                onNeed={(need) => setState((s) => ({ ...s, need }))}
                onNote={(needNote) => setState((s) => ({ ...s, needNote }))}
                onBack={goBack}
                onContinue={goNext}
              />
            )}

            {/* 4 — contextual questions */}
            {idx >= 3 && (
              <UserRow>
                {state.need}
                {state.needNote.trim() && (
                  <>
                    <br />
                    <span style={{ opacity: 0.85 }}>&ldquo;{state.needNote.trim()}&rdquo;</span>
                  </>
                )}
              </UserRow>
            )}
            {reveal >= 3 && <BotRow paragraphs={MESSAGES.details} />}
            {active("details") && (
              <DetailsStep
                categories={state.categories}
                answers={state.answers}
                onAnswer={(id, v) => setState((s) => ({ ...s, answers: { ...s.answers, [id]: v } }))}
                onBack={goBack}
                onContinue={goNext}
              />
            )}

            {/* 5 — company */}
            {idx >= 4 && (
              <UserRow>
                <ul>{answered.map((q) => <li key={q.id}>{state.answers[q.id]}</li>)}</ul>
              </UserRow>
            )}
            {reveal >= 4 && <BotRow paragraphs={MESSAGES.company} />}
            {active("company") && <CompanyStep value={state.companyInfo} onChange={patchCompany} onBack={goBack} onContinue={goNext} />}

            {/* 6 — contact */}
            {idx >= 5 && (
              <UserRow>
                {state.companyInfo.company} · {state.companyInfo.industry}
              </UserRow>
            )}
            {reveal >= 5 && <BotRow paragraphs={MESSAGES.contact} />}
            {active("contact") && <ContactStep value={state.contact} onChange={patchContact} onBack={goBack} onContinue={goNext} />}

            {/* 7 — optional extras */}
            {idx >= 6 && (
              <UserRow>
                {state.contact.name}
                <br />
                {state.contact.email} · {state.contact.phone}
              </UserRow>
            )}
            {reveal >= 6 && <BotRow paragraphs={MESSAGES.extra} />}
            {active("extra") && (
              <ExtraStep value={state.extra} onChange={(extra) => setState((s) => ({ ...s, extra }))} onBack={goBack} onContinue={goNext} />
            )}

            {/* 8 — summary */}
            {idx >= 7 && <UserRow muted={!state.extra.trim()}>{state.extra.trim() || "No additional details"}</UserRow>}
            {reveal >= 7 && <BotRow paragraphs={MESSAGES.done} />}
            {active("done") && <SummaryStep state={state} onRestart={restart} onEdit={goBack} />}

            {typing && (
              <div className={styles.row}>
                <span className={styles.rowAvatar}><AgentAvatar size={28} /></span>
                <div className={styles.bubble} aria-label="Assistant is typing">
                  <span className={styles.typing}><span /><span /><span /></span>
                </div>
              </div>
            )}
            <div className={styles.bodyEnd} />
          </div>

          <div className={styles.footer}>
            <MessageCircle size={11} /> Demo assistant · Trueline Technologies
          </div>
        </div>
      )}
    </div>
  );
}
