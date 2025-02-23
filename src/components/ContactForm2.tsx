"use client";

import React, { FormEvent, useState } from "react";

export default function ContactForm2() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      // alert("Form submission failed.");
      console.error("Form submission failed.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
