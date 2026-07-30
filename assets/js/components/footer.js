// File: assets/js/components/footer.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderFooter = function renderFooter() {
  const { footer } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  mount('#site-footer', `
    <footer>
      <div class="shell footer-inner">
        <span>© <span id="year"></span> ${escapeHtml(footer.owner)}</span>
        <span>${escapeHtml(footer.message)}</span>
        <a href="#top">${escapeHtml(footer.backToTop)}</a>
      </div>
    </footer>
  `);
};
