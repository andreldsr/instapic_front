(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(e,r,t){"use strict";t.r(r),t.d(r,"HomeModule",(function(){return j}));var o=t("tyNb"),n=t("3Pt+");function i(e){return e.value.trim()&&!/^[a-z0-9_\-]+$/.test(e.value)?{lowerCase:!0}:null}var s=t("fXoL"),a=t("QynK"),c=t("ryO2"),u=t("ofXK"),l=t("Ju5x"),m=t("xX17");const b=["emailFormInput"];function p(e,r){if(1&e&&s.Lb(0,"ol-vmessage",20),2&e){const e=s.Xb();s.dc("message",e.error)}}const d=function(){return[""]};let f=(()=>{class e{constructor(e,r,t,o){this.formBuilder=e,this.platformDetectorService=r,this.userService=t,this.router=o,this.error=""}ngOnInit(){this.signUpForm=this.formBuilder.group({email:["",[n.j.required,n.j.email]],userName:["",[n.j.required,n.j.minLength(4),n.j.maxLength(20),i]],fullName:["",[n.j.required,n.j.minLength(4),n.j.maxLength(40)]],password:["",[n.j.required,n.j.minLength(6),n.j.maxLength(20)]]})}ngAfterViewInit(){this.platformDetectorService.isPlatformBrowser()&&this.emailFormInput.nativeElement.focus()}signUp(){const e=this.signUpForm.getRawValue();this.userService.signUp(e).subscribe(e=>{this.router.navigate([""])},e=>{console.log(e),this.error=e.message})}}return e.\u0275fac=function(r){return new(r||e)(s.Kb(n.c),s.Kb(a.a),s.Kb(c.a),s.Kb(o.d))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-signup"]],viewQuery:function(e,r){var t;1&e&&s.sc(b,!0),2&e&&s.ic(t=s.Wb())&&(r.emailFormInput=t.first)},decls:30,vars:9,consts:[[1,"container","pt-5"],[3,"message",4,"ngIf"],[1,"form",3,"formGroup"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Email",1,"form-control"],["emailFormInput",""],["inputName","Email",3,"input"],["for","userName"],["id","userName","formControlName","userName","placeholder","User name",1,"form-control"],["loginFormInput",""],["inputName","User name",3,"input"],["for","fullName"],["id","fullName","formControlName","fullName","placeholder","Full name",1,"form-control"],["inputName","Full name",3,"input"],["for","password"],["id","password","type","password","formControlName","password","placeholder","Password",1,"form-control"],["inputName","Password",3,"input"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled","click"],[1,"btn","btn-link","btn-block",3,"routerLink"],[3,"message"]],template:function(e,r){1&e&&(s.Nb(0,"div",0),s.nc(1,p,1,1,"ol-vmessage",1),s.Nb(2,"form",2),s.Nb(3,"div",3),s.Nb(4,"label",4),s.pc(5,"E-mail"),s.Mb(),s.Lb(6,"input",5,6),s.Lb(8,"ol-form-error",7),s.Mb(),s.Nb(9,"div",3),s.Nb(10,"label",8),s.pc(11,"User name"),s.Mb(),s.Lb(12,"input",9,10),s.Lb(14,"ol-form-error",11),s.Mb(),s.Nb(15,"div",3),s.Nb(16,"label",12),s.pc(17,"Full name"),s.Mb(),s.Lb(18,"input",13,10),s.Lb(20,"ol-form-error",14),s.Mb(),s.Nb(21,"div",3),s.Nb(22,"label",15),s.pc(23,"Password"),s.Mb(),s.Lb(24,"input",16),s.Lb(25,"ol-form-error",17),s.Mb(),s.Nb(26,"button",18),s.Vb("click",(function(){return r.signUp()})),s.pc(27," Sign Up "),s.Mb(),s.Nb(28,"a",19),s.pc(29,"Already a member? Sign In"),s.Mb(),s.Mb(),s.Mb()),2&e&&(s.zb(1),s.dc("ngIf",r.error),s.zb(1),s.dc("formGroup",r.signUpForm),s.zb(6),s.dc("input",r.signUpForm.get("email")),s.zb(6),s.dc("input",r.signUpForm.get("userName")),s.zb(6),s.dc("input",r.signUpForm.get("fullName")),s.zb(5),s.dc("input",r.signUpForm.get("password")),s.zb(1),s.dc("disabled",r.signUpForm.invalid),s.zb(2),s.dc("routerLink",s.gc(8,d)))},directives:[u.l,n.k,n.h,n.e,n.b,n.g,n.d,l.a,o.f,m.a],styles:[""]}),e})();var g=t("vkgz"),h=t("AytR"),v=t("tk/3");const N=h.a.apiUrl;let w=(()=>{class e{constructor(e,r){this.http=e,this.userService=r}authenticate(e,r){return this.http.post(N+"/user/login",{userName:e,password:r},{observe:"response"}).pipe(Object(g.a)(e=>{const r=e.headers.get("x-access-token");this.userService.setToken(r)}))}}return e.\u0275fac=function(r){return new(r||e)(s.Rb(v.b),s.Rb(c.a))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const F=["loginFormInput"];function L(e,r){if(1&e&&s.Lb(0,"ol-vmessage",13),2&e){const e=s.Xb();s.dc("message",e.erro)}}const y=function(){return["signup"]};let M=(()=>{class e{constructor(e,r,t,o){this.formBuilder=e,this.authService=r,this.router=t,this.platformDetectorService=o,this.erro=""}ngOnInit(){this.loginForm=this.formBuilder.group({userName:["",n.j.required],password:["",n.j.required]})}ngAfterViewInit(){this.platformDetectorService.isPlatformBrowser()&&this.loginFormInput.nativeElement.focus()}login(){const e=this.loginForm.get("userName").value,r=this.loginForm.get("password").value;this.authService.authenticate(e,r).subscribe(()=>{this.router.navigate(["user",e])},e=>{console.log(e),this.erro="Usu\xe1rio ou senha inv\xe1lido",this.platformDetectorService.isPlatformBrowser()&&this.loginFormInput.nativeElement.focus(),this.loginForm.reset()})}}return e.\u0275fac=function(r){return new(r||e)(s.Kb(n.c),s.Kb(w),s.Kb(o.d),s.Kb(a.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-login"]],viewQuery:function(e,r){var t;1&e&&s.sc(F,!0),2&e&&s.ic(t=s.Wb())&&(r.loginFormInput=t.first)},decls:18,vars:7,consts:[[1,"container","pt-5"],[3,"message",4,"ngIf"],[1,"form",3,"formGroup","submit"],[1,"form-group"],["for","userName"],["id","userName","formControlName","userName","placeholder","User name",1,"form-control"],["loginFormInput",""],["inputName","User name",3,"input"],["for","password"],["id","password","type","password","formControlName","password","placeholder","Password",1,"form-control"],["inputName","Password",3,"input"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"btn","btn-link","btn-block",3,"routerLink"],[3,"message"]],template:function(e,r){1&e&&(s.Nb(0,"div",0),s.nc(1,L,1,1,"ol-vmessage",1),s.Nb(2,"form",2),s.Vb("submit",(function(){return r.login()})),s.Nb(3,"div",3),s.Nb(4,"label",4),s.pc(5,"Username"),s.Mb(),s.Lb(6,"input",5,6),s.Lb(8,"ol-form-error",7),s.Mb(),s.Nb(9,"div",3),s.Nb(10,"label",8),s.pc(11,"Password"),s.Mb(),s.Lb(12,"input",9),s.Lb(13,"ol-form-error",10),s.Mb(),s.Nb(14,"button",11),s.pc(15,"Login"),s.Mb(),s.Nb(16,"a",12),s.pc(17,"Not a member? Sign Up"),s.Mb(),s.Mb(),s.Mb()),2&e&&(s.zb(1),s.dc("ngIf",r.erro.length),s.zb(1),s.dc("formGroup",r.loginForm),s.zb(6),s.dc("input",r.loginForm.get("userName")),s.zb(5),s.dc("input",r.loginForm.get("password")),s.zb(1),s.dc("disabled",r.loginForm.invalid),s.zb(2),s.dc("routerLink",s.gc(6,y)))},directives:[u.l,n.k,n.h,n.e,n.b,n.g,n.d,l.a,o.f,m.a],styles:[""]}),e})();const I=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-6","col-md-6"],["src","assets/img/home.jpg",1,"img-fluid","d-none","d-sm-block"]],template:function(e,r){1&e&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Nb(2,"div",2),s.Lb(3,"img",3),s.Mb(),s.Nb(4,"div",2),s.Lb(5,"router-outlet"),s.Mb(),s.Mb(),s.Mb())},directives:[o.h],styles:[""]}),e})(),canActivate:[(()=>{class e{constructor(e,r){this.userService=e,this.router=r}canActivate(e,r){return!this.userService.isLogged()||(this.router.navigate(["user",this.userService.getUsername()]),!1)}}return e.\u0275fac=function(r){return new(r||e)(s.Rb(c.a),s.Rb(o.d))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],children:[{path:"",component:M,data:{title:"Sign in"}},{path:"signup",component:f,data:{title:"Sign up"}}]}];let k=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(r){return new(r||e)},imports:[[o.g.forChild(I)],o.g]}),e})();var U=t("AJ3Z"),S=t("bG7d");let j=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(r){return new(r||e)},imports:[[u.c,n.i,n.f,U.a,o.g,S.a,k]]}),e})()}}]);