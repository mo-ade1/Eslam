import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">HOW IT WORKS</p>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] mb-12 text-ink">
          Four steps, start to fix
        </h2>
        <ol className="grid md:grid-cols-2 gap-x-12 gap-y-9">
          {processSteps.map((s) => (
            <li key={s.n} className="flex gap-4.5">
              <span className="shrink-0 w-[34px] h-[34px] rounded-full border border-line flex items-center justify-center font-mono text-[13px] text-accent">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-[17px] font-semibold text-ink mb-1.5">{s.title}</h3>
                <p className="text-ink-dim text-[14.5px] leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
