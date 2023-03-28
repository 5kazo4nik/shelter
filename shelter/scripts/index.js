console.log(
  'Страница Main (60)\n1)Проверка верстки +7\n2)Вёрстка соответствует макету +35\n3)Требования к css +6\n4)Интерактивность элементов +12\nСтраница Pets (40)\n5)Проверка верстки +7\n6)Вёрстка соответствует макету +15\nТребования к css +4\n7)Требования к css +4\n8)Интерактивность элементов +14'
);

const burgBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navList = document.querySelector('.navigation__list');

burgBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('burger_active');
  navigation.classList.toggle('navigation_active');
  navList.classList.toggle('navigation__list_active');
});
