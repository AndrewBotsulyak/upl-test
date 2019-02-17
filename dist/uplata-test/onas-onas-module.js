(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onas-onas-module"],{

/***/ "./src/app/onas/containers/onas-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/onas/containers/onas-page.component.ts ***!
  \********************************************************/
/*! exports provided: OnasPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnasPageComponent", function() { return OnasPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OnasPageComponent = /** @class */ (function () {
    function OnasPageComponent() {
    }
    OnasPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bezopasnost-page',
            template: "\n    <h1>ONAS Page</h1>\n  "
        })
    ], OnasPageComponent);
    return OnasPageComponent;
}());



/***/ }),

/***/ "./src/app/onas/containers/onas-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/onas/containers/onas-page.module.ts ***!
  \*****************************************************/
/*! exports provided: OnasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnasPageModule", function() { return OnasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _onas_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onas-page.component */ "./src/app/onas/containers/onas-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OnasPageModule = /** @class */ (function () {
    function OnasPageModule() {
    }
    OnasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_onas_page_component__WEBPACK_IMPORTED_MODULE_1__["OnasPageComponent"]],
            declarations: [_onas_page_component__WEBPACK_IMPORTED_MODULE_1__["OnasPageComponent"]]
        })
    ], OnasPageModule);
    return OnasPageModule;
}());



/***/ }),

/***/ "./src/app/onas/onas-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/onas/onas-routing.module.ts ***!
  \*********************************************/
/*! exports provided: OnasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnasRoutingModule", function() { return OnasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_onas_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/onas-page.component */ "./src/app/onas/containers/onas-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _containers_onas_page_component__WEBPACK_IMPORTED_MODULE_2__["OnasPageComponent"]
    }
];
var OnasRoutingModule = /** @class */ (function () {
    function OnasRoutingModule() {
    }
    OnasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OnasRoutingModule);
    return OnasRoutingModule;
}());



/***/ }),

/***/ "./src/app/onas/onas.module.ts":
/*!*************************************!*\
  !*** ./src/app/onas/onas.module.ts ***!
  \*************************************/
/*! exports provided: OnasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnasModule", function() { return OnasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers_onas_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/onas-page.module */ "./src/app/onas/containers/onas-page.module.ts");
/* harmony import */ var _onas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onas-routing.module */ "./src/app/onas/onas-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnasModule = /** @class */ (function () {
    function OnasModule() {
    }
    OnasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _containers_onas_page_module__WEBPACK_IMPORTED_MODULE_1__["OnasPageModule"],
                _onas_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnasRoutingModule"]
            ],
            exports: [_containers_onas_page_module__WEBPACK_IMPORTED_MODULE_1__["OnasPageModule"]]
        })
    ], OnasModule);
    return OnasModule;
}());



/***/ })

}]);
//# sourceMappingURL=onas-onas-module.js.map