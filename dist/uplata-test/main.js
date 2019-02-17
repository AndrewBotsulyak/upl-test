(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bezopasnost/bezopasnost.module": [
		"./src/app/bezopasnost/bezopasnost.module.ts",
		"bezopasnost-bezopasnost-module"
	],
	"./faq/faq.module": [
		"./src/app/faq/faq.module.ts",
		"faq-faq-module"
	],
	"./legal/legal.module": [
		"./src/app/legal/legal.module.ts",
		"legal-legal-module"
	],
	"./onas/onas.module": [
		"./src/app/onas/onas.module.ts",
		"onas-onas-module"
	],
	"./tarif/tarif.module": [
		"./src/app/tarif/tarif.module.ts",
		"tarif-tarif-module"
	],
	"./uslugi/uslugi.module": [
		"./src/app/uslugi/uslugi.module.ts",
		"uslugi-uslugi-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routingConfiguration, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingConfiguration", function() { return routingConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_404_no_route_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/404/no-route-found.component */ "./src/app/error/404/no-route-found.component.ts");
/* harmony import */ var _error_505_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/505/server-error.component */ "./src/app/error/505/server-error.component.ts");
/* harmony import */ var _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/containers/content/content-container.component */ "./src/app/layouts/containers/content/content-container.component.ts");
/* harmony import */ var _uslugi_services_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uslugi/services/can-activate.guard */ "./src/app/uslugi/services/can-activate.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/onas'
    },
    {
        path: '505',
        component: _error_505_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
    },
    {
        path: '404',
        component: _error_404_no_route_found_component__WEBPACK_IMPORTED_MODULE_2__["NoRouteFoundComponent"]
    },
    {
        path: 'onas',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        loadChildren: './onas/onas.module#OnasModule',
    },
    {
        path: 'faq',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        loadChildren: './faq/faq.module#FaqModule',
    },
    {
        path: 'bezopasnost',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        loadChildren: './bezopasnost/bezopasnost.module#BezopasnostModule',
    },
    {
        path: 'legal',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        loadChildren: './legal/legal.module#LegalModule',
    },
    {
        path: 'tarif',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        loadChildren: './tarif/tarif.module#TarifModule',
    },
    // лучше конечно роут вида /categories/:categoryId/... - тогда можно избежать костлей
    // внутри CanActivateGuard происходит логика поиска нужных урлов
    {
        path: ':categoryId',
        component: _layouts_containers_content_content_container_component__WEBPACK_IMPORTED_MODULE_4__["ContentContainerComponent"],
        canActivate: [_uslugi_services_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuard"]],
        loadChildren: './uslugi/uslugi.module#UslugiModule'
    },
    {
        path: '**',
        redirectTo: "/404"
    },
];
var routingConfiguration = {
    paramsInheritanceStrategy: 'always'
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routingConfiguration)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _uslugi_store_uslugi_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uslugi/store/uslugi-store.service */ "./src/app/uslugi/store/uslugi-store.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, uslugiStoreService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.uslugiStoreService = uslugiStoreService;
        this.title = 'uplata-test';
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var pathArr = [];
        //   this.router.events.pipe(
        //     tap((event) => {
        //       console.log(event);
        //     }),
        //     filter((event) => event instanceof NavigationEnd),
        //     map(() => this.activatedRoute),
        //     tap(() => {
        //       console.log(this.activatedRoute);
        //     }),
        //     filter((route) => route.params && route.params.categoryId),
        //     map((route) => {
        //
        //       const { categoryId, uslugaId } = route.params;
        //
        //       this.uslugiStoreService.getCategoryLoaded().pipe(
        //         takeUntil(this.destroyed$),
        //         filter(data => !data),
        //         tap(() => {
        //           this.uslugiStoreService.dispatchDownloadCategories();
        //         }),
        //       ).subscribe(() => {});
        //
        //
        //
        //       this.uslugiStoreService.getCategoryEntities().pipe(
        //         takeUntil(this.destroyed$),
        //         filter(data => !!data && !!data.length),
        //         take(1),
        //         tap((data) => {
        //           let category = null;
        //
        //           for (const key in data) {
        //             if (data[key].url === categoryId) {
        //               category = data[key];
        //             }
        //           }
        //
        //           if (!category) {
        //             this.destroyed$.next(true);
        //             this.router.navigateByUrl('/404');
        //             return;
        //           }
        //
        //           this.uslugiStoreService.dispatchLoadModule();
        //
        //           this.uslugiStoreService.dispatchActivateCategory(category);
        //           this.destroyed$.next(true);
        //         }),
        //       ).subscribe();
        //     }),
        //
        //     tap(route => {
        //       console.log(route);
        //     }),
        //     // mergeMap((route) => route.data),
        // )
        //     .subscribe((event) => this.titleService.setTitle(event['title']));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _uslugi_store_uslugi_store_service__WEBPACK_IMPORTED_MODULE_3__["UslugiStoreService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _uslugi_services_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uslugi/services/can-activate.guard */ "./src/app/uslugi/services/can-activate.guard.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _error_404_no_route_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/404/no-route-found.module */ "./src/app/error/404/no-route-found.module.ts");
