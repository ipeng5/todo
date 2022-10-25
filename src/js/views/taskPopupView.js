class TaskPopupView {
  _popup = document.querySelector('.popup__task');
  _btnOpen = document.querySelector('.add-item--task');
  _btnCancel = document.querySelector('.task-popup__cancel');
  _input = document.querySelector('.popup__task--name');

  constructor() {
    this._addHandlerShowPopup();
    this._addHandlerCancelPopup();
  }

  showPopup() {
    this._popup.classList.remove('hidden');
    this._btnOpen.classList.add('hidden');
    this._input.focus();
  }

  cancelPopup() {
    this._input.value = '';
    this._popup.classList.add('hidden');
    this._btnOpen.classList.remove('hidden');
  }

  _addHandlerShowPopup() {
    this._btnOpen.addEventListener('click', this.showPopup.bind(this));
  }

  _addHandlerCancelPopup() {
    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));
  }
}

export default new TaskPopupView();
