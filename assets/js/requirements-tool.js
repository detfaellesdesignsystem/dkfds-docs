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
/******/ 		"requirements-tool": 0
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
/******/ 	deferredModules.push([8,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/requirements-tool.js":
/*!*****************************************!*\
  !*** ./javascript/requirements-tool.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ \"./node_modules/tippy.js/esm/index.all.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n\n\n\n\n\nvar toolIsProcessing = false;\n\n__webpack_require__(/*! ./theme */ \"./javascript/theme.js\");\n\nvar questionnaire = {};\nvar storageKey = \"reqTool\";\nvar root = window.location.origin + \"/krav-vaerktoej\";\nvar questions = [{\n  'id': \"Q100\",\n  \"path\": \"/anvendes-af-virksomheder/\",\n  \"status\": true\n}, {\n  'id': \"Q200\",\n  \"path\": \"/anvendes-af-borgere/\",\n  \"status\": true\n}, {\n  'id': \"Q300\",\n  \"path\": \"/obligatorisk-for-borgere/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q200\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q400\",\n  \"path\": \"/besoegende-om-aaret/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q500\",\n  \"path\": \"/en-eller-flere-loesninger-brugertest/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q400\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q600\",\n  \"path\": \"/bestaaet-faellesoffentlige-brugertest/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q500\",\n    \"value\": false\n  }]\n}, {\n  'id': \"Q700\",\n  \"path\": \"/transaktioner-per-aar/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q000\",\n  \"path\": \"/resultat/\",\n  \"status\": true\n}]; // define krav og anbefalinger - hvornår er det krav, og hvornår er det anbefaling?\n\nvar krav = [\"\"];\nkrav[1] = {\n  \"title\": \"Tidlig brugerinddragelse\",\n  \"krav\": false\n};\nkrav[2] = {\n  \"title\": \"Sprog\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[3] = {\n  \"title\": \"Konventioner for flow og funktionalitet\",\n  \"krav\": false\n};\nkrav[4] = {\n  \"title\": \"Feltvalidering\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[5] = {\n  \"title\": \"Personalisering\",\n  \"krav\": false\n};\nkrav[6] = {\n  \"title\": \"Understøttelse af styresystemer og browsere\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[7] = {\n  \"title\": \"Understøttelse af skærmstørrelser\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[8] = {\n  \"title\": \"Bestå den fællesoffentlige brugertest\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q600\",\n    \"value\": false\n  }]\n};\nkrav[9] = {\n  \"title\": \"Indsamling af viden om brugernes anvendelse af digitale løsninger\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q700\",\n    \"value\": true\n  }]\n};\nkrav[10] = {\n  \"title\": \"Anvendelse af infrastrukturkomponenter og andre komponenter\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[11] = {\n  \"title\": \"Genbrug af datakilder\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[12] = {\n  \"title\": \"Efterlevelse af aftalte arkitekturstandarder\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[13] = {\n  \"title\": \"Krav til løsninger, der skal på borger.dk og Virk\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.js-tippy', {\n    duration: 0,\n    arrow: true\n  });\n  micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init({\n    onShow: function onShow() {\n      document.getElementsByTagName('body')[0].classList.add('modal-active');\n    },\n    onClose: function onClose() {\n      document.getElementsByTagName('body')[0].classList.remove('modal-active');\n    }\n  });\n  var backlink = document.getElementById('back-link');\n\n  if (backlink !== null) {\n    backlink.addEventListener('click', goBack);\n  }\n\n  questionnaire = getQuestionnaire();\n  manageFlow();\n  setAnswerOnLoad();\n  formSubmitHandler();\n  checkTotalMeltdown(); // result page\n\n  generateResult();\n  printResultHandler();\n  startOverButtonHandler();\n  var close = document.getElementById('close-tool');\n\n  if (close !== null) {\n    close.addEventListener('click', closeTool);\n  }\n\n  var closeClass = document.getElementsByClassName('close-tool');\n\n  if (closeClass.length !== 0) {\n    closeClass[0].addEventListener('click', closeTool);\n  }\n\n  var printBtn = document.getElementsByClassName('print-btn');\n\n  if (printBtn.length !== 0) {\n    printBtn[0].addEventListener('click', function () {\n      window.print();\n    });\n  } // alert upon closing page\n\n\n  window.onbeforeunload = function (e) {\n    var showPopup = true;\n\n    if (toolIsProcessing) {\n      showPopup = false;\n    } else {\n      var activeElement = document.activeElement;\n\n      if (activeElement.href !== undefined && (activeElement.innerText === \"Redigér\" || activeElement.innerText === \"Tilbage\")) {\n        showPopup = false;\n      }\n    }\n\n    if (showPopup) {\n      e = e || window.event; // For IE and Firefox prior to version 4\n\n      if (e) {\n        e.returnValue = 'Sure?';\n      }\n\n      showPopup = true; // For Safari\n\n      return 'Sure?';\n    }\n  };\n});\n\nvar printResultHandler = function printResultHandler() {\n  var printButton = document.getElementById('print-btn');\n\n  if (printButton !== null) {\n    printButton.addEventListener('click', function () {\n      window.print();\n    });\n  }\n};\n\nvar startOverButtonHandler = function startOverButtonHandler() {\n  var button = document.getElementById('start-over');\n\n  if (button !== null) {\n    button.addEventListener('click', startOver);\n  }\n};\n/**\r\n * Get the index of a certain question in the questions array\r\n * @param id ID of question\r\n * @returns {number} Returns the index of the question in the questions array\r\n */\n\n\nvar getIndexOfQuestion = function getIndexOfQuestion(id) {\n  return questions.findIndex(function (obj) {\n    return obj.id === id;\n  });\n};\n/***\r\n * Define which questions are relevant at this stage\r\n */\n\n\nvar manageFlow = function manageFlow() {\n  for (var i = 0; i < questions.length; i++) {\n    if (questions[i].trueIf !== undefined) {\n      var status = false;\n\n      for (var b = 0; b < questions[i].trueIf.length; b++) {\n        var trueIf = questions[i].trueIf[b]; // if chosen value matches condition, then show question\n\n        if (questions[getIndexOfQuestion(trueIf.question)].status === true && questionnaire[trueIf.question] !== undefined && questionnaire[trueIf.question] === trueIf.value) {\n          status = true;\n        }\n      }\n\n      questions[i].status = status;\n    }\n  }\n};\n/**\r\n * Update localStorage, so only answers to enabled questions remain\r\n */\n\n\nvar verifyAnswersToQuestions = function verifyAnswersToQuestions() {\n  var updateQuestionnaire = {};\n\n  for (var key in questionnaire) {\n    if (questions[getIndexOfQuestion(key)].status === true) {\n      updateQuestionnaire[key] = questionnaire[key];\n    }\n  }\n\n  questionnaire = updateQuestionnaire;\n};\n/**\r\n * Set form eventlistener on submit\r\n */\n\n\nvar formSubmitHandler = function formSubmitHandler() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    var id = form[0].id.split('-')[1];\n    form[0].addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      formSubmit(id);\n    }, false);\n  }\n};\n/**\r\n * validate and save value from form + navigate to next question\r\n * @param id ID of question\r\n */\n\n\nvar formSubmit = function formSubmit(id) {\n  if (validate()) {\n    questionnaire[id] = document.querySelector('input[name=\"radio\"]:checked').value === '1';\n    manageFlow();\n    saveQuestionnaire();\n    goTo(getNextEnabledQuestion(id).path);\n  }\n};\n/**\r\n * Get next question where status is true\r\n * @param currentQuestionID the id of the current question\r\n * @returns returns the next question in the array\r\n */\n\n\nvar getNextEnabledQuestion = function getNextEnabledQuestion(currentQuestionID) {\n  var currentIndex = getIndexOfQuestion(currentQuestionID);\n  var nextQuestion = null;\n\n  for (var i = currentIndex + 1; i < questions.length; i++) {\n    if (questions[i].status === true) {\n      nextQuestion = questions[i];\n      break;\n    }\n  }\n\n  return nextQuestion;\n};\n/**\r\n * Get questionnaire from localstorage\r\n * @returns JSON\r\n */\n\n\nvar getQuestionnaire = function getQuestionnaire() {\n  var reqTool = localStorage.getItem(storageKey);\n\n  if (reqTool === null) {\n    return {};\n  }\n\n  return JSON.parse(reqTool);\n};\n/**\r\n * Save questionnaire to localstorage\r\n */\n\n\nvar saveQuestionnaire = function saveQuestionnaire() {\n  verifyAnswersToQuestions();\n  localStorage.setItem(storageKey, JSON.stringify(questionnaire));\n};\n/**\r\n * Validate form\r\n * @returns {boolean}\r\n */\n\n\nvar validate = function validate() {\n  var radio = document.querySelector('input[name=\"radio\"]:checked');\n\n  if (radio === null) {\n    document.getElementsByClassName('form-group')[0].classList.add('form-error');\n    document.getElementById('error-message').innerText = \"Vælg venligst Ja eller Nej\";\n    document.getElementById('error-message').classList.remove('d-none');\n    return false;\n  }\n\n  document.getElementsByClassName('form-group')[0].classList.remove('form-error');\n  document.getElementById('error-message').classList.add('d-none');\n  document.getElementById('error-message').innerText = \"\";\n  return true;\n};\n/**\r\n * Go to new page\r\n * @param url\r\n */\n\n\nvar goTo = function goTo(url) {\n  toolIsProcessing = true;\n  window.location.href = root + url;\n};\n/**\r\n * Go back to previous page\r\n */\n\n\nvar goBack = function goBack() {\n  window.history.back();\n};\n/**\r\n * Set correct chosen values on results page. Hide Questions not answered.\r\n */\n\n\nvar generateResult = function generateResult() {\n  if (document.querySelector('body.page-resultat') !== null) {\n    if (Object.getOwnPropertyNames(getQuestionnaire()).length === 0) {\n      goTo('');\n      return;\n    }\n\n    var summaryTable = document.getElementById('summary');\n    var rows = summaryTable.getElementsByTagName('tr');\n\n    for (var i = 0; i < rows.length; i++) {\n      var id = rows[i].id;\n      var value = questionnaire[id];\n\n      if (value === undefined) {\n        rows[i].classList.add('d-none');\n        continue;\n      }\n\n      if (value === true) {\n        rows[i].querySelector('.value').innerText = \"Ja\";\n      } else {\n        rows[i].querySelector('.value').innerText = \"Nej\";\n      }\n\n      rows[i].classList.remove('d-none');\n    }\n\n    var resultTable = document.getElementById('resultat');\n    var resultRows = resultTable.getElementsByTagName('tr');\n\n    for (var v = 0; v < resultRows.length; v++) {\n      var kravNo = v + 1;\n      var badge = resultRows[v].getElementsByTagName('label')[0];\n\n      if (isThisAKrav(kravNo)) {\n        badge.innerText = \"Krav\";\n        badge.classList.add('badge-warning');\n      } else {\n        badge.innerText = \"Anbefaling\";\n        badge.classList.add('badge-info');\n      }\n    }\n  }\n};\n/**\r\n * Check if the krav is a requirement or recommendation dependent on the answers provided\r\n * @param kravNo number of the requirement/recommendation\r\n * @returns {boolean} return true if it's a requirement, false if recommendation\r\n */\n\n\nvar isThisAKrav = function isThisAKrav(kravNo) {\n  if (krav[kravNo].trueIf !== undefined) {\n    for (var i = 0; i < krav[kravNo].trueIf.length; i++) {\n      var answer = questionnaire[krav[kravNo].trueIf[i].question];\n\n      if (answer === krav[kravNo].trueIf[i].value) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n/**\r\n * If going back in the flow to a previous step\r\n */\n\n\nvar setAnswerOnLoad = function setAnswerOnLoad() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    var id = form[0].id.split('-')[1];\n    var questionnaireValue = questionnaire[id];\n\n    if (questionnaireValue !== undefined) {\n      if (questionnaireValue === true) {\n        document.getElementById('radio-yes').checked = true;\n        document.getElementById('radio-no').checked = false;\n      } else {\n        document.getElementById('radio-yes').checked = false;\n        document.getElementById('radio-no').checked = true;\n      }\n    }\n  }\n};\n/**\r\n * Get the ID of the current form\r\n * @returns Returns string containing ID of the current question from the array - returns false, if no form was found\r\n */\n\n\nvar getCurrentFormId = function getCurrentFormId() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    return form[0].id.split('-')[1];\n  }\n\n  return false;\n};\n/**\r\n * There was an error - delete all and be gone from this place!\r\n */\n\n\nvar checkTotalMeltdown = function checkTotalMeltdown() {\n  if (getCurrentFormId() !== false && questions[getIndexOfQuestion(getCurrentFormId())].status === false) {\n    localStorage.removeItem(storageKey);\n    goTo('');\n  }\n};\n\nvar startOver = function startOver() {\n  localStorage.removeItem(storageKey);\n  goTo(questions[0].path);\n};\n\nvar closeTool = function closeTool() {\n  localStorage.removeItem(storageKey);\n  goTo('');\n};\n\n//# sourceURL=webpack:///./javascript/requirements-tool.js?");

/***/ }),

