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
      lineNumber: 20,
      columnNumber: 9
    }, _this), selectedUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Role: ", selectedUser.role]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 26
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: backHandler,
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy8uanMiXSwibmFtZXMiOlsiRGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGV2ZWxvcGVyIiwiaWQiLCJuYW1lIiwicm9sZSIsInVzZXJpZCIsInF1ZXJ5Iiwic2VsZWN0ZWRVc2VyIiwiZmluZCIsImRldiIsIk51bWJlciIsImJhY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXRCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLE1BQWY7QUFBdUJDLFFBQUksRUFBRTtBQUE3QixHQURnQixFQUVoQjtBQUFFRixNQUFFLEVBQUcsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsU0FBaEI7QUFBMkJDLFFBQUksRUFBRTtBQUFqQyxHQUZnQixFQUdoQjtBQUFFRixNQUFFLEVBQUcsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsUUFBaEI7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUhnQixDQUFsQjtBQU1BLE1BQU1DLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxLQUFQLENBQWFKLEVBQTVCO0FBRUEsTUFBTUssWUFBWSxHQUFHTixTQUFTLENBQUNPLElBQVYsQ0FBZSxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDUCxFQUFKLEtBQVdRLE1BQU0sQ0FBQ0wsTUFBRCxDQUFyQjtBQUFBLEdBQWxCLENBQXJCO0FBR0Usc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0osSUFBaEIsR0FBdUI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdJLFlBQVksaUJBQUk7QUFBQSwyQkFBVUEsWUFBWSxDQUFDSCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbkIsZUFHRTtBQUFRLGFBQU8sRUFBRU8sV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBdEJIOztHQUFNYixTO1VBRVdFLHFEOzs7S0FGWEYsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXR1cy9baWRdLjUwMzJlNjcwYjY4MDkyODk5MzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBEZXZlbG9wZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBkZXZlbG9wZXIgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gICAgeyBpZCA6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJ30sXHJcbiAgICB7IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG4gIF1cclxuXHJcbiAgY29uc3QgdXNlcmlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gIFxyXG4gIGNvbnN0IHNlbGVjdGVkVXNlciA9IGRldmVsb3Blci5maW5kKGRldiA9PiBkZXYuaWQgPT09IE51bWJlcih1c2VyaWQpKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3NlbGVjdGVkVXNlciA/IHNlbGVjdGVkVXNlci5uYW1lIDogXCJEZXZlbG9wZXIgZG9lc24ndCBleGlzdFwifTwvaDE+XHJcbiAgICAgICAge3NlbGVjdGVkVXNlciAmJiA8cD5Sb2xlOiB7c2VsZWN0ZWRVc2VyLnJvbGV9PC9wPn1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JhY2tIYW5kbGVyfT5CYWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wZXI7XHJcbiAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=