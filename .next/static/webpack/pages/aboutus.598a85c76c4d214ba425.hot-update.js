webpackHotUpdate_N_E("pages/aboutus",{

/***/ "./pages/aboutus/index.js":
/*!********************************!*\
  !*** ./pages/aboutus/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\sharpener\\secondTime\\nextjsfirstproject\\pages\\aboutus\\index.js",
    _this = undefined;




var AboutPage = function AboutPage() {
  var navigate = useNa;
  var developer = [{
    id: 1,
    name: 'Yash',
    role: 'Senior Developer'
  }, {
    id: 2,
    name: 'Vaibhav',
    role: 'Backend Developer'
  }, {
    id: 3,
    name: 'Suresh',
    role: 'Frontend Developer'
  }];

  var backHandler = function backHandler() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Delevoper List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: developer.map(function (dev) {
        //return (<li key={dev.id}><Link href={`/${dev.id}`}>{dev.name}</Link></li>);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/aboutus/".concat(dev.id),
            children: dev.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: backHandler,
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, _this);
};

_c = AboutPage;
/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

var _c;

$RefreshReg$(_c, "AboutPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBYm91dFBhZ2UiLCJuYXZpZ2F0ZSIsInVzZU5hIiwiZGV2ZWxvcGVyIiwiaWQiLCJuYW1lIiwicm9sZSIsImJhY2tIYW5kbGVyIiwibWFwIiwiZGV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBRXBCLE1BQU1DLFFBQVEsR0FBQ0MsS0FBZjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxDQUNkO0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxNQUFmO0FBQXVCQyxRQUFJLEVBQUU7QUFBN0IsR0FEYyxFQUVkO0FBQUVGLE1BQUUsRUFBRyxDQUFQO0FBQVVDLFFBQUksRUFBRSxTQUFoQjtBQUEyQkMsUUFBSSxFQUFFO0FBQWpDLEdBRmMsRUFHZDtBQUFFRixNQUFFLEVBQUcsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsUUFBaEI7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUhjLENBQWxCOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU0sQ0FFekIsQ0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE4sZUFFTTtBQUFBLGdCQUNLSixTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFBQyxHQUFHLEVBQUk7QUFDbEI7QUFDQSw0QkFBUTtBQUFBLGlDQUFJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUkscUJBQWNBLEdBQUcsQ0FBQ0wsRUFBbEIsQ0FBVjtBQUFBLHNCQUFtQ0ssR0FBRyxDQUFDSjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUNILE9BSEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRk4sZUFRTTtBQUFRLGFBQU8sRUFBRUUsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBM0JIOztLQUFNUCxTO0FBNEJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dHVzLjU5OGE4NWM3NmM0ZDIxNGJhNDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRlPXVzZU5hXHJcblxyXG5cclxuICAgIGNvbnN0IGRldmVsb3BlciA9IFtcclxuICAgICAgICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gICAgICAgIHsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3Blcid9XHJcbiAgICBdXHJcbiAgICBcclxuICAgIGNvbnN0IGJhY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGgxPkRlbGV2b3BlciBMaXN0PC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2RldmVsb3Blci5tYXAoZGV2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiAoPGxpIGtleT17ZGV2LmlkfT48TGluayBocmVmPXtgLyR7ZGV2LmlkfWB9PntkZXYubmFtZX08L0xpbms+PC9saT4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpPjxMaW5rIGhyZWY9e2AvYWJvdXR1cy8ke2Rldi5pZH1gfT57ZGV2Lm5hbWV9PC9MaW5rPjwvbGk+KVxyXG4gICAgICAgICAgICAgICAgfSkgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JhY2tIYW5kbGVyfT5CYWNrPC9idXR0b24+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH07XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==