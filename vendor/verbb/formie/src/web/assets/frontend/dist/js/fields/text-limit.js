/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fields/text-limit.js":
/*!*************************************!*\
  !*** ./src/js/fields/text-limit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormieTextLimit\": () => (/* binding */ FormieTextLimit)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar FormieTextLimit = /*#__PURE__*/function () {\n  function FormieTextLimit() {\n    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, FormieTextLimit);\n\n    this.$form = settings.$form;\n    this.form = this.$form.form;\n    this.$field = settings.$field;\n    this.$text = this.$field.querySelector('[data-limit]');\n    this.$input = this.$field.querySelector('input, textarea');\n\n    if (this.$text) {\n      this.initTextLimits();\n    } else {\n      console.error('Unable to find rich text field “[data-limit]”');\n    }\n  }\n\n  _createClass(FormieTextLimit, [{\n    key: \"initTextLimits\",\n    value: function initTextLimits() {\n      this.maxChars = this.$text.getAttribute('data-max-chars');\n      this.maxWords = this.$text.getAttribute('data-max-words');\n\n      if (this.maxChars) {\n        this.form.addEventListener(this.$input, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.eventKey)('paste'), this.characterCheck.bind(this), false);\n        this.form.addEventListener(this.$input, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.eventKey)('keydown'), this.characterCheck.bind(this), false); // Fire immediately\n\n        this.$input.dispatchEvent(new Event('keydown', {\n          bubbles: true\n        }));\n      }\n\n      if (this.maxWords) {\n        this.form.addEventListener(this.$input, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.eventKey)('paste'), this.wordCheck.bind(this), false);\n        this.form.addEventListener(this.$input, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.eventKey)('keydown'), this.wordCheck.bind(this), false); // Fire immediately\n\n        this.$input.dispatchEvent(new Event('keydown', {\n          bubbles: true\n        }));\n      }\n    }\n  }, {\n    key: \"characterCheck\",\n    value: function characterCheck(e) {\n      var _this = this;\n\n      setTimeout(function () {\n        // If we're using a rich text editor, treat it a little differently\n        var isRichText = e.target.hasAttribute('contenteditable');\n        var value = isRichText ? e.target.innerHTML : e.target.value;\n\n        var charactersLeft = _this.maxChars - _this.count(value);\n\n        var extraClasses = ['fui-limit-number'];\n        var type = charactersLeft == 1 || charactersLeft == -1 ? 'character' : 'characters';\n\n        if (charactersLeft < 0) {\n          extraClasses.push('fui-limit-number-error');\n        }\n\n        _this.$text.innerHTML = t(\"{startTag}{num}{endTag} \".concat(type, \" left\"), {\n          num: String(charactersLeft),\n          startTag: \"<span class=\\\"\".concat(extraClasses.join(' '), \"\\\">\"),\n          endTag: '</span>'\n        });\n      }, 1);\n    }\n  }, {\n    key: \"wordCheck\",\n    value: function wordCheck(e) {\n      var _this2 = this;\n\n      setTimeout(function () {\n        // If we're using a rich text editor, treat it a little differently\n        var isRichText = e.target.hasAttribute('contenteditable');\n        var value = isRichText ? e.target.innerHTML : e.target.value;\n        var wordCount = value.split(/\\S+/).length - 1;\n        var wordsLeft = _this2.maxWords - wordCount;\n        var extraClasses = ['fui-limit-number'];\n        var type = wordsLeft == 1 || wordsLeft == -1 ? 'word' : 'words';\n\n        if (wordsLeft < 0) {\n          extraClasses.push('fui-limit-number-error');\n        }\n\n        _this2.$text.innerHTML = t(\"{startTag}{num}{endTag} \".concat(type, \" left\"), {\n          num: String(wordsLeft),\n          startTag: \"<span class=\\\"\".concat(extraClasses.join(' '), \"\\\">\"),\n          endTag: '</span>'\n        });\n      }, 1);\n    }\n  }, {\n    key: \"count\",\n    value: function count(value) {\n      // Convert any multibyte characters to their HTML entity equivalent to match server-side processing\n      // https://dev.to/nikkimk/converting-utf-including-emoji-to-html-x1f92f-4951\n      return _toConsumableArray(value).map(function (_char) {\n        return _char.codePointAt() > 127 ? \"&#\".concat(_char.codePointAt(), \";\") : _char;\n      }).join('').length;\n    }\n  }]);\n\n  return FormieTextLimit;\n}();\nwindow.FormieTextLimit = FormieTextLimit;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFwQyxHQUE2QyxPQUExRDs7UUFFQSxJQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7VUFDZlosWUFBWSxDQUFDRSxJQUFiLENBQWtCLHdCQUFsQjtRQUNIOztRQUVELE1BQUksQ0FBQzNCLEtBQUwsQ0FBV3NCLFNBQVgsR0FBdUJNLENBQUMsbUNBQTRCRixJQUE1QixZQUF5QztVQUM3REcsR0FBRyxFQUFFQyxNQUFNLENBQUNPLFNBQUQsQ0FEa0Q7VUFFN0ROLFFBQVEsMEJBQWtCTixZQUFZLENBQUNPLElBQWIsQ0FBa0IsR0FBbEIsQ0FBbEIsUUFGcUQ7VUFHN0RDLE1BQU0sRUFBRTtRQUhxRCxDQUF6QyxDQUF4QjtNQUtILENBbEJTLEVBa0JQLENBbEJPLENBQVY7SUFtQkg7RUE3RUw7SUFBQTtJQUFBLE9BK0VJLGVBQU1aLEtBQU4sRUFBYTtNQUNUO01BQ0E7TUFDQSxPQUFPLG1CQUFJQSxLQUFKLEVBQVdpQixHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFVO1FBQUUsT0FBUUEsS0FBSSxDQUFDQyxXQUFMLEtBQXFCLEdBQXJCLGVBQWdDRCxLQUFJLENBQUNDLFdBQUwsRUFBaEMsU0FBd0RELEtBQWhFO01BQXdFLENBQW5HLEVBQXFHUCxJQUFyRyxDQUEwRyxFQUExRyxFQUE4R0ksTUFBckg7SUFDSDtFQW5GTDs7RUFBQTtBQUFBO0FBc0ZBSyxNQUFNLENBQUM5QyxlQUFQLEdBQXlCQSxlQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9maWVsZHMvdGV4dC1saW1pdC5qcz9hMDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2ZW50S2V5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRm9ybWllVGV4dExpbWl0IHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSBzZXR0aW5ncy4kZm9ybTtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy4kZm9ybS5mb3JtO1xuICAgICAgICB0aGlzLiRmaWVsZCA9IHNldHRpbmdzLiRmaWVsZDtcbiAgICAgICAgdGhpcy4kdGV4dCA9IHRoaXMuJGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpbWl0XScpO1xuICAgICAgICB0aGlzLiRpbnB1dCA9IHRoaXMuJGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LCB0ZXh0YXJlYScpO1xuXG4gICAgICAgIGlmICh0aGlzLiR0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRUZXh0TGltaXRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmluZCByaWNoIHRleHQgZmllbGQg4oCcW2RhdGEtbGltaXRd4oCdJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0VGV4dExpbWl0cygpIHtcbiAgICAgICAgdGhpcy5tYXhDaGFycyA9IHRoaXMuJHRleHQuZ2V0QXR0cmlidXRlKCdkYXRhLW1heC1jaGFycycpO1xuICAgICAgICB0aGlzLm1heFdvcmRzID0gdGhpcy4kdGV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4LXdvcmRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4Q2hhcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKHRoaXMuJGlucHV0LCBldmVudEtleSgncGFzdGUnKSwgdGhpcy5jaGFyYWN0ZXJDaGVjay5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLiRpbnB1dCwgZXZlbnRLZXkoJ2tleWRvd24nKSwgdGhpcy5jaGFyYWN0ZXJDaGVjay5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHRoaXMuJGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdrZXlkb3duJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heFdvcmRzKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLiRpbnB1dCwgZXZlbnRLZXkoJ3Bhc3RlJyksIHRoaXMud29yZENoZWNrLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKHRoaXMuJGlucHV0LCBldmVudEtleSgna2V5ZG93bicpLCB0aGlzLndvcmRDaGVjay5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHRoaXMuJGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdrZXlkb3duJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYXJhY3RlckNoZWNrKGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyBhIHJpY2ggdGV4dCBlZGl0b3IsIHRyZWF0IGl0IGEgbGl0dGxlIGRpZmZlcmVudGx5XG4gICAgICAgICAgICBjb25zdCBpc1JpY2hUZXh0ID0gZS50YXJnZXQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXNSaWNoVGV4dCA/IGUudGFyZ2V0LmlubmVySFRNTCA6IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyc0xlZnQgPSB0aGlzLm1heENoYXJzIC0gdGhpcy5jb3VudCh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBleHRyYUNsYXNzZXMgPSBbJ2Z1aS1saW1pdC1udW1iZXInXTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBjaGFyYWN0ZXJzTGVmdCA9PSAxIHx8IGNoYXJhY3RlcnNMZWZ0ID09IC0xID8gJ2NoYXJhY3RlcicgOiAnY2hhcmFjdGVycyc7XG5cbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzTGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICBleHRyYUNsYXNzZXMucHVzaCgnZnVpLWxpbWl0LW51bWJlci1lcnJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiR0ZXh0LmlubmVySFRNTCA9IHQoYHtzdGFydFRhZ317bnVtfXtlbmRUYWd9ICR7dHlwZX0gbGVmdGAsIHtcbiAgICAgICAgICAgICAgICBudW06IFN0cmluZyhjaGFyYWN0ZXJzTGVmdCksXG4gICAgICAgICAgICAgICAgc3RhcnRUYWc6IGA8c3BhbiBjbGFzcz1cIiR7ZXh0cmFDbGFzc2VzLmpvaW4oJyAnKX1cIj5gLFxuICAgICAgICAgICAgICAgIGVuZFRhZzogJzwvc3Bhbj4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHdvcmRDaGVjayhlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgYSByaWNoIHRleHQgZWRpdG9yLCB0cmVhdCBpdCBhIGxpdHRsZSBkaWZmZXJlbnRseVxuICAgICAgICAgICAgY29uc3QgaXNSaWNoVGV4dCA9IGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlzUmljaFRleHQgPyBlLnRhcmdldC5pbm5lckhUTUwgOiBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRDb3VudCA9IHZhbHVlLnNwbGl0KC9cXFMrLykubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzTGVmdCA9IHRoaXMubWF4V29yZHMgLSB3b3JkQ291bnQ7XG4gICAgICAgICAgICBjb25zdCBleHRyYUNsYXNzZXMgPSBbJ2Z1aS1saW1pdC1udW1iZXInXTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB3b3Jkc0xlZnQgPT0gMSB8fCB3b3Jkc0xlZnQgPT0gLTEgPyAnd29yZCcgOiAnd29yZHMnO1xuXG4gICAgICAgICAgICBpZiAod29yZHNMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKCdmdWktbGltaXQtbnVtYmVyLWVycm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHRleHQuaW5uZXJIVE1MID0gdChge3N0YXJ0VGFnfXtudW19e2VuZFRhZ30gJHt0eXBlfSBsZWZ0YCwge1xuICAgICAgICAgICAgICAgIG51bTogU3RyaW5nKHdvcmRzTGVmdCksXG4gICAgICAgICAgICAgICAgc3RhcnRUYWc6IGA8c3BhbiBjbGFzcz1cIiR7ZXh0cmFDbGFzc2VzLmpvaW4oJyAnKX1cIj5gLFxuICAgICAgICAgICAgICAgIGVuZFRhZzogJzwvc3Bhbj4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGNvdW50KHZhbHVlKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYW55IG11bHRpYnl0ZSBjaGFyYWN0ZXJzIHRvIHRoZWlyIEhUTUwgZW50aXR5IGVxdWl2YWxlbnQgdG8gbWF0Y2ggc2VydmVyLXNpZGUgcHJvY2Vzc2luZ1xuICAgICAgICAvLyBodHRwczovL2Rldi50by9uaWtraW1rL2NvbnZlcnRpbmctdXRmLWluY2x1ZGluZy1lbW9qaS10by1odG1sLXgxZjkyZi00OTUxXG4gICAgICAgIHJldHVybiBbLi4udmFsdWVdLm1hcCgoY2hhcikgPT4geyByZXR1cm4gKGNoYXIuY29kZVBvaW50QXQoKSA+IDEyNyA/IGAmIyR7Y2hhci5jb2RlUG9pbnRBdCgpfTtgIDogY2hhcik7IH0pLmpvaW4oJycpLmxlbmd0aDtcbiAgICB9XG59XG5cbndpbmRvdy5Gb3JtaWVUZXh0TGltaXQgPSBGb3JtaWVUZXh0TGltaXQ7XG4iXSwibmFtZXMiOlsiZXZlbnRLZXkiLCJGb3JtaWVUZXh0TGltaXQiLCJzZXR0aW5ncyIsIiRmb3JtIiwiZm9ybSIsIiRmaWVsZCIsIiR0ZXh0IiwicXVlcnlTZWxlY3RvciIsIiRpbnB1dCIsImluaXRUZXh0TGltaXRzIiwiY29uc29sZSIsImVycm9yIiwibWF4Q2hhcnMiLCJnZXRBdHRyaWJ1dGUiLCJtYXhXb3JkcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFyYWN0ZXJDaGVjayIsImJpbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwid29yZENoZWNrIiwiZSIsInNldFRpbWVvdXQiLCJpc1JpY2hUZXh0IiwidGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJjaGFyYWN0ZXJzTGVmdCIsImNvdW50IiwiZXh0cmFDbGFzc2VzIiwidHlwZSIsInB1c2giLCJ0IiwibnVtIiwiU3RyaW5nIiwic3RhcnRUYWciLCJqb2luIiwiZW5kVGFnIiwid29yZENvdW50Iiwic3BsaXQiLCJsZW5ndGgiLCJ3b3Jkc0xlZnQiLCJtYXAiLCJjaGFyIiwiY29kZVBvaW50QXQiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fields/text-limit.js\n");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventKey\": () => (/* binding */ eventKey),\n/* harmony export */   \"isEmpty\": () => (/* binding */ isEmpty),\n/* harmony export */   \"toBoolean\": () => (/* binding */ toBoolean)\n/* harmony export */ });\nvar isEmpty = function isEmpty(obj) {\n  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;\n};\nvar toBoolean = function toBoolean(val) {\n  return !/^(?:f(?:alse)?|no?|0+)$/i.test(val) && !!val;\n};\nvar eventKey = function eventKey(eventName) {\n  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  if (!namespace) {\n    namespace = Math.random().toString(36).substr(2, 5);\n  }\n\n  return \"\".concat(eventName, \".\").concat(namespace);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU0MsR0FBVCxFQUFjO0VBQ2pDLE9BQU9BLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE1BQWpCLEtBQTRCLENBQW5DLElBQXdDSCxHQUFHLENBQUNJLFdBQUosS0FBb0JILE1BQW5FO0FBQ0gsQ0FGTTtBQUlBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNDLEdBQVQsRUFBYztFQUNuQyxPQUFPLENBQUMsMkJBQTJCQyxJQUEzQixDQUFnQ0QsR0FBaEMsQ0FBRCxJQUF5QyxDQUFDLENBQUNBLEdBQWxEO0FBQ0gsQ0FGTTtBQUlBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLFNBQVQsRUFBc0M7RUFBQSxJQUFsQkMsU0FBa0IsdUVBQU4sSUFBTTs7RUFDMUQsSUFBSSxDQUFDQSxTQUFMLEVBQWdCO0lBQ1pBLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQVo7RUFDSDs7RUFFRCxpQkFBVUwsU0FBVixjQUF1QkMsU0FBdkI7QUFDSCxDQU5NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzP2Q5ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IHRvQm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiAhL14oPzpmKD86YWxzZSk/fG5vP3wwKykkL2kudGVzdCh2YWwpICYmICEhdmFsO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50S2V5ID0gZnVuY3Rpb24oZXZlbnROYW1lLCBuYW1lc3BhY2UgPSBudWxsKSB7XG4gICAgaWYgKCFuYW1lc3BhY2UpIHtcbiAgICAgICAgbmFtZXNwYWNlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtldmVudE5hbWV9LiR7bmFtZXNwYWNlfWA7XG59O1xuIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ0b0Jvb2xlYW4iLCJ2YWwiLCJ0ZXN0IiwiZXZlbnRLZXkiLCJldmVudE5hbWUiLCJuYW1lc3BhY2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/utils.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/fields/text-limit.js");
/******/ 	
/******/ })()
;