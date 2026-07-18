export const profile = {
  name: "Eslam Thabet",
  role: "Penetration Testing & Vulnerability Assessment",
  email: "eslammohammedthabet@gmail.com ", // placeholder — update with real contact email
};

export const findings = [
  { sev: "critical", label: "CRITICAL", name: "Unpatched remote service" },
  { sev: "high", label: "HIGH", name: "Weak admin credentials" },
  { sev: "medium", label: "MEDIUM", name: "Misconfigured firewall rule" },
  { sev: "low", label: "LOW", name: "Outdated TLS configuration" },
];

export const riskItems = [
  {
    title: "No dedicated security team",
    text: "Most small and mid-sized businesses run lean. Security gets attention only after something goes wrong.",
  },
  {
    title: "Tools alone don't catch everything",
    text: "Automated scanners flag the obvious. A manual test finds what they miss — the way a real attacker would find it.",
  },
  {
    title: "Compliance keeps asking",
    text: "Clients, partners, and insurers increasingly want proof of a real security assessment, not just a checkbox.",
  },
];

export const services = [
  {
    id: "pentest",
    icon: "ShieldCheck",
    title: "Penetration Testing",
    desc: "Simulated attacks against your network, web apps, or infrastructure to see what a real intruder could reach — and how far.",
    items: [
      "External & internal network testing",
      "Web application testing",
      "Exploitation attempted safely, with your sign-off",
      "Full write-up of what was tried and what worked",
    ],
  },
  {
    id: "vuln-assessment",
    icon: "Search",
    title: "Vulnerability Assessment",
    desc: "A structured scan and review of your systems to catch known weaknesses before someone else does.",
    items: [
      "Automated + manual verification",
      "Findings ranked by real-world severity",
      "No exploitation — safe for production systems",
      "Clear remediation steps for each finding",
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Scope the target",
    text: "A short call to define what's in scope — network, app, or both — and what \u201cdone\u201d looks like.",
  },
  {
    n: "02",
    title: "Test & investigate",
    text: "Reconnaissance, scanning, and hands-on testing against the agreed scope, on your schedule.",
  },
  {
    n: "03",
    title: "Report in plain language",
    text: "Every finding explained clearly — what it is, how it was found, and how bad it actually is.",
  },
  {
    n: "04",
    title: "Fix it together",
    text: "A walkthrough of remediation steps, plus a re-check once fixes are in place.",
  },
];

export const trustPoints = [
  "Reports written for founders and IT leads, not just security teams",
  "Fixed scope agreed upfront — no surprise costs",
  "A follow-up check included once fixes are made",
];
