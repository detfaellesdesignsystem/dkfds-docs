/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"dkfds-selectwoo-example": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js":
/*!******************************************************************!*\
  !*** ./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nwindow.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nvar selectWoo = __webpack_require__(/*! select-woo */ \"./node_modules/select-woo/dist/js/select2.js\");\n\nvar jsSelectorSelectwoo_Example1 = '#js-selectwoo-example1';\nvar jsSelectorSelectwoo_Example2 = '#js-selectwoo-example2';\nvar jsSelectorSelectwoo_Example3 = '#js-selectwoo-example3';\n\nvar selectwooExamples = function selectwooExamples(el) {\n  _classCallCheck(this, selectwooExamples);\n\n  var countries = [\"Afghanistan\", \"Albania\", \"Algeria\", \"American Samoa\", \"Andorra\", \"Angola\", \"Anguilla\", \"Antarctica\", \"Antigua and Barbuda\", \"Argentina\", \"Armenia\", \"Aruba\", \"Australia\", \"Austria\", \"Azerbaijan\", \"Bahamas\", \"Bahrain\", \"Bangladesh\", \"Barbados\", \"Belarus\", \"Belgium\", \"Belize\", \"Benin\", \"Bermuda\", \"Bhutan\", \"Bolivia\", \"Bosnia and Herzegowina\", \"Botswana\", \"Bouvet Island\", \"Brazil\", \"British Indian Ocean Territory\", \"Brunei Darussalam\", \"Bulgaria\", \"Burkina Faso\", \"Burundi\", \"Cambodia\", \"Cameroon\", \"Canada\", \"Cape Verde\", \"Cayman Islands\", \"Central African Republic\", \"Chad\", \"Chile\", \"China\", \"Christmas Island\", \"Cocos (Keeling) Islands\", \"Colombia\", \"Comoros\", \"Congo\", \"Congo, the Democratic Republic of the\", \"Cook Islands\", \"Costa Rica\", \"Cote d'Ivoire\", \"Croatia (Hrvatska)\", \"Cuba\", \"Cyprus\", \"Czech Republic\", \"Denmark\", \"Djibouti\", \"Dominica\", \"Dominican Republic\", \"East Timor\", \"Ecuador\", \"Egypt\", \"El Salvador\", \"Equatorial Guinea\", \"Eritrea\", \"Estonia\", \"Ethiopia\", \"Falkland Islands (Malvinas)\", \"Faroe Islands\", \"Fiji\", \"Finland\", \"France\", \"France Metropolitan\", \"French Guiana\", \"French Polynesia\", \"French Southern Territories\", \"Gabon\", \"Gambia\", \"Georgia\", \"Germany\", \"Ghana\", \"Gibraltar\", \"Greece\", \"Greenland\", \"Grenada\", \"Guadeloupe\", \"Guam\", \"Guatemala\", \"Guinea\", \"Guinea-Bissau\", \"Guyana\", \"Haiti\", \"Heard and Mc Donald Islands\", \"Holy See (Vatican City State)\", \"Honduras\", \"Hong Kong\", \"Hungary\", \"Iceland\", \"India\", \"Indonesia\", \"Iran (Islamic Republic of)\", \"Iraq\", \"Ireland\", \"Israel\", \"Italy\", \"Jamaica\", \"Japan\", \"Jordan\", \"Kazakhstan\", \"Kenya\", \"Kiribati\", \"Korea, Democratic People's Republic of\", \"Korea, Republic of\", \"Kuwait\", \"Kyrgyzstan\", \"Lao, People's Democratic Republic\", \"Latvia\", \"Lebanon\", \"Lesotho\", \"Liberia\", \"Libyan Arab Jamahiriya\", \"Liechtenstein\", \"Lithuania\", \"Luxembourg\", \"Macau\", \"Macedonia, The Former Yugoslav Republic of\", \"Madagascar\", \"Malawi\", \"Malaysia\", \"Maldives\", \"Mali\", \"Malta\", \"Marshall Islands\", \"Martinique\", \"Mauritania\", \"Mauritius\", \"Mayotte\", \"Mexico\", \"Micronesia, Federated States of\", \"Moldova, Republic of\", \"Monaco\", \"Mongolia\", \"Montserrat\", \"Morocco\", \"Mozambique\", \"Myanmar\", \"Namibia\", \"Nauru\", \"Nepal\", \"Netherlands\", \"Netherlands Antilles\", \"New Caledonia\", \"New Zealand\", \"Nicaragua\", \"Niger\", \"Nigeria\", \"Niue\", \"Norfolk Island\", \"Northern Mariana Islands\", \"Norway\", \"Oman\", \"Pakistan\", \"Palau\", \"Panama\", \"Papua New Guinea\", \"Paraguay\", \"Peru\", \"Philippines\", \"Pitcairn\", \"Poland\", \"Portugal\", \"Puerto Rico\", \"Qatar\", \"Reunion\", \"Romania\", \"Russian Federation\", \"Rwanda\", \"Saint Kitts and Nevis\", \"Saint Lucia\", \"Saint Vincent and the Grenadines\", \"Samoa\", \"San Marino\", \"Sao Tome and Principe\", \"Saudi Arabia\", \"Senegal\", \"Seychelles\", \"Sierra Leone\", \"Singapore\", \"Slovakia (Slovak Republic)\", \"Slovenia\", \"Solomon Islands\", \"Somalia\", \"South Africa\", \"South Georgia and the South Sandwich Islands\", \"Spain\", \"Sri Lanka\", \"St. Helena\", \"St. Pierre and Miquelon\", \"Sudan\", \"Suriname\", \"Svalbard and Jan Mayen Islands\", \"Swaziland\", \"Sweden\", \"Switzerland\", \"Syrian Arab Republic\", \"Taiwan, Province of China\", \"Tajikistan\", \"Tanzania, United Republic of\", \"Thailand\", \"Togo\", \"Tokelau\", \"Tonga\", \"Trinidad and Tobago\", \"Tunisia\", \"Turkey\", \"Turkmenistan\", \"Turks and Caicos Islands\", \"Tuvalu\", \"Uganda\", \"Ukraine\", \"United Arab Emirates\", \"United Kingdom\", \"United States\", \"United States Minor Outlying Islands\", \"Uruguay\", \"Uzbekistan\", \"Vanuatu\", \"Venezuela\", \"Vietnam\", \"Virgin Islands (British)\", \"Virgin Islands (U.S.)\", \"Wallis and Futuna Islands\", \"Western Sahara\", \"Yemen\", \"Yugoslavia\", \"Zambia\", \"Zimbabwe\"]; //Init a normal selectwoo \n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example1).selectWoo({\n    multiple: true,\n    placeholder: \"Vælg et element på listen\",\n    data: countries,\n    width: \"100%\",\n    language: \"da\"\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example1).removeClass('d-none'); //avoid flash of unstyled content.\n  //Init an ajax selectwoo\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example2).selectWoo({\n    multiple: true,\n    placeholder: \"Vælg et element på listen\",\n    width: \"100%\",\n    language: {\n      \"noResults\": function noResults() {\n        return \"Ingen resultater fundet\";\n      }\n    },\n    ajax: {\n      url: 'https://jsonplaceholder.typicode.com/users',\n      dataType: 'json',\n      processResults: function processResults(data) {\n        return {\n          results: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(data, function (item) {\n            return {\n              text: item.name,\n              id: item.id\n            };\n          })\n        };\n      }\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example2).removeClass('d-none'); //avoid flash of unstyled content.\n  //Init a normal selectwoo\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example3).selectWoo({\n    multiple: true,\n    placeholder: \"Vælg et element på listen\",\n    width: \"100%\",\n    language: \"da\"\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorSelectwoo_Example3).removeClass('d-none'); //avoid flash of unstyled content.\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  new selectwooExamples();\n});\n\n//# sourceURL=webpack:///./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js?");

/***/ }),

/***/ 5:
/*!************************************************************************!*\
  !*** multi ./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js */\"./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/plugins/selectwoo/js/dkfds-selectwoo-example.js?");

/***/ })

/******/ });