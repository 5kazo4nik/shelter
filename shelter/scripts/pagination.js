import { Card, getInfo, getRundomPet } from './cardModal';

const firstPage = document.querySelector('[data-btn="first"]');
const prevPage = document.querySelector('[data-btn="prev"]');
const numberPage = document.querySelector('[data-btn="number"]');
const nextPage = document.querySelector('[data-btn="next"]');
const lastPage = document.querySelector('[data-btn="last"]');

//// Класс пагинации.
class Pagination {
  container = document.querySelector('.our-friends__list');
  pageNumbers = [];
  currentPage = 1;
  info = '';
  maxCards = '';
  maxPages = '';

  // Создает пагинацию. Получает информацию, устанавливает максимальное число карточек, устанавливает номера неповторимых на странице элементов, добавляет карточки в контейнер, добавляет слушатели.
  async buildPagination() {
    await this.getCardsInfo();
    this.setMaxCards();
    this.setPages();
    this.appendCards();
    this.addListeners();
  }

  // Устанавливает максимальное число карточек на странице в зависимости от ширины.
  setMaxCards() {
    if (document.documentElement.clientWidth > 768) {
      this.maxCards = 8;
    } else if (document.documentElement.clientWidth > 625) {
      this.maxCards = 6;
    } else {
      this.maxCards = 3;
    }
  }

  // Устанавливает неповторимые карточеки на 1 странице в зависимости от количества страниц
  setPages() {
    for (let i = 0; i < 48 / this.maxCards; i++) {
      let temporary = [];
      for (let j = 0; j < this.maxCards; j++) {
        let number = this.getValidNumber(this.info.length, temporary);
        temporary.push(number);
      }
      this.pageNumbers = this.pageNumbers.concat(temporary);
    }
  }

  // Получает рандомное число для карточки, которой ещё нет на странице.
  getValidNumber(length, arr) {
    let number = getRundomPet(length);
    while (arr.includes(number)) {
      number = getRundomPet(length);
    }
    return number;
  }

  // Получает данные с карточками.
  async getCardsInfo() {
    this.info = await getInfo('../pets.json');
  }

  // Удаляет карточки в контейнере, вычисляет максимальное количество страниц. Устанавливает границу в массиве в рамках которой по номерам должны формироваться карточки из полученной информации.
  appendCards() {
    this.container.innerHTML = '';
    this.maxPages = this.pageNumbers.length / this.maxCards;
    let i = this.currentPage * this.maxCards - this.maxCards;
    const border = this.currentPage * this.maxCards - 1;
    for (; i <= border; i++) {
      const card = new Card(this.info[this.pageNumbers[i]].img, this.info[this.pageNumbers[i]].name, 'our-friends__card', this.info[this.pageNumbers[i]].type, this.info[this.pageNumbers[i]]);
      this.container.append(card.buildCard());
    }
  }

  //// Добавляет события
  addListeners() {
    // Функция для изменения стрелочек и текущей страницы.
    function buttonChanges(e = null) {
      if (this.currentPage > 1) {
        firstPage.classList.remove('btn_inactive');
        prevPage.classList.remove('btn_inactive');
        firstPage.querySelector('img').src = '../assets/icons/act2.svg';
        prevPage.querySelector('img').src = '../assets/icons/act1.svg';
      } else {
        firstPage.classList.add('btn_inactive');
        prevPage.classList.add('btn_inactive');
        firstPage.querySelector('img').src = '../assets/icons/inact2.svg';
        prevPage.querySelector('img').src = '../assets/icons/inact1.svg';
      }

      if (this.currentPage === this.maxPages) {
        nextPage.classList.add('btn_inactive');
        lastPage.classList.add('btn_inactive');
        nextPage.querySelector('img').src = '../assets/icons/inact1.svg';
        lastPage.querySelector('img').src = '../assets/icons/inact2.svg';
      } else {
        nextPage.classList.remove('btn_inactive');
        lastPage.classList.remove('btn_inactive');
        nextPage.querySelector('img').src = '../assets/icons/act1.svg';
        lastPage.querySelector('img').src = '../assets/icons/act2.svg';
      }

      if (e && e.target.closest('.buttons__item')) {
        numberPage.textContent = this.currentPage;
      }
    }

    // Событие при изменении размера пересчитывает количество страниц и заного формирует карточки в зависимости от текущей страницы.
    window.addEventListener('resize', () => {
      this.setMaxCards();
      if (this.currentPage > this.maxPages) {
        this.currentPage = this.maxPages;
        numberPage.textContent = this.currentPage;
      }
      this.appendCards();
      buttonChanges.call(this);
    });

    // Слушатель по клику.
    document.body.addEventListener('click', (e) => {
      buttonChanges.call(this, e);
    });

    // Ставит текущую страницу на 1 при нажатии в начало
    firstPage.addEventListener('click', () => {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage = 1;
      this.appendCards();
    });

    // Уменьшает текущую страницу на 1 при нажатии назад
    prevPage.addEventListener('click', () => {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage -= 1;
      this.appendCards();
    });

    // Увеличивает текущую страницу на 1 при нажатии вперед
    nextPage.addEventListener('click', () => {
      if (this.currentPage === this.maxPages) {
        return;
      }
      this.currentPage += 1;
      this.appendCards();
    });

    // Устанавливает текущую страницу на максимальное количество страниц при нажатии в конец.
    lastPage.addEventListener('click', () => {
      if (this.currentPage === this.maxPages) {
        return;
      }
      this.currentPage = this.maxPages;
      this.appendCards();
    });
  }
}

// Создание пагинации
function createPagination() {
  const constructor = new Pagination();
  constructor.buildPagination();
}

export { createPagination };
