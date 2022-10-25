class TaskView {
  #parentElement = document.querySelector('.task-container');
  #data;

  render(data) {
    this.#data = data;
    this.#parentElement.insertAdjacentHTML('afterbegin', this.#generateMarkup());
  }

  addHandlerRender(handler) {}

  #generateMarkup() {
    return `
            <div class="todo-item">
                <div class="todo-item__head">
                    <input type="checkbox" id="${this.#data.taskName}" class="checkbox__box">
                    <label for="${this.#data.taskName}" class="checkbox__label">
                        <span class="checkbox__btn"></span>
                    </label>
                    <p class="todo-item__title  heading-3">${this.#data.taskName}</p>
                </div>
                <div class="todo-item__details">
                    <p class="todo-item__date heading-3">${this.#data.dueDate}</p>
                    <svg class="icon todo-item--delete icon--delete">
                        <use href="sprite.svg#icon-bin"></use>
                    </svg>
                </div>
            </div>
            `;
  }
}

export default new TaskView();
