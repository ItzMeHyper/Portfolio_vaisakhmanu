// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.right = '20px';
  navLinks.style.background = 'rgba(7,11,20,0.97)';
  navLinks.style.border = '1px solid var(--panel-border)';
  navLinks.style.borderRadius = '14px';
  navLinks.style.padding = '10px';
});

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