/* harmony import */ var _error_505_server_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/505/server-error.module */ "./src/app/error/505/server-error.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_errors_handler_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/errors-handler-http.service */ "./src/shared/services/errors-handler-http.service.ts");
/* harmony import */ var _uslugi_services_auth_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uslugi/services/auth-api.service */ "./src/app/uslugi/services/auth-api.service.ts");
/* harmony import */ var _core_store_core_store_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core-store/core-store.module */ "./src/app/core-store/core-store.module.ts");
/* harmony import */ var _layouts_services_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/services/modal.service */ "./src/app/layouts/services/modal.service.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument(),
                _core_store_core_store_module__WEBPACK_IMPORTED_MODULE_12__["RootStoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _error_404_no_route_found_module__WEBPACK_IMPORTED_MODULE_7__["NoRouteFoundModule"],
                _error_505_server_error_module__WEBPACK_IMPORTED_MODULE_8__["ServerErrorModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"],
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_14__["LayoutsModule"]
            ],
            providers: [
                _uslugi_services_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuard"],
                _uslugi_services_auth_api_service__WEBPACK_IMPORTED_MODULE_11__["AuthApiService"],
                _layouts_services_modal_service__WEBPACK_IMPORTED_MODULE_13__["ModalService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_errors_handler_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _containers_login_login_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/login/login-container.module */ "./src/app/auth/containers/login/login-container.module.ts");
/* harmony import */ var _containers_rigister_register_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/rigister/register-container.module */ "./src/app/auth/containers/rigister/register-container.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _containers_login_login_container_module__WEBPACK_IMPORTED_MODULE_2__["LoginContainerModule"],
                _containers_rigister_register_container_module__WEBPACK_IMPORTED_MODULE_3__["RegisterContainerModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form\n  class=\"login-form\"\n  [formGroup]=\"loginForm\"\n  (ngSubmit)=\"onSubmit()\"\n>\n\n  <div class=\"login-form--card\">\n    <div>\n      <div class=\"example-header-image\"></div>\n      <div>Login</div>\n    </div>\n\n    <div class=\"inputs-container\">\n\n      <div>\n        <input\n          type=\"email\"\n          placeholder=\"Email\"\n          formControlName=\"email\"\n        >\n      </div>\n\n      <div>\n        <input\n          type=\"password\"\n          placeholder=\"Password\"\n          formControlName=\"password\"\n        >\n      </div>\n\n    </div>\n    <div>\n      <button type=\"submit\">Login</button>\n    </div>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  padding: 25px 15px; }\n\n.login-form--card {\n  display: flex;\n  flex-direction: column; }\n\ninput {\n  margin: 15px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xufVxuXG4ubG9naW4tZm9ybS0tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luOiAxNXB4IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var loginFields = Object.assign({}, this.loginForm.value);
        this.submitLogin.emit(loginFields);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "submitLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/components/login/login.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/auth/components/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form\n  [formGroup]=\"registerForm\"\n  (ngSubmit)=\"onSubmit()\"\n  >\n\n  <div class=\"example-card\">\n    <div>\n      <div class=\"example-header-image\"></div>\n      <div>Registration</div>\n    </div>\n\n    <div class=\"inputs-container\">\n\n      <div>\n        <input\n          placeholder=\"Name\"\n          formControlName=\"username\"\n        >\n      </div>\n\n      <div>\n        <input\n          placeholder=\"Email\"\n          formControlName=\"email\"\n        >\n      </div>\n\n      <div>\n        <input\n          type=\"password\"\n          placeholder=\"Password\"\n          formControlName=\"password\"\n        >\n      </div>\n\n      <div>\n        <input\n          type=\"password\"\n          placeholder=\"Password Confirm\"\n          formControlName=\"password_confirm\"\n        >\n      </div>\n\n    </div>\n    <div>\n      <button\n        type=\"submit\"\n      >\n        Register\n      </button>\n    </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  max-width: 320px;\n  width: 100%; }\n\ninput {\n  margin: 15px 5px; }\n\nform {\n  padding: 25px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbjogMTVweCA1cHhcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDI1cHggMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_validators_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/validators/functions */ "./src/utils/validators/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, cdr) {
        this.formBuilder = formBuilder;
        this.cdr = cdr;
        this.registerSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.username = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.passwordConfirm = this.formBuilder.control('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_utils_validators_functions__WEBPACK_IMPORTED_MODULE_2__["equalTo"])('password')
        ]);
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirm: this.passwordConfirm
        });
        this.cdr.detectChanges();
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var formValues = Object.assign({}, this.registerForm.value);
        this.registerSubmit.emit(formValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "registerSubmit", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register/register.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/components/register/register.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/auth/containers/login/login-container.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login/login-container.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29udGFpbmVycy9sb2dpbi9sb2dpbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/containers/login/login-container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/containers/login/login-container.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainerComponent", function() { return LoginContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginContainerComponent = /** @class */ (function () {
    function LoginContainerComponent() {
    }
    LoginContainerComponent.prototype.handleSubmit = function (loginValue) {
        console.log(loginValue);
    };
    LoginContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-container',
            template: "\n    <login\n      (submitLogin)=\"handleSubmit($event)\"\n    >\n    </login>\n  ",
            styles: [__webpack_require__(/*! ./login-container.component.scss */ "./src/app/auth/containers/login/login-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginContainerComponent);
    return LoginContainerComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/login/login-container.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/containers/login/login-container.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoginContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainerModule", function() { return LoginContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-container.component */ "./src/app/auth/containers/login/login-container.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/login/login.module */ "./src/app/auth/components/login/login.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginContainerModule = /** @class */ (function () {
    function LoginContainerModule() {
    }
    LoginContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"]
            ],
            exports: [
                _login_container_component__WEBPACK_IMPORTED_MODULE_1__["LoginContainerComponent"]
            ],
            declarations: [
                _login_container_component__WEBPACK_IMPORTED_MODULE_1__["LoginContainerComponent"]
            ]
        })
    ], LoginContainerModule);
    return LoginContainerModule;
}());



/***/ }),

/***/ "./src/app/auth/containers/rigister/register-container.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/rigister/register-container.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<register\n  (registerSubmit)=\"handleSubmit($event)\"\n>\n</register>\n"

/***/ }),

