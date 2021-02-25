/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_aspdnsf/entityDropDown.js":
/*!****************************************!*\
  !*** ./src/_aspdnsf/entityDropDown.js ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/src/_aspdnsf/entityDropDown.js: Unexpected token, expected \\\")\\\" (12:43)\\n\\n\\u001b[0m \\u001b[90m 10 |\\u001b[39m     updatedSidebarColumn\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m'col-sm-4'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m     updatedSidebarColumn\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m'updated-sidebar'\\u001b[39m)\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 |\\u001b[39m     \\u001b[36mfor\\u001b[39m(\\u001b[36mvar\\u001b[39m i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m&\\u001b[39mlt\\u001b[33m;\\u001b[39m gridImages\\u001b[33m.\\u001b[39mlength\\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m){\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 |\\u001b[39m         \\u001b[36mvar\\u001b[39m gridImg \\u001b[33m=\\u001b[39m gridImages[i]\\u001b[33m.\\u001b[39mchildNodes[\\u001b[35m0\\u001b[39m]\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m         \\u001b[36mif\\u001b[39m(gridImg\\u001b[33m.\\u001b[39msrc\\u001b[33m.\\u001b[39mincludes(\\u001b[32m'nopictureicon.gif'\\u001b[39m)){\\u001b[0m\\n    at Parser._raise (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:776:17)\\n    at Parser.raiseWithData (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:769:17)\\n    at Parser.raise (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:737:17)\\n    at Parser.unexpected (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:9253:16)\\n    at Parser.expect (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:9239:28)\\n    at Parser.parseFor (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:12467:10)\\n    at Parser.parseForStatement (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:12170:19)\\n    at Parser.parseStatementContent (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:11871:21)\\n    at Parser.parseStatement (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:11846:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Volumes/LaCie/11-Sites/2021-PTG/js-utility-library/node_modules/@babel/parser/lib/index.js:12428:25)\");\n\n//# sourceURL=webpack://$/./src/_aspdnsf/entityDropDown.js?");

/***/ }),

/***/ "./src/_aspdnsf/simpleProduct.js":
/*!***************************************!*\
  !*** ./src/_aspdnsf/simpleProduct.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateSimpleLayout() {\n  var imageColumn = document.getElementById('product-image-column');\n  var infoColumn = document.getElementById('product-info-column');\n  var image = imageColumn.childNodes[0].childNodes[2].childNodes[1]; // hide image column if there's no image. \n\n  if (image.src.includes('nopicture')) {\n    imageColumn.classList.add('u-hide');\n    infoColumn.classList.remove('col-sm-8');\n    infoColumn.classList.add('u-center-block');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateSimpleLayout);\n\n//# sourceURL=webpack://$/./src/_aspdnsf/simpleProduct.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parallax\": () => (/* reexport safe */ _parallax_parllax__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"updateEntityDropDown\": () => (/* reexport default from dynamic */ _aspdnsf_entityDropDown__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   \"updateSimpleLayout\": () => (/* reexport safe */ _aspdnsf_simpleProduct__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _aspdnsf_entityDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_aspdnsf/entityDropDown */ \"./src/_aspdnsf/entityDropDown.js\");\n/* harmony import */ var _aspdnsf_entityDropDown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aspdnsf_entityDropDown__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aspdnsf_simpleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_aspdnsf/simpleProduct */ \"./src/_aspdnsf/simpleProduct.js\");\n/* harmony import */ var _parallax_parllax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax/parllax */ \"./src/parallax/parllax.js\");\n\n\n\n\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./src/parallax/parllax.js":
/*!*********************************!*\
  !*** ./src/parallax/parllax.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction parallax() {\n  window.addEventListener('scroll', function (e) {\n    var parallaxCons = document.querySelectorAll('.parallax-group');\n    var parallaxEls = document.querySelectorAll('.parallax');\n    var yScrolledDist = window.scrollY;\n\n    if (parallaxEls.length > 0) {\n      parallaxEls.forEach(function (cur, idx) {\n        var container = cur.parentNode;\n        var containerHeight = container.offsetHeight;\n        var spaceToTop = container.getBoundingClientRect().top;\n\n        if (spaceToTop <= 0 && spaceToTop > -containerHeight) {\n          var sectionScrolledDistance;\n          var rateY = spaceToTop * cur.dataset.yscroll; // console.log('RATE Y:', rateY);\n\n          switch (cur.dataset.direction) {\n            case 'vertical':\n              cur.style.transform = \"translate3d(0px, \".concat(rateY, \"px, 0px)\");\n              break;\n\n            case 'horizontal':\n              var rateX = spaceToTop * cur.dataset.xscroll;\n              cur.style.transform = \"translate3d(\".concat(rateX, \"px, \").concat(rateY, \"px, 0px)\");\n              break;\n          }\n        } else {\n          cur.style.transform = \"translate3d(0px, 0px, 0px)\";\n        }\n      });\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parallax);\n\n//# sourceURL=webpack://$/./src/parallax/parllax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});