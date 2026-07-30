// File: assets/js/components/motivation-ticker.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderMotivationTicker = function renderMotivationTicker() {
  const { motivationTicker } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  const items = motivationTicker.map((message, index) => `
    <span class="ticker-item">
      <i class="ticker-dot ticker-dot-${(index % 3) + 1}" aria-hidden="true"></i>
      ${escapeHtml(message)}
    </span>
  `).join('');

  mount('#motivation-ticker', `
    <section class="motivation-ticker" aria-label="Motivation messages">
      <div class="ticker-track">
        <div class="ticker-group">${items}</div>
        <div class="ticker-group" aria-hidden="true">${items}</div>
      </div>
    </section>
  `);
};
