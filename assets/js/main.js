// File: assets/js/main.js

window.addEventListener('DOMContentLoaded', () => {
  const { components, features } = window.YuroseSite;

  // Reusable UI components
  components.renderNavbar();
  components.renderMotivationTicker();
  components.renderProjects();
  components.renderServices();
  components.renderJourneyTimeline();
  components.renderJournalList();
  components.renderSocialLinks();
  components.renderFooter();

  // Behaviour and small interactions
  features.initNavigation();
  features.initThemeToggle();
  features.initRevealAnimations();
  features.disablePlaceholderLinks();

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
});
