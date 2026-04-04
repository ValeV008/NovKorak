"use client";

import { FormEvent, useState } from "react";

import { useTranslation } from "next-i18next";

import Divider from "./Divider";

export default function ContactForm2() {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setSubmitError(null);
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      const response = await fetch("/netlify-form-detection.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        return;
      }
      setSubmitError(
        t("contact.error", {
          defaultValue:
            "Sorry, something went wrong while sending your message. Please try again.",
        })
      );
    } catch {
      setSubmitError(
        t("contact.error", {
          defaultValue:
            "Sorry, something went wrong while sending your message. Please try again.",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
      id="form"
    >
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">
          {t("contact.success")}
        </p>
      ) : (
        <>
          <h1
            className={"w-full my-2 text-5xl font-bold leading-tight text-center text-primary"}
          >
            {t("contact.title")}
          </h1>
          <Divider />
          <form
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            aria-busy={isSubmitting}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 font-medium">
                {t("contact.nameLabel")}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-gray-700 font-medium">
                {t("contact.emailLabel")}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-gray-700 font-medium">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={10}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {submitError && (
              <p
                id="contact-form-error"
                className="text-sm font-medium text-red-700"
                role="alert"
              >
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting
                ? t("contact.submitting", { defaultValue: "Sending..." })
                : t("contact.submit")}
            </button>
            <p className="sr-only" aria-live="polite">
              {isSubmitting
                ? t("contact.submitting", { defaultValue: "Sending..." })
                : ""}
            </p>
          </form>
        </>
      )}
    </div>
  );
}
