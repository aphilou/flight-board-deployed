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
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _guest_guest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guest/guest.component */ "./src/app/guest/guest.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");







var appRoutes = [
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"] },
    { path: 'board/0', component: _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"], data: { nomenu: true } },
    { path: 'guest', component: _guest_guest_component__WEBPACK_IMPORTED_MODULE_4__["GuestComponent"] },
    { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] },
    { path: '', redirectTo: '/board', pathMatch: 'full' },
    { path: '**', component: _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
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

module.exports = "<nav class=\"navbar navbar-default\" [hidden]=\"!showMenu\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li routerLinkActive=\"active\"><a routerLink=\"board\">Affichage</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"guest\">Invité</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"table\">Table</a></li>\r\n      <li routerLinkActive=\"active\"><a routerLink=\"help\">Aide</a></li>\r\n    </ul>\r\n    <div class=\"navbar-right\">\r\n      <p>Hello !</p>\r\n      <input type=\"text\" [(ngModel)]=\"ftime\" (change)=\"onTimeChange()\" size=\"5\">\r\n      <input type=\"text\" [(ngModel)]=\"fnumber\" (change)=\"onNumberChange()\" size=\"7\">\r\n      <input type=\"text\" [(ngModel)]=\"destination\" (change)=\"onDestinationChange()\" size=\"7\">\r\n      <a [href]=\"downloadJsonHref\" download=\"data.json\">Télécharger les données</a>\r\n      <button (click)=\"toggleMenu()\">Hide</button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.destination = 'Martigues';
        this.ftime = '19:00';
        this.fnumber = 'SA110715';
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
    AppComponent.prototype.onDestinationChange = function () {
        this.boardService.flightSrc = (this.destination + '          ').slice(0, 9);
        console.log('Change {}', this.boardService.flightSrc);
        this.boardService.emitFlightSrc();
    };
    AppComponent.prototype.onTimeChange = function () {
        this.boardService.flightTime = (this.ftime + '     ').slice(0, 5);
        this.boardService.emitFlightTime();
    };
    AppComponent.prototype.onNumberChange = function () {
        this.boardService.flightNumber = (this.fnumber + '        ').slice(0, 8);
        this.boardService.emitFlightNumber();
    };
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
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__["GuestComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_12__["HelpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_board_service__WEBPACK_IMPORTED_MODULE_9__["BoardService"]
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

module.exports = "<div id=\"panneau\" class=\"panel-background\">\n  <div id=\"title\">\n    <img [@rotatedState]=\"state\" src=\"assets/plane.png\" alt=\"Avion\" style=\"width: 10%\">\n    <span class=\"title big\">{{ 'arrivées' | uppercase }}</span>\n  </div>\n  <div id=\"info\">\n    <span class=\"title\">Heure:</span>\n    <div class=\"half-letter\">\n      <div class=\"letter\" *ngFor=\"let item of fhour.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n    <span class=\"title\" style=\"position: relative; left: -32px;\">Vol:</span>\n    <div class=\"half-letter\" style=\"left: -147px;\">\n      <div class=\"letter\" *ngFor=\"let item of flight.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n    <span class=\"title\"  style=\"position: relative; left: -128px;\">Provenance:</span>\n    <div class=\"half-letter\" style=\"left: -253px;\">\n      <div class=\"letter\" *ngFor=\"let item of from.split(''); let i=index\">\n        <p>{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n  </div>\n  <div id=\"table-header\">\n    <p class=\"title arrival\">Arrivées</p>\n    <p class=\"title hguest\">Passagers</p>\n  </div>\n  <div *ngFor=\"let table of flights\">\n    <div class=\"airport\">\n      <div class=\"letter\" *ngFor=\"let item of (table.name + '      ').slice(0, 10).split(''); let i=index\">\n        <p class=\"\">{{ item }}</p>\n      </div><!--\n      -->\n    </div>\n    <div class=\"guest\">\n      <span class=\"defile\" [attr.data-text]=\"' - ' + table.passengers\" *ngIf=\"table.passengers.length > maxSize\">{{ table.passengers }}</span>\n      <span *ngIf=\"table.passengers.length <= maxSize\">{{ table.passengers }}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: content-box; }\n\n*:before,\n*:after {\n  box-sizing: content-box; }\n\n#info {\n  margin-bottom: 20px; }\n\n.title {\n  color: yellow;\n  text-align: center;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px; }\n\n.title.big {\n  font-size: 70px;\n  position: relative;\n  top: 10px;\n  left: 400px; }\n\np.arrival {\n  display: inline-block;\n  width: 35%; }\n\np.hguest {\n  display: inline-block;\n  width: 45%; }\n\n.half-letter {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  display: inline-block;\n  position: relative;\n  left: -70px;\n  top: 25px; }\n\n.panel-background {\n  background: linear-gradient(#454545, #202020);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n#panneau {\n  width: 98%;\n  height: 100%;\n  margin: 0;\n  text-align: left;\n  padding: 20px;\n  border-radius: 2px;\n  line-height: normal;\n  font-family: BigNoodleTitling; }\n\n#panneau .letter {\n  position: relative;\n  display: inline-block;\n  margin: 5px;\n  width: 50px;\n  height: 75px;\n  border: 3px solid rgba(0, 0, 0, 0.8);\n  border-radius: 5px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.15); }\n\n#panneau .letter:before,\n#panneau .letter:after {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 2px;\n  height: 12px;\n  top: 50%;\n  margin-top: -6px;\n  border-radius: 50%;\n  border: 1px black solid;\n  background: linear-gradient(#b2b0b1, #070707); }\n\n#panneau .letter:before {\n  left: -2px; }\n\n#panneau .letter:after {\n  right: -2px; }\n\n#panneau .letter p {\n  position: relative;\n  z-index: 0;\n  margin: auto;\n  height: 70px;\n  width: 50px;\n  color: #eee;\n  padding-top: 5px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 60px;\n  overflow: hidden;\n  background: #323232;\n  /* Old browsers */\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#323232', endColorstr='#4b4b4b',GradientType=0 );\n  /* IE6-9 */\n  box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.5); }\n\n#panneau .letter p:after {\n  position: absolute;\n  z-index: 1;\n  content: \"\";\n  height: 1px;\n  width: 50px;\n  background-color: rgba(0, 0, 0, 0.55);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.07);\n  left: 0;\n  top: 50%; }\n\n#panneau .airport {\n  display: inline-block;\n  position: relative; }\n\n#panneau .guest {\n  position: relative;\n  top: -16px;\n  margin-left: 5px;\n  display: inline-block;\n  padding: 2px;\n  overflow: hidden;\n  table-layout: fixed;\n  font-family: BigNoodleTitling;\n  color: #eee;\n  height: 40px;\n  width: 1200px;\n  font-size: 40px;\n  background: linear-gradient(to right, #303030, #131313);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n.guest > span {\n  display: inline-block;\n  position: relative;\n  top: -3px; }\n\n.defile {\n  display: block;\n  -webkit-animation: linear marqueelike 20s infinite;\n  animation: linear marqueelike 20s infinite;\n  margin-left: -100%;\n  padding: 0 5px;\n  text-align: left;\n  height: 25px; }\n\n.defile:after {\n  content: attr(data-text);\n  position: absolute;\n  white-space: nowrap;\n  padding-left: 10px; }\n\n@-webkit-keyframes marqueelike {\n  0%, 100% {\n    margin-left: 0; }\n  99.99% {\n    margin-left: -100%; } }\n\n@keyframes marqueelike {\n  0%, 100% {\n    margin-left: 0; }\n  99.99% {\n    margin-left: -100%; } }\n\n.aletter {\n  overflow: hidden;\n  margin: 0 0;\n  line-height: 70px;\n  color: #eee; }\n\n.aletter:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    word-break: break-all;\n    background-color: -moz-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #323232), color-stop(50%, #3c3c3c), color-stop(51%, #464646), color-stop(100%, #4b4b4b));\n    background-color: -webkit-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -o-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: -ms-linear-gradient(top, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: linear-gradient(to bottom, #323232 0%, #3c3c3c 50%, #464646 51%, #4b4b4b 100%);\n    background-color: #323232; }\n\n.aletter:nth-child(1):before {\n  content: \"VTWCZXSRABYQUP\";\n  margin-top: -840px;\n  -webkit-animation-name: aletter1;\n          animation-name: aletter1;\n  -webkit-animation-duration: 0.22153846s;\n          animation-duration: 0.22153846s;\n  -webkit-animation-delay: 0.96s;\n          animation-delay: 0.96s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter1 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter1 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(2):before {\n  content: \"VBCPARTYXZUWSQ\";\n  margin-top: -280px;\n  -webkit-animation-name: aletter2;\n          animation-name: aletter2;\n  -webkit-animation-duration: 4.224s;\n          animation-duration: 4.224s;\n  -webkit-animation-delay: 0.12s;\n          animation-delay: 0.12s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter2 {\n  from {\n    margin-top: -280px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter2 {\n  from {\n    margin-top: -280px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(3):before {\n  content: \"YTAPVZRQUWCXSB\";\n  margin-top: -700px;\n  -webkit-animation-name: aletter3;\n          animation-name: aletter3;\n  -webkit-animation-duration: 4.8s;\n          animation-duration: 4.8s;\n  -webkit-animation-delay: 0.12s;\n          animation-delay: 0.12s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter3 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter3 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(4):before {\n  content: \"VBWAXTYCZRQUPS\";\n  margin-top: -560px;\n  -webkit-animation-name: aletter4;\n          animation-name: aletter4;\n  -webkit-animation-duration: 0.96s;\n          animation-duration: 0.96s;\n  -webkit-animation-delay: 0.82s;\n          animation-delay: 0.82s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter4 {\n  from {\n    margin-top: -560px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter4 {\n  from {\n    margin-top: -560px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(5):before {\n  content: \"VPBWYRSCAXUQTZ\";\n  margin-top: -700px;\n  -webkit-animation-name: aletter5;\n          animation-name: aletter5;\n  -webkit-animation-duration: 4.14545455s;\n          animation-duration: 4.14545455s;\n  -webkit-animation-delay: 0.24s;\n          animation-delay: 0.24s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter5 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter5 {\n  from {\n    margin-top: -700px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(6):before {\n  content: \"BQZUWVAXRCTSYP\";\n  margin-top: -280px;\n  -webkit-animation-name: aletter6;\n          animation-name: aletter6;\n  -webkit-animation-duration: 4.56s;\n          animation-duration: 4.56s;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter6 {\n  from {\n    margin-top: -280px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter6 {\n  from {\n    margin-top: -280px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(7):before {\n  content: \"WUYXSVACZTQRBP\";\n  margin-top: -840px;\n  -webkit-animation-name: aletter7;\n          animation-name: aletter7;\n  -webkit-animation-duration: 0.38769231s;\n          animation-duration: 0.38769231s;\n  -webkit-animation-delay: 0.93s;\n          animation-delay: 0.93s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter7 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter7 {\n  from {\n    margin-top: -840px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(8):before {\n  content: \"VXRZBTPAYWQUSC\";\n  margin-top: -770px;\n  -webkit-animation-name: aletter8;\n          animation-name: aletter8;\n  -webkit-animation-duration: 4.785s;\n          animation-duration: 4.785s;\n  -webkit-animation-delay: 0.13s;\n          animation-delay: 0.13s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter8 {\n  from {\n    margin-top: -770px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter8 {\n  from {\n    margin-top: -770px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(9):before {\n  content: \"BAZQXUPSWVCTRY\";\n  margin-top: 0px;\n  -webkit-animation-name: aletter9;\n          animation-name: aletter9;\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n  -webkit-animation-delay: 0.42s;\n          animation-delay: 0.42s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter9 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter9 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(10):before {\n  content: \"RPAUCBZQSXWVTY\";\n  margin-top: -350px;\n  -webkit-animation-name: aletter10;\n          animation-name: aletter10;\n  -webkit-animation-duration: 3.1s;\n          animation-duration: 3.1s;\n  -webkit-animation-delay: 0.38s;\n          animation-delay: 0.38s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter10 {\n  from {\n    margin-top: -350px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter10 {\n  from {\n    margin-top: -350px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(11):before {\n  content: \"CSRPQVTYAZUXWB\";\n  margin-top: 0px;\n  -webkit-animation-name: aletter11;\n          animation-name: aletter11;\n  -webkit-animation-duration: 0s;\n          animation-duration: 0s;\n  -webkit-animation-delay: 0.06s;\n          animation-delay: 0.06s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter11 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter11 {\n  from {\n    margin-top: 0px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(12):before {\n  content: \"VUZQYBTAWSCXPR\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter12;\n          animation-name: aletter12;\n  -webkit-animation-duration: 3.13714286s;\n          animation-duration: 3.13714286s;\n  -webkit-animation-delay: 0.39s;\n          animation-delay: 0.39s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter12 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter12 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(13):before {\n  content: \"RCXZQBUTPVSAWY\";\n  margin-top: -490px;\n  -webkit-animation-name: aletter13;\n          animation-name: aletter13;\n  -webkit-animation-duration: 3.78s;\n          animation-duration: 3.78s;\n  -webkit-animation-delay: 0.28s;\n          animation-delay: 0.28s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter13 {\n  from {\n    margin-top: -490px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter13 {\n  from {\n    margin-top: -490px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(14):before {\n  content: \"CZWAXBTYRPUQVS\";\n  margin-top: -630px;\n  -webkit-animation-name: aletter14;\n          animation-name: aletter14;\n  -webkit-animation-duration: 4.644s;\n          animation-duration: 4.644s;\n  -webkit-animation-delay: 0.14s;\n          animation-delay: 0.14s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter14 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter14 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(15):before {\n  content: \"RUVAWQCPBZYTSX\";\n  margin-top: -630px;\n  -webkit-animation-name: aletter15;\n          animation-name: aletter15;\n  -webkit-animation-duration: 3.078s;\n          animation-duration: 3.078s;\n  -webkit-animation-delay: 0.43s;\n          animation-delay: 0.43s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter15 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter15 {\n  from {\n    margin-top: -630px; }\n  to {\n    margin-top: 70px; } }\n\n.aletter:nth-child(16):before {\n  content: \"VACZWURTBYQSPX\";\n  margin-top: -420px;\n  -webkit-animation-name: aletter16;\n          animation-name: aletter16;\n  -webkit-animation-duration: 2.41714286s;\n          animation-duration: 2.41714286s;\n  -webkit-animation-delay: 0.53s;\n          animation-delay: 0.53s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes aletter16 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n@keyframes aletter16 {\n  from {\n    margin-top: -420px; }\n  to {\n    margin-top: 70px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvQzpcXGRldmFwcHNcXFdvcmtcXGZsaWdodC1ib2FyZC9zcmNcXGFwcFxcYm9hcmRcXGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksdUJBQXVCLEVBQUE7O0FBRW5DOztFQUlZLHVCQUF1QixFQUFBOztBQUduQztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQjtFQUNyQixVQUNKLEVBQUE7O0FBR0E7RUFDSSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQ0osRUFBQTs7QUFFQTtFQUtDLDZDQUEyRDtFQUl6RCxzQ0FBbUMsRUFBQTs7QUFHdEM7RUFFSSxVQUFVO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFFdEIsNkJBQTZCLEVBQUE7O0FBRzlCO0VBRUMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBaUM7RUFDakMsa0JBQWtCO0VBSWhCLDZDQUEwQyxFQUFBOztBQUc3Qzs7RUFFQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUt2Qiw2Q0FBMkQsRUFBQTs7QUFHNUQ7RUFFQyxVQUFTLEVBQUE7O0FBR1Y7RUFFQyxXQUFVLEVBQUE7O0FB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QkFBZ0I7RUFDaEIsa0NBQW9EO1VBQXBELDBCQUFvRDtFQUNwRCw4QkFBNEI7VUFBNUIsc0JBQTRCO0VBQzVCLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQTs7QUErR1Y7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQTs7QUF1R1Y7RUFDSSx5QkFBbUQ7RUFDbkQsa0JBTDZCO0VBTTdCLGlDQUFnQjtVQUFoQix5QkFBZ0I7RUFDaEIsa0NBQW9EO1VBQXBELDBCQUFvRDtFQUNwRCw4QkFBNEI7VUFBNUIsc0JBQTRCO0VBQzVCLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQTs7QUErR1Y7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQTs7QUF1R1Y7RUFDSSx5QkFBbUQ7RUFDbkQsa0JBTDZCO0VBTTdCLGlDQUFnQjtVQUFoQix5QkFBZ0I7RUFDaEIsdUNBQW9EO1VBQXBELCtCQUFvRDtFQUNwRCw4QkFBNEI7VUFBNUIsc0JBQTRCO0VBQzVCLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQTs7QUErR1Y7RUFDSTtJQUNJLGtCQWJ5QixFQUFBO0VBZTdCO0lBQ0ksZ0JBcEhFLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4jaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnRpdGxlLmJpZyB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA0MDBweDtcclxufVxyXG5cclxucC5hcnJpdmFsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbnAuaGd1ZXN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgXHJcbiAgICB3aWR0aDogNDUlXHJcbn1cclxuXHJcblxyXG4uaGFsZi1sZXR0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTcwcHg7XHJcbiAgICB0b3A6IDI1cHhcclxufVxyXG5cclxuLnBhbmVsLWJhY2tncm91bmQge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYig2OSw2OSw2OSksIHJnYigzMiwzMiwzMikpO1xyXG5cdGJhY2tncm91bmQ6ICAgIC1tb3otbGluZWFyLWdyYWRpZW50KHJnYig2OSw2OSw2OSksIHJnYigzMiwzMiwzMikpO1xyXG5cdGJhY2tncm91bmQ6IFx0IC1vLWxpbmVhci1ncmFkaWVudChyZ2IoNjksNjksNjkpLCByZ2IoMzIsMzIsMzIpKTtcclxuXHRiYWNrZ3JvdW5kOiBcdFx0bGluZWFyLWdyYWRpZW50KHJnYig2OSw2OSw2OSksIHJnYigzMiwzMiwzMikpO1xyXG5cclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5cdCAgIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNSk7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcblxyXG4jcGFubmVhdVxyXG57XHJcbiAgICB3aWR0aDogOTglO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IDA7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHJcblx0Zm9udC1mYW1pbHk6IEJpZ05vb2RsZVRpdGxpbmc7XHJcbn1cclxuXHJcbiNwYW5uZWF1IC5sZXR0ZXJcclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA3NXB4O1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC44KTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG5cdCAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbn1cclxuXHJcbiNwYW5uZWF1IC5sZXR0ZXI6YmVmb3JlLFxyXG4jcGFubmVhdSAubGV0dGVyOmFmdGVye1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0d2lkdGg6IDJweDtcclxuXHRoZWlnaHQ6IDEycHg7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcblxyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxNzgsMTc2LDE3NyksIHJnYig3LDcsNykpO1xyXG5cdGJhY2tncm91bmQ6ICAgIC1tb3otbGluZWFyLWdyYWRpZW50KHJnYigxNzgsMTc2LDE3NyksIHJnYig3LDcsNykpO1xyXG5cdGJhY2tncm91bmQ6IFx0IC1vLWxpbmVhci1ncmFkaWVudChyZ2IoMTc4LDE3NiwxNzcpLCByZ2IoNyw3LDcpKTtcclxuXHRiYWNrZ3JvdW5kOiBcdFx0bGluZWFyLWdyYWRpZW50KHJnYigxNzgsMTc2LDE3NyksIHJnYig3LDcsNykpO1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyOmJlZm9yZVxyXG57XHJcblx0bGVmdDotMnB4O1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyOmFmdGVyXHJcbntcclxuXHRyaWdodDotMnB4O1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyIHBcclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAwO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0Y29sb3I6ICNlZWU7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0YmFja2dyb3VuZDogIzMyMzIzMjsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgIzMyMzIzMiAwJSwgIzNjM2MzYyA1MCUsICM0NjQ2NDYgNTElLCAjNGI0YjRiIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCMzMjMyMzIpLCBjb2xvci1zdG9wKDUwJSwjM2MzYzNjKSwgY29sb3Itc3RvcCg1MSUsIzQ2NDY0NiksIGNvbG9yLXN0b3AoMTAwJSwjNGI0YjRiKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgIzMyMzIzMiAwJSwjM2MzYzNjIDUwJSwjNDY0NjQ2IDUxJSwjNGI0YjRiIDEwMCUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cclxuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKTsgLyogSUUxMCsgKi9cclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgIzMyMzIzMiAwJSwjM2MzYzNjIDUwJSwjNDY0NjQ2IDUxJSwjNGI0YjRiIDEwMCUpOyAvKiBXM0MgKi9cclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzMyMzIzMicsIGVuZENvbG9yc3RyPScjNGI0YjRiJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG5cclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG5cdCAgIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG59XHJcblxyXG4jcGFubmVhdSAubGV0dGVyIHA6YWZ0ZXJcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuXHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcblx0ICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogNTAlO1xyXG59XHJcblxyXG4jcGFubmVhdSAuYWlycG9ydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3RyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIC8vbGVmdDogLTQlO1xyXG59XHJcblxyXG4jcGFubmVhdSAuZ3Vlc3Qge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTE2cHg7XHJcbiAgICAvL2xlZnQ6IC03JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgICBmb250LWZhbWlseTogQmlnTm9vZGxlVGl0bGluZztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMTMwMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsIHJnYig0OCwgNDgsIDQ4KSwgcmdiKDE5LCAxOSwgMTkpKTtcclxuXHRiYWNrZ3JvdW5kOiAgICAtbW96LWxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsIHJnYig0OCwgNDgsIDQ4KSwgcmdiKDE5LCAxOSwgMTkpKTtcclxuXHRiYWNrZ3JvdW5kOiBcdCAtby1saW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCByZ2IoNDgsIDQ4LCA0OCksIHJnYigxOSwgMTksIDE5KSk7XHJcblx0YmFja2dyb3VuZDogXHRcdGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsIHJnYig0OCwgNDgsIDQ4KSwgcmdiKDE5LCAxOSwgMTkpKTtcclxuXHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuXHQgICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjUpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLmd1ZXN0ID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5kZWZpbGUge1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0LXdlYmtpdC1hbmltYXRpb246bGluZWFyIG1hcnF1ZWVsaWtlIDIwcyBpbmZpbml0ZSA7XHJcblx0LW1vei1hbmltYXRpb246bGluZWFyIG1hcnF1ZWVsaWtlIDIwcyBpbmZpbml0ZSA7XHJcblx0LW8tYW5pbWF0aW9uOmxpbmVhciBtYXJxdWVlbGlrZSAyMHMgaW5maW5pdGUgO1xyXG5cdC1tcy1hbmltYXRpb246bGluZWFyIG1hcnF1ZWVsaWtlIDIwcyBpbmZpbml0ZSA7XHJcblx0YW5pbWF0aW9uOmxpbmVhciBtYXJxdWVlbGlrZSAyMHMgaW5maW5pdGUgO1xyXG5cdG1hcmdpbi1sZWZ0Oi0xMDAlO1xyXG5cdHBhZGRpbmc6MCA1cHg7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGhlaWdodDoyNXB4O1xyXG59XHJcblxyXG4uZGVmaWxlOmFmdGVyIHtcclxuXHRjb250ZW50OmF0dHIoZGF0YS10ZXh0KTtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR3aGl0ZS1zcGFjZTpub3dyYXA7XHJcblx0cGFkZGluZy1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBtYXJxdWVlbGlrZSB7XHJcblx0MCUsIDEwMCUge21hcmdpbi1sZWZ0OjA7fVxyXG5cdDk5Ljk5JSB7bWFyZ2luLWxlZnQ6LTEwMCU7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBtYXJxdWVlbGlrZSB7XHJcblx0MCUsIDEwMCUge21hcmdpbi1sZWZ0OjA7fVxyXG5cdDk5Ljk5JSB7bWFyZ2luLWxlZnQ6LTEwMCU7fVxyXG59XHJcbkAtby1rZXlmcmFtZXMgbWFycXVlZWxpa2Uge1xyXG5cdDAlLCAxMDAlIHttYXJnaW4tbGVmdDowO31cclxuXHQ5OS45OSUge21hcmdpbi1sZWZ0Oi0xMDAlO31cclxufVxyXG5ALW1zLWtleWZyYW1lcyBtYXJxdWVlbGlrZSB7XHJcblx0MCUsIDEwMCUge21hcmdpbi1sZWZ0OjA7fVxyXG5cdDk5Ljk5JSB7bWFyZ2luLWxlZnQ6LTEwMCU7fVxyXG59XHJcbkBrZXlmcmFtZXMgbWFycXVlZWxpa2Uge1xyXG5cdDAlLCAxMDAlIHttYXJnaW4tbGVmdDowO31cclxuXHQ5OS45OSUge21hcmdpbi1sZWZ0Oi0xMDAlO31cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGNvbG9yczogKFxyXG5cdGJhY2tncm91bmQ6ICMzMjMyMzIsXHJcblx0Ym1vejogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgIzMyMzIzMiAwJSwgIzNjM2MzYyA1MCUsICM0NjQ2NDYgNTElLCAjNGI0YjRiIDEwMCUpLFxyXG5cdGJ3ZWJnOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCMzMjMyMzIpLCBjb2xvci1zdG9wKDUwJSwjM2MzYzNjKSwgY29sb3Itc3RvcCg1MSUsIzQ2NDY0NiksIGNvbG9yLXN0b3AoMTAwJSwjNGI0YjRiKSksXHJcblx0YndlYmw6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKSxcclxuXHRib3BlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgIzMyMzIzMiAwJSwjM2MzYzNjIDUwJSwjNDY0NjQ2IDUxJSwjNGI0YjRiIDEwMCUpLFxyXG5cdGJpZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzIzMjMyIDAlLCMzYzNjM2MgNTAlLCM0NjQ2NDYgNTElLCM0YjRiNGIgMTAwJSksXHJcblx0Ynd0YzogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICMzMjMyMzIgMCUsIzNjM2MzYyA1MCUsIzQ2NDY0NiA1MSUsIzRiNGI0YiAxMDAlKSxcclxuICAgIHRleHQ6ICNlZWVcclxuKTtcclxuXHJcbiRmb250OiAoXHJcbiAgICBmYW1pbHk6IEJpZ05vb2RsZVRpdGxpbmcsXHJcbiAgICBzaXplOiA3MHB4LFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBcclxuKTtcclxuXHJcbiRjb25maWc6IChcclxuICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICAgIG5iLWxldHRlcnM6IDE2LFxyXG4gICAgYW5pbWF0aW9uLWxlbmd0aDogNnMsXHJcbiAgICBtYXNrLWxldHRlcnM6IChcIlpcIiwgXCJZXCIsIFwiWFwiLCBcIldcIiwgXCJWXCIsIFwiVVwiLCBcIlRcIiwgXCJTXCIsIFwiUlwiLCBcIlFcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJQXCIpXHJcbik7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJHZhbHVlKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGZvbnQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGZvbnQsICR2YWx1ZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBjb25maWcoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbmZpZywgJHZhbHVlKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHJhbmRvbS1zdHJpbmcoJGxpc3QpIHtcclxuICAgICRyZXN1bHQ6IG51bGw7XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkbGlzdCkge1xyXG4gICAgICAgICRyYW5kb206IHJhbmRvbShsZW5ndGgoJGxpc3QpKTtcclxuICAgICAgICAkY3VycmVudDogbnRoKCRsaXN0LCAkcmFuZG9tKTtcclxuICAgICAgICAkbGlzdDogcmVtb3ZlLW50aCgkbGlzdCwgJHJhbmRvbSk7XHJcbiAgICAgICAgJHJlc3VsdDogJHJlc3VsdCN7JGN1cnJlbnR9O1xyXG4gICAgfVxyXG4gICAgQHJldHVybiAkcmVzdWx0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gcmVtb3ZlLW50aCgkbGlzdCwgJGluZGV4KSB7XHJcbiAgICAkcmVzdWx0OiAoKTtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XHJcbiAgICAgICAgQGlmICRpICE9ICRpbmRleCB7XHJcbiAgICAgICAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQHJldHVybiAkcmVzdWx0O1xyXG59XHJcblxyXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xyXG4gICAgQGlmIHR5cGUtb2YoJGJyZWFrcG9pbnQpID09IGxpc3Qge1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiBudGgoJGJyZWFrcG9pbnQsIDEpKSBhbmQgKG1heC13aWR0aDogbnRoKCRicmVha3BvaW50LCAyKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLmFsZXR0ZXIge1xyXG4gICAgLy93aWR0aDogZm9udChzaXplKTtcclxuICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwIGNlaWwoZm9udChsZXR0ZXItc3BhY2luZykgLyAyKTtcclxuICAgIC8vZm9udC1mYW1pbHk6IGZvbnQoZmFtaWx5KTtcclxuICAgIC8vZm9udC1zaXplOiBmb250KHNpemUpO1xyXG4gICAgLy9mb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IGZvbnQoc2l6ZSk7XHJcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogY29sb3IodGV4dCk7XHJcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKDYyNXB4KSB7XHJcbiAgICAgICAgLy9mb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgLy93aWR0aDogMThweDtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGJtb3opO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGJ3ZWJnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihid2VibCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoYm9wZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoYmllKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihid3RjKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihiYWNrZ3JvdW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBjb25maWcobmItbGV0dGVycykge1xyXG4gICAgJGxlbmd0aDogbGVuZ3RoKGNvbmZpZyhtYXNrLWxldHRlcnMpKTtcclxuICAgICRyYW5kb206IHJhbmRvbSgkbGVuZ3RoKTtcclxuICAgICRzdGVwczogJHJhbmRvbSAtIDE7XHJcbiAgICAkb2Zmc2V0OiBmb250KHNpemUpICogJHN0ZXBzICogLTE7XHJcbiAgICAkZGVsYXk6IHJhbmRvbSgxMDApIC8gMTAwO1xyXG4gICAgJGR1cmF0aW9uOiAkc3RlcHMgKiAoY29uZmlnKGFuaW1hdGlvbi1sZW5ndGgpIC8gJHJhbmRvbSk7XHJcbiAgICAuYWxldHRlcjpudGgtY2hpbGQoI3skaX0pOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogcXVvdGUocmFuZG9tLXN0cmluZyhjb25maWcobWFzay1sZXR0ZXJzKSkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRvZmZzZXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFsZXR0ZXIjeyRpfTtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbiAtICgkZHVyYXRpb24gKiAkZGVsYXkpO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGRlbGF5ICogMXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGFsZXR0ZXIjeyRpfSB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRvZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogZm9udChzaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var stateDefault = 'default';
var BoardComponent = /** @class */ (function () {
    function BoardComponent(boardService, route) {
        var _this = this;
        this.boardService = boardService;
        this.route = route;
        this.state = stateDefault;
        this.states = ['uptwo', 'upone', 'default', 'downone', 'downtwo'];
        this.stateOffset = 2;
        this.planeAnimation = false;
        this.withNoMenu = false;
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
        // console.log('On BoardComponent constructor...');
        // console.log('body.height = ', document.body.clientHeight);
        // console.log('diffHeight = ', this.diffHeight);
        route.data.subscribe(function (v) {
            console.log('Board data ', v);
            if (v.nomenu) {
                _this.withNoMenu = v.nomenu;
            }
            else {
                _this.withNoMenu = false;
            }
            console.log('withNoMenu = ', _this.withNoMenu);
        });
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('On BoardComponent init...', this.withNoMenu);
        if (this.withNoMenu) {
            this.boardService.disableMenu();
        }
        this.flightSrc$ = this.boardService.flightSrcSubject.subscribe(function (fs) {
            _this.from = fs;
        });
        this.flightTime$ = this.boardService.flightTimeSubject.subscribe(function (ft) {
            _this.fhour = ft;
        });
        this.flightNum$ = this.boardService.flightNumSubject.subscribe(function (fn) {
            _this.flight = fn;
        });
        this.from = this.boardService.flightSrc;
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
            // console.log('pageYOffset = ', data);
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
            if (_this.planeAnimation) {
                var off = Math.trunc(Math.random() * 5);
                _this.state = _this.states[off];
            }
        }, 2000);
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        this.flightsSubscription.unsubscribe();
        this.scrollDownSubscription.unsubscribe();
        this.flightSrc$.unsubscribe();
        this.flightTime$.unsubscribe();
        this.flightNum$.unsubscribe();
    };
    BoardComponent.prototype.onEscapeHandler = function (event) {
        if (!this.withNoMenu) {
            this.boardService.toggleMenu();
        }
    };
    BoardComponent.prototype.onKeydownHandler = function (event) {
        //console.log(event);
        if ((event.key === 'A') || (event.key === 'a')) {
            this.planeAnimation = !this.planeAnimation;
        }
        else if ((event.key === 'D') || (event.key === 'd')) {
            this.planeAnimation = false;
            this.stopScrolling = true;
            this.scrollTo = 0;
            window.scrollTo(0, this.scrollTo);
            this.state = stateDefault;
            this.stateOffset = 3;
        }
        else if (event.key === ' ') {
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
        else if (event.keyCode === 37) {
            if (this.stateOffset > 0) {
                this.stateOffset -= 1;
                this.state = this.states[this.stateOffset];
            }
        }
        else if (event.keyCode === 39) {
            if (this.stateOffset < (this.states.length - 1)) {
                this.stateOffset += 1;
                this.state = this.states[this.stateOffset];
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('flight-input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardComponent.prototype, "flight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown.escape', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoardComponent.prototype, "onEscapeHandler", null);
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
            animations: [
                // Each unique animation requires its own trigger. The first argument of the trigger function is the name
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rotatedState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('upone', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-25deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('uptwo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-50deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('downone', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('downtwo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => downone', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => downtwo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => upone', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => uptwo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('2000ms ease-out')),
                ])
            ],
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 col-sm-offset-2\">\r\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"input-label\">\r\n          Nom du passager\r\n        </label>\r\n        <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"flight\" class=\"input-label\">\r\n          Embarque sur le vol\r\n        </label>\r\n        <select name=\"flight\" id=\"flight\" class=\"form-control\" ngModel required>\r\n          <option [ngValue]=\"item.id\" *ngFor=\"let item of flights\">{{ item.name }} (#{{ item.id }}): {{ getPassengers(item) }}</option>\r\n        </select>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Enregistrer</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"form-group\" style=\"margin-top: 20px;\">\r\n  <div class=\"container\" style=\"overflow-y: scroll; height: 600px;\">\r\n    <div class=\"row align-text-bottom text-warning\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Nom</p>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n          <p>Flight #</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-items-center\" *ngFor=\"let item of passengers\">\r\n      <div class=\"col-sm-4\">\r\n        <span style=\"color: wheat\">{{ item.name }}</span>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <span style=\"color: wheat\" [title]=\"getFlightInfo(item)\">{{ item.flightId }}</span>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemove(item)\">Supprimer</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
            _this.passengers = passengers.sort(function (pa, pb) {
                return pa.name.localeCompare(pb.name);
            });
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
    GuestComponent.prototype.getFlightInfo = function (passenger) {
        //console.log('Tooltip for ', passenger.name);
        var flight = this.flights.find(function (ite) { return (ite.id === passenger.flightId); });
        return flight.name + ' - ' + this.getPassengers(flight);
    };
    GuestComponent.prototype.getPassengers = function (flight) {
        var inFlight = this.passengers.filter(function (item) {
            return (item.flightId === flight.id);
        }).map(function (elt) {
            return elt.name;
        });
        return inFlight.join('/');
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

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"font-size: 20px\">\n  <div class=\"panel-info\">\n    <p class=\"text-white\" style=\"color: white;\">\n      <span class=\"glyphicon glyphicon-header\" aria-hidden=\"true\"></span>\n      <span style=\"padding-left: 15px\">Sur la page pricipale (\"Flight Board) plusieurs raccourcis clavier sont utilisables :</span>\n    </p>\n    <div class=\"row\" style=\"margin: 4px\">\n      <div class=\"bg-primary text-white col-md-3\">touche  'a'</div> \n      <div class=\"bg-info col-md-6\">\n        <span class=\"glyphicon glyphicon-arrow-right\" style=\"padding-right: 6px\"></span> \n        <span>Arrête/Lance l'animation Avion</span>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin: 4px\">\n      <div class=\"bg-primary text-white col-md-3\">touches haut/bas</div> \n      <div class=\"bg-info col-md-6\">\n        <span class=\"glyphicon glyphicon-arrow-right\" style=\"padding-right: 6px\"></span> \n        <span>Défilement vertical</span>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin: 4px\">\n      <div class=\"bg-primary text-white col-md-3\">touches droite/gauche</div> \n      <div class=\"bg-info col-md-6\">\n        <span class=\"glyphicon glyphicon-arrow-right\" style=\"padding-right: 6px\"></span> \n        <span>Rotation de l'avion</span>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin: 4px\">\n      <div class=\"bg-primary text-white col-md-3\">touche  'espace'</div> \n      <div class=\"bg-info col-md-6\">\n        <span class=\"glyphicon glyphicon-arrow-right\" style=\"padding-right: 6px\"></span> \n        <span>Lance/Arrête le défilement vertical automatique</span>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin: 4px\">\n      <div class=\"bg-primary text-white col-md-3\">touche  'd'</div> \n      <div class=\"bg-info col-md-6\">\n        <span class=\"glyphicon glyphicon-arrow-right\" style=\"padding-right: 6px\"></span> \n        <span>Arrête tout et positionne l'écran dans sont état initial</span>\n      </div>\n    </div>\n    <div class=\"col-md-10\" style=\"color: white; margin-top: 20px\">\n      <p>\n        Dans la zone de menu, à droite,\n        le lien 'Télécharger les données' permet de récupérer les données \n        saisies pour remplacer le fichier 'assets/DbData.json'.\n      </p>\n      <p>\n        Le bouton 'Hide'\n        permet de cacher le menu. Utiliser la touche F11 pour passer en mode plein écran. \n      </p>\n      <button class=\"btn btn-primary\" (click)=\"onBoarding()\"><span class=\"glyphicon glyphicon-plane\"></span>&nbsp;  Boarding</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HelpComponent = /** @class */ (function () {
    function HelpComponent(router) {
        this.router = router;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.onBoarding = function () {
        this.router.navigate(['/board/0']);
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HelpComponent);
    return HelpComponent;
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
        this.flightSrc = 'Martigues';
        this.flightSrcSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.flightNumber = 'SA12345T';
        this.flightNumSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.flightTime = '18:00';
        this.flightTimeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
            _this.emitArrivals();
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
    BoardService.prototype.emitFlightSrc = function () {
        this.flightSrcSubject.next(this.flightSrc);
    };
    BoardService.prototype.emitFlightTime = function () {
        this.flightTimeSubject.next(this.flightTime);
    };
    BoardService.prototype.emitFlightNumber = function () {
        this.flightNumSubject.next(this.flightNumber);
    };
    BoardService.prototype.emitMenu = function () {
        this.menuSubject.next(this.showMenu);
    };
    BoardService.prototype.disableMenu = function () {
        this.showMenu = false;
        this.emitMenu();
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

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"input-label\">\n          Nom du vol\n        </label>\n        <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Enregistrer</button>\n    </form>\n  </div>\n</div>\n<div class=\"form-group\" style=\"margin-top: 20px;\">\n  <div class=\"container\" style=\"overflow-y: scroll; height: 600px;\">\n    <div class=\"row align-text-bottom text-warning\">\n      <div class=\"col-sm-2 col-sm-offset-1\">\n        <p>Destination</p>\n      </div>\n      <div class=\"col-sm-2 col-sm-offset-1\">\n          <p>Nombre de passagers</p>\n        </div>\n      </div>\n    <div class=\"row align-content-lg-start\" *ngFor=\"let item of flights\">\n      <div class=\"col-sm-4\">\n        <span class=\"col-sm-8 col-sm-offset-2\" style=\"color: wheat\">{{ item.name }}</span>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"col-sm-8 col-sm-offset-2\" style=\"color: wheat\" >{{ getPassengerNb(item) }}</span>\n      </div>\n      <div class=\"col-sm-4\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemove(item)\">Supprimer</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.passengerSubscription = this.brdService.passengerSubject.subscribe(function (passengers) {
            _this.passengers = passengers;
        });
        this.brdService.emitPassengers();
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
    TableComponent.prototype.getPassengerNb = function (flight) {
        var inFlight = this.passengers.filter(function (item) {
            return (flight.id === item.flightId);
        });
        if (inFlight) {
            return inFlight.length;
        }
        else {
            return 0;
        }
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