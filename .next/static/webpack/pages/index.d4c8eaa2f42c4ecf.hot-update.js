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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MediaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MediaModal */ \"./components/MediaModal.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var mediaPaths = [\n        \"/images/videos/number1.mp4\",\n        \"/images/videos/number2.mp4\",\n        \"/images/videos/number3.mp4\",\n        \"/images/videos/number4.mp4\",\n        \"/images/videos/number5.mp4\",\n        \"/images/videos/number6.mp4\",\n        \"/images/videos/number7.mp4\",\n        \"/images/videos/number8.mp4\",\n        \"/images/action/photo10.jpg\",\n        \"/images/action/photo9.jpg\",\n        \"/images/action/photo8.jpg\",\n        \"/images/action/photo7.jpg\",\n        \"/images/action/photo6.jpg\",\n        \"/images/action/photo2.jpg\",\n        \"/images/action/photo5.jpg\",\n        \"/images/action/photo1.jpg\",\n        \"/images/action/photo4.jpg\",\n        \"/images/action/photo3.jpg\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), fullscreenSrc = ref[0], setFullscreenSrc = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleRouteChange = function() {\n            var audio = document.getElementById(\"background-music\");\n            audio.play();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", handleRouteChange);\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleMouseMove = function(e) {\n            var customCursor = document.querySelector(\".custom-cursor\");\n            customCursor.style.left = e.pageX + \"px\";\n            customCursor.style.top = e.pageY + \"px\";\n            // Criar estrela\n            var star = document.createElement(\"div\");\n            star.classList.add(\"star\");\n            star.style.left = e.pageX + \"px\";\n            star.style.top = e.pageY + \"px\";\n            document.body.appendChild(star);\n            setTimeout(function() {\n                star.remove();\n            }, 1500); // Tempo de vida das estrelas em milissegundos\n        };\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/background-more/fundonew.png\",\n                    alt: \"Background Image 1\",\n                    className: \"background-image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 3\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 76,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-containerfundo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row justify-between w-full p-40 px-30 items-center h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col lg:justify-start justify-center items-center lg:items-start mt-6 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"order-first lg:order-last flex-shrink-0 lg:w-[800px] h-[100px] ml-auto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row justify-between w-full p-40 px-30 items-center h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col lg:justify-start justify-center items-center lg:items-start mt-6 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 5\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"order-first lg:order-last flex-shrink-0 lg:w-[800px] h-[100px] ml-auto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 5\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 3\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 100,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl md:text-3xl lg:text-4xl text-white font-semibold \",\n                        children: \"CATCH ME IN ACTION\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-8 mt-8 \",\n                        children: mediaPaths.map(function(mediaPath, index) {\n                            var isImage = mediaPath.endsWith(\".jpg\");\n                            var containerStyle = {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                justifyContent: \"center\",\n                                background: \"rgba(0, 0, 0, 0.2)\",\n                                padding: \"0.1rem\"\n                            };\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: containerStyle,\n                                className: \"hover:bg-neutral-800/20 hover:shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg\",\n                                onClick: function() {\n                                    return setFullscreenSrc(mediaPath);\n                                },\n                                children: isImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: \"Image \".concat(index + 1),\n                                    src: mediaPath,\n                                    className: \"rounded-lg max-w-full max-h-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 19\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    controls: true,\n                                    playsInline: true,\n                                    className: \"rounded-lg max-w-full max-h-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            src: mediaPath,\n                                            type: \"video/mp4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 20\n                                        }, _this),\n                                        \"Your browser does not support the video tag.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 19\n                                }, _this)\n                            }, \"media-\".concat(index), false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"J2ZUa9KThBV6uW+KTtJO6m6y82E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUMxQyxJQUFNQyxjQUFjLEdBQUc7Z0NBQ3JCQyxPQUFPLEVBQUUsTUFBTTtnQ0FDZkMsVUFBVSxFQUFFLFFBQVE7Z0NBQ3BCQyxjQUFjLEVBQUUsUUFBUTtnQ0FDeEJDLFVBQVUsRUFBRSxvQkFBb0I7Z0NBQ2hDQyxPQUFPLEVBQUUsUUFBUTs2QkFDbEI7NEJBQ0QscUJBQ0UsOERBQUNqQixLQUFHO2dDQUVGZixLQUFLLEVBQUUyQixjQUFjO2dDQUNyQlgsU0FBUyxFQUFDLGdHQUFnRztnQ0FDMUdpQixPQUFPLEVBQUU7MkNBQU05QyxnQkFBZ0IsQ0FBQ29DLFNBQVMsQ0FBQztpQ0FBQTswQ0FFekNFLE9BQU8saUJBQ04sOERBQUNSLEtBQUc7b0NBQUNFLEdBQUcsRUFBRSxRQUFPLENBQVksT0FBVkssS0FBSyxHQUFHLENBQUMsQ0FBRTtvQ0FBRU4sR0FBRyxFQUFFSyxTQUFTO29DQUFFUCxTQUFTLEVBQUMsa0NBQWtDOzs7Ozt5Q0FBRyxpQkFFL0YsOERBQUNrQixPQUFLO29DQUFDQyxRQUFRO29DQUFDQyxXQUFXO29DQUFDcEIsU0FBUyxFQUFDLGtDQUFrQzs7c0RBQ3ZFLDhEQUFDcUIsUUFBTTs0Q0FBQ25CLEdBQUcsRUFBRUssU0FBUzs0Q0FBRWUsSUFBSSxFQUFDLFdBQVc7Ozs7O2lEQUFHO3dDQUFBLDhDQUU1Qzs7Ozs7O3lDQUFROytCQVhMLFFBQU8sQ0FBUSxPQUFOZCxLQUFLLENBQUU7Ozs7cUNBYWpCLENBQ047d0JBQ0osQ0FBQyxDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNGOztvQkFHTCxDQUNIO0FBQ0osQ0FBQztHQTVJS3hDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQThJViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVkaWFNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01lZGlhTW9kYWwnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lZGlhUGF0aHMgPSBbXHJcbiAgICAnL2ltYWdlcy92aWRlb3MvbnVtYmVyMS5tcDQnLFxyXG4gICAgJy9pbWFnZXMvdmlkZW9zL251bWJlcjIubXA0JyxcclxuICAgICcvaW1hZ2VzL3ZpZGVvcy9udW1iZXIzLm1wNCcsXHJcbiAgICAnL2ltYWdlcy92aWRlb3MvbnVtYmVyNC5tcDQnLFxyXG4gICAgJy9pbWFnZXMvdmlkZW9zL251bWJlcjUubXA0JyxcclxuICAgICcvaW1hZ2VzL3ZpZGVvcy9udW1iZXI2Lm1wNCcsXHJcbiAgICBcclxuICAgICcvaW1hZ2VzL3ZpZGVvcy9udW1iZXI3Lm1wNCcsXHJcbiAgICAnL2ltYWdlcy92aWRlb3MvbnVtYmVyOC5tcDQnLFxyXG4gICAgJy9pbWFnZXMvYWN0aW9uL3Bob3RvMTAuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzkuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzguanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzcuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzYuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzIuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzUuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzEuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzQuanBnJyxcclxuICAgICcvaW1hZ2VzL2FjdGlvbi9waG90bzMuanBnJyxcclxuICBcclxuICBdXHJcbiAgY29uc3QgW2Z1bGxzY3JlZW5TcmMsIHNldEZ1bGxzY3JlZW5TcmNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiBcclxuXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1tdXNpYycpO1xyXG4gICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tY3Vyc29yJyk7XHJcbiAgICAgIGN1c3RvbUN1cnNvci5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArICdweCc7XHJcbiAgICAgIGN1c3RvbUN1cnNvci5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcclxuXHJcbiAgICAgIC8vIENyaWFyIGVzdHJlbGFcclxuICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcclxuICAgICAgc3Rhci5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArICdweCc7XHJcbiAgICAgIHN0YXIuc3R5bGUudG9wID0gZS5wYWdlWSArICdweCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3Rhcik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHN0YXIucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDE1MDApOyAvLyBUZW1wbyBkZSB2aWRhIGRhcyBlc3RyZWxhcyBlbSBtaWxpc3NlZ3VuZG9zXHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb250YWluZXJcIj5cclxuICA8aW1nXHJcbiAgICBzcmM9XCIvaW1hZ2VzL2JhY2tncm91bmQtbW9yZS9mdW5kb25ldy5wbmdcIlxyXG4gICAgYWx0PVwiQmFja2dyb3VuZCBJbWFnZSAxXCJcclxuICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2VcIlxyXG4gIC8+XHJcbjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29udGFpbmVyZnVuZG9cIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBwLTQwIHB4LTMwIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpqdXN0aWZ5LXN0YXJ0IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzppdGVtcy1zdGFydCBtdC02ICB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWZpcnN0IGxnOm9yZGVyLWxhc3QgZmxleC1zaHJpbmstMCBsZzp3LVs4MDBweF0gaC1bMTAwcHhdIG1sLWF1dG9cIj5cclxuICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgey8qIEN1cnNvciBQZXJzb25hbGl6YWRvICovfVxyXG4gICAgICAgXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC00MCBweC0zMCBpdGVtcy1jZW50ZXIgaC1mdWxsXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6anVzdGlmeS1zdGFydCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgbXQtNiAgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1maXJzdCBsZzpvcmRlci1sYXN0IGZsZXgtc2hyaW5rLTAgbGc6dy1bODAwcHhdIGgtWzEwMHB4XSBtbC1hdXRvXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGJyIC8+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yMDBcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGwgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIFwiPkNBVENIIE1FIElOIEFDVElPTjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIG1kOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy0zIGdhcC04IG10LTggXCI+XHJcbiAgICAgICAgICB7bWVkaWFQYXRocy5tYXAoKG1lZGlhUGF0aCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNJbWFnZSA9IG1lZGlhUGF0aC5lbmRzV2l0aCgnLmpwZycpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjFyZW0nLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17YG1lZGlhLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLW5ldXRyYWwtODAwLzIwIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RnVsbHNjcmVlblNyYyhtZWRpYVBhdGgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpc0ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9IHNyYz17bWVkaWFQYXRofSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG1heC13LWZ1bGwgbWF4LWgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgcGxheXNJbmxpbmUgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBtYXgtdy1mdWxsIG1heC1oLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXttZWRpYVBhdGh9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVkaWFNb2RhbCIsIlJvdXRlciIsIkhvbWUiLCJtZWRpYVBhdGhzIiwiZnVsbHNjcmVlblNyYyIsInNldEZ1bGxzY3JlZW5TcmMiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXkiLCJldmVudHMiLCJvbiIsIm9mZiIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjdXN0b21DdXJzb3IiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsInN0YXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiYnIiLCJwIiwibWFwIiwibWVkaWFQYXRoIiwiaW5kZXgiLCJpc0ltYWdlIiwiZW5kc1dpdGgiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm9uQ2xpY2siLCJ2aWRlbyIsImNvbnRyb2xzIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});