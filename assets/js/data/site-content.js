// File: assets/js/data/site-content.js

window.YuroseSite = window.YuroseSite || {};

/**
 * EDIT THIS FILE FIRST when changing wording, projects, journey entries or links.
 * Layout and styling live elsewhere, so content edits stay simple.
 * Structure follows the yurosenagar.com website blueprint.
 */
window.YuroseSite.content = {
  navigation: {
    brand: 'yurose nagar',
    links: [
      { label: 'Work', href: 'work.html' },
      // After DNS is set up, change to 'https://labs.yurosenagar.com'
      { label: 'Labs', href: 'labs/index.html' },
      { label: 'Contact', href: 'contact.html', cta: true },
    ],
  },


  motivationTicker: [
    'DESIGN WITH PURPOSE',
    'FAST, ACCESSIBLE, RESPONSIVE',
    'YOUR BRAND, TRANSLATED TO THE WEB',
    'CLEAN CODE, CLEAR RESULTS',
    'BUILT TO LAST',
  ],

  /**
   * Blueprint rule: only strongest, presentable work here (2–4 projects).
   * category: 'ux' | 'dev' | 'ai'  — controls grouping on the Work page.
   */
  projects: [
    {
      id: 'japanese-dining',
      visual: 'japan',
      number: 'PROJECT 01',
      category: 'ux',
      title: 'Japanese dining experience',
      description: 'A mobile ordering experience that lets diners browse, order and pay without breaking the calm of the room. Designed to raise table turnover without rushing the guest.',
      role: 'UX research, UI design, prototype',
      tags: ['Concept', 'UX Research', 'Mobile App', 'Responsive Web'],
      href: '#',
      linkLabel: 'View case study',
    },
    {
      id: 'kathmandu-makeover',
      visual: 'kathmandu',
      number: 'PROJECT 02',
      category: 'ux',
      title: 'Local business digital makeover',
      description: 'A redesign concept for cafés and hotels that feel authentic in person but invisible online — a modern web presence without losing the soul that makes people walk in.',
      role: 'Research, web design',
      tags: ['Concept', 'Web Design', 'Small Business'],
      href: '#',
      linkLabel: 'View case study',
    },
  ],

  workCategories: [
    { id: 'ux', index: '01', title: 'UX case studies', note: 'Complete research-to-prototype projects.' },
    { id: 'dev', index: '02', title: 'Development projects', note: 'Functional websites and applications.' },
  ],

  /** Services offered — shown on the Work page. */
  services: [
    { title: 'Website design & build', text: 'A complete site, designed, built and launched. No page builders, no bloat.' },
    { title: 'Website refresh', text: 'Your existing site, modernised — faster, responsive, easier to update.' },
    { title: 'Ongoing care', text: 'Updates, tweaks and content changes, so your site never goes stale.' },
  ],

  /** Blueprint: homepage journey timeline. Newest at the bottom, NEXT last. */
  journeyTimeline: [
    { year: '2026', text: 'Started developing a professional portfolio' },
    { year: '2026', text: 'Designed and deployed my first website' },
    { year: '2026', text: 'Learning JavaScript and modern frontend development' },
    { year: '2026', text: 'Building my first UX portfolio case study' },
    { year: 'NEXT', text: 'React, APIs and full interactive applications', next: true },
  ],

  /** Blueprint: concise about preview on the homepage. */
  aboutPreview: {
    heading: 'About me',
    text: 'I’m Yurose, an Information Technology graduate based in Australia. I’m developing a career that combines user experience, design thinking and software development — and preparing for a Masters in Software Development. I enjoy learning by building real projects, documenting my progress and continuously improving my work.',
    linkLabel: 'More about me',
    href: 'about.html',
  },

  /** Journey page entries. Template per entry: built / struggled / solved / learned / next. */
  journal: [
    { number: '001', title: 'Starting my career again at 28', meta: 'CAREER / 6 MIN', href: '#' },
    { number: '002', title: 'Why I studied IT but did not become a developer', meta: 'REFLECTION / 8 MIN', href: '#' },
    { number: '003', title: 'What customer service taught me about UX', meta: 'DESIGN / 5 MIN', href: '#' },
    { number: '004', title: 'What Formula One taught me about consistency', meta: 'MINDSET / 4 MIN', href: '#' },
  ],

  socialLinks: [
    { label: 'Email', href: 'mailto:yurosenagar@gmail.com' },
    { label: 'GitHub', href: '#', ariaLabel: 'GitHub placeholder' },
    { label: 'LinkedIn', href: '#', ariaLabel: 'LinkedIn placeholder' },
    { label: 'Instagram', href: 'https://www.instagram.com/yurosenagar', external: true },
    { label: 'Résumé', href: '#', ariaLabel: 'Resume placeholder' },
  ],

  footer: {
    owner: 'yurose nagar',
    message: 'DESIGNED AND DEVELOPED BY YUROSE NAGAR.',
    backToTop: 'BACK TO TOP ↑',
  },
};
