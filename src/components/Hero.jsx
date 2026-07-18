import ScanCard from "./ScanCard";

export default function Hero() {
  return (
    <section className="pt-[168px] pb-24 bg-[radial-gradient(ellipse_at_top_right,rgba(193,80,46,0.10),transparent_55%)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">
            PENETRATION TESTING &amp; VULNERABILITY ASSESSMENT
          </p>
          <h1 className="font-display font-semibold text-[clamp(32px,4.2vw,46px)] leading-[1.15] tracking-tight text-ink">
            Your systems look fine.
            <br />
            Until someone actually tries to break in.
          </h1>
          <p className="mt-5 text-ink-dim text-[17px] max-w-[46ch] leading-relaxed">
            I test your network, applications, and infrastructure the way an attacker
            would — then hand you a plain-language report on what's exposed and how to
            fix it. Built for teams too small to have security staff of their own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-accent px-[22px] py-3 text-sm font-semibold text-[#fff5f0] hover:opacity-90 transition-opacity"
            >
              Request a Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-lg border border-line px-[22px] py-3 text-sm font-semibold text-ink hover:border-accent transition-colors"
            >
              See what's included
            </a>
          </div>
        </div>

        <ScanCard />
      </div>
    </section>
  );
}
