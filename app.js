/* eslint-disable no-unused-vars */
const mainMenu = document.querySelector('.navbar');
const closeMenu = document.getElementById('menu-icon2');
const openMenu = document.getElementById('menu-icon1');
// eslint-disable-next-line camelcase
const menu_items = document.querySelectorAll('.navbar li a');

// close menu when you click on a menu item
function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}
function close() {
  mainMenu.style.top = '-440px';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// eslint-disable-next-line no-undef
const swiper = new Swiper('.home ', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
