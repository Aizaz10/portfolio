export default function About() {
  return (
    <section id="about" className="py-24 border-t border-surfaceborder">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-eyebrow mb-3">01 — About</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-8 max-w-2xl">
          From explaining Physics to building products.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="md:col-span-2 space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I&apos;m a Computer Science student at Iqra University (Class of 2027) with a
              builder&apos;s instinct — I like turning ideas into working products, not just
              prototypes. Before I wrote my first line of production code, I spent three years
              tutoring Math, Physics, and Computer Science, which taught me how to break down
              complex problems and explain them clearly. That skill shows up directly in how I
              write code, docs, and client communication.
            </p>
            <p>
              My focus is full-stack web development with{" "}
              <span className="text-ink">Next.js</span>,{" "}
              <span className="text-ink">React</span>, and{" "}
              <span className="text-ink">Supabase</span>. Most recently I built{" "}
              <span className="text-ink">Bright Mart</span>, a complete e-commerce platform from
              scratch — storefront, cart, checkout, and admin dashboard included. I&apos;m
              currently also working on an AI-based autism monitoring system as part of my final
              year project, combining computer vision and wearable sensors.
            </p>
            <p>
              I&apos;m open to freelance and contract work, part-time roles, and full-time
              opportunities after graduation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-surfaceborder bg-surface p-5">
              <p className="font-mono text-xs text-muted mb-1">Currently</p>
              <p className="text-ink">7th semester CS student</p>
            </div>
            <div className="rounded-lg border border-surfaceborder bg-surface p-5">
              <p className="font-mono text-xs text-muted mb-1">Experience</p>
              <p className="text-ink">3+ years tutoring Math, Physics &amp; CS</p>
            </div>
            <div className="rounded-lg border border-surfaceborder bg-surface p-5">
              <p className="font-mono text-xs text-muted mb-1">Based in</p>
              <p className="text-ink">Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
