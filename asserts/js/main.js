$('.owl-carousel').owlCarousel({
   autoplay: true,
   loop: true,
   margin: 10,
   nav: true,
   smartSpeed: 500,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 3
      }
   }
})
// dark
const mainArea = document.querySelector('.main_area');
const header = document.querySelector('.header');
const mode = document.querySelector('.mode');
const dark = document.getElementById('dark');
const showNav = document.getElementById('showNav');
dark.addEventListener('click', () => {
   if (mode.classList.toggle('dark')) {
      dark.setAttribute('class', 'fas fa-moon');
      mainArea.classList.add('dark');
   } else {
      dark.setAttribute('class', 'fas fa-sun');
      mainArea.classList.remove('dark');

   }
});
// topBtn
const topA = document.querySelector('.top');
const topBtn = document.querySelector('.goTop');
window.addEventListener('scroll', () => {
   if (window.scrollY >= 100) {
      topBtn.classList.add('activeTop');
   } else {
      topBtn.classList.remove('activeTop');
   }
   if (window.innerWidth > 768) {
      if (window.scrollY >= 100) {
         header.classList.add('activeheader');
      } else {
         header.classList.remove('activeheader');
      }
   }

});

if (window.innerWidth < 992) {
   showNav.classList.add('activeShowNav');
   header.classList.add('fixd');
   showNav.addEventListener('click', () => {
      if (showNav.classList.toggle('navClick')) {
         header.classList.remove('activeHeader');
      } else {
         header.classList.add('activeHeader');
      }
   });
}