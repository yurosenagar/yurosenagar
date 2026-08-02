# Technical Requirements Document — yurosenagar.com

| | |
|---|---|
| **Product** | yurosenagar.com |
| **Tech owner** | Yurose Nagar |
| **Status** | v1.0 in production |
| **Last updated** | August 2026 |

---

## 1. Technology stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5, hand-written | Fully understood, no abstraction to debug |
| Styling | CSS3 with custom properties | Theming and design tokens without a preprocessor |
| Behaviour | Vanilla JavaScript (ES2020+) | No framework needed at this scale |
| Fonts | Space Grotesk via Google Fonts | Single family, `preconnect` for speed |
| Version control | Git + GitHub (`github.com/yurosenagar/yurosenagar`) | Industry standard |
| Hosting | Vercel (static) | Free tier, automatic deploys, global CDN, free TLS |
| Build step | **None** | Files are served exactly as authored |
| Dependencies | **None** | Nothing to audit, update or break |

**Constraint:** any future dependency must be justified by a problem it solves that plain HTML/CSS/JS cannot.

## 2. Architecture

### Principles

1. **Separation of concerns** — markup, styling and logic never mix. No inline styles, no inline event handlers.
2. **Single source of content** — all editable copy lives in one data file.
3. **Component functions** — reusable UI is produced by render functions, not duplicated across pages.
4. **Namespaced globals** — everything hangs off `window.YuroseSite` (and `window.YuroseLabs`) to avoid collisions.
5. **Progressive load order** — theme applies before paint; everything else is deferred.

### Directory structure

```text
yurosenagar/
├── index.html                    # Home
├── work.html                     # Work + Services
├── about.html                    # About
├── journey.html                  # Learning journey
├── about-this-site.html          # The site as a documented project
├── contact.html                  # Contact
├── README.md
├── .gitignore
├── docs/                         # Project documentation (this folder)
├── assets/
│   ├── css/
│   │   ├── tokens.css            # Design tokens (colour, type, spacing, radii) + dark theme
│   │   ├── base.css              # Reset, body, links, focus, reveal
│   │   ├── layout.css            # Shell, section padding, section headings
│   │   ├── components.css        # Navbar, buttons, ticker, cards, footer
│   │   ├── responsive.css        # All media queries
│   │   └── sections/
│   │       ├── hero.css
│   │       ├── work.css          # Project card artwork
│   │       ├── manifesto.css     # Philosophy band + values grid
│   │       ├── journal.css       # Journal rows
│   │       ├── contact.css       # Blue contact band
│   │       └── page.css          # Interior pages, timeline, CTA bands, prose
│   ├── icons/
│   │   └── favicon.svg
│   └── js/
│       ├── main.js               # Entry point — mounts components, starts features
│       ├── data/
│       │   └── site-content.js   # ALL editable content
│       ├── components/           # Render functions returning markup
│       │   ├── navbar.js
│       │   ├── footer.js
│       │   ├── project-card.js
│       │   ├── services.js
│       │   ├── journey-timeline.js
│       │   ├── journal-list.js
│       │   ├── motivation-ticker.js
│       │   └── social-links.js
│       ├── features/             # Behaviour
│       │   ├── theme.js          # Theme init (non-deferred) + toggle
│       │   ├── navigation.js     # Mobile menu
│       │   ├── reveal.js         # Scroll animations
│       │   └── placeholders.js   # Neutralise '#' links
│       ├── utils/
│       │   └── dom.js            # select, selectAll, mount, escapeHtml
│       └── types/
│           └── content-types.js  # JSDoc type definitions
└── labs/                         # Standalone sub-site (own assets, no shared deps)
    ├── index.html
    └── assets/{css,js,icons}/
```

### Load order (required)

CSS cascade order matters and must be preserved:

```
tokens → base → layout → components → sections/* → responsive
```

JavaScript:

1. `features/theme.js` — **synchronous, in `<head>`**, so the theme is set before first paint.
2. Everything else — `defer`, in dependency order: types → data → utils → components → features → `main.js`.

`main.js` waits for `DOMContentLoaded`, then calls each render function followed by each feature initialiser.

## 3. Data model

All content is a single object literal: `window.YuroseSite.content` in `assets/js/data/site-content.js`.

| Key | Type | Purpose |
|---|---|---|
| `navigation` | `{ brand, links[] }` | Brand text; each link has `label`, `href`, optional `cta` |
| `motivationTicker` | `string[]` | Marquee statements |
| `projects` | `Project[]` | `id`, `visual`, `number`, `category`, `title`, `description`, `role`, `tags[]`, `href`, `linkLabel` |
| `workCategories` | `object[]` | Category metadata for the Work page |
| `services` | `{title, text}[]` | Service offerings |
| `journeyTimeline` | `{year, text, next?}[]` | Timeline rows |
| `aboutPreview` | `object` | Short about copy |
| `journal` | `object[]` | Journey entries |
| `socialLinks` | `object[]` | `label`, `href`, optional `external`, `ariaLabel` |
| `footer` | `{owner, message, backToTop}` | Footer copy |

Labs uses a parallel structure: `window.YuroseLabs.experiments` and `window.YuroseLabs.site`.

**Rendering contract:** components read from this object, escape all values, and mount into a placeholder element (e.g. `#projects-grid`). Grids may carry `data-` attributes to filter or limit output (`data-category`, `data-limit`).

## 4. Coding standards

