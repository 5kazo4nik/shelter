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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Класс создающий абстракцию карусели.
class Carousel {
  container = document.querySelector('.carousel__cards');
  cardNumbers = [];
  arrow = '';
  prevClick = '';

  // главная функция
  buildCarousel() {
    this.setCards();
    this.addEvents();
  }

  // получить валидное число.
  getValidNumber(length) {
    let number = getRundomPet(length);
    while (this.cardNumbers.includes(number)) {
      number = getRundomPet(length);
    }
    return number;
  }

  // Удаляет карточки из контейнера в макете и удаляет лишнии номера карточек в массиве карточек, this.prev - номера карточек
  removeExcess() {
    this.container.innerHTML = '';
    if (this.cardNumbers.length > 3 && this.arrow !== 'prev' && this.prevClick !== 'prev') {
      this.cardNumbers = this.cardNumbers.slice(3);
    } else if (this.cardNumbers.length > 3 && this.arrow == 'prev' && this.prevClick == 'prev') {
      this.cardNumbers = this.cardNumbers.slice(0, 3);
    }
  }

  // Добавляет слушатели на стрелки и ставит маркировки в экземпляре класса
  addEvents() {
    document.querySelector('.arrow-next').addEventListener('click', async () => {
      this.arrow = 'next';
      await this.setCards();
      this.prevClick = 'next';
    });
    document.querySelector('.arrow-prev').addEventListener('click', async () => {
      this.arrow = 'prev';
      await this.setCards();
      this.prevClick = 'prev';
    });
  }

  // Удаляет ненужное затем получает json карточек, идет по циклу с максимально 3 карточками. Ставит или получает рандомное число из массива чисел карточек и создает на основе этого числа создает карточку, после чего добавляет её в контейнер. Так же тут реализовано определение стрелок следующая и предыдущая так, чтобы карточки не повторялись, при клике на следующую создаются новые неповторимые карточки, при клике назад используются 3 первые карточки, при 2 кликах назад(или если сохраненных элементов меньше 3) создаются новые карточки и добавляются в начало(массива номеров), карточки перед вторым кликом назад так-же сохраняются и на них можно перейти кликом вперед. При клике вперед создаются новые карточки и сохраняются предыдущие, на них можно вернуться при клике назад,
  async setCards() {
    this.removeExcess();
    const info = await getInfo();
    let temporaryCardNums = [];

    for (let i = 0; i < 3; i++) {
      let number;

      if (this.arrow === 'next' && this.prevClick === 'prev' && this.cardNumbers.length > 3) {
        number = this.cardNumbers[i + 3];
      } else if (this.arrow === 'prev' && this.prevClick !== 'next') {
        number = this.getValidNumber(info.length);
        while (temporaryCardNums.includes(number) || this.cardNumbers.includes(number)) {
          number = this.getValidNumber(info.length);
        }
        temporaryCardNums.push(number);
      } else if (this.arrow === 'prev') {
        number = this.cardNumbers[i];
      } else {
        number = this.getValidNumber(info.length);
        this.cardNumbers.push(number);
      }

      const constructCard = new Card(info[number].img, info[number].name, 'carousel__card', info[number].type);
      const card = constructCard.buildCard();
      this.container.append(card);
    }
    this.cardNumbers.unshift(...temporaryCardNums);
  }
}

// Получает json
async function getInfo() {
  const res = await fetch('../../pets.json');
  const info = await res.json();
  return info;
}

// Получает рандомное число.
function getRundomPet(length) {
  return Math.round(Math.random() * (length - 1));
}

function createCarousel() {
  const builder = new Carousel();
  builder.buildCarousel();
}

export { Card, createCarousel };
