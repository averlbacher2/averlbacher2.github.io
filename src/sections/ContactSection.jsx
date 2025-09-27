import React, { useState } from 'react';
import '../styles/main.css';

export default function ContactSection({ email = 'you@example.com', linkedin = 'https://www.linkedin.com/in/yourprofile', github = 'https://github.com/yourusername', formEndpoint = '' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // If no endpoint configured, keep previous UI placeholder behavior
    if (!formEndpoint) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const formData = new FormData(form);

      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.error || 'Submission failed.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Submission failed.');
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-grid">
        <div className="contact-cards">
          <h3 className="contact-title">Get in touch</h3>
          <p className="contact-sub">I'd love to hear about your project, internship, or a great coffee recommendation!</p>

          <div className="contact-card">
            <div className="contact-card-label">Email</div>
            <a className="contact-card-link" href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">LinkedIn</div>
            <a className="contact-card-link" href={linkedin} target="_blank" rel="noreferrer">View my LinkedIn profile</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">GitHub</div>
            <a className="contact-card-link" href={github} target="_blank" rel="noreferrer">View my GitHub repos</a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="contact-title">Send a message</h3>
          <form className="contact-form" onSubmit={handleSubmit} action={formEndpoint || undefined} method="POST">
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" className="input" type="text" placeholder="Your name" required />

            <label className="sr-only" htmlFor="replyto">Email</label>
            <input id="replyto" name="email" className="input" type="email" placeholder="you@example.com" required />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="textarea" rows="5" placeholder="Tell me about your project or opportunity and I'll be in touch!" required></textarea>

            <div className="contact-form-actions">
              <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</button>
            </div>
          </form>

          <div aria-live="polite" className="contact-note">
            {status === 'success' && <div className="contact-success">Thanks — your message was sent!</div>}
            {status === 'error' && <div className="contact-error">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
