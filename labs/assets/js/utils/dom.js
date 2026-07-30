// File: labs/assets/js/utils/dom.js

window.YuroseLabs = window.YuroseLabs || {};

window.YuroseLabs.dom = {
  /** @param {string} selector @param {ParentNode} [scope=document] */
  select(selector, scope = document) {
    return scope.querySelector(selector);
  },

  /** @param {string} selector @param {ParentNode} [scope=document] */
  selectAll(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
  },

  /** @param {string|Element} target @param {string} html */
  mount(target, html) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return null;
    element.innerHTML = html;
    return element;
  },

  /** Prevent user-editable text from being interpreted as HTML. */
  escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  },
};
