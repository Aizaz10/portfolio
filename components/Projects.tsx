function WindowChrome({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surfaceborder">
      <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
      <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
      <span className="ml-3 font-mono text-xs text-muted">{filename}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-surfaceborder">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-eyebrow mb-3">03 — Projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-10 max-w-2xl">
          Things I&apos;ve shipped and things in progress.
        </h2>

        {/* Flagship: Bright Mart */}
        <div className="rounded-lg border border-surfaceborder bg-surface overflow-hidden mb-8">
          <WindowChrome filename="bright-mart/README.md" />
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs text-accent border border-accent/40 rounded px-2 py-0.5">
                Flagship
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">Bright Mart</h3>
            </div>
            <p className="text-muted leading-relaxed max-w-2xl">
              A full-stack e-commerce platform built end-to-end with Next.js, Tailwind CSS, and
              Supabase (PostgreSQL) — from database schema to deployment, built solo.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-mono text-xs text-muted mb-2">Customer storefront</p>
                <ul className="text-sm text-ink space-y-1 list-disc list-inside marker:text-accent">
                  <li>Product catalog with variants</li>
                  <li>Cart &amp; guest checkout</li>
                  <li>Order tracking</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-2">Admin dashboard</p>
                <ul className="text-sm text-ink space-y-1 list-disc list-inside marker:text-accent">
                  <li>Product, category &amp; order management</li>
                  <li>Image uploads</li>
                  <li>Role-based authentication</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
              <p className="font-mono text-xs text-muted">
                Next.js · Tailwind CSS · Supabase · PostgreSQL
              </p>
              <a
                href="https://bright-mart-gold.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary: FYP */}
        <div className="rounded-lg border border-surfaceborder bg-surface overflow-hidden">
          <WindowChrome filename="autism-monitoring-fyp/status.log" />
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs text-muted border border-surfaceborder rounded px-2 py-0.5">
                In development
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">
                AI-Based Autism Monitoring &amp; Therapy System
              </h3>
            </div>
            <p className="text-muted leading-relaxed max-w-2xl">
              A group final-year project combining computer vision and wearable sensors to
              support autism therapy.
            </p>
            <ul className="text-sm text-ink space-y-1 list-disc list-inside marker:text-accent mt-4">
              <li>ESP32-CAM + MPU6050 wristband for motion/behavior data capture</li>
              <li>MediaPipe Pose &amp; OpenCV for movement analysis</li>
              <li>Firebase backend, Flutter mobile app</li>
            </ul>
            <p className="font-mono text-xs text-muted mt-6">
              ESP32-CAM · MPU6050 · Firebase · Flutter · MediaPipe · OpenCV
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
