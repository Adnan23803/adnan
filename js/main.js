/* ============================================
   Adnan Adamou — Portfolio JS
   ============================================ */

(function () {
  'use strict';

  // ---- Language toggle (FR / EN) ----
  const STORAGE_KEY = 'aa-lang';
  const supported = ['fr', 'en'];

  function setLang(lang) {
    if (!supported.includes(lang)) lang = 'fr';
    document.body.classList.remove('lang-fr', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', b.dataset.lang === lang);
    });
  }

  function initLang() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    const browserLang = (navigator.language || 'fr').slice(0, 2);
    const initial = saved || (supported.includes(browserLang) ? browserLang : 'fr');
    setLang(initial);

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
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
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
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
