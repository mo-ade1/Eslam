import { riskItems } from "../data/content";

export default function Risk() {
  return (
    <section className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">WHY THIS MATTERS</p>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] max-w-[32ch] mb-12 text-ink">
          Small teams are the easiest targets — not because they're careless, but
          because no one's looking.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {riskItems.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2.5">{item.title}</h3>
              <p className="text-ink-dim text-[15px] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
