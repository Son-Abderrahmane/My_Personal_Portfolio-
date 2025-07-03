// Navbar hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll for nav links
const navLinkEls = document.querySelectorAll('.nav-links a');
navLinkEls.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open');
    }
  });
});

// Section reveal on scroll
function revealOnScroll() {
  const revealEls = document.querySelectorAll('section, .project-card, .resume-block, .contact-form');
  const windowHeight = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form mailto
function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const mailtoLink =
    'mailto:abderrahmanmlih9@gmail.com' +
    '?subject=Portfolio Contact from ' + encodeURIComponent(name) +
    '&body=' + encodeURIComponent('Email: ' + email + '\n\n' + message);
  window.location.href = mailtoLink;
}

// Contact card click handlers
const emailCard = document.getElementById('email-card');
const githubCard = document.getElementById('github-card');
const linkedinCard = document.getElementById('linkedin-card');

if (emailCard) {
  emailCard.style.cursor = 'pointer';
  emailCard.addEventListener('click', () => {
    window.location.href = 'mailto:abderrahmanmlih9@gmail.com';
  });
}
if (githubCard) {
  githubCard.style.cursor = 'pointer';
  githubCard.addEventListener('click', () => {
    window.open('https://github.com/Son-Abderrahmane', '_blank');
  });
}
if (linkedinCard) {
  linkedinCard.style.cursor = 'pointer';
  linkedinCard.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/abderrahmane-mlih', '_blank');
  });
}

// Navbar blur on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// EmailJS contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_nfp2d3i', 'template_9ainiz4', this)
      .then(function() {
        alert('Message sent successfully!');
        contactForm.reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.log(error);
      });
  });
} 