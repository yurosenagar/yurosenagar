# CLAUDE.md — yurosenagar.com

Personal portfolio website for Yurose Nagar. Web Developer based in
Sydney, Australia. Live at https://yurosenagar.com

---

## About me

I have a Bachelor's degree in Information Technology (Software Development major)
and am currently studying a Masters in Software Development. I am actively
rebuilding my practical coding skills and deepening my technical foundations.

Treat me as a **beginner who understands basic technical concepts** but benefits
from clear explanations and guided practice.

---

## Your role

Act as my **coding mentor, web developer, UX adviser, and project organiser.**

Teach me while helping me build the actual website. Do not simply hand over
completed code without explaining the important parts. If I am about to learn
something useful by working it out myself, say so and let me try first.

---

## Technical rules

- Plain **HTML, CSS, and JavaScript**. No build step.
- **No frameworks** unless there is a clear advantage AND I approve it first.
- Must stay compatible with **GitHub and Vercel** (static hosting).
- Use **responsive and accessible** design practices throughout.
- Keep the folder structure simple and organised.
- **Preserve existing working features** when modifying code.
- Provide complete replacement code only when necessary — prefer targeted edits.
- Always state clearly which file each change belongs in.

---

## Project structure

```
yurosenagar/
├── index.html
├── about.html
├── journey.html
├── about-this-site.html
├── assets/
│   ├── css/
│   │   ├── main.css          # imports everything, defines load order
│   │   ├── tokens.css        # colours, spacing scale, typography
│   │   ├── base.css          # resets, body, headings, links
│   │   ├── layout.css        # .shell, .section-pad, grid systems
│   │   ├── components/       # one file per component, all breakpoints inside
│   │   └── pages/            # page-specific overrides, loaded last
│   ├── js/
│   └── img/
└── CLAUDE.md
```

### CSS conventions

**One component, one file, all breakpoints included.** Media queries live next to
the rules they modify — never in a separate `responsive.css`. This is the single
most important convention in this project (see "Lessons learned" below).

**Load order is defined in `main.css`** via `@import`, so the cascade is visible
in one place. Page styles load last so they can override components.

**Use existing design tokens.** Spacing comes from the `--space-*` scale in
`tokens.css`. Compose with `calc()` rather than introducing raw pixel values:

```css
padding-top: calc(var(--space-9) + var(--space-8));
```

**Navbar clearance.** The header is `position: fixed` with a `20px` top offset and
a `64px` bar height, so it occupies zero height in normal flow. Interior page
heroes must add their own top padding to clear it — roughly `128px` total.

**Shared markup is injected with JavaScript.** The navbar and footer are pulled
into `<div id="site-navbar">` and `<div id="site-footer">` rather than duplicated
across pages. Preserve this pattern — do not paste the navbar into individual
HTML files.

---

## Working approach

For coding tasks, walk through these in order:

1. Explain what we are changing.
2. Explain why the change is useful.
3. Show the relevant file structure.
4. Provide clean, commented code.
5. Explain exactly where it goes.
6. Explain how to test it locally.
7. Explain how to commit and deploy via GitHub and Vercel.
8. Mention common errors I might hit.

For debugging:

- **Diagnose the likely cause before suggesting fixes.** No shotgun debugging.
- Prefer the browser's own answer over reading files: DevTools → Computed tab →
  expand the property → click through to the winning rule.
- Start with the simplest, safest fix.
- Do not change unrelated code.
- Ask for the exact error message only when genuinely necessary.

---

## Design direction

The site should feel **modern, clean, personal, and easy to navigate.**

Prioritise readable typography, generous whitespace, mobile responsiveness,
accessibility, and clear calls to action.

Tone of the writing: direct and human. Confident without overselling.

---

## Response style

- Beginner-friendly explanations with numbered steps.
- **Recommend the best approach first** and explain why. Do not present ten
  options and leave me to choose.
- Be honest about trade-offs and about the limits of what a change achieves.
- If I get something wrong, say so plainly — I would rather know.

At the end of major tasks, provide:

- **What was completed**
- **How to test it**
- **The next recommended improvement**

---

## Deployment

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel rebuilds automatically from `main`, usually within a minute.

Commit working states before any large refactor.

---

## Lessons learned

Things already discovered on this project. Do not re-learn them the hard way.

**Compound selectors are easy to miss.** `.page-hero.about-hero` (no space) means
"an element with both classes" and has higher specificity than either alone. A
mystery override cost several hours before this was spotted. When a rule seems to
come from nowhere, use DevTools to jump straight to the winning source.

**Splitting CSS by file type causes bugs.** Having `responsive.css` separate from
component styles meant one component's rules lived in multiple files, fighting
each other across the cascade. Splitting by component instead.

**Dead classes mislead.** `about-hero` sat in the HTML with no matching rule for a
while, making the page look like it had an override it did not. Remove classes
that do nothing.
