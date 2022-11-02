import { format, parseISO, differenceInDays } from 'date-fns';

import { nanoid } from 'nanoid';

class CategoryView {
  _parentElement = document.querySelector('.category-container');
  _btnAdd = document.querySelector('.category-popup__add');
  _categoryContainer = document.querySelector('.category-container');
  _filterTopContainer = document.querySelector('.sidebar__filter');
  _btnDelete = [...document.querySelectorAll('.categories__item--delete')];
  _data;

  addHandlerCreateCategory(handler) {
    this._btnAdd.addEventListener('click', function () {
      const categoryName = document.querySelector('.popup__input--category').value;
      handler(nanoid(), categoryName);
      document.querySelector('.popup__input--category').value = '';
      document.querySelector('.popup__category').classList.toggle('no-display');
      document.querySelector('.add-item--category').classList.toggle('no-display');
    });

    document.addEventListener('keypress', function (e) {
      const catInput = document.querySelector('.popup__input--category');
      if (e.key === 'Enter' && catInput === document.activeElement) {
        const categoryName = document.querySelector('.popup__input--category').value;
        handler(nanoid(), categoryName);
        document.querySelector('.popup__input--category').value = '';
        document.querySelector('.popup__category').classList.toggle('no-display');
        document.querySelector('.add-item--category').classList.toggle('no-display');
      }
    });
  }

  addHandlerDeleteCategory(handler) {
    this._categoryContainer.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('function-delete') ||
        e.target.classList.contains('categories__item--delete')
      ) {
        e.target.closest('.categories__item').classList.add('no-display');
        handler(e.target.closest('.categories__item').dataset.id);
        document.querySelector('.add-item--task').classList.add('no-display');
      }
    });
  }

  // selecting the category filters
  addHandlerSelectFilter(handler) {
    this._categoryContainer.addEventListener('mousedown', e => {
      const sidebarFilters = document.querySelectorAll('.sidebar__filter-option');
      sidebarFilters.forEach(filter => filter.classList.remove('sidebar__filter-option--active'));
      e.target.closest('.categories__item')?.classList.add('sidebar__filter-option--active');
      const currentId = e.target.closest('.categories__item')?.dataset.id;
      handler(currentId ? currentId : '');
      document.querySelector('.add-item--task').classList.remove('no-display');
      document.querySelector('.popup__input--category').value = '';
      document.querySelector('.popup__category').classList.add('no-display');
      document.querySelector('.add-item--category').classList.remove('no-display');
      if (
        e.target.classList.contains('function-delete') ||
        e.target.classList.contains('categories__item--delete')
      )
        return;
      document.querySelector('.nav__checkbox').checked = false;
    });
  }

  // selecting top filters (all, today, next 7 days)
  addHandlerSidebarFilter(handler) {
    this._filterTopContainer.addEventListener('mousedown', e => {
      const sidebarFilters = document.querySelectorAll('.sidebar__filter-option');
      sidebarFilters.forEach(filter => filter.classList.remove('sidebar__filter-option--active'));
      e.target.closest('.sidebar__top-filter').classList.add('sidebar__filter-option--active');
      const id = e.target.closest('.sidebar__top-filter').id;
      handler(id);
      if (
        e.target.id === 'filter--all' ||
        e.target.id === 'filter--today' ||
        e.target.id === 'filter--7days'
      ) {
        document.querySelector('.add-item--task').classList.add('no-display');
        document.querySelector('.popup__input--category').value = '';
        document.querySelector('.popup__category').classList.add('no-display');
        document.querySelector('.add-item--category').classList.remove('no-display');
        document.querySelector('.nav__checkbox').checked = false;
      }
    });
  }

  render(data) {
    this._data = data;
    this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
  }

  // Render category container when loading the page
  renderAll(categoryArr) {
    categoryArr.forEach(category => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `
               <li class="categories__item sidebar__filter-option heading-4" data-id = ${category.id}>
                  <svg class="icon">
                       <use href="sprite.svg#icon-format_list_bulleted"></use>
                   </svg>
                  ${category.categoryName}
                  <svg class="icon categories__item--delete icon--delete">
                      <use href="sprite.svg#icon-bin" class="function-delete"></use>
                   </svg>
              </li>
      `
      );
    });
  }

  _generateMarkup() {
    return `
              <li class="categories__item sidebar__filter-option heading-4" data-id = ${this._data.id}>
                  <svg class="icon">
                       <use href="sprite.svg#icon-format_list_bulleted"></use>
                   </svg>
                  ${this._data.categoryName}
                  <svg class="icon categories__item--delete icon--delete">
                      <use href="sprite.svg#icon-bin" class="function-delete"></use>
                   </svg>
              </li>
            `;
  }
}

export default new CategoryView();
