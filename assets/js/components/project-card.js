// File: assets/js/components/project-card.js

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.components = window.YuroseSite.components || {};

window.YuroseSite.components.renderProjects = function renderProjects() {
  const { projects } = window.YuroseSite.content;
  const { escapeHtml, mount, selectAll } = window.YuroseSite.dom;

  const visualTemplates = {
    japan: `
      <div class="project-visual" aria-label="Japanese restaurant app interface concept">
        <div class="phone phone-a">
          <div class="phone-notch"></div>
          <div class="phone-screen menu-screen">
            <div class="mini-nav"><span>凪</span><span>MENU</span></div>
            <h3>Seasonal<br>Omakase</h3>
            <div class="food-row"><span>01</span><b>Salmon Nigiri</b><i>$12</i></div>
            <div class="food-row"><span>02</span><b>Miso Eggplant</b><i>$10</i></div>
            <div class="food-row"><span>03</span><b>Matcha Tiramisu</b><i>$9</i></div>
            <button>ADD TO TABLE</button>
          </div>
        </div>
        <div class="japan-mark">食<br>体<br>験</div>
      </div>
    `,
    kathmandu: `
      <div class="project-visual" aria-label="Local cafe website concept">
        <div class="ktm-grid"></div>
        <div class="ktm-coordinate">OPEN FROM<br>SEVEN AM</div>
        <div class="ktm-title"><span>CAFÉ / HOME</span><strong>THE CORNER<br>CAFÉ</strong></div>
        <div class="ktm-window">
          <div class="window-bar"><span></span><span></span><span></span></div>
          <div class="window-content">
            <small>LOCAL STORIES / 02</small>
            <h3>A neighbourhood café built for slow mornings.</h3>
            <p>Local ingredients. Contemporary design. Familiar warmth.</p>
          </div>
        </div>
      </div>
    `,
  };

  const buildCard = (project) => {
    const tags = project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('');
    const role = project.role ? `<div class="project-role"><span>MY ROLE</span> ${escapeHtml(project.role)}</div>` : '';
    const link = project.href
      ? `<a class="project-link" href="${escapeHtml(project.href)}">${escapeHtml(project.linkLabel || 'View project')} <span>↗</span></a>`
      : '';
    return `
      <article class="project-card project-${escapeHtml(project.visual)} reveal" id="${escapeHtml(project.id)}">
        ${visualTemplates[project.visual] || ''}
        <div class="project-meta">
          <div><span>${escapeHtml(project.number)}</span><h3>${escapeHtml(project.title)}</h3></div>
          <div>
            <p>${escapeHtml(project.description)}</p>
            ${role}
            <ul>${tags}</ul>
            ${link}
          </div>
        </div>
      </article>
    `;
  };

  // A grid with data-category="ux|dev|ai" shows only that category (Work page).
  // A plain #projects-grid shows everything (homepage).
  selectAll('.projects-grid').forEach((grid) => {
    const category = grid.dataset.category;
    const list = category ? projects.filter((p) => p.category === category) : projects;
    mount(grid, list.map(buildCard).join(''));
  });
};
