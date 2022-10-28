import { nanoid } from 'nanoid';

class TaskView {
  _parentElement = document.querySelector('.task-container');
  _inputForm = document.querySelector('.form__content--new');
  _btnAdd = document.querySelector('.task-popup__add');
  _data;

  addHandlerCreate(handler) {
    this._inputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      const id = nanoid();
      const radios = document.querySelectorAll('input[name = "new-priority"]');
      let priority = '';

      if (radios[0].checked) priority = 'low';
      if (radios[1].checked) priority = 'medium';
      if (radios[2].checked) priority = 'high';

      handler(id, data, priority);
    });
  }

  render(data) {
    this._data = data;
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  _generateMarkup() {
    return `
            <div class="task task--${this._data.priority} task--${this._data.completed}">
                <div class="task__head">
                    <input type="checkbox" id="${this._data.id}" class="checkbox__box">
                    <label for="${this._data.priority}" class="checkbox__label">
                         <span class="checkbox__btn"> </span>
                         <svg class=" checkbox__icon--check">
                            <use href="sprite.svg#icon-check"></use>
                         </svg>
                    </label>
                    <p class="task__title  heading-3">${this._data.title}</p>
                  </div>
                <div class="task__details">
                     <p class="task__date heading-3">${this._data.dueDate}</p>
                     <svg class="icon task--edit icon--edit">
                         <use href="sprite.svg#icon-edit" class="function-edit"></use>
                    </svg>
                    <svg class="icon task--delete icon--delete">
                        <use href="sprite.svg#icon-bin" class="function-delete"></use>
                     </svg>
                </div>
            </div>
            
            `;
  }
}

export default new TaskView();
