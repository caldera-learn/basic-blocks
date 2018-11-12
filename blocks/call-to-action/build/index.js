this["cl"] = this["cl"] || {}; this["cl"]["call-to-action"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/call-to-action/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/call-to-action/index.js":
/*!****************************************!*\
  !*** ./blocks/call-to-action/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (wp) {\n  /**\n   * Registers a new block provided a unique name and an object defining its behavior.\n   * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api\n   */\n  var registerBlockType = wp.blocks.registerBlockType;\n  /**\n   * Returns a new element of given type. Element is an abstraction layer atop React.\n   * @see https://github.com/WordPress/gutenberg/tree/master/element#element\n   */\n\n  var el = wp.element.createElement;\n  /**\n   * Retrieves the translation of text.\n   * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api\n   */\n\n  var __ = wp.i18n.__;\n  /**\n   * One function to generate the same content in edit/save\n   *\n   * @return {*}\n   */\n\n  function content() {\n    return el('div', {}, [el('p', {}, __('Thanks for reading my post about Gutenberg!')), el('a', {\n      href: 'https://JoshPress.net'\n    }, __('Learn More About Gutenberg Here'))]);\n  }\n  /**\n   * Every block starts by registering a new block type definition.\n   * @see https://wordpress.org/gutenberg/handbook/block-api/\n   */\n\n\n  registerBlockType('caldera-learn-basic-blocks/call-to-action', {\n    /**\n     * This is the display title for your block, which can be translated with `i18n` functions.\n     * The block inserter will show this name.\n     */\n    title: __('Call To Action'),\n\n    /**\n     * Blocks are grouped into categories to help users browse and discover them.\n     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.\n     */\n    category: 'widgets',\n\n    /**\n     * Optional block extended support features.\n     */\n    supports: {\n      // Removes support for an HTML mode.\n      html: false\n    },\n\n    /**\n     * The edit function describes the structure of your block in the context of the editor.\n     * This represents what the editor will render when the block is used.\n     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit\n     *\n     * @param {Object} [props] Properties passed from the editor.\n     * @return {Element}       Element to render.\n     */\n    edit: function edit(props) {\n      return content();\n    },\n\n    /**\n     * The save function defines the way in which the different attributes should be combined\n     * into the final markup, which is then serialized by Gutenberg into `post_content`.\n     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save\n     *\n     * @return {Element}       Element to render.\n     */\n    save: function save() {\n      return content();\n    }\n  });\n})(window.wp);\n\n//# sourceURL=webpack://cl.%5Bname%5D/./blocks/call-to-action/index.js?");

/***/ })

/******/ });