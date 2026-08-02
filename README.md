# yurosenagar.com

Personal portfolio and freelance web presence for **Yurose Nagar** — a multi-page website written in ordinary HTML, CSS and JavaScript. No framework, no build step, no dependencies.

**Live:** [yurosenagar.com](https://yurosenagar.com)

---

## Documentation

Full project documentation lives in [`docs/`](docs/README.md):

| Document | Answers |
|---|---|
| [Product Requirements](docs/01-product-requirements.md) | Why it exists, who it's for, what success looks like |
| [Design](docs/02-design.md) | Tokens, typography, components, theming, responsive rules |
| [Technical Requirements](docs/03-technical-requirements.md) | Stack, architecture, data model, standards, deployment |
| [Implementation Plan](docs/04-implementation-plan.md) | Phases, tasks, acceptance criteria, working method |

## Pages

| Page | File | Contents |
|---|---|---|
| Home | `index.html` | Hero (availability signal), ticker, selected work, philosophy, contact band |
| Work | `work.html` | UX case studies + services |
| About | `about.html` | Story, philosophy, values, toolkit |
| Journey | `journey.html` | Learning timeline + reflective entries |
| About this website | `about-this-site.html` | The portfolio documented as its own project |
| Contact | `contact.html` | Email and social links |
| Labs | `labs/index.html` | Open workshop — deploys to labs.yurosenagar.com |

Navigation is **Work · Labs · Contact**. About, Journey and About-this-website are reached from in-page links.

**Publishing rule:** *"Would I show this to a client or in an interview as my best work?"* → main site. *"Am I still practicing on this?"* → a Labs entry.

## Running it locally

Double-click `index.html` — that's it. Nothing to install, nothing to build.

For live reload while editing, use VS Code with the **Live Server** extension.

## Making changes

| Change | Where |
|---|---|
| Any text, projects, services, timeline, links, footer | `assets/js/data/site-content.js` |
| Colours, spacing scale, fonts, radii (both themes) | `assets/css/tokens.css` |
| Navbar, buttons, ticker, project cards, footer styles | `assets/css/components.css` |
| Section-specific styles | `assets/css/sections/*.css` |
| Mobile layout | `assets/css/responsive.css` |
| Page structure and section wording | the relevant `*.html` |
| Behaviour (theme, menu, animations) | `assets/js/features/` |
| Reusable markup | `assets/js/components/` |

**Simple rule:** words and links → `site-content.js` · appearance → CSS · behaviour → `features/` · reusable markup → `components/`

Useful details:

- The navbar highlights the current page automatically (`aria-current` + `.active`).
- Project grids can be filtered with `data-category="ux"` or limited with `data-limit="2"`.
- New spacing values should come from the `--space-1` … `--space-9` scale in `tokens.css`.
- Light is the default theme; the visitor's choice is remembered in `localStorage`.

## Directory structure

```text
yurosenagar/
├── index.html                  # Home
├── work.html                   # Work + Services
├── about.html                  # About
├── journey.html                # Learning journey
├── about-this-site.html        # The site as a documented project
├── contact.html                # Contact
├── README.md
├── docs/                       # Project documentation
│   ├── README.md
│   ├── 01-product-requirements.md
│   ├── 02-design.md
│   ├── 03-technical-requirements.md
│   └── 04-implementation-plan.md
├── assets/
│   ├── css/
│   │   ├── tokens.css          # Design tokens + dark theme
│   │   ├── base.css            # Reset, body, focus, reveal
│   │   ├── layout.css          # Shell, section padding, headings
│   │   ├── components.css      # Navbar, buttons, ticker, cards, footer
│   │   ├── responsive.css      # Media queries
│   │   └── sections/
│   │       ├── hero.css
│   │       ├── work.css        # Project card artwork
│   │       ├── manifesto.css   # Philosophy band + values grid
│   │       ├── journal.css
│   │       ├── contact.css
│   │       └── page.css        # Interior pages, timeline, CTA bands
│   ├── icons/
│   │   └── favicon.svg
│   └── js/
│       ├── main.js             # Entry point
│       ├── data/
│       │   └── site-content.js # ALL editable content
│       ├── components/         # navbar, footer, project-card, services,
│       │                       # journey-timeline, journal-list,
│       │                       # motivation-ticker, social-links
│       ├── features/           # theme, navigation, reveal, placeholders
│       ├── utils/
│       │   └── dom.js
│       └── types/
│           └── content-types.js
└── labs/                       # Standalone sub-site with its own assets
    ├── index.html
    └── assets/{css,js,icons}/
```

**Load order matters.** CSS: `tokens → base → layout → components → sections/* → responsive`. JS: `theme.js` runs synchronously in `<head>` (so the theme applies before first paint); everything else is deferred and loads types → data → utils → components → features → `main.js`.

## Labs (labs.yurosenagar.com)

`labs/` is fully standalone — its own `assets/`, no dependency on the parent — so it works locally (open `labs/index.html`) and as a subdomain.

**Adding an experiment**

1. Build it in its own folder, e.g. `labs/css-clock/` with its own `index.html`.
2. Add an entry at the top of `labs/assets/js/data/experiments.js` with `href: 'css-clock/'` and a status: `learning`, `prototype`, `completed`, `improving` or `archived`.

**Deploying the subdomain on Vercel**

1. Create a second Vercel project from the same GitHub repo, with **Root Directory = `labs`**.
2. Add `labs.yurosenagar.com` as its custom domain.
3. Add the CNAME record Vercel gives you at your DNS provider.
4. Once live, change the Labs link in `assets/js/data/site-content.js` from `labs/index.html` to `https://labs.yurosenagar.com`.

## Deployment

Pushing to `main` deploys automatically:

```bash
git status            # what changed
git add -A            # stage it
git commit -m "..."   # snapshot it
git push              # GitHub → Vercel deploys
```

Hosted on Vercel from `github.com/yurosenagar/yurosenagar`. No build command, no framework preset — the repository root is served as static files. Previous deployments can be promoted from the Vercel dashboard to roll back.

## Tech

HTML5 · CSS3 (custom properties) · vanilla JavaScript · Space Grotesk (Google Fonts) · Git/GitHub · Vercel

Built with AI assistance for structure and drafting; every line reviewed, modified and tested by hand. The full account is on the [About this website](about-this-site.html) page.
