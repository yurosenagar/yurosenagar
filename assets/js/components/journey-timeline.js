// File: assets/js/components/journey-timeline.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderJourneyTimeline = function renderJourneyTimeline() {
  const { journeyTimeline } = window.YuroseSite.content;
  const { escapeHtml, mount } = window.YuroseSite.dom;

  const rows = journeyTimeline.map((entry) => `
    <div class="timeline-row ${entry.next ? 'timeline-next' : ''} reveal">
      <span class="timeline-year">${escapeHtml(entry.year)}</span>
      <span class="timeline-dot" aria-hidden="true"></span>
      <p>${escapeHtml(entry.text)}</p>
    </div>
  `).join('');

  mount('#journey-timeline', rows);
};