/***/ "./src/app/auth/containers/rigister/register-container.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/rigister/register-container.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  max-width: 320px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2F1dGgvY29udGFpbmVycy9yaWdpc3Rlci9yZWdpc3Rlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JpZ2lzdGVyL3JlZ2lzdGVyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/containers/rigister/register-container.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/auth/containers/rigister/register-container.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterContainerComponent", function() { return RegisterContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterContainerComponent = /** @class */ (function () {
    function RegisterContainerComponent() {
    }
    RegisterContainerComponent.prototype.handleSubmit = function (formValues) {
        console.log(formValues);
    };
    RegisterContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-container',
            template: __webpack_require__(/*! ./register-container.component.html */ "./src/app/auth/containers/rigister/register-container.component.html"),
            styles: [__webpack_require__(/*! ./register-container.component.scss */ "./src/app/auth/containers/rigister/register-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterContainerComponent);
    return RegisterContainerComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/rigister/register-container.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/containers/rigister/register-container.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterContainerModule", function() { return RegisterContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-container.component */ "./src/app/auth/containers/rigister/register-container.component.ts");
/* harmony import */ var _components_register_register_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/register/register.module */ "./src/app/auth/components/register/register.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterContainerModule = /** @class */ (function () {
    function RegisterContainerModule() {
    }
    RegisterContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _components_register_register_module__WEBPACK_IMPORTED_MODULE_2__["RegisterModule"]
            ],
            exports: [_register_container_component__WEBPACK_IMPORTED_MODULE_1__["RegisterContainerComponent"]],
            declarations: [_register_container_component__WEBPACK_IMPORTED_MODULE_1__["RegisterContainerComponent"]]
        })
    ], RegisterContainerModule);
    return RegisterContainerModule;
}());



/***/ }),

/***/ "./src/app/core-store/core-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/core-store/core-store.module.ts ***!
  \*************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _uslugi_store_uslugi_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uslugi/store/uslugi-store.module */ "./src/app/uslugi/store/uslugi-store.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// export const metaReducers: MetaReducer<ICoreState>[] = [storeFreeze];
var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _uslugi_store_uslugi_store_module__WEBPACK_IMPORTED_MODULE_4__["UslugiStoreModule"],
                // UiStoreModule,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([])
            ],
            declarations: []
        })
    ], RootStoreModule);
    return RootStoreModule;
}());



/***/ }),

/***/ "./src/app/data/categories.json":
/*!**************************************!*\
  !*** ./src/app/data/categories.json ***!
  \**************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}]};

/***/ }),

/***/ "./src/app/data/uslugi.json":
/*!**********************************!*\
  !*** ./src/app/data/uslugi.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = {"0":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"1":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"2":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"}],"3":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"4":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"}],"5":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"6":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"7":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"8":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"9":[{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}],"10":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":6,"url":"banki-i-finansovye-uslugi","title":"Банки и финансовые услуги"},{"id":4,"url":"ip-i-domashnyaya-telefoniya","title":"IP- и домашняя телефония"},{"id":5,"url":"internet-i-televidenie","title":"Интернет и телевидение"},{"id":7,"url":"igry-i-socseti","title":"Игры и соцсети"}],"11":[{"id":0,"url":"oplata-uslug","title":"Платежи"},{"id":1,"url":"popolnit-mobilnyy","title":"Пополнить мобильный"},{"id":2,"url":"oplata-kommunalnyh-uslug","title":"Оплата коммунальных услуг"},{"id":3,"url":"hosting-i-domennye-imena","title":"Хостинг и доменные имена"},{"id":8,"url":"shtrafy-za-narushenie-pdd","title":"Штрафы за нарушение ПДД"},{"id":9,"url":"blagotvoritelnost","title":"Благотворительность"},{"id":10,"url":"distribuciya-i-skidochnye-kupony","title":"Дистрибуция и скидочные купоны"},{"id":11,"url":"drugie-uslugi","title":"Другие услуги"}]};

/***/ }),

/***/ "./src/app/error/404/no-route-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/error/404/no-route-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NoRouteFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRouteFoundComponent", function() { return NoRouteFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoRouteFoundComponent = /** @class */ (function () {
    function NoRouteFoundComponent() {
        console.log('error page constructor');
    }
    NoRouteFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-found-page',
            template: "\n    <h1>Page Not Found</h1>\n    <a routerLink=\"/\">Go Home</a>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NoRouteFoundComponent);
    return NoRouteFoundComponent;
}());



/***/ }),

/***/ "./src/app/error/404/no-route-found.module.ts":
/*!****************************************************!*\
  !*** ./src/app/error/404/no-route-found.module.ts ***!
  \****************************************************/
/*! exports provided: NoRouteFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRouteFoundModule", function() { return NoRouteFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _no_route_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-route-found.component */ "./src/app/error/404/no-route-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoRouteFoundModule = /** @class */ (function () {
    function NoRouteFoundModule() {
    }
    NoRouteFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [
                _no_route_found_component__WEBPACK_IMPORTED_MODULE_2__["NoRouteFoundComponent"]
            ],
            declarations: [
                _no_route_found_component__WEBPACK_IMPORTED_MODULE_2__["NoRouteFoundComponent"]
            ]
        })
    ], NoRouteFoundModule);
    return NoRouteFoundModule;
}());



/***/ }),

/***/ "./src/app/error/505/server-error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/error/505/server-error.component.ts ***!
  \*****************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'server-error-page',
            template: "\n    <h1>505 PAGE</h1>\n  "
        })
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/error/505/server-error.module.ts":
/*!**************************************************!*\
  !*** ./src/app/error/505/server-error.module.ts ***!
  \**************************************************/
/*! exports provided: ServerErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorModule", function() { return ServerErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-error.component */ "./src/app/error/505/server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServerErrorModule = /** @class */ (function () {
    function ServerErrorModule() {
    }
    ServerErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [
                _server_error_component__WEBPACK_IMPORTED_MODULE_2__["ServerErrorComponent"]
            ],
            declarations: [
                _server_error_component__WEBPACK_IMPORTED_MODULE_2__["ServerErrorComponent"]
            ]
        })
    ], ServerErrorModule);
    return ServerErrorModule;
}());



