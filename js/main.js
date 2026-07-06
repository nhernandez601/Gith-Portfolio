/* ==========================================================================
   main.js
   Small, dependency-free behaviors for the portfolio site:
   1. Light/dark theme toggle (persisted in localStorage)
   2. Mobile nav open/close
   3. Active nav-link highlighting while scrolling
   4. Footer year
   No build step, no libraries -- just plain JS.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. THEME TOGGLE
     The initial theme is already set (before paint) by the inline
     script in index.html <head>. This just wires up the button.
     ------------------------------------------------------------------ */
  var themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ------------------------------------------------------------------
     2. MOBILE NAV
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a nav link is tapped.
    siteNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------
     3. ACTIVE NAV-LINK HIGHLIGHTING
     Highlights the nav link for whichever section is in view.
     ------------------------------------------------------------------ */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     4. FOOTER YEAR
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
