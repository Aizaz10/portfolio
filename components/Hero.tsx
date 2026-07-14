"use client";

import { useEffect, useState } from "react";

const SNIPPET = `const aizaz = {
  role: "Full-Stack Developer",
  based_in: "Karachi, Pakistan",
  stack: ["Next.js", "React", "Supabase"],
  background: "3 yrs tutoring Math & Physics",
  status: "open_to_work",
};`;

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(SNIPPET.slice(0, i));
      if (i >= SNIPPET.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 grid-fade"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: headline */}
        <div>
          <p className="section-eyebrow mb-4">// available for freelance & full-time roles</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-ink">
            Aizaz Ahmed
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted max-w-md">
            Full-stack developer building fast, practical web apps with{" "}
            <span className="text-ink">Next.js</span> and{" "}
            <span className="text-ink">Supabase</span>.
          </p>
          <p className="mt-2 font-mono text-sm text-muted">
            CS student, Iqra University · Karachi, Pakistan
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent text-bg font-medium px-5 py-2.5 hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-surfaceborder text-ink px-5 py-2.5 hover:border-accent/60 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: signature terminal element */}
        <div className="rounded-lg border border-surfaceborder bg-surface shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surfaceborder">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">whoami.ts</span>
          </div>
          <pre className="p-5 font-mono text-sm leading-relaxed text-ink overflow-x-auto">
            <code>
              {typed}
              <span className={done ? "animate-blink" : ""}>▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
