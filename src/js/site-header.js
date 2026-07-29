const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const menuToggle = siteHeader.querySelector('.menu-toggle');
  const navigation = siteHeader.querySelector('.nav-links');

  if (menuToggle && navigation) {
    siteHeader.classList.add('site-nav-ready');

    const closeMenu = () => {
      menuToggle.classList.remove('is-active');
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

      menuToggle.classList.toggle('is-active', !isOpen);
      navigation.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }
}
