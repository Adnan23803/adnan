/* ============================================
   Adnan Adamou — Portfolio JS
   ============================================ */

(function () {
  'use strict';

  // ---- Language toggle (FR / EN) ----
  // Les pages anglaises sont de vrais fichiers statiques sous /en/ (générés par
  // tools/build.js). La langue, le canonical, les hreflang et les métadonnées sont
  // donc déjà corrects dans le HTML servi : ce script ne les modifie jamais.
  // Il se contente de refléter l'état courant et de naviguer vers l'autre version.

  function frenchPath() {
    const path = window.location.pathname.replace(/^\/en(?=\/|$)/, '');
    return path === '' ? '/' : path;
  }

  function englishPath() {
    const path = frenchPath();
    return path === '/' ? '/en/' : '/en' + path;
  }

  function initLang() {
    const current = /^\/en(?:\/|$)/.test(window.location.pathname) ? 'en' : 'fr';

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      const lang = btn.dataset.lang;
      const isCurrent = lang === current;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
      btn.addEventListener('click', () => {
        if (isCurrent) return;
        window.location.href = lang === 'en' ? englishPath() : frenchPath();
      });
    });
  }

  // ---- Mobile nav toggle ----
  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    // close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 820) {
          links.classList.remove('is-open');
          toggle.classList.remove('is-open');
        }
      });
    });
  }

  // ---- Mark active nav link ----
  function initActiveNav() {
    const path = (frenchPath().split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('is-active');
      }
    });
  }

  // ---- Scroll-triggered reveals ----
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  // ---- Update footer year ----
  function initYear() {
    const y = document.querySelector('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ---- YouTube inline player ----
  window.playYT = function (el, id) {
    var container = el.classList.contains('video-card') ? el.querySelector('.video-thumb') : el;
    if (!container) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    iframe.setAttribute('allow', 'accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    container.innerHTML = '';
    container.appendChild(iframe);
    el.onclick = null;
    el.style.cursor = 'default';
  };

  // ---- Init on DOM ready ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLang(); initNav(); initActiveNav(); initReveal(); initYear();
    });
  } else {
    initLang(); initNav(); initActiveNav(); initReveal(); initYear();
  }
})();
