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

/***/ "./javascript/search.js":
/*!******************************!*\
  !*** ./javascript/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var synonyms = [[\"checkbox\", \"tjekboks\"], [\"radiobutton\", \"radioknap\", \"radio\", \"radiobuttons\", \"radioknapper\", \"radioknappr\", \"radioknaper\", \"radioknaper\"], [\"select\", \"dropdown\", \"drop down\", \"drop-down\", \"dropdown menu\", \"fold ud\", \"foldud\"], [\"tekstfelt\", \"felt\", \"input\", \"inputfelt\"], [\"datoangivelse\", \"dato felt\", \"datofelt\"], [\"vedhæft\", \"filupload\", \"fil upload\", \"fil-upload\"], [\"funktionslink\", \"funktions-link\", \"funktions link\"], [\"tekstområde\", \"textarea\"], [\"sidenavigation\", \"venstremenu\"], [\"primærknap\", \"primær knap\", \"primary\", \"primær\"], [\"sekundærknap\", \"sekundærknap\", \"secondary\", \"sekundær\"], [\"trinindikator\", \"tringuide\"], [\"avancerede tabeller\", \"datatables\"]];\nvar excludeWords = [\"Når\", \"i\", \"I\", \"er\", \"det\", \"der\", \"dem\", \"den\", \"et\", \"hvad\", \"hvor\", \"hvem\", \"på\", \"og\"];\nvar limit = 1000;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var url_queries = window.location.search.substr(1).split('&');\n\n  if (url_queries.length !== 0) {\n    var start = 0;\n    var query = null;\n\n    for (var q in url_queries) {\n      var loop_query = url_queries[q].split('=');\n\n      if (loop_query[0] === \"start\") {\n        start = parseInt(loop_query[1]);\n      }\n\n      if (loop_query[0] === \"q\") {\n        query = decodeURIComponent(loop_query[1]).split('+').join(' ');\n      }\n    }\n\n    if (query !== null && query !== \"\") {\n      var results = search(query);\n      populateSearch(results, decodeURIComponent(query), start);\n    } else {\n      populateSearch([], decodeURIComponent(query), start);\n    }\n  }\n\n  if (document.getElementById('menuSearchForm') != null) {\n    document.getElementById('menuSearchForm').addEventListener(\"submit\", onSearchSubmit);\n  }\n\n  if (document.getElementById('mobileSearchForm') != null) {\n    document.getElementById('mobileSearchForm').addEventListener(\"submit\", onSearchSubmit);\n  }\n\n  if (document.getElementById('searchForm') != null) {\n    document.getElementById('searchForm').addEventListener(\"submit\", onSearchSubmit);\n  }\n});\n\nfunction onSearchSubmit(e) {\n  console.log(this);\n}\n\nfunction populateSearch(results, query, start) {\n  document.getElementById('search-input').value = query;\n  document.getElementById('results-count').innerText = results.length;\n  document.getElementById('results-text').innerText = query;\n\n  if (results.length > 0) {\n    if (start !== 0) {\n      var nextStart = start - limit;\n      document.getElementById('previous-page').href = \"?q=\" + query + \"&start=\" + nextStart;\n      document.getElementById('previous-page').classList.remove('d-none');\n    }\n\n    if (results.length > start + limit) {\n      var _nextStart = start + limit;\n\n      document.getElementById('next-page').href = \"?q=\" + query + \"&start=\" + _nextStart;\n      document.getElementById('next-page').classList.remove('d-none');\n    }\n\n    var html = \"\";\n\n    for (var r = start; r < start + limit; r++) {\n      if (results[r] == undefined) {\n        break;\n      }\n\n      var page = results[r];\n      html += '<div class=\"page-result\">';\n      html += '<h2 class=\"h4 mb-0 page-title\"><a href=\"' + page.url + '\">' + page.title;\n\n      if (page.subcategory === \"Kode\") {\n        html += '&nbsp;<span class=\"page-category weight-normal small-text\">[' + page.subcategory + ']</span>';\n      } else if (page.layout === \"demo\") {\n        html += '&nbsp;<span class=\"page-category weight-normal small-text\">[Eksempel]</span>';\n      }\n\n      html += '</a></h2>';\n\n      if (page.description.length > 0) {\n        var description = formatDescription(truncateString(page.description, 170, '...'), query);\n        html += '<p class=\"mt-0 mb-0 page-description\">' + description + '</p>';\n      }\n\n      html += '</div>';\n    }\n\n    document.getElementById('results').innerHTML = html;\n  } else {\n    document.getElementById('results').innerHTML = \"<p>Vi fandt ingen sider, der matchede din søgning.</p>\";\n  }\n\n  document.getElementById('results-container').classList.remove('d-none');\n}\n\nfunction formatDescription(description, query) {\n  var text = \"\";\n  var index = description.toLowerCase().indexOf(query.toLowerCase());\n\n  if (index === -1) {\n    return description;\n  }\n\n  return description.replace(query, '<span class=\"weight-semibold\">' + query + '</span>');\n}\n\nfunction truncateString(str, len, append) {\n  if (str.length > len) {\n    var newLength;\n    append = append || \"\"; //Optional: append a string to str after truncating. Defaults to an empty string if no value is given\n\n    if (append.length > 0) {\n      append = \" \" + append; //Add a space to the beginning of the appended text\n    }\n\n    if (str.indexOf(' ') + append.length > len) {\n      return str; //if the first word + the appended text is too long, the function returns the original String\n    }\n\n    str.length + append.length > len ? newLength = len - append.length : newLength = str.length; // if the length of original string and the appended string is greater than the max length, we need to truncate, otherwise, use the original string\n\n    var tempString = str.substring(0, newLength); //cut the string at the new length\n\n    tempString = tempString.replace(/\\s+\\S*$/, \"\"); //find the last space that appears before the substringed text\n\n    if (append.length > 0) {\n      tempString = tempString + append;\n    }\n\n    return tempString;\n  } else {\n    return str;\n  }\n}\n\n;\n\nfunction searchWords(query) {\n  var returnValue = [query];\n\n  for (var s in synonyms) {\n    var word = synonyms[s];\n    var check = word.includes(query.toLowerCase());\n\n    if (check) {\n      returnValue = word;\n      break;\n    }\n  }\n\n  return returnValue;\n}\n\nfunction matchSearch(page, query) {\n  var matched = false;\n  var phrases = query.split(\" \");\n  var syns = searchWords(query);\n\n  for (var w in syns) {\n    var word = syns[w];\n\n    if (page.title.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.lead.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.tags.toLowerCase().indexOf(word.toLowerCase()) >= 0 || page.content.toLowerCase().indexOf(word.toLowerCase()) >= 0) {\n      matched = true;\n    } else {\n      var phrasesMatched = [];\n\n      for (var phrase in phrases) {\n        var currentPhrase = phrases[phrase].toLowerCase();\n\n        if (currentPhrase.length > 2) {\n          if (!matched && (page.title.toLowerCase().indexOf(currentPhrase) >= 0 || page.lead.toLowerCase().indexOf(currentPhrase) >= 0 || page.tags.toLowerCase().indexOf(currentPhrase) >= 0 || page.content.toLowerCase().indexOf(currentPhrase) >= 0)) {\n            matched = true;\n            phrasesMatched.push(currentPhrase);\n          }\n        }\n      }\n\n      if (matched) {\n        page.phrasesMatched = phrasesMatched;\n      }\n    }\n\n    if (matched) {\n      page.matched = true;\n      break;\n    }\n  }\n\n  return page;\n}\n\nfunction search(query) {\n  var result = []; // search phrase\n\n  searchIndex.forEach(function (page) {\n    var matchedPage = matchSearch(page, query);\n\n    if (matchedPage.matched) {\n      result.push(matchedPage);\n    }\n  });\n  var sortedResult = sort(result, query);\n  var endResult = [];\n  sortedResult.forEach(function (page) {\n    if (page.score >= 50) {\n      endResult.push(page);\n    }\n  });\n  return endResult;\n}\n\nfunction matchForString(haystack, needle) {\n  if (Array.isArray(haystack) && haystack.indexOf(needle.toLowerCase()) >= 0) {\n    return true;\n  } else if (!Array.isArray(haystack) && haystack.toLowerCase().indexOf(needle.toLowerCase()) >= 0) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction sort(result, query) {\n  var syns = searchWords(query);\n  result.forEach(function (page) {\n    var score = 0;\n    var matched = {}; // match title\n\n    matched.title = false;\n\n    if (matchForString(page.title, query)) {\n      matched.title = true;\n      matched.titleString = true;\n    } else {\n      for (var s in syns) {\n        if (matchForString(page.title, syns[s])) {\n          matched.title = true;\n        }\n      }\n    } // match tags\n\n\n    matched.tags = false;\n\n    if (matchForString(page.tags.split(\",\"), query)) {\n      matched.tags = true;\n    } else {\n      for (var _s in syns) {\n        if (matchForString(page.tags.split(\",\"), syns[_s])) {\n          matched.tags = true;\n        }\n      }\n    } // match tags\n\n\n    matched.description = false;\n\n    if (matchForString(page.description, query)) {\n      matched.description = true;\n      matched.descriptionString = true;\n    } else {\n      for (var _s2 in syns) {\n        if (matchForString(page.description, syns[_s2])) {\n          matched.description = true;\n        }\n      }\n    } // match subnav\n\n\n    matched.subnav = false;\n\n    if (matchForString(page.subnav, query)) {\n      matched.subnav = true;\n    } else {\n      for (var _s3 in syns) {\n        if (matchForString(page.subnav, syns[_s3])) {\n          matched.subnav = true;\n        }\n      }\n    } // match content\n\n\n    matched.content = false;\n\n    if (matchForString(page.content, query)) {\n      matched.content = true;\n      matched.contentString = true;\n    } else {\n      for (var _s4 in syns) {\n        if (matchForString(page.subnav, syns[_s4])) {\n          matched.subnav = true;\n        }\n      }\n    } // match category\n\n\n    matched.category = 0; // priority category\n\n    switch (page.category) {\n      case \"Komponenter_category\":\n        matched.category = 1;\n        break;\n\n      case \"Kode_category\":\n        matched.category = 2;\n        break;\n\n      case \"Design_category\":\n        matched.category = 3;\n        break;\n\n      case \"Kom_i_gang_category\":\n        matched.category = 4;\n        break;\n\n      case \"Om_designsystemet_category\":\n        matched.category = 5;\n        break;\n    }\n\n    matched.demo = false;\n\n    if (page.layout === \"demo\") {\n      matched.demo = true;\n    } // Set scores\n\n\n    if (matched.title) {\n      score = score + 60;\n    }\n\n    if (matched.tags) {\n      score = score + 44;\n    }\n\n    if (matched.description) {\n      score = score + 35;\n    }\n\n    if (matched.subnav) {\n      score = score + 20;\n    }\n\n    if (matched.content) {\n      score = score + 30;\n\n      if (query.indexOf(\" \") >= 0) {\n        score = score + 20;\n      }\n    }\n\n    switch (matched.category) {\n      case 1:\n        score = score + 15;\n        break;\n\n      case 2:\n        score = score + 13;\n        break;\n\n      case 3:\n        score = score + 8;\n        break;\n\n      case 4:\n        score = score + 6;\n        break;\n\n      case 5:\n        score = score + 5;\n        break;\n    }\n\n    if (matched.demo) {\n      score = score + 25;\n    }\n\n    page.matched = matched;\n    page.score = score;\n  });\n  return result.sort(function (a, b) {\n    if (a.score > b.score) {\n      return -1;\n    } else if (a.score < b.score) {\n      return 1;\n    }\n\n    return 0;\n  });\n}\n\n//# sourceURL=webpack:///./javascript/search.js?");

/***/ }),

/***/ 9:
/*!************************************!*\
  !*** multi ./javascript/search.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./javascript/search.js */\"./javascript/search.js\");\n\n\n//# sourceURL=webpack:///multi_./javascript/search.js?");

/***/ })

/******/ });