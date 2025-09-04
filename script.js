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




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,  
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {   
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {   
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
