// File: assets/js/components/services.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderServices = function renderServices() {
  const { services } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  const cards = services.map((service) => `
    <div class="reveal">
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.text)}</p>
    </div>
  `).join('');

  mount('#services-grid', cards);
};
