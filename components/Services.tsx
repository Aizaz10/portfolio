const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Next.js/React apps, from landing pages to full platforms with databases and auth.",
  },
  {
    title: "Tutoring",
    desc: "Math, Physics, and Computer Science, up to Class 12. 3+ years of experience.",
  },
  {
    title: "Data Entry & Admin Support",
    desc: "Accurate, organized, deadline-driven work you can hand off with confidence.",
  },
  {
    title: "General Software Help",
    desc: "Debugging, small features, and technical consulting for existing projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-surfaceborder">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-eyebrow mb-3">04 — Services</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-10 max-w-2xl">
          How I can help.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-surfaceborder bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
