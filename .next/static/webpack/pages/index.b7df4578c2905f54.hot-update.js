"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameField\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1 items-center text-xl leading-tight font-semibold\",\n                                children: [\n                                    \"Ход: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                        className: \"w-5 h-5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 18\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1 items-center text-xs leading-tight text-slate-400\",\n                                children: [\n                                    \"Следующий: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 24\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        size: \"md\",\n                        variant: \"primary\",\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        size: \"md\",\n                        variant: \"outlined\",\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]\",\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-200\"\n                    }, i, false, {\n                        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\ticTacToe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBRTlDLE1BQU1JLFFBQVEsSUFBSUMsTUFBTSxLQUFLLElBQUlDLEtBQUs7QUFFL0IsU0FBU0MsVUFBVSxLQUFhO1FBQWIsRUFBRUMsVUFBUyxFQUFFLEdBQWI7SUFHeEIscUJBQ0UsOERBQUNDO1FBQ0NELFdBQVdSLGdEQUFJQSxDQUNiUSxXQUNBOzswQkFHRiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztvQ0FBOEQ7a0RBQ3RFLDhEQUFDUCxzREFBUUE7d0NBQUNPLFdBQVU7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNDO2dDQUFJRCxXQUFVOztvQ0FBK0Q7a0RBQ2pFLDhEQUFDTix3REFBU0E7Ozs7O29DQUFJOzs7Ozs7Ozs7Ozs7O2tDQUc3Qiw4REFBQ0Msc0RBQVFBO3dCQUFDTyxNQUFNO3dCQUFNQyxTQUFTO2tDQUFXOzs7Ozs7a0NBRzFDLDhEQUFDUixzREFBUUE7d0JBQUNPLE1BQU07d0JBQU1DLFNBQVM7a0NBQVk7Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUNGO2dCQUFJRCxXQUFVOzBCQUNaSixNQUFNUSxJQUFJLENBQUNDLEdBQUdDLGtCQUFNLDhEQUFDQzt3QkFBZVAsV0FBVTt1QkFBYk07Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUM7S0EvQmdCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gXCIuL2ljb25zL3plcm8taWNvblwiO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tIFwiLi9pY29ucy9jcm9zcy1pY29uXCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xyXG5cclxuY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7IGNsYXNzTmFtZSB9KSB7XHJcbiAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCJcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgaXRlbXMtY2VudGVyIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgINCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgaXRlbXMtY2VudGVyIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxDcm9zc0ljb24gLz57XCIgXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VWlCdXR0b24gc2l6ZT17XCJtZFwifSB2YXJpYW50PXtcInByaW1hcnlcIn0+XHJcbiAgICAgICAgICDQndC40YfRjNGPXHJcbiAgICAgICAgPC9VaUJ1dHRvbj5cclxuICAgICAgICA8VWlCdXR0b24gc2l6ZT17XCJtZFwifSB2YXJpYW50PXtcIm91dGxpbmVkXCJ9PlxyXG4gICAgICAgICAg0KHQtNCw0YLRjNGB0Y9cclxuICAgICAgICA8L1VpQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXVwiPlxyXG4gICAgICAgIHtjZWxscy5tYXAoKF8sIGkpID0+IDxidXR0b24ga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMFwiPjwvYnV0dG9uPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiLCJ2YXJpYW50IiwibWFwIiwiXyIsImkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});