"use client";

import { FormEvent, useState } from "react";

import { useTranslation } from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setSubmitError(null);
    setIsSubmitting(true);
    const form = event.currentTarget;

    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

    if (isLocalhost) {
      setSubmitError(t("contact.localSubmissionUnavailable"));
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload.append(key, value);
      }
    });
    try {
      const response = await fetch("/netlify-form-detection.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
        return;
      }
      setSubmitError(
        t("contact.error", {
          defaultValue: "Sorry, something went wrong while sending your message. Please try again.",
        })
      );
    } catch {
      setSubmitError(
        t("contact.error", {
          defaultValue: "Sorry, something went wrong while sending your message. Please try again.",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-contact-form" id="form">
      {submitted && (
        <div className="home-contact-form__success" role="status">
          <span aria-hidden="true">✓</span>
          <h3>{t("contact.successTitle")}</h3>
          <p>{t("contact.homeSuccess")}</p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        action="/netlify-form-detection.html"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        aria-busy={isSubmitting}
        className="home-contact-form__fields"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="sr-only">
          <label>
            Do not fill this out if you are human: <input name="bot-field" />
          </label>
        </p>
        <div>
          <label htmlFor="contact-name">
            {t("contact.nameLabel")}
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className="home-contact-form__input"
          />
        </div>

        <div className="home-contact-form__split">
          <div>
          <label htmlFor="contact-email">
            {t("contact.emailLabel")}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="home-contact-form__input"
          />
          </div>
          <div>
          <label htmlFor="contact-phone">{t("contact.phoneLabel")}</label>
          <input id="contact-phone" type="tel" name="phone" autoComplete="tel" className="home-contact-form__input" />
          </div>
        </div>
        <div>
          <label htmlFor="contact-service">{t("contact.serviceLabel")}</label>
          <select id="contact-service" name="service" className="home-contact-form__input" defaultValue="children">
            <option value="children">{t("contact.serviceChildren")}</option>
            <option value="adults">{t("contact.serviceAdults")}</option>
            <option value="art">{t("contact.serviceArt")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message">
            {t("contact.messageLabel")}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className="home-contact-form__input home-contact-form__textarea"
          />
        </div>
        {submitError && (
          <p id="contact-form-error" className="home-contact-form__error" role="alert">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rua-button rua-button--form"
        >
          {isSubmitting
            ? t("contact.submitting", { defaultValue: "Sending..." })
            : t("contact.submit")}
        </button>
        <p className="sr-only" aria-live="polite">
          {isSubmitting ? t("contact.submitting", { defaultValue: "Sending..." }) : ""}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
