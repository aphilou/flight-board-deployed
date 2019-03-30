(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" [hidden]=\"!showMenu\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"board\">Affichage</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"guest\">Invité</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"table\">Table</a></li>\r\n    </ul>\r\n    <div class=\"navbar-right\">\r\n      <p>Hello !</p>\r\n      <a [href]=\"downloadJsonHref\" download=\"data.json\">Télécharger les données</a>\r\n      <button (click)=\"toggleMenu()\">Hide</button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-background {\n  height: 100%;\n  background: linear-gradient(#454545, #202020);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldmFwcHNcXFdvcmtcXGZsaWdodC1ib2FyZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtFQUtmLDZDQUEyRDtFQUl6RCxzQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1iYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDY5LDY5LDY5KSwgcmdiKDMyLDMyLDMyKSk7XHJcblx0YmFja2dyb3VuZDogICAgLW1vei1saW5lYXItZ3JhZGllbnQocmdiKDY5LDY5LDY5KSwgcmdiKDMyLDMyLDMyKSk7XHJcblx0YmFja2dyb3VuZDogXHQgLW8tbGluZWFyLWdyYWRpZW50KHJnYig2OSw2OSw2OSksIHJnYigzMiwzMiwzMikpO1xyXG5cdGJhY2tncm91bmQ6IFx0XHRsaW5lYXItZ3JhZGllbnQocmdiKDY5LDY5LDY5KSwgcmdiKDMyLDMyLDMyKSk7XHJcblxyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcblx0ICAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/board.service */ "./src/app/services/board.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(boardService) {
        this.boardService = boardService;
        this.title = 'flight-board';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showMenuSubscription = this.boardService.menuSubject.subscribe(function (show) {
            _this.showMenu = show;
        });
        this.boardService.emitMenu();
        this.jsonSubscription = this.boardService.jsonSubject.subscribe(function (uri) {
            _this.downloadJsonHref = uri;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.showMenuSubscription.unsubscribe();
    };
    AppComponent.prototype.toggleMenu = function () {
        this.boardService.toggleMenu();
    };
    AppComponent.prototype.onKeydownHandler = function (event) {
        console.log(event);
        if (!this.showMenu) {
            this.boardService.toggleMenu();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown.escape', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onKeydownHandler", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guest/guest.component */ "./src/app/guest/guest.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var appRoutes = [
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"] },
    { path: 'guest', component: _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__["GuestComponent"] },
    { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__["GuestComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_board_service__WEBPACK_IMPORTED_MODULE_10__["BoardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"panneau\" class=\"panel-background\">\n  <div id=\"title\">\n    <img src=\"assets/plane.png\" alt=\"Avion\" style=\"width: 10%\">\n    <span class=\"title big\">{{ 'arrivées' | uppercase }}</span>\n  </div>\n  <div id=\"info\">\n    <span class=\"title\">Heure:</span>\n    <div class=\"half-letter\">\n      <div class=\"letter\" *ngFor=\"let item of fhour.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n    <span class=\"title\" style=\"position: relative; left: -32px;\">Vol:</span>\n    <div class=\"half-letter\" style=\"left: -147px;\">\n      <div class=\"letter\" *ngFor=\"let item of flight.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n    <span class=\"title\"  style=\"position: relative; left: -128px;\">Provenance:</span>\n    <div class=\"half-letter\" style=\"left: -253px;\">\n      <div class=\"letter\" *ngFor=\"let item of from.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n  </div>\n  <div id=\"table-header\">\n    <p class=\"title arrival\">Arrivées</p>\n    <p class=\"title hguest\">Passagers</p>\n  </div>\n  <div *ngFor=\"let table of flights\">\n    <div class=\"letter\" *ngFor=\"let item of (table.name + '      ').slice(0, 10).split(''); let i=index\">\n      <p class=\"\">{{ item }}</p>\n    </div><!--\n    -->\n    <div class=\"guest\">\n      <span class=\"defile\" [attr.data-text]=\"' - ' + table.passengers\" *ngIf=\"table.passengers.length > maxSize\">{{ table.passengers }}</span>\n      <span *ngIf=\"table.passengers.length <= maxSize\">{{ table.passengers }}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: content-box; }\n\n*:before,\n*:after {\n  box-sizing: content-box; }\n\n#info {\n  margin-bottom: 20px; }\n\n.title {\n  color: yellow;\n  text-align: center;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px; }\n\n.title.big {\n  font-size: 70px;\n  position: relative;\n  top: 10px;\n  left: 400px; }\n\np.arrival {\n  display: inline-block;\n  width: 35%; }\n\np.hguest {\n  display: inline-block;\n  width: 45%; }\n\n.half-letter {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  display: inline-block;\n  position: relative;\n  left: -70px;\n  top: 25px; }\n\n.panel-background {\n  background: linear-gradient(#454545, #202020);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n#panneau {\n  width: 98%;\n  height: 100%;\n  margin: 0;\n  text-align: left;\n  padding: 20px;\n  border-radius: 2px;\n  line-height: normal;\n  font-family: BigNoodleTitling; }\n\n#panneau .letter {\n  position: relative;\n  display: inline-block;\n  margin: 5px;\n  width: 50px;\n  height: 75px;\n  border: 3px solid rgba(0, 0, 0, 0.8);\n  border-radius: 5px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.15); }\n\n#panneau .letter:before,\n#panneau .letter:after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 2px;\n  height: 12px;\n  top: 50%;\n  margin-top: -6px;\n  border-radius: 50%;\n  border: 1px black solid;\n  background: linear-gradient(#b2b0b1, #070707); }\n\n#panneau .letter:before {\n  left: -2px; }\n\n#panneau .letter:after {\n  right: -2px; }\n\n#panneau .letter p {\n  position: relative;\n  z-index: 0;\n  margin: auto;\n  height: 70px;\n  width: 50px;\n  color: #eee;\n  padding-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 60px;\n  overflow: hidden;\n  background: #323232;\n  /* Old browsers */\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#323232', endColorstr='#4b4b4b',GradientType=0 );\n  /* IE6-9 */\n  box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.5); }\n\n#panneau .letter p:after {\n  position: absolute;\n  z-index: 1;\n  content: \"\";\n  height: 1px;\n  width: 50px;\n  background-color: rgba(0, 0, 0, 0.55);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.07);\n  left: 0;\n  top: 50%; }\n\n#panneau .guest {\n  position: relative;\n  top: -17px;\n  display: inline-block;\n  padding: 2px;\n  overflow: hidden;\n  table-layout: fixed;\n  font-family: BigNoodleTitling;\n  color: #eee;\n  height: 40px;\n  width: 60%;\n  font-size: 40px;\n  background: linear-gradient(to right, #303030, #131313);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n.guest > span {\n  display: inline-block;\n  position: relative;\n  top: -3px; }\n\n.defile {\n  display: block;\n  -webkit-animation: linear marqueelike 20s infinite;\n  animation: linear marqueelike 20s infinite;\n  margin-left: -100%;\n  padding: 0 5px;\n  text-align: left;\n  height: 25px; }\n\n.defile:after {\n  content: attr(data-text);\n  position: absolute;\n  white-space: nowrap;\n  padding-left: 10px; }\n\n@-webkit-keyframes marqueelike {\n  0%, 100% {\n    margin-left: 0; }\n  99.99% {\n    margin-left: -100%; } }\n\n@keyframes marqueelike {\n  0%, 100% {\n    margin-left: 0; }\n  99.99% {\n    margin-left: -100%; } }\n\n.aletter {\n  overflow: hidden;\n  margin: 0 0;\n  line-height: 70px;\n  color: #eee; }\n\n.aletter:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    word-break: break-all;\n    background-color: -moz-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #323232), color-stop(50%, #3c3c3c), color-stop(51%, #464646), color-stop(100%, #4b4b4b));\n    background-color: -webkit-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -o-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -ms-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: linear-gradient(to bottom, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: #323232; }\n\n.aletter:nth-child(1):before {\n  content: \"WSQVRTYAZXBUCP\";\n  margin-top: -350px;\n  -webkit-animation-name: aletter1;\n          animation-name: aletter1;\n  -webkit-animation-duration: 3.75s;\n          animation-duration: 3.75s;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter1 {\n  from {\n    margin-top: -350px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter1 {\n  from {\n    margin-top: -350px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(2):before {\n  content: \"YSQRPCZVUXTBWA\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter2;\n          animation-name: aletter2;\n  -webkit-animation-duration: 3.34285714s;\n          animation-duration: 3.34285714s;\n  -webkit-animation-delay: 0.35s;\n          animation-delay: 0.35s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter2 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter2 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(3):before {\n  content: \"RUXATYCQVPSZWB\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter3;\n          animation-name: aletter3;\n  -webkit-animation-duration: 2.16s;\n          animation-duration: 2.16s;\n  -webkit-animation-delay: 0.58s;\n          animation-delay: 0.58s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter3 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter3 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(4):before {\n  content: \"PVUXZTCWSARBYQ\";\n  margin-top: -70px;\n  -webkit-animation-name: aletter4;\n          animation-name: aletter4;\n  -webkit-animation-duration: 0.45s;\n          animation-duration: 0.45s;\n  -webkit-animation-delay: 0.85s;\n          animation-delay: 0.85s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter4 {\n  from {\n    margin-top: -70px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter4 {\n  from {\n    margin-top: -70px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(5):before {\n  content: \"TABYXCWQZSRPVU\";\n  margin-top: -700px;\n  -webkit-animation-name: aletter5;\n          animation-name: aletter5;\n  -webkit-animation-duration: 2.12727273s;\n          animation-duration: 2.12727273s;\n  -webkit-animation-delay: 0.61s;\n          animation-delay: 0.61s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter5 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter5 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(6):before {\n  content: \"XCSYBUPQTVRWAZ\";\n  margin-top: -490px;\n  -webkit-animation-name: aletter6;\n          animation-name: aletter6;\n  -webkit-animation-duration: 2.625s;\n          animation-duration: 2.625s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter6 {\n  from {\n    margin-top: -490px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter6 {\n  from {\n    margin-top: -490px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(7):before {\n  content: \"RBWUPZSXQTAVYC\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter7;\n          animation-name: aletter7;\n  -webkit-animation-duration: 0.15428571s;\n          animation-duration: 0.15428571s;\n  -webkit-animation-delay: 0.97s;\n          animation-delay: 0.97s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter7 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter7 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(8):before {\n  content: \"RCUVXQYSWPATBZ\";\n  margin-top: 0px;\n  -webkit-animation-name: aletter8;\n          animation-name: aletter8;\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n  -webkit-animation-delay: 0.41s;\n          animation-delay: 0.41s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter8 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter8 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(9):before {\n  content: \"CZTVPSRAXQBUWY\";\n  margin-top: -770px;\n  -webkit-animation-name: aletter9;\n          animation-name: aletter9;\n  -webkit-animation-duration: 3.905s;\n          animation-duration: 3.905s;\n  -webkit-animation-delay: 0.29s;\n          animation-delay: 0.29s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter9 {\n  from {\n    margin-top: -770px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter9 {\n  from {\n    margin-top: -770px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(10):before {\n  content: \"ZYXAWRSCTVBQUP\";\n  margin-top: -700px;\n  -webkit-animation-name: aletter10;\n          animation-name: aletter10;\n  -webkit-animation-duration: 3.16363636s;\n          animation-duration: 3.16363636s;\n  -webkit-animation-delay: 0.42s;\n          animation-delay: 0.42s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter10 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter10 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(11):before {\n  content: \"WYTQPCRBSAUZVX\";\n  margin-top: -910px;\n  -webkit-animation-name: aletter11;\n          animation-name: aletter11;\n  -webkit-animation-duration: 2.11714286s;\n          animation-duration: 2.11714286s;\n  -webkit-animation-delay: 0.62s;\n          animation-delay: 0.62s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter11 {\n  from {\n    margin-top: -910px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter11 {\n  from {\n    margin-top: -910px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(12):before {\n  content: \"TYVCQUZBXARPWS\";\n  margin-top: -630px;\n  -webkit-animation-name: aletter12;\n          animation-name: aletter12;\n  -webkit-animation-duration: 0.918s;\n          animation-duration: 0.918s;\n  -webkit-animation-delay: 0.83s;\n          animation-delay: 0.83s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter12 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter12 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(13):before {\n  content: \"ARTCVYZQBSXPUW\";\n  margin-top: -840px;\n  -webkit-animation-name: aletter13;\n          animation-name: aletter13;\n  -webkit-animation-duration: 4.04307692s;\n          animation-duration: 4.04307692s;\n  -webkit-animation-delay: 0.27s;\n          animation-delay: 0.27s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter13 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter13 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(14):before {\n  content: \"VYBRZWQTSPAXUC\";\n  margin-top: -910px;\n  -webkit-animation-name: aletter14;\n          animation-name: aletter14;\n  -webkit-animation-duration: 3.39857143s;\n          animation-duration: 3.39857143s;\n  -webkit-animation-delay: 0.39s;\n          animation-delay: 0.39s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter14 {\n  from {\n    margin-top: -910px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter14 {\n  from {\n    margin-top: -910px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(15):before {\n  content: \"AYWZQBXPRTVUCS\";\n  margin-top: -560px;\n  -webkit-animation-name: aletter15;\n          animation-name: aletter15;\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter15 {\n  from {\n    margin-top: -560px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter15 {\n  from {\n    margin-top: -560px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(16):before {\n  content: \"CXQYVZUABPSTWR\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter16;\n          animation-name: aletter16;\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter16 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter16 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvQzpcXGRldmFwcHNcXFdvcmtcXGZsaWdodC1ib2FyZC9zcmNcXGFwcFxcYm9hcmRcXGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksdUJBQXVCLEVBQUE7O0FBRW5DOztFQUlZLHVCQUF1QixFQUFBOztBQUduQztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQjtFQUNyQixVQUNKLEVBQUE7O0FBR0E7RUFDSSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQ0osRUFBQTs7QUFFQTtFQUtDLDZDQUEyRDtFQUl6RCxzQ0FBbUMsRUFBQTs7QUFHdEM7RUFFSSxVQUFVO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFFdEIsNkJBQTZCLEVBQUE7O0FBRzlCO0VBRUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBaUM7RUFDakMsa0JBQWtCO0VBSWhCLDZDQUEwQyxFQUFBOztBQUc3Qzs7RUFFQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUt2Qiw2Q0FBMkQsRUFBQTs7QUFHNUQ7RUFFQyxVQUFTLEVBQUE7O0FBR1Y7RUFFQyxXQUFVLEVBQUE7O0FB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QTVCLHNCQUE0QjtFQUM1QixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUE7O0FBK0dWO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUE7O0FBdUdWO0VBQ0kseUJBQW1EO0VBQ25ELGtCQUw2QjtFQU03QixpQ0FBZ0I7VUFBaEIseUJBQWdCO0VBQ2hCLDhCQUFvRDtVQUFwRCxzQkFBb0Q7RUFDcEQsMkJBQTRCO1VBQTVCLG1CQUE0QjtFQUM1QixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUE7O0FBK0dWO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUE7O0FBdUdWO0VBQ0kseUJBQW1EO0VBQ25ELGtCQUw2QjtFQU03QixpQ0FBZ0I7VUFBaEIseUJBQWdCO0VBQ2hCLDhCQUFvRDtVQUFwRCxzQkFBb0Q7RUFDcEQsMkJBQTRCO1VBQTVCLG1CQUE0QjtFQUM1QixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUE7O0FBK0dWO0VBQ0k7SUFDSSxrQkFieUIsRUFBQTtFQWU3QjtJQUNJLGdCQXBIRSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuI2luZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS5iaWcge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNDAwcHg7XHJcbn1cclxuXHJcbnAuYXJyaXZhbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5wLmhndWVzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgIFxyXG4gICAgd2lkdGg6IDQ1JVxyXG59XHJcblxyXG5cclxuLmhhbGYtbGV0dGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC03MHB4O1xyXG4gICAgdG9wOiAyNXB4XHJcbn1cclxuXHJcbi5wYW5lbC1iYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoNjksNjksNjkpLCByZ2IoMzIsMzIsMzIpKTtcclxuXHRiYWNrZ3JvdW5kOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChyZ2IoNjksNjksNjkpLCByZ2IoMzIsMzIsMzIpKTtcclxuXHRiYWNrZ3JvdW5kOiBcdCAtby1saW5lYXItZ3JhZGllbnQocmdiKDY5LDY5LDY5KSwgcmdiKDMyLDMyLDMyKSk7XHJcblx0YmFja2dyb3VuZDogXHRcdGxpbmVhci1ncmFkaWVudChyZ2IoNjksNjksNjkpLCByZ2IoMzIsMzIsMzIpKTtcclxuXHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuXHQgICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuI3Bhbm5lYXVcclxue1xyXG4gICAgd2lkdGg6IDk4JTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblxyXG5cdGZvbnQtZmFtaWx5OiBCaWdOb29kbGVUaXRsaW5nO1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGhlaWdodDogNzVweDtcclxuXHRib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLDAuOCk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcclxuXHQgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyOmJlZm9yZSxcclxuI3Bhbm5lYXUgLmxldHRlcjphZnRlcntcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAyO1xyXG5cdHdpZHRoOiAycHg7XHJcblx0aGVpZ2h0OiAxMnB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG5cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTc4LDE3NiwxNzcpLCByZ2IoNyw3LDcpKTtcclxuXHRiYWNrZ3JvdW5kOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChyZ2IoMTc4LDE3NiwxNzcpLCByZ2IoNyw3LDcpKTtcclxuXHRiYWNrZ3JvdW5kOiBcdCAtby1saW5lYXItZ3JhZGllbnQocmdiKDE3OCwxNzYsMTc3KSwgcmdiKDcsNyw3KSk7XHJcblx0YmFja2dyb3VuZDogXHRcdGxpbmVhci1ncmFkaWVudChyZ2IoMTc4LDE3NiwxNzcpLCByZ2IoNyw3LDcpKTtcclxufVxyXG5cclxuI3Bhbm5lYXUgLmxldHRlcjpiZWZvcmVcclxue1xyXG5cdGxlZnQ6LTJweDtcclxufVxyXG5cclxuI3Bhbm5lYXUgLmxldHRlcjphZnRlclxyXG57XHJcblx0cmlnaHQ6LTJweDtcclxufVxyXG5cclxuI3Bhbm5lYXUgLmxldHRlciBwXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdGJhY2tncm91bmQ6ICMzMjMyMzI7IC8qIE9sZCBicm93c2VycyAqL1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsICMzYzNjM2MgNTAlLCAjNDY0NjQ2IDUxJSwgIzRiNGI0YiAxMDAlKTsgLyogRkYzLjYrICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwjMzIzMjMyKSwgY29sb3Itc3RvcCg1MCUsIzNjM2MzYyksIGNvbG9yLXN0b3AoNTElLCM0NjQ2NDYpLCBjb2xvci1zdG9wKDEwMCUsIzRiNGI0YikpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzIzMjMyIDAlLCMzYzNjM2MgNTAlLCM0NjQ2NDYgNTElLCM0YjRiNGIgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKTsgLyogT3BlcmEgMTEuMTArICovXHJcblx0YmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzIzMjMyIDAlLCMzYzNjM2MgNTAlLCM0NjQ2NDYgNTElLCM0YjRiNGIgMTAwJSk7IC8qIElFMTArICovXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKTsgLyogVzNDICovXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMzMjMyMzInLCBlbmRDb2xvcnN0cj0nIzRiNGI0YicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuXHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHQgICAtbW96LWJveC1zaGFkb3c6IDAgLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxufVxyXG5cclxuI3Bhbm5lYXUgLmxldHRlciBwOmFmdGVyXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7XHJcblxyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xyXG5cdCAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDUwJTtcclxufVxyXG5cclxuI3Bhbm5lYXUgLmd1ZXN0IHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDJweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IEJpZ05vb2RsZVRpdGxpbmc7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCByZ2IoNDgsIDQ4LCA0OCksIHJnYigxOSwgMTksIDE5KSk7XHJcblx0YmFja2dyb3VuZDogICAgLW1vei1saW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCByZ2IoNDgsIDQ4LCA0OCksIHJnYigxOSwgMTksIDE5KSk7XHJcblx0YmFja2dyb3VuZDogXHQgLW8tbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgcmdiKDQ4LCA0OCwgNDgpLCByZ2IoMTksIDE5LCAxOSkpO1xyXG5cdGJhY2tncm91bmQ6IFx0XHRsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCByZ2IoNDgsIDQ4LCA0OCksIHJnYigxOSwgMTksIDE5KSk7XHJcblxyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcblx0ICAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcbi5ndWVzdCA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG59XHJcblxyXG4uZGVmaWxlIHtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOmxpbmVhciBtYXJxdWVlbGlrZSAyMHMgaW5maW5pdGUgO1xyXG5cdC1tb3otYW5pbWF0aW9uOmxpbmVhciBtYXJxdWVlbGlrZSAyMHMgaW5maW5pdGUgO1xyXG5cdC1vLWFuaW1hdGlvbjpsaW5lYXIgbWFycXVlZWxpa2UgMjBzIGluZmluaXRlIDtcclxuXHQtbXMtYW5pbWF0aW9uOmxpbmVhciBtYXJxdWVlbGlrZSAyMHMgaW5maW5pdGUgO1xyXG5cdGFuaW1hdGlvbjpsaW5lYXIgbWFycXVlZWxpa2UgMjBzIGluZmluaXRlIDtcclxuXHRtYXJnaW4tbGVmdDotMTAwJTtcclxuXHRwYWRkaW5nOjAgNXB4O1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRoZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLmRlZmlsZTphZnRlciB7XHJcblx0Y29udGVudDphdHRyKGRhdGEtdGV4dCk7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0d2hpdGUtc3BhY2U6bm93cmFwO1xyXG5cdHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWFycXVlZWxpa2Uge1xyXG5cdDAlLCAxMDAlIHttYXJnaW4tbGVmdDowO31cclxuXHQ5OS45OSUge21hcmdpbi1sZWZ0Oi0xMDAlO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgbWFycXVlZWxpa2Uge1xyXG5cdDAlLCAxMDAlIHttYXJnaW4tbGVmdDowO31cclxuXHQ5OS45OSUge21hcmdpbi1sZWZ0Oi0xMDAlO31cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG1hcnF1ZWVsaWtlIHtcclxuXHQwJSwgMTAwJSB7bWFyZ2luLWxlZnQ6MDt9XHJcblx0OTkuOTklIHttYXJnaW4tbGVmdDotMTAwJTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgbWFycXVlZWxpa2Uge1xyXG5cdDAlLCAxMDAlIHttYXJnaW4tbGVmdDowO31cclxuXHQ5OS45OSUge21hcmdpbi1sZWZ0Oi0xMDAlO31cclxufVxyXG5Aa2V5ZnJhbWVzIG1hcnF1ZWVsaWtlIHtcclxuXHQwJSwgMTAwJSB7bWFyZ2luLWxlZnQ6MDt9XHJcblx0OTkuOTklIHttYXJnaW4tbGVmdDotMTAwJTt9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRjb2xvcnM6IChcclxuXHRiYWNrZ3JvdW5kOiAjMzIzMjMyLFxyXG5cdGJtb3o6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsICMzYzNjM2MgNTAlLCAjNDY0NjQ2IDUxJSwgIzRiNGI0YiAxMDAlKSxcclxuXHRid2ViZzogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwjMzIzMjMyKSwgY29sb3Itc3RvcCg1MCUsIzNjM2MzYyksIGNvbG9yLXN0b3AoNTElLCM0NjQ2NDYpLCBjb2xvci1zdG9wKDEwMCUsIzRiNGI0YikpLFxyXG5cdGJ3ZWJsOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzIzMjMyIDAlLCMzYzNjM2MgNTAlLCM0NjQ2NDYgNTElLCM0YjRiNGIgMTAwJSksXHJcblx0Ym9wZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKSxcclxuXHRiaWU6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgIzMyMzIzMiAwJSwjM2MzYzNjIDUwJSwjNDY0NjQ2IDUxJSwjNGI0YjRiIDEwMCUpLFxyXG5cdGJ3dGM6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjMzIzMjMyIDAlLCMzYzNjM2MgNTAlLCM0NjQ2NDYgNTElLCM0YjRiNGIgMTAwJSksXHJcbiAgICB0ZXh0OiAjZWVlXHJcbik7XHJcblxyXG4kZm9udDogKFxyXG4gICAgZmFtaWx5OiBCaWdOb29kbGVUaXRsaW5nLFxyXG4gICAgc2l6ZTogNzBweCxcclxuICAgIGxldHRlci1zcGFjaW5nOiAwXHJcbik7XHJcblxyXG4kY29uZmlnOiAoXHJcbiAgICBhbmltYXRlZDogZmFsc2UsXHJcbiAgICBuYi1sZXR0ZXJzOiAxNixcclxuICAgIGFuaW1hdGlvbi1sZW5ndGg6IDZzLFxyXG4gICAgbWFzay1sZXR0ZXJzOiAoXCJaXCIsIFwiWVwiLCBcIlhcIiwgXCJXXCIsIFwiVlwiLCBcIlVcIiwgXCJUXCIsIFwiU1wiLCBcIlJcIiwgXCJRXCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiUFwiKVxyXG4pO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICR2YWx1ZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRmb250LCAkdmFsdWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29uZmlnKCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb25maWcsICR2YWx1ZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiByYW5kb20tc3RyaW5nKCRsaXN0KSB7XHJcbiAgICAkcmVzdWx0OiBudWxsO1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcclxuICAgICAgICAkcmFuZG9tOiByYW5kb20obGVuZ3RoKCRsaXN0KSk7XHJcbiAgICAgICAgJGN1cnJlbnQ6IG50aCgkbGlzdCwgJHJhbmRvbSk7XHJcbiAgICAgICAgJGxpc3Q6IHJlbW92ZS1udGgoJGxpc3QsICRyYW5kb20pO1xyXG4gICAgICAgICRyZXN1bHQ6ICRyZXN1bHQjeyRjdXJyZW50fTtcclxuICAgIH1cclxuICAgIEByZXR1cm4gJHJlc3VsdDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHJlbW92ZS1udGgoJGxpc3QsICRpbmRleCkge1xyXG4gICAgJHJlc3VsdDogKCk7XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkbGlzdCkge1xyXG4gICAgICAgIEBpZiAkaSAhPSAkaW5kZXgge1xyXG4gICAgICAgICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEByZXR1cm4gJHJlc3VsdDtcclxufVxyXG5cclxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcclxuICAgIEBpZiB0eXBlLW9mKCRicmVha3BvaW50KSA9PSBsaXN0IHtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogbnRoKCRicmVha3BvaW50LCAxKSkgYW5kIChtYXgtd2lkdGg6IG50aCgkYnJlYWtwb2ludCwgMikpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5hbGV0dGVyIHtcclxuICAgIC8vd2lkdGg6IGZvbnQoc2l6ZSk7XHJcbiAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMCBjZWlsKGZvbnQobGV0dGVyLXNwYWNpbmcpIC8gMik7XHJcbiAgICAvL2ZvbnQtZmFtaWx5OiBmb250KGZhbWlseSk7XHJcbiAgICAvL2ZvbnQtc2l6ZTogZm9udChzaXplKTtcclxuICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBmb250KHNpemUpO1xyXG4gICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IGNvbG9yKHRleHQpO1xyXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byg2MjVweCkge1xyXG4gICAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIC8vd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihibW96KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihid2ViZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoYndlYmwpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGJvcGUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGJpZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoYnd0Yyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggY29uZmlnKG5iLWxldHRlcnMpIHtcclxuICAgICRsZW5ndGg6IGxlbmd0aChjb25maWcobWFzay1sZXR0ZXJzKSk7XHJcbiAgICAkcmFuZG9tOiByYW5kb20oJGxlbmd0aCk7XHJcbiAgICAkc3RlcHM6ICRyYW5kb20gLSAxO1xyXG4gICAgJG9mZnNldDogZm9udChzaXplKSAqICRzdGVwcyAqIC0xO1xyXG4gICAgJGRlbGF5OiByYW5kb20oMTAwKSAvIDEwMDtcclxuICAgICRkdXJhdGlvbjogJHN0ZXBzICogKGNvbmZpZyhhbmltYXRpb24tbGVuZ3RoKSAvICRyYW5kb20pO1xyXG4gICAgLmFsZXR0ZXI6bnRoLWNoaWxkKCN7JGl9KTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IHF1b3RlKHJhbmRvbS1zdHJpbmcoY29uZmlnKG1hc2stbGV0dGVycykpKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAkb2Zmc2V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbGV0dGVyI3skaX07XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb24gLSAoJGR1cmF0aW9uICogJGRlbGF5KTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheSAqIDFzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBhbGV0dGVyI3skaX0ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkb2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGZvbnQoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BoardComponent = /** @class */ (function () {
    function BoardComponent(boardService) {
        this.boardService = boardService;
        this.maxSize = 60;
        this.fhour = '19:00';
        this.flight = 'SA110715';
        this.from = 'martigues';
        this.arrivals = ['tokyo', 'new york', 'paris'];
        this.guests = ['Céline Flaux', 'Antoine Grizeman'];
        this.scrollTo = 0;
        this.scrollIncrement = 10;
        this.keyScrollIncrement = 20;
        this.stopScrolling = true;
        this.pauseScrolling = false;
        console.debug('On BoardComponent constructor...');
        console.log('body.height = ', document.body.clientHeight);
        console.log('diffHeight = ', this.diffHeight);
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.debug('On BoardComponent init...');
        this.flightsSubscription = this.boardService.arrivalsSubject.subscribe(function (elt) {
            _this.flights = elt;
        });
        this.boardService.emitArrivals();
        this.scrollDownSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setInterval(function () {
                observer.next(window.pageYOffset);
            }, 200);
        })
            .subscribe(function (data) {
            console.log('pageYOffset = ', data);
            if (_this.diffHeight == null) {
                var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                if (window.innerHeight && scrollHeight) {
                    _this.diffHeight = scrollHeight - window.innerHeight;
                }
                else {
                    _this.diffHeight = 0;
                }
                console.log('body.height = ', document.body.clientHeight);
                console.log('scrollHeight = ', scrollHeight);
                console.log('diffHeight = ', _this.diffHeight);
            }
            if (_this.diffHeight > 0 && !_this.stopScrolling && !_this.pauseScrolling) {
                if (_this.scrollTo + _this.scrollIncrement > _this.diffHeight) {
                    _this.scrollTo = _this.diffHeight;
                    _this.scrollIncrement = -_this.scrollIncrement;
                }
                else if (_this.scrollTo + _this.scrollIncrement < 0) {
                    _this.scrollTo = 0;
                    _this.scrollIncrement = -_this.scrollIncrement;
                }
                else {
                    _this.scrollTo += _this.scrollIncrement;
                }
                window.scrollTo(0, _this.scrollTo);
            }
        });
        setInterval(function () {
            if (!_this.stopScrolling) {
                _this.pauseScrolling = !_this.pauseScrolling;
            }
        }, 2000);
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        this.flightsSubscription.unsubscribe();
        this.scrollDownSubscription.unsubscribe();
    };
    BoardComponent.prototype.onKeydownHandler = function (event) {
        console.log(event);
        if (event.key === ' ') {
            this.pauseScrolling = this.stopScrolling;
            this.stopScrolling = !this.stopScrolling;
            if (!this.stopScrolling) {
                var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                if (window.innerHeight && scrollHeight) {
                    this.diffHeight = scrollHeight - window.innerHeight;
                }
                else {
                    this.diffHeight = 0;
                }
            }
        }
        else if (event.keyCode === 38) {
            if (this.diffHeight > 0) {
                if (this.scrollTo - this.keyScrollIncrement < 0) {
                    this.scrollTo = 0;
                }
                else {
                    this.scrollTo -= this.keyScrollIncrement;
                }
                window.scrollTo(0, this.scrollTo);
            }
        }
        else if (event.keyCode === 40) {
            if (this.diffHeight > 0) {
                if (this.scrollTo + this.keyScrollIncrement > this.diffHeight) {
                    this.scrollTo = this.diffHeight;
                }
                else {
                    this.scrollTo += this.keyScrollIncrement;
                }
                window.scrollTo(0, this.scrollTo);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoardComponent.prototype, "onKeydownHandler", null);
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/guest/guest.component.html":
/*!********************************************!*\
  !*** ./src/app/guest/guest.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"input-label\">\n            Nom du passager\n          </label>\n          <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"flight\" class=\"input-label\">\n            Embarque sur le vol\n          </label>\n          <select name=\"flight\" id=\"flight\" class=\"form-control\" ngModel required>\n            <option [ngValue]=\"item.id\" *ngFor=\"let item of flights\">{{ item.name }} (#{{ item.id }})</option>\n          </select>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Enregistrer</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"form-group\" style=\"margin-top: 20px;\">\n    <div class=\"container\" style=\"overflow-y: scroll; height: 600px;\">\n      <div class=\"row align-text-bottom text-warning\">\n        <div class=\"col-sm-4\">\n          <p>Nom</p>\n        </div>\n        <div class=\"col-sm-4\">\n            <p>Flight #</p>\n        </div>\n      </div>\n      <div class=\"row align-items-center\" *ngFor=\"let item of passengers\">\n        <div class=\"col-sm-4\">\n          <span style=\"color: wheat\">{{ item.name }}</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <span style=\"color: wheat\">{{ item.flightId }}</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemove(item)\">Supprimer</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/guest/guest.component.scss":
/*!********************************************!*\
  !*** ./src/app/guest/guest.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest/guest.component.ts":
/*!******************************************!*\
  !*** ./src/app/guest/guest.component.ts ***!
  \******************************************/
/*! exports provided: GuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestComponent", function() { return GuestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var GuestComponent = /** @class */ (function () {
    function GuestComponent(brdService, formBuilder) {
        this.brdService = brdService;
        this.formBuilder = formBuilder;
    }
    GuestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightSubscription = this.brdService.flightSubject.subscribe(function (flights) {
            _this.flights = flights;
            _this.flights.forEach(function (f) {
                console.log('F: ' + f.name + ' / #' + f.id);
            });
        });
        this.brdService.emitFlights();
        this.passengerSubscription = this.brdService.passengerSubject.subscribe(function (passengers) {
            _this.passengers = passengers;
        });
        this.brdService.emitPassengers();
    };
    GuestComponent.prototype.ngOnDestroy = function () {
        this.flightSubscription.unsubscribe();
        this.passengerSubscription.unsubscribe();
    };
    GuestComponent.prototype.onSubmit = function (form) {
        var name = form.value['name'];
        var flightId = form.value['flight'];
        this.brdService.createPassenger(name, flightId);
        form.reset();
    };
    GuestComponent.prototype.onRemove = function (passenger) {
        this.brdService.removePassenger(passenger);
        this.brdService.emitPassengers();
    };
    GuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest',
            template: __webpack_require__(/*! ./guest.component.html */ "./src/app/guest/guest.component.html"),
            styles: [__webpack_require__(/*! ./guest.component.scss */ "./src/app/guest/guest.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], GuestComponent);
    return GuestComponent;
}());



/***/ }),

/***/ "./src/app/models/arrivals.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/arrivals.model.ts ***!
  \******************************************/
/*! exports provided: Arrival */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrival", function() { return Arrival; });
var Arrival = /** @class */ (function () {
    function Arrival(name) {
        this.name = name;
    }
    return Arrival;
}());



/***/ }),

/***/ "./src/app/models/flight.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/flight.model.ts ***!
  \****************************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
var Flight = /** @class */ (function () {
    function Flight(id, name) {
        this.id = id;
        this.name = name;
    }
    return Flight;
}());



/***/ }),

/***/ "./src/app/models/passenger.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/passenger.model.ts ***!
  \*******************************************/
/*! exports provided: Passenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Passenger", function() { return Passenger; });
var Passenger = /** @class */ (function () {
    function Passenger(name, flightId) {
        this.name = name;
        this.flightId = flightId;
    }
    return Passenger;
}());



/***/ }),

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_arrivals_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/arrivals.model */ "./src/app/models/arrivals.model.ts");
/* harmony import */ var _models_flight_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/flight.model */ "./src/app/models/flight.model.ts");
/* harmony import */ var _models_passenger_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/passenger.model */ "./src/app/models/passenger.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var BoardService = /** @class */ (function () {
    function BoardService(http, sanitizer) {
        var _this = this;
        this.http = http;
        this.sanitizer = sanitizer;
        this._jsonURL = 'assets/DbData.json';
        this.showMenu = true;
        this.menuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.jsonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.flights = [
            {
                id: 1,
                name: 'Tokyo'
            },
            {
                id: 2,
                name: 'Madrid'
            }
        ];
        this.flightSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.passengers = [
            {
                name: 'Céline Flaux',
                flightId: 1
            },
            {
                name: 'Antoine Griezemman',
                flightId: 1
            },
            {
                name: 'John Do',
                flightId: 2
            }
        ];
        this.passengerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.arrivalsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get(this._jsonURL).subscribe(function (data) {
            console.log(data);
            if (data.destinations) {
                _this.flights = data.destinations;
                _this.emitFlights();
            }
            if (data.passengers) {
                _this.passengers = data.passengers;
                _this.emitPassengers();
            }
            _this.generateDownloadJsonUri();
        });
    }
    BoardService.prototype.generateDownloadJsonUri = function () {
        var exportData = {
            destinations: this.flights,
            passengers: this.passengers
        };
        var theJSON = JSON.stringify(exportData);
        var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
        this.jsonSubject.next(uri);
    };
    BoardService.prototype.emitMenu = function () {
        this.menuSubject.next(this.showMenu);
    };
    BoardService.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
        this.emitMenu();
    };
    BoardService.prototype.emitArrivals = function () {
        var _this = this;
        var arrivals = [];
        this.flights.forEach(function (fgt) {
            var arrival = new _models_arrivals_model__WEBPACK_IMPORTED_MODULE_3__["Arrival"](fgt.name);
            arrival.passengers = _this.passengers.filter(function (item) {
                return (item.flightId === fgt.id);
            }).map(function (elt) {
                return elt.name;
            }).join(' - ');
            arrivals.push(arrival);
        });
        this.arrivalsSubject.next(arrivals.slice());
    };
    BoardService.prototype.emitFlights = function () {
        this.flightSubject.next(this.flights.slice());
    };
    BoardService.prototype.createFlight = function (name) {
        var flight = new _models_flight_model__WEBPACK_IMPORTED_MODULE_4__["Flight"](this.flights.length + 1, name);
        console.log('Add flight ' + flight.name + ', ' + flight.id);
        this.flights.push(flight);
        this.emitFlights();
        this.generateDownloadJsonUri();
    };
    BoardService.prototype.removeFlight = function (flight) {
        var index = this.flights.findIndex(function (elt) {
            if (elt === flight) {
                return true;
            }
        });
        this.flights.splice(index, 1);
        this.generateDownloadJsonUri();
    };
    BoardService.prototype.emitPassengers = function () {
        this.passengerSubject.next(this.passengers.slice());
    };
    BoardService.prototype.createPassenger = function (name, fid) {
        var passenger = new _models_passenger_model__WEBPACK_IMPORTED_MODULE_5__["Passenger"](name, fid);
        this.passengers.push(passenger);
        this.emitPassengers();
        this.generateDownloadJsonUri();
    };
    BoardService.prototype.removePassenger = function (passenger) {
        var index = this.passengers.findIndex(function (elt) {
            if (elt === passenger) {
                return true;
            }
        });
        this.passengers.splice(index, 1);
        this.generateDownloadJsonUri();
    };
    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"input-label\">\n          Nom du vol\n        </label>\n        <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Enregistrer</button>\n    </form>\n  </div>\n</div>\n<div class=\"form-group\" style=\"margin-top: 20px;\">\n  <div class=\"container\" style=\"overflow-y: scroll; height: 600px;\">\n    <div class=\"row align-text-bottom text-warning\">\n      <div class=\"col-sm-6 col-sm-offset-1\">\n        <p>Destination</p>\n      </div>\n    </div>\n    <div class=\"row align-content-lg-start\" *ngFor=\"let item of flights\">\n      <div class=\"col-sm-6\">\n        <span class=\"col-sm-8 col-sm-offset-2\" style=\"color: wheat\">{{ item.name }}</span>\n      </div>\n      <div class=\"col-sm-6\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemove(item)\">Supprimer</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/board.service */ "./src/app/services/board.service.ts");




var TableComponent = /** @class */ (function () {
    function TableComponent(brdService, formBuilder) {
        this.brdService = brdService;
        this.formBuilder = formBuilder;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightSubscription = this.brdService.flightSubject.subscribe(function (flights) {
            _this.flights = flights;
        });
        this.brdService.emitFlights();
    };
    TableComponent.prototype.ngOnDestroy = function () {
        this.flightSubscription.unsubscribe();
    };
    TableComponent.prototype.onSubmit = function (form) {
        var name = form.value['name'];
        this.brdService.createFlight(name);
        form.reset();
    };
    TableComponent.prototype.onRemove = function (flight) {
        this.brdService.removeFlight(flight);
        this.brdService.emitFlights();
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TableComponent);
    return TableComponent;
}());



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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\devapps\Work\flight-board\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map