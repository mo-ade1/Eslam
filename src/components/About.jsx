import { Check } from "lucide-react";
import { profile, trustPoints } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-[720px]">
        <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">WHO YOU'RE WORKING WITH</p>
        <h2 className="font-display font-semibold text-[clamp(26px,3vw,34px)] text-ink mb-4.5">
          {profile.name}
        </h2>
        <p className="text-ink-dim text-base mb-6 leading-relaxed">
          I work directly with small and mid-sized teams — no account managers, no
          hand-off to a junior analyst. You talk to the person who ran the test and
          the person who wrote the report.
        </p>
        <ul className="flex flex-col gap-3">
          {trustPoints.map((t) => (
            <li key={t} className="relative pl-6 text-[14.5px] text-ink">
              <Check size={14} className="absolute left-0 top-[3px] text-secure" />
              {t}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
