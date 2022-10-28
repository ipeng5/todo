import '../styles/main.scss';
import * as model from './model.js';
import categoryPopupView from './views/categoryPopupView.js';
import taskPopupView from './views/taskPopupView.js';
import categoryView from './views/categoryView.js';
import taskView from './views/taskView.js';
import updatePriority from './views/priorityBtnView.js';

const controlAddTask = function (id, data, priority) {
  // taskView.render(model.categories);
  console.log(id, data, priority);
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
  // taskView.render(model.currentCategory.tasks);
};

const init = function () {
  categoryView.addHandlerCreate(controlAddCategory);
  categoryView.addHandlerDelete(controlDeleteCategory);
  categoryView.addHandlerSelect(controlSelectCategory);
  taskView.addHandlerCreate(controlAddTask);
};
init();