/***/ }),

/***/ "./src/app/layouts/components/content/content.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/components/content/content.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n\n  <ul class=\"nav-list\">\n    <li>\n      <button (click)=\"handleLoginClick()\">Login</button>\n    </li>\n    <li>\n      <button (click)=\"handleRegisterClick()\">Register</button>\n    </li>\n    <li>\n      <a routerLink=\"/onas\" routerLinkActive=\"active\">O Nas</a>\n    </li>\n    <li>\n      <a routerLink=\"/faq\" routerLinkActive=\"active\">FAQ</a>\n    </li>\n    <li>\n      <a routerLink=\"/tarif\" routerLinkActive=\"active\">Tarif</a>\n    </li>\n    <li>\n      <a routerLink=\"/bezopasnost\" routerLinkActive=\"active\">Bezopasnost</a>\n    </li>\n    <li>\n      <a routerLink=\"/legal\" routerLinkActive=\"active\">Legal</a>\n    </li>\n    <li>\n      <a routerLink=\"/oplata-uslug\" routerLinkActive=\"active\">Uslugi</a>\n    </li>\n  </ul>\n\n</div>\n\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/components/content/content.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/components/content/content.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.header {\n  display: flex;\n  justify-content: flex-end;\n  height: 60px;\n  width: 100%;\n  background-color: #45b1ff; }\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  list-style: none; }\n\n.nav-list li {\n    margin: 0 15px; }\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1g7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBRXpCLFlBQVk7RUFDWixXQUFXO0VBRVgseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixnQkFBZ0IsRUFBQTs7QUFKbEI7SUFPSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YjFmZjtcbn1cblxuLm5hdi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/components/content/content.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/content/content.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.loginClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContentComponent.prototype.handleLoginClick = function () {
        this.loginClick.emit();
    };
    ContentComponent.prototype.handleRegisterClick = function () {
        this.registerClick.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "loginClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "registerClick", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-layout',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/layouts/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/layouts/components/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/layouts/components/content/content.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/components/content/content.module.ts ***!
  \**************************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component */ "./src/app/layouts/components/content/content.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [
                _content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]
            ],
            declarations: [_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/layouts/components/modal/modal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layouts/components/modal/modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div\n  #modal\n  class=\"modal-block\"\n>\n\n  <div\n    class=\"modal-block--close\"\n    (click)=\"handleClose()\"\n  >X</div>\n\n  <ng-template adHost></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/components/modal/modal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/components/modal/modal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.modal-block {\n  position: relative;\n  background-color: #fff;\n  opacity: 0;\n  transition: .2s ease;\n  -webkit-transform: translateY(100px);\n          transform: translateY(100px); }\n\n.modal-block--close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer; }\n\n.fadeIn {\n  transition: .2s ease;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBRW5CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBRVQsb0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VBRWxCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFFWCxXQUFXO0VBQ1gsWUFBWTtFQUVaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xufVxuXG4ubW9kYWwtYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG59XG5cbi5tb2RhbC1ibG9jay0tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG5cbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYWRlSW4ge1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/components/modal/modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/components/modal/modal.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_directives_add_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/add-host.directive */ "./src/shared/directives/add-host.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(componentFactoryResolver, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.viewInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.onClick = function (evt) {
        if (this.elementRef && this.elementRef.nativeElement === evt.target) {
            this.close();
        }
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        this.viewInit.emit();
    };
    ModalComponent.prototype.setComponent = function (component) {
        var _this = this;
        this.component = component;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        setTimeout(function () {
            _this.modalRef.nativeElement.classList.add('fadeIn');
        }, 0);
    };
    ModalComponent.prototype.handleClose = function () {
        this.close();
    };
    ModalComponent.prototype.close = function () {
        var _this = this;
        this.modalRef.nativeElement.classList.remove('fadeIn');
        setTimeout(function () { return _this.closeModal.emit(); }, 200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "viewInit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_directives_add_host_directive__WEBPACK_IMPORTED_MODULE_1__["AdDirective"]),
        __metadata("design:type", _shared_directives_add_host_directive__WEBPACK_IMPORTED_MODULE_1__["AdDirective"])
    ], ModalComponent.prototype, "adHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "modalRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onClick", null);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-wrap',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/layouts/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/layouts/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/layouts/components/modal/modal.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/components/modal/modal.module.ts ***!
  \**********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/layouts/components/modal/modal.component.ts");
/* harmony import */ var _auth_containers_login_login_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/containers/login/login-container.module */ "./src/app/auth/containers/login/login-container.module.ts");
/* harmony import */ var _shared_directives_add_host_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/add-host.directive */ "./src/shared/directives/add-host.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _auth_containers_login_login_container_module__WEBPACK_IMPORTED_MODULE_3__["LoginContainerModule"]
            ],
            exports: [
                _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]
            ],
            declarations: [
                _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"],
                _shared_directives_add_host_directive__WEBPACK_IMPORTED_MODULE_4__["AdDirective"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/layouts/containers/content/content-container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/containers/content/content-container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<content-layout\n  (loginClick)=\"handleLoginClick()\"\n  (registerClick)=\"handleRegisterClick()\"\n>\n\n</content-layout>\n"

/***/ }),

