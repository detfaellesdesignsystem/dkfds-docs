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
/******/ 		"dkfds-datatables-example": 0
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
/******/ 	deferredModules.push([4,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dkfds-components/src/js/components/dropdown.js":
/*!*********************************************************!*\
  !*** ../dkfds-components/src/js/components/dropdown.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar closest = __webpack_require__(/*! ../utils/closest */ \"../dkfds-components/src/js/utils/closest.js\");\n\nvar toggle = __webpack_require__(/*! ../utils/toggle */ \"../dkfds-components/src/js/utils/toggle.js\");\n\nvar breakpoints = __webpack_require__(/*! ../utils/breakpoints */ \"../dkfds-components/src/js/utils/breakpoints.js\");\n\nvar BUTTON = '.js-dropdown';\nvar jsDropdownCollapseModifier = 'js-dropdown--responsive-collapse'; //option: make dropdown behave as the collapse component when on small screens (used by submenus in the header and step-dropdown).\n\nvar TARGET = 'data-js-target';\nvar eventCloseName = 'fds.dropdown.close';\nvar eventOpenName = 'fds.dropdown.open';\n\nvar Dropdown =\n/*#__PURE__*/\nfunction () {\n  function Dropdown(el) {\n    _classCallCheck(this, Dropdown);\n\n    this.responsiveListCollapseEnabled = false;\n    this.triggerEl = null;\n    this.targetEl = null;\n    this.init(el);\n\n    if (this.triggerEl !== null && this.triggerEl !== undefined && this.targetEl !== null && this.targetEl !== undefined) {\n      var that = this;\n\n      if (this.triggerEl.parentNode.classList.contains('overflow-menu--md-no-responsive') || this.triggerEl.parentNode.classList.contains('overflow-menu--lg-no-responsive')) {\n        this.responsiveListCollapseEnabled = true;\n      } //Clicked outside dropdown -> close it\n\n\n      document.getElementsByTagName('body')[0].removeEventListener('click', outsideClose);\n      document.getElementsByTagName('body')[0].addEventListener('click', outsideClose); //Clicked on dropdown open button --> toggle it\n\n      this.triggerEl.removeEventListener('click', toggleDropdown);\n      this.triggerEl.addEventListener('click', toggleDropdown); // set aria-hidden correctly for screenreaders (Tringuide responsive)\n\n      if (this.responsiveListCollapseEnabled) {\n        var element = this.triggerEl;\n\n        if (window.IntersectionObserver) {\n          // trigger event when button changes visibility\n          var observer = new IntersectionObserver(function (entries) {\n            // button is visible\n            if (entries[0].intersectionRatio) {\n              if (element.getAttribute('aria-expanded') === 'false') {\n                that.targetEl.setAttribute('aria-hidden', 'true');\n              }\n            } else {\n              // button is not visible\n              if (that.targetEl.getAttribute('aria-hidden') === 'true') {\n                that.targetEl.setAttribute('aria-hidden', 'false');\n              }\n            }\n          }, {\n            root: document.body\n          });\n          observer.observe(element);\n        } else {\n          // IE: IntersectionObserver is not supported, so we listen for window resize and grid breakpoint instead\n          if (doResponsiveCollapse(that.triggerEl)) {\n            // small screen\n            if (element.getAttribute('aria-expanded') === 'false') {\n              that.targetEl.setAttribute('aria-hidden', 'true');\n            } else {\n              that.targetEl.setAttribute('aria-hidden', 'false');\n            }\n          } else {\n            // Large screen\n            that.targetEl.setAttribute('aria-hidden', 'false');\n          }\n\n          window.addEventListener('resize', function () {\n            if (doResponsiveCollapse(that.triggerEl)) {\n              if (element.getAttribute('aria-expanded') === 'false') {\n                that.targetEl.setAttribute('aria-hidden', 'true');\n              } else {\n                that.targetEl.setAttribute('aria-hidden', 'false');\n              }\n            } else {\n              that.targetEl.setAttribute('aria-hidden', 'false');\n            }\n          });\n        }\n      }\n\n      document.onkeydown = function (evt) {\n        evt = evt || window.event;\n\n        if (evt.keyCode === 27) {\n          closeAll();\n        }\n      };\n    }\n  }\n\n  _createClass(Dropdown, [{\n    key: \"init\",\n    value: function init(el) {\n      this.triggerEl = el;\n\n      if (this.triggerEl !== null && this.triggerEl !== undefined) {\n        var targetAttr = this.triggerEl.getAttribute(TARGET);\n\n        if (targetAttr !== null && targetAttr !== undefined) {\n          var targetEl = document.getElementById(targetAttr.replace('#', ''));\n\n          if (targetEl !== null && targetEl !== undefined) {\n            this.targetEl = targetEl;\n          }\n        }\n      }\n    }\n  }]);\n\n  return Dropdown;\n}();\n/**\n * Toggle a button's \"pressed\" state, optionally providing a target\n * state.\n *\n * @param {HTMLButtonElement} button\n * @param {boolean?} expanded If no state is provided, the current\n * state will be toggled (from false to true, and vice-versa).\n * @return {boolean} the resulting state\n */\n\n\nvar toggleButton = function toggleButton(button, expanded) {\n  toggle(button, expanded);\n};\n/**\n * Get an Array of button elements belonging directly to the given\n * accordion element.\n * @param parent accordion element\n * @returns {NodeListOf<SVGElementTagNameMap[[string]]> | NodeListOf<HTMLElementTagNameMap[[string]]> | NodeListOf<Element>}\n */\n\n\nvar getButtons = function getButtons(parent) {\n  return parent.querySelectorAll(BUTTON);\n};\n\nvar closeAll = function closeAll() {\n  var eventClose = document.createEvent('Event');\n  eventClose.initEvent(eventCloseName, true, true);\n  var body = document.querySelector('body');\n  var overflowMenuEl = document.getElementsByClassName('overflow-menu');\n\n  for (var oi = 0; oi < overflowMenuEl.length; oi++) {\n    var currentOverflowMenuEL = overflowMenuEl[oi];\n    var triggerEl = currentOverflowMenuEL.querySelector(BUTTON);\n    var targetEl = currentOverflowMenuEL.querySelector('#' + triggerEl.getAttribute(TARGET).replace('#', ''));\n\n    if (targetEl !== null && triggerEl !== null) {\n      if (doResponsiveCollapse(triggerEl)) {\n        if (triggerEl.getAttribute('aria-expanded') === true) {\n          triggerEl.dispatchEvent(eventClose);\n        }\n\n        triggerEl.setAttribute('aria-expanded', 'false');\n        targetEl.classList.add('collapsed');\n        targetEl.setAttribute('aria-hidden', 'true');\n      }\n    }\n  }\n};\n\nvar offset = function offset(el) {\n  var rect = el.getBoundingClientRect(),\n      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\n      scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  return {\n    top: rect.top + scrollTop,\n    left: rect.left + scrollLeft\n  };\n};\n\nvar toggleDropdown = function toggleDropdown(event) {\n  var forceClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  event.stopPropagation();\n  event.preventDefault();\n  var eventClose = document.createEvent('Event');\n  eventClose.initEvent(eventCloseName, true, true);\n  var eventOpen = document.createEvent('Event');\n  eventOpen.initEvent(eventOpenName, true, true);\n  var triggerEl = this;\n  var targetEl = null;\n\n  if (triggerEl !== null && triggerEl !== undefined) {\n    var targetAttr = triggerEl.getAttribute(TARGET);\n\n    if (targetAttr !== null && targetAttr !== undefined) {\n      targetEl = document.getElementById(targetAttr.replace('#', ''));\n    }\n  }\n\n  if (triggerEl !== null && triggerEl !== undefined && targetEl !== null && targetEl !== undefined) {\n    //change state\n    targetEl.style.left = null;\n    targetEl.style.right = null;\n\n    if (triggerEl.getAttribute('aria-expanded') === 'true' || forceClose) {\n      //close\n      triggerEl.setAttribute('aria-expanded', 'false');\n      targetEl.classList.add('collapsed');\n      targetEl.setAttribute('aria-hidden', 'true');\n      triggerEl.dispatchEvent(eventClose);\n    } else {\n      closeAll(); //open\n\n      triggerEl.setAttribute('aria-expanded', 'true');\n      targetEl.classList.remove('collapsed');\n      targetEl.setAttribute('aria-hidden', 'false');\n      triggerEl.dispatchEvent(eventOpen);\n      var targetOffset = offset(targetEl);\n\n      if (targetOffset.left < 0) {\n        targetEl.style.left = '0px';\n        targetEl.style.right = 'auto';\n      }\n\n      var right = targetOffset.left + targetEl.offsetWidth;\n\n      if (right > window.innerWidth) {\n        targetEl.style.left = 'auto';\n        targetEl.style.right = '0px';\n      }\n\n      var offsetAgain = offset(targetEl);\n\n      if (offsetAgain.left < 0) {\n        targetEl.style.left = '0px';\n        targetEl.style.right = 'auto';\n      }\n\n      right = offsetAgain.left + targetEl.offsetWidth;\n\n      if (right > window.innerWidth) {\n        targetEl.style.left = 'auto';\n        targetEl.style.right = '0px';\n      }\n    }\n  }\n};\n/**\n * @param {HTMLButtonElement} button\n * @return {boolean} true\n */\n\n\nvar show = function show(button) {\n  toggleButton(button, true);\n};\n/**\n * @param {HTMLButtonElement} button\n * @return {boolean} false\n */\n\n\nvar hide = function hide(button) {\n  toggleButton(button, false);\n};\n\nvar outsideClose = function outsideClose(evt) {\n  if (document.querySelector('body.mobile_nav-active') === null) {\n    var openDropdowns = document.querySelectorAll('.js-dropdown[aria-expanded=true]');\n\n    for (var i = 0; i < openDropdowns.length; i++) {\n      var triggerEl = openDropdowns[i];\n      var targetEl = null;\n      var targetAttr = triggerEl.getAttribute(TARGET);\n\n      if (targetAttr !== null && targetAttr !== undefined) {\n        targetEl = document.getElementById(targetAttr);\n      }\n\n      if (doResponsiveCollapse(triggerEl)) {\n        //closes dropdown when clicked outside\n        if (evt.target !== triggerEl) {\n          //clicked outside trigger, force close\n          triggerEl.setAttribute('aria-expanded', 'false');\n          targetEl.classList.add('collapsed');\n          targetEl.setAttribute('aria-hidden', 'true');\n          var eventClose = document.createEvent('Event');\n          eventClose.initEvent(eventCloseName, true, true);\n          triggerEl.dispatchEvent(eventClose);\n        }\n      }\n    }\n  }\n};\n\nvar doResponsiveCollapse = function doResponsiveCollapse(triggerEl) {\n  if (!triggerEl.classList.contains(jsDropdownCollapseModifier)) {\n    // not nav overflow menu\n    if (triggerEl.parentNode.classList.contains('overflow-menu--md-no-responsive') || triggerEl.parentNode.classList.contains('overflow-menu--lg-no-responsive')) {\n      // trinindikator overflow menu\n      if (window.innerWidth <= getTringuideBreakpoint(triggerEl)) {\n        // overflow menu på responsiv tringuide aktiveret\n        return true;\n      }\n    } else {\n      // normal overflow menu\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar getTringuideBreakpoint = function getTringuideBreakpoint(button) {\n  if (button.parentNode.classList.contains('overflow-menu--md-no-responsive')) {\n    return breakpoints.md;\n  }\n\n  if (button.parentNode.classList.contains('overflow-menu--lg-no-responsive')) {\n    return breakpoints.lg;\n  }\n};\n\nmodule.exports = Dropdown;\n\n//# sourceURL=webpack:///../dkfds-components/src/js/components/dropdown.js?");

/***/ }),

