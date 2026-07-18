export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-6 h-[68px] flex items-center justify-between">
        <a href="#top" className="font-mono text-[15px] tracking-wide text-ink">
          ESLAM<span className="text-accent">.</span>SEC
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-ink-dim hover:text-ink transition-colors">Services</a>
          <a href="#process" className="text-sm text-ink-dim hover:text-ink transition-colors">Process</a>
          <a href="#about" className="text-sm text-ink-dim hover:text-ink transition-colors">Why me</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#fff5f0] hover:opacity-90 transition-opacity"
        >
          Request Assessment
        </a>
      </div>
    </header>
  );
}
