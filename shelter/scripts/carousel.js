import { Card, getInfo, getRundomPet } from './index';

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
      this.container.classList.add('carousel__cards_toLeft');
      setTimeout(async () => {
        this.arrow = 'next';
        await this.setCards();
        this.prevClick = 'next';
        this.container.classList.remove('carousel__cards_toLeft');
        this.container.classList.add('carousel__cards_fromRight');
        setTimeout(() => {
          this.container.classList.remove('carousel__cards_fromRight');
        }, 300);
      }, 280);
    });
    document.querySelector('.arrow-prev').addEventListener('click', async () => {
      this.container.classList.add('carousel__cards_toRight');
      setTimeout(async () => {
        this.arrow = 'prev';
        await this.setCards();
        this.prevClick = 'prev';
        this.container.classList.remove('carousel__cards_toRight');
        this.container.classList.add('carousel__cards_fromLeft');
        setTimeout(() => {
          this.container.classList.remove('carousel__cards_fromLeft');
        }, 300);
      }, 280);
    });
  }

  // Удаляет ненужное затем получает json карточек, идет по циклу с максимально 3 карточками. Ставит или получает рандомное число из массива чисел карточек и создает на основе этого числа создает карточку, после чего добавляет её в контейнер. Так же тут реализовано определение стрелок следующая и предыдущая так, чтобы карточки не повторялись, при клике на следующую создаются новые неповторимые карточки, при клике назад используются 3 первые карточки, при 2 кликах назад(или если сохраненных элементов меньше 3) создаются новые карточки и добавляются в начало(массива номеров), карточки перед вторым кликом назад так-же сохраняются и на них можно перейти кликом вперед. При клике вперед создаются новые карточки и сохраняются предыдущие, на них можно вернуться при клике назад,
  async setCards() {
    this.removeExcess();
    const info = await getInfo('../pets.json');
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

      const constructCard = new Card(info[number].img, info[number].name, 'carousel__card', info[number].type, info[number]);
      const card = constructCard.buildCard();
      this.container.append(card);
    }
    this.cardNumbers.unshift(...temporaryCardNums);
  }
}

function createCarousel() {
  const builder = new Carousel();
  builder.buildCarousel();
}

export { createCarousel };
