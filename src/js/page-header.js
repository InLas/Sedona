const toggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav__list');

mainNav.classList.add('main-nav__list--closed');
toggle.classList.remove('main-nav__toggle--no-js');

if (toggle) {
  toggle.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav__list--closed');
    toggle.classList.toggle('main-nav__toggle--opened');
  });
};