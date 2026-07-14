const groups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Supabase", "PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-surfaceborder">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-eyebrow mb-3">02 — Skills</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-10 max-w-2xl">
          Tools I reach for, and can defend in an interview.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-lg border border-surfaceborder bg-surface p-5"
            >
              <p className="font-mono text-xs text-accent mb-4">{g.label}</p>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-ink text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
