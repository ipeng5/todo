class TaskTitleView {
  _parentElement = document.querySelector('.task--category-container');
  _data;

  render(data) {
    // pass in single category.name
    this._data = data;
    this._clearView();
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  _clearView() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return `<span class="task--category">${this._data}</span>`;
  }
}

export default new TaskTitleView();
