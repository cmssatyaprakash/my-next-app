
"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="page">
      <section className="content-section contact-section">
        <p className="subtitle">GET IN TOUCH</p>
        <h1>Contact Us</h1>

        <p className="description">
          Have a question or project in mind?
          Send us a message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            rows={5}
            required
          />

          <button type="submit" className="btn-primary">
            Send Message
          </button>

          {submitted && (
            <p role="status" className="success-message">
              Thank you! Your form was submitted successfully.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
