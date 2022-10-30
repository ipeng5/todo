import '../styles/main.scss';
import * as model from './model.js';
import categoryPopupView from './views/categoryPopupView.js';
import taskPopupView from './views/taskPopupView.js';
import categoryView from './views/categoryView.js';
import taskView from './views/taskView.js';
import taskTitleView from './views/taskTitleView.js';
import updatePriority from './views/priorityBtnView.js';

const controlAddTask = function (id, data) {
  model.addTask(id, data);
  taskView.render(model.currentCategory.tasks[model.currentCategory.tasks.length - 1]);
};

const controlEditTask = function (data) {
  model.editTask(data);
  taskView.renderTaskUpdate(model.currentTask);
};

const controlDeleteTask = function (id) {
  model.deleteTask(id);
};

const controlSelectTask = function (id) {
  model.selectTask(id);
  taskView.renderEditModal(model.currentTask);
};

const controlCompleteTask = function (id) {
  model.completeTask(id);
};

const controlAddCategory = function (id, newCategoryName) {
  model.addCategory(id, newCategoryName);
  categoryView.render(model.categories[model.categories.length - 1]);
};

const controlDeleteCategory = function (id) {
  model.deleteCategory(id);
};

const controlSelectCategory = function (id) {
  model.selectCategory(id);
  taskTitleView.render(model.currentCategory.categoryName);
  taskView.renderAll(model.currentCategory.tasks);
};

const init = function () {
  categoryView.addHandlerCreateCategory(controlAddCategory);
  categoryView.addHandlerDeleteCategory(controlDeleteCategory);
  categoryView.addHandlerSelectCategory(controlSelectCategory);
  taskView.addHandlerCreateTask(controlAddTask);
  taskView.addHandlerEditTask(controlEditTask);
  taskView.addHandlerDeleteTask(controlDeleteTask);
  taskView.addHandlerSelectTask(controlSelectTask);
  taskView.addHandlerCompleteTask(controlCompleteTask);
};
init();

const checkbox = document.querySelectorAll('.checkbox__icon--check');
checkbox.forEach(box => box.addEventListener('click', e => console.log(e.target)));
