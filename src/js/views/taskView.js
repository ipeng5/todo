import { nanoid } from 'nanoid';

class TaskView {
  _inputForm = document.querySelector('.form__content--new');
  _btnAdd = document.querySelector('.task-popup__add');
  _data;

  addHandlerCreate(handler) {
    this._inputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      const taskTitle = document.querySelector('.new-form__title--input');
      const id = nanoid();
      // TODOTODOTODO, delete below
      // const radios = document.querySelectorAll('input[name = "new-priority"]');
      // let priority = '';

      // if (radios[0].checked) priority = 'low';
      // if (radios[1].checked) priority = 'medium';
      // if (radios[2].checked) priority = 'high';

      handler(id, data);
      this.reset();
      if (!taskTitle) return;
      document.querySelector('.form__container--new').classList.toggle('form__container--open');
      document.querySelector('.overlay--new').classList.toggle('hidden');
      document.querySelector('.add-item--task').classList.toggle('no-display');
    });
  }

  render(data) {
    const parentElement = document.querySelector('.task-container');
    parentElement.insertAdjacentHTML(
      'afterbegin',
      `
            <div  class="task task--${data.priority}">
                <div class="task__head">
                    <input type="checkbox" id="${data.id}" class="checkbox__box">
                    <label for="${data.id}" class="checkbox__label">
                         <span class="checkbox__btn"> </span>
                         <svg class=" checkbox__icon--check">
                            <use href="sprite.svg#icon-check"></use>
                         </svg>
                    </label>
                    <p class="task__title  heading-3">${data.title}</p>
                  </div>
                <div class="task__details">
                     <p class="task__date heading-3">${data.dueDate}</p>
                     <svg class="icon task--edit icon--edit">
                         <use href="sprite.svg#icon-edit" class="function-edit"></use>
                    </svg>
                    <svg class="icon task--delete icon--delete">
                        <use href="sprite.svg#icon-bin" class="function-delete"></use>
                     </svg>
                </div>
            </div>            
            `
    );
  }

  renderAll(tasks) {
    const parentElement = document.querySelector('.task-container');
    tasks.forEach(task => {
      if (!task) return;
      parentElement.insertAdjacentHTML(
        'afterbegin',
        `
        <div  class="task task--${task.priority}">
            <div class="task__head">
                <input type="checkbox" id="${task.id}" class="checkbox__box">
                <label for="${task.id}" class="checkbox__label">
                     <span class="checkbox__btn"> </span>
                     <svg class=" checkbox__icon--check">
                        <use href="sprite.svg#icon-check"></use>
                     </svg>
                </label>
                <p class="task__title  heading-3">${task.title}</p>
              </div>
            <div class="task__details">
                 <p class="task__date heading-3">${task.dueDate}</p>
                 <svg class="icon task--edit icon--edit">
                     <use href="sprite.svg#icon-edit" class="function-edit"></use>
                </svg>
                <svg class="icon task--delete icon--delete">
                    <use href="sprite.svg#icon-bin" class="function-delete"></use>
                 </svg>
            </div>
        </div>
        `
      );
    });
  }
}

export default new TaskView();
