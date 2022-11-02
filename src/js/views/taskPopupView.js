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
  _newForm = document.querySelector('.form__content--new');
  _newFormLowInput = document.querySelector('#new-form-low');
  _newFormLowLabel = document.querySelector('#new-form-low').nextElementSibling;
  _newFormMediumInput = document.querySelector('#new-form-medium');
  _newFormMediumLabel = document.querySelector('#new-form-medium').nextElementSibling;
  _newFormHighInput = document.querySelector('#new-form-high');
  _newFormHighLabel = document.querySelector('#new-form-high').nextElementSibling;

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
    this._addHandlerCancelEditPopup();
    this._addHandlerCloseTaskView();
  }

  showPopup() {
    this._overlay.classList.remove('hidden');
    this._popup.classList.remove('no-display');
  }

  cancelPopup() {
    this._overlay.classList.add('hidden');
    this._popup.classList.add('no-display');
    this._newForm.reset();
    this._newFormLowLabel.classList.remove('form__priority-low--active');
    this._newFormMediumLabel.classList.remove('form__priority-medium--active');
    this._newFormHighLabel.classList.remove('form__priority-high--active');
    this._newFormLowInput.checked = false;
    this._newFormMediumInput.checked = false;
    this._newFormHighInput.checked = false;
  }

  cancelEditPopup() {
    this._overlayEdit.classList.add('hidden');
    this._popupEdit.classList.add('no-display');
  }

  closeView() {
    this._overlayView.classList.add('hidden');
    this._taskView.classList.add('no-display');
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