/***/ "../dkfds-components/src/js/utils/breakpoints.js":
/*!*******************************************************!*\
  !*** ../dkfds-components/src/js/utils/breakpoints.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar breakpoints = {\n  'xs': 0,\n  'sm': 576,\n  'md': 768,\n  'lg': 992,\n  'xl': 1200\n};\nmodule.exports = breakpoints;\n\n//# sourceURL=webpack:///../dkfds-components/src/js/utils/breakpoints.js?");

/***/ }),

/***/ "../dkfds-components/src/js/utils/closest.js":
/*!***************************************************!*\
  !*** ../dkfds-components/src/js/utils/closest.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\r\n * @name closest\r\n * @desc get nearest parent element matching selector.\r\n * @param {HTMLElement} el - The HTML element where the search starts.\r\n * @param {string} selector - Selector to be found.\r\n * @return {HTMLElement} - Nearest parent element matching selector.\r\n */\n\nmodule.exports = function closest(el, selector) {\n  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;\n\n  while (el) {\n    if (matchesSelector.call(el, selector)) {\n      break;\n    }\n\n    el = el.parentElement;\n  }\n\n  return el;\n};\n\n//# sourceURL=webpack:///../dkfds-components/src/js/utils/closest.js?");

/***/ }),

/***/ "../dkfds-components/src/js/utils/toggle.js":
/*!**************************************************!*\
  !*** ../dkfds-components/src/js/utils/toggle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar EXPANDED = 'aria-expanded';\nvar CONTROLS = 'aria-controls';\nvar HIDDEN = 'aria-hidden';\n\nmodule.exports = function (button, expanded) {\n  if (typeof expanded !== 'boolean') {\n    expanded = button.getAttribute(EXPANDED) === 'false';\n  }\n\n  button.setAttribute(EXPANDED, expanded);\n  var id = button.getAttribute(CONTROLS);\n  var controls = document.getElementById(id);\n\n  if (!controls) {\n    throw new Error('No toggle target found with id: \"' + id + '\"');\n  }\n\n  controls.setAttribute(HIDDEN, !expanded);\n  return expanded;\n};\n\n//# sourceURL=webpack:///../dkfds-components/src/js/utils/toggle.js?");

/***/ }),

