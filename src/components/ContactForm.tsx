"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";

import { useTranslation } from "next-i18next";

import Divider from "./Divider";

export default function ContactForm2() {
  const { t, i18n } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  // Controlled message field so initial text (translation) is editable by user
  const initialTemplate = t("contact.messagePlaceholder") as string;
  const [message, setMessage] = useState<string>(initialTemplate);
  const userModifiedRef = useRef(false);

  // Detect user modification
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!userModifiedRef.current && e.target.value !== initialTemplate) {
      userModifiedRef.current = true;
    }
    setMessage(e.target.value);
  };

  // When language changes, update template only if user hasn't modified yet OR field is still exactly old template
  useEffect(() => {
    const newTemplate = t("contact.messagePlaceholder") as string;
    if (!userModifiedRef.current || message.trim() === initialTemplate.trim()) {
      setMessage(newTemplate);
      userModifiedRef.current = false; // Still unmodified relative to new language
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const response = await fetch("/netlify-form-detection.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      // alert("Form submission failed.");
      // console.error("Form submission failed.");
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
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="block text-gray-700 font-medium">
                {t("contact.nameLabel")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                {t("contact.messageLabel")}
              </label>
              <textarea
                name="message"
                required
                rows={10}
                className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {t("contact.submit")}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
