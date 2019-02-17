(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tarif-tarif-module"],{

/***/ "./src/app/tarif/containers/tarif-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tarif/containers/tarif-page.component.ts ***!
  \**********************************************************/
/*! exports provided: TarifPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifPageComponent", function() { return TarifPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TarifPageComponent = /** @class */ (function () {
    function TarifPageComponent() {
    }
    TarifPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bezopasnost-page',
            template: "\n    <h1>TARIF Page</h1>\n  "
        })
    ], TarifPageComponent);
    return TarifPageComponent;
}());



/***/ }),

/***/ "./src/app/tarif/containers/tarif-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tarif/containers/tarif-page.module.ts ***!
  \*******************************************************/
/*! exports provided: TarifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifPageModule", function() { return TarifPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tarif_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarif-page.component */ "./src/app/tarif/containers/tarif-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TarifPageModule = /** @class */ (function () {
    function TarifPageModule() {
    }
    TarifPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_tarif_page_component__WEBPACK_IMPORTED_MODULE_1__["TarifPageComponent"]],
            declarations: [_tarif_page_component__WEBPACK_IMPORTED_MODULE_1__["TarifPageComponent"]]
        })
    ], TarifPageModule);
    return TarifPageModule;
}());



/***/ }),

/***/ "./src/app/tarif/tarif-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tarif/tarif-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TarifRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifRoutingModule", function() { return TarifRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_tarif_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/tarif-page.component */ "./src/app/tarif/containers/tarif-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _containers_tarif_page_component__WEBPACK_IMPORTED_MODULE_2__["TarifPageComponent"]
    }
];
var TarifRoutingModule = /** @class */ (function () {
    function TarifRoutingModule() {
    }
    TarifRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TarifRoutingModule);
    return TarifRoutingModule;
}());



/***/ }),

/***/ "./src/app/tarif/tarif.module.ts":
/*!***************************************!*\
  !*** ./src/app/tarif/tarif.module.ts ***!
  \***************************************/
/*! exports provided: TarifModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifModule", function() { return TarifModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers_tarif_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/tarif-page.module */ "./src/app/tarif/containers/tarif-page.module.ts");
/* harmony import */ var _tarif_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarif-routing.module */ "./src/app/tarif/tarif-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TarifModule = /** @class */ (function () {
    function TarifModule() {
    }
    TarifModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _tarif_routing_module__WEBPACK_IMPORTED_MODULE_2__["TarifRoutingModule"],
                _containers_tarif_page_module__WEBPACK_IMPORTED_MODULE_1__["TarifPageModule"]
            ],
            exports: [_containers_tarif_page_module__WEBPACK_IMPORTED_MODULE_1__["TarifPageModule"]]
        })
    ], TarifModule);
    return TarifModule;
}());



/***/ })

}]);
//# sourceMappingURL=tarif-tarif-module.js.map