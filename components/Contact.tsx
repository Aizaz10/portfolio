"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqerazpl";

const EMAIL = "aizazahmed2004@gmail.com";
const WHATSAPP = "https://wa.me/923702542641";
const LINKEDIN = "https://linkedin.com/in/aizaz-ahmed-635113249"; 
const GITHUB = "https://github.com/Aizaz10";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-surfaceborder">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-eyebrow mb-3">05 — Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 max-w-2xl">
          Let&apos;s build something.
        </h2>
        <p className="text-muted max-w-xl mb-10">
          Whether it&apos;s a project, a role, or a question — I usually reply within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-surfaceborder bg-surface p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md bg-bg border border-surfaceborder px-3 py-2 text-ink text-sm focus:border-accent outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md bg-bg border border-surfaceborder px-3 py-2 text-ink text-sm focus:border-accent outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md bg-bg border border-surfaceborder px-3 py-2 text-ink text-sm focus:border-accent outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-accent text-bg font-medium py-2.5 hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="font-mono text-xs text-accent">Message sent — thank you.</p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-400">
                Something went wrong. Try emailing directly instead.
              </p>
            )}
          </form>

          {/* Direct links */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-lg border border-surfaceborder bg-surface p-6 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between text-ink hover:text-accent transition-colors font-mono text-sm"
              >
                Email <span className="text-muted">{EMAIL}</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-ink hover:text-accent transition-colors font-mono text-sm"
              >
                WhatsApp <span className="text-muted">Chat now →</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-ink hover:text-accent transition-colors font-mono text-sm"
              >
                LinkedIn <span className="text-muted">Connect →</span>
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-ink hover:text-accent transition-colors font-mono text-sm"
              >
                GitHub <span className="text-muted">View code →</span>
              </a>
            </div>

            {/* Resume placeholder button */}
            <a
              href="/resume.pdf"
              className="rounded-lg border border-dashed border-surfaceborder p-6 text-center font-mono text-sm text-muted hover:border-accent/50 hover:text-ink transition-colors"
            >
              ↓ Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
