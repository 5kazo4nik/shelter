import { createCarousel } from './carousel';
import { createPagination } from './pagination';

document.addEventListener('DOMContentLoaded', () => {
  setBurgerClick();

  if (document.querySelector('.carousel__cards')) {
    createCarousel();
  }
  if (document.querySelector('.our-friends__list')) {
    createPagination();
  }
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

// block.append(card);

// console.log(document.documentElement.clientWidth);

// Получает json
async function getInfo(url) {
  const res = await fetch(url);
  const info = await res.json();
  return info;
}

// Получает рандомное число.
function getRundomPet(length) {
  return Math.round(Math.random() * (length - 1));
}

/////////////////////////////////////// Класс-генератор карточки.

class Card {
  constructor(src, name, place, alt) {
    (this.src = src), (this.name = name), (this.place = place), (this.alt = alt);
  }

  // Создает элемент карточки и возвращает созданную карточку
  buildCard() {
    const card = this.createNode('div', this.place, 'card');
    const imgContainer = this.createNode('div', 'our-friends__img');
    const img = this.createNode('img');
    img.src = this.src;
    img.alt = this.alt;
    const heading = this.createNode('h4', 'our-friends__name');
    const button = this.createNode('button', 'card__button', 'btn');

    this.insertNode(heading, this.name);
    this.insertNode(imgContainer, img);
    this.insertNode(card, imgContainer);
    this.insertNode(card, heading);
    this.insertNode(button, 'Learn more');
    this.insertNode(card, button);

    return card;
  }

  // Создает узел с указанными классами
  createNode(elem, ...classes) {
    const node = document.createElement(elem);
    node.classList.add(...classes);
    return node;
  }

  // Вставляет текст в узел или элемент в узел
  insertNode(parent, child) {
    if (typeof child === 'string') {
      parent.textContent = child;
    } else {
      parent.append(child);
    }
  }
}

export { getInfo, getRundomPet, Card };
