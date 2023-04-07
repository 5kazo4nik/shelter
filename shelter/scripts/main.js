import '../pages/index.html';
import '../sass/main.scss';
import { setBurgerClick } from './burger';
import { createCarousel } from './carousel';
// import { createPagination } from './pagination';

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '1) Реализация burger menu на обеих страницах: +26\n2) Реализация слайдера-карусели на странице Main: +36\n3) Реализация пагинации на странице Pets: +36\n4) Реализация попап на обеих страницах: +12'
  );

  setBurgerClick();

  if (document.querySelector('.carousel__cards')) {
    createCarousel();
  }
  // if (document.querySelector('.our-friends__list')) {
  //   createPagination();
  // }
});

/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
