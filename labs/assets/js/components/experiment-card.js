// File: labs/assets/js/components/experiment-card.js

window.YuroseLabs = window.YuroseLabs || {};
window.YuroseLabs.components = window.YuroseLabs.components || {};

window.YuroseLabs.components.renderExperiments = function renderExperiments() {
  const { experiments } = window.YuroseLabs;
  const { escapeHtml, mount } = window.YuroseLabs.dom;

  // Blueprint status labels: unfinished work looks intentional, not abandoned.
  const statusLabels = {
    learning: 'LEARNING',
    prototype: 'PROTOTYPE',
    completed: 'COMPLETED',
    improving: 'IMPROVING',
    archived: 'ARCHIVED',
  };

  const cards = experiments.map((experiment) => {
    const tags = experiment.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('');
    const links = [experiment.demo, experiment.code]
      .filter(Boolean)
      .map((link) => `<a class="experiment-link" href="${escapeHtml(link.href)}">${escapeHtml(link.label)} <span>↗</span></a>`)
      .join('');
    return `
      <article class="experiment-card reveal">
        <div class="experiment-top">
          <span class="experiment-number">${escapeHtml(experiment.number)} · ${escapeHtml(experiment.date)}</span>
          <span class="experiment-status ${escapeHtml(experiment.status)}">${statusLabels[experiment.status] || ''}</span>
        </div>
        <h3>${escapeHtml(experiment.title)}</h3>
        <div class="experiment-learning"><span>WHAT I WAS LEARNING</span>${escapeHtml(experiment.learning)}</div>
        <p>${escapeHtml(experiment.description)}</p>
        <ul class="experiment-tags">${tags}</ul>
        <div class="experiment-links">${links}</div>
      </article>
    `;
  }).join('');

  mount('#experiments-grid', cards);
};
