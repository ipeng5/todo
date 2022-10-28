class TaskPopupView {
  _popup = document.querySelector('.form__container--new');
  _overlay = document.querySelector('.overlay--new');
  _btnOpen = document.querySelector('.add-item--task');
  _btnCancel = document.querySelector('.form__header--btn-close');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
  }

  showPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('form__container--open');
    this._btnOpen.classList.toggle('no-display');
  }

  cancelPopup() {
    this._overlay.classList.toggle('hidden');
    this._popup.classList.toggle('form__container--open');
    this._btnOpen.classList.toggle('no-display');
  }

  _addHandlerShowPopup() {
    this._btnOpen.addEventListener('click', this.showPopup.bind(this));
  }

  _addHandlerCancelPopup() {
    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));
  }
}

export default new TaskPopupView();
