module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/1-layout/ClientPass.tsx":
/*!********************************************!*\
  !*** ./components/1-layout/ClientPass.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_slices_WindowSizeSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/slices/WindowSizeSlice */ \"./redux/slices/WindowSizeSlice.tsx\");\n// React\n // Redux\n\n\n // React Types\n\nconst ClientOnly = ({\n  children\n}) => {\n  const {\n    WindowSize: {\n      width,\n      height\n    }\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch(Object(_redux_slices_WindowSizeSlice__WEBPACK_IMPORTED_MODULE_2__[\"setDimensions\"])({\n      width: window.innerWidth,\n      height: window.innerHeight\n    }));\n  }, []);\n\n  if (width === 0 || height === 0) {\n    return null;\n  }\n\n  return children;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientOnly);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzLzEtbGF5b3V0L0NsaWVudFBhc3MudHN4PzFlMmEiXSwibmFtZXMiOlsiQ2xpZW50T25seSIsImNoaWxkcmVuIiwiV2luZG93U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJzZXREaW1lbnNpb25zIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBO0NBR0E7O0FBTUEsTUFBTUEsVUFBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXVCO0FBQzVDLFFBQU07QUFDSkMsY0FBVSxFQUFFO0FBQUVDLFdBQUY7QUFBU0M7QUFBVDtBQURSLE1BRUZDLCtEQUFXLENBQXNCQyxLQUFELElBQVdBLEtBQWhDLENBRmY7QUFHQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRLENBQ05HLG1GQUFhLENBQUM7QUFDWlAsV0FBSyxFQUFFUSxNQUFNLENBQUNDLFVBREY7QUFFWlIsWUFBTSxFQUFFTyxNQUFNLENBQUNFO0FBRkgsS0FBRCxDQURQLENBQVI7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQUlWLEtBQUssS0FBSyxDQUFWLElBQWVDLE1BQU0sS0FBSyxDQUE5QixFQUFpQztBQUMvQixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPSCxRQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJlRCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvMS1sYXlvdXQvQ2xpZW50UGFzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdFxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0RGltZW5zaW9ucyB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9XaW5kb3dTaXplU2xpY2UnO1xuXG4vLyBSZWFjdCBUeXBlc1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFJlZHV4IFR5cGVzXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcblxuY29uc3QgQ2xpZW50T25seTogRkMgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgY29uc3Qge1xuICAgIFdpbmRvd1NpemU6IHsgd2lkdGgsIGhlaWdodCB9LFxuICB9ID0gdXNlU2VsZWN0b3I8QXBwU3RhdGUsIEFwcFN0YXRlPigoc3RhdGUpID0+IHN0YXRlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBzZXREaW1lbnNpb25zKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gY2hpbGRyZW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRPbmx5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/1-layout/ClientPass.tsx\n");

/***/ }),

/***/ "./components/1-layout/Layout.tsx":
/*!****************************************!*\
  !*** ./components/1-layout/Layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ClientPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientPass */ \"./components/1-layout/ClientPass.tsx\");\n\nvar _jsxFileName = \"/Users/marleykanui/Desktop/valentines/valentines-card/components/1-layout/Layout.tsx\";\n// React\n // Components\n\n // React Types\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"fixed inset-0 h-full max-w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center items-center container mx-auto h-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ClientPass__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzLzEtbGF5b3V0L0xheW91dC50c3g/YWQwYyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQVFBLE1BQU1BLE1BQXVCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDaEQsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQywyREFBZjtBQUFBLCtCQUNFLHFFQUFDLG1EQUFEO0FBQUEsb0JBQWFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FWRDs7QUFZZUQscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzLzEtbGF5b3V0L0xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdFxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBDbGllbnRQYXNzIGZyb20gJy4vQ2xpZW50UGFzcyc7XG5cbi8vIFJlYWN0IFR5cGVzXG5pbXBvcnQgeyBSZWFjdE5vZGUsIEZDIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBDb21wb25lbnQgTGV2ZWwgVHlwZXNcbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IExheW91dDogRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBoLWZ1bGwgbWF4LXctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvIGgtZnVsbFwiPlxuICAgICAgICAgIDxDbGllbnRQYXNzPntjaGlsZHJlbn08L0NsaWVudFBhc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/1-layout/Layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.tsx\");\n/* harmony import */ var _components_1_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/1-layout/Layout */ \"./components/1-layout/Layout.tsx\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_4_about_scss_0_about_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/4-about-scss/0-about.scss */ \"./styles/4-about-scss/0-about.scss\");\n/* harmony import */ var _styles_4_about_scss_0_about_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_4_about_scss_0_about_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/marleykanui/Desktop/valentines/valentines-card/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Store\n // Global Components\n\n // React Types\n\n// Global Styles\n\n // Page Styles\n\n\n\nconst ValentinesCard = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_1_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store__WEBPACK_IMPORTED_MODULE_1__[\"wrapper\"].withRedux(ValentinesCard));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIlZhbGVudGluZXNDYXJkIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQU1BO0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNQSxjQUE0QixHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDakUsc0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCSixjQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdG9yZVxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcblxuLy8gR2xvYmFsIENvbXBvbmVudHNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy8xLWxheW91dC9MYXlvdXQnO1xuXG4vLyBSZWFjdCBUeXBlc1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbi8vIE5leHQgVHlwZXNcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5cbi8vIEdsb2JhbCBTdHlsZXNcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuXG4vLyBQYWdlIFN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvNC1hYm91dC1zY3NzLzAtYWJvdXQuc2Nzcyc7XG5cbmNvbnN0IFZhbGVudGluZXNDYXJkOiBGQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFZhbGVudGluZXNDYXJkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/rootReducer.tsx":
