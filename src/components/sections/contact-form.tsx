"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type FormFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

function fieldClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-black/15 px-4 py-3.5 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)]/70",
    hasError ? "border-red-400/70 focus-visible:ring-red-400" : "border-white/10"
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const detail = (event as CustomEvent<{ message?: string }>).detail;

      if (!detail?.message) {
        return;
      }

      setFields((current) => ({
        ...current,
        message: detail.message ?? ""
      }));
      setIsSuccess(false);
      setErrors((current) => {
        const next = { ...current };
        delete next.message;
        return next;
      });
    };

    window.addEventListener("alakapuri:prefill-message", handlePrefill as EventListener);

    return () => {
      window.removeEventListener("alakapuri:prefill-message", handlePrefill as EventListener);
    };
  }, []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!fields.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!fields.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!fields.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!fields.message.trim()) {
      nextErrors.message = "Please tell us how we can help.";
    }

    return nextErrors;
  };

  const focusFirstError = (nextErrors: FormErrors) => {
    const order: Array<keyof FormFields> = ["name", "phone", "email", "message"];
    const first = order.find((field) => nextErrors[field]);

    if (!first) {
      return;
    }

    const target = document.getElementById(`contact-${first}`) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    target?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(false);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 1100));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFields(initialFields);
  };

  const updateField = (field: keyof FormFields, value: string) => {
    setFields((current) => ({
      ...current,
      [field]: value
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });

    setIsSuccess(false);
  };

  return (
    <form id="contact-form" className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          className={fieldClass(Boolean(errors.name))}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-sm text-red-300">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className={fieldClass(Boolean(errors.phone))}
          placeholder="+91"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
        />
        {errors.phone ? (
          <p id="contact-phone-error" className="mt-2 text-sm text-red-300">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
          className={fieldClass(Boolean(errors.email))}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-sm text-red-300">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={fieldClass(Boolean(errors.message))}
          placeholder="Tell us whether you are enquiring about dining, stay, or the premium package."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-shine inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-glow hover:bg-highlight disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
        </button>
        <p className="text-sm text-[color:var(--text-secondary)]">
          Frontend submission is simulated cleanly until a live backend is connected.
        </p>
      </div>

      <div aria-live="polite">
        {isSuccess ? (
          <div className="rounded-[24px] border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
            Inquiry sent successfully. We have simulated a polished success flow for future backend
            integration.
          </div>
        ) : null}
      </div>
    </form>
  );
}
