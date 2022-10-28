import { nanoid } from 'nanoid';

class CategoryView {
  _parentElement = document.querySelector('.category-container');
  _btnAdd = document.querySelector('.category-popup__add');
  _categoryContainer = document.querySelector('.category-container');
  _btnDelete = [...document.querySelectorAll('.categories__item--delete')];
  _data;

  addHandlerCreate(handler) {
    this._btnAdd.addEventListener('click', function () {
      const categoryName = document.querySelector('.popup__input--category').value;
      handler(nanoid(), categoryName);
      document.querySelector('.popup__input--category').value = '';
      document.querySelector('.popup__category').classList.toggle('no-display');
      document.querySelector('.add-item--category').classList.toggle('no-display');
    });
  }

  addHandlerDelete(handler) {
    this._categoryContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('function-delete' || 'categories__item--delete'))
        e.target.closest('.categories__item').classList.add('no-display');
      handler(e.target.closest('.categories__item').dataset.id);
    });
  }

  addHandlerSelect(handler) {
    this._categoryContainer.addEventListener('click', function (e) {
      // if (!e.target.classList.contains('function-delete' || 'categories__item--delete'))
      const sidebarFilters = [
        ...e.target.parentElement.children,
        ...document.querySelector('.sidebar__filter').children,
      ];
      sidebarFilters.forEach(filter => filter.classList.remove('sidebar__filter-option--active'));

      e.target.closest('.categories__item').classList.add('sidebar__filter-option--active');
      //TODOTODOTODOTODOTODO
      // handler(e.target);
      // to create a function that take info of the selected category name and set it as current category
      // so that we can show tasks inside it
    });
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
