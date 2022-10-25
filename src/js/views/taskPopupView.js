class TaskPopupView {
  #parentElement = document.querySelector('.popup-container--task');
  #btnAddTask = document.querySelector('.add-item--task');

  render() {
    this.#parentElement.insertAdjacentHTML('afterbegin', this.#generateMarkup());
  }

  addHandlerRender(handler) {
    this.#btnAddTask.addEventListener('click', handler);
  }

  #generateMarkup() {
    return `
         <div class="popup__task">
             <input type="text" class="popup__input popup__task--name">
             <input type="date" class="popup__input popup__task--date">
              <div class="popup__btns">
                 <button class="btn btn--cancel">Cancel</button>
                <button class="btn btn--add">Add</button>
            </div>
           </div>
        `;
  }
}

export default new TaskPopupView();
