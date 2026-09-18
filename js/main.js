/* ============================================
   ALEJANDRO MEDINA — MENTOR ACADÉMICO
   JavaScript Global
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // --- Mobile menu ---
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileClose = document.querySelector('.mobile-overlay__close');
  const mobileLinks = document.querySelectorAll('.mobile-overlay a');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked if it was closed
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

// --- Efectos visuales (2026-09-18): haz del hero, linea de progreso en fases,
// --- parallax en imagenes de fase y pulso del CTA final.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Haz de luz del hero
  var hero = document.querySelector('.hero');
  if (hero) {
    var beam = document.createElement('div');
    beam.className = 'fx-hero-beam';
    hero.appendChild(beam);
  }

  // Linea de progreso en la seccion de fases
  var firstPhase = document.querySelector('.phase-row');
  var fill = null, phasesBox = null;
  if (firstPhase) {
    phasesBox = firstPhase.parentElement;
    phasesBox.style.position = 'relative';
    var track = document.createElement('div');
    track.className = 'fx-phases-track';
    fill = document.createElement('div');
    fill.className = 'fx-phases-track__fill';
    track.appendChild(fill);
    phasesBox.appendChild(track);
  }

  // Pulso en el CTA final: el ultimo boton primario que agenda llamada
  // (tidycal/tally), para no marcar botones de otro tipo como el del CV
  var buttons = document.querySelectorAll('a.btn-primary[href*="tidycal"], a.btn-primary[href*="tally"]');
  if (buttons.length) buttons[buttons.length - 1].classList.add('fx-pulse');

  // Scroll: progreso de la linea + parallax de las imagenes de fase
  var phaseImgs = document.querySelectorAll('.phase-row__image img');
  var ticking = false;

  function update() {
    ticking = false;
    var vh = window.innerHeight;

    if (fill && phasesBox) {
      var r = phasesBox.getBoundingClientRect();
      var progress = (vh * 0.6 - r.top) / r.height;
      progress = Math.max(0, Math.min(1, progress));
      fill.style.height = (progress * 100) + '%';
    }

    for (var i = 0; i < phaseImgs.length; i++) {
      var img = phaseImgs[i];
      var rect = img.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      var offset = (center - vh / 2) / (vh / 2);
      var shift = Math.max(-1.4, Math.min(1.4, offset)) * -16;
      img.style.setProperty('--fx-parallax', shift.toFixed(1));
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

// --- Efectos premium V2 (2026-09-18): barra de progreso de lectura.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var bar = document.createElement('div');
  bar.className = 'fx-scroll-progress';
  var barFill = document.createElement('div');
  barFill.className = 'fx-scroll-progress__fill';
  bar.appendChild(barFill);
  document.body.appendChild(bar);

  var ticking2 = false;

  function updateProgress() {
    ticking2 = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    barFill.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }

  window.addEventListener('scroll', function () {
    if (!ticking2) {
      ticking2 = true;
      requestAnimationFrame(updateProgress);
    }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
