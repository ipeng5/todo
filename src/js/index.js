import '../styles/main.scss';
import * as model from './model.js';
import categoryPopupView from './views/categoryPopupView.js';
import categoryView from './views/categoryView.js';
import taskPopupView from './views/taskPopupView.js';
import taskView from './views/taskView.js';

const controlCategoryPopup = function () {
  categoryPopupView.render();
};

const controlTaskPopup = function () {
  taskPopupView.render();
};

taskView.render(model.state.task);
categoryView.render(model.state.task);

const init = function () {
  categoryPopupView.addHandlerRender(controlCategoryPopup);
  taskPopupView.addHandlerRender(controlTaskPopup);
};
init();
