"use strict";
(self["webpackChunkrxjs_insights_angular"] = self["webpackChunkrxjs_insights_angular"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rxjs-insights/console */ 4322);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);






class AppComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    runSimple() {
        const subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(1, 2, 3)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((x) => x * x), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.filter)((x) => x % 2 !== 0))
            .subscribe();
        (0,_rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__.subscribers)(subscription);
    }
    runComplex() {
        const subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.zip)([(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(1, 2, 3), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)('a', 'b', 'c')])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)(([num, str]) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
                for (let i = 0; i < num; i++) {
                    observer.next(str);
                }
                observer.complete();
            });
        }))
            .subscribe();
        (0,_rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__.subscribers)(subscription);
    }
    runAsync() {
        const subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(100).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.take)(10)).subscribe();
        (0,_rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__.subscribers)(subscription);
    }
    runAsyncOutsideAngular() {
        this.ngZone.runOutsideAngular(() => this.runAsync());
    }
    runShared() {
        const shared = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.scheduled)([1, 2, 3], rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.share)());
        shared.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((x) => 1 / x)).subscribe();
        shared.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((x) => x / 3)).subscribe();
        (0,_rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__.subscribers)(shared);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 62, vars: 3, consts: [["color", "primary"], [1, "main"], [1, "card"], ["align", "end"], ["mat-button", "", "href", "https://github.com/ksz-ksz/rxjs-insights-angular"], ["mat-button", "", "href", "https://github.com/ksz-ksz/rxjs-insights"], ["mat-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "mat-toolbar", 0)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "RxJS Insights Angular Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main", 1)(5, "mat-card", 2)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Click one of the buttons below to run some rxjs code. Open the browser console to see the observables, subscribers and event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " TIP! Expand the \"More\" object at the end of the log line and invoke the property getters to get an interactive experience. For example, try clicking the \"inspect events flow\" getter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " EXERCISE! Can you guess why the \"Async example\" listing looks different when it's run outside of the NgZone? Try to figure it out by using the interactive console :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card-actions", 3)(13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Source code of this app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Source code of rxjs-insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-card", 2)(18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Simple example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "pre")(21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\nof(1, 2, 3)\n.pipe(\n  map((x) => x * x),\n  filter((x) => x % 2 !== 0)\n)\n.subscribe();\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-card-actions", 3)(24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() { return ctx.runSimple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-card", 2)(27, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Complex example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "pre")(30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-card-actions", 3)(33, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_33_listener() { return ctx.runComplex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-card", 2)(36, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Shared example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "pre")(39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\nconst shared = scheduled([1, 2, 3], asapScheduler).pipe(share());\nshared.pipe(map((x) => 1 / x)).subscribe();\nshared.pipe(map((x) => x / 3)).subscribe();\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-card-actions", 3)(42, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener() { return ctx.runShared(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card", 2)(45, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Async example");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "pre")(48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\ninterval(100).pipe(take(10)).subscribe();\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-card-actions", 3)(51, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_51_listener() { return ctx.runAsync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-card", 2)(54, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Async example (outside NgZone)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "pre")(57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\ninterval(100).pipe(take(10)).subscribe();\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-card-actions", 3)(60, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_60_listener() { return ctx.runAsyncOutsideAngular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("\nzip([of(1, 2, 3), of('a', 'b', 'c')])\n.pipe(\n  switchMap(([num, str]) => ", "{", "\n    return new Observable((observer) => ", "{", "\n      for (let i = 0; i < num; i++) ", "{", "\n        observer.next(str);\n      }\n      observer.complete();\n    });\n  })\n)\n.subscribe();\n    ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".main[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n  margin: 8px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogOHB4IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 5497:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install */ 7296);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ 4431);




/***/ }),

/***/ 7296:
/*!************************!*\
  !*** ./src/install.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rxjs_insights_rxjs7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rxjs-insights/rxjs7 */ 6328);
/* harmony import */ var _rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rxjs-insights/console */ 4441);


(0,_rxjs_insights_rxjs7__WEBPACK_IMPORTED_MODULE_0__.install)();
(0,_rxjs_insights_console__WEBPACK_IMPORTED_MODULE_1__.install)();


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5497)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map