// ----------------------------
// Mobile menu toggle
// ----------------------------
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.classList.add("active");
}

function hideMenu() {
  navLinks.classList.remove("active");
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', hideMenu);
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ----------------------------
// Hero cards rotation
// ----------------------------
const heroCards = document.querySelectorAll('.hero-image .card');
let heroIndex = 0;

setInterval(() => {
  heroCards.forEach((card, i) => {
    card.style.zIndex = i === heroIndex ? 10 : 1;
  });
  heroIndex = (heroIndex + 1) % heroCards.length;
}, 3000);

// ----------------------------
// Project Slider (Center-mode carousel)
// ----------------------------
// ACHIEVEMENTS CAROUSEL (SAFE – ISOLATED)
// ACHIEVEMENTS CAROUSEL (INFINITE LOOP)



const track = document.querySelector('.achievements-track');

if (track) {
  const clone = track.cloneNode(true);
  clone.classList.add("clone-track");
  track.parentNode.appendChild(clone);

  
const cards = document.querySelectorAll('.exp-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; 
    const rotateY = ((x - centerX) / centerX) * 10; 
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg) translateZ(20px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});


}

