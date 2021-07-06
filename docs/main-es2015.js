(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");








class AppComponent {
    constructor(router, activatedRoute, title) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(event => { event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(route => {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(route => route.data))
            .subscribe(data => {
            this.title.setTitle(data.title);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ol-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ol-footer");
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/photos.module */ "./src/app/photos/photos.module.ts");
/* harmony import */ var _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/errors.module */ "./src/app/errors/errors.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _photos_photos_module__WEBPACK_IMPORTED_MODULE_4__["PhotosModule"],
            _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__["ErrorsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _photos_photos_module__WEBPACK_IMPORTED_MODULE_4__["PhotosModule"],
        _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__["ErrorsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _photos_photos_module__WEBPACK_IMPORTED_MODULE_4__["PhotosModule"],
                    _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__["ErrorsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _photos_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/photo-list/photo-list.component */ "./src/app/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _photos_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/photo-form/photo-form.component */ "./src/app/photos/photo-form/photo-form.component.ts");
/* harmony import */ var _photos_photo_list_photo_list_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/photo-list/photo-list.resolver */ "./src/app/photos/photo-list/photo-list.resolver.ts");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _photos_photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/photo-details/photo-details.component */ "./src/app/photos/photo-details/photo-details.component.ts");










const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
    },
    {
        path: 'user/:userName', component: _photos_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"], resolve: {
            photos: _photos_photo_list_photo_list_resolver__WEBPACK_IMPORTED_MODULE_5__["PhotoListResolver"]
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'photo/add', component: _photos_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFormComponent"], canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            title: 'Add Photo'
        }
    },
    {
        path: 'photo/:photoId', component: _photos_photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_7__["PhotoDetailsComponent"],
        data: {
            title: 'Photo details'
        }
    },
    {
        path: 'not-found', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
        data: {
            title: 'Not found'
        }
    },
    { path: '**', redirectTo: 'not-found' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.userService.isLogged()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/auth/request.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/request.interceptor.ts ***!
  \**************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../token/token.service */ "./src/app/core/token/token.service.ts");



class RequestInterceptor {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        if (this.tokenService.hasToken()) {
            req = req.clone({
                setHeaders: {
                    'x-access-token': this.tokenService.getToken()
                }
            });
        }
        return next.handle(req);
    }
}
RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) { return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"])); };
RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestInterceptor, factory: RequestInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/directives/only-logged/only-logged.module */ "./src/app/shared/directives/only-logged/only-logged.module.ts");
/* harmony import */ var _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/components/menu/menu.module */ "./src/app/shared/components/menu/menu.module.ts");
/* harmony import */ var _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
/* harmony import */ var _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/components/alert/alert.module */ "./src/app/shared/components/alert/alert.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/request.interceptor */ "./src/app/core/auth/request.interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");












class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_9__["RequestInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertModule"],
            _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
            _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"],
            _shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_0__["OnlyLoggedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertModule"],
        _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
        _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"],
        _shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_0__["OnlyLoggedModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertModule"],
                    _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
                    _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_1__["MenuModule"],
                    _shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_0__["OnlyLoggedModule"]
                ],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_9__["RequestInterceptor"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return [""]; };
