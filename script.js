document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-menu]');
    const megaMenu = document.getElementById('megaMenu');
    const navList = document.querySelector('.navbar-nav');
    const togglerBtn = document.querySelector('.navbar-toggler');
    const togglerIcon = togglerBtn.querySelector('.nav-tgl-btn');

    const isMobile = () => window.innerWidth <= 991;

    
    if (!isMobile()) {
        let hideTimeout;
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout);
                megaMenu.style.display = 'block';
            });
            link.addEventListener('mouseleave', () => {
                hideTimeout = setTimeout(() => {
                    if (!megaMenu.matches(':hover')) megaMenu.style.display = 'none';
                }, 100);
            });
        });
        megaMenu.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
        megaMenu.addEventListener('mouseleave', () => megaMenu.style.display = 'none');
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (isMobile()) {
                e.preventDefault();
                megaMenu.classList.add('show');
                navList.classList.add('hide');
            }
        });
    });

   
    megaMenu.addEventListener('click', e => {
        if (e.target.classList.contains('mega-menu-back')) {
            megaMenu.classList.remove('show');
            navList.classList.remove('hide');
        }
    });

    
    togglerBtn.addEventListener('click', () => {
        const isExpanded = togglerBtn.classList.toggle('active');
        if (isExpanded) {
            togglerIcon.classList.remove('fa-align-right');
            togglerIcon.classList.add('fa-xmark');
        } else {
            togglerIcon.classList.remove('fa-xmark');
            togglerIcon.classList.add('fa-align-right');
        }
    });

    
    document.addEventListener('click', e => {
        if (isMobile() && !megaMenu.contains(e.target) && !e.target.closest('[data-menu]') && !e.target.closest('.navbar-toggler')) {
            megaMenu.classList.remove('show');
            navList.classList.remove('hide');
        }
    });

    
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            megaMenu.classList.remove('show');
            navList.classList.remove('hide');
            megaMenu.style.display = 'none';
        }
    });
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



//  var iso = new Isotope('.grid', {
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows' 
//   });


//   document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', function() {
//       let filterValue = this.getAttribute('data-filter');
//       iso.arrange({ filter: filterValue });
//     });
//   });


const filterButtons = document.querySelectorAll('.btn-group .btn');
  const gridItems = document.querySelectorAll('.grid-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      let filterValue = this.textContent.toLowerCase().replace(/\s+/g, '');

      gridItems.forEach(item => {
        let category = item.querySelector('p').textContent.toLowerCase().replace(/\s+/g, '');

        if (filterValue === 'all' || category.includes(filterValue)) {
          item.style.display = "block"; 
        } else {
          item.style.display = "none";
        }
      });
    });
  });


