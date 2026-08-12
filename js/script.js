// script.js

// Initialize AOS animations
AOS.init({
    duration: 1200,
    once: true,
  });
  
  // Smooth scroll when clicking navbar links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Circle Progress Animation for Skills Section
  document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
      const progress = circle.getAttribute('data-progress');
      circle.style.setProperty('--percent', `${progress * 3.6}deg`);
    });
  });
  