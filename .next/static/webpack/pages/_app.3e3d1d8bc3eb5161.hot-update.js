"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ \"./node_modules/tippy.js/animations/scale-subtle.css\");\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ \"./node_modules/tippy.js/animations/scale-extreme.css\");\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js/animations/shift-away.css */ \"./node_modules/tippy.js/animations/shift-away.css\");\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tippy.js/animations/shift-toward.css */ \"./node_modules/tippy.js/animations/shift-toward.css\");\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar audioFiles = [\n    \"/audio/Drift Remix (Dirty).mp3\",\n    \"/audio/olivetheboy - GoodSin myfreemp3.vip.mp3\",\n    \"/audio/Blessed.mp3\",\n    \"/audio/My G.mp3\"\n];\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    var isHomePage = router.pathname === \"/index.jsx\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false), load = ref[0], setLoad = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0), currentAudioIndex = ref1[0], setCurrentAudioIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    }, []);\n    next_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeStart\", function() {\n        setLoad(false);\n        document.documentElement.style = \"pointer-events: none;\";\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeComplete\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_8___default().events.on(\"routeChangeError\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    var handleAudioChange = function(index) {\n        var audio = document.getElementById(\"background-music\");\n        audio.currentTime = 0;\n        setCurrentAudioIndex(index);\n        audio.src = audioFiles[index];\n        audio.play();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DJ PARADISE\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"https://media.discordapp.net/attachments/737348411568685066/954506783777493072/Umut_Bayraktar_Icon.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://pro.fontawesome.com/releases/v5.15.4/css/all.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \" h-full border-neutral-700/50 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                currentAudioIndex: currentAudioIndex,\n                                handleAudioChange: handleAudioChange,\n                                audioFiles: audioFiles\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, pageProps), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    isHomePage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-neutral-800/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:flex w-full items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \" Aline Nogueira Development Design\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 md:mt-0 flex items-center\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                id: \"background-music\",\n                src: audioFiles[currentAudioIndex]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"audio-player\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"tHQYj7aQtzhSc+88s63OP6A21f4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURuQk0sS0FBQUEsS0FBSztBQStFZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0ICd0aXBweS5qcy9hbmltYXRpb25zL3NjYWxlLXN1YnRsZS5jc3MnO1xyXG5pbXBvcnQgJ3RpcHB5LmpzL2FuaW1hdGlvbnMvc2NhbGUtZXh0cmVtZS5jc3MnO1xyXG5pbXBvcnQgJ3RpcHB5LmpzL2FuaW1hdGlvbnMvc2hpZnQtYXdheS5jc3MnO1xyXG5pbXBvcnQgJ3RpcHB5LmpzL2FuaW1hdGlvbnMvc2hpZnQtdG93YXJkLmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBhdWRpb0ZpbGVzID0gW1xyXG4gICcvYXVkaW8vRHJpZnQgUmVtaXggKERpcnR5KS5tcDMnLFxyXG4gICcvYXVkaW8vb2xpdmV0aGVib3kgLSBHb29kU2luIG15ZnJlZW1wMy52aXAubXAzJyxcclxuICAnL2F1ZGlvL0JsZXNzZWQubXAzJyxcclxuICAnL2F1ZGlvL015IEcubXAzJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGlzSG9tZVBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvaW5kZXguanN4JztcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRBdWRpb0luZGV4LCBzZXRDdXJyZW50QXVkaW9JbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSAncG9pbnRlci1ldmVudHM6IGFsbDsnO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xyXG4gICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSAncG9pbnRlci1ldmVudHM6IG5vbmU7JztcclxuICB9KTtcclxuXHJcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSAncG9pbnRlci1ldmVudHM6IGFsbDsnO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gJ3BvaW50ZXItZXZlbnRzOiBhbGw7JztcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBdWRpb0NoYW5nZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1tdXNpYycpO1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2V0Q3VycmVudEF1ZGlvSW5kZXgoaW5kZXgpO1xyXG4gICAgYXVkaW8uc3JjID0gYXVkaW9GaWxlc1tpbmRleF07XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfTtcclxuICByZXR1cm4gKDw+XHJcbiAgIDxMYXlvdXQ+PC9MYXlvdXQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+REogUEFSQURJU0U8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy83MzczNDg0MTE1Njg2ODUwNjYvOTU0NTA2NzgzNzc3NDkzMDcyL1VtdXRfQmF5cmFrdGFyX0ljb24ucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiID48L2xpbms+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3Byby5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuNC9jc3MvYWxsLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG5cclxuICAgIDwvSGVhZD5cclxuICBcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIiBoLWZ1bGwgYm9yZGVyLW5ldXRyYWwtNzAwLzUwIHctZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIG1heC13LXNjcmVlbi1sZyBwLTUgdy1mdWxsIG1kOnctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgPEhlYWRlciBjdXJyZW50QXVkaW9JbmRleD17Y3VycmVudEF1ZGlvSW5kZXh9IGhhbmRsZUF1ZGlvQ2hhbmdlPXtoYW5kbGVBdWRpb0NoYW5nZX0gYXVkaW9GaWxlcz17YXVkaW9GaWxlc30gLz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2lzSG9tZVBhZ2UgJiYgKCAvLyBSZW5kZXIgdGhlIHRleHQgb25seSBvbiB0aGUgaG9tZSBwYWdlXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtODAwLzVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgcC01IHctZnVsbCBtZDp3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+IEFsaW5lIE5vZ3VlaXJhIERldmVsb3BtZW50IERlc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1kOm10LTAgZmxleCBpdGVtcy1jZW50ZXJcIj57LyogLi4uICovfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgXHJcblxyXG5cclxuICAgIDwvbWFpbj5cclxuICAgIDxhdWRpbyBpZD1cImJhY2tncm91bmQtbXVzaWNcIiBzcmM9e2F1ZGlvRmlsZXNbY3VycmVudEF1ZGlvSW5kZXhdfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllclwiPlxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlYWQiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiYXVkaW9GaWxlcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNIb21lUGFnZSIsInBhdGhuYW1lIiwibG9hZCIsInNldExvYWQiLCJjdXJyZW50QXVkaW9JbmRleCIsInNldEN1cnJlbnRBdWRpb0luZGV4Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJldmVudHMiLCJvbiIsImhhbmRsZUF1ZGlvQ2hhbmdlIiwiaW5kZXgiLCJhdWRpbyIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFRpbWUiLCJzcmMiLCJwbGF5IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});