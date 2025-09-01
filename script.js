const navLinks = document.querySelectorAll('[data-menu]'); 
const megaMenu = document.getElementById('megaMenu');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    megaMenu.style.display = 'block';
  });

  link.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!megaMenu.matches(':hover')) {
        megaMenu.style.display = 'none';
      }
    }, 100);
  });
});


megaMenu.addEventListener('mouseleave', () => {
  megaMenu.style.display = 'none';
});