/***/ "./src/app/layouts/containers/content/content-container.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/containers/content/content-container.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.header {\n  display: flex;\n  justify-content: flex-end;\n  height: 60px;\n  width: 100%;\n  background-color: #45b1ff; }\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  list-style: none; }\n\n.nav-list li {\n    margin: 0 15px; }\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy9teS91cGxhdGEtdGVzdC9zcmMvYXBwL2xheW91dHMvY29udGFpbmVycy9jb250ZW50L2NvbnRlbnQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1osV0FBVztFQUVYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFFbkIsZ0JBQWdCLEVBQUE7O0FBSmxCO0lBT0ksY0FBYyxFQUFBOztBQUlsQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2NvbnRhaW5lcnMvY29udGVudC9jb250ZW50LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViMWZmO1xufVxuXG4ubmF2LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgbGkge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/containers/content/content-container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/containers/content/content-container.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainerComponent", function() { return ContentContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal/modal.component */ "./src/app/layouts/components/modal/modal.component.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/layouts/services/modal.service.ts");
/* harmony import */ var _auth_containers_login_login_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/containers/login/login-container.component */ "./src/app/auth/containers/login/login-container.component.ts");
/* harmony import */ var _auth_containers_rigister_register_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/containers/rigister/register-container.component */ "./src/app/auth/containers/rigister/register-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {UIStoreService} from '../../../core-store/ui/ui-store.service';




var ContentContainerComponent = /** @class */ (function () {
    function ContentContainerComponent(
    // private uiStoreService: UIStoreService,
    injector, appRef, modalService) {
        this.injector = injector;
        this.appRef = appRef;
        this.modalService = modalService;
    }
    ContentContainerComponent.prototype.ngOnInit = function () {
        // this.uiStoreService.getLoginModalState().subscribe(l => this.isLoginOpen = l);
        // this.uiStoreService.getRegisterModalState().subscribe(r => this.isRegisterOpen = r);
    };
    ContentContainerComponent.prototype.handleLoginClick = function () {
        this.modalService.open(_auth_containers_login_login_container_component__WEBPACK_IMPORTED_MODULE_3__["LoginContainerComponent"]);
    };
    ContentContainerComponent.prototype.handleRegisterClick = function () {
        this.modalService.open(_auth_containers_rigister_register_container_component__WEBPACK_IMPORTED_MODULE_4__["RegisterContainerComponent"]);
    };
    ContentContainerComponent.prototype.appendComponentToBody = function (conponentType) {
        // 1. Create a component reference from the component
        this.componentRef = this.factoryResolver
            .resolveComponentFactory(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"])
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this.componentRef.hostView);
        // 3. Get DOM element from component
        var domElem = this.componentRef.hostView.rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        // this.helperComponent = this.componentRef.instance;
        // this.helperComponent.setType(this.helper);
        //
        // this.helperComponent.closeHelper.subscribe(() => {
        //   this.appRef.detachView(this.componentRef.hostView);
        //   this.componentRef.destroy();
        //   this.helperComponent = null;
        // });
    };
    ContentContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-container-layout',
            template: __webpack_require__(/*! ./content-container.component.html */ "./src/app/layouts/containers/content/content-container.component.html"),
            styles: [__webpack_require__(/*! ./content-container.component.scss */ "./src/app/layouts/containers/content/content-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ContentContainerComponent);
    return ContentContainerComponent;
}());



/***/ }),

/***/ "./src/app/layouts/containers/content/content-container.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/containers/content/content-container.module.ts ***!
  \************************************************************************/
/*! exports provided: ContentContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainerModule", function() { return ContentContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-container.component */ "./src/app/layouts/containers/content/content-container.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_content_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/content/content.module */ "./src/app/layouts/components/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentContainerModule = /** @class */ (function () {
    function ContentContainerModule() {
    }
    ContentContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _components_content_content_module__WEBPACK_IMPORTED_MODULE_3__["ContentModule"]
            ],
            exports: [
                _content_container_component__WEBPACK_IMPORTED_MODULE_1__["ContentContainerComponent"]
            ],
            declarations: [_content_container_component__WEBPACK_IMPORTED_MODULE_1__["ContentContainerComponent"]]
        })
    ], ContentContainerModule);
    return ContentContainerModule;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.module */ "./src/app/layouts/components/modal/modal.module.ts");
/* harmony import */ var _containers_content_content_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/content/content-container.module */ "./src/app/layouts/containers/content/content-container.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/layouts/components/modal/modal.component.ts");
/* harmony import */ var _auth_containers_login_login_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/containers/login/login-container.component */ "./src/app/auth/containers/login/login-container.component.ts");
/* harmony import */ var _auth_containers_rigister_register_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/containers/rigister/register-container.component */ "./src/app/auth/containers/rigister/register-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                _containers_content_content_container_module__WEBPACK_IMPORTED_MODULE_2__["ContentContainerModule"]
            ],
            entryComponents: [
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                _auth_containers_login_login_container_component__WEBPACK_IMPORTED_MODULE_5__["LoginContainerComponent"],
                _auth_containers_rigister_register_container_component__WEBPACK_IMPORTED_MODULE_6__["RegisterContainerComponent"]
            ]
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/layouts/services/modal.service.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/services/modal.service.ts ***!
  \***************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal/modal.component */ "./src/app/layouts/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalService = /** @class */ (function () {
    function ModalService(
    // private uiStoreService: UIStoreService,
    injector, factoryResolver, appRef) {
        this.injector = injector;
        this.appRef = appRef;
        this.factoryResolver = factoryResolver;
    }
    ModalService.prototype.open = function (componentType) {
        var _this = this;
        // 1. Create a component reference from the component
        this.componentRef = this.factoryResolver
            .resolveComponentFactory(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"])
            .create(this.injector);
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(this.componentRef.hostView);
        this.instance = this.componentRef.instance;
        // 3. Get DOM element from component
        var domElem = this.componentRef.hostView.rootNodes[0];
        // 4. Append DOM element to the body
        document.body.appendChild(domElem);
        this.instance.viewInit.subscribe(function () {
            _this.instance.setComponent(componentType);
        });
        this.onCloseModal = this.instance.closeModal;
        this.instance.closeModal.subscribe(function () {
            _this.appRef.detachView(_this.componentRef.hostView);
            _this.componentRef.destroy();
            _this.instance = null;
        });
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/uslugi/services/auth-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/uslugi/services/auth-api.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApiService", function() { return AuthApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthApiService = /** @class */ (function () {
    function AuthApiService(http) {
        this.http = http;
    }
    AuthApiService.prototype.login = function () {
        return this.http.post("/login", {}, {
            withCredentials: true
        });
    };
    AuthApiService.prototype.register = function () {
        return this.http.post("/register", {}, {
            withCredentials: true
        });
    };
    AuthApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthApiService);
    return AuthApiService;
}());



