# yurose nagar — modular personal website

A simple, editable multi-page personal website using ordinary HTML, CSS and JavaScript — no framework, no build step. One design system throughout: Space Grotesk, a light-first palette with a single blue accent, and a dark navy-blue theme you can switch to.

**Live:** [yurosenagar.com](https://yurosenagar.com)

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
| Home | `index.html` | 7 blueprint sections: hero (open-for-freelance signal), selected work, skills snapshot, journey timeline, featured lab, about preview, contact CTA |
| Work | `work.html` | Projects grouped by category: UX case studies, development, AI-assisted |
| About | `about.html` | Story, philosophy, values, toolkit, how I use AI |
| Journey | `journey.html` | Learning timeline + reflective entries |
| About this website | `about-this-site.html` | The portfolio as a documented development project |
| Contact | `contact.html` | Let's connect — email, GitHub, LinkedIn, socials |
| Labs | `labs/index.html` | Open workshop — deploys to labs.yurosenagar.com |

Blueprint publishing rule: *"Would I show this to a client or in an interview as my best work?"* → main site. *"Am I still practicing on this?"* → a Labs entry.

## Labs (labs.yurosenagar.com)

`labs/` is a fully standalone mini-site: it has its own `assets/` and no dependency on the parent folder, so it works locally (open `labs/index.html`) and as a subdomain.

Adding an experiment:

1. Build it in its own folder, e.g. `labs/css-clock/` with its own `index.html`.
2. Add an entry in `labs/assets/js/data/experiments.js` with `href: 'css-clock/'` and status `live`, `wip` or `idea`.

Deploying the subdomain on Vercel:

1. In your Vercel project → Settings → Domains, add `labs.yurosenagar.com`.
2. Either point it at this same project and set the subdomain's root to `labs/` (Settings → General → Root Directory in a second Vercel project connected to the same repo is the simplest way), or create a new Vercel project from the same GitHub repo with Root Directory = `labs`.
3. Vercel shows you a CNAME record — add it at your DNS provider.
4. Once live, change the Labs link in `assets/js/data/site-content.js` from `labs/index.html` to `https://labs.yurosenagar.com`.

## Start here

1. Open `index.html` in your browser.
2. Edit projects, journal titles, navigation, motivation messages and links in `assets/js/data/site-content.js`.
3. Edit the dark-blue, green and red colour palette in `assets/css/tokens.css`.
4. Edit section wording directly in each page's HTML file.

Notes for multi-page editing:

- The navbar automatically highlights the current page (`aria-current` + `.active` style).
- `<div id="journal-list" data-limit="2">` limits how many journal entries show (used on the home page). Omit `data-limit` to show all.
- Interior-page headers, the about layout and the CTA band live in `assets/css/sections/page.css`.

No package installation or build command is required.

## Directory structure

```text
Path: yurose-personal-site-race-clock/

yurose-personal-site-race-clock/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── responsive.css
    │   └── sections/
    │       ├── hero.css
    │       ├── work.css
    │       ├── manifesto.css
    │       ├── journal.css
    │       └── contact.css
    ├── icons/
    │   └── favicon.svg
    └── js/
        ├── main.js
        ├── components/
        │   ├── navbar.js
        │   ├── race-clock.js
        │   ├── motivation-ticker.js
        │   ├── project-card.js
        │   ├── journal-list.js
        │   ├── social-links.js
        │   └── footer.js
        ├── data/
        │   └── site-content.js
        ├── features/
        │   ├── navigation.js
        │   ├── race-clock.js
        │   ├── reveal.js
        │   └── placeholders.js
        ├── services/
        │   └── weather-api.js
        ├── types/
        │   └── content-types.js
        └── utils/
            ├── dom.js
            ├── date-time.js
            └── weather-code.js
```

## Easiest edits

| Change | File path |
|---|---|
| Logo text, menu items, motivation messages, projects, journal and links | `assets/js/data/site-content.js` |
| Page title and main section wording | `index.html` |
| Main colours | `assets/css/tokens.css` |
| Navbar, buttons, race clock, ticker and project card styling | `assets/css/components.css` |
| Hero spacing and typography | `assets/css/sections/hero.css` |
| Mobile layout | `assets/css/responsive.css` |
| Live weather request | `assets/js/services/weather-api.js` |
| Weather condition wording | `assets/js/utils/weather-code.js` |

## Current design settings

- Browser page title and header wordmark: `yurose nagar`
- Font: Space Grotesk throughout
- Navigation: slightly larger, bolder and brighter
- Main palette: subtle dark blue, progress green and occasional racing red
- Hero: the second headline line is slightly smaller
- Race clock: local Sydney time, date and current weather only
- Motivation strip: smooth right-to-left animation replacing the old four status boxes
- Selected Work heading: slightly reduced in size

## Live weather

The race clock requests Sydney’s current temperature and weather condition from Open-Meteo. The website still works without the weather request; it will show `Weather unavailable` when the browser is offline or the service cannot be reached.

## Simple editing rule

- Change **words and links** in `site-content.js` or `index.html`.
- Change **colours and appearance** in the CSS files.
- Change **behaviour** in `assets/js/features/`.
- Change **API calls** in `assets/js/services/`.
- Change **reusable markup** in `assets/js/components/`.

## Recommended editing setup

The site opens directly by double-clicking `index.html`. For more reliable live weather and automatic browser refresh while editing, use VS Code with the **Live Server** extension.
# yurosenagar