const _c1 = function () { return ["photo", "add"]; };
function FooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
class FooterComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.user$ = this.userService.getUser();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["ol-footer"]], decls: 2, vars: 3, consts: [["class", "mt-5", 4, "ngIf"], [1, "mt-5"], [1, "fixed-bottom", "bg-white", "p-1"], [1, "container"], [1, "row", "text-center"], [1, "col-6"], [3, "routerLink"], [1, "fa", "fa-home", "fa-2x"], [1, "fa", "fa-plus-circle", "fa-2x"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 10, 4, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/only-logged/only-logged.directive */ "./src/app/shared/directives/only-logged/only-logged.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");









function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(logout)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, user_r4.name));
} }
const _c0 = function () { return [""]; };
function HeaderComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please, login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user$ = this.userService.getUser();
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ol-header"]], decls: 20, vars: 4, consts: [[1, "fixed-top"], [1, "navbar", "navbar-light", "bg-white"], [1, "navbar-brand"], [1, "fa", "fa-bars", "mr-2", 3, "click"], ["menu", ""], ["olOnlyLogged", ""], [4, "ngIf", "ngIfElse"], ["loginMessage", ""], [1, "text-center", "fixed-top", "m-5"], [1, "fa", "fa-user-circle", "mr-1"], [1, "pr-1"], [1, "pr-2", 3, "click"], [1, "pr-2", 2, "text-decoration", "none", "color", "#000", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " INSTAPIC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Menu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 7, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_ng_template_15_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ol-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ol-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 2, ctx.user$))("ngIfElse", _r2);
    } }, directives: [_shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_4__["OnlyLoggedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/platform-detector/platform-detector.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/platform-detector/platform-detector.service.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetectorService", function() { return PlatformDetectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class PlatformDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    isPlatformBrowser() {
        console.log(this.platformId);
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
    }
}
PlatformDetectorService.ɵfac = function PlatformDetectorService_Factory(t) { return new (t || PlatformDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
PlatformDetectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlatformDetectorService, factory: PlatformDetectorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformDetectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/token/token.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/token/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const KEY = 'authToken';
class TokenService {
    hasToken() {
        return !!this.getToken();
    }
    getToken() {
        return window.localStorage.getItem(KEY);
    }
    setToken(token) {
        return window.localStorage.setItem(KEY, token);
    }
    removeToken() {
        return window.localStorage.removeItem(KEY);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../token/token.service */ "./src/app/core/token/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
class UserService {
    constructor(tokenService, http) {
        this.tokenService = tokenService;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.userName = '';
        tokenService.hasToken() && this.setUserAndNotify();
    }
    getUser() {
        return this.userSubject.asObservable();
    }
    setToken(token) {
        this.tokenService.setToken(token);
        this.setUserAndNotify();
    }
    setUserAndNotify() {
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.tokenService.getToken());
        this.userName = user.name;
        this.userSubject.next(user);
    }
    isLogged() {
        return !!this.tokenService.hasToken();
    }
    getUsername() {
        return this.userName;
    }
    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }
    signUp(userForm) {
        return this.http.post(`${API_URL}/user/signup`, userForm);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/errors/errors.module.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/errors.module.ts ***!
  \*****************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");




class ErrorsModule {
}
ErrorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorsModule });
ErrorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorsModule_Factory(t) { return new (t || ErrorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorsModule, { declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 7, vars: 0, consts: [[1, "text-center"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Verify the URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/photos/filter-by-description.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/photos/filter-by-description.pipe.ts ***!
  \******************************************************/
/*! exports provided: FilterByDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByDescriptionPipe", function() { return FilterByDescriptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterByDescriptionPipe {
    transform(photoList, description) {
        description = description.trim().toLowerCase();
        if (!description)
            return photoList;
        return photoList.filter(photo => photo.description.toLowerCase().includes(description));
    }
}
FilterByDescriptionPipe.ɵfac = function FilterByDescriptionPipe_Factory(t) { return new (t || FilterByDescriptionPipe)(); };
FilterByDescriptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterByDescription", type: FilterByDescriptionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByDescriptionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterByDescription'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/photos/photo-details/owner-only/owner-only.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/photos/photo-details/owner-only/owner-only.directive.ts ***!
  \*************************************************************************/
/*! exports provided: OwnerOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerOnlyDirective", function() { return OwnerOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/user/user.service */ "./src/app/core/user/user.service.ts");



class OwnerOnlyDirective {
    constructor(userService, renderer, element) {
        this.userService = userService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        this.userService.getUser()
            .subscribe(user => {
            if (!user || user.id !== this.photo.userId) {
                this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
            }
        });
    }
}
OwnerOnlyDirective.ɵfac = function OwnerOnlyDirective_Factory(t) { return new (t || OwnerOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OwnerOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OwnerOnlyDirective, selectors: [["", "olOwnerOnly", ""]], inputs: { photo: "photo" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[olOwnerOnly]'
            }]
    }], function () { return [{ type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { photo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo-details/photo-comments/photo-comments.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/photos/photo-details/photo-comments/photo-comments.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PhotoCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCommentsComponent", function() { return PhotoCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/only-logged/only-logged.directive */ "./src/app/shared/directives/only-logged/only-logged.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const _c0 = function (a1) { return ["/user", a1]; };
function PhotoCommentsComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, comment_r3.userName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r3.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, comment_r3.date, "dd-MM-yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r3.text, " ");
} }
function PhotoCommentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotoCommentsComponent_div_0_li_2_Template, 8, 9, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PhotoCommentsComponent_div_0_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sendComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comments_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comments_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.commentForm.invalid);
} }
class PhotoCommentsComponent {
    constructor(photoService, formBuilder) {
        this.photoService = photoService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)]]
        });
    }
    sendComment() {
        const comment = this.commentForm.get('comment').value;
        this.comments$ = this.photoService.sendComment(this.photoId, comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.photoService.getComments(this.photoId)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.commentForm.reset();
        }));
    }
}
PhotoCommentsComponent.ɵfac = function PhotoCommentsComponent_Factory(t) { return new (t || PhotoCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_photo_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PhotoCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoCommentsComponent, selectors: [["ol-photo-comments"]], inputs: { photoId: "photoId" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "list-unstyled", "comment-list"], [4, "ngFor", "ngForOf"], [1, "mt-4"], ["olOnlyLogged", "", 3, "formGroup", "submit"], [1, "input-group"], ["formControlName", "comment", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", "pull-left", 3, "disabled"], [1, "text-dark", "font-weight-bold", "mr-1", 3, "routerLink"], [1, "break-word", "mb-2"]], template: function PhotoCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoCommentsComponent_div_0_Template, 10, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.comments$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_5__["OnlyLoggedDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".comment-list[_ngcontent-%COMP%]{\r\n    height: 50vh;\r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3RvLWRldGFpbHMvcGhvdG8tY29tbWVudHMvcGhvdG8tY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9waG90b3MvcGhvdG8tZGV0YWlscy9waG90by1jb21tZW50cy9waG90by1jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtbGlzdHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-photo-comments',
                templateUrl: './photo-comments.component.html',
                styleUrls: ['./photo-comments.component.css']
            }]
    }], function () { return [{ type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { photoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo-details/photo-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/photos/photo-details/photo-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDetailsComponent", function() { return PhotoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var _shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/alert/alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../photo/ol-photo.component */ "./src/app/photos/photo/ol-photo.component.ts");
/* harmony import */ var _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/only-logged/only-logged.directive */ "./src/app/shared/directives/only-logged/only-logged.directive.ts");
/* harmony import */ var _owner_only_owner_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owner-only/owner-only.directive */ "./src/app/photos/photo-details/owner-only/owner-only.directive.ts");
/* harmony import */ var _photo_comments_photo_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-comments/photo-comments.component */ "./src/app/photos/photo-details/photo-comments/photo-comments.component.ts");











function PhotoDetailsComponent_div_0_ol_photo_comments_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-photo-comments", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photoId", ctx_r2.photoId);
} }
function PhotoDetailsComponent_div_0_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User has disabled comments for this photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhotoDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ol-photo", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoDetailsComponent_div_0_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const photo_r1 = ctx.ngIf; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.like(photo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoDetailsComponent_div_0_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PhotoDetailsComponent_div_0_ol_photo_comments_19_Template, 1, 1, "ol-photo-comments", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PhotoDetailsComponent_div_0_ng_template_20_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", photo_r1.url)("alt", photo_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r1.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", photo_r1.comments, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photo", photo_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", photo_r1.allowComments)("ngIfElse", _r3);
} }
class PhotoDetailsComponent {
    constructor(route, photoService, router, alertService, userService) {
        this.route = route;
        this.photoService = photoService;
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
    }
    ngOnInit() {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
        this.photo$.subscribe(() => { }, err => {
            this.router.navigate(['not-found']);
        });
    }
    delete() {
        this.photoService.delete(this.photoId)
            .subscribe(() => {
            this.alertService.success('Photo removed', true);
            this.router.navigate(['user', this.userService.getUsername()]);
        }, err => {
            this.alertService.danger('Cannot remove photo');
            console.log(err);
        });
    }
    like(photo) {
        this.photoService.like(photo.id)
            .subscribe(liked => {
            if (liked) {
                this.photo$ = this.photoService.findById(photo.id);
            }
        }, err => {
            this.alertService.danger(err.message);
        });
    }
}
PhotoDetailsComponent.ɵfac = function PhotoDetailsComponent_Factory(t) { return new (t || PhotoDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
PhotoDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoDetailsComponent, selectors: [["app-photo-details"]], decls: 2, vars: 3, consts: [["class", "container bg-white border", 4, "ngIf"], [1, "container", "bg-white", "border"], [1, "row"], [1, "col-lg-8"], [3, "url", "alt"], [1, "col-lg-4", "p-4"], [1, "text-left", "break-word"], [1, "text-left", "mb-4"], ["olOnlyLogged", "", 1, "pull-left"], [1, "fa", "fa-heart-o", "fa-2x", "mr-2", "ml-2", 3, "click"], [1, "fa", "fa-comment-o", "fa-2x", "mr-2", "ml-2"], ["olOwnerOnly", "", 1, "fa", "fa-trash-o", "fa-2x", "pull-right", 3, "photo", "click"], [3, "photoId", 4, "ngIf", "ngIfElse"], ["noComments", ""], [3, "photoId"]], template: function PhotoDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoDetailsComponent_div_0_Template, 22, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.photo$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_6__["OlPhotoComponent"], _shared_directives_only_logged_only_logged_directive__WEBPACK_IMPORTED_MODULE_7__["OnlyLoggedDirective"], _owner_only_owner_only_directive__WEBPACK_IMPORTED_MODULE_8__["OwnerOnlyDirective"], _photo_comments_photo_comments_component__WEBPACK_IMPORTED_MODULE_9__["PhotoCommentsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1kZXRhaWxzL3Bob3RvLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-details',
                templateUrl: './photo-details.component.html',
                styleUrls: ['./photo-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/photos/photo-details/photo-details.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/photos/photo-details/photo-details.module.ts ***!
  \**************************************************************/
/*! exports provided: PhotoDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDetailsModule", function() { return PhotoDetailsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _photo_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-details.component */ "./src/app/photos/photo-details/photo-details.component.ts");
/* harmony import */ var _photo_comments_photo_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-comments/photo-comments.component */ "./src/app/photos/photo-details/photo-comments/photo-comments.component.ts");
/* harmony import */ var _owner_only_owner_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./owner-only/owner-only.directive */ "./src/app/photos/photo-details/owner-only/owner-only.directive.ts");
/* harmony import */ var src_app_shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/directives/only-logged/only-logged.module */ "./src/app/shared/directives/only-logged/only-logged.module.ts");










