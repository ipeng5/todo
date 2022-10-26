/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-weight: 400;\\n  color: #414342;\\n  position: relative;\\n  word-wrap: break-word;\\n}\\nbody::-webkit-scrollbar {\\n  width: 6px;\\n}\\nbody::-webkit-scrollbar-track {\\n  background: transparent;\\n}\\nbody::-webkit-scrollbar-thumb {\\n  background: rgba(0, 150, 136, 0.7);\\n}\\nbody::-webkit-scrollbar-thumb:hover {\\n  background: #009688;\\n}\\n\\nmain {\\n  padding: 0 10vw;\\n}\\n\\ntextarea {\\n  resize: none;\\n}\\n\\n::placeholder {\\n  color: #c2c2c2;\\n}\\n\\n.heading-1 {\\n  font-size: 7rem;\\n}\\n\\n.heading-2 {\\n  font-size: 2.5rem;\\n  margin-top: 10px;\\n}\\n\\n.heading-3 {\\n  font-size: 2rem;\\n}\\n\\n.heading-4 {\\n  font-size: 1.8rem;\\n  font-weight: 300;\\n}\\n\\n.text-small {\\n  font-size: 1.2rem;\\n}\\n\\n.content {\\n  min-height: 100vh;\\n  max-width: 100vw;\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-rows: 10rem 1fr;\\n  grid-template-columns: 42rem 1fr;\\n  overflow: hidden;\\n}\\n\\n.header {\\n  grid-column: 1/-1;\\n  background: #4db6ac;\\n  color: white;\\n  padding-left: 2rem;\\n  display: flex;\\n  align-items: center;\\n  font-family: \\\"Baloo Thambi 2\\\", cursive;\\n  overflow: hidden;\\n}\\n\\n.sidebar {\\n  background-color: #fafafa;\\n  padding: 3.2rem 3rem 6rem 3rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  position: sticky;\\n  top: 0;\\n}\\n.sidebar__filter-option {\\n  list-style: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  gap: 1.5rem;\\n  padding: 0 2.2rem;\\n  transition: all 0.2s;\\n  height: 4.5rem;\\n}\\n.sidebar__filter-option--active {\\n  background-color: #cceae7;\\n}\\n.sidebar__filter-option:hover {\\n  background-color: #ebebeb;\\n}\\n.sidebar__category-title {\\n  padding-top: 1.2rem;\\n  padding-bottom: 1rem;\\n}\\n\\n.task-container {\\n  overflow-y: auto;\\n  max-height: 65vh;\\n  padding: 3rem 3rem 2rem 3rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1.5rem;\\n}\\n.task-container::-webkit-scrollbar {\\n  width: 6px;\\n}\\n.task-container::-webkit-scrollbar-track {\\n  background: transparent;\\n}\\n.task-container::-webkit-scrollbar-thumb {\\n  background: rgba(0, 150, 136, 0.7);\\n}\\n.task-container::-webkit-scrollbar-thumb:hover {\\n  background: #009688;\\n}\\n\\n.overlay--new,\\n.overlay--edit,\\n.overlay--view {\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  backdrop-filter: blur(4px);\\n  z-index: 100;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: all 0.3s;\\n}\\n\\n.form__container {\\n  z-index: 500;\\n  height: 55rem;\\n  width: 40rem;\\n  border-radius: 5px;\\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.4);\\n  background-color: #fafafa;\\n  border-radius: 5px;\\n  overflow: hidden;\\n  transition: all 0.3s;\\n  transform: scale(0.5);\\n}\\n.form__container--open {\\n  transform: scale(1);\\n  visibility: visible;\\n}\\n.form__header {\\n  background-color: #4db6ac;\\n  padding: 2rem;\\n}\\n.form__header--heading {\\n  font-size: 3rem;\\n  color: white;\\n}\\n.form__header--btn-close {\\n  position: absolute;\\n  top: 2rem;\\n  right: 1rem;\\n  color: white;\\n  background-color: transparent;\\n  line-height: 1rem;\\n  font-size: 4rem;\\n  border: none;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n.form__header--btn-close:hover {\\n  color: #009688;\\n}\\n.form__content {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 2rem 3rem;\\n  gap: 2rem;\\n  font-size: 1.5rem;\\n  color: #414342;\\n}\\n.form__title-group, .form__description-group, .form__date-group {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n.form__category-group, .form__date-group {\\n  display: flex;\\n  gap: 5px;\\n}\\n.form__title--star {\\n  color: #f77b72;\\n  font-size: 2.4rem;\\n}\\n.form__title--input {\\n  border: 2px solid #c2c2c2;\\n  border-radius: 3px;\\n  font-size: 1.8rem;\\n  color: #414342;\\n  padding: 1rem;\\n  height: 3.5rem;\\n}\\n.form__title--input:focus {\\n  outline: none;\\n  border: 1px solid #99d5cf;\\n}\\n.form__description--input {\\n  border: 2px solid #c2c2c2;\\n  border-radius: 3px;\\n  font-size: 1.8rem;\\n  color: #414342;\\n  padding: 1rem;\\n  font-family: inherit;\\n  height: 8rem;\\n}\\n.form__description--input:focus {\\n  outline: none;\\n  border: 1px solid #99d5cf;\\n}\\n.form__date--input {\\n  border: 2px solid #c2c2c2;\\n  border-radius: 3px;\\n  font-size: 1.8rem;\\n  color: #414342;\\n  padding: 1rem;\\n  font-family: inherit;\\n}\\n.form__date--input:focus {\\n  outline: none;\\n  border: 1px solid #99d5cf;\\n}\\n.form__submit {\\n  margin: 1rem auto 0 auto;\\n  background-color: #4db6ac;\\n  color: white;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  padding: 1.2rem 3rem;\\n  border: transparent;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n.form__submit:hover {\\n  background-color: #009688;\\n}\\n.form__priority-group {\\n  display: flex;\\n  align-items: center;\\n  gap: 1.8rem;\\n}\\n.form__priority-group input[type=radio] {\\n  display: none;\\n}\\n.form__priority-btn {\\n  display: inline-block;\\n  margin: 0 1.5rem 0 -5px;\\n  padding: 0.5rem 1rem;\\n  border-radius: 3px;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n.form__priority-btn:hover {\\n  color: white;\\n}\\n.form__priority-btn--high {\\n  border: 1px solid #f77b72;\\n  color: #f77b72;\\n}\\n.form__priority-btn--high:hover {\\n  background-color: #f77b72;\\n}\\n.form__priority-btn--medium {\\n  border: 1px solid #ffb74d;\\n  color: #ffb74d;\\n}\\n.form__priority-btn--medium:hover {\\n  background-color: #ffb74d;\\n}\\n.form__priority-btn--low {\\n  border: 1px solid #4db6ac;\\n  color: #4db6ac;\\n}\\n.form__priority-btn--low:hover {\\n  background-color: #4db6ac;\\n}\\n.form__priority-high--active {\\n  background-color: #f77b72;\\n  color: white;\\n}\\n.form__priority-medium--active {\\n  background-color: #ffb74d;\\n  color: white;\\n}\\n.form__priority-low--active {\\n  background-color: #4db6ac;\\n  color: white;\\n}\\n\\n.categories {\\n  overflow-y: scroll;\\n  max-height: 30vh;\\n}\\n.categories__item--delete {\\n  opacity: 0;\\n}\\n.categories__item:hover .categories__item--delete {\\n  opacity: 1;\\n}\\n.categories::-webkit-scrollbar {\\n  width: 6px;\\n}\\n.categories::-webkit-scrollbar-track {\\n  background: transparent;\\n}\\n.categories::-webkit-scrollbar-thumb {\\n  background: rgba(0, 150, 136, 0.7);\\n}\\n.categories::-webkit-scrollbar-thumb:hover {\\n  background: #009688;\\n}\\n\\n.task {\\n  height: 6rem;\\n  width: 90%;\\n  padding: 0 5rem;\\n  display: flex;\\n  flex-shrink: 0;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #fafafa;\\n  border-radius: 6px;\\n  font-weight: 300;\\n  cursor: pointer;\\n  transition: all 0.2s;\\n}\\n.task--p1 {\\n  border-left: 6px solid rgba(247, 123, 114, 0.6);\\n}\\n.task--p2 {\\n  border-left: 6px solid rgba(255, 183, 77, 0.6);\\n}\\n.task--p3 {\\n  border-left: 6px solid rgba(77, 182, 172, 0.6);\\n}\\n.task--completed {\\n  text-decoration: line-through;\\n}\\n.task--completed > * {\\n  color: #c2c2c2;\\n}\\n.task__title {\\n  padding-left: 2rem;\\n}\\n.task__details {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n.task--category {\\n  width: 90%;\\n  margin: 0 auto;\\n  padding: 3.2rem 0 0 5rem;\\n  font-size: 5rem;\\n  color: #4db6ac;\\n}\\n.task:hover {\\n  background-color: #e6f5f3;\\n}\\n\\n.popup {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  margin: 1.5rem;\\n}\\n.popup__input {\\n  border: 2px solid #c2c2c2;\\n  border-radius: 3px;\\n  font-size: 1.8rem;\\n  color: #414342;\\n  padding: 1rem;\\n  height: 4.2rem;\\n  width: 85%;\\n}\\n.popup__input:focus {\\n  outline: none;\\n  border: 1px solid #99d5cf;\\n}\\n.popup__task {\\n  height: 6rem;\\n  padding: 0 5rem 0 3rem;\\n  display: flex;\\n  align-items: center;\\n  background-color: #fafafa;\\n  width: 90%;\\n}\\n.popup__task--name {\\n  flex: auto;\\n  max-width: 60rem;\\n}\\n.popup__task--date {\\n  margin: 0 auto 0 2rem;\\n  flex: 0 0 auto;\\n}\\n.popup__task--date::-webkit-datetime-edit {\\n  color: #c2c2c2;\\n}\\n\\n.popup__btns {\\n  display: flex;\\n  gap: 2rem;\\n}\\n.popup__btns .btn {\\n  width: 13rem;\\n  padding: 0.8rem 0;\\n  cursor: pointer;\\n  border-radius: 5px;\\n  font-size: 1.5rem;\\n  text-transform: uppercase;\\n  transition: all, 0.3s;\\n}\\n.popup__btns .btn--cancel {\\n  background-color: white;\\n  color: #adadad;\\n  border: 2px solid #c2c2c2;\\n}\\n.popup__btns .btn--cancel:hover {\\n  color: #4db6ac;\\n  border: 2px solid #4db6ac;\\n  background-color: rgba(230, 245, 243, 0.2);\\n}\\n.popup__btns .btn--add {\\n  background-color: #4db6ac;\\n  color: white;\\n  border: 2px solid #99d5cf;\\n}\\n.popup__btns .btn--add:hover {\\n  background-color: #009688;\\n}\\n\\n.task-view {\\n  position: fixed;\\n  max-height: 35rem;\\n  width: 55rem;\\n  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.4);\\n  color: #414342;\\n  padding: 3rem;\\n  background-color: white;\\n  border-radius: 5px;\\n  z-index: 800;\\n  font-weight: 300;\\n  display: flex;\\n  align-items: center;\\n  transition: all 0.3s;\\n}\\n.task-view--open {\\n  transform: scale(1);\\n  visibility: visible;\\n}\\n.task-view--close {\\n  position: absolute;\\n  top: 0.8rem;\\n  right: 1.2rem;\\n  font-size: 3.5rem;\\n  line-height: 1;\\n  cursor: pointer;\\n  transition: all 0.2s;\\n}\\n.task-view--close:hover {\\n  color: #4db6ac;\\n}\\n.task-view__content {\\n  font-size: 1.8rem;\\n  color: #414342;\\n}\\n.task-view__content > *:not(:first-child) {\\n  margin-bottom: 0.8rem;\\n}\\n.task-view__title {\\n  font-size: 2.8rem;\\n  font-weight: 500;\\n  color: #4db6ac;\\n  line-height: 1.2;\\n  margin-bottom: 2.8rem;\\n}\\n.task-view__name {\\n  font-weight: 500;\\n}\\n.task-view__category .task-view__name {\\n  margin-right: 3.6rem;\\n}\\n.task-view__priority .task-view__name {\\n  margin-right: 5.1rem;\\n}\\n.task-view__date .task-view__name {\\n  margin-right: 3.7rem;\\n}\\n.task-view__description .task-view__name {\\n  margin-right: 1.8rem;\\n}\\n.task-view__description {\\n  display: flex;\\n}\\n.task-view__description--text {\\n  max-height: 15rem;\\n  line-height: 1.5;\\n  overflow-y: scroll;\\n}\\n.task-view__description--text::-webkit-scrollbar {\\n  width: 6px;\\n}\\n.task-view__description--text::-webkit-scrollbar-track {\\n  background: transparent;\\n}\\n.task-view__description--text::-webkit-scrollbar-thumb {\\n  background: rgba(0, 150, 136, 0.7);\\n}\\n.task-view__description--text::-webkit-scrollbar-thumb:hover {\\n  background: #009688;\\n}\\n\\n.icon {\\n  height: 1.8rem;\\n  width: 1.8rem;\\n  fill: #414342;\\n  transition: all 0.2s;\\n}\\n.icon--pencil {\\n  height: 5rem;\\n  width: 5rem;\\n  fill: white;\\n  margin-right: 2rem;\\n}\\n.icon--edit {\\n  margin-left: 2rem;\\n}\\n.icon--edit:hover {\\n  scale: 1.15;\\n}\\n.icon--delete {\\n  fill: #adadad;\\n  margin-left: auto;\\n}\\n.icon--delete:hover {\\n  scale: 1.15;\\n}\\n\\n.add-item {\\n  line-height: 4.5rem;\\n  display: flex;\\n  align-items: center;\\n  margin-top: 0.5rem;\\n  gap: 1.5rem;\\n  padding: 0 2.2rem;\\n  border-radius: 0.5rem;\\n  cursor: pointer;\\n  transition: all 0.2s;\\n}\\n.add-item:hover {\\n  background-color: transparent;\\n  color: #4db6ac;\\n}\\n.add-item:hover svg {\\n  fill: #4db6ac;\\n}\\n.add-item--task {\\n  width: 20rem;\\n  margin: 0 7%;\\n}\\n\\n.checkbox__box {\\n  display: none;\\n}\\n.checkbox__label {\\n  font-size: 2rem;\\n  cursor: pointer;\\n  position: relative;\\n}\\n.checkbox__btn {\\n  height: 2rem;\\n  width: 2rem;\\n  border-radius: 50%;\\n  border: 3px solid #c2c2c2;\\n  position: absolute;\\n  left: -2rem;\\n  top: 0.3rem;\\n}\\n.checkbox__btn::after {\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  content: \\\"\\\";\\n  display: block;\\n  height: 10px;\\n  width: 10px;\\n  position: absolute;\\n  border-radius: 50%;\\n  opacity: 0;\\n  transition: opacity 0.2s;\\n}\\n.checkbox__box:checked ~ .checkbox__label .checkbox__btn::after {\\n  opacity: 1;\\n  background-color: #adadad;\\n}\\n\\n.no-display {\\n  display: none;\\n}\\n\\n.hidden {\\n  opacity: 0;\\n  visibility: hidden;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ \"./src/js/model.js\");\n/* harmony import */ var _views_categoryPopupView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/categoryPopupView.js */ \"./src/js/views/categoryPopupView.js\");\n/* harmony import */ var _views_taskPopupView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/taskPopupView.js */ \"./src/js/views/taskPopupView.js\");\n/* harmony import */ var _views_addCategoryView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/addCategoryView.js */ \"./src/js/views/addCategoryView.js\");\n/* harmony import */ var _views_addTaskView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/addTaskView */ \"./src/js/views/addTaskView.js\");\n\n\n\n\n\n\n\nconst controlAddCategory = function (newCategory) {\n  _views_addCategoryView_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render(newCategory);\n};\n\nconst controlAddTask = function (newTask) {\n  _views_addTaskView__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render(newTask);\n};\n\nconst init = function () {\n  _views_addCategoryView_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addHandlerCreate(controlAddCategory);\n  _views_addTaskView__WEBPACK_IMPORTED_MODULE_5__[\"default\"].addHandlerCreate(controlAddTask);\n};\ninit();\n\n\n//# sourceURL=webpack://todo/./src/js/index.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCategory\": () => (/* binding */ addCategory),\n/* harmony export */   \"state\": () => (/* binding */ state),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst state = {\n  category: { title: '', task: {} },\n  newCategory: [],\n};\n\nconst todo = [];\n\nlet title = 'Category from ??JS';\nlet taskName = 'Task from ??JS';\nlet dueDate = 'Nov 1';\nlet completed = false;\n\nstate.category.title = title;\nstate.category.task = {\n  taskName: taskName,\n  dueDate: dueDate,\n  completed: false,\n};\n\nstate.category;\n\nconst addCategory = function (data) {\n  state.newCategory.push(data);\n};\n\n\n//# sourceURL=webpack://todo/./src/js/model.js?");

