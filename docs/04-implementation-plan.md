# Implementation Plan — yurosenagar.com

| | |
|---|---|
| **Product** | yurosenagar.com |
| **Owner** | Yurose Nagar |
| **Status** | Phase 1 complete; Phase 2 next |
| **Last updated** | August 2026 |

---

## 1. Purpose

This document turns the [PRD](01-product-requirements.md), [Design Document](02-design.md) and [Technical Requirements](03-technical-requirements.md) into sequenced, checkable work. Each task states what "done" means so progress is unambiguous.

## 2. Working method

**The loop for every change**

```
1. Edit files in VS Code
2. Test locally — open the page, check the console, both themes, resize past 760px
3. git status      # LOOK  — what changed
4. git add -A      # PACK  — stage it
5. git commit -m "…"  # SNAP — snapshot with a clear message
6. git push        # SEND  — GitHub → Vercel deploys automatically
7. Hard-refresh the live site and confirm
```

**Rules**

- One logical change per commit. Commit messages say what and why.
- Never leave the day with unpushed commits.
- Content changes go in `assets/js/data/site-content.js` first; only touch HTML when structure changes.
- New spacing/colour values must come from the token scale.

## 3. Phase 1 — Foundation ✅ *Complete*

| # | Task | Done when |
|---|---|---|
| 1.1 | Modular file structure | CSS and JS split by responsibility; every file path-commented |
| 1.2 | Design token system | All colour/spacing/type from `tokens.css` |
| 1.3 | Six main pages built | Home, Work, About, Journey, About-this-site, Contact render |
| 1.4 | Component render functions | Navbar, footer, cards, services, timeline, journal, socials, ticker |
| 1.5 | Content data file | All copy editable from one file |
| 1.6 | Light/dark theming | Toggle works, persists, no flash of wrong theme |
| 1.7 | Responsive layout | Usable 320px → desktop; mobile menu works |
| 1.8 | Labs sub-site | Standalone, own assets, status labels |
| 1.9 | Freelance-focused content | Hero, services, philosophy, contact copy in client voice |
| 1.10 | Deployment | GitHub → Vercel → yurosenagar.com live over HTTPS |
| 1.11 | Project documentation | These four documents in `docs/` |

## 4. Phase 2 — Discoverability & trust

**Objective:** make the site shareable, findable and free of dead ends.
**Estimated effort:** 3–5 short sessions.

| # | Task | Files | Acceptance criteria |
|---|---|---|---|
| 2.1 | Replace placeholder links | `assets/js/data/site-content.js` | GitHub, LinkedIn and résumé links resolve to real destinations; no `href="#"` remains in social links |
| 2.2 | Open Graph + Twitter Card tags | all `*.html` `<head>` | Sharing any URL on LinkedIn/WhatsApp shows title, description and image; validated in a card debugger |
| 2.3 | Branded preview image | `assets/images/og-cover.png` | 1200×630 PNG, on-brand, under 200 KB |
| 2.4 | `robots.txt` + `sitemap.xml` | repo root | Both reachable at their URLs; sitemap lists all 6 public pages with correct absolute URLs |
| 2.5 | Google Search Console | external + repo root | Domain verified; sitemap submitted; no coverage errors |
| 2.6 | Branded 404 page | `404.html` | Visiting a nonexistent URL shows the site's design with navigation back |
| 2.7 | Analytics | Vercel dashboard | Page views recorded for the last 24h |
| 2.8 | Favicon set | `assets/icons/` | Tab icon and iOS home-screen icon both correct |

**Phase exit:** the site is indexed, shares look professional, and no link leads nowhere.

## 5. Phase 3 — Conversion & depth

**Objective:** make it easier to enquire, and give visitors more substance to read.
**Estimated effort:** 5–8 sessions (case study is the bulk).

