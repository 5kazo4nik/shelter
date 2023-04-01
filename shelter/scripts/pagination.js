import { Card, getInfo, getRundomPet } from './index';

// const buttons = document.querySelectorAll('.buttons__item')
const firstPage = document.querySelector('[data-btn="first"]');
const prevPage = document.querySelector('[data-btn="prev"]');
const numberPage = document.querySelector('[data-btn="number"]');
const nextPage = document.querySelector('[data-btn="next"]');
const lastPage = document.querySelector('[data-btn="last"]');

class Pagination {
  container = document.querySelector('.our-friends__list');
  pages = {
    1: [4, 0, 2, 1, 5, 7, 3, 6],
  };
  currentPage = 1;
  info = '';

  async buildPagination() {
    await this.getCardsInfo();
    this.setPages();
    this.appendCards();
    this.addListeners();
  }

  setPages() {
    for (let i = 2; i <= 6; i++) {
      this.pages[i] = [];
      for (let j = 0; j < this.info.length; j++) {
        let number = this.getValidNumber(this.info.length, i);
        this.pages[i].push(number);
      }
    }
  }

  getValidNumber(length, i) {
    let number = getRundomPet(length);
    while (this.pages[i].includes(number)) {
      number = getRundomPet(length);
    }
    return number;
  }

  async getCardsInfo() {
    this.info = await getInfo('../../../pets.json');
  }

  appendCards() {
    this.container.innerHTML = '';
    this.pages[this.currentPage].forEach((num) => {
      const card = new Card('../' + this.info[num].img, this.info[num].name, 'our-friends__card', this.info[num].type);
      this.container.append(card.buildCard());
    });
  }

  addListeners() {
    document.body.addEventListener('click', (e) => {
      if (this.currentPage > 1) {
        firstPage.classList.remove('btn_inactive');
        prevPage.classList.remove('btn_inactive');
        firstPage.querySelector('img').src = '../../assets/icons/act2.svg';
        prevPage.querySelector('img').src = '../../assets/icons/act1.svg';
      } else {
        firstPage.classList.add('btn_inactive');
        prevPage.classList.add('btn_inactive');
        firstPage.querySelector('img').src = '../../assets/icons/inact2.svg';
        prevPage.querySelector('img').src = '../../assets/icons/inact1.svg';
      }

      if (this.currentPage === 6) {
        nextPage.classList.add('btn_inactive');
        lastPage.classList.add('btn_inactive');
        nextPage.querySelector('img').src = '../../assets/icons/inact1.svg';
        lastPage.querySelector('img').src = '../../assets/icons/inact2.svg';
      } else {
        nextPage.classList.remove('btn_inactive');
        lastPage.classList.remove('btn_inactive');
        nextPage.querySelector('img').src = '../../assets/icons/act1.svg';
        lastPage.querySelector('img').src = '../../assets/icons/act2.svg';
      }

      if (e.target.closest('.buttons__item')) {
        numberPage.textContent = this.currentPage;
      }
    });

    firstPage.addEventListener('click', () => {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage = 1;
      this.appendCards();
    });

    prevPage.addEventListener('click', () => {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage -= 1;
      this.appendCards();
    });

    nextPage.addEventListener('click', () => {
      if (this.currentPage === 6) {
        return;
      }
      this.currentPage += 1;
      this.appendCards();
    });

    lastPage.addEventListener('click', () => {
      if (this.currentPage === 6) {
        return;
      }
      this.currentPage = 6;
      this.appendCards();
    });
  }
}
function createPagination() {
  const constructor = new Pagination();
  constructor.buildPagination();
}

export { createPagination };
