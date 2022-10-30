import { nanoid } from 'nanoid';

class CategoryView {
  _parentElement = document.querySelector('.category-container');
  _btnAdd = document.querySelector('.category-popup__add');
  _categoryContainer = document.querySelector('.category-container');
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
  }

  addHandlerDeleteCategory(handler) {
    this._categoryContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('function-delete' || 'categories__item--delete')) {
        e.target.closest('.categories__item').classList.add('no-display');
        handler(e.target.closest('.categories__item').dataset.id, 'filter--all');
        document.querySelector('#filter--all').classList.add('sidebar__filter-option--active');
      }
    });
  }

  addHandlerSelectFilter(handler) {
    this._categoryContainer.addEventListener('mousedown', e => {
      const sidebarFilters = document.querySelectorAll('.sidebar__filter-option');
      sidebarFilters.forEach(filter => filter.classList.remove('sidebar__filter-option--active'));
      e.target.closest('.categories__item').classList.add('sidebar__filter-option--active');
      const currentId = e.target.closest('.categories__item').dataset.id;
      handler(currentId);
      document.querySelector('.add-item--task').classList.remove('no-display');
      document.querySelector('.popup__input--category').value = '';
      document.querySelector('.popup__category').classList.add('no-display');
      document.querySelector('.add-item--category').classList.remove('no-display');
    });
  }

  addHandlerSidebarFilter(handler) {
    const topFilters = document.querySelectorAll('.sidebar__top-filter');
    topFilters.forEach(filter =>
      filter.addEventListener('mousedown', e => {
        const sidebarFilters = document.querySelectorAll('.sidebar__filter-option');
        sidebarFilters.forEach(filter => filter.classList.remove('sidebar__filter-option--active'));
        e.target.classList.add('sidebar__filter-option--active');
        handler(e.target.id);
        if (
          e.target.id === 'filter--all' ||
          e.target.id === 'filter--today' ||
          e.target.id === 'filter--7days'
        ) {
          document.querySelector('.add-item--task').classList.add('no-display');
          document.querySelector('.popup__input--category').value = '';
          document.querySelector('.popup__category').classList.add('no-display');
          document.querySelector('.add-item--category').classList.remove('no-display');
        }
      })
    );
  }

  render(data) {
    this._data = data;
    this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
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
