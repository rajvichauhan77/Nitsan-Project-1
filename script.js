const navLinks = document.querySelectorAll('[data-menu]');
const megaMenu = document.getElementById('megaMenu');
let isMobile = window.matchMedia('(max-width: 991px)').matches;

if (isMobile) {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const isMenuOpen = megaMenu.style.display === 'block';
            megaMenu.style.display = isMenuOpen ? 'none' : 'block';
        });
    });

    document.addEventListener('click', (e) => {
        if (!megaMenu.contains(e.target) && !e.target.closest('[data-menu]')) {
            megaMenu.style.display = 'none';
        }
    });

} else {
    let hideTimeout;

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            megaMenu.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                if (!megaMenu.matches(':hover')) {
                    megaMenu.style.display = 'none';
                }
            }, 100)
        });
    });

    megaMenu.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        megaMenu.style.display = 'block';
    });

    megaMenu.addEventListener('mouseleave', () => {
        megaMenu.style.display = 'none';
    });
}


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


//   document.addEventListener("DOMContentLoaded", function () {
//   // ✅ Only targets hero section hex grid
//   var heroGrid = document.querySelector('.hex-grid');
//   if(heroGrid){
//     new Isotope(heroGrid, {
//       itemSelector: '.hex-item',
//       layoutMode: 'masonry',
//       masonry: {
//         fitWidth: true,
//         gutter: 15
//       }
//     });
//   }
// });