/***/ }),

/***/ "./src/js/views/View.js":
/*!******************************!*\
  !*** ./src/js/views/View.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n  _data;\n\n  render(data) {\n    this._data = data;\n    this._parentElement.insertAdjacentHTML('afterbegin', this._generateMarkup());\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/js/views/View.js?");

/***/ }),

/***/ "./src/js/views/addCategoryView.js":
/*!*****************************************!*\
  !*** ./src/js/views/addCategoryView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/views/View.js\");\n\n\nclass AddCategoryView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  _parentElement = document.querySelector('.category-container');\n  _btnAdd = document.querySelector('.category-popup__add');\n\n  addHandlerCreate(handler) {\n    this._btnAdd.addEventListener('click', function () {\n      const data = document.querySelector('.popup__input--category').value;\n      handler(data);\n      document.querySelector('.popup__input--category').value = '';\n      document.querySelector('.add-item--category').classList.remove('no-display');\n      document.querySelector('.popup__category').classList.add('no-display');\n    });\n  }\n\n  _generateMarkup() {\n    return `\n             <li class=\"categories__item sidebar__filter-option heading-4\">\n                 <svg class=\"icon \">\n                     <use href=\"sprite.svg#icon-format_list_bulleted\"></use>\n                   </svg>\n                    ${this._data}\n                   <svg class=\"icon categories__item--delete icon--delete\">\n                        <use href=\"sprite.svg#icon-bin\"></use>\n                 </svg>\n             </li>\n            `;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddCategoryView());\n\n\n//# sourceURL=webpack://todo/./src/js/views/addCategoryView.js?");

/***/ }),

