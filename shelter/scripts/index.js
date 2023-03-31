import { createCarousel } from './carousel';

document.addEventListener('DOMContentLoaded', () => {
  setBurgerClick();
  createCarousel();
});

/////////////////////////////////////////////////////////////////////////////////////////

const burgerLine = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navList = document.querySelector('.navigation__list');
const body = document.querySelector('body');

function setBurgerClick() {
  body.addEventListener('click', burgerClick);
}

function delBurgTags() {
  burgerLine.classList.remove('burger_active');
  navigation.classList.remove('navigation_active');
  navList.classList.remove('navigation__list_active');
  body.classList.remove('body_lock');
}

function toggleBurgTags() {
  burgerLine.classList.toggle('burger_active');
  navigation.classList.toggle('navigation_active');
  navList.classList.toggle('navigation__list_active');
  body.classList.toggle('body_lock');
}

function burgerClick(e) {
  if (e.target.closest('.burger__btn')) {
    toggleBurgTags();
  } else if (e.target !== navList) {
    delBurgTags();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// const block = document.querySelector('.carousel__cards');
// const construct = new Card('../assets/img/pets-freddie.png', 'Freddie', 'carousel__card', 'cat');
// const card = construct.buildCard();
// console.log(card);

// block.append(card);

// console.log(document.documentElement.clientWidth);
