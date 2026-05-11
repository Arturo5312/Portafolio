// ── Fade-in on scroll ──────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// ── Nav active link highlight on scroll ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--gold-light)'
      : '';
  });
});
