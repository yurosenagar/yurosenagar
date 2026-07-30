// File: assets/js/components/journal-list.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderJournalList = function renderJournalList() {
  const { journal } = window.YuroseSite.content;
  const { escapeHtml, mount, select } = window.YuroseSite.dom;

  // Optional: <div id="journal-list" data-limit="2"> shows only the first N entries.
  const container = select('#journal-list');
  if (!container) return;
  const limit = Number(container.dataset.limit) || journal.length;

  const rows = journal.slice(0, limit).map((entry) => `
    <a class="journal-row reveal" href="${escapeHtml(entry.href)}">
      <span>${escapeHtml(entry.number)}</span>
      <strong>${escapeHtml(entry.title)}</strong>
      <i>${escapeHtml(entry.meta)}</i>
      <b>↗</b>
    </a>
  `).join('');

  mount('#journal-list', rows);
};