| # | Task | Files | Acceptance criteria |
|---|---|---|---|
| 3.1 | Contact form | `contact.html`, new `sections/form.css` | Submitting sends a real email; success and error states visible; works with keyboard; spam protection enabled |
| 3.2 | Case-study page template | `work/` + `sections/case-study.css` | One reusable structure: problem → role → process → outcome → learnings |
| 3.3 | First full case study | new page + `site-content.js` | A project card links to a complete case study with real screenshots |
| 3.4 | Project screenshots | `assets/images/` | Real imagery replaces CSS mockups; images sized and compressed; `alt` text on each |
| 3.5 | First Journey entry | `journey.html` | One published entry following built → struggled → solved → learned → next |
| 3.6 | Deploy `labs.yurosenagar.com` | Vercel + DNS | Subdomain live over HTTPS; nav Labs link switched to the full URL |
| 3.7 | First Labs experiment | `labs/` | One working experiment deployed and listed with live + source links |

**Phase exit:** a visitor can read one project in depth and contact you without leaving the site.

## 6. Phase 4 — Polish

**Objective:** verified quality rather than assumed quality.

| # | Task | Acceptance criteria |
|---|---|---|
| 4.1 | Accessibility audit | Contrast measured in both themes; full keyboard pass; screen-reader pass; issues fixed or logged |
| 4.2 | Lighthouse pass | Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 on home and work |
| 4.3 | Cross-browser check | Verified on Safari, Chrome, Firefox, Edge + a real iOS and Android device |
| 4.4 | Labs restyle | Labs uses the current token system; visually a sibling of the main site |
| 4.5 | Performance tuning | Font loading optimised; images in modern formats; page weight within target |
| 4.6 | Documentation refresh | These four documents updated to match reality |

**Phase exit:** quality targets are measured and met, not asserted.

## 7. Ongoing cadence

| Rhythm | Activity |
|---|---|
| Per experiment | Ship to Labs, add its entry, push |
| Monthly | One Journey entry; review the availability signal is still accurate |
| Quarterly | Lighthouse re-run; dependency-free check; update roadmap in the PRD |
| Per project won | Add a case study while it's fresh |

## 8. Definition of done (any task)

1. Works in both light and dark themes.
2. Works from 320px to desktop.
3. No console errors or warnings.
4. Keyboard-reachable; visible focus.
5. New values come from the token scale.
6. Content editable from the data file where applicable.
7. Committed with a clear message and pushed.
8. Verified on the live site after deploy.

## 9. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Portfolio stays thin — few projects to show | High | High | Ship concept work and Labs experiments; label honestly; treat the site itself as a project |
| Momentum lost after launch | Medium | High | Keep a fixed monthly cadence; small commits; Labs lowers the bar for shipping |
| Design drift as sections are added | Medium | Medium | Tokens and the definition of done act as guardrails |
| Deploy breaks unnoticed | Low | High | Check the live site after each push; Vercel rollback available |
| Scope creep into a framework rewrite | Medium | Medium | Migration requires a written justification against a real problem |
| Contact form spam | Medium | Low | Use a provider with built-in spam filtering |

## 10. Immediate next actions

1. Push the pending light-mode-default commit *(one `git push`)*.
2. Task 2.1 — replace the GitHub, LinkedIn and résumé placeholder links.
3. Task 2.2 + 2.3 — Open Graph tags and the preview image.
4. Task 2.4 + 2.5 — sitemap, robots.txt, Search Console.
5. Task 2.6 — the 404 page.

## 11. Document maintenance

These four documents are living. Update them when reality changes — a document that contradicts the code is worse than no document. The natural time to revise is at the end of each phase, as part of task 4.6.

| Document | Update when |
|---|---|
| [Product Requirements](01-product-requirements.md) | Goals, audience or scope change |
| [Design](02-design.md) | Tokens, components or design rules change |
| [Technical Requirements](03-technical-requirements.md) | Stack, architecture or data model change |
| Implementation Plan (this) | A phase completes or priorities shift |
