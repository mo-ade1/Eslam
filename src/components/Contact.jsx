import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Security assessment request — ${form.name || "New lead"}`);
    const bodyLines = [
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Email: ${form.email}`,
      "",
      form.message || "(no details provided)",
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "bg-bg border border-line rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-accent";

  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-accent mb-3.5">GET STARTED</p>
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] text-ink mb-3.5">
            Request a free consultation
          </h2>
          <p className="text-ink-dim text-[15.5px] max-w-[40ch] leading-relaxed">
            Tell me a bit about your systems and I'll get back to you to scope the
            assessment — no cost, no obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-7 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-[11.5px] tracking-wide text-ink-dim">Name</label>
            <input id="name" required placeholder="Your name" value={form.name} onChange={update("name")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="font-mono text-[11.5px] tracking-wide text-ink-dim">Company</label>
            <input id="company" placeholder="Company name (optional)" value={form.company} onChange={update("company")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-[11.5px] tracking-wide text-ink-dim">Email</label>
            <input id="email" type="email" required placeholder="you@company.com" value={form.email} onChange={update("email")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-[11.5px] tracking-wide text-ink-dim">
              What do you need tested?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="A few lines about your network, app, or main concern"
              value={form.message}
              onChange={update("message")}
              className={`${inputClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#fff5f0] hover:opacity-90 transition-opacity"
          >
            Send Request
            <Send size={15} />
          </button>
          <p className="text-[13px] text-secure min-h-[18px]">
            {sent ? "Your email app should open with this message ready to send." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
