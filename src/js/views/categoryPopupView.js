class CategoryPopupView {
  #parentElement = document.querySelector('.popup-container__category');
  #btnAddCategory = document.querySelector('.add-item--category');

  render() {
    this.#parentElement.insertAdjacentHTML('afterbegin', this.#generateMarkup());
  }

  addHandlerRender(handler) {
    this.#btnAddCategory.addEventListener('click', handler);
  }

  #generateMarkup() {
    return `
        <div class="popup popup-container__category">
          <input type="text" class="popup__input popup__input--category" maxlength="20" autofocus
               placeholder="Category name">
            <div class="popup__btns">
              <button class="btn btn--cancel">Cancel</button>
                 <button class="btn btn--add">Add</button>
          </div>
        </div>
        `;
  }
}

export default new CategoryPopupView();
