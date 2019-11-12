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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/groupSection.js":
/*!*****************************!*\
  !*** ./src/groupSection.js ***!
  \*****************************/
/*! exports provided: createGroupsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGroupsSection\", function() { return createGroupsSection; });\nfunction createGroupsSection() {\n    const groupsSection = document.createElement('div');\n    groupsSection.classList.add('seccion-grupos');\n\n    const groupA = document.createElement('div');\n    groupA.classList.add('seccion-grupos__A');\n\n    const groupB = document.createElement('div');\n    groupB.classList.add('seccion-grupos__B');\n\n    groupsSection.appendChild(groupA);\n    groupsSection.appendChild(groupB);\n\n    return [\n        groupsSection,\n        groupA,\n        groupB,\n    ];\n}\n\n//# sourceURL=webpack:///./src/groupSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productSection */ \"./src/productSection.js\");\n/* harmony import */ var _groupSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupSection */ \"./src/groupSection.js\");\n/* harmony import */ var _newProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProduct */ \"./src/newProduct.js\");\n\n\n\n\nfunction createContent() {\n    const productSection = Object(_productSection__WEBPACK_IMPORTED_MODULE_0__[\"createProductSection\"])();\n\n    document.body.appendChild(productSection);\n\n    const [\n        groupsSection,\n        groupA,\n        groupB,\n    ] = Object(_groupSection__WEBPACK_IMPORTED_MODULE_1__[\"createGroupsSection\"])();\n\n    document.body.appendChild(groupsSection);\n\n    Object(_newProduct__WEBPACK_IMPORTED_MODULE_2__[\"addNewProductsHandler\"])(groupA, groupB);\n}\n\nwindow.onload = createContent;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newProduct.js":
/*!***************************!*\
  !*** ./src/newProduct.js ***!
  \***************************/
/*! exports provided: addNewProductsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewProductsHandler\", function() { return addNewProductsHandler; });\nfunction addNewProductsHandler(groupA, groupB) {\n    const buttons = document.querySelectorAll(\".producto__boton\");\n\n    buttons.forEach((button) => {\n        button.addEventListener(\"click\", (event) => {\n            addNewProduct(event, groupA, groupB);\n        });\n    });\n}\n\nfunction createNewProduct(parentProduct) {\n    const newProduct = document.createElement('div');\n\n    newProduct.classList.add('producto-grupo');\n\n    newProduct.innerHTML = `\n      <img class=\"producto-grupo__imagen\" src=${parentProduct.childNodes[1].src} alt=\"imagen ${parentProduct.childNodes[3].childNodes[1].textContent} \">\n      <p class=\"producto-grupo__titulo\">${parentProduct.childNodes[3].childNodes[1].textContent}</p>\n    `;\n\n    return newProduct;\n}\n\nfunction addNewProduct(event, groupA, groupB) {\n    const target = event.target;\n\n    const group = target.textContent;\n    const parentProduct = target.parentNode.parentNode;\n\n    const newProduct = createNewProduct(parentProduct);\n\n    const groupProducts = Array.from(\n        document.getElementsByClassName('producto-grupo')\n    );\n\n    const isPreviousProduct = groupProducts.some((previousProduct) =>\n        previousProduct.innerHTML == newProduct.innerHTML\n    );\n\n    if (!isPreviousProduct) {\n        if (group === \"grupo a\") {\n            groupA.appendChild(newProduct);\n        } else {\n            groupB.appendChild(newProduct);\n        };\n    } else {\n        console.log(\"elemento repetido\");\n\n    }\n};\n\n\n//# sourceURL=webpack:///./src/newProduct.js?");

/***/ }),

/***/ "./src/productSection.js":
/*!*******************************!*\
  !*** ./src/productSection.js ***!
  \*******************************/
/*! exports provided: createProduct, createProductSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProduct\", function() { return createProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProductSection\", function() { return createProductSection; });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./src/products.js\");\n\n\nfunction createProduct(product) {\n    const productBlock = document.createElement('div');\n\n    productBlock.classList.add('producto');\n\n    productBlock.innerHTML = `\n        <img class=\"producto__imagen\" src=\"./images/${product.foto}\" alt=\"foto ${product.denominacion}\">\n        <div class=\"producto__info\">\n            <p class=\"producto__info-titulo\">${product.denominacion}</p>\n            <p class=\"producto__info-comentario\">${product.comentario}</p>\n            <button class=\"producto__boton producto__boton--grupoA\">grupo a</button>\n            <button class=\"producto__boton producto__boton--grupoB\">grupo b</button>\n        </div>\n    `;\n\n    return productBlock;\n}\n\nfunction createProductSection() {\n    const productSection = document.createElement('div');\n    productSection.classList.add('seccion-productos');\n\n    _products__WEBPACK_IMPORTED_MODULE_0__[\"products\"].forEach((product) => {\n        const productBlock = createProduct(product);\n        productSection.appendChild(productBlock);\n    });\n\n    return productSection;\n}\n\n\n//# sourceURL=webpack:///./src/productSection.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\nconst products = [{\n    id: 1,\n    denominacion: \"carnes frías\",\n    comentario: \"Auténtico, gourmet carnes cocinadas y vajilla fina de comedor con botella de vino, vasos y tablas de cortar en un banco de madera rústica\",\n    foto: \"carnes.jpg\"\n},\n{\n    id: 2,\n    denominacion: \"desayunos\",\n    comentario: \"Auténtico, gourmet carnes cocinadas y vajilla fina de comedor con botella de vino, vasos y tablas de cortar en un banco de madera rústica\",\n    foto: \"desayuno.jpg\"\n},\n{\n    id: 3,\n    denominacion: \"tomates\",\n    comentario: \"Vista de primer plano de verduras orgánicas maduras frescas en el mercado de agricultores \",\n    foto: \"tomates.jpg\"\n},\n{\n    id: 4,\n    denominacion: \"huevos\",\n    comentario:\n        \"Composición con variedad de productos comestibles como carne y productos lácteos\",\n    foto: \"huevos.jpg\"\n},\n{\n    id: 5,\n    denominacion: \"embutidos\",\n    comentario: \"Surtido de deliciosas carnes delicatessen en tabla de madera\",\n    foto: \"embutidos.jpg\"\n},\n{\n    id: 6,\n    denominacion: \"lacteos\",\n    comentario: \"La leche en mesa de madera con las vacas en el fondo \",\n    foto: \"lacteos.jpg\"\n},\n{\n    id: 7,\n    denominacion: \"quesos\",\n    comentario: \"Estilo tradicional de las tazas de queso artesanales\",\n    foto: \"quesos.jpg\"\n}];\n\n\n//# sourceURL=webpack:///./src/products.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });