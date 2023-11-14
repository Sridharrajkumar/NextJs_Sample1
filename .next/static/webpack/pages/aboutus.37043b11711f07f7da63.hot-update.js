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
  var navigate = useNav;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBYm91dFBhZ2UiLCJuYXZpZ2F0ZSIsInVzZU5hdiIsImRldmVsb3BlciIsImlkIiwibmFtZSIsInJvbGUiLCJiYWNrSGFuZGxlciIsIm1hcCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUVwQixNQUFNQyxRQUFRLEdBQUNDLE1BQWY7QUFHQSxNQUFNQyxTQUFTLEdBQUcsQ0FDZDtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsTUFBZjtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBRGMsRUFFZDtBQUFFRixNQUFFLEVBQUcsQ0FBUDtBQUFVQyxRQUFJLEVBQUUsU0FBaEI7QUFBMkJDLFFBQUksRUFBRTtBQUFqQyxHQUZjLEVBR2Q7QUFBRUYsTUFBRSxFQUFHLENBQVA7QUFBVUMsUUFBSSxFQUFFLFFBQWhCO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FIYyxDQUFsQjs7QUFNQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNLENBRXpCLENBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUROLGVBRU07QUFBQSxnQkFDS0osU0FBUyxDQUFDSyxHQUFWLENBQWMsVUFBQUMsR0FBRyxFQUFJO0FBQ2xCO0FBQ0EsNEJBQVE7QUFBQSxpQ0FBSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLHFCQUFjQSxHQUFHLENBQUNMLEVBQWxCLENBQVY7QUFBQSxzQkFBbUNLLEdBQUcsQ0FBQ0o7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUFDSCxPQUhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZOLGVBUU07QUFBUSxhQUFPLEVBQUVFLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQTNCSDs7S0FBTVAsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXR1cy4zNzA0M2IxMTcxMWYwN2Y3ZGE2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZT11c2VOYXZcclxuXHJcblxyXG4gICAgY29uc3QgZGV2ZWxvcGVyID0gW1xyXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInIH0sXHJcbiAgICAgICAgeyBpZCA6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJ31cclxuICAgIF1cclxuICAgIFxyXG4gICAgY29uc3QgYmFja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDE+RGVsZXZvcGVyIExpc3Q8L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7ZGV2ZWxvcGVyLm1hcChkZXYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuICg8bGkga2V5PXtkZXYuaWR9PjxMaW5rIGhyZWY9e2AvJHtkZXYuaWR9YH0+e2Rldi5uYW1lfTwvTGluaz48L2xpPik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGk+PExpbmsgaHJlZj17YC9hYm91dHVzLyR7ZGV2LmlkfWB9PntkZXYubmFtZX08L0xpbms+PC9saT4pXHJcbiAgICAgICAgICAgICAgICB9KSB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YmFja0hhbmRsZXJ9PkJhY2s8L2J1dHRvbj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQYWdlO1xyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9