export default class View {
  _data;

  render(data) {
    this._data = data;
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }
}
