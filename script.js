// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ===== SCROLL ANIMATIONS =====
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger animation for siblings
      const siblings = Array.from(entry.target.parentElement.children);
      const index = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animateElements.forEach(el => observer.observe(el));

// ===== MOOD TRACKER =====
const moodLabels = {
  1: '😢 Very Low — It\'s okay, we\'re here for you.',
  2: '😟 Low — Rough day. You\'re not alone.',
  3: '😐 Neutral — Steady. That\'s progress too.',
  4: '🙂 Good — Nice! Keep going.',
  5: '😊 Great — Wonderful! You\'re doing amazing.'
};

let selectedMood = null;

function selectMood(btn, level) {
  // Clear previous selection
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedMood = level;
  document.getElementById('moodLabel').textContent = moodLabels[level];
  document.getElementById('logMoodBtn').style.display = 'inline-block';
}

function logMood() {
  if (!selectedMood) return;

  // Update the chart bar for today (Sunday column)
  const todayBar = document.querySelector('.today-bar');
  const heightMap = { 1: '20%', 2: '35%', 3: '55%', 4: '75%', 5: '95%' };
  const colorMap = { 1: '#ef4444', 2: '#f97316', 3: '#f59e0b', 4: '#22c55e', 5: '#3b82f6' };

  todayBar.style.height = heightMap[selectedMood];
  todayBar.style.background = colorMap[selectedMood];
  todayBar.style.borderStyle = 'solid';

  // Show success message
  document.getElementById('logMoodBtn').style.display = 'none';
  document.getElementById('moodLogged').style.display = 'block';
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
  document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== SMOOTH SCROLL ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = '#e8a020';
    }
  });
});

// ===== COMMUNITY CIRCLES HOVER EFFECT =====
document.querySelectorAll('.circle-badge').forEach(badge => {
  badge.addEventListener('click', () => {
    badge.style.background = '#e8a020';
    badge.style.color = '#0d1b2a';
    badge.style.borderColor = '#e8a020';
    setTimeout(() => {
      badge.style.background = '';
      badge.style.color = '';
      badge.style.borderColor = '';
    }, 1500);
  });
});

// ===== PILLAR CARD COUNTER =====
// Animate stat numbers counting up
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const isSymbol = isNaN(parseInt(target));
  if (isSymbol) return;
  const num = parseInt(target);
  const increment = num / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= num) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (target.includes('+') ? '+' : '');
    }
  }, 16);
}

// Trigger counters when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(stat => {
        animateCounter(stat, stat.textContent);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.querySelector('.hero-content').style.animation = 'fadeUp 0.9s ease both';
});