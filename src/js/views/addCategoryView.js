import View from './View.js';

class AddCategoryView extends View {
  _parentElement = document.querySelector('.category-container');
  _btnAdd = document.querySelector('.category-popup__add');

  addHandlerCreate(handler) {
    this._btnAdd.addEventListener('click', function () {
      const data = document.querySelector('.popup__input--category').value;
      handler(data);
      document.querySelector('.popup__input--category').value = '';
      document.querySelector('.add-item--category').classList.remove('hidden');
      document.querySelector('.popup__category').classList.add('hidden');
    });
  }

  _generateMarkup() {
    return `
             <li class="categories__item sidebar__filter-option heading-4">
                 <svg class="icon ">
                     <use href="sprite.svg#icon-format_list_bulleted"></use>
                   </svg>
                    ${this._data}
                   <svg class="icon categories__item--delete icon--delete">
                        <use href="sprite.svg#icon-bin"></use>
                 </svg>
             </li>
            `;
  }
}

export default new AddCategoryView();