/*!*******************************!*\
  !*** ./redux/rootReducer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_WindowSizeSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/WindowSizeSlice */ \"./redux/slices/WindowSizeSlice.tsx\");\n/* harmony import */ var _slices_MenuTransitionSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/MenuTransitionSlice */ \"./redux/slices/MenuTransitionSlice.tsx\");\n// Redux Toolkit\n // Reducers\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  [_slices_WindowSizeSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name]: _slices_WindowSizeSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reducer,\n  [_slices_MenuTransitionSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name]: _slices_MenuTransitionSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reducer\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290UmVkdWNlci50c3g/OGU4MiJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIldpbmRvd1NpemUiLCJuYW1lIiwicmVkdWNlciIsIk1lbnVUcmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDLEdBQUNDLCtEQUFVLENBQUNDLElBQVosR0FBbUJELCtEQUFVLENBQUNFLE9BREk7QUFFbEMsR0FBQ0MsbUVBQWMsQ0FBQ0YsSUFBaEIsR0FBdUJFLG1FQUFjLENBQUNEO0FBRkosQ0FBRCxDQUFuQztBQU9lSiwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3Jvb3RSZWR1Y2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZHV4IFRvb2xraXRcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuLy8gUmVkdWNlcnNcbmltcG9ydCBXaW5kb3dTaXplIGZyb20gJy4vc2xpY2VzL1dpbmRvd1NpemVTbGljZSc7XG5pbXBvcnQgTWVudVRyYW5zaXRpb24gZnJvbSAnLi9zbGljZXMvTWVudVRyYW5zaXRpb25TbGljZSc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgW1dpbmRvd1NpemUubmFtZV06IFdpbmRvd1NpemUucmVkdWNlcixcbiAgW01lbnVUcmFuc2l0aW9uLm5hbWVdOiBNZW51VHJhbnNpdGlvbi5yZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/rootReducer.tsx\n");

/***/ }),

/***/ "./redux/slices/MenuTransitionSlice.tsx":
/*!**********************************************!*\
  !*** ./redux/slices/MenuTransitionSlice.tsx ***!
  \**********************************************/
