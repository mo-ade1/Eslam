import { ShieldCheck, Search } from "lucide-react";
import { services } from "../data/content";

const icons = { ShieldCheck, Search };

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">SERVICES</p>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] max-w-[28ch] mb-12 text-ink">
          Two ways to find out what's actually exposed
        </h2>
        <div className="grid md:grid-cols-2 gap-7">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div key={s.id} className="rounded-2xl border border-line bg-surface-2 p-8">
                <Icon size={40} className="text-accent mb-5" strokeWidth={1.6} />
                <h3 className="font-display text-xl font-semibold text-ink mb-2.5">{s.title}</h3>
                <p className="text-ink-dim text-[15px] mb-4.5 leading-relaxed">{s.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="relative pl-5 text-sm text-ink">
                      <span className="absolute left-0 top-[7px] w-2 h-2 rounded-sm bg-secure" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