/***/ "./javascript/theme.js":
/*!*****************************!*\
  !*** ./javascript/theme.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar themeAlertId = 'themeAlert';\nvar cookieName = 'theme';\nvar themes = ['virk', 'borgerdk'];\nvar themeStylesheets = ['styleguide_virkdk', 'styleguide_borgerdk'];\nvar isDebugging = false;\nvar demoSelectorId = 'themeSelector';\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  debug('cookie', getThemeCookie()); // verify cookie contains correct value\n\n  verifyCookieOrDelete(); // show theme alert on pages\n\n  themeAlertMessage(); // set theme if ?theme=virk|borgerdk\n\n  isThemeSetInUrl(); // set cookie if missing\n\n  setCookieIfMissing(); // load stylesheet\n\n  setStylesheet();\n  setFooterSwitcher(); // handle theme selector on demo pages\n\n  initDemoThemeSelector();\n  setScreenshots();\n  setHomepageIllustration();\n});\n\nvar setHomepageIllustration = function setHomepageIllustration() {\n  var illustration = document.getElementById('designsystem-illustration');\n\n  if (illustration !== null) {\n    if (getThemeCookie() === \"virk\") {\n      illustration.setAttribute('src', \"/assets/img/descriptionimages/Forside_illu_virk.svg\");\n    } else if (getThemeCookie() === \"borgerdk\") {\n      illustration.setAttribute('src', \"/assets/img/descriptionimages/Forside_illu_borger.svg\");\n    } else {\n      illustration.parentNode.removeChild(illustration);\n    }\n  }\n};\n\nvar isThemeSetInUrl = function isThemeSetInUrl() {\n  var parameters = window.location.search.substr(1);\n\n  if (parameters === \"\") {\n    return;\n  }\n\n  parameters = parameters.split('&');\n\n  for (var i = 0; i < parameters.length; i++) {\n    var split = parameters[i].split('=');\n    var key = split[0];\n    var value = split[1];\n\n    if (key === \"theme\" && themes.indexOf(value) >= 0) {\n      setThemeCookie(value);\n      return;\n    }\n  }\n};\n\nvar setCookieIfMissing = function setCookieIfMissing() {\n  if (!isCookieSet()) {\n    debug('Cookie was not set', getThemeCookie());\n    setRandomThemeCookie();\n  }\n};\n\nvar verifyCookieOrDelete = function verifyCookieOrDelete() {\n  if (isCookieSet()) {\n    var themeChosen = getThemeCookie();\n\n    if (themes.indexOf(themeChosen) < 0) {\n      deleteCookie(cookieName);\n      debug('cookie was deleted:', themeChosen);\n    }\n  }\n};\n\nvar themeAlertMessage = function themeAlertMessage() {\n  var alert = document.getElementById(themeAlertId);\n\n  if (!isCookieSet() && alert !== null) {\n    showThemeAlert();\n    var closeButtons = alert.getElementsByClassName('alert-close');\n\n    for (var b = 0; b < closeButtons.length; b++) {\n      closeButtons[b].addEventListener('click', function () {\n        hideThemeAlert();\n      });\n    }\n\n    document.getElementById('borgerdkThemeBtn').addEventListener('click', onBorgerdkThemeSelected);\n    document.getElementById('virkThemeBtn').addEventListener('click', onVirkThemeSelected);\n  }\n};\n\nvar onVirkThemeSelected = function onVirkThemeSelected() {\n  setThemeCookie(themes[0]);\n  hideThemeAlert();\n  location.reload();\n};\n\nvar onBorgerdkThemeSelected = function onBorgerdkThemeSelected() {\n  setThemeCookie(themes[1]);\n  hideThemeAlert();\n  location.reload();\n};\n\nvar setStylesheet = function setStylesheet() {\n  var themeChosen = getThemeCookie();\n  debug('stylesheet:', themeChosen);\n  var indexOfTheme = themes.indexOf(themeChosen);\n  var lnk = document.createElement('link');\n  lnk.type = 'text/css';\n  lnk.rel = 'stylesheet';\n  lnk.href = '/assets/style/' + themeStylesheets[indexOfTheme] + '.css';\n  document.getElementsByTagName('head')[0].appendChild(lnk);\n};\n\nvar hideThemeAlert = function hideThemeAlert() {\n  if (document.getElementById(themeAlertId) !== null) {\n    document.getElementById(themeAlertId).classList.add('d-none');\n  }\n};\n\nvar showThemeAlert = function showThemeAlert() {\n  if (document.getElementById(themeAlertId) !== null) {\n    document.getElementById(themeAlertId).classList.remove('d-none');\n  }\n};\n\nvar setRandomThemeCookie = function setRandomThemeCookie() {\n  var randomTheme = themes[Math.floor(Math.random() * themes.length)];\n  setThemeCookie(randomTheme);\n};\n\nvar setThemeCookie = function setThemeCookie(theme) {\n  if (themes.indexOf(theme) >= 0) {\n    debug('setting cookie', theme);\n    setCookie(cookieName, theme, 365);\n    return true;\n  }\n\n  return false;\n};\n\nvar isCookieSet = function isCookieSet() {\n  var cookie = getCookie(cookieName);\n\n  if (cookie === null) {\n    return false;\n  }\n\n  return true;\n};\n\nvar getThemeCookie = function getThemeCookie() {\n  return getCookie(cookieName);\n};\n\nvar setCookie = function setCookie(name, value, daysToLive) {\n  // Encode value in order to escape semicolons, commas, and whitespace\n  var cookie = name + \"=\" + encodeURIComponent(value);\n\n  if (typeof daysToLive === \"number\") {\n    var d = new Date();\n    d.setTime(d.getTime() + daysToLive * 24 * 60 * 60 * 1000);\n    cookie += \";expires=\" + d.toUTCString();\n    cookie += ';path=/';\n    debug('Setting cookie', cookie);\n    document.cookie = cookie;\n  }\n};\n\nvar deleteCookie = function deleteCookie(name) {\n  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';\n};\n\nvar getCookie = function getCookie(name) {\n  // Split cookie string and get all individual name=value pairs in an array\n  var cookieArr = document.cookie.split(\";\"); // Loop through the array elements\n\n  for (var i = 0; i < cookieArr.length; i++) {\n    var cookiePair = cookieArr[i].split(\"=\");\n    /* Removing whitespace at the beginning of the cookie name\r\n    and compare it with the given string */\n\n    if (name === cookiePair[0].trim()) {\n      // Decode the cookie value and return\n      return decodeURIComponent(cookiePair[1]);\n    }\n  } // Return null if not found\n\n\n  return null;\n};\n\nvar initDemoThemeSelector = function initDemoThemeSelector() {\n  var demoSelector = document.getElementById(demoSelectorId);\n\n  if (demoSelector !== null && demoSelector !== undefined) {\n    setCorrectSelectedtheme();\n    demoSelector.addEventListener('change', function (event) {\n      var value = document.getElementById(demoSelectorId).value;\n\n      if (themes.indexOf(value) >= 0) {\n        setThemeCookie(value);\n        window.themeChangeProcess = true;\n        location.reload();\n      } else {\n        alert('The selected theme does not exist');\n      }\n    });\n  }\n};\n\nvar setCorrectSelectedtheme = function setCorrectSelectedtheme() {\n  var demoSelector = document.getElementById(demoSelectorId);\n  var options = demoSelector.getElementsByTagName('option');\n  var cookie = getThemeCookie();\n\n  for (var i = 0; i < options.length; i++) {\n    if (cookie === options[i].value) {\n      demoSelector.selectedIndex = i;\n    }\n  }\n};\n\nvar setFooterSwitcher = function setFooterSwitcher() {\n  if (document.getElementById('changeTheme') !== null) {\n    var cookie = getThemeCookie();\n    var theme = \"\";\n\n    switch (cookie) {\n      case 'virk':\n        theme = \"Borger.dk\";\n        break;\n\n      case 'borgerdk':\n        theme = \"Virk\";\n        break;\n    }\n\n    var text = \"Skift til \" + theme + \" tema\";\n    document.getElementById('changeThemeText').innerText = text;\n    document.getElementById('changeTheme').addEventListener('click', toggleTheme);\n  }\n};\n\nvar toggleTheme = function toggleTheme() {\n  var cookie = getThemeCookie();\n\n  if (cookie === 'virk') {\n    onBorgerdkThemeSelected();\n  } else if (cookie === 'borgerdk') {\n    onVirkThemeSelected();\n  }\n};\n\nvar debug = function debug(title, value) {\n  if (isDebugging) {\n    console.log(title, value);\n  }\n};\n\nvar setScreenshots = function setScreenshots() {\n  if (document.getElementsByTagName('body')[0].classList.contains('page-selvbetjeningsløsninger') || document.getElementsByTagName('body')[0].classList.contains('page-opsummeringsside') || document.getElementsByTagName('body')[0].classList.contains('page-kvittering')) {\n    var screenshots = document.getElementsByClassName('screenshot');\n\n    for (var i = 0; i < screenshots.length; i++) {\n      var url = screenshots[i].getAttribute('href').split('/');\n      var filename = getThemeCookie() + '-' + url[url.length - 2] + '.PNG';\n      var image = '<img src=\"/assets/img/examples_pages/' + url[url.length - 3] + '/' + filename + '\" alt=\"Skærmbillede af ' + screenshots[i].getAttribute('title') + '\" class=\"w-percent-100 d-block\" />';\n      screenshots[i].innerHTML = image;\n    }\n\n    var galleries = document.getElementsByClassName('screenshot-gallery');\n\n    if (galleries.length !== 0) {\n      for (var g = 0; g < galleries.length; g++) {\n        galleries[g].classList.remove('d-none');\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./javascript/theme.js?");

/***/ }),

/***/ 8:
/*!***********************************************!*\
  !*** multi ./javascript/requirements-tool.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./javascript/requirements-tool.js */\"./javascript/requirements-tool.js\");\n\n\n//# sourceURL=webpack:///multi_./javascript/requirements-tool.js?");

/***/ })

/******/ });