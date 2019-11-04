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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/theme.js":
/*!*****************************!*\
  !*** ./javascript/theme.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var themeAlertId = 'themeAlert';\nvar cookieName = 'theme';\nvar themes = ['virk', 'borgerdk'];\nvar themeStylesheets = ['styleguide_virkdk', 'styleguide_borgerdk'];\nvar isDebugging = true;\nvar demoSelectorId = 'themeSelector';\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  debug('cookie', getThemeCookie()); // verify cookie contains correct value\n\n  verifyCookieOrDelete(); // show theme alert on pages\n\n  themeAlertMessage(); // set cookie if missing\n\n  setCookieIfMissing(); // load stylesheet\n\n  setStylesheet();\n  setFooterSwitcher(); // handle theme selector on demo pages\n\n  initDemoThemeSelector();\n});\n\nvar setCookieIfMissing = function setCookieIfMissing() {\n  if (!isCookieSet()) {\n    debug('Cookie was not set', getThemeCookie());\n    setRandomThemeCookie();\n  }\n};\n\nvar verifyCookieOrDelete = function verifyCookieOrDelete() {\n  if (isCookieSet()) {\n    var themeChosen = getThemeCookie();\n\n    if (themes.indexOf(themeChosen) < 0) {\n      deleteCookie(cookieName);\n      debug('cookie was deleted:', themeChosen);\n    }\n  }\n};\n\nvar themeAlertMessage = function themeAlertMessage() {\n  var alert = document.getElementById(themeAlertId);\n\n  if (!isCookieSet() && alert !== null) {\n    showThemeAlert();\n    var closeButtons = alert.getElementsByClassName('alert-close');\n\n    for (var b = 0; b < closeButtons.length; b++) {\n      closeButtons[b].addEventListener('click', function () {\n        hideThemeAlert();\n      });\n    }\n\n    document.getElementById('borgerdkThemeBtn').addEventListener('click', onBorgerdkThemeSelected);\n    document.getElementById('virkThemeBtn').addEventListener('click', onVirkThemeSelected);\n  }\n};\n\nvar onVirkThemeSelected = function onVirkThemeSelected() {\n  setThemeCookie(themes[0]);\n  hideThemeAlert();\n  location.reload();\n};\n\nvar onBorgerdkThemeSelected = function onBorgerdkThemeSelected() {\n  setThemeCookie(themes[1]);\n  hideThemeAlert();\n  location.reload();\n};\n\nvar setStylesheet = function setStylesheet() {\n  var themeChosen = getThemeCookie();\n  debug('stylesheet:', themeChosen);\n  var indexOfTheme = themes.indexOf(themeChosen);\n  var lnk = document.createElement('link');\n  lnk.type = 'text/css';\n  lnk.rel = 'stylesheet';\n  lnk.href = '/assets/style/' + themeStylesheets[indexOfTheme] + '.css';\n  document.getElementsByTagName('head')[0].appendChild(lnk);\n};\n\nvar hideThemeAlert = function hideThemeAlert() {\n  if (document.getElementById(themeAlertId) !== null) {\n    document.getElementById(themeAlertId).classList.add('d-none');\n  }\n};\n\nvar showThemeAlert = function showThemeAlert() {\n  if (document.getElementById(themeAlertId) !== null) {\n    document.getElementById(themeAlertId).classList.remove('d-none');\n  }\n};\n\nvar setRandomThemeCookie = function setRandomThemeCookie() {\n  var randomTheme = themes[Math.floor(Math.random() * themes.length)];\n  setThemeCookie(randomTheme);\n};\n\nvar setThemeCookie = function setThemeCookie(theme) {\n  if (themes.indexOf(theme) >= 0) {\n    debug('setting cookie', theme);\n    setCookie(cookieName, theme, 365);\n    return true;\n  }\n\n  return false;\n};\n\nvar isCookieSet = function isCookieSet() {\n  var cookie = getCookie(cookieName);\n\n  if (cookie === null) {\n    return false;\n  }\n\n  return true;\n};\n\nvar getThemeCookie = function getThemeCookie() {\n  return getCookie(cookieName);\n};\n\nvar setCookie = function setCookie(name, value, daysToLive) {\n  // Encode value in order to escape semicolons, commas, and whitespace\n  var cookie = name + \"=\" + encodeURIComponent(value);\n\n  if (typeof daysToLive === \"number\") {\n    var d = new Date();\n    d.setTime(d.getTime() + daysToLive * 24 * 60 * 60 * 1000);\n    cookie += \";expires=\" + d.toUTCString();\n    cookie += ';path=/';\n    debug('Setting cookie', cookie);\n    document.cookie = cookie;\n  }\n};\n\nvar deleteCookie = function deleteCookie(name) {\n  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';\n};\n\nvar getCookie = function getCookie(name) {\n  // Split cookie string and get all individual name=value pairs in an array\n  var cookieArr = document.cookie.split(\";\"); // Loop through the array elements\n\n  for (var i = 0; i < cookieArr.length; i++) {\n    var cookiePair = cookieArr[i].split(\"=\");\n    /* Removing whitespace at the beginning of the cookie name\r\n    and compare it with the given string */\n\n    if (name === cookiePair[0].trim()) {\n      // Decode the cookie value and return\n      return decodeURIComponent(cookiePair[1]);\n    }\n  } // Return null if not found\n\n\n  return null;\n};\n\nvar initDemoThemeSelector = function initDemoThemeSelector() {\n  var demoSelector = document.getElementById(demoSelectorId);\n\n  if (demoSelector !== null && demoSelector !== undefined) {\n    setCorrectSelectedtheme();\n    demoSelector.addEventListener('change', function (event) {\n      var value = document.getElementById(demoSelectorId).value;\n\n      if (themes.indexOf(value) >= 0) {\n        setThemeCookie(value);\n        window.themeChangeProcess = true;\n        location.reload();\n      } else {\n        alert('The selected theme does not exist');\n      }\n    });\n  }\n};\n\nvar setCorrectSelectedtheme = function setCorrectSelectedtheme() {\n  var demoSelector = document.getElementById(demoSelectorId);\n  var options = demoSelector.getElementsByTagName('option');\n  var cookie = getThemeCookie();\n\n  for (var i = 0; i < options.length; i++) {\n    if (cookie === options[i].value) {\n      demoSelector.selectedIndex = i;\n    }\n  }\n};\n\nvar setFooterSwitcher = function setFooterSwitcher() {\n  if (document.getElementById('changeTheme') !== null) {\n    var cookie = getThemeCookie();\n    var theme = \"\";\n\n    switch (cookie) {\n      case 'virk':\n        theme = \"Borger.dk\";\n        break;\n\n      case 'borgerdk':\n        theme = \"Virk\";\n        break;\n    }\n\n    var text = \"Skift til \" + theme + \" tema\";\n    document.getElementById('changeThemeText').innerText = text;\n    document.getElementById('changeTheme').addEventListener('click', toggleTheme);\n  }\n};\n\nvar toggleTheme = function toggleTheme() {\n  var cookie = getThemeCookie();\n\n  if (cookie === 'virk') {\n    onBorgerdkThemeSelected();\n  } else if (cookie === 'borgerdk') {\n    onVirkThemeSelected();\n  }\n};\n\nvar debug = function debug(title, value) {\n  if (isDebugging) {\n    console.log(title, value);\n  }\n};\n\n//# sourceURL=webpack:///./javascript/theme.js?");

/***/ }),

/***/ 9:
/*!***********************************!*\
  !*** multi ./javascript/theme.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./javascript/theme.js */\"./javascript/theme.js\");\n\n\n//# sourceURL=webpack:///multi_./javascript/theme.js?");

/***/ })

/******/ });