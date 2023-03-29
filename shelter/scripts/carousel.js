class Card {
  constructor(src, name, place, alt) {
    (this.src = src), (this.name = name), (this.place = place), (this.alt = alt);
  }

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

  createNode(elem, ...classes) {
    const node = document.createElement(elem);
    node.classList.add(...classes);
    return node;
  }

  insertNode(parent, child) {
    if (typeof child === 'string') {
      parent.textContent = child;
    } else {
      parent.append(child);
    }
  }
}

class Carousel {
  container = document.querySelector('.carousel__cards');
  prev = [];

  buildCarousel() {
    this.setCards();
    this.addEvents();
  }

  getValidNumber(length) {
    let number = getRundomPet(length);
    while (this.prev.includes(number)) {
      number = getRundomPet(length);
    }
    return number;
  }

  removeExcess() {
    this.container.innerHTML = '';
    if (this.prev.length > 3) {
      this.prev = this.prev.slice(3);
    }
  }

  addEvents() {
    const next = document.querySelector('.arrow-next').addEventListener('click', () => this.setCards());
  }

  async setCards() {
    this.removeExcess();
    const info = await getInfo();
    for (let i = 0; i < 3; i++) {
      const number = this.getValidNumber(info.length);
      const constructCard = new Card(info[number].img, info[number].name, 'carousel__card', info[number].type);
      const card = constructCard.buildCard();
      this.container.append(card);
      this.prev.push(number);
    }
    console.log(this.prev);
  }
}

async function getInfo() {
  const res = await fetch('../../pets.json');
  const info = await res.json();
  return info;
}

function getRundomPet(length) {
  return Math.round(Math.random() * (length - 1));
}

// const container = document.querySelector('.carousel__cards');
// container.innerHTML = '';
// console.log(container);

// const builder = new Carousel();
// builder.buildCarousel();

export { Card };
