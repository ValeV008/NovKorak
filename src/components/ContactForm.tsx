"use client";

import React, { FormEvent, useState } from "react";

import Divider from "./Divider";

export default function ContactForm2() {
  const [submitted, setSubmitted] = useState(false);

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
      console.error("Form submission failed.");
    }
  };

  return (
    <div
      className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
      id="form"
    >
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">
          Hvala! Sporočilo je bilo poslano.
        </p>
      ) : (
        <>
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          >
            Pišite mi
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
              <label className="block text-gray-700 font-medium">Ime</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Elektronski naslov
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
                Sporočilo
              </label>
              <textarea
                name="message"
                required
                rows={10}
                className="mt-1 w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                defaultValue={`Pozdravljeni,

zanima me/nas več informacij o vaših storitvah delovne terapije in možnostih obravnave. Prosim za podrobnosti glede terminov in prispevka za terapijo oz. obravnavo. 

Hvala!

Lepo vas pozdravljam/o.`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}
