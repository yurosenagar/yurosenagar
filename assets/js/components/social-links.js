// File: assets/js/components/social-links.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderSocialLinks = function renderSocialLinks() {
  const { socialLinks } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  const links = socialLinks.map((link) => {
    const externalAttributes = link.external ? ' target="_blank" rel="noreferrer"' : '';
    const ariaLabel = link.ariaLabel ? ` aria-label="${escapeHtml(link.ariaLabel)}"` : '';
    return `<a href="${escapeHtml(link.href)}"${ariaLabel}${externalAttributes}>${escapeHtml(link.label)}</a>`;
  }).join('');

  mount('#social-links', links);
};
