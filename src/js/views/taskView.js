import View from './View.js';

class TaskView extends View {
  _parentElement = document.querySelector('.task-container');

  //   addHandlerRender(handler) {}

  _generateMarkup() {
    return `
            <div class="task">
                <div class="task__head">
                    <input type="checkbox" id="${this._data.taskName}" class="checkbox__box">
                    <label for="${this._data.taskName}" class="checkbox__label">
                        <span class="checkbox__btn"></span>
                    </label>
                    <p class="task__title  heading-3">${this._data.taskName}</p>
                </div>
                <div class="task__details">
                    <p class="task__date heading-3">${this._data.dueDate}</p>
                    <svg class="icon task--delete icon--delete">
                        <use href="sprite.svg#icon-bin"></use>
                    </svg>
                </div>
            </div>
            `;
  }
}

export default new TaskView();