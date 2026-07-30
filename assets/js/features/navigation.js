// File: assets/js/features/navigation.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.features = window.YuroseSite.features || {};

window.YuroseSite.features.initNavigation = function initNavigation() {
  const { select, selectAll } = window.YuroseSite.dom;
  const navToggle = select('.nav-toggle');
  const navLinks = select('.nav-links');

  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks?.classList.toggle('open', !expanded);
  });

  selectAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle?.setAttribute('aria-expanded', 'false');
      navLinks?.classList.remove('open');
    });
  });
};
