// File: labs/assets/js/features/reveal.js

window.YuroseLabs = window.YuroseLabs || {};
window.YuroseLabs.features = window.YuroseLabs.features || {};

window.YuroseLabs.features.initRevealAnimations = function initRevealAnimations() {
  const { selectAll } = window.YuroseLabs.dom;

  if (!('IntersectionObserver' in window)) {
    selectAll('.reveal').forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  selectAll('.reveal').forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(element);
  });
};
