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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MediaModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MediaModal */ \"./components/MediaModal.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var mediaPaths = [\n        \"/images/videos/number1.mp4\",\n        \"/images/videos/number2.mp4\",\n        \"/images/videos/number3.mp4\",\n        \"/images/videos/number4.mp4\",\n        \"/images/action/photo7.jpg\",\n        \"/images/action/photo6.jpg\",\n        \"/images/action/photo2.jpg\",\n        \"/images/action/photo5.jpg\",\n        \"/images/action/photo1.jpg\",\n        \"/images/action/photo4.jpg\",\n        \"/images/action/photo3.jpg\",\n        \"/images/action/photo.jpg\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), fullscreenSrc = ref[0], setFullscreenSrc = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleRouteChange = function() {\n            var audio = document.getElementById(\"background-music\");\n            audio.play();\n        };\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", handleRouteChange);\n        return function() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            '\"',\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"background-image\",\n                    style: {\n                        backgroundImage: \"url('/images/background-more/fundo1.png')\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 3\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"background-containerfundo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row justify-between w-full p-40 px-30 items-center h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col lg:justify-start justify-center items-center lg:items-start mt-6 lg:mt-0 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"order-first lg:order-last flex-shrink-0 lg:w-[800px] h-[100px] ml-auto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl md:text-3xl lg:text-4xl text-white font-semibold\",\n                        children: \"CATCH ME IN ACTION\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full mt-1\",\n                        children: mediaPaths.map(function(mediaPath, index) {\n                            var isImage = mediaPath.endsWith(\".jpg\");\n                            var containerStyle = {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                justifyContent: \"center\",\n                                background: \"rgba(0, 0, 0, 0.2)\",\n                                padding: \"0.5rem\"\n                            };\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: containerStyle,\n                                className: \"hover:bg-neutral-800/20 hover:shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg\",\n                                onClick: function() {\n                                    return setFullscreenSrc(mediaPath);\n                                },\n                                children: isImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: \"Image \".concat(index + 1),\n                                    src: mediaPath,\n                                    className: \"rounded-lg max-w-full max-h-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    controls: true,\n                                    className: \"rounded-lg max-w-full max-h-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            src: mediaPath,\n                                            type: \"video/mp4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, _this),\n                                        \"Your browser does not support the video tag.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 19\n                                }, _this)\n                            }, \"media-\".concat(index), false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\index.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ0Q7QUFDakI7QUFFakMsSUFBTUssSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQU1DLFVBQVUsR0FBRztRQUNqQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDBCQUEwQjtLQUMzQjtJQUVELElBQTBDTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpETSxhQUFhLEdBQXNCTixHQUFjLEdBQXBDLEVBQUVPLGdCQUFnQixHQUFJUCxHQUFjLEdBQWxCO0lBS3RDQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNTyxpQkFBaUIsR0FBRyxXQUFNO1lBQzlCLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7WUFDekRGLEtBQUssQ0FBQ0csSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDO1FBRURULDREQUFnQixDQUFDLGtCQUFrQixFQUFFSyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXhELE9BQU8sV0FBTTtZQUNYTCw2REFBaUIsQ0FBQyxrQkFBa0IsRUFBRUssaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTs7WUFBRSxHQUVIOzBCQUFBLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzBCQUN0Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjtvQkFBQ0MsS0FBSyxFQUFFO3dCQUFFQyxlQUFlLEVBQUcsMkNBQXlDO3FCQUFHOzs7Ozt5QkFBUTs7Ozs7cUJBRTdHOzBCQUVBLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzs7OztxQkFBTzswQkFFakQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOztrQ0FDdkIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7OzBDQUM5Riw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLCtGQUErRjswQ0FDNUcsNEVBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7Ozs7O3lDQUFPOzs7OztxQ0FDckM7MENBQ04sOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx3RUFBd0U7Ozs7O3FDQUVqRjs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDRyxJQUFFOzs7OzZCQUFNOzs7Ozs7cUJBQ0w7MEJBRU4sOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROztrQ0FDdkIsOERBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQywyREFBMkQ7a0NBQUMsb0JBQWtCOzs7Ozs2QkFBSTtrQ0FDN0YsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxrRUFBa0U7a0NBQzlFWixVQUFVLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEVBQUs7NEJBQ3BDLElBQU1DLE9BQU8sR0FBR0YsU0FBUyxDQUFDRyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUMxQyxJQUFNQyxjQUFjLEdBQUc7Z0NBQ3JCQyxPQUFPLEVBQUUsTUFBTTtnQ0FDZkMsVUFBVSxFQUFFLFFBQVE7Z0NBQ3BCQyxjQUFjLEVBQUUsUUFBUTtnQ0FDeEJDLFVBQVUsRUFBRSxvQkFBb0I7Z0NBQ2hDQyxPQUFPLEVBQUUsUUFBUTs2QkFDbEI7NEJBQ0QscUJBQ0UsOERBQUNoQixLQUFHO2dDQUVGRSxLQUFLLEVBQUVTLGNBQWM7Z0NBQ3JCVixTQUFTLEVBQUMsZ0dBQWdHO2dDQUMxR2dCLE9BQU8sRUFBRTsyQ0FBTTFCLGdCQUFnQixDQUFDZ0IsU0FBUyxDQUFDO2lDQUFBOzBDQUV6Q0UsT0FBTyxpQkFDTiw4REFBQ1MsS0FBRztvQ0FBQ0MsR0FBRyxFQUFFLFFBQU8sQ0FBWSxPQUFWWCxLQUFLLEdBQUcsQ0FBQyxDQUFFO29DQUFFWSxHQUFHLEVBQUViLFNBQVM7b0NBQUVOLFNBQVMsRUFBQyxrQ0FBa0M7Ozs7O3lDQUFHLGlCQUUvRiw4REFBQ29CLE9BQUs7b0NBQUNDLFFBQVE7b0NBQUNyQixTQUFTLEVBQUMsa0NBQWtDOztzREFDMUQsOERBQUNzQixRQUFNOzRDQUFDSCxHQUFHLEVBQUViLFNBQVM7NENBQUVpQixJQUFJLEVBQUMsV0FBVzs7Ozs7aURBQUc7d0NBQUEsOENBRTdDOzs7Ozs7eUNBQVE7K0JBWEwsUUFBTyxDQUFRLE9BQU5oQixLQUFLLENBQUU7Ozs7cUNBYWpCLENBQ047d0JBQ0osQ0FBQyxDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNGOztvQkFHTCxDQUNIO0FBQ0osQ0FBQztHQTVGS3BCLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQThGViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVkaWFNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01lZGlhTW9kYWwnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVkaWFQYXRocyA9IFtcclxuICAgICcvaW1hZ2VzL3ZpZGVvcy9udW1iZXIxLm1wNCcsXHJcbiAgICAnL2ltYWdlcy92aWRlb3MvbnVtYmVyMi5tcDQnLFxyXG4gICAgJy9pbWFnZXMvdmlkZW9zL251bWJlcjMubXA0JyxcclxuICAgICcvaW1hZ2VzL3ZpZGVvcy9udW1iZXI0Lm1wNCcsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG83LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG82LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG8yLmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG81LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG8xLmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG80LmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG8zLmpwZycsXHJcbiAgICAnL2ltYWdlcy9hY3Rpb24vcGhvdG8uanBnJyxcclxuICBdO1xyXG5cclxuICBjb25zdCBbZnVsbHNjcmVlblNyYywgc2V0RnVsbHNjcmVlblNyY10gPSB1c2VTdGF0ZShudWxsKTtcclxuIFxyXG5cclxuICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW11c2ljJyk7XHJcbiAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICBcclxuICBcIjxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9pbWFnZXMvYmFja2dyb3VuZC1tb3JlL2Z1bmRvMS5wbmcnKWAgfX0+PC9kaXY+XHJcbiAgXHJcbjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lcmZ1bmRvXCI+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC00MCBweC0zMCBpdGVtcy1jZW50ZXIgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6anVzdGlmeS1zdGFydCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgbXQtNiBsZzptdC0wIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZmlyc3QgbGc6b3JkZXItbGFzdCBmbGV4LXNocmluay0wIGxnOnctWzgwMHB4XSBoLVsxMDBweF0gbWwtYXV0b1wiPlxyXG4gICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjAwXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPkNBVENIIE1FIElOIEFDVElPTjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgdy1mdWxsIG10LTFcIj5cclxuICAgICAgICAgIHttZWRpYVBhdGhzLm1hcCgobWVkaWFQYXRoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0ltYWdlID0gbWVkaWFQYXRoLmVuZHNXaXRoKCcuanBnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtgbWVkaWEtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctbmV1dHJhbC04MDAvMjAgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsc2NyZWVuU3JjKG1lZGlhUGF0aCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2lzSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtgSW1hZ2UgJHtpbmRleCArIDF9YH0gc3JjPXttZWRpYVBhdGh9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgbWF4LXctZnVsbCBtYXgtaC1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx2aWRlbyBjb250cm9scyBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG1heC13LWZ1bGwgbWF4LWgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXttZWRpYVBhdGh9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVkaWFNb2RhbCIsIlJvdXRlciIsIkhvbWUiLCJtZWRpYVBhdGhzIiwiZnVsbHNjcmVlblNyYyIsInNldEZ1bGxzY3JlZW5TcmMiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXkiLCJldmVudHMiLCJvbiIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYnIiLCJwIiwibWFwIiwibWVkaWFQYXRoIiwiaW5kZXgiLCJpc0ltYWdlIiwiZW5kc1dpdGgiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm9uQ2xpY2siLCJpbWciLCJhbHQiLCJzcmMiLCJ2aWRlbyIsImNvbnRyb2xzIiwic291cmNlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});