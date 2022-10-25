import View from './View.js';

class AddTaskView extends View {
  _parentElement = document.querySelector('.task-container');
  _btnAdd = document.querySelector('.task-popup__add');

  addHandlerCreate(handler) {
    this._btnAdd.addEventListener('click', function () {
      const taskName = document.querySelector('.popup__task--name').value;
      const dueDate = document.querySelector('.popup__task--date').value;
      const data = { taskName: taskName, dueDate: dueDate, completed: false };
      handler(data);
    });
  }

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

export default new AddTaskView();