- **File header** — every CSS and JS file begins with a comment stating its path.
- **Naming** — CSS: lowercase-hyphenated, semantic (`.project-card`, not `.blue-box`). JS: `camelCase`; render functions named `renderX`, initialisers `initX`.
- **No magic values** — colours and spacing come from tokens.
- **Escaping** — every user-editable string passes through `escapeHtml()` before insertion. Exception: intentionally rich strings (e.g. the Labs brand containing `<em>`), which are controlled by the owner only.
- **Comments** — explain *why*, not *what*.
- **Formatting** — 2-space indent; single quotes in JS.

## 5. Security

| Area | Requirement | Status |
|---|---|---|
| XSS | All dynamic strings escaped before insertion | ✅ |
| Third-party scripts | None loaded except Google Fonts CSS | ✅ |
| External links | `target="_blank"` always paired with `rel="noreferrer"` | ✅ |
| Transport | HTTPS enforced by Vercel; HTTP redirects to HTTPS | ✅ |
| Secrets | No API keys, tokens or credentials in the repo | ✅ |
| Storage | `localStorage` used only for theme preference; wrapped in `try/catch` for private mode | ✅ |

No personal data is collected or processed by the site in v1.

## 6. Performance requirements

| Requirement | Target | Approach |
|---|---|---|
| First Contentful Paint | < 1.5s on 4G | No framework; minimal CSS/JS |
| Total page weight | < 200 KB excl. fonts | No images; CSS-drawn artwork |
| Lighthouse Performance | ≥ 90 | Static hosting on CDN |
| Render-blocking JS | Theme script only (~1 KB) | Everything else deferred |
| Font loading | `preconnect` + `display=swap` | Text visible during font load |
| Layout shift (CLS) | < 0.1 | Fixed navbar height, no late-injected layout above the fold |

## 7. Accessibility requirements

Target: **WCAG 2.1 Level AA**.

| Requirement | Status |
|---|---|
| Semantic landmarks on every page | ✅ |
| One `h1` per page, logical heading order | ✅ |
| `aria-label` on nav, toggle and ambiguous links | ✅ |
| `aria-current="page"` on the active nav link | ✅ |
| `aria-expanded` maintained on the mobile toggle | ✅ |
| Visible focus indicator | ✅ 3px outline |
| Decorative elements `aria-hidden` | ✅ |
| `prefers-reduced-motion` honoured | ✅ |
| Touch targets ≥ 42px | ✅ |
| Colour contrast verified by measurement | ⏳ Phase 4 |
| Keyboard-only and screen-reader pass | ⏳ Phase 4 |

## 8. Browser & device support

| Tier | Targets |
|---|---|
| Full support | Chrome, Edge, Safari, Firefox — latest 2 versions; iOS Safari 15+; Chrome Android |
| Graceful degradation | Older browsers: no `backdrop-filter` blur, no IntersectionObserver → content shown immediately (explicit fallback in `reveal.js`) |
| Not supported | Internet Explorer |

Required platform features: CSS custom properties, `clamp()`, CSS Grid, `localStorage`, `IntersectionObserver` (with fallback), `color-mix()` (progressive enhancement on the navbar).

## 9. Deployment

### Pipeline

```
local edit → git commit → git push → GitHub main → Vercel auto-build → CDN → yurosenagar.com
```

| Setting | Value |
|---|---|
| Repository | `github.com/yurosenagar/yurosenagar` |
| Production branch | `main` |
| Framework preset | None (static) |
| Build command | None |
| Output directory | Repository root |
| Domains | `yurosenagar.com`, `www.yurosenagar.com` (redirects to apex/www per Vercel config) |
| TLS | Automatic (Let's Encrypt via Vercel) |

### Labs subdomain (planned)

Second Vercel project from the same repository with **Root Directory = `labs`**, custom domain `labs.yurosenagar.com`, DNS `CNAME → cname.vercel-dns.com`. Independent of the root deployment.

### Rollback

Vercel retains previous deployments; any earlier deployment can be promoted to production instantly. Git history provides the code-level equivalent (`git revert`).

## 10. Testing strategy

Manual, checklist-driven — appropriate to the project size.

**Per change:** open the affected pages locally; check the browser console for errors; toggle both themes; resize through the 760px breakpoint.

**Per release:** all 7 pages load; navigation correct on each; theme persists across reload; all internal links resolve; no console errors; mobile menu opens/closes; Lighthouse run on the homepage.

**Automated (future):** an HTML/link validation script would be a good Labs experiment.

## 11. Technical debt & known limitations

| Item | Impact | Plan |
|---|---|---|
| Script tags duplicated in every page's `<head>` | Adding a component means editing 6 files | Acceptable at this size; revisit if pages grow |
| No image assets — artwork is CSS | Limits realism of project visuals | Replace with real screenshots in Phase 3 |
| Labs uses the previous dark design system | Visual inconsistency between zones | Restyle in Phase 4 |
| `about-this-site.html` and `journey.html` not in main nav | Reachable only via in-page links/footer | Intentional for now; revisit as content grows |
| No automated tests | Regressions rely on manual checks | Acceptable; add link checking when practical |
| Contrast not formally measured | Possible AA failures | Audit in Phase 4 |

## 12. Future technical considerations

**Contact form** — a third-party endpoint (e.g. Formspree) keeps the site static; no backend required.

**Framework migration** — only if: content volume makes hand-editing painful, or genuinely interactive features appear. The current component split (data / components / features / utils) maps cleanly onto React should that day come.

**Build tooling** — CSS/JS minification and concatenation would reduce requests, at the cost of the "no build step" property. Only worth it if performance targets start failing.
