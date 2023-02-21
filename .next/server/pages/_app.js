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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"appBar__Container\",\n    componentId: \"sc-c866e385-0\"\n})`\r\n    background-color: rgb(172, 216, 255);\r\n    padding: 0.25rem;\r\n`;\nconst TabPanel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"appBar__TabPanel\",\n    componentId: \"sc-c866e385-1\"\n})`\r\n    display: flex;\r\n    justify-content: space-around;\r\n`;\nconst TabItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({\n    displayName: \"appBar__TabItem\",\n    componentId: \"sc-c866e385-2\"\n})`\r\n    background-color: ${(props)=>props.currentRoute != props.route ? \"transparent\" : \"black\"};\r\n    color: white;\r\n    border: none;\r\n    border-radius: 12px;\r\n    font-size: 1rem;\r\n    &:hover {\r\n        background-color: aliceblue;\r\n        cursor: pointer;\r\n    };\r\n`;\nconst AppBar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleClick = ({ route =\"/\"  })=>{\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                        route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].home,\n                        currentRoute: router.pathname,\n                        onClick: ()=>handleClick({\n                                route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].home\n                            }),\n                        children: \"Мой кабинет\"\n                    }, void 0, false, {\n                        fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/components/appBar.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                        route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].develop,\n                        currentRoute: router.pathname,\n                        onClick: ()=>handleClick({\n                                route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].develop\n                            }),\n                        children: \"Разработка\"\n                    }, void 0, false, {\n                        fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/components/appBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabItem, {\n                        route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].admin,\n                        currentRoute: router.pathname,\n                        onClick: ()=>handleClick({\n                                route: _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].admin\n                            }),\n                        children: \"Администрирование\"\n                    }, void 0, false, {\n                        fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/components/appBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/components/appBar.js\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/components/appBar.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcEJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNSO0FBRS9CLE1BQU1HLFlBQVlGLHVFQUFVOzs7RUFBQSxDQUFDOzs7QUFHN0IsQ0FBQztBQUVELE1BQU1JLFdBQVdKLHVFQUFVOzs7RUFBQSxDQUFDOzs7QUFHNUIsQ0FBQztBQUVELE1BQU1LLFVBQVVMLDBFQUFhOzs7RUFBQSxDQUFDO3NCQUNSLEVBQUVPLENBQUFBLFFBQVNBLE1BQU1DLFlBQVksSUFBSUQsTUFBTUUsS0FBSyxHQUFHLGdCQUFnQixPQUFPLENBQUM7Ozs7Ozs7OztBQVM3RixDQUFDO0FBRUQsTUFBTUMsU0FBUyxJQUFNO0lBQ2pCLE1BQU1DLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNYSxjQUFjLENBQUMsRUFBRUgsT0FBUSxJQUFHLEVBQUUsR0FBSztRQUNyQ0UsT0FBT0UsSUFBSSxDQUFDSjtJQUNoQjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDUDtzQkFDRyw0RUFBQ0U7O2tDQUNHLDhEQUFDQzt3QkFBUUksT0FBT1Isb0RBQVc7d0JBQUVPLGNBQWNHLE9BQU9JLFFBQVE7d0JBQUVDLFNBQVMsSUFBTUosWUFBWTtnQ0FBRUgsT0FBT1Isb0RBQVc7NEJBQUM7a0NBQUk7Ozs7OztrQ0FDaEgsOERBQUNJO3dCQUFRSSxPQUFPUix1REFBYzt3QkFBRU8sY0FBY0csT0FBT0ksUUFBUTt3QkFBRUMsU0FBUyxJQUFNSixZQUFZO2dDQUFFSCxPQUFPUix1REFBYzs0QkFBQztrQ0FBSTs7Ozs7O2tDQUN0SCw4REFBQ0k7d0JBQVFJLE9BQU9SLHFEQUFZO3dCQUFFTyxjQUFjRyxPQUFPSSxRQUFRO3dCQUFFQyxTQUFTLElBQU1KLFlBQVk7Z0NBQUVILE9BQU9SLHFEQUFZOzRCQUFDO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEk7QUFFQSxpRUFBZVMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwQmFyLmpzP2FiMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDIxNiwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBUYWJQYW5lbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbmA7XHJcblxyXG5jb25zdCBUYWJJdGVtID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY3VycmVudFJvdXRlICE9IHByb3BzLnJvdXRlID8gJ3RyYW5zcGFyZW50JyA6ICdibGFjayd9O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9O1xyXG5gO1xyXG5cclxuY29uc3QgQXBwQmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICh7IHJvdXRlID0gJy8nIH0pID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChyb3V0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiSXRlbSByb3V0ZT17cm91dGVzLmhvbWV9IGN1cnJlbnRSb3V0ZT17cm91dGVyLnBhdGhuYW1lfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh7IHJvdXRlOiByb3V0ZXMuaG9tZSB9KX0+0JzQvtC5INC60LDQsdC40L3QtdGCPC9UYWJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJJdGVtIHJvdXRlPXtyb3V0ZXMuZGV2ZWxvcH0gY3VycmVudFJvdXRlPXtyb3V0ZXIucGF0aG5hbWV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHsgcm91dGU6IHJvdXRlcy5kZXZlbG9wIH0pfT7QoNCw0LfRgNCw0LHQvtGC0LrQsDwvVGFiSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiSXRlbSByb3V0ZT17cm91dGVzLmFkbWlufSBjdXJyZW50Um91dGU9e3JvdXRlci5wYXRobmFtZX0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soeyByb3V0ZTogcm91dGVzLmFkbWluIH0pfT7QkNC00LzQuNC90LjRgdGC0YDQuNGA0L7QstCw0L3QuNC1PC9UYWJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQmFyOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJyb3V0ZXMiLCJDb250YWluZXIiLCJkaXYiLCJUYWJQYW5lbCIsIlRhYkl0ZW0iLCJidXR0b24iLCJwcm9wcyIsImN1cnJlbnRSb3V0ZSIsInJvdXRlIiwiQXBwQmFyIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiaG9tZSIsInBhdGhuYW1lIiwib25DbGljayIsImRldmVsb3AiLCJhZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/appBar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n/* harmony import */ var _components_appBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/appBar */ \"./components/appBar.js\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_appBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/opt/taifnk_react_admin/taifnk-injuctions-frontend2/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNGO0FBRTNCLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNsRCxxQkFDSTs7MEJBQ0ksOERBQUNKLHNEQUFZQTs7Ozs7MEJBQ2IsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBR3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICcuLi9jb21wb25lbnRzL2FwcEJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICAgICAgPEFwcEJhciAvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59OyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJBcHBCYXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n    html {\r\n        font-size: 24px;\r\n    };\r\n\r\n    body {\r\n        margin: 0;\r\n    };\r\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxpRUFBZUEsZ0VBQWlCLENBQUM7Ozs7Ozs7O0FBUWpDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWwuanM/NDkxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9O1xyXG5gOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global.js\n");

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