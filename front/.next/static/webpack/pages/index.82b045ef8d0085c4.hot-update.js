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

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PostImages = function(param) {\n    var images = param.images;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImagesZoom = ref[0], setShowImagesZoom = ref[1];\n    var onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setShowImagesZoom(true);\n    }, []);\n    if (images.length === 1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                style: {\n                    maxHeight: \"500px\",\n                    maxWidth: \"500px\",\n                    margin: \"0 auto\"\n                },\n                src: images[0].src,\n                alt: images[0].src,\n                onClick: onZoom\n            }, void 0, false, {\n                fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false));\n    }\n    if (images.length === 2) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    style: {\n                        width: \"50%\",\n                        display: \"inline-block\"\n                    },\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    style: {\n                        width: \"50%\",\n                        display: \"inline-block\"\n                    },\n                    src: images[1].src,\n                    alt: images[1].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    role: \"presentation\",\n                    style: {\n                        width: \"50%\"\n                    },\n                    src: images[0].src,\n                    alt: images[0].src,\n                    onClick: onZoom\n                }, void 0, false, {\n                    fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"presentation\",\n                    style: {\n                        display: \"inline-block\",\n                        width: \"50%\",\n                        textAlign: \"center\",\n                        verticalAlign: \"middle\"\n                    },\n                    onClick: onZoom,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutlined, {}, void 0, false, {\n                            fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        images.length - 1,\n                        \"개의 사진 더보기\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeong-gisu/Desktop/pinned/dongdong/front/components/PostImages.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(PostImages, \"o+jj60ydjwcX0vZa2kDA92fwncY=\");\n_c = PostImages;\nPostImages.propTypes = {\n    images: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\nvar _c;\n$RefreshReg$(_c, \"PostImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUgseURBQWlCLENBQUNBLDBEQUFnQjtBQUM1QyxDQUFDO0FBRUQsK0RBQWVFLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanM/NTFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcbiAgfSwgW10pO1xuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PiBcbiAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjUwMHB4XCIsIG1heFdpZHRoOiBcIjUwMHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fSBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+IFxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBzcmM9e2ltYWdlc1sxXS5zcmN9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19IHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogXCI1MCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICA+XG4gICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59O1xuXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiUGx1c091dGxpbmVkIiwiUG9zdEltYWdlcyIsImltYWdlcyIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJsZW5ndGgiLCJpbWciLCJyb2xlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ3aWR0aCIsImRpc3BsYXkiLCJkaXYiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiYnIiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostImages.js\n");

/***/ })

});