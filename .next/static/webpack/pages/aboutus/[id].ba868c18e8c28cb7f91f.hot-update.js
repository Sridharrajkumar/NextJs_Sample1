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
      style: {
        color: 'red'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        style: {
          color: 'red'
        },
        children: "< Back to Developer List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy8uanMiXSwibmFtZXMiOlsiRGV2ZWxvcGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGV2ZWxvcGVyIiwiaWQiLCJuYW1lIiwicm9sZSIsInVzZXJpZCIsInF1ZXJ5Iiwic2VsZWN0ZWRVc2VyIiwiZmluZCIsImRldiIsIk51bWJlciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUV0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxNQUFmO0FBQXVCQyxRQUFJLEVBQUU7QUFBN0IsR0FEZ0IsRUFFaEI7QUFBRUYsTUFBRSxFQUFHLENBQVA7QUFBVUMsUUFBSSxFQUFFLFNBQWhCO0FBQTJCQyxRQUFJLEVBQUU7QUFBakMsR0FGZ0IsRUFHaEI7QUFBRUYsTUFBRSxFQUFHLENBQVA7QUFBVUMsUUFBSSxFQUFFLFFBQWhCO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FIZ0IsQ0FBbEI7QUFNQSxNQUFNQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhSixFQUE1QjtBQUVBLE1BQU1LLFlBQVksR0FBR04sU0FBUyxDQUFDTyxJQUFWLENBQWUsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ1AsRUFBSixLQUFXUSxNQUFNLENBQUNMLE1BQUQsQ0FBckI7QUFBQSxHQUFsQixDQUFyQjtBQUNFLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0UsWUFBWSxHQUFHQSxZQUFZLENBQUNKLElBQWhCLEdBQXVCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHSSxZQUFZLGlCQUFJO0FBQUEsMkJBQVVBLFlBQVksQ0FBQ0gsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRm5CLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFLLEVBQUU7QUFBQ08sYUFBSyxFQUFDO0FBQVAsT0FBN0I7QUFBQSw2QkFDRTtBQUFHLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUU7QUFBVCxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0F0Qkg7O0dBQU1iLFM7VUFFV0UscUQ7OztLQUZYRixTO0FBdUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dHVzL1tpZF0uYmE4NjhjMThlOGMyOGNiN2Y5MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgRGV2ZWxvcGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZGV2ZWxvcGVyID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICAgIHsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgeyBpZCA6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJ31cclxuICBdXHJcblxyXG4gIGNvbnN0IHVzZXJpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBcclxuICBjb25zdCBzZWxlY3RlZFVzZXIgPSBkZXZlbG9wZXIuZmluZChkZXYgPT4gZGV2LmlkID09PSBOdW1iZXIodXNlcmlkKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57c2VsZWN0ZWRVc2VyID8gc2VsZWN0ZWRVc2VyLm5hbWUgOiBcIkRldmVsb3BlciBkb2Vzbid0IGV4aXN0XCJ9PC9oMT5cclxuICAgICAgICB7c2VsZWN0ZWRVc2VyICYmIDxwPlJvbGU6IHtzZWxlY3RlZFVzZXIucm9sZX08L3A+fVxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXR1c1wiIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4mbHQ7IEJhY2sgdG8gRGV2ZWxvcGVyIExpc3Q8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbmV4cG9ydCBkZWZhdWx0IERldmVsb3BlcjtcclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==