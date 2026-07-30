// File: assets/js/components/navbar.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderNavbar = function renderNavbar() {
  const { navigation } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = navigation.links.map((link) => {
    const isActive = link.href === currentPage;
    const classes = [link.cta ? 'nav-cta' : '', isActive ? 'active' : ''].filter(Boolean).join(' ');
    return `
    <a href="${escapeHtml(link.href)}" class="${classes}"${isActive ? ' aria-current="page"' : ''}>
      ${escapeHtml(link.label)}
    </a>
  `;
  }).join('');

  mount('#site-navbar', `
    <header class="site-header" id="top">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="index.html" aria-label="yurose nagar home">
          ${escapeHtml(navigation.brand)}
        </a>
        <button class="nav-toggle" aria-controls="nav-links" aria-expanded="false" aria-label="Open navigation">
          <span></span><span></span>
        </button>
        <div class="nav-links" id="nav-links">
          ${links}
          <button class="theme-toggle" type="button" aria-label="Switch theme">☀</button>
        </div>
      </nav>
    </header>
  `);
};
