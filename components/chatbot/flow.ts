/**
 * Conversation state machine — pure logic, no React, no I/O.
 *
 * The transcript is DERIVED from this state rather than appended to, so going
 * back rewinds cleanly and earlier answers are still there going forward.
 *
 * Future phase: a `submit(state)` call at the "done" step is the single seam
 * where the enquiry would be POSTed to an API. Nothing is sent in this demo.
 */
import { questionsFor, subServiceById, type CategoryId } from "./config";

export const STEPS = ["category", "services", "needs", "details", "company", "contact", "extra", "done"] as const;
export type Step = (typeof STEPS)[number];

export type Contact = { name: string; email: string; phone: string };
export type CompanyInfo = { company: string; industry: string };

export type ChatState = {
  step: Step;
  categories: CategoryId[];
  /** Sub-service ids — always a subset of what `categories` makes available. */
  services: string[];
  need: string;
  needNote: string;
  /** Answers keyed by question id (see config.QUESTIONS). */
  answers: Record<string, string>;
  companyInfo: CompanyInfo;
  contact: Contact;
  extra: string;
};

export const INITIAL_STATE: ChatState = {
  step: "category",
  categories: [],
  services: [],
  need: "",
  needNote: "",
  answers: {},
  companyInfo: { company: "", industry: "" },
  contact: { name: "", email: "", phone: "" },
  extra: "",
};

export const stepIndex = (step: Step) => STEPS.indexOf(step);
/** Steps that count towards the progress bar (the summary is the finish line). */
export const PROGRESS_STEPS = STEPS.length - 1;
export const nextStep = (step: Step): Step => STEPS[Math.min(stepIndex(step) + 1, STEPS.length - 1)];
export const prevStep = (step: Step): Step => STEPS[Math.max(stepIndex(step) - 1, 0)];

export const toggleId = <T extends string>(list: T[], id: T): T[] =>
  list.includes(id) ? list.filter((s) => s !== id) : [...list, id];

/** Drop any selected sub-service whose parent category is no longer selected. */
export const pruneOrphanServices = (services: string[], categories: CategoryId[]): string[] =>
  services.filter((id) => {
    const svc = subServiceById(id);
    return !!svc && categories.includes(svc.categoryId);
  });

/** Keep only answers to questions that still apply to the chosen categories. */
export const pruneAnswers = (answers: Record<string, string>, categories: CategoryId[]) => {
  const ids = new Set(questionsFor(categories).map((q) => q.id));
  return Object.fromEntries(Object.entries(answers).filter(([k]) => ids.has(k)));
};

// ── Validation ───────────────────────────────────────────────────────────────
export type ContactErrors = Partial<Record<keyof Contact, string>>;
export type CompanyErrors = Partial<Record<keyof CompanyInfo, string>>;

/* Deliberately permissive: one @, a dot in the domain, no spaces. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(contact: Contact): ContactErrors {
  const errors: ContactErrors = {};
  const digits = contact.phone.replace(/\D/g, "");
  if (!contact.name.trim()) errors.name = "Please enter your full name.";
  if (!contact.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(contact.email.trim())) errors.email = "Please enter a valid email address.";
  if (!contact.phone.trim()) errors.phone = "Please enter a contact number.";
  else if (digits.length < 7 || digits.length > 15) errors.phone = "That doesn't look like a valid number.";
  return errors;
}

export function validateCompany(info: CompanyInfo): CompanyErrors {
  const errors: CompanyErrors = {};
  if (!info.company.trim()) errors.company = "Please enter your company name.";
  if (!info.industry.trim()) errors.industry = "Please select an industry.";
  return errors;
}

export const hasErrors = (errors: Record<string, string | undefined>) => Object.values(errors).some(Boolean);
