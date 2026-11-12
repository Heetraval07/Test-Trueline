"use client";

import { useState } from "react";
import { INDUSTRIES } from "../config";
import { hasErrors, validateCompany, validateContact, type CompanyInfo, type Contact } from "../flow";
import { Actions, Pills } from "../parts/Controls";
import styles from "../chatbot.module.css";

/** Step 5 — company name + industry. Errors surface on submit, then clear as you fix them. */
export function CompanyStep({
  value,
  onChange,
  onBack,
  onContinue,
}: {
  value: CompanyInfo;
  onChange: (patch: Partial<CompanyInfo>) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [show, setShow] = useState(false);
  const errors = validateCompany(value);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasErrors(errors)) return setShow(true);
    onContinue();
  };
  return (
    <form className={styles.card} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="tl-cb-company">Company name *</label>
        <input
          id="tl-cb-company"
          className={`${styles.input} ${show && errors.company ? styles.inputBad : ""}`}
          type="text"
          value={value.company}
          placeholder="e.g. Gulf Trading LLC"
          autoComplete="organization"
          autoFocus
          aria-invalid={show && !!errors.company}
          onChange={(e) => onChange({ company: e.target.value })}
        />
        {show && errors.company && <p className={styles.error}>{errors.company}</p>}
      </div>
      <div className={styles.field}>
        <span className={styles.label}>Industry *</span>
        <Pills label="Industry" options={INDUSTRIES} value={value.industry} onChange={(industry) => onChange({ industry })} />
        {show && errors.industry && <p className={styles.error}>{errors.industry}</p>}
      </div>
      <Actions onBack={onBack} submit />
    </form>
  );
}

const CONTACT_FIELDS: { key: keyof Contact; label: string; type: string; placeholder: string; autoComplete: string }[] = [
  { key: "name", label: "Full name *", type: "text", placeholder: "e.g. Ahmed Khan", autoComplete: "name" },
  { key: "email", label: "Email address *", type: "email", placeholder: "e.g. ahmed@company.ae", autoComplete: "email" },
  { key: "phone", label: "Phone number *", type: "tel", placeholder: "e.g. +971 50 123 4567", autoComplete: "tel" },
];

/** Step 6 — contact details. */
export function ContactStep({
  value,
  onChange,
  onBack,
  onContinue,
}: {
  value: Contact;
  onChange: (patch: Partial<Contact>) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [show, setShow] = useState(false);
  const errors = validateContact(value);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasErrors(errors)) return setShow(true);
    onContinue();
  };
  return (
    <form className={styles.card} onSubmit={submit} noValidate>
      {CONTACT_FIELDS.map((f, i) => {
        const error = show ? errors[f.key] : undefined;
        return (
          <div key={f.key} className={styles.field}>
            <label className={styles.label} htmlFor={`tl-cb-${f.key}`}>{f.label}</label>
            <input
              id={`tl-cb-${f.key}`}
              className={`${styles.input} ${error ? styles.inputBad : ""}`}
              type={f.type}
              value={value[f.key]}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              autoFocus={i === 0}
              aria-invalid={!!error}
              aria-describedby={error ? `tl-cb-${f.key}-err` : undefined}
              onChange={(e) => onChange({ [f.key]: e.target.value })}
            />
            {error && <p className={styles.error} id={`tl-cb-${f.key}-err`}>{error}</p>}
          </div>
        );
      })}
      <Actions onBack={onBack} submit />
    </form>
  );
}

/** Step 7 — optional free-text extras, with an explicit skip. */
export function ExtraStep({
  value,
  onChange,
  onBack,
  onContinue,
}: {
  value: string;
  onChange: (v: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="tl-cb-extra">Additional details</label>
        <textarea
          id="tl-cb-extra"
          className={styles.textarea}
          value={value}
          maxLength={600}
          placeholder="e.g. preferred time for a call, number of branches, existing vendors…"
          onChange={(e) => onChange(e.target.value)}
        />
        <p className={styles.counter}>{value.length}/600</p>
      </div>
      <Actions
        onBack={onBack}
        onContinue={onContinue}
        continueLabel={value.trim() ? "Review enquiry" : "Skip & review"}
      />
    </div>
  );
}
