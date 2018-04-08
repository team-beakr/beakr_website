/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_style_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesheets_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylesheets_style_css__);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);


var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/index.html";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/about.html";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/contact.html";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/support.html";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/login.html";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/signup.html";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/dashboardstudent.html";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/search.html";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/request.html";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "views/message.html";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(19)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(14), "");
exports.i(__webpack_require__(15), "");
exports.i(__webpack_require__(16), "");
exports.i(__webpack_require__(17), "");
exports.i(__webpack_require__(18), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".sign-up-page{\r\n    width:100%;\r\n    min-width:1280px;\r\n    height:100vh;\r\n    min-height:961px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:0;\r\n    background:rgba(255,255,255,1.0)}\r\na{\r\n    text-decoration:none}\r\ndiv{\r\n    -webkit-text-size-adjust:none}\r\n.sign-up-page .rectangle{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .rectangle5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:14px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1183px}\r\n.sign-up-page .rectangle9{\r\n    background:rgba(255,255,255,0.0);\r\n    top:119px;\r\n    height:602px;\r\n    width:582px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:349px}\r\n.sign-up-page .laboratory-more-lik{\r\n    background:rgba(255,255,255,0.0);\r\n    top:210px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:390px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.sign-up-page .rectangle3{\r\n    background:rgba(126,210,33,1.0);\r\n    top:549px;\r\n    height:57px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:519px}\r\n.sign-up-page .view1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:623px;\r\n    height:57px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:519px;\r\n    border-style:solid;\r\n    border-width:1px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.sign-up-page .login{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1107px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.sign-up-page .group{\r\n    background:rgba(255,255,255,0.0);\r\n    top:7px;\r\n    height:40px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px}\r\n.sign-up-page .group .beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:31px;\r\n    width:110px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px}\r\n.sign-up-page .group .beaker-full{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .group .beaker-full .beaker{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .group .beaker-full .beaker .combined-shape{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .group .beaker-full .image1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:18px;\r\n    width:24px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.sign-up-page .group .beaker-full .oval4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:29px;\r\n    height:8px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:7px;\r\n    border-radius:4px}\r\n.sign-up-page .group .beaker-full .view2{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:5px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:12px;\r\n    border-radius:3px}\r\n.sign-up-page .group .beaker-full .view3{\r\n    background:rgba(217,255,175,1.0);\r\n    top:31px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:16px;\r\n    border-radius:1px}\r\n.sign-up-page .view4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:129px;\r\n    height:59px;\r\n    width:205px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:538px}\r\n.sign-up-page .view4 .image2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:11px;\r\n    height:46px;\r\n    width:159px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:46px}\r\n.sign-up-page .view4 .view5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view4 .view5 .view6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view4 .view5 .view6 .image3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view4 .view5 .image4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:30px;\r\n    height:27px;\r\n    width:34px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:2px}\r\n.sign-up-page .view4 .view5 .view7{\r\n    background:rgba(217,255,175,1.0);\r\n    top:42px;\r\n    height:12px;\r\n    width:11px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:5px}\r\n.sign-up-page .view4 .view5 .view8{\r\n    background:rgba(217,255,175,1.0);\r\n    top:36px;\r\n    height:7px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:18px;\r\n    border-radius:4px}\r\n.sign-up-page .view4 .view5 .view9{\r\n    background:rgba(217,255,175,1.0);\r\n    top:45px;\r\n    height:4px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:23px;\r\n    border-radius:2px}\r\n.sign-up-page .sign-up{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1198px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.sign-up-page .view10{\r\n    background:rgba(255,255,255,0.0);\r\n    top:15px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1085px;\r\n    border-style:solid;\r\n    border-width:2px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.sign-up-page .about-the-team{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:816px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.sign-up-page .support{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:964px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.sign-up-page .contact-us{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:690px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.sign-up-page .rectangle7{\r\n    background:rgba(215,215,215,1.0);\r\n    top:398px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.sign-up-page .view11{\r\n    background:rgba(215,215,215,1.0);\r\n    top:260px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.sign-up-page .school-email{\r\n    background:rgba(255,255,255,0.0);\r\n    top:277px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.sign-up-page .view12{\r\n    background:rgba(215,215,215,1.0);\r\n    top:329px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.sign-up-page .username{\r\n    background:rgba(255,255,255,0.0);\r\n    top:346px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.sign-up-page .password{\r\n    background:rgba(255,255,255,0.0);\r\n    top:415px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.sign-up-page .view13{\r\n    background:rgba(215,215,215,1.0);\r\n    top:467px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.sign-up-page .confirm-password{\r\n    background:rgba(255,255,255,0.0);\r\n    top:484px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.sign-up-page .create-account{\r\n    background:rgba(255,255,255,0.0);\r\n    top:564px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:555px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:29.0px}\r\n.sign-up-page .i-am-a-professor{\r\n    background:rgba(255,255,255,0.0);\r\n    top:638px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:567px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:20.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:24.0px}\r\n.sign-up-page .oval{\r\n    background:rgba(217,255,175,1.0);\r\n    top:463px;\r\n    height:76px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:53px;\r\n    border-radius:37px}\r\n.sign-up-page .view14{\r\n    background:rgba(217,255,175,1.0);\r\n    top:335px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:100px;\r\n    border-radius:38px}\r\n.sign-up-page .view15{\r\n    background:rgba(217,255,175,1.0);\r\n    top:668px;\r\n    height:225px;\r\n    width:225px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:58px;\r\n    border-radius:112px}\r\n.sign-up-page .view16{\r\n    background:rgba(217,255,175,1.0);\r\n    top:436px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:172px;\r\n    border-radius:20px}\r\n.sign-up-page .view17{\r\n    background:rgba(217,255,175,1.0);\r\n    top:211px;\r\n    height:41px;\r\n    width:39px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:132px;\r\n    border-radius:19px}\r\n.sign-up-page .view18{\r\n    background:rgba(217,255,175,1.0);\r\n    top:270px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:164px;\r\n    border-radius:14px}\r\n.sign-up-page .view19{\r\n    background:rgba(217,255,175,1.0);\r\n    top:164px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:176px;\r\n    border-radius:8px}\r\n.sign-up-page .view20{\r\n    background:rgba(217,255,175,1.0);\r\n    top:119px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:147px;\r\n    border-radius:8px}\r\n.sign-up-page .image5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:532px;\r\n    height:115px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:123px}\r\n.sign-up-page .view21{\r\n    background:rgba(52,52,52,1.0);\r\n    top:795px;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view22{\r\n    background:rgba(255,255,255,0.0);\r\n    top:843px;\r\n    height:34px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:501px}\r\n.sign-up-page .view22 .image6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:6px;\r\n    height:27px;\r\n    width:91px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:26px}\r\n.sign-up-page .view22 .view23{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view22 .view23 .view24{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view22 .view23 .view24 .image7{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.sign-up-page .view22 .view23 .image8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:16px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.sign-up-page .view22 .view23 .view25{\r\n    background:rgba(217,255,175,1.0);\r\n    top:24px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px;\r\n    border-radius:3px}\r\n.sign-up-page .view22 .view23 .view26{\r\n    background:rgba(217,255,175,1.0);\r\n    top:20px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:2px}\r\n.sign-up-page .view22 .view23 .view27{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px;\r\n    border-radius:1px}\r\n.sign-up-page .est2017{\r\n    background:rgba(255,255,255,0.0);\r\n    top:882px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:554px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(216,255,171,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.sign-up-page .line4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:814px;\r\n    height:116px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:646px}\r\n.sign-up-page .contact-us-about-the{\r\n    background:rgba(255,255,255,0.0);\r\n    top:821px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:668px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.anima-animate-appear{\r\n    opacity:0;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 normal forwards}\r\n.anima-animate-disappear{\r\n    opacity:1;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 reverse forwards}\r\n.anima-animate-nodelay{\r\n    -webkit-animation-delay:0;\r\n    -moz-animation-delay:0;\r\n    -o-animation-delay:0;\r\n    animation-delay:0}\r\n@-webkit-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-moz-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-o-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".search-student{\r\n    width:100%;\r\n    min-width:1280px;\r\n    height:100vh;\r\n    min-height:961px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:0;\r\n    background:rgba(255,255,255,1.0)}\r\na{\r\n    text-decoration:none}\r\ndiv{\r\n    -webkit-text-size-adjust:none}\r\n.search-student .rectangle{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .rectangle5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:14px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1183px}\r\n.search-student .group2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:95px;\r\n    height:774px;\r\n    width:230px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:40px}\r\n.search-student .group2 .oval{\r\n    background:rgba(217,255,175,1.0);\r\n    top:344px;\r\n    height:76px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0;\r\n    border-radius:37px}\r\n.search-student .group2 .view1{\r\n    background:rgba(217,255,175,1.0);\r\n    top:216px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:47px;\r\n    border-radius:38px}\r\n.search-student .group2 .view2{\r\n    background:rgba(217,255,175,1.0);\r\n    top:549px;\r\n    height:225px;\r\n    width:225px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:5px;\r\n    border-radius:112px}\r\n.search-student .group2 .view3{\r\n    background:rgba(217,255,175,1.0);\r\n    top:317px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:119px;\r\n    border-radius:20px}\r\n.search-student .group2 .view4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:92px;\r\n    height:41px;\r\n    width:39px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:79px;\r\n    border-radius:19px}\r\n.search-student .group2 .view5{\r\n    background:rgba(217,255,175,1.0);\r\n    top:151px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:111px;\r\n    border-radius:14px}\r\n.search-student .group2 .view6{\r\n    background:rgba(217,255,175,1.0);\r\n    top:45px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:123px;\r\n    border-radius:8px}\r\n.search-student .group2 .view7{\r\n    background:rgba(217,255,175,1.0);\r\n    top:0;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:94px;\r\n    border-radius:8px}\r\n.search-student .group2 .image1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:413px;\r\n    height:115px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:70px}\r\n.search-student .studentusername{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1045px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:right;\r\n    line-height:16.0px;\r\n    text-decoration:underline}\r\n.search-student .logout{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1201px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .about-the-team{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:815px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .support{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:964px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .contact-us{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:690px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .rectangle12{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .view8{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .view9{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:284px}\r\n.search-student .view10{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:426px}\r\n.search-student .view11{\r\n    background:rgba(185,185,185,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:142px}\r\n.search-student .search{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:190px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .requests{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:324px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .messages{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:464px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .dashboard{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:36px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.search-student .group{\r\n    background:rgba(255,255,255,0.0);\r\n    top:7px;\r\n    height:40px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px}\r\n.search-student .group .beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:31px;\r\n    width:110px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px}\r\n.search-student .group .beaker-full{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .group .beaker-full .beaker{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .group .beaker-full .beaker .combined-shape{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.search-student .group .beaker-full .image2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:18px;\r\n    width:24px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.search-student .group .beaker-full .oval4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:29px;\r\n    height:8px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:7px;\r\n    border-radius:4px}\r\n.search-student .group .beaker-full .view12{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:5px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:12px;\r\n    border-radius:3px}\r\n.search-student .group .beaker-full .view13{\r\n    background:rgba(217,255,175,1.0);\r\n    top:31px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:16px;\r\n    border-radius:1px}\r\n.search-student .footer{\r\n    background:rgba(255,255,255,0.0);\r\n    top:795px;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .footer .view14{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .footer .view15{\r\n    background:rgba(255,255,255,0.0);\r\n    top:48px;\r\n    height:34px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:501px}\r\n.search-student .footer .view15 .image3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:6px;\r\n    height:27px;\r\n    width:91px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:26px}\r\n.search-student .footer .view15 .view16{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .footer .view15 .view16 .view17{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .footer .view15 .view16 .view17 .image4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.search-student .footer .view15 .view16 .image5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:16px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.search-student .footer .view15 .view16 .view18{\r\n    background:rgba(217,255,175,1.0);\r\n    top:24px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px;\r\n    border-radius:3px}\r\n.search-student .footer .view15 .view16 .view19{\r\n    background:rgba(217,255,175,1.0);\r\n    top:20px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:2px}\r\n.search-student .footer .view15 .view16 .view20{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px;\r\n    border-radius:1px}\r\n.search-student .footer .est2017{\r\n    background:rgba(255,255,255,0.0);\r\n    top:87px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:554px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(216,255,171,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.search-student .footer .line4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:19px;\r\n    height:116px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:646px}\r\n.search-student .footer .contact-us-about-the{\r\n    background:rgba(255,255,255,0.0);\r\n    top:26px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:668px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.search-student .rectangle14{\r\n    background:rgba(255,255,255,0.0);\r\n    top:191px;\r\n    height:342px;\r\n    width:566px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:358px}\r\n.search-student .image6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:293px;\r\n    height:135px;\r\n    width:135px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:949px}\r\n.search-student .view21{\r\n    background:rgba(255,255,255,0.0);\r\n    top:328px;\r\n    height:64px;\r\n    width:35px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:148px}\r\n.search-student .view21 .line{\r\n    background:rgba(255,255,255,0.0);\r\n    top:29px;\r\n    height:35px;\r\n    width:35px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .view21 .image7{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:35px;\r\n    width:35px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.search-student .image8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:328px;\r\n    height:64px;\r\n    width:35px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1099px}\r\n.search-student .we-thought-you-might{\r\n    background:rgba(255,255,255,0.0);\r\n    top:145px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:355px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:18.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:left;\r\n    line-height:22.0px}\r\n.search-student .or-go-on-your-own-s{\r\n    background:rgba(255,255,255,0.0);\r\n    top:663px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:363px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:18.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:left;\r\n    line-height:22.0px}\r\n.search-student .research-opportunity{\r\n    background:rgba(255,255,255,0.0);\r\n    top:218px;\r\n    height:auto;\r\n    width:491px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:395px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.search-student .expand{\r\n    background:rgba(255,255,255,0.0);\r\n    top:493px;\r\n    height:auto;\r\n    width:99px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:776px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:right;\r\n    line-height:17.0px}\r\n.search-student .rectangle17{\r\n    background:rgba(216,216,216,1.0);\r\n    top:699px;\r\n    height:46px;\r\n    width:554px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:364px;\r\n    border-radius:12px}\r\n.search-student .enter-keywords{\r\n    background:rgba(255,255,255,0.0);\r\n    top:715px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:377px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(155,154,155,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.search-student .rectangle3{\r\n    background:rgba(126,210,33,1.0);\r\n    top:564px;\r\n    height:57px;\r\n    width:208px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:653px}\r\n.search-student .view22{\r\n    background:rgba(255,255,255,0.0);\r\n    top:564px;\r\n    height:57px;\r\n    width:208px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:419px;\r\n    border-style:solid;\r\n    border-width:1px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.search-student .interested{\r\n    background:rgba(255,255,255,0.0);\r\n    top:581px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:709px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:20.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:24.0px}\r\n.search-student .not-this-time{\r\n    background:rgba(255,255,255,0.0);\r\n    top:582px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:471px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:18.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:22.0px}\r\n.search-student .a8-more{\r\n    background:rgba(255,255,255,0.0);\r\n    top:342px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:964px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:28.0px;\r\n    color:rgba(183,232,134,1.0);\r\n    text-align:center;\r\n    line-height:34.0px}\r\n.search-student .image9{\r\n    background:rgba(255,255,255,0.0);\r\n    top:293px;\r\n    height:135px;\r\n    width:135px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:209px}\r\n.search-student .oval2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:312px;\r\n    height:60px;\r\n    width:59px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:247px}\r\n.search-student .line2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:328px;\r\n    height:28px;\r\n    width:30px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:262px}\r\n.search-student .applied{\r\n    background:rgba(255,255,255,0.0);\r\n    top:375px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:241px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:20.0px;\r\n    color:rgba(183,232,134,1.0);\r\n    text-align:center;\r\n    line-height:24.0px}\r\n.anima-animate-appear{\r\n    opacity:0;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 normal forwards}\r\n.anima-animate-disappear{\r\n    opacity:1;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 reverse forwards}\r\n.anima-animate-nodelay{\r\n    -webkit-animation-delay:0;\r\n    -moz-animation-delay:0;\r\n    -o-animation-delay:0;\r\n    animation-delay:0}\r\n@-webkit-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-moz-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-o-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".login-page{\r\n    width:100%;\r\n    min-width:1280px;\r\n    height:100vh;\r\n    min-height:850px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:0;\r\n    background:rgba(255,255,255,1.0)}a{\r\n    text-decoration:none}div{\r\n    -webkit-text-size-adjust:none}\r\n.login-page .rectangle{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .rectangle5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:14px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1183px}\r\n.login-page .rectangle9{\r\n    background:rgba(255,255,255,0.0);\r\n    top:119px;\r\n    height:480px;\r\n    width:582px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:349px}\r\n.login-page .welcome-back-did-yo{\r\n    background:rgba(255,255,255,0.0);\r\n    top:210px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:445px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.login-page .rectangle3{\r\n    background:rgba(126,210,33,1.0);\r\n    top:429px;\r\n    height:57px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:519px}\r\n.login-page .view1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:503px;\r\n    height:57px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:519px;\r\n    border-style:solid;\r\n    border-width:1px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.login-page .login{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1107px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.login-page .group{\r\n    background:rgba(255,255,255,0.0);\r\n    top:7px;\r\n    height:40px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px}\r\n.login-page .group .beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:31px;\r\n    width:110px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px}\r\n.login-page .group .beaker-full{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .group .beaker-full .beaker{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .group .beaker-full .beaker .combined-shape{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.login-page .group .beaker-full .image1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:18px;\r\n    width:24px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.login-page .group .beaker-full .oval4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:29px;\r\n    height:8px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:7px;\r\n    border-radius:4px}\r\n.login-page .group .beaker-full .view2{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:5px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:12px;\r\n    border-radius:3px}\r\n.login-page .group .beaker-full .view3{\r\n    background:rgba(217,255,175,1.0);\r\n    top:31px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:16px;\r\n    border-radius:1px}\r\n.login-page .view4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:129px;\r\n    height:59px;\r\n    width:205px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:538px}\r\n.login-page .view4 .image2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:11px;\r\n    height:46px;\r\n    width:159px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:46px}\r\n.login-page .view4 .view5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .view4 .view5 .view6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .view4 .view5 .view6 .image3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:59px;\r\n    width:38px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.login-page .view4 .view5 .image4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:30px;\r\n    height:27px;\r\n    width:34px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:2px}\r\n.login-page .view4 .view5 .view7{\r\n    background:rgba(217,255,175,1.0);\r\n    top:42px;\r\n    height:12px;\r\n    width:11px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:5px}\r\n.login-page .view4 .view5 .view8{\r\n    background:rgba(217,255,175,1.0);\r\n    top:36px;\r\n    height:7px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:18px;\r\n    border-radius:4px}\r\n.login-page .view4 .view5 .view9{\r\n    background:rgba(217,255,175,1.0);\r\n    top:45px;\r\n    height:4px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:23px;\r\n    border-radius:2px}\r\n.login-page .sign-up{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1197px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.login-page .view10{\r\n    background:rgba(255,255,255,0.0);\r\n    top:15px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1085px;\r\n    border-style:solid;\r\n    border-width:2px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.login-page .about-the-team{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:815px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.login-page .support{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:963px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.login-page .contact-us{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:689px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.login-page .rectangle7{\r\n    background:rgba(215,215,215,1.0);\r\n    top:329px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.login-page .view11{\r\n    background:rgba(215,215,215,1.0);\r\n    top:260px;\r\n    height:49px;\r\n    width:429px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px;\r\n    border-radius:12px}\r\n.login-page .username{\r\n    background:rgba(255,255,255,0.0);\r\n    top:277px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:439px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:center;\r\n    line-height:14.0px}\r\n.login-page .password{\r\n    background:rgba(255,255,255,0.0);\r\n    top:346px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:439px;\r\n    font-family:'STHeitiSC-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:center;\r\n    line-height:14.0px}\r\n.login-page .forgot-password{\r\n    background:rgba(255,255,255,0.0);\r\n    top:398px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:751px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:12.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:14.0px}\r\n.login-page .remember-me{\r\n    background:rgba(255,255,255,0.0);\r\n    top:398px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:12.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:left;\r\n    line-height:14.0px}\r\n.login-page .rectangle8{\r\n    background:rgba(255,255,255,1.0);\r\n    top:398px;\r\n    height:15px;\r\n    width:15px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:420px}\r\n.login-page .label1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:444px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:609px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:29.0px}\r\n.login-page .wait-i-dont-have-a{\r\n    background:rgba(255,255,255,0.0);\r\n    top:521px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:540px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.login-page .oval{\r\n    background:rgba(217,255,175,1.0);\r\n    top:439px;\r\n    height:76px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:40px;\r\n    border-radius:37px}\r\n.login-page .view12{\r\n    background:rgba(217,255,175,1.0);\r\n    top:311px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:87px;\r\n    border-radius:38px}\r\n.login-page .view13{\r\n    background:rgba(217,255,175,1.0);\r\n    top:644px;\r\n    height:225px;\r\n    width:225px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:45px;\r\n    border-radius:112px}\r\n.login-page .view14{\r\n    background:rgba(217,255,175,1.0);\r\n    top:412px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:159px;\r\n    border-radius:20px}\r\n.login-page .view15{\r\n    background:rgba(217,255,175,1.0);\r\n    top:187px;\r\n    height:41px;\r\n    width:39px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:119px;\r\n    border-radius:19px}\r\n.login-page .view16{\r\n    background:rgba(217,255,175,1.0);\r\n    top:246px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:151px;\r\n    border-radius:14px}\r\n.login-page .view17{\r\n    background:rgba(217,255,175,1.0);\r\n    top:140px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:163px;\r\n    border-radius:8px}\r\n.login-page .view18{\r\n    background:rgba(217,255,175,1.0);\r\n    top:95px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:134px;\r\n    border-radius:8px}\r\n.login-page .image5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:508px;\r\n    height:115px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:110px}\r\n.login-page .footer{\r\n    background:rgba(255,255,255,0.0);\r\n    top:685px;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .footer .view19{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .footer .view20{\r\n    background:rgba(255,255,255,0.0);\r\n    top:48px;\r\n    height:34px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:501px}\r\n.login-page .footer .view20 .image6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:6px;\r\n    height:27px;\r\n    width:91px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:26px}\r\n.login-page .footer .view20 .view21{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .footer .view20 .view21 .view22{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.login-page .footer .view20 .view21 .view22 .image7{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.login-page .footer .view20 .view21 .image8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:16px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.login-page .footer .view20 .view21 .view23{\r\n    background:rgba(217,255,175,1.0);\r\n    top:24px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px;\r\n    border-radius:3px}\r\n.login-page .footer .view20 .view21 .view24{\r\n    background:rgba(217,255,175,1.0);\r\n    top:20px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:2px}\r\n.login-page .footer .view20 .view21 .view25{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px;\r\n    border-radius:1px}\r\n.login-page .footer .est2017{\r\n    background:rgba(255,255,255,0.0);\r\n    top:87px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:554px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(216,255,171,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.login-page .footer .line4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:19px;\r\n    height:116px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:646px}\r\n.login-page .footer .contact-us-about-the{\r\n    background:rgba(255,255,255,0.0);\r\n    top:26px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:668px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.anima-animate-appear{\r\n    opacity:0;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 normal forwards}\r\n.anima-animate-disappear{\r\n    opacity:1;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 reverse forwards}\r\n.anima-animate-nodelay{\r\n    -webkit-animation-delay:0;\r\n    -moz-animation-delay:0;\r\n    -o-animation-delay:0;\r\n    animation-delay:0}@-webkit-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}@-moz-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}@-o-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}@keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".landing-page{\r\n    width:100%;\r\n    min-width:1281px;\r\n    height:100vh;\r\n    min-height:1700px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:0;\r\n    background:rgba(255,255,255,1.0)}\r\na{\r\n    text-decoration:none}\r\ndiv{\r\n    -webkit-text-size-adjust:none}\r\n.landing-page .rectangle{\r\n    background:rgba(52,52,52,1.0);\r\n    top:-1px;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .login{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1107px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .oval{\r\n    background:rgba(217,255,175,1.0);\r\n    top:432px;\r\n    height:76px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:36px;\r\n    border-radius:37px}\r\n.landing-page .view1{\r\n    background:rgba(217,255,175,1.0);\r\n    top:304px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:83px;\r\n    border-radius:38px}\r\n.landing-page .view2{\r\n    background:rgba(217,255,175,1.0);\r\n    top:637px;\r\n    height:225px;\r\n    width:225px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:41px;\r\n    border-radius:112px}\r\n.landing-page .view3{\r\n    background:rgba(217,255,175,1.0);\r\n    top:405px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:155px;\r\n    border-radius:20px}\r\n.landing-page .view4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:180px;\r\n    height:41px;\r\n    width:39px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:115px;\r\n    border-radius:19px}\r\n.landing-page .view5{\r\n    background:rgba(217,255,175,1.0);\r\n    top:239px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:147px;\r\n    border-radius:14px}\r\n.landing-page .view6{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1214px;\r\n    height:115px;\r\n    width:111px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:38px;\r\n    border-radius:55px}\r\n.landing-page .view7{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1086px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:175px;\r\n    border-radius:38px}\r\n.landing-page .view8{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1193px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:154px;\r\n    border-radius:20px}\r\n.landing-page .view9{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1423px;\r\n    height:86px;\r\n    width:86px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:121px;\r\n    border-radius:43px}\r\n.landing-page .view10{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1509px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:69px;\r\n    border-radius:20px}\r\n.landing-page .view11{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1135px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:64px;\r\n    border-radius:14px}\r\n.landing-page .view12{\r\n    background:rgba(217,255,175,1.0);\r\n    top:1264px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:186px;\r\n    border-radius:14px}\r\n.landing-page .view13{\r\n    background:rgba(217,255,175,1.0);\r\n    top:133px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:159px;\r\n    border-radius:8px}\r\n.landing-page .view14{\r\n    background:rgba(217,255,175,1.0);\r\n    top:88px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:130px;\r\n    border-radius:8px}\r\n.landing-page .image1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:501px;\r\n    height:115px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:106px}\r\n.landing-page .image2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:980px;\r\n    height:115px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:59px}\r\n.landing-page .group{\r\n    background:rgba(255,255,255,0.0);\r\n    top:7px;\r\n    height:40px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px}\r\n.landing-page .group .beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:31px;\r\n    width:110px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px}\r\n.landing-page .group .beaker-full{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .group .beaker-full .beaker{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .group .beaker-full .beaker .combined-shape{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .group .beaker-full .image3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:18px;\r\n    width:24px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.landing-page .group .beaker-full .oval4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:29px;\r\n    height:8px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:7px;\r\n    border-radius:4px}\r\n.landing-page .group .beaker-full .view15{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:5px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:12px;\r\n    border-radius:3px}\r\n.landing-page .group .beaker-full .view16{\r\n    background:rgba(217,255,175,1.0);\r\n    top:31px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:16px;\r\n    border-radius:1px}\r\n.landing-page .view17{\r\n    background:rgba(52,52,52,1.0);\r\n    top:1534px;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.landing-page .view18{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1582px;\r\n    height:34px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:502px}\r\n.landing-page .view18 .image4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:6px;\r\n    height:27px;\r\n    width:91px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:26px}\r\n.landing-page .view18 .view19{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view18 .view19 .view20{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view18 .view19 .view20 .image5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view18 .view19 .image6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:16px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.landing-page .view18 .view19 .view21{\r\n    background:rgba(217,255,175,1.0);\r\n    top:24px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px;\r\n    border-radius:3px}\r\n.landing-page .view18 .view19 .view22{\r\n    background:rgba(217,255,175,1.0);\r\n    top:20px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:2px}\r\n.landing-page .view18 .view19 .view23{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px;\r\n    border-radius:1px}\r\n.landing-page .rectangle2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:336px;\r\n    height:188px;\r\n    width:188px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:658px}\r\n.landing-page .image7{\r\n    background:rgba(255,255,255,0.0);\r\n    top:336px;\r\n    height:188px;\r\n    width:188px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:226px}\r\n.landing-page .rectangle6{\r\n    background:rgba(215,215,215,1.0);\r\n    top:374px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:336px;\r\n    height:188px;\r\n    width:188px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:872px}\r\n.landing-page .image9{\r\n    background:rgba(255,255,255,0.0);\r\n    top:361px;\r\n    height:96px;\r\n    width:109px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:919px}\r\n.landing-page .line{\r\n    background:rgba(255,255,255,0.0);\r\n    top:393px;\r\n    height:1px;\r\n    width:65px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:941px}\r\n.landing-page .image10{\r\n    background:rgba(255,255,255,0.0);\r\n    top:400px;\r\n    height:1px;\r\n    width:65px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:941px}\r\n.landing-page .image11{\r\n    background:rgba(255,255,255,0.0);\r\n    top:414px;\r\n    height:1px;\r\n    width:65px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:941px}\r\n.landing-page .image12{\r\n    background:rgba(255,255,255,0.0);\r\n    top:407px;\r\n    height:1px;\r\n    width:65px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:941px}\r\n.landing-page .image13{\r\n    background:rgba(255,255,255,0.0);\r\n    top:397px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image14{\r\n    background:rgba(255,255,255,0.0);\r\n    top:404px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image15{\r\n    background:rgba(255,255,255,0.0);\r\n    top:411px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image16{\r\n    background:rgba(255,255,255,0.0);\r\n    top:418px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image17{\r\n    background:rgba(255,255,255,0.0);\r\n    top:425px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image18{\r\n    background:rgba(255,255,255,0.0);\r\n    top:432px;\r\n    height:1px;\r\n    width:45px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:298px}\r\n.landing-page .image19{\r\n    background:rgba(255,255,255,0.0);\r\n    top:336px;\r\n    height:188px;\r\n    width:188px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:440px}\r\n.landing-page .welcome-to-beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:105px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:369px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:60.0px;\r\n    color:rgba(123,212,0,1.0);\r\n    text-align:center;\r\n    line-height:62.0px}\r\n.landing-page .rectangle3{\r\n    background:rgba(126,210,33,1.0);\r\n    top:629px;\r\n    height:57px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:520px}\r\n.landing-page .view24{\r\n    background:rgba(255,255,255,0.0);\r\n    top:702px;\r\n    height:38px;\r\n    width:242px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:520px;\r\n    border-style:solid;\r\n    border-width:1px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.landing-page .get-started{\r\n    background:rgba(255,255,255,0.0);\r\n    top:648px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:589px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:20.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:24.0px}\r\n.landing-page .are-you-a-professor{\r\n    background:rgba(255,255,255,0.0);\r\n    top:712px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:572px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .oval2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:360px;\r\n    height:93px;\r\n    width:92px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:706px}\r\n.landing-page .line2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:354px;\r\n    height:78px;\r\n    width:84px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:726px}\r\n.landing-page .rectangle4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:363px;\r\n    height:87px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:283px;\r\n    border-style:solid;\r\n    border-width:6px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.landing-page .save-the-research-fo{\r\n    background:rgba(255,255,255,0.0);\r\n    top:184px;\r\n    height:auto;\r\n    width:858px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:211px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(73,73,74,1.0);\r\n    text-align:center;\r\n    line-height:29.0px}\r\n.landing-page .rectangle5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:14px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1183px}\r\n.landing-page .sign-up{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1197px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .view25{\r\n    background:rgba(255,255,255,0.0);\r\n    top:15px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1085px;\r\n    border-style:solid;\r\n    border-width:2px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.landing-page .about-the-team{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:815px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .support{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:963px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .contact-us{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:689px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.landing-page .view26{\r\n    background:rgba(255,255,255,0.0);\r\n    top:77px;\r\n    height:176px;\r\n    width:111px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:283px}\r\n.landing-page .view26 .view27{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:176px;\r\n    width:111px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view26 .view27 .image20{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:176px;\r\n    width:111px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view26 .image21{\r\n    background:rgba(255,255,255,0.0);\r\n    top:92px;\r\n    height:80px;\r\n    width:99px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px}\r\n.landing-page .view26 .view28{\r\n    background:rgba(217,255,175,1.0);\r\n    top:129px;\r\n    height:34px;\r\n    width:30px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px;\r\n    border-radius:15px}\r\n.landing-page .view26 .view29{\r\n    background:rgba(217,255,175,1.0);\r\n    top:110px;\r\n    height:20px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:55px;\r\n    border-radius:10px}\r\n.landing-page .view26 .view30{\r\n    background:rgba(217,255,175,1.0);\r\n    top:136px;\r\n    height:12px;\r\n    width:12px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:70px;\r\n    border-radius:6px}\r\n.landing-page .as-an-undergrad-fin{\r\n    background:rgba(255,255,255,0.0);\r\n    top:274px;\r\n    height:auto;\r\n    width:795px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:239px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.landing-page .u-pload{\r\n    background:rgba(255,255,255,0.0);\r\n    top:477px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:270px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:25.0px}\r\n.landing-page .m-atch{\r\n    background:rgba(255,255,255,0.0);\r\n    top:477px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:708px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:25.0px}\r\n.landing-page .m-essage{\r\n    background:rgba(255,255,255,0.0);\r\n    top:477px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:910px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:25.0px}\r\n.landing-page .s-earch{\r\n    background:rgba(255,255,255,0.0);\r\n    top:477px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:486px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:24.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:25.0px}\r\n.landing-page .bitmap{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1251px;\r\n    height:258px;\r\n    width:518px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:647px}\r\n.landing-page .rectangle10{\r\n    background:rgba(52,52,52,1.0);\r\n    top:1273px;\r\n    height:209px;\r\n    width:777px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .faculty-and-universi{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1350px;\r\n    height:auto;\r\n    width:615px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:113px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.landing-page .join-the-beakr-commu{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1299px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:109px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:30.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:31.0px}\r\n.landing-page .image22{\r\n    background:rgba(255,255,255,0.0);\r\n    top:772px;\r\n    height:298px;\r\n    width:499px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:667px}\r\n.landing-page .view31{\r\n    background:rgba(52,52,52,1.0);\r\n    top:795px;\r\n    height:209px;\r\n    width:777px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .all-matches-from-bea{\r\n    background:rgba(255,255,255,0.0);\r\n    top:868px;\r\n    height:auto;\r\n    width:640px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:109px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.landing-page .how-it-works{\r\n    background:rgba(255,255,255,0.0);\r\n    top:821px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:112px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:30.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:31.0px}\r\n.landing-page .download-the-app{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1095px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:863px;\r\n    font-family:'STHeitiSC-Medium',Helvetica,Arial,serif;\r\n    font-size:30.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:right;\r\n    line-height:31.0px}\r\n.landing-page .rectangle11{\r\n    background:rgba(126,210,33,1.0);\r\n    top:1423px;\r\n    height:42px;\r\n    width:166px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:306px}\r\n.landing-page .label1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1433px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:338px;\r\n    font-family:'Arial',Helvetica,Arial,serif;\r\n    font-weight:400;\r\n    font-style:normal;\r\n    font-size:20.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:center;\r\n    line-height:23.0px}\r\n.landing-page .available-for-free-o{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1150px;\r\n    height:auto;\r\n    width:420px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:751px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:right;\r\n    line-height:18.0px}\r\n.landing-page .create-a-profile-up{\r\n    background:rgba(255,255,255,0.0);\r\n    top:528px;\r\n    height:auto;\r\n    width:187px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:231px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.landing-page .find-a-lab-you-like{\r\n    background:rgba(255,255,255,0.0);\r\n    top:530px;\r\n    height:auto;\r\n    width:187px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:659px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.landing-page .look-through-our-sug{\r\n    background:rgba(255,255,255,0.0);\r\n    top:530px;\r\n    height:auto;\r\n    width:187px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:445px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.landing-page .if-youre-accepted{\r\n    background:rgba(255,255,255,0.0);\r\n    top:530px;\r\n    height:76px;\r\n    width:185px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:869px}\r\n.landing-page .view32{\r\n    background:rgba(255,255,255,0.0);\r\n    top:359px;\r\n    height:94px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:497px}\r\n.landing-page .view32 .image23{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:69px;\r\n    width:69px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view32 .line3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:58px;\r\n    height:35px;\r\n    width:28px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:47px}\r\n.landing-page .est2017{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1621px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:555px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(216,255,171,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.landing-page .line4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1553px;\r\n    height:116px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:647px}\r\n.landing-page .contact-us-about-the{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1560px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:669px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1186px;\r\n    height:40px;\r\n    width:120px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1051px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .group3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:120px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:119px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:13px;\r\n    height:18px;\r\n    width:19px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:9px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:6px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:18px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill7{\r\n    background:rgba(255,255,255,0.0);\r\n    top:18px;\r\n    height:13px;\r\n    width:12px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:34px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:13px;\r\n    width:10px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:46px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill9{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:13px;\r\n    width:10px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:56px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill10{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:14px;\r\n    width:11px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:69px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill11{\r\n    background:rgba(255,255,255,0.0);\r\n    top:19px;\r\n    height:12px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:80px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill12{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:10px;\r\n    width:9px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:86px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill13{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:10px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:96px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill14{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:10px;\r\n    width:9px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:101px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill15{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:35px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill16{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:41px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill17{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:7px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:46px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill18{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:53px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill19{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:7px;\r\n    width:2px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:59px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill20{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:61px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill21{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:66px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill22{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:7px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:71px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill23{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:79px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill24{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:84px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill25{\r\n    background:rgba(255,255,255,0.0);\r\n    top:9px;\r\n    height:6px;\r\n    width:4px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:91px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill26{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:7px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:95px}\r\n.landing-page .downloadonthe-app-store-badge-usu-kblk092917 .fill27{\r\n    background:rgba(255,255,255,0.0);\r\n    top:10px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:100px}\r\n.landing-page .googleplaybadge{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1177px;\r\n    height:58px;\r\n    width:150px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:899px}\r\n.landing-page .oval8{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1093px;\r\n    height:127px;\r\n    width:123px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:692px}\r\n.landing-page .view33{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1111px;\r\n    height:91px;\r\n    width:59px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:724px}\r\n.landing-page .view33 .view34{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:91px;\r\n    width:59px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view33 .view34 .image24{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:91px;\r\n    width:59px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.landing-page .view33 .image25{\r\n    background:rgba(255,255,255,0.0);\r\n    top:47px;\r\n    height:42px;\r\n    width:53px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:3px}\r\n.landing-page .view33 .view35{\r\n    background:rgba(217,255,175,1.0);\r\n    top:67px;\r\n    height:18px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:17px;\r\n    border-radius:8px}\r\n.landing-page .view33 .view36{\r\n    background:rgba(217,255,175,1.0);\r\n    top:56px;\r\n    height:12px;\r\n    width:11px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:29px;\r\n    border-radius:5px}\r\n.landing-page .view33 .view37{\r\n    background:rgba(217,255,175,1.0);\r\n    top:70px;\r\n    height:7px;\r\n    width:7px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:37px;\r\n    border-radius:3px}\r\n.anima-animate-appear{\r\n    opacity:0;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 normal forwards}\r\n.anima-animate-disappear{\r\n    opacity:1;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 reverse forwards}\r\n.anima-animate-nodelay{\r\n    -webkit-animation-delay:0;\r\n    -moz-animation-delay:0;\r\n    -o-animation-delay:0;\r\n    animation-delay:0}\r\n@-webkit-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-moz-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-o-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".dashboard-student-new{\r\n    width:100%;\r\n    min-width:1280px;\r\n    height:100vh;\r\n    min-height:850px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:0;\r\n    background:rgba(255,255,255,1.0)}\r\na{\r\n    text-decoration:none}\r\ndiv{\r\n    -webkit-text-size-adjust:none}\r\n.dashboard-student-new .rectangle{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .rectangle5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:14px;\r\n    height:31px;\r\n    width:81px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1183px}\r\n.dashboard-student-new .studentusername{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1045px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:right;\r\n    line-height:16.0px;\r\n    text-decoration:underline}\r\n.dashboard-student-new .logout{\r\n    background:rgba(255,255,255,0.0);\r\n    top:22px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1200px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .about-the-team{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:815px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .support{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:963px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .contact-us{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:689px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .rectangle12{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .view1{\r\n    background:rgba(185,185,185,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .view2{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:142px}\r\n.dashboard-student-new .view3{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:284px}\r\n.dashboard-student-new .view4{\r\n    background:rgba(228,228,228,1.0);\r\n    top:55px;\r\n    height:56px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:426px}\r\n.dashboard-student-new .search{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:190px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .requests{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:324px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .messages{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:464px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .dashboard{\r\n    background:rgba(255,255,255,0.0);\r\n    top:75px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:36px;\r\n    font-family:'HelveticaNeue',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:16.0px}\r\n.dashboard-student-new .group{\r\n    background:rgba(255,255,255,0.0);\r\n    top:7px;\r\n    height:40px;\r\n    width:142px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px}\r\n.dashboard-student-new .group .beakr{\r\n    background:rgba(255,255,255,0.0);\r\n    top:8px;\r\n    height:31px;\r\n    width:110px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:32px}\r\n.dashboard-student-new .group .beaker-full{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .group .beaker-full .beaker{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .group .beaker-full .beaker .combined-shape{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:40px;\r\n    width:26px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .group .beaker-full .image1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:21px;\r\n    height:18px;\r\n    width:24px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.dashboard-student-new .group .beaker-full .oval4{\r\n    background:rgba(217,255,175,1.0);\r\n    top:29px;\r\n    height:8px;\r\n    width:8px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:7px;\r\n    border-radius:4px}\r\n.dashboard-student-new .group .beaker-full .view5{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:5px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:12px;\r\n    border-radius:3px}\r\n.dashboard-student-new .group .beaker-full .view6{\r\n    background:rgba(217,255,175,1.0);\r\n    top:31px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:16px;\r\n    border-radius:1px}\r\n.dashboard-student-new .group2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:242px;\r\n    height:467px;\r\n    width:135px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:923px}\r\n.dashboard-student-new .group2 .oval{\r\n    background:rgba(217,255,175,1.0);\r\n    top:391px;\r\n    height:76px;\r\n    width:74px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0;\r\n    border-radius:37px}\r\n.dashboard-student-new .group2 .view7{\r\n    background:rgba(217,255,175,1.0);\r\n    top:229px;\r\n    height:79px;\r\n    width:76px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:22px;\r\n    border-radius:38px}\r\n.dashboard-student-new .group2 .view8{\r\n    background:rgba(217,255,175,1.0);\r\n    top:330px;\r\n    height:42px;\r\n    width:41px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:94px;\r\n    border-radius:20px}\r\n.dashboard-student-new .group2 .view9{\r\n    background:rgba(217,255,175,1.0);\r\n    top:105px;\r\n    height:41px;\r\n    width:39px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:54px;\r\n    border-radius:19px}\r\n.dashboard-student-new .group2 .view10{\r\n    background:rgba(217,255,175,1.0);\r\n    top:164px;\r\n    height:30px;\r\n    width:29px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:86px;\r\n    border-radius:14px}\r\n.dashboard-student-new .group2 .view11{\r\n    background:rgba(217,255,175,1.0);\r\n    top:58px;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:98px;\r\n    border-radius:8px}\r\n.dashboard-student-new .group2 .view12{\r\n    background:rgba(217,255,175,1.0);\r\n    top:0;\r\n    height:17px;\r\n    width:16px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:90px;\r\n    border-radius:8px}\r\n.dashboard-student-new .footer{\r\n    background:rgba(255,255,255,0.0);\r\n    top:685px;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .footer .view13{\r\n    background:rgba(52,52,52,1.0);\r\n    top:0;\r\n    height:166px;\r\n    width:1280px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .footer .view14{\r\n    background:rgba(255,255,255,0.0);\r\n    top:48px;\r\n    height:34px;\r\n    width:117px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:501px}\r\n.dashboard-student-new .footer .view14 .image2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:6px;\r\n    height:27px;\r\n    width:91px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:26px}\r\n.dashboard-student-new .footer .view14 .view15{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .footer .view14 .view15 .view16{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .footer .view14 .view15 .view16 .image3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:34px;\r\n    width:22px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.dashboard-student-new .footer .view14 .view15 .image4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:17px;\r\n    height:16px;\r\n    width:20px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1px}\r\n.dashboard-student-new .footer .view14 .view15 .view17{\r\n    background:rgba(217,255,175,1.0);\r\n    top:24px;\r\n    height:7px;\r\n    width:6px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:6px;\r\n    border-radius:3px}\r\n.dashboard-student-new .footer .view14 .view15 .view18{\r\n    background:rgba(217,255,175,1.0);\r\n    top:20px;\r\n    height:5px;\r\n    width:5px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:10px;\r\n    border-radius:2px}\r\n.dashboard-student-new .footer .view14 .view15 .view19{\r\n    background:rgba(217,255,175,1.0);\r\n    top:25px;\r\n    height:3px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:13px;\r\n    border-radius:1px}\r\n.dashboard-student-new .footer .est2017{\r\n    background:rgba(255,255,255,0.0);\r\n    top:87px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:554px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(216,255,171,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.dashboard-student-new .footer .line4{\r\n    background:rgba(255,255,255,0.0);\r\n    top:19px;\r\n    height:116px;\r\n    width:3px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:646px}\r\n.dashboard-student-new .footer .contact-us-about-the{\r\n    background:rgba(255,255,255,0.0);\r\n    top:26px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:668px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(255,255,255,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.dashboard-student-new .welcome-miranda{\r\n    background:rgba(255,255,255,0.0);\r\n    top:127px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:29px;\r\n    font-family:'HelveticaNeue-Bold',Helvetica,Arial,serif;\r\n    font-size:18.0px;\r\n    color:rgba(123,212,0,1.0);\r\n    text-align:left;\r\n    line-height:23.0px}\r\n.dashboard-student-new .rectangle13{\r\n    background:rgba(255,255,255,0.0);\r\n    top:161px;\r\n    height:503px;\r\n    width:215px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:25px}\r\n.dashboard-student-new .research-opportuniti{\r\n    background:rgba(255,255,255,0.0);\r\n    top:172px;\r\n    height:auto;\r\n    width:175px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:45px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:12.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:left;\r\n    line-height:15.0px}\r\n.dashboard-student-new .image5{\r\n    background:rgba(255,255,255,0.0);\r\n    top:161px;\r\n    height:503px;\r\n    width:215px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1043px}\r\n.dashboard-student-new .rectangle14{\r\n    background:rgba(255,255,255,0.0);\r\n    top:163px;\r\n    height:102px;\r\n    width:730px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:276px;\r\n    border-style:solid;\r\n    border-width:2px;\r\n    border-color:rgba(126,210,33,1.0)}\r\n.dashboard-student-new .view20{\r\n    background:rgba(255,255,255,0.0);\r\n    top:289px;\r\n    height:369px;\r\n    width:730px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:277px;\r\n    border-style:solid;\r\n    border-width:1px;\r\n    border-color:rgba(215,215,215,1.0)}\r\n.dashboard-student-new .looks-like-youre-a{\r\n    background:rgba(255,255,255,0.0);\r\n    top:181px;\r\n    height:56px;\r\n    width:635px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:355px}\r\n.dashboard-student-new .group3{\r\n    background:rgba(255,255,255,0.0);\r\n    top:173px;\r\n    height:44px;\r\n    width:44px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:290px}\r\n.dashboard-student-new .group3 .oval5{\r\n    background:rgba(126,210,33,1.0);\r\n    top:0;\r\n    height:44px;\r\n    width:44px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:0;\r\n    border-radius:22px}\r\n.dashboard-student-new .group3 .label1{\r\n    background:rgba(255,255,255,0.0);\r\n    top:1px;\r\n    height:auto;\r\n    width:13px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:18px;\r\n    font-family:'HelveticaNeue-Bold',Helvetica,Arial,serif;\r\n    font-size:34.0px;\r\n    color:rgba(254,255,254,1.0);\r\n    text-align:left;\r\n    line-height:41.0px}\r\n.dashboard-student-new .sure{\r\n    background:rgba(255,255,255,0.0);\r\n    top:225px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:935px;\r\n    font-family:'HelveticaNeue-Bold',Helvetica,Arial,serif;\r\n    font-size:20.0px;\r\n    color:rgba(123,212,0,1.0);\r\n    text-align:left;\r\n    line-height:25.0px}\r\n.dashboard-student-new .no-thanks{\r\n    background:rgba(255,255,255,0.0);\r\n    top:230px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:846px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.dashboard-student-new .updates{\r\n    background:rgba(255,255,255,0.0);\r\n    top:299px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:611px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.dashboard-student-new .profile{\r\n    background:rgba(255,255,255,0.0);\r\n    top:174px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1129px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(0,0,0,1.0);\r\n    text-align:left;\r\n    line-height:18.0px}\r\n.dashboard-student-new .rectangle15{\r\n    background:rgba(255,255,255,1.0);\r\n    top:217px;\r\n    height:175px;\r\n    width:175px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:45px}\r\n.dashboard-student-new .uh-oh-update-your-i{\r\n    background:rgba(255,255,255,0.0);\r\n    top:233px;\r\n    height:auto;\r\n    width:128px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:69px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:12.0px;\r\n    color:rgba(78,78,78,1.0);\r\n    text-align:left;\r\n    line-height:15.0px}\r\n.dashboard-student-new .update-picture{\r\n    background:rgba(255,255,255,0.0);\r\n    top:353px;\r\n    height:auto;\r\n    width:75px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1113px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:10.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:left;\r\n    line-height:12.0px}\r\n.dashboard-student-new .update-interests-vie{\r\n    background:rgba(255,255,255,0.0);\r\n    top:392px;\r\n    height:auto;\r\n    width:175px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1063px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:16.0px;\r\n    color:rgba(74,73,74,1.0);\r\n    text-align:center;\r\n    line-height:18.0px}\r\n.dashboard-student-new .get-started{\r\n    background:rgba(255,255,255,0.0);\r\n    top:353px;\r\n    height:auto;\r\n    width:auto;\r\n    position:absolute;\r\n    margin:0;\r\n    left:104px;\r\n    font-family:'HelveticaNeue-Bold',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:center;\r\n    line-height:17.0px}\r\n.dashboard-student-new .december3-you-joine{\r\n    background:rgba(255,255,255,0.0);\r\n    top:330px;\r\n    height:auto;\r\n    width:671px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:307px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(154,154,155,1.0);\r\n    text-align:left;\r\n    line-height:17.0px}\r\n.dashboard-student-new .line{\r\n    background:rgba(255,255,255,0.0);\r\n    top:413px;\r\n    height:3px;\r\n    width:669px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:308px}\r\n.dashboard-student-new .label2{\r\n    background:rgba(255,255,255,0.0);\r\n    top:387px;\r\n    height:auto;\r\n    width:99px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:876px;\r\n    font-family:'HelveticaNeue-Light',Helvetica,Arial,serif;\r\n    font-size:14.0px;\r\n    color:rgba(126,210,33,1.0);\r\n    text-align:right;\r\n    line-height:17.0px}\r\n.dashboard-student-new .view21{\r\n    background:rgba(255,255,255,0.0);\r\n    top:202px;\r\n    height:141px;\r\n    width:141px;\r\n    position:absolute;\r\n    margin:0;\r\n    left:1080px}\r\n.dashboard-student-new .view21 .image6{\r\n    background:rgba(255,255,255,0.0);\r\n    top:0;\r\n    height:141px;\r\n    width:141px;\r\n    position:relative;\r\n    margin:0;\r\n    left:0}\r\n.anima-animate-appear{\r\n    opacity:0;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 normal forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 normal forwards}\r\n.anima-animate-disappear{\r\n    opacity:1;\r\n    display:block;\r\n    -webkit-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    -moz-animation:anima-reveal .3s ease-in 1 normal forwards;\r\n    -o-animation:anima-reveal .3s ease-in-out 1 reverse forwards;\r\n    animation:anima-reveal .3s ease-in-out 1 reverse forwards}\r\n.anima-animate-nodelay{\r\n    -webkit-animation-delay:0;\r\n    -moz-animation-delay:0;\r\n    -o-animation-delay:0;\r\n    animation-delay:0}\r\n@-webkit-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-moz-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@-o-keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n@keyframes anima-reveal{\r\n    0%{\r\n    opacity:0}100%{\r\n    opacity:1}}\r\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);