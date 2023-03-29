console.log(
  'Страница Main (60)\n1)Проверка верстки +7\n2)Вёрстка соответствует макету +35\n3)Требования к css +6\n4)Интерактивность элементов +12\nСтраница Pets (40)\n5)Проверка верстки +7\n6)Вёрстка соответствует макету +15\nТребования к css +4\n7)Требования к css +4\n8)Интерактивность элементов +14'
);

console.log(
  '1) Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2) Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n 3) Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n 4) Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 5) Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 6) Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 8) Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n 9) При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется\n 10) Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8'
);

const burgerBtn = document.querySelector('.burger__btn');
const burgerLine = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navList = document.querySelector('.navigation__list');
const body = document.querySelector('body');

body.addEventListener('click', burgerClick);

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
