const mainMenu = document.querySelector('.navbar');
const closeMenu = document.getElementById('menu-icon2');
const openMenu = document.getElementById('menu-icon1');
const closeIcon = document.querySelector('.fa-xmark');
const opeIcon = document.querySelector('.fa-bars');

function show() {
  closeIcon.style.display = 'block';
  opeIcon.style.display = 'none';

  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-440px';
  closeIcon.style.display = 'none';
  opeIcon.style.display = 'block';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// eslint-disable-next-line no-undef, no-unused-vars
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
