"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Fields = { name: string; email: string; subject: string; message: string };
const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Name / Email / Subject / Message form matching the live site.
 * DEMO ONLY — validates locally and shows a confirmation; nothing is sent or stored.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const validate = (v: Fields) => {
    const e: Partial<Fields> = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email.";
    if (!v.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(true);
  };

  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const field =
    "w-full rounded-[5px] border border-black/20 bg-transparent px-4 py-[15px] text-[14px] outline-none transition-colors placeholder:text-[#777] focus:border-navy";

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-white p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto mb-4 text-green" size={48} />
        <h3 className="text-[22px] font-semibold">Thank you, {values.name.split(" ")[0]}!</h3>
        <p className="copy mt-2">
          This is a local demo — your message has <strong>not</strong> been sent. In the live site our team would contact
          you within 24 hours.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-navy px-6 py-2.5 text-navy transition-colors hover:bg-navy hover:text-white"
          onClick={() => {
            setValues(EMPTY);
            setSent(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-[30px] sm:grid-cols-2">
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={`cf-${k}`} className="sr-only">{k === "name" ? "Name" : "Email"}</label>
          <input
            id={`cf-${k}`}
            type={k === "email" ? "email" : "text"}
            placeholder={k === "name" ? "Name" : "Email"}
            autoComplete={k}
            value={values[k]}
            onChange={set(k)}
            aria-invalid={!!errors[k]}
            className={`${field} ${errors[k] ? "!border-red-500" : ""}`}
          />
          {errors[k] && <p className="mt-1.5 text-[12px] text-red-600">{errors[k]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="cf-subject" className="sr-only">Subject</label>
        <input id="cf-subject" type="text" placeholder="Subject" value={values.subject} onChange={set("subject")} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="sr-only">Message</label>
        <textarea
          id="cf-message"
          placeholder="Message"
          rows={6}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          className={`${field} resize-y ${errors.message ? "!border-red-500" : ""}`}
        />
        {errors.message && <p className="mt-1.5 text-[12px] text-red-600">{errors.message}</p>}
        <button
          type="submit"
          className="mt-[30px] w-full rounded-full border border-navy px-6 py-[15px] text-[14px] text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