/*! exports provided: enterMenu, exitMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enterMenu\", function() { return enterMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exitMenu\", function() { return exitMenu; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Redux Toolkit\n // Next Redux Wrapper\n\n // Redux Types\n\nconst hydrate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]);\nconst MenuTransition = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'MenuTransition',\n  initialState: {\n    transition: false\n  },\n  reducers: {\n    enterMenu: (state, action) => {\n      const {\n        transition\n      } = action.payload;\n      state.transition = transition;\n    },\n    exitMenu: (state, action) => {\n      const {\n        transition\n      } = action.payload;\n      state.transition = transition;\n    }\n  },\n\n  extraReducers(builder) {\n    builder.addCase(hydrate, (state, action) => {\n      console.log('HYDRATE', state, action.payload);\n      return _objectSpread(_objectSpread({}, state), action.payload[MenuTransition.name]);\n    });\n  }\n\n});\nconst {\n  enterMenu,\n  exitMenu\n} = MenuTransition.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuTransition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zbGljZXMvTWVudVRyYW5zaXRpb25TbGljZS50c3g/Y2FhOSJdLCJuYW1lcyI6WyJoeWRyYXRlIiwiY3JlYXRlQWN0aW9uIiwiSFlEUkFURSIsIk1lbnVUcmFuc2l0aW9uIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidHJhbnNpdGlvbiIsInJlZHVjZXJzIiwiZW50ZXJNZW51Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXhpdE1lbnUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBUUEsTUFBTUEsT0FBTyxHQUFHQyxxRUFBWSxDQUFXQywwREFBWCxDQUE1QjtBQUVBLE1BQU1DLGNBQWMsR0FBR0Msb0VBQVcsQ0FBQztBQUNqQ0MsTUFBSSxFQUFFLGdCQUQyQjtBQUVqQ0MsY0FBWSxFQUFFO0FBQUVDLGNBQVUsRUFBRTtBQUFkLEdBRm1CO0FBR2pDQyxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUF1RDtBQUNoRSxZQUFNO0FBQUVKO0FBQUYsVUFBaUJJLE1BQU0sQ0FBQ0MsT0FBOUI7QUFDQUYsV0FBSyxDQUFDSCxVQUFOLEdBQW1CQSxVQUFuQjtBQUNELEtBSk87QUFLUk0sWUFBUSxFQUFFLENBQUNILEtBQUQsRUFBUUMsTUFBUixLQUF1RDtBQUMvRCxZQUFNO0FBQUVKO0FBQUYsVUFBaUJJLE1BQU0sQ0FBQ0MsT0FBOUI7QUFDQUYsV0FBSyxDQUFDSCxVQUFOLEdBQW1CQSxVQUFuQjtBQUNEO0FBUk8sR0FIdUI7O0FBYWpDTyxlQUFhLENBQUNDLE9BQUQsRUFBVTtBQUNyQkEsV0FBTyxDQUFDQyxPQUFSLENBQWdCaEIsT0FBaEIsRUFBeUIsQ0FBQ1UsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzFDTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUixLQUF2QixFQUE4QkMsTUFBTSxDQUFDQyxPQUFyQztBQUNBLDZDQUNLRixLQURMLEdBRUtDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVCxjQUFjLENBQUNFLElBQTlCLENBRkw7QUFJRCxLQU5EO0FBT0Q7O0FBckJnQyxDQUFELENBQWxDO0FBd0JPLE1BQU07QUFBRUksV0FBRjtBQUFhSTtBQUFiLElBQTBCVixjQUFjLENBQUNnQixPQUEvQztBQUVRaEIsNkVBQWYiLCJmaWxlIjoiLi9yZWR1eC9zbGljZXMvTWVudVRyYW5zaXRpb25TbGljZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWR1eCBUb29sa2l0XG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbi8vIE5leHQgUmVkdXggV3JhcHBlclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbi8vIFJlZHV4IFR5cGVzXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcblxuLy8gVHlwZXNcbmludGVyZmFjZSBNZW51VHJhbnNpdGlvblByb3BzIHtcbiAgdHJhbnNpdGlvbjogYm9vbGVhbjtcbn1cblxuY29uc3QgaHlkcmF0ZSA9IGNyZWF0ZUFjdGlvbjxBcHBTdGF0ZT4oSFlEUkFURSk7XG5cbmNvbnN0IE1lbnVUcmFuc2l0aW9uID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnTWVudVRyYW5zaXRpb24nLFxuICBpbml0aWFsU3RhdGU6IHsgdHJhbnNpdGlvbjogZmFsc2UgfSBhcyBNZW51VHJhbnNpdGlvblByb3BzLFxuICByZWR1Y2Vyczoge1xuICAgIGVudGVyTWVudTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TWVudVRyYW5zaXRpb25Qcm9wcz4pID0+IHtcbiAgICAgIGNvbnN0IHsgdHJhbnNpdGlvbiB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9LFxuICAgIGV4aXRNZW51OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxNZW51VHJhbnNpdGlvblByb3BzPikgPT4ge1xuICAgICAgY29uc3QgeyB0cmFuc2l0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnMoYnVpbGRlcikge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShoeWRyYXRlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkW01lbnVUcmFuc2l0aW9uLm5hbWVdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBlbnRlck1lbnUsIGV4aXRNZW51IH0gPSBNZW51VHJhbnNpdGlvbi5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51VHJhbnNpdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/slices/MenuTransitionSlice.tsx\n");

/***/ }),

/***/ "./redux/slices/WindowSizeSlice.tsx":
/*!******************************************!*\
  !*** ./redux/slices/WindowSizeSlice.tsx ***!
  \******************************************/
