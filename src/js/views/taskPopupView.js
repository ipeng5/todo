class TaskPopupView {
  _popup = document.querySelector('.form__container--new');
  _popupEdit = document.querySelector('.form__container--edit');
  _overlay = document.querySelector('.overlay--new');
  _overlayEdit = document.querySelector('.overlay--edit');
  _overlayView = document.querySelector('.overlay--view');
  _btnOpen = document.querySelector('.add-item--task');
  _btnCancel = document.querySelector('.new-form__header--btn-close');
  _btnEditCancel = document.querySelector('.edit-form__header--btn-close');
  _btnViewClose = document.querySelector('.task-view--close');
  _btnSubmit = document.querySelector('.form__submit--new');
  _taskView = document.querySelector('.task-view');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
    this._addHandlerCancelEditPopup();
    this._addHandlerCloseTaskView();
  }

  showPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('no-display');
  }

  cancelPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('no-display');
    const newForm = document.querySelector('.form__content--new');
    const formLowInput = document.querySelector('#new-form-low');
    const formLowLabel = document.querySelector('#new-form-low').nextElementSibling;
    const formMediumInput = document.querySelector('#new-form-medium');
    const formMediumLabel = document.querySelector('#new-form-medium').nextElementSibling;
    const formHighInput = document.querySelector('#new-form-high');
    const formHighLabel = document.querySelector('#new-form-high').nextElementSibling;
    newForm.reset();
    formLowLabel.classList.remove('form__priority-low--active');
    formMediumLabel.classList.remove('form__priority-medium--active');
    formHighLabel.classList.remove('form__priority-high--active');
    formLowInput.checked = false;
    formMediumInput.checked = false;
    formHighInput.checked = false;
  }

  cancelEditPopup() {
    this._overlayEdit.classList.toggle('hidden');
    this._popupEdit.classList.toggle('no-display');
    const formLowInput = document.querySelector('#edit-form-low');
    const formLowLabel = document.querySelector('#edit-form-low').nextElementSibling;
    const formMediumInput = document.querySelector('#edit-form-medium');
    const formMediumLabel = document.querySelector('#edit-form-medium').nextElementSibling;
    const formHighInput = document.querySelector('#edit-form-high');
    const formHighLabel = document.querySelector('#edit-form-high').nextElementSibling;
    formLowLabel.classList.remove('form__priority-low--active');
    formMediumLabel.classList.remove('form__priority-medium--active');
    formHighLabel.classList.remove('form__priority-high--active');
    formLowInput.checked = false;
    formMediumInput.checked = false;
    formHighInput.checked = false;
  }

  closeView() {
    this._overlayView.classList.toggle('hidden');
    this._taskView.classList.toggle('no-display');
  }

  _addHandlerShowPopup() {
    this._btnOpen.addEventListener('click', this.showPopup.bind(this));
  }

  _addHandlerCancelPopup() {
    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));
  }

  _addHandlerCancelEditPopup() {
    this._btnEditCancel.addEventListener('click', this.cancelEditPopup.bind(this));
  }

  _addHandlerCloseTaskView() {
    this._btnViewClose.addEventListener('click', this.closeView.bind(this));
  }
}

export default new TaskPopupView();
