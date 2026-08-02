# Product Requirements Document — yurosenagar.com

| | |
|---|---|
| **Product** | yurosenagar.com — personal portfolio and freelance web presence |
| **Owner** | Yurose Nagar |
| **Status** | v1.0 live in production |
| **Live at** | https://yurosenagar.com |
| **Last updated** | August 2026 |

---

## 1. Overview

yurosenagar.com is a personal website with two connected zones under one domain:

- **The root domain** — a polished, client-ready portfolio that presents selected work, services and a clear way to get in touch.
- **The labs subdomain** (`labs.yurosenagar.com`) — an open workshop where practice projects and experiments live without the pressure of looking finished.

The split exists so that one clean personal brand can serve two different audiences without either one diluting the other.

## 2. Problem statement

An emerging freelance designer & developer faces a chicken-and-egg problem: clients want to see proof of work, but proof of work requires clients. Meanwhile, learning projects are valuable evidence of growth but look unpolished next to client-ready work.

Without a dedicated site, that person is dependent on third-party platforms, has no controllable first impression, and has no single link to send when an opportunity appears.

## 3. Goals

**Primary goal** — convert a visitor who is evaluating Yurose into an enquiry by email.

**Secondary goals**

1. Present a professional, memorable first impression within five seconds of page load.
2. Communicate available services clearly enough that a prospective client understands what can be bought.
3. Give learning work an intentional home that adds credibility rather than subtracting from it.
4. Serve as a working proof-of-skill: the site itself is a portfolio piece that can be explained line by line.
5. Own the digital identity for the name "Yurose Nagar" in search results.

**Non-goals for v1**

- Blogging platform or CMS
- E-commerce, payments or client portal
- User accounts or authentication
- Multi-language support
- A framework rewrite (React/Next.js) before it solves a real problem

## 4. Target users

| Persona | What they want | What they do on the site |
|---|---|---|
| **Small business owner** (café, hotel, local brand) | Someone trustworthy to build or refresh their website | Scans the hero, looks at project cards, checks Services, emails |
| **Recruiter / hiring manager** | Evidence of real skill and clear thinking | Reads Work, opens About, checks how the site itself is built |
| **Fellow developer / peer** | To see how it was made | Goes straight to Labs, About This Website, GitHub |
| **Yurose (owner)** | To update content quickly without breaking the design | Edits one content file, commits, pushes |

## 5. User stories

1. As a **small business owner**, I want to understand what Yurose offers within one screen, so I can decide whether to keep reading.
2. As a **small business owner**, I want to see examples of work with the problem and role explained, so I can judge whether he thinks like a professional.
3. As a **prospective client**, I want an obvious, low-friction way to make contact, so I don't have to hunt for an email address.
4. As a **recruiter**, I want to understand the person behind the work, so I can assess fit beyond the visuals.
5. As a **peer**, I want to see the unpolished experiments, so I can gauge genuine learning.
6. As a **visitor on a phone**, I want the site to be readable and navigable one-handed, so I don't leave.
7. As a **visitor who prefers dark interfaces**, I want to switch the theme and have that choice remembered.
8. As the **owner**, I want to change any text on the site by editing one file, so updates take minutes.

## 6. Scope — v1.0 (shipped)

### Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero with availability signal, selected work, philosophy, contact |
| Work | `work.html` | Full project set grouped by category, plus Services |
| About | `about.html` | Personal story, philosophy, values, toolkit |
| Journey | `journey.html` | Learning timeline and reflective entries |
| About this website | `about-this-site.html` | The site documented as its own project, incl. AI transparency |
| Contact | `contact.html` | Dedicated contact panel with email and social links |
| Labs | `labs/index.html` | Standalone experiments index with status labels |

### Features

- **Navigation** — fixed pill navbar (Work · Labs · Contact), active-page highlighting, mobile dropdown menu.
- **Theme switching** — light default, dark option, choice persisted in the browser, applied before first paint (no flash).
- **Content-driven rendering** — projects, services, timeline, journal entries, social links and footer all render from a single content file.
- **Motivation ticker** — infinite marquee of positioning statements.
- **Scroll reveal** — sections fade in on entry; respects `prefers-reduced-motion`.
- **Responsive layout** — single breakpoint system down to small phones.

### Content requirements

- Only work that would be shown to a client or in an interview appears on the root domain. Everything still being practiced belongs in Labs.
- Concept work must be labelled as concept. No invented clients or testimonials.
- AI assistance is disclosed honestly, with a clear statement of what was reviewed, modified and tested by hand.

## 7. Requirements

### Functional (v1 — met)

| ID | Requirement | Status |
|---|---|---|
| F1 | Every page renders with no JavaScript errors | ✅ |
| F2 | Navigation is identical across all pages and marks the current page | ✅ |
| F3 | Theme toggle switches themes and persists the choice | ✅ |
| F4 | All editable copy lives in `assets/js/data/site-content.js` | ✅ |
| F5 | Site is usable and legible from 320px to 2560px wide | ✅ |
| F6 | Contact email is reachable in one click from every page | ✅ |
| F7 | Labs functions as a standalone site with no dependency on the parent | ✅ |

### Non-functional (v1 — met)

| ID | Requirement | Target |
|---|---|---|
| N1 | No build step required to run or deploy | Open `index.html` and it works |
| N2 | Total page weight | < 200 KB per page excluding fonts |
| N3 | Deployment | Automatic on push to `main` |
| N4 | Browser support | Latest 2 versions of Chrome, Safari, Firefox, Edge |
| N5 | Motion | Honours `prefers-reduced-motion` |

## 8. Success metrics

| Metric | How measured | Target (first 90 days) |
|---|---|---|
| Enquiries received | Emails via the site | ≥ 3 |
| Site reachable and error-free | Manual check per deploy | 100% of deploys |
| Lighthouse Performance | Chrome DevTools | ≥ 90 |
| Lighthouse Accessibility | Chrome DevTools | ≥ 95 |
| Indexed by Google for "Yurose Nagar" | Search Console | Page 1 |
| Content updates shipped | Git commits | ≥ 2 per month |

*Note: analytics is a Phase 2 item; until then, enquiry count is the only hard signal.*

## 9. Roadmap

### Phase 2 — Discoverability & trust
- Open Graph / Twitter Card meta tags with a branded 1200×630 preview image
- `sitemap.xml`, `robots.txt`, Google Search Console verification
- Branded 404 page
- Real GitHub, LinkedIn and résumé links replacing placeholders
- Analytics (privacy-friendly, e.g. Vercel Analytics)

### Phase 3 — Conversion & depth
- Working contact form (third-party form endpoint; no backend)
- First real project case study with screenshots, following the structure: problem → role → process → outcome
- First Journey entry published
- `labs.yurosenagar.com` deployed as its own project

### Phase 4 — Polish
- Accessibility audit and fixes
- Performance tuning (font loading, image formats)
- Labs restyled to match the current design system

### Deferred
- Framework migration — revisit only when a concrete problem calls for it
- CMS — revisit if content editing becomes a bottleneck

## 10. Open questions

1. Should Journey entries become individual pages, or remain a list until there is enough writing to justify them?
2. Should Services carry indicative pricing, or stay conversation-led?
3. Does the Journey page stay in the footer only, or return to the main navigation once it has real entries?

## 11. Assumptions & constraints

- Single maintainer with limited time; simplicity beats sophistication.
- Hosting and tooling must stay within free tiers.
- The stack must remain fully explainable by the owner — no dependency that cannot be justified.
- Content will be added incrementally; the architecture must tolerate a half-full portfolio without looking broken.
