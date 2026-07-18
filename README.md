# Eslam Thabet — Security Testing Landing Page

Full React project — Vite + Tailwind CSS v4 + component structure, same as a real
production React app.

## Structure
```
src/
  components/   Navbar, Hero, ScanCard, Risk, Services, Process, About, Contact, Footer
  data/         content.js — all copy, services, process steps, and risk items in one place
  App.jsx       assembles the page from the components above
  index.css     design tokens (colors, fonts) + the scan-card reveal animation
```

## Run it
```bash
npm install
npm run dev
```
Then open the local URL it prints (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
```
Outputs a production-ready site into `dist/`.

## Before publishing
1. Open `src/data/content.js` and replace the placeholder `email` in the `profile`
   object with Eslam's real contact email.
2. Review the copy in `content.js` (services, process, risk items, about) — it's based
   on a first draft of what Eslam does. Adjust anything that doesn't match his actual
   services, pricing approach, or certifications.
3. The "Why me" section has no specific certifications listed — add real ones if
   Eslam wants to include them.

## Notes
- The contact form has no backend — it opens the visitor's default email app,
  pre-filled with their message. To collect leads directly, a form service
  (Formspree, EmailJS) can be wired in later.
- If `npm install` fails with `ENOSPC` (no space left on device), free up disk space
  first — `node_modules` needs a few hundred MB.