/***/ "./examples/plugins/datatables/js/dkfds-datatables-example.js":
/*!********************************************************************!*\
  !*** ./examples/plugins/datatables/js/dkfds-datatables-example.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_polyfill_noConflict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill/noConflict */ \"./node_modules/@babel/polyfill/noConflict.js\");\n/* harmony import */ var _babel_polyfill_noConflict__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill_noConflict__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nwindow.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\nvar dropdown = __webpack_require__(/*! dkfds/src/js/components/dropdown.js */ \"../dkfds-components/src/js/components/dropdown.js\");\n\nvar dt = __webpack_require__(/*! datatables.net */ \"./node_modules/datatables.net/js/jquery.dataTables.js\"); //Core datatables\n\n\nvar dt_select = __webpack_require__(/*! datatables.net-select */ \"./node_modules/datatables.net-select/js/dataTables.select.js\"); //Makes datatable rows selectable\n\n\nvar dt_responsive = __webpack_require__(/*! datatables.net-responsive */ \"./node_modules/datatables.net-responsive/js/dataTables.responsive.js\"); //Makes datatables responsive\n\n\nvar jsSelectorDatatable_Example_basic = \"#js-datatable-example-basic\";\nvar jsSelectorDatatable_Example_extra_pagination = \"#js-datatable-example-extra_pagination\";\nvar jsSelectorDatatable_Example_ajax = \"#js-datatable-example-ajax\";\nvar jsSelectorDatatable_Example_detailsrow = \"#js-datatable-example-detailsrow\";\nvar jsSelectorDatatable_Example_selectable = \"#js-datatable-example-selectable\";\nvar jsSelectorDatatable_Example_edit = \"#js-datatable-example-edit\";\nvar jsSelectorDatatable_Example_edit2 = \"#js-datatable-example-edit2\";\nvar jsSelectorDatatable_Example_praktikplads = \"#js-datatable-example-praktikplads\";\n\nvar datatablesExamples = function datatablesExamples(el) {\n  _classCallCheck(this, datatablesExamples);\n\n  var languageConfig = {\n    \"lengthMenu\": \"Viser _MENU_ elementer pr side\",\n    \"zeroRecords\": \"Der blev fundet intet resultat\",\n    \"info\": \"Viser sider _PAGE_ af _PAGES_\",\n    \"infoEmpty\": \"Intet resultat\",\n    \"infoFiltered\": \"(filtreret fra _MAX_ elementer)\",\n    \"emptyTable\": \"Ingen data\",\n    \"search\": \"Filtrer:\",\n    \"Sort\": true,\n    \"paginate\": {\n      \"first\": \"Første\",\n      \"last\": \"Sidste\",\n      \"next\": \"Næste\",\n      \"previous\": \"Forrige\"\n    }\n  };\n  micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init({\n    onShow: function onShow() {\n      document.getElementsByTagName('body')[0].classList.add('modal-active');\n    },\n    onClose: function onClose() {\n      document.getElementsByTagName('body')[0].classList.remove('modal-active');\n    }\n  }); //////////////////////////////////////\n  //Init a datatable with no configuration\n  //////////////////////////////////////\n\n  var table_basic = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_basic).DataTable({\n    'language': languageConfig,\n    'responsive': true,\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  }); //////////////////////////////////////\n  //Init a datatable with ajax data\n  //////////////////////////////////////\n\n  var table_ajax = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_ajax).DataTable({\n    'language': languageConfig,\n    'responsive': true,\n    'processing': true,\n    'ajax': {\n      \"url\": \"https://jsonplaceholder.typicode.com/users\",\n      \"dataSrc\": \"\",\n      \"crossDomain\": true\n    },\n    'columns': [{\n      \"data\": \"name\"\n    }, {\n      \"data\": \"email\"\n    }, {\n      \"data\": \"address.street\"\n    }, {\n      \"data\": \"address.city\"\n    }, {\n      \"data\": \"phone\"\n    }],\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  }); //////////////////////////////////////\n  //Init a datatable with selectable rows\n  //////////////////////////////////////\n\n  var table_selectable = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_selectable).DataTable({\n    'language': languageConfig,\n    'responsive': true,\n    'columnDefs': [{\n      orderable: false,\n      targets: 0,\n      render: function render(data, type, full, meta) {\n        var checkboxid = \"checkbox-\" + Math.random().toString(36).substring(7);\n        return \"<div class='form-group'>\" + \"<input id='\" + checkboxid + \"' type='checkbox' name='checked' class='form-checkbox'>\" + \"<label for='\" + checkboxid + \"' ></label>\" + \"</div>\";\n      }\n    }],\n\n    /*select: {\r\n        style:    'single',\r\n        selector: 'td:first-child'\r\n    },*/\n    'order': [[1, 'asc']],\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_selectable).on(\"click\", \"input[type='checkbox']\", function (event) {\n    if (event.target.checked) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(\"tr\").addClass(\"selected-row\");\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(\"tr\").removeClass(\"selected-row\");\n    }\n  }); //////////////////////////////////////\n  //Init a datatable with expand row\n  //////////////////////////////////////\n  // Formatting function for row details - modify as you need\n\n  function format(d) {\n    // `d` is the original data object for the row\n    return '<div class=\"details-row-content\">' + '<h3 class=\"mt-0\">Overskrift</h3>' + ' <div class=\"table--responsive-scroll\">\\n' + '        <table class=\"table table--zebra\">\\n' + '            <thead>\\n' + '                <tr>\\n' + '                    <th>Affaldstype</th>\\n' + '                    <th>Farvekode</th>\\n' + '                    <th>Beskrivelse</th>\\n' + '                    <th>Hvor ender det?</th>\\n' + '                </tr>\\n' + '            </thead>\\n' + '            <tbody>\\n' + '                <tr>\\n' + '                    <td>Dagrenovation</td>\\n' + '                    <td>Grøn</td>\\n' + '                    <td>Madaffald, samt papir, pap eller plastik der ikke\\n' + '                        kan genanvendes, fordi der er madrester eller andet\\n' + '                        snask på.</td>\\n' + '                    <td>Alt det affald, du smider ud i din primære\\n' + '                        skraldespand, som er dagrenovationen, bliver hentet\\n' + '                        og kørt på forbrændingen. </td>\\n' + '                </tr>\\n' + '                <tr>\\n' + '                    <td>Bioaffald og kompost</td>\\n' + '                    <td>Beige</td>\\n' + '                    <td>Alt madaffald uden fødevareemballage.</td>\\n' + '                    <td>Bioaffaldet kommes i bionedbrydelige poser, som\\n' + '                        bliver komposteret til muld.</td>\\n' + '                </tr>\\n' + '                <tr>\\n' + '                    <td>Glas</td>\\n' + '                    <td>Hvid</td>\\n' + '                    <td>Alle typer glas og flasker.</td>\\n' + '                    <td>De hele vinflasker rengøres og genbruges af\\n' + '                        vinhuse, mens glasskårene bliver smeltet om til nyt\\n' + '                        glas.</td>\\n' + '                </tr>\\n' + '                <tr>\\n' + '                    <td>Elektronik</td>\\n' + '                    <td>Orange</td>\\n' + '                    <td>Genstande der har brugt strøm.</td>\\n' + '                    <td>Det elektroniske affald bliver typisk kørt til et\\n' + '                        demonteringsanlæg, hvor det bliver skilt ad, så de\\n' + '                        forskellige dele kan genanvendes separat.</td>\\n' + '                </tr>\\n' + '            </tbody>\\n' + '        </table>\\n' + '    </div>';\n    '</div>';\n  }\n\n  var table_detailsrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_detailsrow).DataTable({\n    'language': languageConfig,\n    'ajax': {\n      \"url\": \"https://jsonplaceholder.typicode.com/users\",\n      \"dataSrc\": \"\",\n      \"crossDomain\": true\n    },\n    'rowId': \"id\",\n    'columns': [{\n      \"className\": 'details-control',\n      \"orderable\": false,\n      \"data\": null,\n      \"defaultContent\": '',\n      \"width\": \"24px\"\n    }, {\n      \"data\": \"name\"\n    }, {\n      \"data\": \"address.street\"\n    }, {\n      \"data\": \"address.city\"\n    }, {\n      \"data\": \"phone\"\n    }],\n    'order': [[1, 'asc']],\n    'responsive': {\n      details: false\n    },\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('details-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('aria-label', 'Klik her for at udfolde en række nedenfor med detaljer.');\n        }\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  });\n\n  var toggleDetails = function toggleDetails(element) {\n    var tr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).closest('tr');\n    var row = table_detailsrow.row(tr);\n\n    if (row.child.isShown()) {\n      // This row is already open - close it\n      row.child.hide();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(tr).find('.details-control')[0]).attr('aria-expanded', false);\n      tr.removeClass('shown');\n    } else {\n      // Open this row\n      row.child(format(row.data()), 'child').show();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row.child()[0]).attr('aria-label', 'Række med detaljer');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(tr).find('.details-control')[0]).attr('aria-expanded', true);\n      tr.addClass('shown');\n    }\n  }; // Add event listener for opening and closing details\n\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_detailsrow).on('click', 'td.details-control', function () {\n    toggleDetails(this);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_detailsrow).keypress(function (event) {\n    if (event.which == 13 || event.which == 32) {\n      //enter and space\n      toggleDetails(event.target);\n    }\n  }); //////////////////////////////////////\n  //Init a datatable with edit and delete\n  //////////////////////////////////////\n\n  var table_edit = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit).DataTable({\n    language: languageConfig,\n    ajax: {\n      \"url\": \"https://jsonplaceholder.typicode.com/users\",\n      \"dataSrc\": \"\",\n      \"crossDomain\": true\n    },\n    rowId: \"id\",\n    columns: [{\n      \"data\": \"name\"\n    }, {\n      \"data\": \"address.street\"\n    }, {\n      \"data\": \"address.city\"\n    }, {\n      \"data\": \"company.name\"\n    }, {\n      \"targets\": -1,\n      \"className\": 'row-control',\n      \"data\": null,\n      \"orderable\": false,\n      \"responsivePriority\": 1,\n      //do not responsive hide last\n      \"render\": function render(data, type, full, meta) {\n        var overflowID = \"overflow-table-\" + full.id;\n        return \"<div class=\\\"overflow-menu overflow-menu--open-left overflow-menu--hover-bg\\\">\\n                                <button class=\\\"button-overflow-menu js-dropdown\\\" data-js-target=\\\"#\" + overflowID + \"\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">\\n                                    <svg class=\\\"icon-svg\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\" tabindex=\\\"-1\\\"><use xlink:href=\\\"#dots-vertical\\\"></use></svg>\\n                                </button>\\n                                <div class=\\\"overflow-menu-inner\\\" id=\\\"\" + overflowID + \"\\\" aria-hidden=\\\"true\\\">\\n                                    <ul class=\\\"overflow-list\\\">\\n                                        <li><button class=\\\"js-edit-modal-trigger\\\">Rediger <svg class=\\\"icon-svg\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\" tabindex=\\\"-1\\\"><use xlink:href=\\\"#pencil\\\"></use></svg></button></li>\\n                                        <li><button class=\\\"js-delete-modal-trigger danger-delete\\\">Slet <svg class=\\\"icon-svg\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\" tabindex=\\\"-1\\\"><use xlink:href=\\\"#delete\\\"></use></svg></button></li>\\n                                    </ul>\\n                                </div>\\n                            </div>\";\n      }\n    }],\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n      });\n    },\n    order: [[1, 'asc']],\n    'responsive': true,\n    'initComplete': function initComplete(settings, json) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit).find('.js-dropdown').each(function (index) {\n        new dropdown(this);\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  });\n  var currentEditTr = null; //Open edit modal\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit).on('click', '.js-edit-modal-trigger', function () {\n    //get data from row\n    currentEditTr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('tr');\n    var data = table_edit.row(currentEditTr).data();\n    var id = table_edit.row(currentEditTr).id(); //insert data in modal\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-row-id').val(id);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-navn').val(data.name);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-vejnavn').val(data.address.street);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-by').val(data.address.city);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-firmanavn').val(data.company.name); //open modal\n\n    micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show('modal-edit');\n  }); //Update edit row\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-edit-save-trigger', function () {\n    //get row data\n    var data = table_edit.row(currentEditTr).data(); //update  data\n\n    data.name = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-navn').val();\n    data.address.street = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-vejnavn').val();\n    data.address.city = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-by').val();\n    data.company.name = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-firmanavn').val(); //Update row and redraw\n\n    table_edit.row(currentEditTr).data(data).draw(); //close modal\n\n    micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close('modal-edit');\n  });\n  var currentDeleteTr = null; //Open delete modal\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit).on('click', '.js-delete-modal-trigger', function () {\n    currentDeleteTr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('tr'); //open modal\n\n    micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show('modal-delete');\n  }); //do delete\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-delete-trigger', function () {\n    //delete row\n    table_edit.row(currentDeleteTr).remove().draw(); //close modal\n\n    micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close('modal-delete');\n  }); //////////////////////////////////\n  //Edit tabel uden overflow-menu.\n  //////////////////////////////////\n\n  var table_edit2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit2).DataTable({\n    language: languageConfig,\n    ajax: {\n      \"url\": \"https://jsonplaceholder.typicode.com/users\",\n      \"dataSrc\": \"\",\n      \"crossDomain\": true\n    },\n    rowId: \"id\",\n    columns: [{\n      \"data\": \"name\"\n    }, {\n      \"data\": \"address.street\"\n    }, {\n      \"data\": \"address.city\"\n    }, {\n      \"data\": \"company.name\"\n    }, {\n      \"targets\": -1,\n      \"className\": 'row-control',\n      \"data\": null,\n      \"orderable\": false,\n      \"responsivePriority\": 1,\n      //do not responsive hide last\n      \"render\": function render(data, type, full, meta) {\n        return \"<button class=\\\"button button-unstyled px-3 js-delete-modal-trigger\\\"><svg class=\\\"icon-svg\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\" tabindex=\\\"-1\\\"><use xlink:href=\\\"#delete-outline\\\"></use></svg><span class=\\\"sr-only\\\">Slet</span></button>\";\n      }\n    }],\n    order: [[1, 'asc']],\n    'responsive': true,\n    'createdRow': function createdRow(row, data, dataIndex) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).find('td').each(function (index, elm) {\n        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).hasClass('row-control')) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elm).attr('tabindex', 0); //Accessibility fix: make td's focusable by tab\n        }\n      });\n    },\n    \"fnDrawCallback\": function fnDrawCallback(oSettings) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate a[aria-disabled=true]').removeAttr(\"aria-disabled\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dataTables_paginate .disabled').attr(\"aria-disabled\", \"true\");\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(jsSelectorDatatable_Example_edit2).on('click', '.js-delete-modal-trigger', function () {\n    currentDeleteTr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('tr'); //open modal\n\n    micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show('modal-delete');\n  });\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  new datatablesExamples();\n});\n\n//# sourceURL=webpack:///./examples/plugins/datatables/js/dkfds-datatables-example.js?");

/***/ }),

/***/ 4:
/*!**************************************************************************!*\
  !*** multi ./examples/plugins/datatables/js/dkfds-datatables-example.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./examples/plugins/datatables/js/dkfds-datatables-example.js */\"./examples/plugins/datatables/js/dkfds-datatables-example.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/plugins/datatables/js/dkfds-datatables-example.js?");

/***/ })

/******/ });