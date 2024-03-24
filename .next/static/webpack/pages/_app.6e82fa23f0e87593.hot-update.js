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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n// pages/_app.js\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar audioFiles = [\n    \"/audio/Drift Remix (Dirty).mp3\",\n    \"/audio/olivetheboy - GoodSin myfreemp3.vip.mp3\",\n    \"/audio/Blessed.mp3\",\n    \"/audio/My G.mp3\"\n];\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var isHomePage = router.pathname === \"/index.jsx\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), load = ref[0], setLoad = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0), currentAudioIndex = ref1[0], setCurrentAudioIndex = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var handleMouseMove = function(e) {\n            var customCursor = document.querySelector(\".custom-cursor\");\n            customCursor.style.left = e.pageX + \"px\";\n            customCursor.style.top = e.pageY + \"px\";\n            var star = document.createElement(\"div\");\n            star.classList.add(\"star\");\n            star.style.left = e.pageX + \"px\";\n            star.style.top = e.pageY + \"px\";\n            document.body.appendChild(star);\n            setTimeout(function() {\n                star.remove();\n            }, 1500);\n        };\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        return function() {\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    }, []);\n    next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", function() {\n        setLoad(false);\n        document.documentElement.style = \"pointer-events: none;\";\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", function() {\n        setTimeout(function() {\n            setLoad(true);\n            document.documentElement.style = \"pointer-events: all;\";\n        }, 1000);\n    });\n    var handleAudioChange = function(index) {\n        var audio = document.getElementById(\"background-music\");\n        audio.currentTime = 0;\n        setCurrentAudioIndex(index);\n        audio.src = audioFiles[index];\n        audio.play();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"h-full border-neutral-700/50 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                currentAudioIndex: currentAudioIndex,\n                                handleAudioChange: handleAudioChange,\n                                audioFiles: audioFiles\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, pageProps), void 0, false, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    isHomePage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-neutral-800/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:flex w-full items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \" Aline Nogueira Development Design\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 md:mt-0 flex items-center\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                id: \"background-music\",\n                src: audioFiles[currentAudioIndex]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"audio-player\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\line_\\\\Desktop\\\\paradise\\\\websitedjparadise\\\\pages\\\\_app.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"25y3Q4bmjbnJenmi8cNqd4qPRuE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QjtvQkFFTEUsVUFBVSxrQkFDVCw4REFBQ3NDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxrQkFBa0I7a0NBQy9CLDRFQUFDQyxLQUFHOzRCQUFDRCxTQUFTLEVBQUMscUZBQXFGO3NDQUNsRyw0RUFBQ0MsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLDZDQUE2Qzs7a0RBQzFELDhEQUFDQyxLQUFHO2tEQUNGLDRFQUFDQyxHQUFDO3NEQUFDLG9DQUFrQzs7Ozs7Z0RBQUk7Ozs7OzRDQUNyQztrREFDTiw4REFBQ0QsS0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLGdDQUFnQzs7Ozs7NENBQWtCOzs7Ozs7b0NBQzdEOzs7OztnQ0FDRjs7Ozs7NEJBQ0Y7Ozs7OztvQkFHSDswQkFFUCw4REFBQ04sT0FBSztnQkFBQ1MsRUFBRSxFQUFDLGtCQUFrQjtnQkFBQ04sR0FBRyxFQUFFdkMsVUFBVSxDQUFDUyxpQkFBaUIsQ0FBQzs7Ozs7b0JBQUk7MEJBQ25FLDhEQUFDa0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGNBQWM7Ozs7O29CQUV2Qjs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7R0EvRlF6QyxLQUFLOztRQUNHSixrREFBUzs7O0FBRGpCSSxLQUFBQSxLQUFLO0FBaUdkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGF1ZGlvRmlsZXMgPSBbXHJcbiAgJy9hdWRpby9EcmlmdCBSZW1peCAoRGlydHkpLm1wMycsXHJcbiAgJy9hdWRpby9vbGl2ZXRoZWJveSAtIEdvb2RTaW4gbXlmcmVlbXAzLnZpcC5tcDMnLFxyXG4gICcvYXVkaW8vQmxlc3NlZC5tcDMnLFxyXG4gICcvYXVkaW8vTXkgRy5tcDMnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0hvbWVQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4LmpzeCc7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50QXVkaW9JbmRleCwgc2V0Q3VycmVudEF1ZGlvSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXN0b21DdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWN1cnNvcicpO1xyXG4gICAgICBjdXN0b21DdXJzb3Iuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xyXG4gICAgICBjdXN0b21DdXJzb3Iuc3R5bGUudG9wID0gZS5wYWdlWSArICdweCc7XHJcblxyXG4gICAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xyXG4gICAgICBzdGFyLnN0eWxlLmxlZnQgPSBlLnBhZ2VYICsgJ3B4JztcclxuICAgICAgc3Rhci5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFyKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc3Rhci5yZW1vdmUoKTtcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogYWxsOyc7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcbiAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogbm9uZTsnO1xyXG4gIH0pO1xyXG5cclxuICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogYWxsOyc7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSAncG9pbnRlci1ldmVudHM6IGFsbDsnO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1ZGlvQ2hhbmdlID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW11c2ljJyk7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZXRDdXJyZW50QXVkaW9JbmRleChpbmRleCk7XHJcbiAgICBhdWRpby5zcmMgPSBhdWRpb0ZpbGVzW2luZGV4XTtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD48L0xheW91dD5cclxuICAgIFxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaC1mdWxsIGJvcmRlci1uZXV0cmFsLTcwMC81MCB3LWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBtYXgtdy1zY3JlZW4tbGcgcC01IHctZnVsbCBtZDp3LTEwLzEyIGxnOnctOC8xMiBteC1hdXRvIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgPEhlYWRlciBjdXJyZW50QXVkaW9JbmRleD17Y3VycmVudEF1ZGlvSW5kZXh9IGhhbmRsZUF1ZGlvQ2hhbmdlPXtoYW5kbGVBdWRpb0NoYW5nZX0gYXVkaW9GaWxlcz17YXVkaW9GaWxlc30gLz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2lzSG9tZVBhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTgwMC81XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIHAtNSB3LWZ1bGwgbWQ6dy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiBBbGluZSBOb2d1ZWlyYSBEZXZlbG9wbWVudCBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtZDptdC0wIGZsZXggaXRlbXMtY2VudGVyXCI+ey8qIC4uLiAqL308L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGF1ZGlvIGlkPVwiYmFja2dyb3VuZC1tdXNpY1wiIHNyYz17YXVkaW9GaWxlc1tjdXJyZW50QXVkaW9JbmRleF19IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XHJcbiAgICAgICAgey8qIEluY2x1ZGUgYXVkaW8gcGxheWVyIGNvbnRyb2xzIG9yIHJlbGF0ZWQgZWxlbWVudHMgaGVyZSAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlYWQiLCJIZWFkZXIiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1ZGlvRmlsZXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImlzSG9tZVBhZ2UiLCJwYXRobmFtZSIsImxvYWQiLCJzZXRMb2FkIiwiY3VycmVudEF1ZGlvSW5kZXgiLCJzZXRDdXJyZW50QXVkaW9JbmRleCIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjdXN0b21DdXJzb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImxlZnQiLCJwYWdlWCIsInRvcCIsInBhZ2VZIiwic3RhciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJldmVudHMiLCJvbiIsImhhbmRsZUF1ZGlvQ2hhbmdlIiwiaW5kZXgiLCJhdWRpbyIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFRpbWUiLCJzcmMiLCJwbGF5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});