/*! exports provided: setDimensions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDimensions\", function() { return setDimensions; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Redux Toolkit\n // Next Redux Wrapper\n\n // Redux Types\n\nconst hydrate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]);\nconst WindowSize = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'WindowSize',\n  initialState: {\n    width: 0,\n    height: 0\n  },\n  reducers: {\n    setDimensions: (state, action) => {\n      const {\n        width,\n        height\n      } = action.payload;\n      state.width = width;\n      state.height = height;\n    }\n  },\n\n  extraReducers(builder) {\n    builder.addCase(hydrate, (state, action) => {\n      console.log('HYDRATE', state, action.payload);\n      return _objectSpread(_objectSpread({}, state), action.payload[WindowSize.name]);\n    });\n  }\n\n});\nconst {\n  setDimensions\n} = WindowSize.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindowSize);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zbGljZXMvV2luZG93U2l6ZVNsaWNlLnRzeD8wYTljIl0sIm5hbWVzIjpbImh5ZHJhdGUiLCJjcmVhdGVBY3Rpb24iLCJIWURSQVRFIiwiV2luZG93U2l6ZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVkdWNlcnMiLCJzZXREaW1lbnNpb25zIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBU0EsTUFBTUEsT0FBTyxHQUFHQyxxRUFBWSxDQUFXQywwREFBWCxDQUE1QjtBQUVBLE1BQU1DLFVBQVUsR0FBR0Msb0VBQVcsQ0FBQztBQUM3QkMsTUFBSSxFQUFFLFlBRHVCO0FBRTdCQyxjQUFZLEVBQUU7QUFBRUMsU0FBSyxFQUFFLENBQVQ7QUFBWUMsVUFBTSxFQUFFO0FBQXBCLEdBRmU7QUFHN0JDLFVBQVEsRUFBRTtBQUNSQyxpQkFBYSxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtRDtBQUNoRSxZQUFNO0FBQUVMLGFBQUY7QUFBU0M7QUFBVCxVQUFvQkksTUFBTSxDQUFDQyxPQUFqQztBQUNBRixXQUFLLENBQUNKLEtBQU4sR0FBY0EsS0FBZDtBQUNBSSxXQUFLLENBQUNILE1BQU4sR0FBZUEsTUFBZjtBQUNEO0FBTE8sR0FIbUI7O0FBVTdCTSxlQUFhLENBQUNDLE9BQUQsRUFBVTtBQUNyQkEsV0FBTyxDQUFDQyxPQUFSLENBQWdCaEIsT0FBaEIsRUFBeUIsQ0FBQ1csS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzFDSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUCxLQUF2QixFQUE4QkMsTUFBTSxDQUFDQyxPQUFyQztBQUNBLDZDQUNLRixLQURMLEdBRUtDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVixVQUFVLENBQUNFLElBQTFCLENBRkw7QUFJRCxLQU5EO0FBT0Q7O0FBbEI0QixDQUFELENBQTlCO0FBcUJPLE1BQU07QUFBRUs7QUFBRixJQUFvQlAsVUFBVSxDQUFDZ0IsT0FBckM7QUFFUWhCLHlFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvc2xpY2VzL1dpbmRvd1NpemVTbGljZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWR1eCBUb29sa2l0XG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbi8vIE5leHQgUmVkdXggV3JhcHBlclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbi8vIFJlZHV4IFR5cGVzXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcblxuLy8gVHlwZXNcbmludGVyZmFjZSBXaW5kb3dTaXplUHJvcHMge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuY29uc3QgaHlkcmF0ZSA9IGNyZWF0ZUFjdGlvbjxBcHBTdGF0ZT4oSFlEUkFURSk7XG5cbmNvbnN0IFdpbmRvd1NpemUgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdXaW5kb3dTaXplJyxcbiAgaW5pdGlhbFN0YXRlOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSBhcyBXaW5kb3dTaXplUHJvcHMsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0RGltZW5zaW9uczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248V2luZG93U2l6ZVByb3BzPikgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLndpZHRoID0gd2lkdGg7XG4gICAgICBzdGF0ZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VycyhidWlsZGVyKSB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGh5ZHJhdGUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRbV2luZG93U2l6ZS5uYW1lXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0RGltZW5zaW9ucyB9ID0gV2luZG93U2l6ZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dTaXplO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slices/WindowSizeSlice.tsx\n");

/***/ }),

/***/ "./redux/store.tsx":
/*!*************************!*\
  !*** ./redux/store.tsx ***!
  \*************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ \"./redux/rootReducer.tsx\");\n// Redux Toolkit\n // Redux\n\n// Next Redux Wrapper\n // Root Reducer\n\n\n\nconst makeStore = () => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS50c3g/MWUwNiJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJyb290UmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBR0E7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTUMsdUVBQWMsQ0FBQztBQUFFQyxTQUFPLEVBQUVDLG9EQUFXQTtBQUF0QixDQUFELENBQXRDOztBQVdPLE1BQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0wsU0FBRCxDQUE3QiIsImZpbGUiOiIuL3JlZHV4L3N0b3JlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZHV4IFRvb2xraXRcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBOZXh0IFJlZHV4IFdyYXBwZXJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG4vLyBSb290IFJlZHVjZXJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcblxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gY29uZmlndXJlU3RvcmUoeyByZWR1Y2VyOiByb290UmVkdWNlciB9KTtcblxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlWydnZXRTdGF0ZSddPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBBcHBTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uXG4+O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.tsx\n");

/***/ }),

/***/ "./styles/4-about-scss/0-about.scss":
/*!******************************************!*\
  !*** ./styles/4-about-scss/0-about.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy80LWFib3V0LXNjc3MvMC1hYm91dC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/4-about-scss/0-about.scss\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globals.scss\n");

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/tailwind.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });