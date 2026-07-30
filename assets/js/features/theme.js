// File: assets/js/features/theme.js
// Loaded WITHOUT defer, right in <head>, so the theme applies before first paint.

(function applyInitialTheme() {
  let stored = null;
  try { stored = localStorage.getItem('yurose-theme'); } catch (error) { /* private mode */ }
  // Light is the default for first-time visitors; their toggle choice is remembered.
  document.documentElement.dataset.theme = stored || 'light';
})();

window.YuroseSite = window.YuroseSite || {};
window.YuroseSite.features = window.YuroseSite.features || {};

window.YuroseSite.features.initThemeToggle = function initThemeToggle() {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;

  const themeColor = document.querySelector('meta[name="theme-color"]');

  function refresh() {
    const theme = document.documentElement.dataset.theme;
    button.textContent = theme === 'light' ? '☾' : '☀';
    button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    if (themeColor) themeColor.content = theme === 'light' ? '#ffffff' : '#0b1730';
  }

  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('yurose-theme', next); } catch (error) { /* private mode */ }
    refresh();
  });

  refresh();
};