/***/ }),

/***/ "./src/app/uslugi/services/can-activate.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/uslugi/services/can-activate.guard.ts ***!
  \*******************************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_uslugi_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/uslugi-store.service */ "./src/app/uslugi/store/uslugi-store.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(uslugiStoreService, router) {
        this.uslugiStoreService = uslugiStoreService;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var _a = route.params, categoryId = _a.categoryId, uslugaId = _a.uslugaId;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.uslugiStoreService.getCategoryLoaded().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) { return !data; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                _this.uslugiStoreService.dispatchDownloadCategories();
            })).subscribe(function () { });
            _this.uslugiStoreService.getCategoryEntities().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) { return !!data && !!data.length; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                var category = null;
                for (var key in data) {
                    if (data[key].url === categoryId) {
                        category = data[key];
                    }
                }
                if (!category) {
                    _this.destroyed$.next(true);
                    _this.router.navigateByUrl('/404');
                    observer.next(false);
                    return;
                }
                _this.uslugiStoreService.dispatchActivateCategory(category);
                observer.next(true);
                _this.destroyed$.next(true);
            })).subscribe();
        });
    };
    CanActivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_store_uslugi_store_service__WEBPACK_IMPORTED_MODULE_3__["UslugiStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CanActivateGuard);
    return CanActivateGuard;
}());



/***/ }),

/***/ "./src/app/uslugi/store/uslugi-store.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/uslugi/store/uslugi-store.module.ts ***!
  \*****************************************************/
/*! exports provided: reducerGetter, UslugiStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerGetter", function() { return reducerGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UslugiStoreModule", function() { return UslugiStoreModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _uslugi_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uslugi.reducer */ "./src/app/uslugi/store/uslugi.reducer.ts");
/* harmony import */ var _uslugi_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uslugi-store.service */ "./src/app/uslugi/store/uslugi-store.service.ts");
/* harmony import */ var _uslugi_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uslugi.effects */ "./src/app/uslugi/store/uslugi.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function reducerGetter(state, action) {
    return Object(_uslugi_reducer__WEBPACK_IMPORTED_MODULE_3__["uslugiReducer"])(state, action);
}
var UslugiStoreModule = /** @class */ (function () {
    function UslugiStoreModule() {
    }
    UslugiStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forRoot({}),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forFeature('uslugi', reducerGetter),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_uslugi_effects__WEBPACK_IMPORTED_MODULE_5__["UslugiEffects"]])
            ],
            exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"]],
            providers: [
                _uslugi_store_service__WEBPACK_IMPORTED_MODULE_4__["UslugiStoreService"],
            ]
        })
    ], UslugiStoreModule);
    return UslugiStoreModule;
}());



/***/ }),

/***/ "./src/app/uslugi/store/uslugi-store.service.ts":
/*!******************************************************!*\
  !*** ./src/app/uslugi/store/uslugi-store.service.ts ***!
  \******************************************************/
/*! exports provided: UslugiStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UslugiStoreService", function() { return UslugiStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uslugi.actions */ "./src/app/uslugi/store/uslugi.actions.ts");
/* harmony import */ var _uslugi_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uslugi.selectors */ "./src/app/uslugi/store/uslugi.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UslugiStoreService = /** @class */ (function () {
    function UslugiStoreService(store$) {
        this.store$ = store$;
    }
    UslugiStoreService.prototype.dispatchAction = function (action) {
        this.store$.dispatch(action);
    };
    UslugiStoreService.prototype.dispatchActivateCategory = function (value) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["ActivateCategory"](value));
    };
    UslugiStoreService.prototype.dispatchActivateUsluga = function (value) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["ActivateUsluga"](value));
    };
    UslugiStoreService.prototype.dispatchDownloadCategories = function () {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["DownloadCategories"]());
    };
    UslugiStoreService.prototype.dispatchSetCategories = function (value) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["SetCategories"](value));
    };
    UslugiStoreService.prototype.dispatchDownloadUslugiByCategoryId = function (id) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["DownloadUslugiByCategoryId"](id));
    };
    UslugiStoreService.prototype.dispatchSetUslugi = function (value) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["SetUslugi"](value));
    };
    UslugiStoreService.prototype.dispatchOpenUslugaById = function (value) {
        this.dispatchAction(new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["OpenUslugaById"](value));
    };
    UslugiStoreService.prototype.getCategoryEntities = function () {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_uslugi_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCategoryEntities"]));
    };
    UslugiStoreService.prototype.getActiveCategory = function () {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_uslugi_selectors__WEBPACK_IMPORTED_MODULE_3__["selectActiveCategory"]));
    };
    UslugiStoreService.prototype.getActiveUsluga = function () {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_uslugi_selectors__WEBPACK_IMPORTED_MODULE_3__["selectActiveUsluga"]));
    };
    UslugiStoreService.prototype.getCategoryLoaded = function () {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_uslugi_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCategoryLoaded"]));
    };
    UslugiStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UslugiStoreService);
    return UslugiStoreService;
}());



/***/ }),

