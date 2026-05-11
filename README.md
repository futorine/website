# Futorine — consultancy landing page

Angular 21 · Tailwind CSS v4 · standalone components · zoneless change detection · signals.
All component styling is inline Tailwind in templates (no per-component CSS files).
The single `src/styles.css` exists only for Tailwind import, global design tokens, and keyframe animations.

## Quick start

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production bundle in dist/futorine
```

> Angular 21 and Tailwind v4 both require Node.js **20.19+** or **22.12+**.

## Project structure

```
src/
├── index.html                # fonts (Google), favicon, meta
├── main.ts                   # zoneless bootstrap
├── styles.css                # only CSS file — tokens + keyframes + Tailwind import
└── app/
    ├── app.ts                # root component composing all sections
    ├── data/
    │   └── content.ts        # SINGLE SOURCE OF TRUTH — edit this file
    └── components/
        ├── nav.component.ts
        ├── hero.component.ts
        ├── marquee.component.ts
        ├── manifesto.component.ts
        ├── services.component.ts
        ├── team.component.ts
        ├── work.component.ts
        ├── testimonials.component.ts
        ├── contact.component.ts
        └── footer.component.ts
```

## Editing content

**Almost everything you'll want to change lives in `src/app/data/content.ts`:**

- `SERVICES` — the 8 service offerings (edit title, body, capabilities)
- `TEAM` — principal (you) + network role cards
- `WORK` — featured projects timeline
- `TESTIMONIALS` — quotes from your recommendations

Headline and manifesto copy live in `hero.component.ts` and `manifesto.component.ts` respectively, near the top of each template.

## Design tokens

All colors, fonts, and spacing tokens are defined in `styles.css` under `@theme { ... }`.
Change `--color-moss-*` and `--color-lagoon-*` there and it flows through the whole site.

Palette:
- **ink** — dark forest backgrounds
- **moss** — bioluminescent green (primary accent)
- **lagoon** — turquoise (secondary accent)
- **bone** — warm off-white typography

## Wiring the contact form

The contact form in `contact.component.ts` currently logs submissions to the console.
To make it live, replace the body of the `submit()` method with a call to:

- [Formspree](https://formspree.io) — zero-backend
- [Resend](https://resend.com) — for custom backend with emails
- Your own API endpoint

## Sections (in scroll order)

1. **Nav** — sticky, translucent on scroll
2. **Hero** — bioluminescent spores, asymmetric display headline
3. **Marquee** — scrolling capabilities strip
4. **Manifesto** — "/02 — approach" studio principles
5. **Services** — 8 offerings, expandable accordion
6. **Team** — principal card + network roles (transparent framing)
7. **Work** — selected projects timeline
8. **Testimonials** — quotes from past recommendations
9. **Contact** — form + direct details
10. **Footer**

## Notes on the "team" framing

Per the spec, the team section presents:
- You as **Principal & Founder** (named, with full bio + stats)
- Four **"Vetted collaborator"** cards representing roles in your network
- A footnote clarifying network members are independents engaged per project

This signals scale without fabricating names. When you hire or engage someone formally,
update `TEAM` in `content.ts` with their real name and bio.
