// File: labs/assets/js/data/experiments.js

window.YuroseLabs = window.YuroseLabs || {};

/**
 * EDIT THIS FILE FIRST when adding a new experiment. Newest entries at the TOP,
 * so the page reads as a visible timeline of growth.
 *
 * Each experiment you build gets its own repo + free deploy (Vercel/GitHub Pages),
 * then one entry here with its live link and source link.
 *
 * status: 'learning'  — active study
 *         'prototype' — testing an idea
 *         'completed' — stable result
 *         'improving' — being refined
 *         'archived'  — kept for history
 */
window.YuroseLabs.experiments = [
  {
    number: 'LAB 003',
    status: 'learning',
    title: 'CSS-only race clock',
    learning: 'CSS animations and keyframes — no JavaScript allowed',
    date: 'JUL 2026',
    description: 'Rebuilding the main site’s F1 clock face using only CSS.',
    tags: ['CSS', 'Animation'],
    demo: { label: 'Live demo', href: '#' },
    code: { label: 'Source', href: '#' },
  },
  {
    number: 'LAB 002',
    status: 'prototype',
    title: 'Kathmandu weather card',
    learning: 'Fetch API, async/await and error handling',
    date: 'JUL 2026',
    description: 'A widget comparing live Sydney and Kathmandu weather via Open-Meteo.',
    tags: ['JavaScript', 'API', 'Fetch'],
    demo: { label: 'Live demo', href: '#' },
    code: { label: 'Source', href: '#' },
  },
  {
    number: 'LAB 001',
    status: 'completed',
    title: 'This playground',
    learning: 'Modular vanilla JS architecture and subdomain deployment',
    date: 'JUL 2026',
    description: 'The labs site itself — hand-written, no frameworks, home for everything above.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: { label: 'You are here', href: '#' },
    code: { label: 'Source', href: '#' },
  },
];

window.YuroseLabs.site = {
  brand: 'yurose <em>labs</em>',
  backLink: { label: '← yurosenagar.com', href: 'https://yurosenagar.com' },
  footer: {
    left: 'YUROSE LABS — HAND-WRITTEN EXPERIMENTS',
    right: 'BREAK THINGS. LEARN. REPEAT.',
  },
};