/***/ "./src/app/uslugi/store/uslugi.actions.ts":
/*!************************************************!*\
  !*** ./src/app/uslugi/store/uslugi.actions.ts ***!
  \************************************************/
/*! exports provided: UslugiActionTypes, ActivateCategory, ActivateUsluga, DownloadCategories, SetCategories, DownloadUslugiByCategoryId, SetUslugi, OpenUslugaById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UslugiActionTypes", function() { return UslugiActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateCategory", function() { return ActivateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateUsluga", function() { return ActivateUsluga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategories", function() { return DownloadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCategories", function() { return SetCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadUslugiByCategoryId", function() { return DownloadUslugiByCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUslugi", function() { return SetUslugi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenUslugaById", function() { return OpenUslugaById; });
var UslugiActionTypes;
(function (UslugiActionTypes) {
    UslugiActionTypes["ActivateCategory"] = "[Uslugi] Activate Category";
    UslugiActionTypes["ActivateUsluga"] = "[Uslugi] Activate Usluga";
    UslugiActionTypes["SetCategories"] = "[Uslugi] Set Categories";
    UslugiActionTypes["DownloadCategories"] = "[Uslugi] Download Categories";
    UslugiActionTypes["DownloadUslugiByCategoryId"] = "[Uslugi] Download Uslugi By Category Id";
    UslugiActionTypes["SetUslugi"] = "[Uslugi] Set Uslugi";
    UslugiActionTypes["OpenUslugaById"] = "[Uslugi] Open Usluga By Id";
})(UslugiActionTypes || (UslugiActionTypes = {}));
var ActivateCategory = /** @class */ (function () {
    function ActivateCategory(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.ActivateCategory;
    }
    return ActivateCategory;
}());

var ActivateUsluga = /** @class */ (function () {
    function ActivateUsluga(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.ActivateUsluga;
    }
    return ActivateUsluga;
}());

var DownloadCategories = /** @class */ (function () {
    function DownloadCategories() {
        this.type = UslugiActionTypes.DownloadCategories;
    }
    return DownloadCategories;
}());

var SetCategories = /** @class */ (function () {
    function SetCategories(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.SetCategories;
    }
    return SetCategories;
}());

var DownloadUslugiByCategoryId = /** @class */ (function () {
    function DownloadUslugiByCategoryId(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.DownloadUslugiByCategoryId;
    }
    return DownloadUslugiByCategoryId;
}());

var SetUslugi = /** @class */ (function () {
    function SetUslugi(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.SetUslugi;
    }
    return SetUslugi;
}());

var OpenUslugaById = /** @class */ (function () {
    function OpenUslugaById(payload) {
        this.payload = payload;
        this.type = UslugiActionTypes.OpenUslugaById;
    }
    return OpenUslugaById;
}());



/***/ }),

/***/ "./src/app/uslugi/store/uslugi.effects.ts":
/*!************************************************!*\
  !*** ./src/app/uslugi/store/uslugi.effects.ts ***!
  \************************************************/
/*! exports provided: UslugiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UslugiEffects", function() { return UslugiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uslugi.actions */ "./src/app/uslugi/store/uslugi.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/categories.json */ "./src/app/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/categories.json */ "./src/app/data/categories.json", 1);
/* harmony import */ var _data_uslugi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/uslugi.json */ "./src/app/data/uslugi.json");
var _data_uslugi_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/uslugi.json */ "./src/app/data/uslugi.json", 1);
/* harmony import */ var _uslugi_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uslugi-store.service */ "./src/app/uslugi/store/uslugi-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UslugiEffects = /** @class */ (function () {
    function UslugiEffects(actions$, router, uslugiStoreSevice) {
        this.actions$ = actions$;
        this.router = router;
        this.uslugiStoreSevice = uslugiStoreSevice;
        this.downloadCategories$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["UslugiActionTypes"].DownloadCategories), 
        // здесь мог бы быть запрос ...
        // добавляю замоканные данные в хранилище
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["SetCategories"](_data_categories_json__WEBPACK_IMPORTED_MODULE_5__["data"]);
        }));
        this.activateCategory$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["UslugiActionTypes"].ActivateCategory), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (category) { return category && (!category.uslugi || !category.uslugi.length); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (category) { return new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["DownloadUslugiByCategoryId"](+category.id); }));
        this.downloadUslugiByCategoryId$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["UslugiActionTypes"].DownloadUslugiByCategoryId), 
        // добавляю замоканные данные в хранилище
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
            var categoryId = action.payload;
            var uslugi = _data_uslugi_json__WEBPACK_IMPORTED_MODULE_6__[categoryId];
            return new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["SetUslugi"]({
                categoryId: categoryId,
                uslugi: uslugi
            });
        }));
        this.openUslugaById$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["UslugiActionTypes"].OpenUslugaById), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.uslugiStoreSevice.getActiveCategory()), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var action = _a[0], activeCategory = _a[1];
            var uslugaId = action.payload;
            var usluga = activeCategory.uslugi.find(function (u) { return +u.id === uslugaId; });
            return new _uslugi_actions__WEBPACK_IMPORTED_MODULE_2__["ActivateUsluga"](usluga);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UslugiEffects.prototype, "downloadCategories$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UslugiEffects.prototype, "activateCategory$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UslugiEffects.prototype, "downloadUslugiByCategoryId$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], UslugiEffects.prototype, "openUslugaById$", void 0);
    UslugiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _uslugi_store_service__WEBPACK_IMPORTED_MODULE_7__["UslugiStoreService"]])
    ], UslugiEffects);
    return UslugiEffects;
}());



/***/ }),

/***/ "./src/app/uslugi/store/uslugi.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/uslugi/store/uslugi.reducer.ts ***!
  \************************************************/
