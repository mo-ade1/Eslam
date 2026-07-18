import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-3 text-[13px] font-mono text-ink-dim">
        <span>© {new Date().getFullYear()} {profile.name} — Security Testing Services</span>
        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
