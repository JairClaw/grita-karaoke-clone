// Grita Karaoke - Main JavaScript
// Scroll animations and interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize mobile nav
  initMobileNav();
  
  // Initialize smooth scroll for anchor links
  initSmoothScroll();
});

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Pause carousel on hover
document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  if (track) {
    container.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    container.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  }
});

// Active nav link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || 
        (currentPath.endsWith('/') && href === 'index.html') ||
        (currentPath.includes(href.replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

// Menu sidebar active state on scroll
if (document.querySelector('.menu-sidebar')) {
  const sections = document.querySelectorAll('.menu-category');
  const sidebarLinks = document.querySelectorAll('.menu-sidebar a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });
    
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
