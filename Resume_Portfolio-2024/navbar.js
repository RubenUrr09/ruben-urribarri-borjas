
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const navbarMenu = document.getElementById('navbarMenu');
    const body = document.body;
  
    // Create overlay element
    let overlay = document.querySelector('.navbar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'navbar-overlay';
      document.body.appendChild(overlay);
    }
  
    // Toggle function
    function toggleNav() {
      const isOpen = navbarMenu.classList.toggle('show');
      hamburgerButton.classList.toggle('active', isOpen);
      overlay.classList.toggle('show', isOpen);
      body.style.overflow = isOpen ? 'hidden' : '';
    }
  
    // Event: Click hamburger
    hamburgerButton.addEventListener('click', toggleNav);
  
    // Event: Click outside (overlay)
    overlay.addEventListener('click', toggleNav);
  
    // Event: Press Escape to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbarMenu.classList.contains('show')) {
        toggleNav();
      }
    });
  
    // Responsive check on resize
    function resetMenuOnResize() {
      if (window.innerWidth >= 769) {
        navbarMenu.classList.remove('show');
        hamburgerButton.classList.remove('active');
        overlay.classList.remove('show');
        body.style.overflow = '';
      }
    }
  
    window.addEventListener('resize', resetMenuOnResize);
    resetMenuOnResize(); // run once on load
  });
  