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
  constructor(src, name, place, alt, info) {
    (this.src = src), (this.name = name), (this.place = place), (this.alt = alt), (this.info = info);
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

    this.appendModal(card, this.info);

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

  appendModal(card, info) {
    card.addEventListener('click', () => {
      const modal = new Modal(info);
      modal.buildModal();
      body.classList.add('body_modalLock');
    });
  }
}

///////////////////////////////////////////////////////////////

// Класс модального окна.
class Modal {
  modal = '';
  modalContent = '';
  modalImg = '';
  modalText = '';
  constructor(info) {
    this.info = info;
  }

  // Строит модальное окно, добавляет слушаетель и вставляет в body
  buildModal() {
    this.createNodes();
    this.insertNodes();
    this.insertListItem();
    this.addListeners();
    document.body.prepend(this.modal);
  }

  // Создает узел и возвращает его.
  createNode(elem, ...classes) {
    const node = document.createElement(elem);
    node.classList.add(...classes);
    return node;
  }

  // insertNode(parent, child) {
  //   if (typeof child === 'string') {
  //     parent.textContent = child;
  //   } else {
  //     parent.append(child);
  //   }
  // }

  // Принимает массив с масивами родителя и ребенка, вставляет ребенка в родителя.
  insertNode(nodes) {
    nodes.forEach(([parent, child]) => {
      if (typeof child === 'string') {
        parent.textContent = child;
      } else {
        parent.append(child);
      }
    });
  }

  // Создает все нужные узлы с помощью функции createNode
  createNodes() {
    this.modal = this.createNode('div', 'modal');
    this.modalContent = this.createNode('div', 'modal__content');
    this.modalImg = this.createNode('div', 'modal__img');
    this.innerImg = this.createNode('img');
    this.innerImg.src = document.querySelector('.carousel__cards') ? this.info.img : '../' + this.info.img;
    this.innerImg.alt = this.info.type;
    this.modalContent = this.createNode('div', 'modal__content');
    this.modalText = this.createNode('div', 'modal__text');
    this.modalHeading = this.createNode('h3', 'modal__heading');
    this.modalType = this.createNode('h4', 'modal__type');
    this.modalDescription = this.createNode('h5', 'modal__description');
    this.modalList = this.createNode('ul', 'modal__list');
    this.closeBtn = this.createNode('div', 'modal__close-btn', 'btn');
  }

  // Вставляет все нужные узлы и текс с помощью insertNode
  insertNodes() {
    this.insertNode([
      [this.modal, this.modalContent],
      [this.modalImg, this.innerImg],
      [this.modalContent, this.modalImg],
      [this.modalContent, this.modalText],
      [this.modalText, this.modalHeading],
      [this.modalHeading, this.info.name],
      [this.modalText, this.modalType],
      [this.modalType, `${this.info.type} - ${this.info.breed}`],
      [this.modalText, this.modalDescription],
      [this.modalDescription, this.info.description],
      [this.modalText, this.modalList],
      [this.modalContent, this.closeBtn],
    ]);
  }

  // Создает нужное количество элементов списка, в зависимости от полученных данных, создает для них спаны, и правильный текст и затем в нужном порядке вставляет их друг в друга.
  insertListItem() {
    const arr = Object.keys(this.info).filter((el) => !el.match(/name|img|type|breed|description/));
    for (let i = 0; i < arr.length; i++) {
      const listItem = this.createNode('li', 'modal__item');
      const span = this.createNode('span');
      const text = Array.isArray(this.info[arr[i]]) ? this.info[arr[i]].join(', ') : this.info[arr[i]];
      this.insertNode([
        [span, arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)],
        [listItem, ': ' + text],
        [this.modalList, listItem],
      ]);
      listItem.prepend(span);
    }
  }

  // Добавляет слушатель по клику для закрытия модального окна.
  addListeners() {
    this.modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close-btn')) {
        document.querySelector('.modal').remove();
        document.body.classList.remove('body_modalLock');
      }
    });
  }
}

export { getInfo, getRundomPet, Card };
