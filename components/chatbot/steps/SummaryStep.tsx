"use client";

import { CheckCircle2, RotateCcw } from "lucide-react";
import { categoryById, questionsFor, subServiceById } from "../config";
import type { ChatState } from "../flow";
import styles from "../chatbot.module.css";

/** Step 8 — read-only recap. Nothing is persisted or sent: this phase is a demo. */
export default function SummaryStep({ state, onRestart, onEdit }: { state: ChatState; onRestart: () => void; onEdit: () => void }) {
  const questions = questionsFor(state.categories).filter((q) => state.answers[q.id]);
  const Row = ({ k, v }: { k: string; v: string }) => (
    <div className={styles.summaryRow}>
      <span className={styles.summaryKey}>{k}</span>
      <span className={styles.summaryVal}>{v}</span>
    </div>
  );

  return (
    <div className={styles.card}>
      <div className={styles.summary}>
        <div className={styles.summaryHead}>
          <span className={styles.summaryTick} aria-hidden="true"><CheckCircle2 size={15} /></span>
          Enquiry summary
        </div>
        <div className={styles.summaryBody}>
          <div className={styles.summarySection}>
            <div className={styles.summaryTitle}>Service areas</div>
            <div className={styles.chips}>
              {state.categories.map((id) => <span key={id} className={styles.chip}>{categoryById(id).label}</span>)}
            </div>
          </div>
          <div className={styles.summarySection}>
            <div className={styles.summaryTitle}>Services</div>
            <div className={styles.chips}>
              {state.services.map((id) => {
                const s = subServiceById(id);
                return s ? <span key={id} className={styles.chip}>{s.label}</span> : null;
              })}
            </div>
          </div>
          <div className={styles.summarySection}>
            <div className={styles.summaryTitle}>Requirements</div>
            <Row k="Need" v={state.need} />
            {state.needNote.trim() && <Row k="Description" v={state.needNote.trim()} />}
            {questions.map((q) => <Row key={q.id} k={q.label.replace(/\?$/, "")} v={state.answers[q.id]} />)}
          </div>
          <div className={styles.summarySection}>
            <div className={styles.summaryTitle}>Company</div>
            <Row k="Company" v={state.companyInfo.company} />
            <Row k="Industry" v={state.companyInfo.industry} />
          </div>
          <div className={styles.summarySection}>
            <div className={styles.summaryTitle}>Contact</div>
            <Row k="Name" v={state.contact.name} />
            <Row k="Email" v={state.contact.email} />
            <Row k="Phone" v={state.contact.phone} />
          </div>
          {state.extra.trim() && (
            <div className={styles.summarySection}>
              <div className={styles.summaryTitle}>Additional details</div>
              <p className={styles.summaryVal} style={{ fontSize: 12.5 }}>{state.extra.trim()}</p>
            </div>
          )}
          <p className={styles.demoNote}>Demo mode — this enquiry has not been sent or saved anywhere.</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={onEdit}>
          Edit
        </button>
        <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={onRestart}>
          <RotateCcw size={15} /> Start a new enquiry
        </button>
      </div>
    </div>
  );
}