class PhotoDetailsModule {
}
PhotoDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PhotoDetailsModule });
PhotoDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PhotoDetailsModule_Factory(t) { return new (t || PhotoDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__["PhotoModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            src_app_shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_8__["OnlyLoggedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PhotoDetailsModule, { declarations: [_photo_details_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDetailsComponent"], _photo_comments_photo_comments_component__WEBPACK_IMPORTED_MODULE_6__["PhotoCommentsComponent"], _owner_only_owner_only_directive__WEBPACK_IMPORTED_MODULE_7__["OwnerOnlyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__["PhotoModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        src_app_shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_8__["OnlyLoggedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]], exports: [_photo_details_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDetailsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PhotoDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_photo_details_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDetailsComponent"], _photo_comments_photo_comments_component__WEBPACK_IMPORTED_MODULE_6__["PhotoCommentsComponent"], _owner_only_owner_only_directive__WEBPACK_IMPORTED_MODULE_7__["OwnerOnlyDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__["PhotoModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    src_app_shared_directives_only_logged_only_logged_module__WEBPACK_IMPORTED_MODULE_8__["OnlyLoggedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ],
                exports: [_photo_details_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDetailsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFormComponent", function() { return PhotoFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/alert/alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/form-error/form-error.component */ "./src/app/shared/components/form-error/form-error.component.ts");
/* harmony import */ var _shared_directives_immediate_click_immediate_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/immediate-click/immediate-click.directive */ "./src/app/shared/directives/immediate-click/immediate-click.directive.ts");
/* harmony import */ var _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../photo/ol-photo.component */ "./src/app/photos/photo/ol-photo.component.ts");














function PhotoFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoFormComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhotoFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol-photo", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoFormComponent_ng_template_7_Template_ol_photo_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", ctx_r3.preview);
} }
const _c0 = function () { return [""]; };
function PhotoFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function PhotoFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" uploading ", ctx_r6.progress, "% ");
} }
class PhotoFormComponent {
    constructor(formBuilder, photoService, router, alertService, userService) {
        this.formBuilder = formBuilder;
        this.photoService = photoService;
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
        this.progress = 0;
    }
    ngOnInit() {
        this.photoForm = this.formBuilder.group({
            photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)],
            allowComments: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    upload() {
        const description = this.photoForm.get('description').value;
        const allowComments = this.photoForm.get('allowComments').value;
        this.photoService.upload(description, allowComments, this.photoFile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.router.navigate(['user', this.userService.getUsername()])))
            .subscribe((event) => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response) {
                this.alertService.success('Upload succesful', true);
            }
        }, err => {
            this.alertService.danger('Upload Error', true);
        });
    }
    handlePhoto(photo) {
        this.photoFile = photo;
        const reader = new FileReader();
        reader.onload = (event) => { this.preview = event.target.result; };
        reader.readAsDataURL(this.photoFile);
    }
}
PhotoFormComponent.ɵfac = function PhotoFormComponent_Factory(t) { return new (t || PhotoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_photo_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
PhotoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhotoFormComponent, selectors: [["ol-photo-form"]], decls: 21, vars: 7, consts: [[1, "container"], [1, "row", 3, "formGroup", "submit"], [1, "col-md-6", "text-center"], [1, "form-group"], ["olImmediateClick", "", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf", "ngIfElse"], ["hidden", "", "formControlName", "photo", "type", "file", "accept", "image/*", 3, "change"], ["inputFile", ""], ["previewImage", ""], ["inputName", "Photo", 3, "input"], [1, "col-md-6"], ["formControlName", "description", "placeholder", "photo description", 1, "form-control", "form-control-sm"], ["inputName", "Description", 3, "input"], [1, "text-muted"], ["formControlName", "allowComments", "type", "checkbox"], [4, "ngIf", "ngIfElse"], ["showProgress", ""], ["olImmediateClick", "", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-image", "fa-4x", "align-middle"], [1, "text-center"], [3, "url", "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "btn", "btn-secondary", "btn-block", 3, "routerLink"], [1, "text-center", "display-4"]], template: function PhotoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function PhotoFormComponent_Template_form_submit_1_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PhotoFormComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PhotoFormComponent_Template_input_change_5_listener($event) { return ctx.handlePhoto($event.target.files[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PhotoFormComponent_ng_template_7_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ol-form-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ol-form-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Allow comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PhotoFormComponent_div_18_Template, 5, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PhotoFormComponent_ng_template_19_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.photoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.preview)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("input", ctx.photoForm.get("photo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("input", ctx.photoForm.get("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.progress)("ngIfElse", _r5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_9__["FormErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _shared_directives_immediate_click_immediate_click_directive__WEBPACK_IMPORTED_MODULE_10__["ImmediateClickDirective"], _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_11__["OlPhotoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1mb3JtL3Bob3RvLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PhotoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ol-photo-form',
                templateUrl: './photo-form.component.html',
                styleUrls: ['./photo-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }, { type: src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.module.ts":
/*!********************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.module.ts ***!
  \********************************************************/
/*! exports provided: PhotoFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFormModule", function() { return PhotoFormModule; });
/* harmony import */ var _shared_directives_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/directives/immediate-click/immediate-click.module */ "./src/app/shared/directives/immediate-click/immediate-click.module.ts");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/form-error/form-error.module */ "./src/app/shared/components/form-error/form-error.module.ts");
/* harmony import */ var _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/components/vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _photo_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo-form.component */ "./src/app/photos/photo-form/photo-form.component.ts");










class PhotoFormModule {
}
PhotoFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PhotoFormModule });
PhotoFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PhotoFormModule_Factory(t) { return new (t || PhotoFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_6__["FormErrorModule"],
            _photo_photo_module__WEBPACK_IMPORTED_MODULE_1__["PhotoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared_directives_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_0__["ImmediateClickModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PhotoFormModule, { declarations: [_photo_form_component__WEBPACK_IMPORTED_MODULE_8__["PhotoFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_6__["FormErrorModule"],
        _photo_photo_module__WEBPACK_IMPORTED_MODULE_1__["PhotoModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _shared_directives_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_0__["ImmediateClickModule"]], exports: [_photo_form_component__WEBPACK_IMPORTED_MODULE_8__["PhotoFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PhotoFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_photo_form_component__WEBPACK_IMPORTED_MODULE_8__["PhotoFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_6__["FormErrorModule"],
                    _photo_photo_module__WEBPACK_IMPORTED_MODULE_1__["PhotoModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _shared_directives_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_0__["ImmediateClickModule"]
                ],
                exports: [_photo_form_component__WEBPACK_IMPORTED_MODULE_8__["PhotoFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/photos/photo-list/load-button/load-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/photos/photo-list/load-button/load-button.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadButtonComponent", function() { return LoadButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LoadButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadButtonComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No more photos to load. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoadButtonComponent {
    constructor() {
        this.hasMore = false;
    }
    ngOnInit() {
    }
}
LoadButtonComponent.ɵfac = function LoadButtonComponent_Factory(t) { return new (t || LoadButtonComponent)(); };
LoadButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadButtonComponent, selectors: [["ol-load-button"]], inputs: { hasMore: "hasMore" }, decls: 3, vars: 2, consts: [["class", "btn btn-primary", 4, "ngIf", "ngIfElse"], ["message", ""], [1, "btn", "btn-primary"], [1, "text-center", "text-muted"]], template: function LoadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadButtonComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadButtonComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasMore)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1saXN0L2xvYWQtYnV0dG9uL2xvYWQtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-load-button',
                templateUrl: './load-button.component.html',
                styleUrls: ['./load-button.component.css']
            }]
    }], function () { return []; }, { hasMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/photos/photo-list/search/search.component.ts");
/* harmony import */ var _photo_row_photo_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-row/photo-row.component */ "./src/app/photos/photo-list/photo-row/photo-row.component.ts");
/* harmony import */ var _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-button/load-button.component */ "./src/app/photos/photo-list/load-button/load-button.component.ts");
/* harmony import */ var _filter_by_description_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter-by-description.pipe */ "./src/app/photos/filter-by-description.pipe.ts");








class PhotoListComponent {
    constructor(activatedRoute, photoService) {
        this.activatedRoute = activatedRoute;
        this.photoService = photoService;
        this.photos = [];
        this.filter = '';
        this.hasMore = true;
        this.userName = '';
        this.currentPage = 1;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.userName = params.userName;
            this.photos = this.activatedRoute.snapshot.data.photos;
        });
    }
    loadMore() {
        this.filter = '';
        this.photoService.getPhotosByUsernamePaginated(this.userName, ++this.currentPage)
            .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            if (!photos.length)
                this.hasMore = false;
        });
    }
}
PhotoListComponent.ɵfac = function PhotoListComponent_Factory(t) { return new (t || PhotoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"])); };
PhotoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoListComponent, selectors: [["ol-photo-list"]], decls: 6, vars: 6, consts: [[3, "value", "onType"], [1, "container"], [3, "photos"], [1, "text-center", "mb-3", "mt-3"], [3, "hasMore", "click"]], template: function PhotoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onType", function PhotoListComponent_Template_ol_search_onType_0_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ol-photo-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filterByDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol-load-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_ol_load_button_click_5_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photos", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.photos, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasMore", false);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _photo_row_photo_row_component__WEBPACK_IMPORTED_MODULE_4__["PhotoRowComponent"], _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_5__["LoadButtonComponent"]], pipes: [_filter_by_description_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterByDescriptionPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-photo-list',
                templateUrl: './photo-list.component.html',
                styleUrls: ['./photo-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.module.ts ***!
  \********************************************************/
/*! exports provided: PhotoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListModule", function() { return PhotoListModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-button/load-button.component */ "./src/app/photos/photo-list/load-button/load-button.component.ts");
/* harmony import */ var _photo_row_photo_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-row/photo-row.component */ "./src/app/photos/photo-list/photo-row/photo-row.component.ts");
/* harmony import */ var _photo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-list.component */ "./src/app/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _filter_by_description_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter-by-description.pipe */ "./src/app/photos/filter-by-description.pipe.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/photos/photo-list/search/search.component.ts");
/* harmony import */ var _shared_directives_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/directives/darken-on-hover/darken-on-hover.module */ "./src/app/shared/directives/darken-on-hover/darken-on-hover.module.ts");
/* harmony import */ var _shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../shared/components/card/card.module */ "./src/app/shared/components/card/card.module.ts");