/***/ "./src/js/views/addTaskView.js":
/*!*************************************!*\
  !*** ./src/js/views/addTaskView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/js/views/View.js\");\n\n\nclass AddTaskView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  _parentElement = document.querySelector('.task-container');\n  _btnAdd = document.querySelector('.task-popup__add');\n\n  addHandlerCreate(handler) {\n    this._btnAdd.addEventListener('click', function () {\n      const taskName = document.querySelector('.popup__task--name').value;\n      const dueDate = document.querySelector('.popup__task--date').value;\n      const data = { taskName: taskName, dueDate: dueDate, completed: false };\n      handler(data);\n      document.querySelector('.popup__task--name').value = '';\n      document.querySelector('.add-item--task').classList.remove('no-display');\n      document.querySelector('.popup__task').classList.add('no-display');\n    });\n  }\n\n  _generateMarkup() {\n    //TODO update task priority in class-name, task id number\n    return `\n            <div class=\"task task--p1\">\n                <div class=\"task__head\">\n                    <input type=\"checkbox\" id=\"${this._data.taskName}\" class=\"checkbox__box\">\n                    <label for=\"${this._data.taskName}\" class=\"checkbox__label\">\n                        <span class=\"checkbox__btn\"></span>\n                    </label>\n                    <p class=\"task__title  heading-3\">${this._data.taskName}</p>\n                </div>\n                <div class=\"task__details\">\n                    <p class=\"task__date heading-3\">${this._data.dueDate}</p>\n                    <svg class=\"icon task--edit icon--edit\">\n                        <use href=\"sprite.svg#icon-edit\"></use>\n                    </svg>\n                    <svg class=\"icon task--delete icon--delete\">\n                        <use href=\"sprite.svg#icon-bin\"></use>\n                    </svg>\n                </div>\n            </div>\n            `;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AddTaskView());\n\n\n//# sourceURL=webpack://todo/./src/js/views/addTaskView.js?");

/***/ }),

