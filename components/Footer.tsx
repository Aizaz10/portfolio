export default function Footer() {
  return (
    <footer className="border-t border-surfaceborder py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Aizaz Ahmed. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-muted">Karachi, Pakistan</p>
      </div>
    </footer>
  );
}
