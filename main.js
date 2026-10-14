/* Verdant Studio - main.js (Phase 1): mobile menu + header scroll line */
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var behind = document.querySelectorAll('main, .site-footer, .skip-link');
  var desktop = window.matchMedia('(min-width: 960px)');

  function setMenu(open, returnFocus) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    behind.forEach(function (el) { el.inert = open; });
    if (!open && returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false, true);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  desktop.addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
