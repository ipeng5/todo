class TaskPopupView {
  _popup = document.querySelector('.form__container--new');
  _popupEdit = document.querySelector('.form__container--edit');
  _overlay = document.querySelector('.overlay--new');
  _overlayEdit = document.querySelector('.overlay--edit');
  _btnOpen = document.querySelector('.add-item--task');
  _btnCancel = document.querySelector('.new-form__header--btn-close');
  _btnEditCancel = document.querySelector('.edit-form__header--btn-close');
  _btnSubmit = document.querySelector('.form__submit--new');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
    this._addHandlerCancelEditPopup();
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

  _addHandlerShowPopup() {
    this._btnOpen.addEventListener('click', this.showPopup.bind(this));
  }

  _addHandlerCancelPopup() {
    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));
  }

  _addHandlerCancelEditPopup() {
    this._btnEditCancel.addEventListener('click', this.cancelEditPopup.bind(this));
  }
}

export default new TaskPopupView();
