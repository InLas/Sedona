'use strict'

const toggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav__list');

mainNav.classList.add('main-nav__list--closed');
toggle.classList.remove('main-nav__toggle--no-js');

if (toggle) {
  toggle.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav__list--closed');
    toggle.classList.toggle('main-nav__toggle--opened');
  });
};;
const likeBtns = document.querySelectorAll('.photographs__likes-btn');

if (likeBtns) {
  likeBtns.forEach(likeBtn => {
    const likeIcon = likeBtn.querySelector('.photographs__likes-icon');
    const likesNumber = likeBtn.querySelector('.photographs__likes-number');

    likeBtn.onclick = function () {
      if (likeIcon.classList.contains('photographs__likes-icon--active')) {
        likeIcon.classList.remove('photographs__likes-icon--active');
        likesNumber.textContent--;
      } else {
        likeIcon.classList.add('photographs__likes-icon--active');
        likesNumber.textContent++;
      }
    }
  });
}

;
const form = document.querySelector('.form__review');

if (form) {
  const firstName = form.querySelector('[name=name]');
  const lastName = form.querySelector('[name=last-name]');
  const phone = form.querySelector('[name=phone]');
  const mail = form.querySelector('[name=mail]');
  const inputs = form.querySelectorAll('.data__input');
  const page = document.querySelector('.page');
  const popupSucsess = document.querySelector('.popup--sucsess');
  const popupFail = document.querySelector('.popup--fail');
  const okBtns = document.querySelectorAll('.popup__btn');

  form.onsubmit = function (evt) {
    evt.preventDefault();
    page.classList.add('page--popup');

    if (!(firstName.value && lastName.value && phone.value && mail.value)) {
      popupFail.classList.add('popup--show');

      if (!firstName.value) {
        firstName.classList.add('data__input--fail');
      } else {
        firstName.classList.remove('data__input--fail');
      }

      if (!lastName.value) {
        lastName.classList.add('data__input--fail');
      } else {
        lastName.classList.remove('data__input--fail');
      }

      if (!phone.value) {
        phone.classList.add('data__input--fail');
      } else {
        phone.classList.remove('data__input--fail');
      }

      if (!mail.value) {
        mail.classList.add('data__input--fail');
      } else {
        mail.classList.remove('data__input--fail');
      }
    } else {
      popupSucsess.classList.add('popup--show');
      firstName.classList.remove('data__input--fail');
      lastName.classList.remove('data__input--fail');
      phone.classList.remove('data__input--fail');
      mail.classList.remove('data__input--fail');

      inputs.forEach(input => {
        input.value = '';
        input.checked = false;
      });
    }
  };

  okBtns.forEach(okBtn => {
    okBtn.addEventListener('click', () => {
      popupFail.classList.remove('popup--show');
      popupSucsess.classList.remove('popup--show');
      page.classList.remove('page--popup');
    });
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      popupFail.classList.remove('popup--show');
      popupSucsess.classList.remove('popup--show');
      page.classList.remove('page--popup');
    }
  });
};

;