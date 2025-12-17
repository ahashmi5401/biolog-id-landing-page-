  lucide.createIcons();
// form data
document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value
            };
            
            alert('Form submitted!\n\nFirst Name: ' + formData.firstName + '\nLast Name: ' + formData.lastName + '\nEmail: ' + formData.email);
            
            // Reset form
            this.reset();
        });

// active
const navLinks = document.querySelectorAll('.nav-link');
const hero = document.getElementById('hero');
const currentPage = window.location.pathname.split('/').pop();
const heroImg = document.getElementById('heroImg');

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');

  // Active state on page load
  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');

    // Set hero background on load
    const heroImg = link.dataset.hero;
    if (hero && heroImg) {
      hero.style.backgroundImage = `url(${heroImg})`;
      heroImg.style.display = 'none';
    }
  }

  // Change on click (before navigation)
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const heroImg = link.dataset.hero;
    if (hero && heroImg) {
      hero.style.backgroundImage = `url(${heroImg})`;
      heroImg.style.display = 'none';
    }
  });
});


// lenis smooth scroll
const lenis = new Lenis({
    duration: 0.7,       // Scroll duration (smoother = higher)
    easing: (t) => t,    // Linear easing, you can customize
    smooth: true,        // Enable smooth scrolling
    direction: 'vertical' // Could be 'horizontal' if needed
  });

  // Function to run on each frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);