import React, {useState} from "react";
import {socialMediaLinks} from "../../portfolio";
import "./ContactForm.scss";

export default function ContactForm({headingLevel = 2}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [emailDraft, setEmailDraft] = useState("");

  async function sendMessage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    setSending(true);
    setStatus("");
    setEmailDraft("");
    const draftBody = encodeURIComponent(
      `Name: ${values.name}\r\nEmail: ${values.email}\r\n\r\n${values.message}`
    );
    const draft = socialMediaLinks.gmail
      ? `mailto:${socialMediaLinks.gmail}?subject=Portfolio%20inquiry&body=${draftBody}`
      : "";

    try {
      const response = await fetch("https://portfolio-backend15.onrender.com/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.status >= 500) {
        setStatus(
          "The contact form is unavailable. You can send your message by email."
        );
        setEmailDraft(draft);
      } else {
        setStatus(result.message);
        if (response.ok) form.reset();
      }
    } catch {
      setStatus(
        "The contact form is unavailable. You can send your message by email."
      );
      setEmailDraft(draft);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={sendMessage}
      aria-labelledby="contact-form-heading"
    >
      <Heading id="contact-form-heading">Send me a message</Heading>
      <div className="contact-form-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
        <div className="contact-field contact-field-message">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            maxLength={4000}
          />
        </div>
      </div>
      <button className="main-button" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
        <span className="contact-submit-icon" aria-hidden="true">
          ↗
        </span>
      </button>
      <p className="contact-status" role="status">
        {status}
        {emailDraft && (
          <>
            {" "}
            <a href={emailDraft}>Open email draft</a>
          </>
        )}
      </p>
    </form>
  );
}
