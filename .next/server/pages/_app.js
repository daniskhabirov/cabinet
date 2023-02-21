"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/appBar.js":
/*!******************************!*\
  !*** ./components/appBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n\n\n\n\nconst Layout = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"appBar__Layout\",\n    componentId: \"sc-8e815d24-0\"\n})`\r\n    background-color: #303b44;\r\n    padding: 0.75rem;\r\n    display: flex;\r\n    justify-content: space-around;\r\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"appBar__Container\",\n    componentId: \"sc-8e815d24-1\"\n})`\r\n    width: 1096px;\r\n`;\nconst TabPanel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"appBar__TabPanel\",\n    componentId: \"sc-8e815d24-2\"\n})`\r\n    display: flex;\r\n    justify-content: space-between;\r\n`;\nconst TabItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({\n    displayName: \"appBar__TabItem\",\n    componentId: \"sc-8e815d24-3\"\n})`\r\n    padding: 0.25rem;\r\n    background-color: ${(props)=>props.currentRoute != props.route ? \"transparent\" : \"#c4e2fb\"};\r\n    color: ${(props)=>props.currentRoute != props.route ? \"#ffffff\" : \"#000000\"};\r\n    border: none;\r\n    border-radius: 7.5px;\r\n    &:hover {\r\n        background-color: #ffffff;\r\n        color: #303b44;\r\n        cursor: pointer;\r\n    };\r\n`;\nconst AppBar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleClick = ({ route =\"/\"  })=>{\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                            route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].home,\n                            currentRoute: router.pathname,\n                            onClick: ()=>handleClick({\n                                    route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].home\n                                }),\n                            children: \"Мой кабинет\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                            route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].develop,\n                            currentRoute: router.pathname,\n                            onClick: ()=>handleClick({\n                                    route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].develop\n                                }),\n                            children: \"Разработка\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                            route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].admin,\n                            currentRoute: router.pathname,\n                            onClick: ()=>handleClick({\n                                    route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].admin\n                                }),\n                            children: \"Администрирование\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\appBar.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcEJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNSO0FBRS9CLE1BQU1HLFNBQVNGLHVFQUFVOzs7RUFBQSxDQUFDOzs7OztBQUsxQixDQUFDO0FBRUQsTUFBTUksWUFBWUosdUVBQVU7OztFQUFBLENBQUM7O0FBRTdCLENBQUM7QUFFRCxNQUFNSyxXQUFXTCx1RUFBVTs7O0VBQUEsQ0FBQzs7O0FBRzVCLENBQUM7QUFFRCxNQUFNTSxVQUFVTiwwRUFBYTs7O0VBQUEsQ0FBQzs7c0JBRVIsRUFBRVEsQ0FBQUEsUUFBU0EsTUFBTUMsWUFBWSxJQUFJRCxNQUFNRSxLQUFLLEdBQUcsZ0JBQWdCLFNBQVMsQ0FBQztXQUNwRixFQUFFRixDQUFBQSxRQUFTQSxNQUFNQyxZQUFZLElBQUlELE1BQU1FLEtBQUssR0FBRyxZQUFZLFNBQVMsQ0FBQzs7Ozs7Ozs7QUFRaEYsQ0FBQztBQUVELE1BQU1DLFNBQVMsSUFBTTtJQUNqQixNQUFNQyxTQUFTYixzREFBU0E7SUFDeEIsTUFBTWMsY0FBYyxDQUFDLEVBQUVILE9BQVEsSUFBRyxFQUFFLEdBQUs7UUFDckNFLE9BQU9FLElBQUksQ0FBQ0o7SUFDaEI7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ1I7c0JBQ0csNEVBQUNFOzBCQUNHLDRFQUFDQzs7c0NBQ0csOERBQUNDOzRCQUFRSSxPQUFPVCxvREFBVzs0QkFBRVEsY0FBY0csT0FBT0ksUUFBUTs0QkFBRUMsU0FBUyxJQUFNSixZQUFZO29DQUFFSCxPQUFPVCxvREFBVztnQ0FBQztzQ0FBSTs7Ozs7O3NDQUNoSCw4REFBQ0s7NEJBQVFJLE9BQU9ULHVEQUFjOzRCQUFFUSxjQUFjRyxPQUFPSSxRQUFROzRCQUFFQyxTQUFTLElBQU1KLFlBQVk7b0NBQUVILE9BQU9ULHVEQUFjO2dDQUFDO3NDQUFJOzs7Ozs7c0NBQ3RILDhEQUFDSzs0QkFBUUksT0FBT1QscURBQVk7NEJBQUVRLGNBQWNHLE9BQU9JLFFBQVE7NEJBQUVDLFNBQVMsSUFBTUosWUFBWTtvQ0FBRUgsT0FBT1QscURBQVk7Z0NBQUM7c0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFJO0FBRUEsaUVBQWVVLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcEJhci5qcz9hYjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzYjQ0O1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTA5NnB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGFiUGFuZWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY3VycmVudFJvdXRlICE9IHByb3BzLnJvdXRlID8gJ3RyYW5zcGFyZW50JyA6ICcjYzRlMmZiJ307XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jdXJyZW50Um91dGUgIT0gcHJvcHMucm91dGUgPyAnI2ZmZmZmZicgOiAnIzAwMDAwMCd9O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy41cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMzAzYjQ0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH07XHJcbmA7XHJcblxyXG5jb25zdCBBcHBCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHsgcm91dGUgPSAnLycgfSkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJJdGVtIHJvdXRlPXtyb3V0ZXMuaG9tZX0gY3VycmVudFJvdXRlPXtyb3V0ZXIucGF0aG5hbWV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHsgcm91dGU6IHJvdXRlcy5ob21lIH0pfT7QnNC+0Lkg0LrQsNCx0LjQvdC10YI8L1RhYkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJJdGVtIHJvdXRlPXtyb3V0ZXMuZGV2ZWxvcH0gY3VycmVudFJvdXRlPXtyb3V0ZXIucGF0aG5hbWV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHsgcm91dGU6IHJvdXRlcy5kZXZlbG9wIH0pfT7QoNCw0LfRgNCw0LHQvtGC0LrQsDwvVGFiSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkl0ZW0gcm91dGU9e3JvdXRlcy5hZG1pbn0gY3VycmVudFJvdXRlPXtyb3V0ZXIucGF0aG5hbWV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHsgcm91dGU6IHJvdXRlcy5hZG1pbiB9KX0+0JDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjQtTwvVGFiSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcEJhcjsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVkIiwicm91dGVzIiwiTGF5b3V0IiwiZGl2IiwiQ29udGFpbmVyIiwiVGFiUGFuZWwiLCJUYWJJdGVtIiwiYnV0dG9uIiwicHJvcHMiLCJjdXJyZW50Um91dGUiLCJyb3V0ZSIsIkFwcEJhciIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwicHVzaCIsImhvbWUiLCJwYXRobmFtZSIsIm9uQ2xpY2siLCJkZXZlbG9wIiwiYWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/appBar.js\n");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"footer__Layout\",\n    componentId: \"sc-7bf2f208-0\"\n})`\r\n    background-color: #1d2023;\r\n    padding: 0.5rem;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"footer__Container\",\n    componentId: \"sc-7bf2f208-1\"\n})`\r\n    width: 1096px;\r\n`;\nconst Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"footer__Copyright\",\n    componentId: \"sc-7bf2f208-2\"\n})`\r\n    color: #ffffff;\r\n`;\nconst Footer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Copyright, {\n                    children: \"\\xa9 2023, Danis Khabirov\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\footer.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\footer.js\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\cabinet\\\\components\\\\footer.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsU0FBU0QsdUVBQVU7OztFQUFBLENBQUM7Ozs7Ozs7O0FBUTFCLENBQUM7QUFFRCxNQUFNRyxZQUFZSCx1RUFBVTs7O0VBQUEsQ0FBQzs7QUFFN0IsQ0FBQztBQUVELE1BQU1JLFlBQVlKLHVFQUFVOzs7RUFBQSxDQUFDOztBQUU3QixDQUFDO0FBRUQsTUFBTUssU0FBUyxJQUFNO0lBQ2pCLHFCQUNJO2tCQUNJLDRFQUFDSjtzQkFDRyw0RUFBQ0U7MEJBQ0csNEVBQUNDOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQjtBQUVBLGlFQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanM/YjE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMDIzO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwOTZweDtcclxuYDtcclxuXHJcbmNvbnN0IENvcHlyaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvcHlyaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgwqkgMjAyMywgRGFuaXMgS2hhYmlyb3ZcclxuICAgICAgICAgICAgICAgICAgICA8L0NvcHlyaWdodD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkxheW91dCIsImRpdiIsIkNvbnRhaW5lciIsIkNvcHlyaWdodCIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n/* harmony import */ var _components_appBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/appBar */ \"./components/appBar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_appBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\cabinet\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDRjtBQUNBO0FBRTNCLFNBQVNHLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNsRCxxQkFDSTs7MEJBQ0ksOERBQUNMLHNEQUFZQTs7Ozs7MEJBQ2IsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILDBEQUFNQTs7Ozs7OztBQUduQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9hcHBCYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwiQXBwQmFyIiwiRm9vdGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Routes = {\n    home: \"/\",\n    develop: \"/develop\",\n    admin: \"/admin\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVM7SUFDWEMsTUFBTTtJQUNOQyxTQUFTO0lBQ1RDLE9BQU87QUFDWDtBQUVBLGlFQUFlSCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzP2IwNDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVzID0ge1xyXG4gICAgaG9tZTogJy8nLFxyXG4gICAgZGV2ZWxvcDogJy9kZXZlbG9wJyxcclxuICAgIGFkbWluOiAnL2FkbWluJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVzOyJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJob21lIiwiZGV2ZWxvcCIsImFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n    html {\r\n        font-size: 16px;\r\n        background-color: #f0f0f0;\r\n    };\r\n\r\n    body {\r\n        margin: 0;\r\n    };\r\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxpRUFBZUEsZ0VBQWlCLENBQUM7Ozs7Ozs7OztBQVNqQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmpzPzQ5MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgfTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9O1xyXG5gOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();