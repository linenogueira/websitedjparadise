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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n\\r\\n\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'K2D', sans-serif;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\nhtml {\\r\\n  color: #fff; /* Text color */\\r\\n \\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 14px;\\r\\n  height: 18px;\\r\\n  background: var(--scrollbar-background);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: #696869;\\r\\n  border-color: transparent;\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n  background-clip: padding-box;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background-color: #7b7a7a;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:active {\\r\\n  background-color: #a1a1a1;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.overflow-small::-webkit-scrollbar {\\r\\n  width: 8px;\\r\\n  height: 18px;\\r\\n  background: var(--scrollbar-background);\\r\\n}\\r\\n\\r\\n/* Example of pulse animation */\\r\\n@keyframes pulse {\\r\\n  0% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scale(1.05);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n.pulse {\\r\\n  animation: pulse 2s infinite;\\r\\n}\\r\\n\\r\\n.image-outer-container {\\r\\n  margin-top: -130px; /* Adjust top margin as needed */\\r\\n  margin-left: -150px;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  width: 100%;\\r\\n  max-width: 1000px;\\r\\n  height: 200px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.image-container img {\\r\\n  width: 90%;\\r\\n  height: 300%;\\r\\n  -o-object-fit: fill;\\r\\n     object-fit: fill;\\r\\n}\\r\\n\\r\\n.py-20 {\\r\\n  margin-top: 20px; /* Adjust top margin as needed */\\r\\n  margin-left: -500px;\\r\\n}\\r\\n\\r\\n.py-16 {\\r\\n  margin-top: -20px; /* Adjust top margin as needed */\\r\\n  margin-left: -150px;\\r\\n  width: 80%;\\r\\n  height: 300%;\\r\\n}\\r\\n\\r\\n.py-200 {\\r\\n  margin-top: -580px; /* Adjust top margin as needed */\\r\\n  margin-left: -50px;\\r\\n}\\r\\n\\r\\n.py-30 {\\r\\n  margin-top: 50px; /* Adjust top margin as needed */\\r\\n  margin-left: -50px;\\r\\n}\\r\\n\\r\\n.mt-4 {\\r\\n  margin-top: 50px; /* Adjust top margin as needed */\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.mt-7 {\\r\\n  margin-top: -540px; /* Adjust top margin as needed */\\r\\n  margin-left: 1100px;\\r\\n  width: 12cm;\\r\\n  height: 8cm;\\r\\n}\\r\\n\\r\\n.aboutimg {\\r\\n  margin-top: -720px; /* Adjust top margin as needed */\\r\\n  margin-left: 700px;\\r\\n  width: 12cm;\\r\\n  height: 8cm;\\r\\n}\\r\\n\\r\\n/* Adjust the position using transform */\\r\\n.image-container img {\\r\\n  transform: translate(-30%, -25%);\\r\\n}\\r\\n\\r\\n.text-gold {\\r\\n  color: #a47e1b;\\r\\n}\\r\\n\\r\\n.background-container {\\r\\n  position: relative;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.background-image {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  -o-object-fit: cover;\\r\\n     object-fit: cover;\\r\\n  -o-object-position: center;\\r\\n     object-position: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .background-image {\\r\\n    -o-object-fit: contain;\\r\\n       object-fit: contain;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n.background-containerfundo {\\r\\n  background-color: black;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: -2;\\r\\n}\\r\\n\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";;;;AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;;AAGA;EACE,WAAW,EAAE,eAAe;;AAE9B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;;;AAIA;EACE,UAAU;EACV,YAAY;EACZ,uCAAuC;AACzC;;AAEA,+BAA+B;AAC/B;EACE;IACE,mBAAmB;EACrB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB,EAAE,gCAAgC;EACpD,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAgB;KAAhB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB,EAAE,gCAAgC;EAClD,mBAAmB;AACrB;;AAEA;EACE,iBAAiB,EAAE,gCAAgC;EACnD,mBAAmB;EACnB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB,EAAE,gCAAgC;EACpD,kBAAkB;AACpB;;AAEA;EACE,gBAAgB,EAAE,gCAAgC;EAClD,kBAAkB;AACpB;;AAEA;EACE,gBAAgB,EAAE,gCAAgC;EAClD,iBAAiB;AACnB;;AAEA;EACE,kBAAkB,EAAE,gCAAgC;EACpD,mBAAmB;EACnB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,kBAAkB,EAAE,gCAAgC;EACpD,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA,wCAAwC;AACxC;EACE,gCAAgC;AAClC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAiB;KAAjB,iBAAiB;EACjB,0BAAuB;KAAvB,uBAAuB;AACzB;;AAEA;EACE;IACE,sBAAmB;OAAnB,mBAAmB;EACrB;AACF;;;AAGA;EACE,uBAAuB;EACvB,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,WAAW;AACb\",\"sourcesContent\":[\"\\r\\n\\r\\n\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'K2D', sans-serif;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\nhtml {\\r\\n  color: #fff; /* Text color */\\r\\n \\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 14px;\\r\\n  height: 18px;\\r\\n  background: var(--scrollbar-background);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: #696869;\\r\\n  border-color: transparent;\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n  background-clip: padding-box;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background-color: #7b7a7a;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:active {\\r\\n  background-color: #a1a1a1;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.overflow-small::-webkit-scrollbar {\\r\\n  width: 8px;\\r\\n  height: 18px;\\r\\n  background: var(--scrollbar-background);\\r\\n}\\r\\n\\r\\n/* Example of pulse animation */\\r\\n@keyframes pulse {\\r\\n  0% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scale(1.05);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n.pulse {\\r\\n  animation: pulse 2s infinite;\\r\\n}\\r\\n\\r\\n.image-outer-container {\\r\\n  margin-top: -130px; /* Adjust top margin as needed */\\r\\n  margin-left: -150px;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  width: 100%;\\r\\n  max-width: 1000px;\\r\\n  height: 200px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.image-container img {\\r\\n  width: 90%;\\r\\n  height: 300%;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.py-20 {\\r\\n  margin-top: 20px; /* Adjust top margin as needed */\\r\\n  margin-left: -500px;\\r\\n}\\r\\n\\r\\n.py-16 {\\r\\n  margin-top: -20px; /* Adjust top margin as needed */\\r\\n  margin-left: -150px;\\r\\n  width: 80%;\\r\\n  height: 300%;\\r\\n}\\r\\n\\r\\n.py-200 {\\r\\n  margin-top: -580px; /* Adjust top margin as needed */\\r\\n  margin-left: -50px;\\r\\n}\\r\\n\\r\\n.py-30 {\\r\\n  margin-top: 50px; /* Adjust top margin as needed */\\r\\n  margin-left: -50px;\\r\\n}\\r\\n\\r\\n.mt-4 {\\r\\n  margin-top: 50px; /* Adjust top margin as needed */\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.mt-7 {\\r\\n  margin-top: -540px; /* Adjust top margin as needed */\\r\\n  margin-left: 1100px;\\r\\n  width: 12cm;\\r\\n  height: 8cm;\\r\\n}\\r\\n\\r\\n.aboutimg {\\r\\n  margin-top: -720px; /* Adjust top margin as needed */\\r\\n  margin-left: 700px;\\r\\n  width: 12cm;\\r\\n  height: 8cm;\\r\\n}\\r\\n\\r\\n/* Adjust the position using transform */\\r\\n.image-container img {\\r\\n  transform: translate(-30%, -25%);\\r\\n}\\r\\n\\r\\n.text-gold {\\r\\n  color: #a47e1b;\\r\\n}\\r\\n\\r\\n.background-container {\\r\\n  position: relative;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.background-image {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  object-position: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .background-image {\\r\\n    object-fit: contain;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n.background-containerfundo {\\r\\n  background-color: black;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: -2;\\r\\n}\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2REFBNkQsZ0JBQWdCLGlCQUFpQiw2QkFBNkIscUNBQXFDLEtBQUssb0JBQW9CLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLGtCQUFrQixtQkFBbUIsOENBQThDLEtBQUssbUNBQW1DLGdDQUFnQyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QixtQ0FBbUMsS0FBSyx5Q0FBeUMsZ0NBQWdDLEtBQUssMENBQTBDLGdDQUFnQyxLQUFLLG9EQUFvRCxpQkFBaUIsbUJBQW1CLDhDQUE4QyxLQUFLLDhEQUE4RCxVQUFVLDRCQUE0QixPQUFPLFdBQVcsK0JBQStCLE9BQU8sWUFBWSw0QkFBNEIsT0FBTyxLQUFLLGdCQUFnQixtQ0FBbUMsS0FBSyxnQ0FBZ0MsMEJBQTBCLDJEQUEyRCxLQUFLLDBCQUEwQixrQkFBa0Isd0JBQXdCLG9CQUFvQix5QkFBeUIsS0FBSyw4QkFBOEIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsMEJBQTBCLEtBQUssZ0JBQWdCLHdCQUF3QiwyREFBMkQsS0FBSyxnQkFBZ0IseUJBQXlCLDJEQUEyRCxpQkFBaUIsbUJBQW1CLEtBQUssaUJBQWlCLDBCQUEwQiwwREFBMEQsS0FBSyxnQkFBZ0Isd0JBQXdCLDBEQUEwRCxLQUFLLGVBQWUsd0JBQXdCLHlEQUF5RCxLQUFLLGVB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NEIsT0FBTyxLQUFLLHdDQUF3Qyw4QkFBOEIsc0JBQXNCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLGtCQUFrQixLQUFLLDJCQUEyQjtBQUN6aFA7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YmMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSzJEJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBjb2xvcjogI2ZmZjsgLyogVGV4dCBjb2xvciAqL1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTRweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2ODY5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiN2E3YTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm92ZXJmbG93LXNtYWxsOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFeGFtcGxlIG9mIHB1bHNlIGFuaW1hdGlvbiAqL1xcclxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHVsc2Uge1xcclxcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW91dGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTMwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMzAwJTtcXHJcXG4gIC1vLW9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMjAge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDsgLyogQWRqdXN0IHRvcCBtYXJnaW4gYXMgbmVlZGVkICovXFxyXFxuICBtYXJnaW4tbGVmdDogLTUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMTYge1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDMwMCU7XFxyXFxufVxcclxcblxcclxcbi5weS0yMDAge1xcclxcbiAgbWFyZ2luLXRvcDogLTU4MHB4OyAvKiBBZGp1c3QgdG9wIG1hcmdpbiBhcyBuZWVkZWQgKi9cXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTMwIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtNCB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4OyAvKiBBZGp1c3QgdG9wIG1hcmdpbiBhcyBuZWVkZWQgKi9cXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtNyB7XFxyXFxuICBtYXJnaW4tdG9wOiAtNTQwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IDExMDBweDtcXHJcXG4gIHdpZHRoOiAxMmNtO1xcclxcbiAgaGVpZ2h0OiA4Y207XFxyXFxufVxcclxcblxcclxcbi5hYm91dGltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiAtNzIwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xcclxcbiAgd2lkdGg6IDEyY207XFxyXFxuICBoZWlnaHQ6IDhjbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRqdXN0IHRoZSBwb3NpdGlvbiB1c2luZyB0cmFuc2Zvcm0gKi9cXHJcXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtMjUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtZ29sZCB7XFxyXFxuICBjb2xvcjogI2E0N2UxYjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAtby1vYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICAtby1vYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1jb250YWluZXJmdW5kbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0yO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7QUFJQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFdBQVcsRUFBRSxlQUFlOztBQUU5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7OztBQUlBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxnQ0FBZ0M7RUFDcEQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBZ0I7S0FBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsZ0NBQWdDO0VBQ2xELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLGdDQUFnQztFQUNuRCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLGdDQUFnQztFQUNwRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxnQ0FBZ0M7RUFDbEQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsZ0NBQWdDO0VBQ2xELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLGdDQUFnQztFQUNwRCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLGdDQUFnQztFQUNwRCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDBCQUF1QjtLQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHNCQUFtQjtPQUFuQixtQkFBbUI7RUFDckI7QUFDRjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSzJEJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBjb2xvcjogI2ZmZjsgLyogVGV4dCBjb2xvciAqL1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTRweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2ODY5O1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiN2E3YTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm92ZXJmbG93LXNtYWxsOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFeGFtcGxlIG9mIHB1bHNlIGFuaW1hdGlvbiAqL1xcclxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHVsc2Uge1xcclxcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLW91dGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTMwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMzAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5weS0yMCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGp1c3QgdG9wIG1hcmdpbiBhcyBuZWVkZWQgKi9cXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5weS0xNiB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjBweDsgLyogQWRqdXN0IHRvcCBtYXJnaW4gYXMgbmVlZGVkICovXFxyXFxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMzAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTIwMCB7XFxyXFxuICBtYXJnaW4tdG9wOiAtNTgwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMzAge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDsgLyogQWRqdXN0IHRvcCBtYXJnaW4gYXMgbmVlZGVkICovXFxyXFxuICBtYXJnaW4tbGVmdDogLTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdC00IHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7IC8qIEFkanVzdCB0b3AgbWFyZ2luIGFzIG5lZWRlZCAqL1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdC03IHtcXHJcXG4gIG1hcmdpbi10b3A6IC01NDBweDsgLyogQWRqdXN0IHRvcCBtYXJnaW4gYXMgbmVlZGVkICovXFxyXFxuICBtYXJnaW4tbGVmdDogMTEwMHB4O1xcclxcbiAgd2lkdGg6IDEyY207XFxyXFxuICBoZWlnaHQ6IDhjbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0aW1nIHtcXHJcXG4gIG1hcmdpbi10b3A6IC03MjBweDsgLyogQWRqdXN0IHRvcCBtYXJnaW4gYXMgbmVlZGVkICovXFxyXFxuICBtYXJnaW4tbGVmdDogNzAwcHg7XFxyXFxuICB3aWR0aDogMTJjbTtcXHJcXG4gIGhlaWdodDogOGNtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGp1c3QgdGhlIHBvc2l0aW9uIHVzaW5nIHRyYW5zZm9ybSAqL1xcclxcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIC0yNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1nb2xkIHtcXHJcXG4gIGNvbG9yOiAjYTQ3ZTFiO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJhY2tncm91bmQtY29udGFpbmVyZnVuZG8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMjtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css\n"));

/***/ })

});