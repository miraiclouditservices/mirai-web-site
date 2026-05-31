"use client";
import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        // Hook up to your backend / Formspree / Resend here.
        await new Promise(r => setTimeout(r, 700));
        setLoading(false); setSent(true);
      }}
    >
      <h3>Request a free consultation</h3>
      <div className={styles.row}>
        <label>
          <span>Full name *</span>
          <input required type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email *</span>
          <input required type="email" name="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+91 ..." />
        </label>
        <label>
          <span>Service</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Cloud Services</option>
            <option>Cybersecurity</option>
            <option>Networking</option>
            <option>Data Center</option>
            <option>IT Support / AMC</option>
            <option>CCTV & Surveillance</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can we help? *</span>
        <textarea required rows={5} name="message" placeholder="Briefly describe your project or challenge…" />
      </label>
      <button type="submit" className="btn-brand" disabled={loading || sent}>
        {sent ? "Thanks — we’ll be in touch ✓" : loading ? "Sending…" : "Send message"}
      </button>
      <small className={styles.note}>By submitting you agree to our privacy policy.</small>
    </form>
  );
}