/*! exports provided: uslugiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uslugiReducer", function() { return uslugiReducer; });
/* harmony import */ var _uslugi_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uslugi.state */ "./src/app/uslugi/store/uslugi.state.ts");
/* harmony import */ var _uslugi_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uslugi.actions */ "./src/app/uslugi/store/uslugi.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function uslugiReducer(state, action) {
    if (state === void 0) { state = _uslugi_state__WEBPACK_IMPORTED_MODULE_0__["uslugiInitialState"]; }
    switch (action.type) {
        case _uslugi_actions__WEBPACK_IMPORTED_MODULE_1__["UslugiActionTypes"].ActivateCategory: {
            var category = action.payload;
            return __assign({}, state, { activeCategory: category, activeUsluga: null });
        }
        case _uslugi_actions__WEBPACK_IMPORTED_MODULE_1__["UslugiActionTypes"].ActivateUsluga: {
            var usluga = action.payload;
            return __assign({}, state, { activeUsluga: usluga });
        }
        case _uslugi_actions__WEBPACK_IMPORTED_MODULE_1__["UslugiActionTypes"].SetCategories: {
            var categories = action.payload;
            return _uslugi_state__WEBPACK_IMPORTED_MODULE_0__["uslugiAdapter"].addMany(categories, __assign({}, state, { categoryLoaded: true }));
        }
        case _uslugi_actions__WEBPACK_IMPORTED_MODULE_1__["UslugiActionTypes"].SetUslugi: {
            var _a = action.payload, categoryId = _a.categoryId, uslugi = _a.uslugi;
            return _uslugi_state__WEBPACK_IMPORTED_MODULE_0__["uslugiAdapter"].updateOne({
                id: categoryId,
                changes: {
                    uslugi: uslugi
                }
            }, state);
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/uslugi/store/uslugi.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/uslugi/store/uslugi.selectors.ts ***!
  \**************************************************/
/*! exports provided: entitySelectors, selectCategoryLoaded, selectActiveCategory, selectActiveUsluga, selectCategoryEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitySelectors", function() { return entitySelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoryLoaded", function() { return selectCategoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveCategory", function() { return selectActiveCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveUsluga", function() { return selectActiveUsluga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoryEntities", function() { return selectCategoryEntities; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _uslugi_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uslugi.state */ "./src/app/uslugi/store/uslugi.state.ts");


var entitySelectors = _uslugi_state__WEBPACK_IMPORTED_MODULE_1__["uslugiAdapter"].getSelectors(_uslugi_state__WEBPACK_IMPORTED_MODULE_1__["uslugiState"]);
var selectCategoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_uslugi_state__WEBPACK_IMPORTED_MODULE_1__["uslugiState"], function (state) { return state.categoryLoaded; });
var selectActiveCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_uslugi_state__WEBPACK_IMPORTED_MODULE_1__["uslugiState"], entitySelectors.selectEntities, function (state, entities) {
    return state.activeCategory ? entities[state.activeCategory.id] : null;
});
var selectActiveUsluga = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_uslugi_state__WEBPACK_IMPORTED_MODULE_1__["uslugiState"], entitySelectors.selectEntities, function (state, entities) {
    return state.activeUsluga && state.activeCategory
        ? entities[state.activeCategory.id].uslugi.find(function (u) { return u.id === state.activeUsluga.id; }) : null;
});
var selectCategoryEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(entitySelectors.selectEntities, function (entities) {
    return Object.keys(entities).length ? Object.values(entities) : null;
});


/***/ }),

/***/ "./src/app/uslugi/store/uslugi.state.ts":
/*!**********************************************!*\
  !*** ./src/app/uslugi/store/uslugi.state.ts ***!
  \**********************************************/
/*! exports provided: uslugiAdapter, uslugiInitialState, uslugiState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uslugiAdapter", function() { return uslugiAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uslugiInitialState", function() { return uslugiInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uslugiState", function() { return uslugiState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");


var uslugiAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (category) { return category.id; },
});
var uslugiInitialState = uslugiAdapter.getInitialState({
    activeCategory: null,
    activeUsluga: null,
    categoryLoaded: false
});
var uslugiState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('uslugi');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/shared/directives/add-host.directive.ts":
/*!*****************************************************!*\
  !*** ./src/shared/directives/add-host.directive.ts ***!
  \*****************************************************/
/*! exports provided: AdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDirective", function() { return AdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdDirective = /** @class */ (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[adHost]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AdDirective);
    return AdDirective;
}());



/***/ }),

/***/ "./src/shared/services/errors-handler-http.service.ts":
/*!************************************************************!*\
  !*** ./src/shared/services/errors-handler-http.service.ts ***!
  \************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router) {
        this.router = router;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
            if (error.status === 0 || error.status >= 500) {
                _this.router.navigateByUrl('/505');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    };
    HttpErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/utils/validators/functions.ts":
/*!*******************************************!*\
  !*** ./src/utils/validators/functions.ts ***!
  \*******************************************/
/*! exports provided: equalTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalTo", function() { return equalTo; });
function equalTo(equalToControl, isReverse) {
    return function (control) {
        var parentGroup = control.root;
        var parentGroupControl = parentGroup.get(equalToControl);
        if (parentGroupControl) {
            var value = control.value;
            var equalToValue = parentGroupControl.value;
            if (value && equalToValue) {
                if (!isReverse) {
                    if (value !== parentGroupControl.value) {
                        return {
                            equalTo: false
                        };
                    }
                }
                else {
                    if (value === parentGroupControl.value) {
                        delete parentGroupControl.errors['equalTo'];
                        if (!Object.keys(parentGroupControl.errors).length) {
                            parentGroupControl.setErrors(null);
                        }
                    }
                    if (value !== parentGroupControl.value) {
                        parentGroupControl.setErrors({ equalTo: false });
                    }
                }
            }
        }
        return null;
    };
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrew/my/uplata-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map