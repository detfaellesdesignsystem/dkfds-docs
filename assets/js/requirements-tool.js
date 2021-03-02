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
/******/ 	deferredModules.push([5,"requirements-tool~styleguide"]);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dkfds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dkfds */ \"../dkfds-components/dist/js/dkfds.min.js\");\n/* harmony import */ var dkfds__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dkfds__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar toolIsProcessing = false;\n\nvar questionnaire = {};\nvar storageKey = \"reqTool\";\nvar root = window.location.origin + \"/krav-vaerktoej\";\nvar restart = window.location.origin + '/krav/';\nvar questions = [{\n  'id': \"Q100\",\n  \"path\": \"/anvendes-af-virksomheder/\",\n  \"status\": true\n}, {\n  'id': \"Q200\",\n  \"path\": \"/anvendes-af-borgere/\",\n  \"status\": true\n}, {\n  'id': \"Q300\",\n  \"path\": \"/obligatorisk-for-borgere/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q200\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q400\",\n  \"path\": \"/besoegende-om-aaret/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q500\",\n  \"path\": \"/en-eller-flere-loesninger-brugertest/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q400\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q600\",\n  \"path\": \"/bestaaet-faellesoffentlige-brugertest/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q500\",\n    \"value\": false\n  }]\n}, {\n  'id': \"Q700\",\n  \"path\": \"/transaktioner-per-aar/\",\n  \"status\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n}, {\n  'id': \"Q000\",\n  \"path\": \"/resultat/\",\n  \"status\": true\n}]; // define krav og anbefalinger - hvornår er det krav, og hvornår er det anbefaling?\n\nvar krav = [\"\"];\nkrav[1] = {\n  \"title\": \"Tidlig brugerinddragelse\",\n  \"krav\": false\n};\nkrav[2] = {\n  \"title\": \"Sprog\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[3] = {\n  \"title\": \"Konventioner for flow og funktionalitet\",\n  \"krav\": false\n};\nkrav[4] = {\n  \"title\": \"Feltvalidering\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[5] = {\n  \"title\": \"Personalisering\",\n  \"krav\": false\n};\nkrav[6] = {\n  \"title\": \"Understøttelse af styresystemer og browsere\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[7] = {\n  \"title\": \"Understøttelse af skærmstørrelser\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[8] = {\n  \"title\": \"Bestå den fællesoffentlige brugertest\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q600\",\n    \"value\": false\n  }]\n};\nkrav[9] = {\n  \"title\": \"Indsamling af viden om brugernes anvendelse af digitale løsninger\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q700\",\n    \"value\": true\n  }]\n};\nkrav[10] = {\n  \"title\": \"Anvendelse af infrastrukturkomponenter og andre komponenter\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[11] = {\n  \"title\": \"Genbrug af datakilder\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[12] = {\n  \"title\": \"Efterlevelse af aftalte arkitekturstandarder\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\nkrav[13] = {\n  \"title\": \"Krav til løsninger, der skal på borger.dk og Virk\",\n  \"krav\": false,\n  \"trueIf\": [{\n    \"question\": \"Q100\",\n    \"value\": true\n  }, {\n    \"question\": \"Q300\",\n    \"value\": true\n  }]\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"]();\n  var contactModal = new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"](document.getElementById('modal-contact'));\n  contactModal.init();\n  var printModalElement = document.getElementById('modal-print');\n\n  if (printModalElement !== null) {\n    var printModal = new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"](printModalElement);\n    printModal.init();\n  }\n\n  var jsSelectorTooltip = document.getElementsByClassName('js-tooltip');\n\n  for (var c = 0; c < jsSelectorTooltip.length; c++) {\n    new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Tooltip\"](jsSelectorTooltip[c]);\n  }\n\n  if (document.getElementsByTagName('body')[0].classList.contains('page-resultat')) {\n    var elemToObserve = document.getElementById('modal-print');\n    var stateToObserve = document.getElementById('modal-print').getAttribute('aria-hidden');\n    var observer = new MutationObserver(function (mutations) {\n      for (var mutation in mutations) {\n        if (mutations[mutation].attributeName == \"aria-hidden\") {\n          var newStateToObserve = mutations[mutation].target.getAttribute('aria-hidden');\n\n          if (stateToObserve === \"false\" && newStateToObserve === \"true\") {\n            stateToObserve = newStateToObserve;\n\n            if (document.getElementById('print-title').getAttribute('data-print') === \"true\") {\n              document.getElementById('print-title').setAttribute('data-print', \"false\");\n              window.print();\n            }\n          } else {\n            stateToObserve = newStateToObserve;\n          }\n        }\n      }\n    });\n    observer.observe(elemToObserve, {\n      attributes: true\n    });\n  }\n\n  var backlink = document.getElementById('back-link');\n\n  if (backlink !== null) {\n    backlink.addEventListener('click', goOneQuestionBack);\n  }\n\n  questionnaire = getQuestionnaire();\n  manageFlow();\n  setAnswerOnLoad();\n  formSubmitHandler();\n  checkTotalMeltdown(); // result page\n\n  generateResult();\n  printResultHandler();\n  startOverButtonHandler();\n  var close = document.getElementById('close-tool');\n\n  if (close !== null) {\n    close.addEventListener('click', closeTool);\n  }\n\n  var closeClass = document.getElementsByClassName('close-tool');\n\n  if (closeClass.length !== 0) {\n    closeClass[0].addEventListener('click', closeTool);\n  } // alert upon closing page\n\n\n  window.onbeforeunload = function (e) {\n    var showPopup = true;\n\n    if (toolIsProcessing) {\n      showPopup = false;\n    } else {\n      var activeElement = document.activeElement;\n\n      if (activeElement.href !== undefined && (activeElement.innerText === \"Redigér\" || activeElement.innerText === \"Tilbage\" || activeElement.getAttribute('href') === \"https://github.com/detfaellesdesignsystem/dkfds-components/issues/108\" || activeElement.getAttribute('href').indexOf('mailto:') !== -1)) {\n        showPopup = false;\n      }\n    }\n\n    if (showPopup) {\n      e = e || window.event; // For IE and Firefox prior to version 4\n\n      if (e) {\n        e.returnValue = 'Sure?';\n      }\n\n      showPopup = true; // For Safari\n\n      return 'Sure?';\n    }\n  };\n});\n\nvar printResultHandler = function printResultHandler() {\n  var printButton = document.getElementById('print-result-solution');\n\n  if (printButton !== null) {\n    printButton.addEventListener('click', function () {\n      var value = document.getElementById('solution-name-input').value;\n\n      if (value !== \"\") {\n        document.getElementById('print-title').innerText = 'Fælles aftalte krav som \"' + value + '\" skal efterleve';\n        document.getElementById('print-title').setAttribute('data-print', \"true\");\n        document.getElementById('result-container').getElementsByTagName('h1')[0].classList.add('d-print-none');\n        document.getElementById('print-title').classList.add('d-print-block');\n        new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"](document.getElementById('modal-print')).hide();\n      } else {\n        document.getElementById('print-title').setAttribute('data-print', \"true\");\n        document.getElementById('result-container').getElementsByTagName('h1')[0].classList.remove('d-print-none');\n        document.getElementById('print-title').classList.remove('d-print-block');\n        new dkfds__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"](document.getElementById('modal-print')).hide();\n      }\n    });\n  }\n};\n\nvar startOverButtonHandler = function startOverButtonHandler() {\n  var button = document.getElementById('start-over');\n\n  if (button !== null) {\n    button.addEventListener('click', startOver);\n  }\n};\n/**\r\n * Get the index of a certain question in the questions array\r\n * @param id ID of question\r\n * @returns {number} Returns the index of the question in the questions array\r\n */\n\n\nvar getIndexOfQuestion = function getIndexOfQuestion(id) {\n  return questions.findIndex(function (obj) {\n    return obj.id === id;\n  });\n};\n/***\r\n * Define which questions are relevant at this stage\r\n */\n\n\nvar manageFlow = function manageFlow() {\n  for (var i = 0; i < questions.length; i++) {\n    if (questions[i].trueIf !== undefined) {\n      var status = false;\n\n      for (var b = 0; b < questions[i].trueIf.length; b++) {\n        var trueIf = questions[i].trueIf[b]; // if chosen value matches condition, then show question\n\n        if (questions[getIndexOfQuestion(trueIf.question)].status === true && questionnaire[trueIf.question] !== undefined && questionnaire[trueIf.question] === trueIf.value) {\n          status = true;\n        }\n      }\n\n      questions[i].status = status;\n    }\n  }\n};\n/**\r\n * Update localStorage, so only answers to enabled questions remain\r\n */\n\n\nvar verifyAnswersToQuestions = function verifyAnswersToQuestions() {\n  var updateQuestionnaire = {};\n\n  for (var key in questionnaire) {\n    if (questions[getIndexOfQuestion(key)].status === true) {\n      updateQuestionnaire[key] = questionnaire[key];\n    }\n  }\n\n  questionnaire = updateQuestionnaire;\n};\n/**\r\n * Set form eventlistener on submit\r\n */\n\n\nvar formSubmitHandler = function formSubmitHandler() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    var id = form[0].id.split('-')[1];\n    form[0].addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      formSubmit(id);\n    }, false);\n  }\n};\n/**\r\n * validate and save value from form + navigate to next question\r\n * @param id ID of question\r\n */\n\n\nvar formSubmit = function formSubmit(id) {\n  if (validate()) {\n    questionnaire[id] = document.querySelector('input[name=\"radio\"]:checked').value === '1';\n    manageFlow();\n    saveQuestionnaire();\n    goTo(getNextEnabledQuestion(id).path);\n  }\n};\n/**\r\n * Get next question where status is true\r\n * @param currentQuestionID the id of the current question\r\n * @returns returns the next question in the array\r\n */\n\n\nvar getNextEnabledQuestion = function getNextEnabledQuestion(currentQuestionID) {\n  var currentIndex = getIndexOfQuestion(currentQuestionID);\n  var nextQuestion = null;\n\n  for (var i = currentIndex + 1; i < questions.length; i++) {\n    if (questions[i].status === true) {\n      nextQuestion = questions[i];\n      break;\n    }\n  }\n\n  return nextQuestion;\n};\n/**\r\n * Get questionnaire from localstorage\r\n * @returns JSON\r\n */\n\n\nvar getQuestionnaire = function getQuestionnaire() {\n  var reqTool = localStorage.getItem(storageKey);\n\n  if (reqTool === null) {\n    return {};\n  }\n\n  return JSON.parse(reqTool);\n};\n/**\r\n * Save questionnaire to localstorage\r\n */\n\n\nvar saveQuestionnaire = function saveQuestionnaire() {\n  verifyAnswersToQuestions();\n  localStorage.setItem(storageKey, JSON.stringify(questionnaire));\n};\n/**\r\n * Validate form\r\n * @returns {boolean}\r\n */\n\n\nvar validate = function validate() {\n  var radio = document.querySelector('input[name=\"radio\"]:checked');\n\n  if (radio === null) {\n    var errorText = \"Vælg venligst Ja eller Nej\";\n    document.getElementsByClassName('form-group')[0].classList.add('form-error');\n    document.getElementById('error-message').innerText = errorText;\n    document.getElementById('error-message').classList.remove('d-none');\n    document.getElementById('error-summary').getElementsByClassName('nobullet-list')[0].innerHTML = '<li><a href=\"#radio-yes\" class=\"function-link\">' + errorText + '</a></li>';\n    document.getElementById('error-summary').classList.remove('d-none');\n    return false;\n  }\n\n  document.getElementsByClassName('form-group')[0].classList.remove('form-error');\n  document.getElementById('error-message').classList.add('d-none');\n  document.getElementById('error-message').innerText = \"\";\n  document.getElementById('error-summary').getElementsByClassName('nobullet-list')[0].innerHTML = \"\";\n  document.getElementById('error-summary').classList.add('d-none');\n  return true;\n};\n/**\r\n * Go to new page\r\n * @param url\r\n */\n\n\nvar goTo = function goTo(url) {\n  toolIsProcessing = true;\n  window.location.href = root + url;\n};\n\nvar goOneQuestionBack = function goOneQuestionBack() {\n  var current = getCurrentFormId();\n  var nextQuestion = getPreviousActiveQuestion(current);\n  goTo(nextQuestion.path);\n};\n\nvar getPreviousActiveQuestion = function getPreviousActiveQuestion(current) {\n  var getIndexOfCurrent = getIndexOfQuestion(current);\n  var prevIndex = getIndexOfCurrent - 1;\n  var nextQuestion = questions[prevIndex];\n\n  if (nextQuestion.status === true) {\n    return nextQuestion;\n  }\n\n  return getPreviousActiveQuestion(nextQuestion.id);\n};\n\nvar validateAllQuestions = function validateAllQuestions() {\n  var error = false;\n  var errorQuestions = [];\n  questions.forEach(function (question) {\n    if (question.status === true && question.id !== 'Q000') {\n      if (questionnaire[question.id] === undefined) {\n        error = true;\n        errorQuestions.push(question);\n      }\n    }\n  });\n  return errorQuestions;\n};\n/**\r\n * Set correct chosen values on results page. Hide Questions not answered.\r\n */\n\n\nvar generateResult = function generateResult() {\n  var errorQuestions = validateAllQuestions();\n\n  if (errorQuestions.length === 0) {\n    if (document.querySelector('body.page-resultat') !== null) {\n      if (Object.getOwnPropertyNames(getQuestionnaire()).length === 0) {\n        window.location.href = restart;\n        return;\n      }\n\n      var summaryTable = document.getElementById('summary');\n      var rows = summaryTable.getElementsByTagName('tr');\n\n      for (var i = 0; i < rows.length; i++) {\n        var id = rows[i].id;\n        var value = questionnaire[id];\n\n        if (value === undefined) {\n          rows[i].classList.add('d-none');\n          continue;\n        }\n\n        if (value === true) {\n          rows[i].querySelector('.value').innerText = \"Ja\";\n        } else {\n          rows[i].querySelector('.value').innerText = \"Nej\";\n        }\n\n        rows[i].classList.remove('d-none');\n      }\n\n      var resultTable = document.getElementById('resultat');\n      var resultRows = resultTable.getElementsByTagName('tr');\n\n      for (var v = 0; v < resultRows.length; v++) {\n        var kravNo = v + 1;\n        var badge = resultRows[v].getElementsByTagName('label')[0];\n\n        if (isThisAKrav(kravNo)) {\n          badge.innerText = \"Krav\";\n          badge.classList.add('badge-warning');\n        } else {\n          badge.innerText = \"Anbefaling\";\n          badge.classList.add('badge-info');\n        }\n      }\n\n      document.getElementById('result-container').classList.remove('d-none');\n    }\n  } else if (document.getElementById('error-container') !== null) {\n    toolIsProcessing = true;\n    document.getElementById('continue-questionnaire-link').setAttribute('href', root + errorQuestions[0].path);\n    document.getElementById('error-container').classList.remove('d-none');\n  }\n};\n/**\r\n * Check if the krav is a requirement or recommendation dependent on the answers provided\r\n * @param kravNo number of the requirement/recommendation\r\n * @returns {boolean} return true if it's a requirement, false if recommendation\r\n */\n\n\nvar isThisAKrav = function isThisAKrav(kravNo) {\n  if (krav[kravNo].trueIf !== undefined) {\n    for (var i = 0; i < krav[kravNo].trueIf.length; i++) {\n      var answer = questionnaire[krav[kravNo].trueIf[i].question];\n\n      if (answer === krav[kravNo].trueIf[i].value) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n/**\r\n * If going back in the flow to a previous step\r\n */\n\n\nvar setAnswerOnLoad = function setAnswerOnLoad() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    var id = form[0].id.split('-')[1];\n    var questionnaireValue = questionnaire[id];\n\n    if (questionnaireValue !== undefined) {\n      if (questionnaireValue === true) {\n        document.getElementById('radio-yes').checked = true;\n        document.getElementById('radio-no').checked = false;\n      } else {\n        document.getElementById('radio-yes').checked = false;\n        document.getElementById('radio-no').checked = true;\n      }\n    }\n  }\n};\n/**\r\n * Get the ID of the current form\r\n * @returns Returns string containing ID of the current question from the array - returns false, if no form was found\r\n */\n\n\nvar getCurrentFormId = function getCurrentFormId() {\n  var form = document.getElementsByTagName(\"form\");\n\n  if (form.length > 0) {\n    return form[0].id.split('-')[1];\n  }\n\n  return false;\n};\n/**\r\n * There was an error - delete all and be gone from this place!\r\n */\n\n\nvar checkTotalMeltdown = function checkTotalMeltdown() {\n  if (getCurrentFormId() !== false && questions[getIndexOfQuestion(getCurrentFormId())].status === false) {\n    closeTool();\n  }\n};\n\nvar startOver = function startOver() {\n  localStorage.removeItem(storageKey);\n  goTo(questions[0].path);\n};\n\nvar closeTool = function closeTool() {\n  localStorage.removeItem(storageKey);\n  toolIsProcessing = true;\n\n  if (window.location.href.indexOf('krav-vaerktoej/resultat/') === -1) {\n    toolIsProcessing = false;\n  }\n\n  window.location.href = restart;\n};\n\n//# sourceURL=webpack:///./javascript/requirements-tool.js?");

/***/ }),

/***/ 5:
/*!***********************************************!*\
  !*** multi ./javascript/requirements-tool.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./javascript/requirements-tool.js */\"./javascript/requirements-tool.js\");\n\n\n//# sourceURL=webpack:///multi_./javascript/requirements-tool.js?");

/***/ })

/******/ });