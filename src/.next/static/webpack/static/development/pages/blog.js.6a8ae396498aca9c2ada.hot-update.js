webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ "../config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "../config.json", 1);
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/layout.scss */ "./styles/components/layout.scss");
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kendallstrautman/Forestry/initial-project/starter-blog-next/src/components/Layout.js";




function Layout(props) {
  var primaryColor = "#404040";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "".concat(_styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.layout, " ").concat( true && window.location.pathname == "/info" && _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.info_page),
    style: {
      backgroundColor: "".concat( true && window.location.pathname == "/info" && _config_json__WEBPACK_IMPORTED_MODULE_2__.primary_color)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.children));
}

/***/ })

})
//# sourceMappingURL=blog.js.6a8ae396498aca9c2ada.hot-update.js.map