/***/ "./src/js/views/categoryPopupView.js":
/*!*******************************************!*\
  !*** ./src/js/views/categoryPopupView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CategoryPopupView {\n  _popup = document.querySelector('.popup__category');\n  _btnOpen = document.querySelector('.add-item--category');\n  _btnCancel = document.querySelector('.category-popup__cancel');\n  _input = document.querySelector('.popup__input--category');\n\n  constructor() {\n    this._addHandlerShowPopup();\n    this._addHandlerCancelPopup();\n  }\n\n  showPopup() {\n    this._popup.classList.remove('no-display');\n    this._btnOpen.classList.add('no-display');\n    this._input.focus();\n  }\n\n  cancelPopup() {\n    this._input.value = '';\n    this._popup.classList.add('no-display');\n    this._btnOpen.classList.remove('no-display');\n  }\n\n  _addHandlerShowPopup() {\n    this._btnOpen.addEventListener('click', this.showPopup.bind(this));\n  }\n\n  _addHandlerCancelPopup() {\n    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CategoryPopupView());\n\n\n//# sourceURL=webpack://todo/./src/js/views/categoryPopupView.js?");

/***/ }),

/***/ "./src/js/views/taskPopupView.js":
/*!***************************************!*\
  !*** ./src/js/views/taskPopupView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TaskPopupView {\n  _popup = document.querySelector('.popup__task');\n  _btnOpen = document.querySelector('.add-item--task');\n  _btnCancel = document.querySelector('.task-popup__cancel');\n  _input = document.querySelector('.popup__task--name');\n\n  constructor() {\n    this._addHandlerShowPopup();\n    this._addHandlerCancelPopup();\n  }\n\n  showPopup() {\n    this._popup.classList.remove('no-display');\n    this._btnOpen.classList.add('no-display');\n    this._input.focus();\n  }\n\n  cancelPopup() {\n    this._input.value = '';\n    this._popup.classList.add('no-display');\n    this._btnOpen.classList.remove('no-display');\n  }\n\n  _addHandlerShowPopup() {\n    this._btnOpen.addEventListener('click', this.showPopup.bind(this));\n  }\n\n  _addHandlerCancelPopup() {\n    this._btnCancel.addEventListener('click', this.cancelPopup.bind(this));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TaskPopupView());\n\n\n//# sourceURL=webpack://todo/./src/js/views/taskPopupView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;