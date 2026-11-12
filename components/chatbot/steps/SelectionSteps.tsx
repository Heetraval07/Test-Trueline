"use client";

import { CATEGORIES, NEEDS, categoryById, questionsFor, type CategoryId } from "../config";
import { CATEGORY_ICONS } from "../icons";
import { Actions, Pills, SelectCard } from "../parts/Controls";
import styles from "../chatbot.module.css";

/** Step 1 — multi-select main service areas. */
export function CategoryStep({
  selected,
  onToggle,
  onContinue,
}: {
  selected: CategoryId[];
  onToggle: (id: CategoryId) => void;
  onContinue: () => void;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cards} role="group" aria-label="Main service areas">
        {CATEGORIES.map((c) => (
          <SelectCard
            key={c.id}
            Icon={CATEGORY_ICONS[c.icon]}
            label={c.label}
            hint={c.hint}
            selected={selected.includes(c.id)}
            onClick={() => onToggle(c.id)}
          />
        ))}
      </div>
      <Actions
        onContinue={onContinue}
        disabled={selected.length === 0}
        hint={selected.length === 0 ? "Select at least one area to continue." : `${selected.length} selected — you can pick more than one.`}
      />
    </div>
  );
}

/** Step 2 — sub-services grouped under each chosen area. */
export function SubServiceStep({
  categories,
  selected,
  onToggle,
  onSetGroup,
  onBack,
  onContinue,
}: {
  categories: CategoryId[];
  selected: string[];
  onToggle: (id: string) => void;
  onSetGroup: (ids: string[], on: boolean) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className={styles.card}>
      {categories.map((id) => {
        const cat = categoryById(id);
        const Icon = CATEGORY_ICONS[cat.icon];
        const ids = cat.services.map((s) => s.id);
        const all = ids.every((s) => selected.includes(s));
        return (
          <div key={id} className={styles.subGroup}>
            <div className={styles.subGroupHead}>
              <Icon size={13} aria-hidden="true" />
              {cat.label}
              <button type="button" className={styles.groupBtn} onClick={() => onSetGroup(ids, !all)}>
                {all ? "Clear" : "Select all"}
              </button>
            </div>
            <div className={styles.cards} role="group" aria-label={`${cat.label} services`}>
              {cat.services.map((s) => (
                <SelectCard
                  key={s.id}
                  label={s.label}
                  hint={s.hint}
                  selected={selected.includes(s.id)}
                  onClick={() => onToggle(s.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
      <Actions
        onBack={onBack}
        onContinue={onContinue}
        disabled={selected.length === 0}
        hint={selected.length === 0 ? "Select at least one service to continue." : `${selected.length} selected`}
      />
    </div>
  );
}

/** Step 3 — main need + optional note. */
export function NeedsStep({
  need,
  note,
  onNeed,
  onNote,
  onBack,
  onContinue,
}: {
  need: string;
  note: string;
  onNeed: (v: string) => void;
  onNote: (v: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.field}>
        <Pills label="What do you need help with?" options={NEEDS} value={need} onChange={onNeed} stacked />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="tl-cb-note">Briefly describe your requirement (optional)</label>
        <textarea
          id="tl-cb-note"
          className={styles.textarea}
          value={note}
          maxLength={500}
          placeholder="e.g. We're moving to a new office in Dubai and need CCTV, access control and WiFi set up."
          onChange={(e) => onNote(e.target.value)}
        />
        <p className={styles.counter}>{note.length}/500</p>
      </div>
      <Actions onBack={onBack} onContinue={onContinue} disabled={!need} hint={!need ? "Choose an option to continue." : undefined} />
    </div>
  );
}

/** Step 4 — 2–3 short contextual questions picked from the chosen categories. */
export function DetailsStep({
  categories,
  answers,
  onAnswer,
  onBack,
  onContinue,
}: {
  categories: CategoryId[];
  answers: Record<string, string>;
  onAnswer: (id: string, v: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const questions = questionsFor(categories);
  const missing = questions.filter((q) => !answers[q.id]).length;
  return (
    <div className={styles.card}>
      {questions.map((q) => (
        <div key={q.id} className={styles.question}>
          <span className={styles.label}>{q.label}</span>
          <Pills label={q.label} options={q.options} value={answers[q.id] ?? ""} onChange={(v) => onAnswer(q.id, v)} />
        </div>
      ))}
      <Actions
        onBack={onBack}
        onContinue={onContinue}
        disabled={missing > 0}
        hint={missing > 0 ? `${missing} question${missing > 1 ? "s" : ""} left` : undefined}
      />
    </div>
  );
}
