import { findings } from "../data/content";

const sevClasses = {
  critical: "bg-accent/20 text-accent",
  high: "bg-accent/10 text-[#d97a55]",
  medium: "bg-warn/15 text-warn",
  low: "bg-secure/20 text-secure",
};

const delays = [0.3, 0.8, 1.3, 1.8];

export default function ScanCard() {
  return (
    <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line font-mono text-xs text-ink-dim">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span>scan_report.log</span>
      </div>
      <div className="px-[18px] pt-5 pb-[22px] font-mono text-[13px]">
        <p className="text-info mb-2">Target: internal-network-01</p>
        <p className="text-ink-dim mb-3.5">
          Running assessment<span className="cursor-blink text-accent">_</span>
        </p>
        <ul className="flex flex-col gap-2 mb-3.5">
          {findings.map((f, i) => (
            <li
              key={f.sev}
              className="reveal flex items-center gap-2.5 px-2.5 py-2 rounded-md bg-surface-2 border border-line"
              style={{ animationDelay: `${delays[i]}s` }}
            >
              <span className={`text-[10px] font-semibold tracking-wide px-1.5 py-0.5 rounded ${sevClasses[f.sev]}`}>
                {f.label}
              </span>
              <span className="text-ink text-[12.5px] font-body">{f.name}</span>
            </li>
          ))}
        </ul>
        <p className="reveal text-secure" style={{ animationDelay: "2.3s" }}>
          Assessment complete. Report ready for review.
        </p>
      </div>
    </div>
  );
}
