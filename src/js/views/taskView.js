import { format, differenceInDays } from 'date-fns';
import { nanoid } from 'nanoid';

class TaskView {
  _inputForm = document.querySelector('.form__content--new');
  _btnAdd = document.querySelector('.task-popup__add');
  _data;
  _taskContainer = document.querySelector('.task-container');
  _emptyMsg = document.querySelector('.task-container__empty-message');

  // Create a new task
  addHandlerCreateTask(handler) {
    this._inputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      const taskTitle = document.querySelector('.new-form__title--input');
      const id = nanoid();
      handler(id, data);
      // reset form input and close form after submitting
      this.reset();
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

          // when a task's due date changed from today to another day while today filter is active
          const filterToday = document.querySelector('#filter--today');
          const filter7days = document.querySelector('#filter--7days');
          if (filterToday.classList.contains('sidebar__filter-option--active')) {
            const taskCard = document
              .querySelector(`[data-id="${editForm.dataset.id}"]`)
              .closest('.task-card');
            if (data.dueDate !== format(new Date(), 'yyyy-MM-dd'))
              taskCard.classList.add('no-display');
          }

          // when a task's due date changed from within 7 days to another day while 'next 7 days' is active
          if (filter7days.classList.contains('sidebar__filter-option--active')) {
            const taskCard = document
              .querySelector(`[data-id="${editForm.dataset.id}"]`)
              .closest('.task-card');
            if (
              differenceInDays(new Date(data.dueDate), new Date()) > 7 ||
              differenceInDays(new Date(data.dueDate), new Date()) < 0
            ) {
              taskCard.classList.add('no-display');
            }
          }
        });
      }
    });
  }

  // Remove task card
  addHandlerDeleteTask(handler) {
    this._taskContainer.addEventListener('click', e => {
      if (
        e.target.classList.contains('function-delete') ||
        e.target.classList.contains('task--delete')
      ) {
        e.target.closest('.task').classList.add('no-display');
        const dataset = e.target.closest('.task__details').dataset;
        handler(dataset.id);
      }
    });
  }

  // Click on edit button to open task edit modal
  addHandlerEditModal(handler) {
    const overlay = document.querySelector('.overlay--edit');
    const formContainer = document.querySelector('.form__container--edit');
    const editForm = document.querySelector('.form__content--edit');
    this._taskContainer.addEventListener('click', e => {
      if (
        e.target.classList.contains('function-edit') ||
        e.target.classList.contains('task--edit')
      ) {
        const dataset = e.target.closest('.task__details').dataset;
        console.log(dataset);
        editForm.setAttribute('data-id', dataset.id);
        overlay.classList.toggle('hidden');
        formContainer.classList.toggle('form__container--open');
        handler(dataset.id);
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

  // When page load, render localStorage data
  addHandlerInitRender(handler) {
    window.addEventListener('load', handler);
  }

  renderMsg(condition) {
    if (condition === true) this._emptyMsg.classList.remove('no-display');
    else this._emptyMsg.classList.add('no-display');
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

  // Render task changes after form submit
  renderTaskUpdate(task) {
    const taskCard = document.querySelector(`[data-id="${task.id}"]`).closest('.task-card');
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

  // Toggle edit form filled with input of selected task
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
    formLowLabel.classList.remove('form__priority-low--active');
    formMediumLabel.classList.remove('form__priority-medium--active');
    formHighLabel.classList.remove('form__priority-high--active');
    formLowInput.checked = false;
    formMediumInput.checked = false;
    formHighInput.checked = false;

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

  // Toggle view modal when click on task card
  renderViewModal(task, category) {
    document.querySelector('.task-view__title').textContent = task.title;
    document.querySelector('.task-view__category--text').textContent = category.categoryName;
    document.querySelector('.task-view__priority--text').textContent = task.priority;
    document.querySelector('.task-view__date--text').textContent = task.dueDate;
    document.querySelector('.task-view__description--text').textContent = task.description;
  }

  // Render task container when choosing a category
  renderAll(tasks) {
    const parentElement = document.querySelector('.task-container');
    parentElement.innerHTML = '';
    tasks.forEach(task => {
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
