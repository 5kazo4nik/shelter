import '../pages/pets/pets.html';
import '../sass/pets.scss';
import { setBurgerClick } from './burger';
import { createPagination } from './pagination';

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '1) Реализация burger menu на обеих страницах: +26\n2) Реализация слайдера-карусели на странице Main: +36\n3) Реализация пагинации на странице Pets: +36\n4) Реализация попап на обеих страницах: +12'
  );

  setBurgerClick();
  createPagination();
});
