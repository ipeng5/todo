import '../styles/main.scss';
import * as model from './model.js';
import categoryPopupView from './views/categoryPopupView.js';
import taskPopupView from './views/taskPopupView.js';
import taskView from './views/taskView.js';
import addCategoryView from './views/addCategoryView.js';
import addTaskView from './views/addTaskView';

const controlAddCategory = function (newCategory) {
  addCategoryView.render(newCategory);
};

const controlAddTask = function (newTask) {
  addTaskView.render(newTask);
};

taskView.render(model.state.category.task);

const init = function () {
  addCategoryView.addHandlerCreate(controlAddCategory);
  addTaskView.addHandlerCreate(controlAddTask);
};
init();