class PhotoListModule {
}
PhotoListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PhotoListModule });
PhotoListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PhotoListModule_Factory(t) { return new (t || PhotoListModule)(); }, imports: [[
            _photo_photo_module__WEBPACK_IMPORTED_MODULE_3__["PhotoModule"],
            _shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
            _shared_directives_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_9__["DarkenOnHoverModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhotoListModule, { declarations: [_photo_list_component__WEBPACK_IMPORTED_MODULE_6__["PhotoListComponent"],
        _photo_row_photo_row_component__WEBPACK_IMPORTED_MODULE_5__["PhotoRowComponent"],
        _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_4__["LoadButtonComponent"],
        _filter_by_description_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterByDescriptionPipe"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]], imports: [_photo_photo_module__WEBPACK_IMPORTED_MODULE_3__["PhotoModule"],
        _shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
        _shared_directives_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_9__["DarkenOnHoverModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _photo_list_component__WEBPACK_IMPORTED_MODULE_6__["PhotoListComponent"],
                    _photo_row_photo_row_component__WEBPACK_IMPORTED_MODULE_5__["PhotoRowComponent"],
                    _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_4__["LoadButtonComponent"],
                    _filter_by_description_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterByDescriptionPipe"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]
                ],
                imports: [
                    _photo_photo_module__WEBPACK_IMPORTED_MODULE_3__["PhotoModule"],
                    _shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
                    _shared_directives_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_9__["DarkenOnHoverModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.resolver.ts ***!
  \**********************************************************/
/*! exports provided: PhotoListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListResolver", function() { return PhotoListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");



class PhotoListResolver {
    constructor(photoService) {
        this.photoService = photoService;
    }
    resolve(route, state) {
        const userName = route.params.userName;
        return this.photoService.getPhotosByUsernamePaginated(userName, 1);
    }
}
PhotoListResolver.ɵfac = function PhotoListResolver_Factory(t) { return new (t || PhotoListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_photo_photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"])); };
PhotoListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhotoListResolver, factory: PhotoListResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _photo_photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/photos/photo-list/photo-row/photo-row.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/photos/photo-list/photo-row/photo-row.component.ts ***!
  \********************************************************************/
/*! exports provided: PhotoRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoRowComponent", function() { return PhotoRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directives_darken_on_hover_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/darken-on-hover/darken-on-hover.directive */ "./src/app/shared/directives/darken-on-hover/darken-on-hover.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../photo/ol-photo.component */ "./src/app/photos/photo/ol-photo.component.ts");







function PhotoRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, no photos\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/photo", a1]; };
function PhotoRowComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ol-photo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, photo_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", photo_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", photo_r4.url)("alt", photo_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", photo_r4.likes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", photo_r4.comments, " ");
} }
function PhotoRowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoRowComponent_div_1_div_1_Template, 10, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
class PhotoRowComponent {
    constructor() {
        this.photos = [];
        this.rows = [];
    }
    ngOnChanges(changes) {
        if (changes.photos)
            this.buildRows();
    }
    buildRows() {
        this.rows = [];
        for (let i = 0; i < this.photos.length; i += 3) {
            this.rows.push(this.photos.slice(i, i + 3));
        }
    }
}
PhotoRowComponent.ɵfac = function PhotoRowComponent_Factory(t) { return new (t || PhotoRowComponent)(); };
PhotoRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoRowComponent, selectors: [["ol-photo-row"]], inputs: { photos: "photos" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "text-center text-muted", 4, "ngIf"], ["class", "row no-gutters", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted"], [1, "row", "no-gutters"], ["class", "col-4 col-md-4 mb-5", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-4", "mb-5"], ["olDarkenOnHover", ""], [3, "routerLink"], ["routerLinkActive", "router-link-active", 3, "title"], [3, "url", "alt"], [1, "text-center"], ["aria-hidden", "true", 1, "fa", "fa-heart-o", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-comments", "mr-2", "ml-2"]], template: function PhotoRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoRowComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoRowComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.photos.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_directives_darken_on_hover_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__["DarkenOnHoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _photo_ol_photo_component__WEBPACK_IMPORTED_MODULE_5__["OlPhotoComponent"]], styles: ["a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #000;  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3RvLWxpc3QvcGhvdG8tcm93L3Bob3RvLXJvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1saXN0L3Bob3RvLXJvdy9waG90by1yb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwOyAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-photo-row',
                templateUrl: './photo-row.component.html',
                styleUrls: ['./photo-row.component.css']
            }]
    }], function () { return []; }, { photos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo-list/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/photos/photo-list/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class SearchComponent {
    constructor() {
        this.value = '';
        this.onType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.debounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.debounce
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300))
            .subscribe(filter => this.onType.emit(filter));
    }
    ngOnDestroy() {
        this.debounce.unsubscribe();
    }
    mudou() {
        console.log('mudou');
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["ol-search"]], inputs: { value: "value" }, outputs: { onType: "onType" }, decls: 3, vars: 1, consts: [[1, "text-center", "mb-3", "mt-3"], ["aria-hidden", "true", 1, "fa", "fa-search", "mr-2"], ["type", "search", "placeholder", "Search...", "autofocus", "", 1, "rounded", 3, "value", "input"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_2_listener($event) { return ctx.debounce.next($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1saXN0L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo/ol-photo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/photos/photo/ol-photo.component.ts ***!
  \****************************************************/
/*! exports provided: OlPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlPhotoComponent", function() { return OlPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");



const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
class OlPhotoComponent {
    constructor() {
        this._url = '';
        this.alt = '';
    }
    set url(url) {
        if (!url.startsWith('data')) {
            this._url = `${API_URL}/imgs/${url}`;
        }
        else {
            this._url = url;
        }
    }
    ;
    get url() {
        return this._url;
    }
}
OlPhotoComponent.ɵfac = function OlPhotoComponent_Factory(t) { return new (t || OlPhotoComponent)(); };
OlPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlPhotoComponent, selectors: [["ol-photo"]], inputs: { url: "url", alt: "alt" }, decls: 1, vars: 2, consts: [[1, "img-thumbnail", 3, "src", "alt"]], template: function OlPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by9vbC1waG90by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-photo',
                templateUrl: './ol-photo.component.html',
                styleUrls: ['./ol-photo.component.css']
            }]
    }], null, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/photos/photo/photo.module.ts":
/*!**********************************************!*\
  !*** ./src/app/photos/photo/photo.module.ts ***!
  \**********************************************/
/*! exports provided: PhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModule", function() { return PhotoModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ol_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ol-photo.component */ "./src/app/photos/photo/ol-photo.component.ts");





class PhotoModule {
}
PhotoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PhotoModule });
PhotoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PhotoModule_Factory(t) { return new (t || PhotoModule)(); }, imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhotoModule, { declarations: [_ol_photo_component__WEBPACK_IMPORTED_MODULE_3__["OlPhotoComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_ol_photo_component__WEBPACK_IMPORTED_MODULE_3__["OlPhotoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_ol_photo_component__WEBPACK_IMPORTED_MODULE_3__["OlPhotoComponent"]],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [_ol_photo_component__WEBPACK_IMPORTED_MODULE_3__["OlPhotoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/photos/photo/photo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/photos/photo/photo.service.ts ***!
  \***********************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");







const API = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
class PhotoService {
    constructor(http) {
        this.http = http;
    }
    getPhotosByUsername(username) {
        return this.http.get(`${API}/${username}/photos`);
    }
    getPhotosByUsernamePaginated(username, page) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', page.toString());
        return this.http.get(`${API}/${username}/photos`, { params });
    }
    upload(description, allowComments, photoFile) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', photoFile);
        return this.http.post(`${API}/photos/upload`, formData, {
            observe: 'events',
            reportProgress: true
        });
    }
    findById(photoId) {
        return this.http.get(`${API}/photos/${photoId}`);
    }
    getComments(photoId) {
        return this.http.get(`${API}/photos/${photoId}/comments`);
    }
    sendComment(photoId, commentText) {
        return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
    }
    delete(photoId) {
        return this.http.delete(`${API}/photos/${photoId}`);
    }
    like(photoId) {
        return this.http.post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => true))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return err.status === 304 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
}
PhotoService.ɵfac = function PhotoService_Factory(t) { return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoService, factory: PhotoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/photos/photos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/photos/photos.module.ts ***!
  \*****************************************/
/*! exports provided: PhotosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosModule", function() { return PhotosModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_details_photo_details_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-details/photo-details.module */ "./src/app/photos/photo-details/photo-details.module.ts");
/* harmony import */ var _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-form/photo-form.module */ "./src/app/photos/photo-form/photo-form.module.ts");
/* harmony import */ var _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-list/photo-list.module */ "./src/app/photos/photo-list/photo-list.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class PhotosModule {
}
PhotosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PhotosModule });
PhotosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function PhotosModule_Factory(t) { return new (t || PhotosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_3__["PhotoListModule"],
            _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_2__["PhotoFormModule"],
            _photo_details_photo_details_module__WEBPACK_IMPORTED_MODULE_1__["PhotoDetailsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PhotosModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_3__["PhotoListModule"],
        _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_2__["PhotoFormModule"],
        _photo_details_photo_details_module__WEBPACK_IMPORTED_MODULE_1__["PhotoDetailsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PhotosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_3__["PhotoListModule"],
                    _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_2__["PhotoFormModule"],
                    _photo_details_photo_details_module__WEBPACK_IMPORTED_MODULE_1__["PhotoDetailsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r1.alertType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r1.message, "\n");
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.time = 3000;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert()
            .subscribe(alert => {
            if (!alert) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), this.time);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(a => a != alert);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["ol-alert"]], inputs: { time: "time" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css']
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, { time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/alert/alert.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared/components/alert/alert.component.ts");




class AlertModule {
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/alert/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");






class AlertService {
    constructor(router) {
        this.keepAfterNavigate = false;
        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                if (this.keepAfterNavigate) {
                    this.keepAfterNavigate = false;
                }
                else {
                    this.clear();
                }
            }
        });
    }
    info(message, keepAfterNavigate = false) {
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].INFO, message, keepAfterNavigate);
    }
    success(message, keepAfterNavigate = false) {
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].SUCCESS, message, keepAfterNavigate);
    }
    warning(message, keepAfterNavigate = false) {
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].WARNING, message, keepAfterNavigate);
    }
    danger(message, keepAfterNavigate = false) {
        this.alert(_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].DANGER, message, keepAfterNavigate);
    }
    getAlert() {
        return this.alertSubject.asObservable();
    }
    alert(alertType, message, keepAfterNavigate = false) {
        this.keepAfterNavigate = keepAfterNavigate;
        this.alertSubject.next(new _alert__WEBPACK_IMPORTED_MODULE_3__["Alert"](alertType, message));
    }
    clear() {
        this.alertSubject.next(null);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/alert/alert.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/alert/alert.ts ***!
  \**************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(alertType, message) {
        this.alertType = alertType;
        this.message = message;
    }
}
var AlertType;
(function (AlertType) {
    AlertType["SUCCESS"] = "success";
    AlertType["WARNING"] = "warning";
    AlertType["DANGER"] = "danger";
    AlertType["INFO"] = "info";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class CardComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["ol-card"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "card", "border-light", "text-center"], [1, "card-header"], [1, "card-block", "text-justify"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/card/card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/card/card.module.ts ***!
  \*******************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/shared/components/card/card.component.ts");




class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/form-error/form-error.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/form-error/form-error.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorComponent", function() { return FormErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vmessage/vmessage.component */ "./src/app/shared/components/vmessage/vmessage.component.ts");




function FormErrorComponent_div_0_div_1_ol_vmessage_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 4);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "", ctx_r4.inputName, " is required");
} }
function FormErrorComponent_div_0_div_1_ol_vmessage_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("message", "", ctx_r5.inputName, " minimum length is ", ctx_r5.input.errors.minlength.requiredLength, "");
} }
function FormErrorComponent_div_0_div_1_ol_vmessage_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 4);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("message", "", ctx_r6.inputName, " maximum length is ", ctx_r6.input.errors.maxlength.requiredLength, "");
} }
function FormErrorComponent_div_0_div_1_ol_vmessage_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 4);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "", ctx_r7.inputName, " is not a valid email");
} }
function FormErrorComponent_div_0_div_1_ol_vmessage_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 4);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "", ctx_r8.inputName, " must be lower case");
} }
function FormErrorComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormErrorComponent_div_0_div_1_ol_vmessage_1_Template, 1, 1, "ol-vmessage", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormErrorComponent_div_0_div_1_ol_vmessage_2_Template, 1, 2, "ol-vmessage", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormErrorComponent_div_0_div_1_ol_vmessage_3_Template, 1, 2, "ol-vmessage", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormErrorComponent_div_0_div_1_ol_vmessage_4_Template, 1, 1, "ol-vmessage", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormErrorComponent_div_0_div_1_ol_vmessage_5_Template, 1, 1, "ol-vmessage", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.input.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.input.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.input.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.input.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.input.errors.lowerCase);
} }
function FormErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormErrorComponent_div_0_div_1_Template, 6, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.input.errors)("ngIfElse", _r1);
} }
function FormErrorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("message", "", ctx_r2.inputName, " is valid");
} }
class FormErrorComponent {
    constructor() { }
    ngOnInit() { }
}
FormErrorComponent.ɵfac = function FormErrorComponent_Factory(t) { return new (t || FormErrorComponent)(); };
FormErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormErrorComponent, selectors: [["ol-form-error"]], inputs: { input: "input", inputName: "inputName" }, decls: 3, vars: 1, consts: [[4, "ngIf"], ["success", ""], [4, "ngIf", "ngIfElse"], [3, "message", 4, "ngIf"], [3, "message"], ["type", "success", 3, "message"]], template: function FormErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormErrorComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormErrorComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.touched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_2__["VmessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0tZXJyb3IvZm9ybS1lcnJvci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-form-error',
                templateUrl: './form-error.component.html',
                styleUrls: ['./form-error.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/form-error/form-error.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/form-error/form-error.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorModule", function() { return FormErrorModule; });
/* harmony import */ var _vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-error.component */ "./src/app/shared/components/form-error/form-error.component.ts");





class FormErrorModule {
}
FormErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormErrorModule });
FormErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FormErrorModule_Factory(t) { return new (t || FormErrorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_0__["VmessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormErrorModule, { declarations: [_form_error_component__WEBPACK_IMPORTED_MODULE_3__["FormErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_0__["VmessageModule"]], exports: [_form_error_component__WEBPACK_IMPORTED_MODULE_3__["FormErrorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_form_error_component__WEBPACK_IMPORTED_MODULE_3__["FormErrorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_0__["VmessageModule"]
                ],
                exports: [_form_error_component__WEBPACK_IMPORTED_MODULE_3__["FormErrorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading/loading-type.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/loading/loading-type.ts ***!
  \***********************************************************/
/*! exports provided: LoadingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingType", function() { return LoadingType; });
var LoadingType;
(function (LoadingType) {
    LoadingType["LOADING"] = "loading";
    LoadingType["STOPPED"] = "stopped";
})(LoadingType || (LoadingType = {}));


/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.loading$ = this.loadingService.getLoading().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(type => type.valueOf()));
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["ol-loading"]], decls: 2, vars: 3, consts: [[3, "ngClass"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".loading[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    background: linear-gradient(270deg, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee);\r\n    -webkit-animation: progress 2s ease;\r\n            animation: progress 2s ease;\r\n    height: 0.2em;\r\n}\r\n\r\n@-webkit-keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.stopped[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0dBQWtHO0lBQ2xHLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjAwMDAsICNmZmE1MDAsICNmZmZmMDAsICMwMDgwMDAsICMwMDAwZmYsICM0YjAwODIsICNlZTgyZWUpO1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyBlYXNlO1xyXG4gICAgaGVpZ2h0OiAwLjJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN0b3BwZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return [{ type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading/loading.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");





class LoadingInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.loadingService.stop();
            }
            else {
                this.loadingService.start();
            }
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading/loading.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.module.ts ***!
  \*************************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.interceptor */ "./src/app/shared/components/loading/loading.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.component */ "./src/app/shared/components/loading/loading.component.ts");






class LoadingModule {
}
LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoadingModule });
LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_0__["LoadingInterceptor"],
            multi: true
        }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoadingModule, { declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_0__["LoadingInterceptor"],
                        multi: true
                    }]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading/loading.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _loading_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-type */ "./src/app/shared/components/loading/loading-type.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class LoadingService {
    constructor() {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getLoading() {
        return this.loadingSubject.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_loading_type__WEBPACK_IMPORTED_MODULE_0__["LoadingType"].LOADING));
    }
    start() {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_0__["LoadingType"].LOADING);
    }
    stop() {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_0__["LoadingType"].STOPPED);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "active-menu": a0 }; };
