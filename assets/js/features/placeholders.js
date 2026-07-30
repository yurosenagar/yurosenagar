// File: assets/js/features/placeholders.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.features = window.YuroseSite.features || {};

window.YuroseSite.features.disablePlaceholderLinks = function disablePlaceholderLinks() {
  window.YuroseSite.dom.selectAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });
};
