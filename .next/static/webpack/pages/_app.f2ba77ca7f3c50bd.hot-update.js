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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ \"./node_modules/tippy.js/animations/scale-subtle.css\");\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ \"./node_modules/tippy.js/animations/scale-extreme.css\");\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tippy.js/animations/shift-away.css */ \"./node_modules/tippy.js/animations/shift-away.css\");\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tippy.js/animations/shift-toward.css */ \"./node_modules/tippy.js/animations/shift-toward.css\");\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Header = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Header */ \"./components/Header.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"_app.jsx -> \" + \"../components/Header\"\n        ]\n    }\n});\n_c = Header;\nvar audioFiles = [\n    \"/audio/Drift Remix (Dirty).mp3\",\n    \"/audio/olivetheboy - GoodSin myfreemp3.vip.mp3\",\n    \"/audio/Blessed.mp3\",\n    \"/audio/My G.mp3\"\n];\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var isHomePage = router.pathname === \"/index.jsx\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false), load = ref[0], setLoad = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0), currentAudioIndex = ref1[0], setCurrentAudioIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    }, []);\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeStart\", function() {\n        setLoad(false);\n        document.documentElement.style = \"pointer-events: none;\";\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeComplete\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on(\"routeChangeError\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    var handleAudioChange = function(index) {\n        var audio = document.getElementById(\"background-music\");\n        audio.currentTime = 0;\n        setCurrentAudioIndex(index);\n        audio.src = audioFiles[index];\n        audio.play();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DJ PARADISE\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"https://media.discordapp.net/attachments/737348411568685066/954506783777493072/Umut_Bayraktar_Icon.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://pro.fontawesome.com/releases/v5.15.4/css/all.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \" h-full border-neutral-700/50 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                                currentAudioIndex: currentAudioIndex,\n                                handleAudioChange: handleAudioChange,\n                                audioFiles: audioFiles\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, pageProps), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    isHomePage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-neutral-800/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:flex w-full items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \" Aline Nogueira Development Design\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 md:mt-0 flex items-center\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 71,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                id: \"background-music\",\n                src: audioFiles[currentAudioIndex]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"audio-player\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"tHQYj7aQtzhSc+88s63OP6A21f4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c1 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLGNBQWM7Ozs7O29CQUV2Qjs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7R0E3RVFoQyxLQUFLOztRQUNLTixrREFBUzs7O0FBRG5CTSxNQUFBQSxLQUFLO0FBK0VkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCAndGlwcHkuanMvYW5pbWF0aW9ucy9zY2FsZS1zdWJ0bGUuY3NzJztcclxuaW1wb3J0ICd0aXBweS5qcy9hbmltYXRpb25zL3NjYWxlLWV4dHJlbWUuY3NzJztcclxuaW1wb3J0ICd0aXBweS5qcy9hbmltYXRpb25zL3NoaWZ0LWF3YXkuY3NzJztcclxuaW1wb3J0ICd0aXBweS5qcy9hbmltYXRpb25zL3NoaWZ0LXRvd2FyZC5jc3MnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL0hlYWRlcicpKVxyXG5cclxuY29uc3QgYXVkaW9GaWxlcyA9IFtcclxuICAnL2F1ZGlvL0RyaWZ0IFJlbWl4IChEaXJ0eSkubXAzJyxcclxuICAnL2F1ZGlvL29saXZldGhlYm95IC0gR29vZFNpbiBteWZyZWVtcDMudmlwLm1wMycsXHJcbiAgJy9hdWRpby9CbGVzc2VkLm1wMycsXHJcbiAgJy9hdWRpby9NeSBHLm1wMydcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpc0hvbWVQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4LmpzeCc7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50QXVkaW9JbmRleCwgc2V0Q3VycmVudEF1ZGlvSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gJ3BvaW50ZXItZXZlbnRzOiBhbGw7JztcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IHtcclxuICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gJ3BvaW50ZXItZXZlbnRzOiBub25lOyc7XHJcbiAgfSk7XHJcblxyXG4gIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gJ3BvaW50ZXItZXZlbnRzOiBhbGw7JztcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogYWxsOyc7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXVkaW9DaGFuZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtbXVzaWMnKTtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIHNldEN1cnJlbnRBdWRpb0luZGV4KGluZGV4KTtcclxuICAgIGF1ZGlvLnNyYyA9IGF1ZGlvRmlsZXNbaW5kZXhdO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuICg8PlxyXG4gICA8TGF5b3V0PjwvTGF5b3V0PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRKIFBBUkFESVNFPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImh0dHBzOi8vbWVkaWEuZGlzY29yZGFwcC5uZXQvYXR0YWNobWVudHMvNzM3MzQ4NDExNTY4Njg1MDY2Lzk1NDUwNjc4Mzc3NzQ5MzA3Mi9VbXV0X0JheXJha3Rhcl9JY29uLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiA+PC9saW5rPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9wcm8uZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjQvY3NzL2FsbC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCIgaC1mdWxsIGJvcmRlci1uZXV0cmFsLTcwMC81MCB3LWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBtYXgtdy1zY3JlZW4tbGcgcC01IHctZnVsbCBtZDp3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgIDxIZWFkZXIgY3VycmVudEF1ZGlvSW5kZXg9e2N1cnJlbnRBdWRpb0luZGV4fSBoYW5kbGVBdWRpb0NoYW5nZT17aGFuZGxlQXVkaW9DaGFuZ2V9IGF1ZGlvRmlsZXM9e2F1ZGlvRmlsZXN9IC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtpc0hvbWVQYWdlICYmICggLy8gUmVuZGVyIHRoZSB0ZXh0IG9ubHkgb24gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTgwMC81XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIHAtNSB3LWZ1bGwgbWQ6dy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiBBbGluZSBOb2d1ZWlyYSBEZXZlbG9wbWVudCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtZDptdC0wIGZsZXggaXRlbXMtY2VudGVyXCI+ey8qIC4uLiAqL308L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgIFxyXG5cclxuXHJcbiAgICA8L21haW4+XHJcbiAgICA8YXVkaW8gaWQ9XCJiYWNrZ3JvdW5kLW11c2ljXCIgc3JjPXthdWRpb0ZpbGVzW2N1cnJlbnRBdWRpb0luZGV4XX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXJcIj5cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZWFkIiwiZHluYW1pYyIsIlJvdXRlciIsInVzZVJvdXRlciIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJhdWRpb0ZpbGVzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpc0hvbWVQYWdlIiwicGF0aG5hbWUiLCJsb2FkIiwic2V0TG9hZCIsImN1cnJlbnRBdWRpb0luZGV4Iiwic2V0Q3VycmVudEF1ZGlvSW5kZXgiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImV2ZW50cyIsIm9uIiwiaGFuZGxlQXVkaW9DaGFuZ2UiLCJpbmRleCIsImF1ZGlvIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50VGltZSIsInNyYyIsInBsYXkiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});