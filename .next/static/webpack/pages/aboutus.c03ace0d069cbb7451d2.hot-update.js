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
      lineNumber: 22,
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
            lineNumber: 26,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: backHandler,
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBYm91dFBhZ2UiLCJkZXZlbG9wZXIiLCJpZCIsIm5hbWUiLCJyb2xlIiwiYmFja0hhbmRsZXIiLCJtYXAiLCJkZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFJcEIsTUFBTUMsU0FBUyxHQUFHLENBQ2Q7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLE1BQWY7QUFBdUJDLFFBQUksRUFBRTtBQUE3QixHQURjLEVBRWQ7QUFBRUYsTUFBRSxFQUFHLENBQVA7QUFBVUMsUUFBSSxFQUFFLFNBQWhCO0FBQTJCQyxRQUFJLEVBQUU7QUFBakMsR0FGYyxFQUdkO0FBQUVGLE1BQUUsRUFBRyxDQUFQO0FBQVVDLFFBQUksRUFBRSxRQUFoQjtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBSGMsQ0FBbEI7O0FBTUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTSxDQUV6QixDQUZEOztBQUlBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETixlQUVNO0FBQUEsZ0JBQ0tKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNsQjtBQUNBLDRCQUFRO0FBQUEsaUNBQUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxxQkFBY0EsR0FBRyxDQUFDTCxFQUFsQixDQUFWO0FBQUEsc0JBQW1DSyxHQUFHLENBQUNKO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBQ0gsT0FIQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGTixlQVFNO0FBQVEsYUFBTyxFQUFFRSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0ExQkg7O0tBQU1MLFM7QUEyQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMuYzAzYWNlMGQwNjljYmI3NDUxZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBkZXZlbG9wZXIgPSBbXHJcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICAgICAgICB7IGlkIDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInfSxcclxuICAgICAgICB7IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBjb25zdCBiYWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoMT5EZWxldm9wZXIgTGlzdDwvaDE+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtkZXZlbG9wZXIubWFwKGRldiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gKDxsaSBrZXk9e2Rldi5pZH0+PExpbmsgaHJlZj17YC8ke2Rldi5pZH1gfT57ZGV2Lm5hbWV9PC9MaW5rPjwvbGk+KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaT48TGluayBocmVmPXtgL2Fib3V0dXMvJHtkZXYuaWR9YH0+e2Rldi5uYW1lfTwvTGluaz48L2xpPilcclxuICAgICAgICAgICAgICAgIH0pIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtiYWNrSGFuZGxlcn0+QmFjazwvYnV0dG9uPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9O1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2U7XHJcbiAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=