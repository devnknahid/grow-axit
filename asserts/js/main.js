// dark
const mainArea = document.querySelector('.main_area');
const header = document.querySelector('.header');
const mode = document.querySelector('.mode');
const dark = document.getElementById('dark');
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
topBtn.addEventListener('click', () => {
   top.setAttribute('href', '#home');
});
window.addEventListener('scroll', () => {
   if (window.scrollY >= 100) {
      topBtn.classList.add('activeTop');
      header.classList.add('activeheader');
   } else {
      topBtn.classList.remove('activeTop');
      header.classList.remove('activeheader');


   }
});