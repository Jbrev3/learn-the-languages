/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    padding: 0;\\n    font-size: 16pt;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nnav {\\n    background-color: #4d0066;\\n    padding: 10px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.ltl-name {\\n    padding-left: 10px;\\n    position: relative; \\n    top: -3px;\\n}\\n\\n.wrapper {\\n    background-color: #f8edff;\\n    height: 100%;\\n}\\n\\n.hero {\\n    width: 80%;\\n    max-width: 750px;\\n    margin: 10px auto;\\n    \\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: end;\\n}\\n\\n.hero p {\\n    color: #636363;\\n    text-align: center;\\n}\\n\\n.call-to-action {\\n    text-decoration: none;\\n    border: 2px solid white;\\n    color: white;\\n    padding: 15px;\\n    border-radius: 15px;\\n    background-color: #4d0066;\\n    margin-top: 20px;\\n}\\n\\n.call-to-action:hover {\\n    color: #4d0066;\\n    border: 2px solid #4d0066;\\n    background-color: white;\\n}\\n\\n.practice-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.q-and-a {\\n    margin-top: 40px;\\n    width: 80%;\\n    height: 40vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n}\\n\\nh1 {\\n    font-size: 3rem;\\n    text-align: center;\\n}\\n\\nh2 {\\n    font-size: 2.7rem;\\n}\\n\\n#greek {\\n    font-family: 'Times New Roman', Times, serif;\\n}\\n\\n.word-container {\\n    text-align: center;\\n}\\n\\n@media only screen and (min-width: 500px) {\\n    .word-container {\\n        border: 1px solid #4d0066;\\n        border-radius: 20px;\\n        width: 50%;\\n        flex: 1;\\n        margin: 3%;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        position: relative;\\n    }\\n    .label {\\n        background-color: #f8edff;\\n        font-size: 1.25rem;\\n        color: #4d0066;\\n        position: absolute;\\n        top: -70px;\\n        left: 20px;\\n        padding: 10px;\\n    \\n    }\\n}\\n\\n\\nbutton {\\n    color: white;\\n    background-color: #4d0066;\\n    padding: 20px 0;\\n    border-radius: 20px;\\n    font-size: 16px;\\n    width: 250px;\\n    margin-top: 50px;\\n    font-size: 20px;\\n    align-self: center;\\n}\\n\\n@media only screen and (max-width: 500px) {\\n\\n    h1 {\\n        font-size: 2.7rem;\\n    }\\n\\n    button {\\n        padding: 15px 0;\\n    }\\n    \\n    .hero {\\n        width: 100%;\\n    }\\n\\n    .hero p {\\n        width: 80%;\\n    }\\n\\n    .label {\\n        display: none;\\n    }\\n\\n    .q-and-a {\\n        margin-top: 0px;\\n        height: 30vh;\\n    }\\n\\n    .bottom-container {\\n        border-top: 1px solid #4d0066;\\n        width: 70vw;\\n    }\\n\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://learn-the-languages/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://learn-the-languages/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://learn-the-languages/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://learn-the-languages/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\n\nif (false) {}\n\ndocument.getElementById(\"next\").addEventListener(\"click\", buttonClick);\n\n// generate question\nwindow.addEventListener('load', () => {\n  buttonClick();\n});\n\nlet game = \"Pronunciation Practice\";\nlet gender = \"All\";\nlet declension = \"All\";\nlet order = \"Random Order\";\n\nfunction changeMode() {\n  game = document.getElementById(\"mode\").value;\n  document.getElementById(\"title\").innerHTML = game;\n}\n\nfunction changeOrder() {\n  order = document.getElementById(\"order\").value; \n}\n\nfunction changeDeclension() {\n  declension = document.getElementById(\"declension\").value;\n  console.log(parsingWords)\n  parsingWords = allParsingWords.filter( (x) => { x.declension == declension} );\n  console.log(parsingWords)\n}\n\nconst alphaArray = [ \n  [\"α\", \"a\", 1], \n  [\"β\", \"b\", 2], \n  [\"γ\", \"g\", 2], \n  [\"δ\", \"d\", 2], \n  [\"ε\", \"&#277\", 1],\n  [\"ζ\", \"z\", 2], \n  [\"η\", \"&#257\", 1], \n  [\"θ\", \"th\", 2], \n  [\"ι\", \"i\", 1], \n  [\"κ\", \"k\", 2], \n  [\"λ\", \"l\", 2], \n  [\"μ\", \"m\", 2], \n  [\"ν\", \"n\", 2], \n  [\"ξ\", \"x\", 2], \n  [\"ο\", \"&#335\", 1], \n  [\"π\", \"p\", 2], \n  [\"ρ\", \"r\", 2], \n  [\"σ\", \"s\", 2], \n  [\"τ\", \"t\", 2], \n  [\"υ\", \"oo\", 1], \n  [\"φ\", \"ph\", 2], \n  [\"χ\", \"k\" /*or \"ch\"*/, 2], \n  [\"ψ\", \"ps\", 2], \n  [\"ω\", \"&#333\", 1], \n  [\"αι\", \"&#299\", 3], \n  [\"ει\", \"&#257\", 3], \n  [\"οι\", \"oi\", 3], \n  [\"αυ\", \"ow\", 3], \n  [\"ου\", \"oo\", 3], \n  [\"υι\", \"w&#275\", 3], \n  [\"ευ\", \"yoo\", 3], \n  [\"ηυ\", \"yoo\", 3] ];\n\n// const parsingArray = [\n//   [\"λογος\", \"Masculine\", \"Singular\", \"Nominative\", 2],\n//   [\"λογου\", \"Masculine\", \"Singular\", \"Genative\", 2],\n//   [\"λογω\", \"Masculine\", \"Singular\", \"Dative\", 2],\n//   [\"λογον\", \"Masculine\", \"Singular\", \"Accusative\", 2],\n//   [\"λογοι\", \"Masculine\", \"Plural\", \"Nominative\", 2],\n//   [\"λογων\", \"Masculine\", \"Plural\", \"Genative\", 2],\n//   [\"λογοις\", \"Masculine\", \"Plural\", \"Dative\", 2],\n//   [\"λογους\", \"Masculine\", \"Plural\", \"Accusative\", 2],\n//   [\"γραφη\", \"Feminine\", \"Singular\", \"Nominative\", 1],\n//   [\"γραφης\", \"Feminine\", \"Singular\", \"Genative\", 1],\n//   [\"γραφην\", \"Feminine\", \"Singular\", \"Dative\", 1],\n//   [\"γραφη\", \"Feminine\", \"Singular\", \"Accusative\", 1],\n//   [\"γραφαι\", \"Feminine\", \"Plural\", \"Nominative\", 1],\n//   [\"γραφων\", \"Feminine\", \"Plural\", \"Genative\", 1],\n//   [\"γραφαις\", \"Feminine\", \"Plural\", \"Dative\", 1],\n//   [\"γραφας\", \"Feminine\", \"Plural\", \"Accusative\", 1],\n//   [\"ωρα\", \"Feminine\", \"Singular\", \"Nominative\", 1],\n//   [\"ωρας\", \"Feminine\", \"Singular\", \"Genative\", 1],\n//   [\"ωρα\", \"Feminine\", \"Singular\", \"Dative\", 1],\n//   [\"ωραν\", \"Feminine\", \"Singular\", \"Accusative\", 1],\n//   [\"εργον\", \"Neuter\", \"Singular\", \"Nominative\", 2],\n//   [\"εργου\", \"Neuter\", \"Singular\", \"Genative\", 2],\n//   [\"εργω\", \"Neuter\", \"Singular\", \"Dative\", 2],\n//   [\"εργον\", \"Neuter\", \"Singular\", \"Accusative\", 2],\n//   [\"εργα\", \"Neuter\", \"Plural\", \"Nominative\", 2],\n//   [\"εργων\", \"Neuter\", \"Plural\", \"Genative\", 2],\n//   [\"εργοις\", \"Neuter\", \"Plural\", \"Dative\", 2],\n//   [\"εργα\", \"Neuter\", \"Plural\", \"Accusative\", 2],\n// ] \n\nconst parsingArray = [\n  [\"αυτος\", \"Masculine\", \"Singular\", \"Nominative\", 3],\n  [\"αυτου\", \"Masculine\", \"Singular\", \"Genative\", 3],\n  [\"αυτω\", \"Masculine\", \"Singular\", \"Dative\", 3],\n  [\"αυτον\", \"Masculine\", \"Singular\", \"Accusative\", 3],\n  [\"αυτοι\", \"Masculine\", \"Plural\", \"Nominative\", 3],\n  [\"αυτων\", \"Masculine\", \"Plural\", \"Genative\", 3],\n  [\"αυτοις\", \"Masculine\", \"Plural\", \"Dative\", 3],\n  [\"αυτους\", \"Masculine\", \"Plural\", \"Accusative\", 3],\n  [\"αυτη\", \"Feminine\", \"Singular\", \"Nominative\", \"2\"],\n  [\"αυτης\", \"Feminine\", \"Singular\", \"Genative\", \"2\"],\n  [\"αυτην\", \"Feminine\", \"Singular\", \"Dative\", \"2\"],\n  [\"αυτη\", \"Feminine\", \"Singular\", \"Accusative\", \"2\"],\n  [\"αυται\", \"Feminine\", \"Plural\", \"Nominative\", \"2\"],\n  [\"αυτων\", \"Feminine\", \"Plural\", \"Genative\", \"2\"],\n  [\"αυταις\", \"Feminine\", \"Plural\", \"Dative\", \"2\"],\n  [\"αυτας\", \"Feminine\", \"Plural\", \"Accusative\", \"2\"]];\n\n// Type 1 = vowel, 2 = consonant, 3 = dipthong\nfunction createAlphabet (x) {\n  const vow = (x[2] == 1);\n  const cons = (x[2] == 2);\n  const dipth = (x[2] == 3);\n  \n  return {\n    greek: x[0],\n    english: x[1],\n    vowel: vow,\n    consonant: cons,\n    dipthong: dipth\n  };\n}\n\nfunction createParsingWords (x) {\n  return {\n    greek: x[0],\n    gender: x[1],\n    number: x[2],\n    case: x[3],\n    declension: x[4]\n  };\n}\n\nfunction checkEdgeCases() {\n  return \"ς\";\n}\n\nconst alphabet = alphaArray.map(createAlphabet);\n\nconst vowels = alphabet.filter(\n  function(x){\n    if(x.vowel === true || x.dipthong === true){\n      return x;\n    }\n  });\n\nconst consonants = alphabet.filter(\n  function(x){\n    if(x.consonant === true) {\n      return x;\n    }\n  });\n\nconst allParsingWords = parsingArray.map(createParsingWords);\nlet parsingWords = allParsingWords;\n\nconst practice = {\n  question: \"\",\n  answer: \"\",\n  answerShown: true,\n  generateQandA: function () {\n    if(game === \"Pronunciation Practice\") {\n      let vowelChoice = getRandomInt(vowels.length)\n      let consonantChoice = getRandomInt(consonants.length);\n      let vowelBool = getRandomInt(2) == 1 ;\n      if (vowelBool) {\n        if(consonants[consonantChoice].greek ===\"σ\") {consonants[consonantChoice].greek = \"ς\"};\n        this.question = vowels[vowelChoice].greek + consonants[consonantChoice].greek;\n        this.answer = vowels[vowelChoice].english + consonants[consonantChoice].english;\n      } else {\n        this.question = consonants[consonantChoice].greek + vowels[vowelChoice].greek;\n        this.answer = consonants[consonantChoice].english + vowels[vowelChoice].english;\n      }\n    } else if (game === \"Parsing Practice\") {\n      let word = getRandomInt(parsingArray.length);\n      this.question = parsingWords[word].greek;\n      this.answer = parsingWords[word].gender + \" \" + parsingWords[word].number + \" \" + parsingWords[word].case;\n    }\n  },\n  updatePage: function () {\n      document.getElementById(\"greek\").innerHTML = this.question;\n      document.getElementById(\"answer\").innerHTML = this.answer;\n      console.log(this.question);\n      console.log(this.answer);\n    }\n};\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\nfunction buttonClick () {\n    if (practice.answerShown) {\n      practice.generateQandA();\n      practice.updatePage();\n      document.getElementById(\"next\").innerHTML = \"Show Pronunciation\";\n      document.getElementById(\"answer\").style.visibility = \"hidden\";\n      practice.answerShown = false;\n    } else {\n      document.getElementById(\"next\").innerHTML = \"Next\";\n      document.getElementById(\"answer\").style.visibility = \"visible\";\n      practice.answerShown = true;\n    }\n}\n\n\n//# sourceURL=webpack://learn-the-languages/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;