const _c1 = ["*"];
class MenuComponent {
    constructor() {
        this.isShown = false;
    }
    ngOnInit() {
    }
    toggle() {
        this.isShown = !this.isShown;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["ol-menu"]], ngContentSelectors: _c1, decls: 5, vars: 3, consts: [[3, "ngClass"], [1, "menu-bar"], [1, "fa", "fa-window-close", 3, "click"], [1, "overlay", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_i_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_4_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isShown));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menu-bar[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 90%;\r\n    max-width: 320px;\r\n    top: 0;\r\n    height: 100%;\r\n    left: -90%;\r\n    background-color: #f0f0f0;\r\n    padding: 1em;\r\n    transition: left 0.3 ease-out;\r\n    z-index: 1;\r\n}\r\n\r\n.active-menu[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]{\r\n    left: 0;\r\n}\r\n\r\n.active-menu[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAtOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4zIGVhc2Utb3V0O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmFjdGl2ZS1tZW51IC5tZW51LWJhcntcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5hY3RpdmUtbWVudSAub3ZlcmxheXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/menu/menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/menu/menu.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/shared/components/menu/menu.component.ts");




class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/vmessage/vmessage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/vmessage/vmessage.component.ts ***!
  \******************************************************************/
/*! exports provided: VmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmessageComponent", function() { return VmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VmessageComponent {
    constructor() {
        this.message = '';
        this.type = 'danger';
    }
    ngOnInit() {
    }
}
VmessageComponent.ɵfac = function VmessageComponent_Factory(t) { return new (t || VmessageComponent)(); };
VmessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VmessageComponent, selectors: [["ol-vmessage"]], inputs: { message: "message", type: "type" }, decls: 2, vars: 4, template: function VmessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", ctx.type, " d-block mt-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ZtZXNzYWdlL3ZtZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VmessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ol-vmessage',
                templateUrl: './vmessage.component.html',
                styleUrls: ['./vmessage.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/vmessage/vmessage.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/vmessage/vmessage.module.ts ***!
  \***************************************************************/
/*! exports provided: VmessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmessageModule", function() { return VmessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vmessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vmessage.component */ "./src/app/shared/components/vmessage/vmessage.component.ts");




class VmessageModule {
}
VmessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VmessageModule });
VmessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VmessageModule_Factory(t) { return new (t || VmessageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VmessageModule, { declarations: [_vmessage_component__WEBPACK_IMPORTED_MODULE_2__["VmessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_vmessage_component__WEBPACK_IMPORTED_MODULE_2__["VmessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VmessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vmessage_component__WEBPACK_IMPORTED_MODULE_2__["VmessageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_vmessage_component__WEBPACK_IMPORTED_MODULE_2__["VmessageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/darken-on-hover/darken-on-hover.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/directives/darken-on-hover/darken-on-hover.directive.ts ***!
  \********************************************************************************/
/*! exports provided: DarkenOnHoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenOnHoverDirective", function() { return DarkenOnHoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DarkenOnHoverDirective {
    constructor(element, render) {
        this.element = element;
        this.render = render;
        this.brightness = '70%';
    }
    darkenOn() {
        this.render.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
    }
    darkenOff() {
        this.render.setStyle(this.element.nativeElement, 'filter', `brightness(100%)`);
    }
}
DarkenOnHoverDirective.ɵfac = function DarkenOnHoverDirective_Factory(t) { return new (t || DarkenOnHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DarkenOnHoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DarkenOnHoverDirective, selectors: [["", "olDarkenOnHover", ""]], hostBindings: function DarkenOnHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function DarkenOnHoverDirective_mouseover_HostBindingHandler() { return ctx.darkenOn(); })("mouseleave", function DarkenOnHoverDirective_mouseleave_HostBindingHandler() { return ctx.darkenOff(); });
    } }, inputs: { brightness: "brightness" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DarkenOnHoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[olDarkenOnHover]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { brightness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], darkenOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseover']
        }], darkenOff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/darken-on-hover/darken-on-hover.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/directives/darken-on-hover/darken-on-hover.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DarkenOnHoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenOnHoverModule", function() { return DarkenOnHoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darken-on-hover.directive */ "./src/app/shared/directives/darken-on-hover/darken-on-hover.directive.ts");




class DarkenOnHoverModule {
}
DarkenOnHoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DarkenOnHoverModule });
DarkenOnHoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DarkenOnHoverModule_Factory(t) { return new (t || DarkenOnHoverModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DarkenOnHoverModule, { declarations: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__["DarkenOnHoverDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__["DarkenOnHoverDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DarkenOnHoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__["DarkenOnHoverDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_2__["DarkenOnHoverDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/immediate-click/immediate-click.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/directives/immediate-click/immediate-click.directive.ts ***!
  \********************************************************************************/
/*! exports provided: ImmediateClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmediateClickDirective", function() { return ImmediateClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/platform-detector/platform-detector.service */ "./src/app/core/platform-detector/platform-detector.service.ts");



class ImmediateClickDirective {
    constructor(element, platformDetectorService) {
        this.element = element;
        this.platformDetectorService = platformDetectorService;
    }
    ngOnInit() {
        this.platformDetectorService.isPlatformBrowser() && this.element.nativeElement.click();
    }
}
ImmediateClickDirective.ɵfac = function ImmediateClickDirective_Factory(t) { return new (t || ImmediateClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_1__["PlatformDetectorService"])); };
ImmediateClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImmediateClickDirective, selectors: [["", "olImmediateClick", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImmediateClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[olImmediateClick]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_1__["PlatformDetectorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/immediate-click/immediate-click.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/directives/immediate-click/immediate-click.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ImmediateClickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmediateClickModule", function() { return ImmediateClickModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immediate-click.directive */ "./src/app/shared/directives/immediate-click/immediate-click.directive.ts");




class ImmediateClickModule {
}
ImmediateClickModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImmediateClickModule });
ImmediateClickModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImmediateClickModule_Factory(t) { return new (t || ImmediateClickModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImmediateClickModule, { declarations: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImmediateClickModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/only-logged/only-logged.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/directives/only-logged/only-logged.directive.ts ***!
  \************************************************************************/
/*! exports provided: OnlyLoggedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedDirective", function() { return OnlyLoggedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");



class OnlyLoggedDirective {
    constructor(userService, renderer, element) {
        this.userService = userService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        this.parentNode = this.renderer.parentNode(this.element.nativeElement);
        this.nextNode = this.renderer.nextSibling(this.element.nativeElement);
        this.userService.getUser()
            .subscribe(user => {
            if (!user) {
                this.renderer.removeChild(this.parentNode, this.element.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.parentNode, this.element.nativeElement, this.nextNode);
            }
        });
    }
}
OnlyLoggedDirective.ɵfac = function OnlyLoggedDirective_Factory(t) { return new (t || OnlyLoggedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OnlyLoggedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnlyLoggedDirective, selectors: [["", "olOnlyLogged", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyLoggedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[olOnlyLogged]' }]
    }], function () { return [{ type: src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/only-logged/only-logged.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/directives/only-logged/only-logged.module.ts ***!
  \*********************************************************************/
/*! exports provided: OnlyLoggedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedModule", function() { return OnlyLoggedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _only_logged_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./only-logged.directive */ "./src/app/shared/directives/only-logged/only-logged.directive.ts");




class OnlyLoggedModule {
}
OnlyLoggedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlyLoggedModule });
OnlyLoggedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlyLoggedModule_Factory(t) { return new (t || OnlyLoggedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlyLoggedModule, { declarations: [_only_logged_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_only_logged_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnlyLoggedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_only_logged_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedDirective"]],
                declarations: [_only_logged_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedDirective"]],
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    apiUrl: '/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Documents\dev\angular\alurapic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map