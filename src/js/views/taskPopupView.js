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
  _tastView = document.querySelector('.task-view');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
    this._addHandlerCancelEditPopup();
    this._addHandlerCloseTaskView();
  }

  showPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('form__container--open');
  }

  cancelPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('form__container--open');
  }

  cancelEditPopup() {
    this._overlayEdit.classList.toggle('hidden');
    this._popupEdit.classList.toggle('form__container--open');
  }

  closeView() {
    this._overlayView.classList.toggle('hidden');
    this._tastView.classList.toggle('task-view--open');
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
