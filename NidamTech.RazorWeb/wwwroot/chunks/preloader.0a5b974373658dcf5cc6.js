(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preloader"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/webpack-import-glob-loader/index.js!./src/base/shared/loader.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!(webpack)-import-glob-loader!./src/base/shared/loader.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".dimmer {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 9998;\\n  opacity: 0;\\n  visibility: hidden;\\n  -webkit-transition: visibility 1s, opacity 1s ease-out;\\n  transition: visibility 1s, opacity 1s ease-out; }\\n  .dimmer.active {\\n    background-color: white;\\n    opacity: 1;\\n    visibility: visible; }\\n  .dimmer .loader {\\n    visibility: hidden;\\n    position: relative;\\n    top: 50%;\\n    -webkit-transition: visibility 0.6s;\\n    transition: visibility 0.6s; }\\n    .dimmer .loader.active {\\n      visibility: visible; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/base/shared/loader.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/lib/loader.js!(webpack)-import-glob-loader");

/***/ }),

/***/ "./src/base/shared/loader.js":
/*!***********************************!*\
  !*** ./src/base/shared/loader.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.scss */ \"./src/base/shared/loader.scss\");\n/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n$(window).on('load', function () {\n  $(\".loader, .dimmer\").removeClass('active');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/base/shared/loader.js?");

/***/ }),

/***/ "./src/base/shared/loader.scss":
/*!*************************************!*\
  !*** ./src/base/shared/loader.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--4-2!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/webpack-import-glob-loader!./loader.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/webpack-import-glob-loader/index.js!./src/base/shared/loader.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/base/shared/loader.scss?");

/***/ })

}]);