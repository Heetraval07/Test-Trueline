"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import styles from "../chatbot.module.css";

/** Tickable card used for category and sub-service selection. */
export function SelectCard({
  Icon,
  label,
  hint,
  selected,
  onClick,
}: {
  Icon?: LucideIcon;
  label: string;
  hint?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`${styles.serviceCard} ${selected ? styles.serviceCardOn : ""}`}
    >
      {Icon && (
        <span className={styles.serviceIcon} aria-hidden="true">
          <Icon size={17} strokeWidth={2} />
        </span>
      )}
      <span className={styles.serviceBody}>
        <span className={styles.serviceLabel}>{label}</span>
        {hint && <span className={styles.serviceHint}>{hint}</span>}
      </span>
      <span className={styles.tick} aria-hidden="true">
        <Check size={12} strokeWidth={3.5} />
      </span>
    </button>
  );
}

/** Single-select pill group (radio semantics). */
export function Pills({
  label,
  options,
  value,
  onChange,
  stacked = false,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  stacked?: boolean;
}) {
  return (
    <div className={`${styles.pillRow} ${stacked ? styles.pillStack : ""}`} role="radiogroup" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
          className={`${styles.pill} ${value === opt ? styles.pillOn : ""}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/** Sticky Back / Continue bar shared by every step. */
export function Actions({
  onBack,
  onContinue,
  continueLabel = "Continue",
  disabled = false,
  submit = false,
  hint,
  extra,
}: {
  onBack?: () => void;
  onContinue?: () => void;
  continueLabel?: string;
  disabled?: boolean;
  submit?: boolean;
  hint?: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div className={styles.actions}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {onBack && (
            <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={onBack}>
              <ArrowLeft size={15} /> Back
            </button>
          )}
          {extra}
          <button
            type={submit ? "submit" : "button"}
            className={`${styles.btn} ${styles.btnPrimary}`}
            disabled={disabled}
            onClick={submit ? undefined : onContinue}
          >
            {continueLabel} <ArrowRight size={15} />
          </button>
        </div>
        {hint && <p className={styles.hint}>{hint}</p>}
      </div>
    </div>
  );
}
