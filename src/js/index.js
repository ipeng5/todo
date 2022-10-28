import '../styles/main.scss';
import * as model from './model.js';
import categoryPopupView from './views/categoryPopupView.js';
import taskPopupView from './views/taskPopupView.js';
import categoryView from './views/categoryView.js';
import addTaskView from './views/addTaskView.js';

const controlAddTask = function () {
  addTaskView.render(model.categories);
};

const controlAddCategory = function (id, newCategoryName) {
  model.addCategory(id, newCategoryName);
  categoryView.render(model.categories[model.categories.length - 1]);
};

const controlDeleteCategory = function (id) {
  model.deleteCategory(id);
};

const controlSelectCategory = function (el) {
  // console.log(el);
};

const init = function () {
  categoryView.addHandlerCreate(controlAddCategory);
  categoryView.addHandlerDelete(controlDeleteCategory);
  categoryView.addHandlerSelect(controlSelectCategory);
  addTaskView.addHandlerCreate(controlAddTask);
};
init();
