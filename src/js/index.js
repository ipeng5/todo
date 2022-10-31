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
  taskView.render(
    model.currentCategory.id,
    model.currentCategory.tasks[model.currentCategory.tasks.length - 1]
  );
};

const controlEditTask = function (data) {
  model.editTask(data);
  taskView.renderTaskUpdate(model.currentTask);
};

const controlDeleteTask = function (id, categoryId) {
  model.deleteTask(id, categoryId);
};

const controlEditModal = function (id) {
  model.selectTask(id);
  taskView.renderEditModal(model.currentTask);
};

const controlViewTask = function (id) {
  model.selectTask(id);
  taskView.renderViewModal(model.currentTask, model.currentCategory);
};

const controlCompleteTask = function (id) {
  model.completeTask(id);
};

const controlAddCategory = function (id, newCategoryName) {
  model.addCategory(id, newCategoryName);
  categoryView.render(model.categories[model.categories.length - 1]);
  taskView.renderMsg(model.categories.length === 0);
};

const controlDeleteCategory = function (id) {
  model.deleteCategory(id);
  taskTitleView.render(model.filteredCategory.categoryName);
  taskView.renderAll(model.filteredCategory.tasks);
  taskView.renderMsg(model.categories.length === 0);
};

const controlSelectCategory = function (id) {
  model.selectCategory(id);
  taskTitleView.render(model.currentCategory.categoryName);
  taskView.renderAll(model.currentCategory.tasks);
};

const controlSelectSidebar = function (id) {
  model.selectTopFilter(id);
  taskTitleView.render(model.filteredCategory.categoryName);
  taskView.renderAll(model.filteredCategory.tasks);
};

const controlCategories = function () {
  categoryView.renderAll(model.categoryArr);
  taskView.renderAll(model.filteredCategory.tasks);
  taskView.renderMsg(model.categories.length === 0);
};

const init = function () {
  taskView.addHandlerInitRender(controlCategories);
  categoryView.addHandlerCreateCategory(controlAddCategory);
  categoryView.addHandlerDeleteCategory(controlDeleteCategory);
  categoryView.addHandlerSelectFilter(controlSelectCategory);
  taskView.addHandlerCreateTask(controlAddTask);
  taskView.addHandlerEditTask(controlEditTask);
  taskView.addHandlerDeleteTask(controlDeleteTask);
  taskView.addHandlerEditModal(controlEditModal);
  taskView.addHandlerViewModal(controlViewTask);
  taskView.addHandlerCompleteTask(controlCompleteTask);
  categoryView.addHandlerSidebarFilter(controlSelectSidebar);
};
init();
