this["cl"] = this["cl"] || {}; this["cl"]["call-to-action-editable"] =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/call-to-action-editable/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/call-to-action-editable/index.js":
/*!*************************************************!*\
  !*** ./blocks/call-to-action-editable/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"./node_modules/@wordpress/i18n/build-module/index.js\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/**\n * Create style prop for content\n * @param styleProps\n * @return {{textAlign: string}}\n */\n\nvar createStyle = function createStyle(styleProps) {\n  return {\n    textAlign: styleProps.hasOwnProperty('align') ? styleProps.align : 'left',\n    backgroundColor: styleProps.hasOwnProperty('backgroundColor') ? styleProps.backgroundColor : ''\n  };\n};\n/**\n * One function to generate the same content in edit/save\n *\n * @return {*}\n */\n\n\nfunction Content(_ref) {\n  var attributes = _ref.attributes;\n  var text = attributes.text,\n      linkText = attributes.linkText,\n      link = attributes.link,\n      align = attributes.align,\n      linkColor = attributes.linkColor,\n      textColor = attributes.textColor,\n      backgroundColor = attributes.backgroundColor;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", {\n    style: createStyle({\n      align: align,\n      backgroundColor: backgroundColor\n    })\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"p\", {\n    style: {\n      color: textColor\n    }\n  }, text), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"a\", {\n    href: link,\n    style: {\n      color: linkColor\n    }\n  }, linkText));\n}\n\nvar colors = [{\n  name: 'Green',\n  color: '#a3bf61'\n}, {\n  name: 'Orange',\n  color: '#ff7e30'\n}, {\n  name: 'Dark Grey',\n  color: '#3a3a3c'\n}, {\n  name: 'White',\n  color: '#ffffff;'\n}, {\n  name: 'Black',\n  color: '#000000;'\n}];\n\nvar ColorControl = function ColorControl(props) {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"BaseControl\"], {\n    label: props.label\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__[\"ColorPalette\"], {\n    colors: colors,\n    value: props.value,\n    onChange: props.onChange\n  }));\n};\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__[\"registerBlockType\"])('caldera-learn-basic-blocks/call-to-action-editable', {\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Call To Action Editable'),\n  category: 'widgets',\n  supports: {\n    html: false\n  },\n  attributes: {\n    text: {\n      type: 'string',\n      source: 'text',\n      selector: 'p',\n      default: 'Thanks For Reading!'\n    },\n    linkText: {\n      type: 'string',\n      source: 'text',\n      selector: 'a',\n      default: 'Learn More Here.'\n    },\n    link: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'a',\n      attribute: 'href',\n      default: 'https://joshpress.net'\n    },\n    align: {\n      type: 'string',\n      default: 'left'\n    },\n    textColor: {\n      type: 'string'\n    },\n    backgroundColor: {\n      type: 'string'\n    },\n    linkColor: {\n      type: 'string'\n    }\n  },\n  edit: function edit(_ref2) {\n    var attributes = _ref2.attributes,\n        setAttributes = _ref2.setAttributes,\n        isSelected = _ref2.isSelected;\n    var text = attributes.text,\n        linkText = attributes.linkText,\n        link = attributes.link,\n        align = attributes.align,\n        textColor = attributes.textColor,\n        backgroundColor = attributes.backgroundColor,\n        linkColor = attributes.linkColor;\n\n    var onChangeText = function onChangeText(text) {\n      return setAttributes({\n        text: text\n      });\n    };\n\n    var onChangeLinkText = function onChangeLinkText(linkText) {\n      return setAttributes({\n        linkText: linkText\n      });\n    };\n\n    var onChangeLink = function onChangeLink(link) {\n      return setAttributes({\n        link: link\n      });\n    };\n\n    var onChangeAlign = function onChangeAlign(align) {\n      return setAttributes({\n        align: align\n      });\n    };\n\n    var onChangeTextColor = function onChangeTextColor(textColor) {\n      return setAttributes({\n        textColor: textColor\n      });\n    };\n\n    var onChangeBackgroundColor = function onChangeBackgroundColor(backgroundColor) {\n      return setAttributes({\n        backgroundColor: backgroundColor\n      });\n    };\n\n    var onChangeLinkColor = function onChangeLinkColor(linkColor) {\n      return setAttributes({\n        linkColor: linkColor\n      });\n    };\n\n    if (isSelected) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n        label: 'Link Text',\n        value: linkText,\n        onChange: onChangeLinkText\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n        label: 'Link Url',\n        value: link,\n        onChange: onChangeLink\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(ColorControl, {\n        label: 'Text Color',\n        onChange: onChangeTextColor,\n        value: textColor\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(ColorControl, {\n        label: 'Link Color',\n        onChange: onChangeLinkColor,\n        value: linkColor\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(ColorControl, {\n        label: 'Background Color',\n        onChange: onChangeBackgroundColor,\n        value: backgroundColor\n      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__[\"AlignmentToolbar\"], {\n        value: align,\n        onChange: onChangeAlign\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n        label: 'Call To Action Text',\n        value: text,\n        onChange: onChangeText,\n        style: createStyle({\n          align: align\n        })\n      }));\n    }\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(Content, {\n      attributes: attributes\n    });\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(Content, {\n      attributes: attributes\n    });\n  }\n});\n\n//# sourceURL=webpack://cl.%5Bname%5D/./blocks/call-to-action-editable/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\");\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/@babel/runtime-corejs2/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@wordpress/i18n/build-module/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@wordpress/i18n/build-module/index.js ***!
  \************************************************************/
/*! exports provided: setLocaleData, getI18n, dcnpgettext, __, _x, _n, _nx, sprintf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocaleData\", function() { return setLocaleData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getI18n\", function() { return getI18n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dcnpgettext\", function() { return dcnpgettext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__\", function() { return __; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_x\", function() { return _x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_n\", function() { return _n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_nx\", function() { return _nx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sprintf\", function() { return sprintf; });\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jed */ \"./node_modules/jed/jed.js\");\n/* harmony import */ var jed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jed__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memize */ \"./node_modules/memize/index.js\");\n/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n/**\n * External dependencies\n */\n\n\nvar i18n;\n/**\n * Log to console, once per message; or more precisely, per referentially equal\n * argument set. Because Jed throws errors, we log these to the console instead\n * to avoid crashing the application.\n *\n * @param {...*} args Arguments to pass to `console.error`\n */\n\nvar logErrorOnce = memize__WEBPACK_IMPORTED_MODULE_3___default()(console.error); // eslint-disable-line no-console\n\n/**\n * Merges locale data into the Jed instance by domain. Creates a new Jed\n * instance if one has not yet been assigned.\n *\n * @see http://messageformat.github.io/Jed/\n *\n * @param {?Object} localeData Locale data configuration.\n * @param {?string} domain     Domain for which configuration applies.\n */\n\nfunction setLocaleData() {\n  var localeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    '': {}\n  };\n  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';\n\n  if (!i18n) {\n    i18n = new jed__WEBPACK_IMPORTED_MODULE_2___default.a({\n      domain: 'default',\n      locale_data: {\n        default: {}\n      }\n    });\n  }\n\n  i18n.options.locale_data[domain] = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, i18n.options.locale_data[domain], localeData);\n}\n/**\n * Returns the current Jed instance, initializing with a default configuration\n * if not already assigned.\n *\n * @return {Jed} Jed instance.\n */\n\nfunction getI18n() {\n  if (!i18n) {\n    setLocaleData();\n  }\n\n  return i18n;\n}\n/**\n * Wrapper for Jed's `dcnpgettext`, its most qualified function. Absorbs errors\n * which are thrown as the result of invalid translation.\n *\n * @param {?string} domain  Domain to retrieve the translated text.\n * @param {?string} context Context information for the translators.\n * @param {string}  single  Text to translate if non-plural. Used as fallback\n *                          return value on a caught error.\n * @param {?string} plural  The text to be used if the number is plural.\n * @param {?number} number  The number to compare against to use either the\n *                          singular or plural form.\n *\n * @return {string} The translated string.\n */\n\nvar dcnpgettext = memize__WEBPACK_IMPORTED_MODULE_3___default()(function () {\n  var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';\n  var context = arguments.length > 1 ? arguments[1] : undefined;\n  var single = arguments.length > 2 ? arguments[2] : undefined;\n  var plural = arguments.length > 3 ? arguments[3] : undefined;\n  var number = arguments.length > 4 ? arguments[4] : undefined;\n\n  try {\n    return getI18n().dcnpgettext(domain, context, single, plural, number);\n  } catch (error) {\n    logErrorOnce('Jed localization error: \\n\\n' + error.toString());\n    return single;\n  }\n});\n/**\n * Retrieve the translation of text.\n *\n * @see https://developer.wordpress.org/reference/functions/__/\n *\n * @param {string}  text   Text to translate.\n * @param {?string} domain Domain to retrieve the translated text.\n *\n * @return {string} Translated text.\n */\n\nfunction __(text, domain) {\n  return dcnpgettext(domain, undefined, text);\n}\n/**\n * Retrieve translated string with gettext context.\n *\n * @see https://developer.wordpress.org/reference/functions/_x/\n *\n * @param {string}  text    Text to translate.\n * @param {string}  context Context information for the translators.\n * @param {?string} domain  Domain to retrieve the translated text.\n *\n * @return {string} Translated context string without pipe.\n */\n\nfunction _x(text, context, domain) {\n  return dcnpgettext(domain, context, text);\n}\n/**\n * Translates and retrieves the singular or plural form based on the supplied\n * number.\n *\n * @see https://developer.wordpress.org/reference/functions/_n/\n *\n * @param {string}  single The text to be used if the number is singular.\n * @param {string}  plural The text to be used if the number is plural.\n * @param {number}  number The number to compare against to use either the\n *                         singular or plural form.\n * @param {?string} domain Domain to retrieve the translated text.\n *\n * @return {string} The translated singular or plural form.\n */\n\nfunction _n(single, plural, number, domain) {\n  return dcnpgettext(domain, undefined, single, plural, number);\n}\n/**\n * Translates and retrieves the singular or plural form based on the supplied\n * number, with gettext context.\n *\n * @see https://developer.wordpress.org/reference/functions/_nx/\n *\n * @param {string}  single  The text to be used if the number is singular.\n * @param {string}  plural  The text to be used if the number is plural.\n * @param {number}  number  The number to compare against to use either the\n *                          singular or plural form.\n * @param {string}  context Context information for the translators.\n * @param {?string} domain  Domain to retrieve the translated text.\n *\n * @return {string} The translated singular or plural form.\n */\n\nfunction _nx(single, plural, number, context, domain) {\n  return dcnpgettext(domain, context, single, plural, number);\n}\n/**\n * Returns a formatted string. If an error occurs in applying the format, the\n * original format string is returned.\n *\n * @param {string}   format  The format of the string to generate.\n * @param {string[]} ...args Arguments to apply to the format.\n *\n * @see http://www.diveintojavascript.com/projects/javascript-sprintf\n *\n * @return {string} The formatted string.\n */\n\nfunction sprintf(format) {\n  try {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    return jed__WEBPACK_IMPORTED_MODULE_2___default.a.sprintf.apply(jed__WEBPACK_IMPORTED_MODULE_2___default.a, [format].concat(args));\n  } catch (error) {\n    logErrorOnce('Jed sprintf error: \\n\\n' + error.toString());\n    return format;\n  }\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/@wordpress/i18n/build-module/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar TO_STRING = 'toString';\nvar $toString = Function[TO_STRING];\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/jed/jed.js":
/*!*********************************!*\
  !*** ./node_modules/jed/jed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * @preserve jed.js https://github.com/SlexAxton/Jed\n */\n/*\n-----------\nA gettext compatible i18n library for modern JavaScript Applications\n\nby Alex Sexton - AlexSexton [at] gmail - @SlexAxton\n\nMIT License\n\nA jQuery Foundation project - requires CLA to contribute -\nhttps://contribute.jquery.org/CLA/\n\n\n\nJed offers the entire applicable GNU gettext spec'd set of\nfunctions, but also offers some nicer wrappers around them.\nThe api for gettext was written for a language with no function\noverloading, so Jed allows a little more of that.\n\nMany thanks to Joshua I. Miller - unrtst@cpan.org - who wrote\ngettext.js back in 2008. I was able to vet a lot of my ideas\nagainst his. I also made sure Jed passed against his tests\nin order to offer easy upgrades -- jsgettext.berlios.de\n*/\n(function (root, undef) {\n\n  // Set up some underscore-style functions, if you already have\n  // underscore, feel free to delete this section, and use it\n  // directly, however, the amount of functions used doesn't\n  // warrant having underscore as a full dependency.\n  // Underscore 1.3.0 was used to port and is licensed\n  // under the MIT License by Jeremy Ashkenas.\n  var ArrayProto    = Array.prototype,\n      ObjProto      = Object.prototype,\n      slice         = ArrayProto.slice,\n      hasOwnProp    = ObjProto.hasOwnProperty,\n      nativeForEach = ArrayProto.forEach,\n      breaker       = {};\n\n  // We're not using the OOP style _ so we don't need the\n  // extra level of indirection. This still means that you\n  // sub out for real `_` though.\n  var _ = {\n    forEach : function( obj, iterator, context ) {\n      var i, l, key;\n      if ( obj === null ) {\n        return;\n      }\n\n      if ( nativeForEach && obj.forEach === nativeForEach ) {\n        obj.forEach( iterator, context );\n      }\n      else if ( obj.length === +obj.length ) {\n        for ( i = 0, l = obj.length; i < l; i++ ) {\n          if ( i in obj && iterator.call( context, obj[i], i, obj ) === breaker ) {\n            return;\n          }\n        }\n      }\n      else {\n        for ( key in obj) {\n          if ( hasOwnProp.call( obj, key ) ) {\n            if ( iterator.call (context, obj[key], key, obj ) === breaker ) {\n              return;\n            }\n          }\n        }\n      }\n    },\n    extend : function( obj ) {\n      this.forEach( slice.call( arguments, 1 ), function ( source ) {\n        for ( var prop in source ) {\n          obj[prop] = source[prop];\n        }\n      });\n      return obj;\n    }\n  };\n  // END Miniature underscore impl\n\n  // Jed is a constructor function\n  var Jed = function ( options ) {\n    // Some minimal defaults\n    this.defaults = {\n      \"locale_data\" : {\n        \"messages\" : {\n          \"\" : {\n            \"domain\"       : \"messages\",\n            \"lang\"         : \"en\",\n            \"plural_forms\" : \"nplurals=2; plural=(n != 1);\"\n          }\n          // There are no default keys, though\n        }\n      },\n      // The default domain if one is missing\n      \"domain\" : \"messages\",\n      // enable debug mode to log untranslated strings to the console\n      \"debug\" : false\n    };\n\n    // Mix in the sent options with the default options\n    this.options = _.extend( {}, this.defaults, options );\n    this.textdomain( this.options.domain );\n\n    if ( options.domain && ! this.options.locale_data[ this.options.domain ] ) {\n      throw new Error('Text domain set to non-existent domain: `' + options.domain + '`');\n    }\n  };\n\n  // The gettext spec sets this character as the default\n  // delimiter for context lookups.\n  // e.g.: context\\u0004key\n  // If your translation company uses something different,\n  // just change this at any time and it will use that instead.\n  Jed.context_delimiter = String.fromCharCode( 4 );\n\n  function getPluralFormFunc ( plural_form_string ) {\n    return Jed.PF.compile( plural_form_string || \"nplurals=2; plural=(n != 1);\");\n  }\n\n  function Chain( key, i18n ){\n    this._key = key;\n    this._i18n = i18n;\n  }\n\n  // Create a chainable api for adding args prettily\n  _.extend( Chain.prototype, {\n    onDomain : function ( domain ) {\n      this._domain = domain;\n      return this;\n    },\n    withContext : function ( context ) {\n      this._context = context;\n      return this;\n    },\n    ifPlural : function ( num, pkey ) {\n      this._val = num;\n      this._pkey = pkey;\n      return this;\n    },\n    fetch : function ( sArr ) {\n      if ( {}.toString.call( sArr ) != '[object Array]' ) {\n        sArr = [].slice.call(arguments, 0);\n      }\n      return ( sArr && sArr.length ? Jed.sprintf : function(x){ return x; } )(\n        this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val),\n        sArr\n      );\n    }\n  });\n\n  // Add functions to the Jed prototype.\n  // These will be the functions on the object that's returned\n  // from creating a `new Jed()`\n  // These seem redundant, but they gzip pretty well.\n  _.extend( Jed.prototype, {\n    // The sexier api start point\n    translate : function ( key ) {\n      return new Chain( key, this );\n    },\n\n    textdomain : function ( domain ) {\n      if ( ! domain ) {\n        return this._textdomain;\n      }\n      this._textdomain = domain;\n    },\n\n    gettext : function ( key ) {\n      return this.dcnpgettext.call( this, undef, undef, key );\n    },\n\n    dgettext : function ( domain, key ) {\n     return this.dcnpgettext.call( this, domain, undef, key );\n    },\n\n    dcgettext : function ( domain , key /*, category */ ) {\n      // Ignores the category anyways\n      return this.dcnpgettext.call( this, domain, undef, key );\n    },\n\n    ngettext : function ( skey, pkey, val ) {\n      return this.dcnpgettext.call( this, undef, undef, skey, pkey, val );\n    },\n\n    dngettext : function ( domain, skey, pkey, val ) {\n      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );\n    },\n\n    dcngettext : function ( domain, skey, pkey, val/*, category */) {\n      return this.dcnpgettext.call( this, domain, undef, skey, pkey, val );\n    },\n\n    pgettext : function ( context, key ) {\n      return this.dcnpgettext.call( this, undef, context, key );\n    },\n\n    dpgettext : function ( domain, context, key ) {\n      return this.dcnpgettext.call( this, domain, context, key );\n    },\n\n    dcpgettext : function ( domain, context, key/*, category */) {\n      return this.dcnpgettext.call( this, domain, context, key );\n    },\n\n    npgettext : function ( context, skey, pkey, val ) {\n      return this.dcnpgettext.call( this, undef, context, skey, pkey, val );\n    },\n\n    dnpgettext : function ( domain, context, skey, pkey, val ) {\n      return this.dcnpgettext.call( this, domain, context, skey, pkey, val );\n    },\n\n    // The most fully qualified gettext function. It has every option.\n    // Since it has every option, we can use it from every other method.\n    // This is the bread and butter.\n    // Technically there should be one more argument in this function for 'Category',\n    // but since we never use it, we might as well not waste the bytes to define it.\n    dcnpgettext : function ( domain, context, singular_key, plural_key, val ) {\n      // Set some defaults\n\n      plural_key = plural_key || singular_key;\n\n      // Use the global domain default if one\n      // isn't explicitly passed in\n      domain = domain || this._textdomain;\n\n      var fallback;\n\n      // Handle special cases\n\n      // No options found\n      if ( ! this.options ) {\n        // There's likely something wrong, but we'll return the correct key for english\n        // We do this by instantiating a brand new Jed instance with the default set\n        // for everything that could be broken.\n        fallback = new Jed();\n        return fallback.dcnpgettext.call( fallback, undefined, undefined, singular_key, plural_key, val );\n      }\n\n      // No translation data provided\n      if ( ! this.options.locale_data ) {\n        throw new Error('No locale data provided.');\n      }\n\n      if ( ! this.options.locale_data[ domain ] ) {\n        throw new Error('Domain `' + domain + '` was not found.');\n      }\n\n      if ( ! this.options.locale_data[ domain ][ \"\" ] ) {\n        throw new Error('No locale meta information provided.');\n      }\n\n      // Make sure we have a truthy key. Otherwise we might start looking\n      // into the empty string key, which is the options for the locale\n      // data.\n      if ( ! singular_key ) {\n        throw new Error('No translation key found.');\n      }\n\n      var key  = context ? context + Jed.context_delimiter + singular_key : singular_key,\n          locale_data = this.options.locale_data,\n          dict = locale_data[ domain ],\n          defaultConf = (locale_data.messages || this.defaults.locale_data.messages)[\"\"],\n          pluralForms = dict[\"\"].plural_forms || dict[\"\"][\"Plural-Forms\"] || dict[\"\"][\"plural-forms\"] || defaultConf.plural_forms || defaultConf[\"Plural-Forms\"] || defaultConf[\"plural-forms\"],\n          val_list,\n          res;\n\n      var val_idx;\n      if (val === undefined) {\n        // No value passed in; assume singular key lookup.\n        val_idx = 0;\n\n      } else {\n        // Value has been passed in; use plural-forms calculations.\n\n        // Handle invalid numbers, but try casting strings for good measure\n        if ( typeof val != 'number' ) {\n          val = parseInt( val, 10 );\n\n          if ( isNaN( val ) ) {\n            throw new Error('The number that was passed in is not a number.');\n          }\n        }\n\n        val_idx = getPluralFormFunc(pluralForms)(val);\n      }\n\n      // Throw an error if a domain isn't found\n      if ( ! dict ) {\n        throw new Error('No domain named `' + domain + '` could be found.');\n      }\n\n      val_list = dict[ key ];\n\n      // If there is no match, then revert back to\n      // english style singular/plural with the keys passed in.\n      if ( ! val_list || val_idx > val_list.length ) {\n        if (this.options.missing_key_callback) {\n          this.options.missing_key_callback(key, domain);\n        }\n        res = [ singular_key, plural_key ];\n\n        // collect untranslated strings\n        if (this.options.debug===true) {\n          console.log(res[ getPluralFormFunc(pluralForms)( val ) ]);\n        }\n        return res[ getPluralFormFunc()( val ) ];\n      }\n\n      res = val_list[ val_idx ];\n\n      // This includes empty strings on purpose\n      if ( ! res  ) {\n        res = [ singular_key, plural_key ];\n        return res[ getPluralFormFunc()( val ) ];\n      }\n      return res;\n    }\n  });\n\n\n  // We add in sprintf capabilities for post translation value interolation\n  // This is not internally used, so you can remove it if you have this\n  // available somewhere else, or want to use a different system.\n\n  // We _slightly_ modify the normal sprintf behavior to more gracefully handle\n  // undefined values.\n\n  /**\n   sprintf() for JavaScript 0.7-beta1\n   http://www.diveintojavascript.com/projects/javascript-sprintf\n\n   Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>\n   All rights reserved.\n\n   Redistribution and use in source and binary forms, with or without\n   modification, are permitted provided that the following conditions are met:\n       * Redistributions of source code must retain the above copyright\n         notice, this list of conditions and the following disclaimer.\n       * Redistributions in binary form must reproduce the above copyright\n         notice, this list of conditions and the following disclaimer in the\n         documentation and/or other materials provided with the distribution.\n       * Neither the name of sprintf() for JavaScript nor the\n         names of its contributors may be used to endorse or promote products\n         derived from this software without specific prior written permission.\n\n   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND\n   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n   DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY\n   DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n  */\n  var sprintf = (function() {\n    function get_type(variable) {\n      return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();\n    }\n    function str_repeat(input, multiplier) {\n      for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}\n      return output.join('');\n    }\n\n    var str_format = function() {\n      if (!str_format.cache.hasOwnProperty(arguments[0])) {\n        str_format.cache[arguments[0]] = str_format.parse(arguments[0]);\n      }\n      return str_format.format.call(null, str_format.cache[arguments[0]], arguments);\n    };\n\n    str_format.format = function(parse_tree, argv) {\n      var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;\n      for (i = 0; i < tree_length; i++) {\n        node_type = get_type(parse_tree[i]);\n        if (node_type === 'string') {\n          output.push(parse_tree[i]);\n        }\n        else if (node_type === 'array') {\n          match = parse_tree[i]; // convenience purposes only\n          if (match[2]) { // keyword argument\n            arg = argv[cursor];\n            for (k = 0; k < match[2].length; k++) {\n              if (!arg.hasOwnProperty(match[2][k])) {\n                throw(sprintf('[sprintf] property \"%s\" does not exist', match[2][k]));\n              }\n              arg = arg[match[2][k]];\n            }\n          }\n          else if (match[1]) { // positional argument (explicit)\n            arg = argv[match[1]];\n          }\n          else { // positional argument (implicit)\n            arg = argv[cursor++];\n          }\n\n          if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {\n            throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));\n          }\n\n          // Jed EDIT\n          if ( typeof arg == 'undefined' || arg === null ) {\n            arg = '';\n          }\n          // Jed EDIT\n\n          switch (match[8]) {\n            case 'b': arg = arg.toString(2); break;\n            case 'c': arg = String.fromCharCode(arg); break;\n            case 'd': arg = parseInt(arg, 10); break;\n            case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;\n            case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;\n            case 'o': arg = arg.toString(8); break;\n            case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;\n            case 'u': arg = Math.abs(arg); break;\n            case 'x': arg = arg.toString(16); break;\n            case 'X': arg = arg.toString(16).toUpperCase(); break;\n          }\n          arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);\n          pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';\n          pad_length = match[6] - String(arg).length;\n          pad = match[6] ? str_repeat(pad_character, pad_length) : '';\n          output.push(match[5] ? arg + pad : pad + arg);\n        }\n      }\n      return output.join('');\n    };\n\n    str_format.cache = {};\n\n    str_format.parse = function(fmt) {\n      var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;\n      while (_fmt) {\n        if ((match = /^[^\\x25]+/.exec(_fmt)) !== null) {\n          parse_tree.push(match[0]);\n        }\n        else if ((match = /^\\x25{2}/.exec(_fmt)) !== null) {\n          parse_tree.push('%');\n        }\n        else if ((match = /^\\x25(?:([1-9]\\d*)\\$|\\(([^\\)]+)\\))?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {\n          if (match[2]) {\n            arg_names |= 1;\n            var field_list = [], replacement_field = match[2], field_match = [];\n            if ((field_match = /^([a-z_][a-z_\\d]*)/i.exec(replacement_field)) !== null) {\n              field_list.push(field_match[1]);\n              while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {\n                if ((field_match = /^\\.([a-z_][a-z_\\d]*)/i.exec(replacement_field)) !== null) {\n                  field_list.push(field_match[1]);\n                }\n                else if ((field_match = /^\\[(\\d+)\\]/.exec(replacement_field)) !== null) {\n                  field_list.push(field_match[1]);\n                }\n                else {\n                  throw('[sprintf] huh?');\n                }\n              }\n            }\n            else {\n              throw('[sprintf] huh?');\n            }\n            match[2] = field_list;\n          }\n          else {\n            arg_names |= 2;\n          }\n          if (arg_names === 3) {\n            throw('[sprintf] mixing positional and named placeholders is not (yet) supported');\n          }\n          parse_tree.push(match);\n        }\n        else {\n          throw('[sprintf] huh?');\n        }\n        _fmt = _fmt.substring(match[0].length);\n      }\n      return parse_tree;\n    };\n\n    return str_format;\n  })();\n\n  var vsprintf = function(fmt, argv) {\n    argv.unshift(fmt);\n    return sprintf.apply(null, argv);\n  };\n\n  Jed.parse_plural = function ( plural_forms, n ) {\n    plural_forms = plural_forms.replace(/n/g, n);\n    return Jed.parse_expression(plural_forms);\n  };\n\n  Jed.sprintf = function ( fmt, args ) {\n    if ( {}.toString.call( args ) == '[object Array]' ) {\n      return vsprintf( fmt, [].slice.call(args) );\n    }\n    return sprintf.apply(this, [].slice.call(arguments) );\n  };\n\n  Jed.prototype.sprintf = function () {\n    return Jed.sprintf.apply(this, arguments);\n  };\n  // END sprintf Implementation\n\n  // Start the Plural forms section\n  // This is a full plural form expression parser. It is used to avoid\n  // running 'eval' or 'new Function' directly against the plural\n  // forms.\n  //\n  // This can be important if you get translations done through a 3rd\n  // party vendor. I encourage you to use this instead, however, I\n  // also will provide a 'precompiler' that you can use at build time\n  // to output valid/safe function representations of the plural form\n  // expressions. This means you can build this code out for the most\n  // part.\n  Jed.PF = {};\n\n  Jed.PF.parse = function ( p ) {\n    var plural_str = Jed.PF.extractPluralExpr( p );\n    return Jed.PF.parser.parse.call(Jed.PF.parser, plural_str);\n  };\n\n  Jed.PF.compile = function ( p ) {\n    // Handle trues and falses as 0 and 1\n    function imply( val ) {\n      return (val === true ? 1 : val ? val : 0);\n    }\n\n    var ast = Jed.PF.parse( p );\n    return function ( n ) {\n      return imply( Jed.PF.interpreter( ast )( n ) );\n    };\n  };\n\n  Jed.PF.interpreter = function ( ast ) {\n    return function ( n ) {\n      var res;\n      switch ( ast.type ) {\n        case 'GROUP':\n          return Jed.PF.interpreter( ast.expr )( n );\n        case 'TERNARY':\n          if ( Jed.PF.interpreter( ast.expr )( n ) ) {\n            return Jed.PF.interpreter( ast.truthy )( n );\n          }\n          return Jed.PF.interpreter( ast.falsey )( n );\n        case 'OR':\n          return Jed.PF.interpreter( ast.left )( n ) || Jed.PF.interpreter( ast.right )( n );\n        case 'AND':\n          return Jed.PF.interpreter( ast.left )( n ) && Jed.PF.interpreter( ast.right )( n );\n        case 'LT':\n          return Jed.PF.interpreter( ast.left )( n ) < Jed.PF.interpreter( ast.right )( n );\n        case 'GT':\n          return Jed.PF.interpreter( ast.left )( n ) > Jed.PF.interpreter( ast.right )( n );\n        case 'LTE':\n          return Jed.PF.interpreter( ast.left )( n ) <= Jed.PF.interpreter( ast.right )( n );\n        case 'GTE':\n          return Jed.PF.interpreter( ast.left )( n ) >= Jed.PF.interpreter( ast.right )( n );\n        case 'EQ':\n          return Jed.PF.interpreter( ast.left )( n ) == Jed.PF.interpreter( ast.right )( n );\n        case 'NEQ':\n          return Jed.PF.interpreter( ast.left )( n ) != Jed.PF.interpreter( ast.right )( n );\n        case 'MOD':\n          return Jed.PF.interpreter( ast.left )( n ) % Jed.PF.interpreter( ast.right )( n );\n        case 'VAR':\n          return n;\n        case 'NUM':\n          return ast.val;\n        default:\n          throw new Error(\"Invalid Token found.\");\n      }\n    };\n  };\n\n  Jed.PF.extractPluralExpr = function ( p ) {\n    // trim first\n    p = p.replace(/^\\s\\s*/, '').replace(/\\s\\s*$/, '');\n\n    if (! /;\\s*$/.test(p)) {\n      p = p.concat(';');\n    }\n\n    var nplurals_re = /nplurals\\=(\\d+);/,\n        plural_re = /plural\\=(.*);/,\n        nplurals_matches = p.match( nplurals_re ),\n        res = {},\n        plural_matches;\n\n    // Find the nplurals number\n    if ( nplurals_matches.length > 1 ) {\n      res.nplurals = nplurals_matches[1];\n    }\n    else {\n      throw new Error('nplurals not found in plural_forms string: ' + p );\n    }\n\n    // remove that data to get to the formula\n    p = p.replace( nplurals_re, \"\" );\n    plural_matches = p.match( plural_re );\n\n    if (!( plural_matches && plural_matches.length > 1 ) ) {\n      throw new Error('`plural` expression not found: ' + p);\n    }\n    return plural_matches[ 1 ];\n  };\n\n  /* Jison generated parser */\n  Jed.PF.parser = (function(){\n\nvar parser = {trace: function trace() { },\nyy: {},\nsymbols_: {\"error\":2,\"expressions\":3,\"e\":4,\"EOF\":5,\"?\":6,\":\":7,\"||\":8,\"&&\":9,\"<\":10,\"<=\":11,\">\":12,\">=\":13,\"!=\":14,\"==\":15,\"%\":16,\"(\":17,\")\":18,\"n\":19,\"NUMBER\":20,\"$accept\":0,\"$end\":1},\nterminals_: {2:\"error\",5:\"EOF\",6:\"?\",7:\":\",8:\"||\",9:\"&&\",10:\"<\",11:\"<=\",12:\">\",13:\">=\",14:\"!=\",15:\"==\",16:\"%\",17:\"(\",18:\")\",19:\"n\",20:\"NUMBER\"},\nproductions_: [0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],\nperformAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {\n\nvar $0 = $$.length - 1;\nswitch (yystate) {\ncase 1: return { type : 'GROUP', expr: $$[$0-1] };\nbreak;\ncase 2:this.$ = { type: 'TERNARY', expr: $$[$0-4], truthy : $$[$0-2], falsey: $$[$0] };\nbreak;\ncase 3:this.$ = { type: \"OR\", left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 4:this.$ = { type: \"AND\", left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 5:this.$ = { type: 'LT', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 6:this.$ = { type: 'LTE', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 7:this.$ = { type: 'GT', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 8:this.$ = { type: 'GTE', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 9:this.$ = { type: 'NEQ', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 10:this.$ = { type: 'EQ', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 11:this.$ = { type: 'MOD', left: $$[$0-2], right: $$[$0] };\nbreak;\ncase 12:this.$ = { type: 'GROUP', expr: $$[$0-1] };\nbreak;\ncase 13:this.$ = { type: 'VAR' };\nbreak;\ncase 14:this.$ = { type: 'NUM', val: Number(yytext) };\nbreak;\n}\n},\ntable: [{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],\ndefaultActions: {6:[2,1]},\nparseError: function parseError(str, hash) {\n    throw new Error(str);\n},\nparse: function parse(input) {\n    var self = this,\n        stack = [0],\n        vstack = [null], // semantic value stack\n        lstack = [], // location stack\n        table = this.table,\n        yytext = '',\n        yylineno = 0,\n        yyleng = 0,\n        recovering = 0,\n        TERROR = 2,\n        EOF = 1;\n\n    //this.reductionCount = this.shiftCount = 0;\n\n    this.lexer.setInput(input);\n    this.lexer.yy = this.yy;\n    this.yy.lexer = this.lexer;\n    if (typeof this.lexer.yylloc == 'undefined')\n        this.lexer.yylloc = {};\n    var yyloc = this.lexer.yylloc;\n    lstack.push(yyloc);\n\n    if (typeof this.yy.parseError === 'function')\n        this.parseError = this.yy.parseError;\n\n    function popStack (n) {\n        stack.length = stack.length - 2*n;\n        vstack.length = vstack.length - n;\n        lstack.length = lstack.length - n;\n    }\n\n    function lex() {\n        var token;\n        token = self.lexer.lex() || 1; // $end = 1\n        // if token isn't its numeric value, convert\n        if (typeof token !== 'number') {\n            token = self.symbols_[token] || token;\n        }\n        return token;\n    }\n\n    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;\n    while (true) {\n        // retreive state number from top of stack\n        state = stack[stack.length-1];\n\n        // use default actions if available\n        if (this.defaultActions[state]) {\n            action = this.defaultActions[state];\n        } else {\n            if (symbol == null)\n                symbol = lex();\n            // read action for current state and first input\n            action = table[state] && table[state][symbol];\n        }\n\n        // handle parse error\n        _handle_error:\n        if (typeof action === 'undefined' || !action.length || !action[0]) {\n\n            if (!recovering) {\n                // Report error\n                expected = [];\n                for (p in table[state]) if (this.terminals_[p] && p > 2) {\n                    expected.push(\"'\"+this.terminals_[p]+\"'\");\n                }\n                var errStr = '';\n                if (this.lexer.showPosition) {\n                    errStr = 'Parse error on line '+(yylineno+1)+\":\\n\"+this.lexer.showPosition()+\"\\nExpecting \"+expected.join(', ') + \", got '\" + this.terminals_[symbol]+ \"'\";\n                } else {\n                    errStr = 'Parse error on line '+(yylineno+1)+\": Unexpected \" +\n                                  (symbol == 1 /*EOF*/ ? \"end of input\" :\n                                              (\"'\"+(this.terminals_[symbol] || symbol)+\"'\"));\n                }\n                this.parseError(errStr,\n                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});\n            }\n\n            // just recovered from another error\n            if (recovering == 3) {\n                if (symbol == EOF) {\n                    throw new Error(errStr || 'Parsing halted.');\n                }\n\n                // discard current lookahead and grab another\n                yyleng = this.lexer.yyleng;\n                yytext = this.lexer.yytext;\n                yylineno = this.lexer.yylineno;\n                yyloc = this.lexer.yylloc;\n                symbol = lex();\n            }\n\n            // try to recover from error\n            while (1) {\n                // check for error recovery rule in this state\n                if ((TERROR.toString()) in table[state]) {\n                    break;\n                }\n                if (state == 0) {\n                    throw new Error(errStr || 'Parsing halted.');\n                }\n                popStack(1);\n                state = stack[stack.length-1];\n            }\n\n            preErrorSymbol = symbol; // save the lookahead token\n            symbol = TERROR;         // insert generic error symbol as new lookahead\n            state = stack[stack.length-1];\n            action = table[state] && table[state][TERROR];\n            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error\n        }\n\n        // this shouldn't happen, unless resolve defaults are off\n        if (action[0] instanceof Array && action.length > 1) {\n            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);\n        }\n\n        switch (action[0]) {\n\n            case 1: // shift\n                //this.shiftCount++;\n\n                stack.push(symbol);\n                vstack.push(this.lexer.yytext);\n                lstack.push(this.lexer.yylloc);\n                stack.push(action[1]); // push state\n                symbol = null;\n                if (!preErrorSymbol) { // normal execution/no error\n                    yyleng = this.lexer.yyleng;\n                    yytext = this.lexer.yytext;\n                    yylineno = this.lexer.yylineno;\n                    yyloc = this.lexer.yylloc;\n                    if (recovering > 0)\n                        recovering--;\n                } else { // error just occurred, resume old lookahead f/ before error\n                    symbol = preErrorSymbol;\n                    preErrorSymbol = null;\n                }\n                break;\n\n            case 2: // reduce\n                //this.reductionCount++;\n\n                len = this.productions_[action[1]][1];\n\n                // perform semantic action\n                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1\n                // default location, uses first token for firsts, last for lasts\n                yyval._$ = {\n                    first_line: lstack[lstack.length-(len||1)].first_line,\n                    last_line: lstack[lstack.length-1].last_line,\n                    first_column: lstack[lstack.length-(len||1)].first_column,\n                    last_column: lstack[lstack.length-1].last_column\n                };\n                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);\n\n                if (typeof r !== 'undefined') {\n                    return r;\n                }\n\n                // pop off stack\n                if (len) {\n                    stack = stack.slice(0,-1*len*2);\n                    vstack = vstack.slice(0, -1*len);\n                    lstack = lstack.slice(0, -1*len);\n                }\n\n                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)\n                vstack.push(yyval.$);\n                lstack.push(yyval._$);\n                // goto new state = table[STATE][NONTERMINAL]\n                newState = table[stack[stack.length-2]][stack[stack.length-1]];\n                stack.push(newState);\n                break;\n\n            case 3: // accept\n                return true;\n        }\n\n    }\n\n    return true;\n}};/* Jison generated lexer */\nvar lexer = (function(){\n\nvar lexer = ({EOF:1,\nparseError:function parseError(str, hash) {\n        if (this.yy.parseError) {\n            this.yy.parseError(str, hash);\n        } else {\n            throw new Error(str);\n        }\n    },\nsetInput:function (input) {\n        this._input = input;\n        this._more = this._less = this.done = false;\n        this.yylineno = this.yyleng = 0;\n        this.yytext = this.matched = this.match = '';\n        this.conditionStack = ['INITIAL'];\n        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};\n        return this;\n    },\ninput:function () {\n        var ch = this._input[0];\n        this.yytext+=ch;\n        this.yyleng++;\n        this.match+=ch;\n        this.matched+=ch;\n        var lines = ch.match(/\\n/);\n        if (lines) this.yylineno++;\n        this._input = this._input.slice(1);\n        return ch;\n    },\nunput:function (ch) {\n        this._input = ch + this._input;\n        return this;\n    },\nmore:function () {\n        this._more = true;\n        return this;\n    },\npastInput:function () {\n        var past = this.matched.substr(0, this.matched.length - this.match.length);\n        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\\n/g, \"\");\n    },\nupcomingInput:function () {\n        var next = this.match;\n        if (next.length < 20) {\n            next += this._input.substr(0, 20-next.length);\n        }\n        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\\n/g, \"\");\n    },\nshowPosition:function () {\n        var pre = this.pastInput();\n        var c = new Array(pre.length + 1).join(\"-\");\n        return pre + this.upcomingInput() + \"\\n\" + c+\"^\";\n    },\nnext:function () {\n        if (this.done) {\n            return this.EOF;\n        }\n        if (!this._input) this.done = true;\n\n        var token,\n            match,\n            col,\n            lines;\n        if (!this._more) {\n            this.yytext = '';\n            this.match = '';\n        }\n        var rules = this._currentRules();\n        for (var i=0;i < rules.length; i++) {\n            match = this._input.match(this.rules[rules[i]]);\n            if (match) {\n                lines = match[0].match(/\\n.*/g);\n                if (lines) this.yylineno += lines.length;\n                this.yylloc = {first_line: this.yylloc.last_line,\n                               last_line: this.yylineno+1,\n                               first_column: this.yylloc.last_column,\n                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}\n                this.yytext += match[0];\n                this.match += match[0];\n                this.matches = match;\n                this.yyleng = this.yytext.length;\n                this._more = false;\n                this._input = this._input.slice(match[0].length);\n                this.matched += match[0];\n                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);\n                if (token) return token;\n                else return;\n            }\n        }\n        if (this._input === \"\") {\n            return this.EOF;\n        } else {\n            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\\n'+this.showPosition(),\n                    {text: \"\", token: null, line: this.yylineno});\n        }\n    },\nlex:function lex() {\n        var r = this.next();\n        if (typeof r !== 'undefined') {\n            return r;\n        } else {\n            return this.lex();\n        }\n    },\nbegin:function begin(condition) {\n        this.conditionStack.push(condition);\n    },\npopState:function popState() {\n        return this.conditionStack.pop();\n    },\n_currentRules:function _currentRules() {\n        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;\n    },\ntopState:function () {\n        return this.conditionStack[this.conditionStack.length-2];\n    },\npushState:function begin(condition) {\n        this.begin(condition);\n    }});\nlexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {\n\nvar YYSTATE=YY_START;\nswitch($avoiding_name_collisions) {\ncase 0:/* skip whitespace */\nbreak;\ncase 1:return 20\nbreak;\ncase 2:return 19\nbreak;\ncase 3:return 8\nbreak;\ncase 4:return 9\nbreak;\ncase 5:return 6\nbreak;\ncase 6:return 7\nbreak;\ncase 7:return 11\nbreak;\ncase 8:return 13\nbreak;\ncase 9:return 10\nbreak;\ncase 10:return 12\nbreak;\ncase 11:return 14\nbreak;\ncase 12:return 15\nbreak;\ncase 13:return 16\nbreak;\ncase 14:return 17\nbreak;\ncase 15:return 18\nbreak;\ncase 16:return 5\nbreak;\ncase 17:return 'INVALID'\nbreak;\n}\n};\nlexer.rules = [/^\\s+/,/^[0-9]+(\\.[0-9]+)?\\b/,/^n\\b/,/^\\|\\|/,/^&&/,/^\\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\\(/,/^\\)/,/^$/,/^./];\nlexer.conditions = {\"INITIAL\":{\"rules\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],\"inclusive\":true}};return lexer;})()\nparser.lexer = lexer;\nreturn parser;\n})();\n// End parser\n\n  // Handle node, amd, and global systems\n  if (true) {\n    if ( true && module.exports) {\n      exports = module.exports = Jed;\n    }\n    exports.Jed = Jed;\n  }\n  else {}\n\n})(this);\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/jed/jed.js?");

/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function memize( fn, options ) {\n\tvar size = 0,\n\t\tmaxSize, head, tail;\n\n\tif ( options && options.maxSize ) {\n\t\tmaxSize = options.maxSize;\n\t}\n\n\tfunction memoized( /* ...args */ ) {\n\t\tvar node = head,\n\t\t\tlen = arguments.length,\n\t\t\targs, i;\n\n\t\tsearchCache: while ( node ) {\n\t\t\t// Perform a shallow equality test to confirm that whether the node\n\t\t\t// under test is a candidate for the arguments passed. Two arrays\n\t\t\t// are shallowly equal if their length matches and each entry is\n\t\t\t// strictly equal between the two sets. Avoid abstracting to a\n\t\t\t// function which could incur an arguments leaking deoptimization.\n\n\t\t\t// Check whether node arguments match arguments length\n\t\t\tif ( node.args.length !== arguments.length ) {\n\t\t\t\tnode = node.next;\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// Check whether node arguments match arguments values\n\t\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\t\tif ( node.args[ i ] !== arguments[ i ] ) {\n\t\t\t\t\tnode = node.next;\n\t\t\t\t\tcontinue searchCache;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// At this point we can assume we've found a match\n\n\t\t\t// Surface matched node to head if not already\n\t\t\tif ( node !== head ) {\n\t\t\t\t// As tail, shift to previous. Must only shift if not also\n\t\t\t\t// head, since if both head and tail, there is no previous.\n\t\t\t\tif ( node === tail ) {\n\t\t\t\t\ttail = node.prev;\n\t\t\t\t}\n\n\t\t\t\t// Adjust siblings to point to each other. If node was tail,\n\t\t\t\t// this also handles new tail's empty `next` assignment.\n\t\t\t\tnode.prev.next = node.next;\n\t\t\t\tif ( node.next ) {\n\t\t\t\t\tnode.next.prev = node.prev;\n\t\t\t\t}\n\n\t\t\t\tnode.next = head;\n\t\t\t\tnode.prev = null;\n\t\t\t\thead.prev = node;\n\t\t\t\thead = node;\n\t\t\t}\n\n\t\t\t// Return immediately\n\t\t\treturn node.val;\n\t\t}\n\n\t\t// No cached value found. Continue to insertion phase:\n\n\t\t// Create a copy of arguments (avoid leaking deoptimization)\n\t\targs = new Array( len );\n\t\tfor ( i = 0; i < len; i++ ) {\n\t\t\targs[ i ] = arguments[ i ];\n\t\t}\n\n\t\tnode = {\n\t\t\targs: args,\n\n\t\t\t// Generate the result from original function\n\t\t\tval: fn.apply( null, args )\n\t\t};\n\n\t\t// Don't need to check whether node is already head, since it would\n\t\t// have been returned above already if it was\n\n\t\t// Shift existing head down list\n\t\tif ( head ) {\n\t\t\thead.prev = node;\n\t\t\tnode.next = head;\n\t\t} else {\n\t\t\t// If no head, follows that there's no tail (at initial or reset)\n\t\t\ttail = node;\n\t\t}\n\n\t\t// Trim tail if we're reached max size and are pending cache insertion\n\t\tif ( size === maxSize ) {\n\t\t\ttail = tail.prev;\n\t\t\ttail.next = null;\n\t\t} else {\n\t\t\tsize++;\n\t\t}\n\n\t\thead = node;\n\n\t\treturn node.val;\n\t}\n\n\tmemoized.clear = function() {\n\t\thead = null;\n\t\ttail = null;\n\t\tsize = 0;\n\t};\n\n\tif ( false ) {}\n\n\treturn memoized;\n};\n\n\n//# sourceURL=webpack://cl.%5Bname%5D/./node_modules/memize/index.js?");

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack://cl.%5Bname%5D/external_%7B%22this%22:%5B%22wp%22,%22blocks%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack://cl.%5Bname%5D/external_%7B%22this%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"editor\"]; }());\n\n//# sourceURL=webpack://cl.%5Bname%5D/external_%7B%22this%22:%5B%22wp%22,%22editor%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack://cl.%5Bname%5D/external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ })

/******/ });