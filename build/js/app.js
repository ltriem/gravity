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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar halfX = void 0,\n    halfY = void 0,\n    width = void 0,\n    height = void 0;\n\nvar lines = [];\n\nvar linesNumber = 4;\n\nvar vertices = 100;\n\nvar radius = 200;\n\nvar color = \"#390C7A\";\n\nfor (var i = 0; i < linesNumber; i++) {\n    lines[i] = [];\n\n    for (var j = 0; j <= vertices; j++) {\n        var point = {\n            x: Math.cos(j / vertices * Math.PI * 2),\n            y: Math.sin(j / vertices * Math.PI * 2)\n        };\n        lines[i].push(point);\n    };\n}\n\nconsole.log(lines);\n\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\n\ndocument.body.appendChild(canvas);\n\nSizing();\n\nfunction update() {}\n\nfunction render() {\n    ctx.clearRect(0, 0, width, height);\n    ctx.strokeStyle = color;\n\n    for (var _i = 1; _i <= vertices; _i++) {\n        ctx.beginPath();\n        ctx.moveTo(halfX + lines[_i - 1].x * radius, halfY + lines[_i - 1].y * radius);\n        ctx.lineTo(halfX + lines[_i].x * radius, halfY + lines[_i].y * radius);\n\n        ctx.stroke();\n    }\n}\n\nfunction raf() {\n\n    update();\n    render();\n\n    window.requestAnimationFrame(raf);\n}\n\nraf();\n\nfunction Sizing() {\n    width = window.innerWidth;\n    height = window.innerHeight;\n\n    halfX = width / 2;\n    halfY = height / 2;\n\n    canvas.height = height;\n    canvas.width = width;\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBoYWxmWCwgaGFsZlksIHdpZHRoLCBoZWlnaHQ7XG5cbmxldCBsaW5lcyA9IFtdO1xuXG5sZXQgbGluZXNOdW1iZXIgPSA0O1xuXG5sZXQgdmVydGljZXMgPSAxMDA7XG5cbmxldCByYWRpdXMgPSAyMDA7XG5cbmxldCBjb2xvciA9IFwiIzM5MEM3QVwiO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzTnVtYmVyOyBpKyspIHtcbiAgICBsaW5lc1tpXSA9IFtdO1xuICAgXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdmVydGljZXM7IGorKykge1xuICAgICAgICBsZXQgcG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBNYXRoLmNvcyhqL3ZlcnRpY2VzICogTWF0aC5QSSoyKSxcbiAgICAgICAgICAgIHk6IE1hdGguc2luKGovdmVydGljZXMgKiBNYXRoLlBJKjIpLFxuICAgICAgICB9O1xuICAgICAgICBsaW5lc1tpXS5wdXNoKHBvaW50KTtcbiAgICB9O1xufVxuXG5jb25zb2xlLmxvZyhsaW5lcyk7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG5TaXppbmcoKTtcblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2VTdHlsZT1jb2xvcjtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHZlcnRpY2VzOyBpKyspIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGhhbGZYICsgbGluZXNbaS0xXS54KnJhZGl1cyxoYWxmWSArIGxpbmVzW2ktMV0ueSpyYWRpdXMpO1xuICAgICAgICBjdHgubGluZVRvKGhhbGZYICsgbGluZXNbaV0ueCpyYWRpdXMsaGFsZlkgKyBsaW5lc1tpXS55KnJhZGl1cyk7XG5cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxufVxuXG5cbmZ1bmN0aW9uIHJhZigpIHtcblxuICAgIHVwZGF0ZSgpO1xuICAgIHJlbmRlcigpO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpO1xufVxuXG5yYWYoKTtcblxuZnVuY3Rpb24gU2l6aW5nKCkge1xuICAgIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaGFsZlggPSB3aWR0aC8yO1xuICAgIGhhbGZZID0gaGVpZ2h0LzI7XG5cbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });