(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");






const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class AuthService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    authenticate(userName, password) {
        return this.http.post(`${API_URL}/user/login`, {
            userName,
            password
        }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => {
            const authToken = res.headers.get('x-access-token');
            this.userService.setToken(authToken);
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/auth/login.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/login.guard.ts ***!
  \******************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class LoginGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.userService.isLogged()) {
            this.router.navigate(['user', this.userService.getUsername()]);
            return false;
        }
        return true;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-6", "col-md-6"], ["src", "assets/img/home.jpg", 1, "img-fluid", "d-none", "d-sm-block"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/components/vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/components/form-error/form-error.module */ "./src/app/shared/components/form-error/form-error.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");











class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_8__["FormErrorModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_8__["FormErrorModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VmessageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _shared_components_form_error_form_error_module__WEBPACK_IMPORTED_MODULE_8__["FormErrorModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_0__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../core/auth/login.guard */ "./src/app/core/auth/login.guard.ts");








const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]],
        children: [
            {
                path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"],
                data: {
                    title: 'Sign up'
                }
            }
        ]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/platform-detector/platform-detector.service */ "./src/app/core/platform-detector/platform-detector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/form-error/form-error.component */ "./src/app/shared/components/form-error/form-error.component.ts");
/* harmony import */ var _shared_components_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/vmessage/vmessage.component */ "./src/app/shared/components/vmessage/vmessage.component.ts");










const _c0 = ["loginFormInput"];
function LoginComponent_ol_vmessage_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ol-vmessage", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r0.erro);
} }
const _c1 = function () { return ["signup"]; };
class LoginComponent {
    constructor(formBuilder, authService, router, platformDetectorService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.platformDetectorService = platformDetectorService;
        this.erro = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() &&
            this.loginFormInput.nativeElement.focus();
    }
    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService
            .authenticate(userName, password)
            .subscribe(() => {
            this.router.navigate(['user', userName]);
        }, err => {
            console.log(err);
            this.erro = 'Usuário ou senha inválido';
            this.platformDetectorService.isPlatformBrowser() &&
                this.loginFormInput.nativeElement.focus();
            this.loginForm.reset();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__["PlatformDetectorService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginFormInput = _t.first);
    } }, decls: 18, vars: 7, consts: [[1, "container", "pt-5"], [3, "message", 4, "ngIf"], [1, "form", 3, "formGroup", "submit"], [1, "form-group"], ["for", "userName"], ["id", "userName", "formControlName", "userName", "placeholder", "User name", 1, "form-control"], ["loginFormInput", ""], ["inputName", "User name", 3, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], ["inputName", "Password", 3, "input"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "btn", "btn-link", "btn-block", 3, "routerLink"], [3, "message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ol_vmessage_1_Template, 1, 1, "ol-vmessage", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ol-form-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ol-form-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Not a member? Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.erro.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx.loginForm.get("userName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_6__["FormErrorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_7__["VmessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_4__["PlatformDetectorService"] }]; }, { loginFormInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loginFormInput']
        }] }); })();


/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_validators_lower_case_validator_lower_case_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators/lower-case-validator/lower-case.validator */ "./src/app/shared/validators/lower-case-validator/lower-case.validator.ts");
/* harmony import */ var _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/platform-detector/platform-detector.service */ "./src/app/core/platform-detector/platform-detector.service.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/form-error/form-error.component */ "./src/app/shared/components/form-error/form-error.component.ts");
/* harmony import */ var _shared_components_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/vmessage/vmessage.component */ "./src/app/shared/components/vmessage/vmessage.component.ts");











const _c0 = ["emailFormInput"];
function SignupComponent_ol_vmessage_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ol-vmessage", 20);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx_r0.error);
} }
const _c1 = function () { return [""]; };
class SignupComponent {
    constructor(formBuilder, platformDetectorService, userService, router) {
        this.formBuilder = formBuilder;
        this.platformDetectorService = platformDetectorService;
        this.userService = userService;
        this.router = router;
        this.error = '';
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20), src_app_shared_validators_lower_case_validator_lower_case_validator__WEBPACK_IMPORTED_MODULE_2__["lowerCaseValidator"]]],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]]
        });
    }
    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailFormInput.nativeElement.focus();
    }
    signUp() {
        const userForm = this.signUpForm.getRawValue();
        this.userService.signUp(userForm)
            .subscribe(_ => {
            this.router.navigate(['']);
        }, err => {
            console.log(err);
            this.error = err.message;
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_3__["PlatformDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], viewQuery: function SignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.emailFormInput = _t.first);
    } }, decls: 30, vars: 9, consts: [[1, "container", "pt-5"], [3, "message", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control"], ["emailFormInput", ""], ["inputName", "Email", 3, "input"], ["for", "userName"], ["id", "userName", "formControlName", "userName", "placeholder", "User name", 1, "form-control"], ["loginFormInput", ""], ["inputName", "User name", 3, "input"], ["for", "fullName"], ["id", "fullName", "formControlName", "fullName", "placeholder", "Full name", 1, "form-control"], ["inputName", "Full name", 3, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], ["inputName", "Password", 3, "input"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "btn", "btn-link", "btn-block", 3, "routerLink"], [3, "message"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_ol_vmessage_1_Template, 1, 1, "ol-vmessage", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ol-form-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ol-form-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ol-form-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ol-form-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_26_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Already a member? Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("input", ctx.signUpForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("input", ctx.signUpForm.get("userName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("input", ctx.signUpForm.get("fullName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("input", ctx.signUpForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.signUpForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_7__["FormErrorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_vmessage_vmessage_component__WEBPACK_IMPORTED_MODULE_8__["VmessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _core_platform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_3__["PlatformDetectorService"] }, { type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { emailFormInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['emailFormInput']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/validators/lower-case-validator/lower-case.validator.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/validators/lower-case-validator/lower-case.validator.ts ***!
  \********************************************************************************/
/*! exports provided: lowerCaseValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCaseValidator", function() { return lowerCaseValidator; });
function lowerCaseValidator(control) {
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map