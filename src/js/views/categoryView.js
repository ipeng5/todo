class CategoryView {
  #parentElement = document.querySelector('.category-container');
  #data;

  render(data) {
    this.#data = data;
    this.#parentElement.insertAdjacentHTML('afterbegin', this.#generateMarkup());
  }

  #generateMarkup() {
    return `
             <li class="categories__item sidebar__filter-option heading-4">
                 <svg class="icon ">
                     <use href="sprite.svg#icon-format_list_bulleted"></use>
                   </svg>
                    ${this.#data.category}
                   <svg class="icon categories__item--delete icon--delete">
                        <use href="sprite.svg#icon-bin"></use>
                 </svg>
             </li>
            `;
  }
}

export default new CategoryView();
