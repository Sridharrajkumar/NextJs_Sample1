webpackHotUpdate_N_E("pages/aboutus/[id]",{

/***/ "./pages/aboutus/[id].js":
/*!*******************************!*\
  !*** ./pages/aboutus/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\sharpener\\secondTime\\nextjsfirstproject\\pages\\aboutus\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();




var Developer = function Developer() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
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
  var userid = router.query.id;
  var selectedUser = developer.find(function (dev) {
    return dev.id === Number(userid);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: selectedUser ? selectedUser.name : "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this), selectedUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Role: ", selectedUser.role]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 26
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/aboutus",
      children: "Back to Developer List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, _this);
};

_s(Developer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Developer;
/* harmony default export */ __webpack_exports__["default"] = (Developer);

var _c;

$RefreshReg$(_c, "Developer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy8uanMiXSwibmFtZXMiOlsiRGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGV2ZWxvcGVyIiwiaWQiLCJuYW1lIiwicm9sZSIsInVzZXJpZCIsInF1ZXJ5Iiwic2VsZWN0ZWRVc2VyIiwiZmluZCIsImRldiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsTUFBZjtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBRGdCLEVBRWhCO0FBQUVGLE1BQUUsRUFBRyxDQUFQO0FBQVVDLFFBQUksRUFBRSxTQUFoQjtBQUEyQkMsUUFBSSxFQUFFO0FBQWpDLEdBRmdCLEVBR2hCO0FBQUVGLE1BQUUsRUFBRyxDQUFQO0FBQVVDLFFBQUksRUFBRSxRQUFoQjtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBSGdCLENBQWxCO0FBTUEsTUFBTUMsTUFBTSxHQUFHTixNQUFNLENBQUNPLEtBQVAsQ0FBYUosRUFBNUI7QUFFQSxNQUFNSyxZQUFZLEdBQUdOLFNBQVMsQ0FBQ08sSUFBVixDQUFlLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNQLEVBQUosS0FBV1EsTUFBTSxDQUFDTCxNQUFELENBQXJCO0FBQUEsR0FBbEIsQ0FBckI7QUFDRSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtFLFlBQVksR0FBR0EsWUFBWSxDQUFDSixJQUFoQixHQUF1QjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0ksWUFBWSxpQkFBSTtBQUFBLDJCQUFVQSxZQUFZLENBQUNILElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZuQixlQUdFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBdEJIOztHQUFNTixTO1VBRVdFLHFEOzs7S0FGWEYsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXR1cy9baWRdLjJkNjJjZjliMWU4MmFlNDEwOWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IERldmVsb3BlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGRldmVsb3BlciA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInIH0sXHJcbiAgICB7IGlkIDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInfSxcclxuICAgIHsgaWQgOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3Blcid9XHJcbiAgXVxyXG5cclxuICBjb25zdCB1c2VyaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgXHJcbiAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gZGV2ZWxvcGVyLmZpbmQoZGV2ID0+IGRldi5pZCA9PT0gTnVtYmVyKHVzZXJpZCkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3NlbGVjdGVkVXNlciA/IHNlbGVjdGVkVXNlci5uYW1lIDogXCJEZXZlbG9wZXIgZG9lc24ndCBleGlzdFwifTwvaDE+XHJcbiAgICAgICAge3NlbGVjdGVkVXNlciAmJiA8cD5Sb2xlOiB7c2VsZWN0ZWRVc2VyLnJvbGV9PC9wPn1cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0dXNcIj5cclxuICAgICAgICAgIEJhY2sgdG8gRGV2ZWxvcGVyIExpc3RcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyO1xyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9