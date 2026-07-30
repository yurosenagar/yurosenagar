// File: labs/assets/js/main.js

window.addEventListener('DOMContentLoaded', () => {
  const { components, features, site, dom } = window.YuroseLabs;

  // Header brand + back link (brand allows an <em> highlight, so it is not escaped)
  dom.mount('#labs-brand', site.brand);
  const backLink = dom.select('#labs-back');
  if (backLink) {
    backLink.textContent = site.backLink.label;
    backLink.href = site.backLink.href;
  }

  // Footer
  dom.mount('#labs-footer-left', dom.escapeHtml(site.footer.left));
  dom.mount('#labs-footer-right', dom.escapeHtml(site.footer.right));

  // Experiment cards + interactions
  components.renderExperiments();
  features.initRevealAnimations();

  // Placeholder links should not jump the page
  dom.selectAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  const year = dom.select('#year');
  if (year) year.textContent = String(new Date().getFullYear());
});
