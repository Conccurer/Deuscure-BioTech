// ===================================
// DEUSCURE BIOTECH - MAIN JAVASCRIPT
// ===================================

// Loading animation
function initLoadingAnimation() {
  const splashScreen = document.querySelector('.splash-screen');
  
  if (splashScreen) {
    // Hide splash screen after page loads
    window.addEventListener('load', function() {
      setTimeout(function() {
        splashScreen.classList.add('hidden');
      }, 1200);
    });
  }
}

// Set active navigation link
document.addEventListener('DOMContentLoaded', function() {
  initLoadingAnimation();
  setActiveNavLink();
  setupMobileMenu();
});

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navUl = document.querySelector('nav ul');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navUl.classList.toggle('active');
    });
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
