// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
  });

  // Close mobile nav when clicking anywhere outside or on a nav link
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}


// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navA = document.querySelectorAll('.nav-links a');
const onScroll = () => {
  let current = sections[0].id;
  const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10;
  if (atBottom) {
    current = sections[sections.length - 1].id;
  } else {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120) current = sec.id;
    });
  }
  navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
document.addEventListener('scroll', onScroll);
onScroll();

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Skill bar fill on view
const skillsPanel = document.getElementById('skillsPanel');
const skillIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.skill-row').forEach(row => {
        row.querySelector('.skill-fill').style.width = row.dataset.pct + '%';
      });
      skillIo.disconnect();
    }
  });
}, { threshold: 0.3 });
if (skillsPanel) skillIo.observe(skillsPanel);

// Contact form (front-end only placeholder)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Message ready — connect a backend or mailto to actually send this.';
});

// CV download placeholder
document.getElementById('downloadCv').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Add your resume PDF link here to enable this button.');
});