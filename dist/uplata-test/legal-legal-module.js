(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legal-legal-module"],{

/***/ "./src/app/legal/containers/legal-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/legal/containers/legal-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LegalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPageComponent", function() { return LegalPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LegalPageComponent = /** @class */ (function () {
    function LegalPageComponent() {
    }
    LegalPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bezopasnost-page',
            template: "\n    <h1>LEGAL Page</h1>\n  "
        })
    ], LegalPageComponent);
    return LegalPageComponent;
}());



/***/ }),

/***/ "./src/app/legal/containers/legal-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/legal/containers/legal-page.module.ts ***!
  \*******************************************************/
/*! exports provided: LegalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPageModule", function() { return LegalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _legal_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal-page.component */ "./src/app/legal/containers/legal-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LegalPageModule = /** @class */ (function () {
    function LegalPageModule() {
    }
    LegalPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_legal_page_component__WEBPACK_IMPORTED_MODULE_1__["LegalPageComponent"]],
            declarations: [_legal_page_component__WEBPACK_IMPORTED_MODULE_1__["LegalPageComponent"]]
        })
    ], LegalPageModule);
    return LegalPageModule;
}());



/***/ }),

/***/ "./src/app/legal/legal-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/legal/legal-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LegalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalRoutingModule", function() { return LegalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_legal_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/legal-page.component */ "./src/app/legal/containers/legal-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _containers_legal_page_component__WEBPACK_IMPORTED_MODULE_2__["LegalPageComponent"]
    }
];
var LegalRoutingModule = /** @class */ (function () {
    function LegalRoutingModule() {
    }
    LegalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LegalRoutingModule);
    return LegalRoutingModule;
}());



/***/ }),

/***/ "./src/app/legal/legal.module.ts":
/*!***************************************!*\
  !*** ./src/app/legal/legal.module.ts ***!
  \***************************************/
/*! exports provided: LegalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalModule", function() { return LegalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers_legal_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/legal-page.module */ "./src/app/legal/containers/legal-page.module.ts");
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legal-routing.module */ "./src/app/legal/legal-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LegalModule = /** @class */ (function () {
    function LegalModule() {
    }
    LegalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _legal_routing_module__WEBPACK_IMPORTED_MODULE_2__["LegalRoutingModule"],
                _containers_legal_page_module__WEBPACK_IMPORTED_MODULE_1__["LegalPageModule"]
            ],
            exports: [_containers_legal_page_module__WEBPACK_IMPORTED_MODULE_1__["LegalPageModule"]]
        })
    ], LegalModule);
    return LegalModule;
}());



/***/ })

}]);
//# sourceMappingURL=legal-legal-module.js.map