class CategoryPopupView {
  _popup = document.querySelector('.popup__category');
  _btnOpen = document.querySelector('.add-item--category');
  _btnCancel = document.querySelector('.category-popup__cancel');
  _input = document.querySelector('.popup__input--category');
  _checkbox = document.querySelector('.nav__checkbox');
  _main = document.querySelector('main');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
    this._addHandlerCloseSidebar();
  }

  showPopup() {
    this._popup.classList.toggle('no-display');
    this._btnOpen.classList.toggle('no-display');
    this._input.focus();
  }

  cancelPopup() {
    this._input.value = '';
    this._popup.classList.toggle('no-display');
    this._btnOpen.classList.toggle('no-display');
  }

  closeSidebar() {
    this._checkbox.checked = 0;
  }

  _addHandlerShowPopup() {
    this._btnOpen.addEventListener('click', this.showPopup.bind(this));
  }

  _addHandlerCancelPopup() {
    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));
  }

  _addHandlerCloseSidebar() {
    this._main.addEventListener('click', this.closeSidebar.bind(this));
  }
}

export default new CategoryPopupView();
