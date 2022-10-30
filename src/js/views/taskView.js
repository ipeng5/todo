import { nanoid } from 'nanoid';

class TaskView {
  _inputForm = document.querySelector('.form__content--new');
  _btnAdd = document.querySelector('.task-popup__add');
  _data;
  _taskContainer = document.querySelector('.task-container');

  // Create a new task
  addHandlerCreateTask(handler) {
    this._inputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      const taskTitle = document.querySelector('.new-form__title--input');
      const id = nanoid();

      handler(id, data);
      this.reset();
      if (!taskTitle) return;
      document.querySelector('.form__container--new').classList.toggle('form__container--open');
      document.querySelector('.overlay--new').classList.toggle('hidden');
    });
  }

  // Edit a task
  addHandlerEditTask(handler) {
    const overlay = document.querySelector('.overlay--edit');
    const formContainer = document.querySelector('.form__container--edit');

    overlay.addEventListener('click', function (e) {
      if (e.target.classList.contains('form__submit--edit')) {
        const editForm = e.target.parentElement;
        editForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const dataArr = [...new FormData(this)];
          const data = Object.fromEntries(dataArr);
          handler(data);
          overlay.classList.toggle('hidden');
          formContainer.classList.toggle('form__container--open');
        });
      }
    });
  }

  renderTaskUpdate(task) {
    const taskCard = document.querySelector(`[data-id="${task.id}"]`).closest('.task-card');
    console.log(taskCard.innerHTML);
    taskCard.innerHTML = `
      <div  class="task task--${task.priority ? task.priority : ''}">
                <div class="task__head">
                    <input type="checkbox" id="${task.id}" class="checkbox__box">
                    <label for="${task.id}" class="checkbox__label">
                         <span class="checkbox__btn"> </span>
                         <svg class="checkbox__icon--check">
                            <use href="sprite.svg#icon-check"></use>
                         </svg>
                    </label>
                    <p class="task__title  heading-3">${task.title}</p>
                  </div>
                <div class="task__details" data-id="${task.id}">
                     <p class="task__date heading-3">${task.dueDate}</p>
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

  // Remove task card
  addHandlerDeleteTask(handler) {
    this._taskContainer.addEventListener('click', e => {
      if (e.target.classList.contains('function-delete' || 'task--delete')) {
        const dataset = e.target.closest('.task__details').dataset;
        e.target.closest('.task').classList.add('no-display');
        handler(dataset.id);
      }
    });
  }

  // Click on edit button to open edit modal
  addHandlerEditModal(handler) {
    this._taskContainer.addEventListener('click', e => {
      if (e.target.classList.contains('function-edit' || 'task--edit')) {
        const dataset = e.target.closest('.task__details').dataset;
        const formContainer = document.querySelector('.form__container--edit');
        const overlay = document.querySelector('.overlay--edit');
        handler(dataset.id);
        overlay.classList.toggle('hidden');
        formContainer.classList.toggle('form__container--open');
      }
    });
  }

  // Click on task card to open view modal
  addHandlerViewModal(handler) {
    const overlay = document.querySelector('.overlay--view');
    const viewModal = document.querySelector('.task-view');
    this._taskContainer.addEventListener('click', e => {
      if (e.target.classList.contains('task')) {
        overlay.classList.toggle('hidden');
        viewModal.classList.toggle('task-view--open');
        handler(e.target.lastElementChild.dataset.id);
      }
    });
  }

  // Click checkbox to toggle 'completed' status
  addHandlerCompleteTask(handler) {
    this._taskContainer.addEventListener('click', e => {
      if (e.target.classList.contains('checkbox__box')) {
        e.target.closest('.task').classList.toggle('task--completed');
        handler(e.target.id);
      }
    });
  }

  // Render single new task card
  render(task) {
    const parentElement = document.querySelector('.task-container');
    parentElement.insertAdjacentHTML(
      'afterbegin',
      `
         <div class="task-card">
            <div  class="task task--${task.priority}">
                <div class="task__head">
                    <input type="checkbox" id="${task.id}" class="checkbox__box">
                    <label for="${task.id}" class="checkbox__label">
                         <span class="checkbox__btn"> </span>
                         <svg class="checkbox__icon--check">
                            <use href="sprite.svg#icon-check"></use>
                         </svg>
                    </label>
                    <p class="task__title  heading-3">${task.title}</p>
                  </div>
                <div class="task__details" data-id="${task.id}">
                     <p class="task__date heading-3">${task.dueDate}</p>
                     <svg class="icon task--edit icon--edit">
                         <use href="sprite.svg#icon-edit" class="function-edit"></use>
                    </svg>
                    <svg class="icon task--delete icon--delete">
                        <use href="sprite.svg#icon-bin" class="function-delete"></use>
                     </svg>
                </div>
            </div>            
          </div>            
            `
    );
  }

  // Update form input based on selected task card
  renderEditModal(task) {
    const formTaskTitle = document.querySelector('.edit-form__title--input');
    const formDescription = document.querySelector('.edit-form__description--input');
    const formDueDate = document.querySelector('.edit-form__date--input');
    const formLowInput = document.querySelector('#edit-form-low');
    const formLowLabel = document.querySelector('#edit-form-low').nextElementSibling;
    const formMediumInput = document.querySelector('#edit-form-medium');
    const formMediumLabel = document.querySelector('#edit-form-medium').nextElementSibling;
    const formHighInput = document.querySelector('#edit-form-high');
    const formHighLabel = document.querySelector('#edit-form-high').nextElementSibling;
    formTaskTitle.value = task.title;
    formDescription.value = task.description;
    formDueDate.value = task.dueDate;
    if (task.priority === undefined) {
      formLowInput.checked = false;
      formLowLabel.classList.remove('form__priority-low--active');
      formMediumInput.checked = false;
      formMediumLabel.classList.remove('form__priority-medium--active');
      formHighInput.checked = false;
      formHighLabel.classList.remove('form__priority-high--active');
    }
    if (task.priority === 'low') {
      formLowInput.checked = true;
      formLowLabel.classList.add('form__priority-low--active');
    }
    if (task.priority === 'medium') {
      formMediumInput.checked = true;
      formMediumLabel.classList.add('form__priority-medium--active');
    }
    if (task.priority === 'high') {
      formHighInput.checked = true;
      formHighLabel.classList.add('form__priority-high--active');
    }
  }

  renderViewModal(task, category) {
    document.querySelector('.task-view__title').textContent = task.title;
    document.querySelector('.task-view__category--text').textContent = category.categoryName;
    document.querySelector('.task-view__priority--text').textContent = task.priority;
    document.querySelector('.task-view__date--text').textContent = task.dueDate;
    document.querySelector('.task-view__description--text').textContent = task.description;
    console.log(document.querySelector('.task-view__description--text').textContent);
  }

  // Render task container when choosing a category
  renderAll(tasks) {
    const parentElement = document.querySelector('.task-container');
    parentElement.innerHTML = '';
    tasks.forEach(task => {
      console.log(task);
      console.log(parentElement);
      if (!task) return;
      parentElement.insertAdjacentHTML(
        'afterbegin',
        `
         <div class="task-card">
          <div  class="task task--${task.priority}">
              <div class="task__head">
                  <input type="checkbox" id="${task.id}" class="checkbox__box">
                  <label for="${task.id}" class="checkbox__label">
                       <span class="checkbox__btn"> </span>
                       <svg class="checkbox__icon--check">
                          <use href="sprite.svg#icon-check"></use>
                       </svg>
                  </label>
                  <p class="task__title  heading-3">${task.title}</p>
                </div>
              <div class="task__details" data-id="${task.id}">
                   <p class="task__date heading-3">${task.dueDate}</p>
                   <svg class="icon task--edit icon--edit">
                       <use href="sprite.svg#icon-edit" class="function-edit"></use>
                  </svg>
                  <svg class="icon task--delete icon--delete">
                      <use href="sprite.svg#icon-bin" class="function-delete"></use>
                   </svg>
              </div>
            </div>
          </div>
          `
      );
    });
  }
}

export default new TaskView();
