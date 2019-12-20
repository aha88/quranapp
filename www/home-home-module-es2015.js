(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"primary\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Quran Verses\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-toolbar>\n    <ion-searchbar (ionChange)=\"getItems($event)\"></ion-searchbar>\n</ion-toolbar>\n\n<ion-content>\n\n\n  \n  <ion-grid id=\"body\">\n    \n    <div>\n      <ion-row *ngFor=\"let p of menulist | filter:texttosearch\">\n        <ion-col size=\"10\">\n\n          <ion-item [routerDirection]=\"'root'\" full id=\"itemlist\">\n\n            <ion-col size=\"7\">\n              <ion-label>\n                {{p.index}} ) {{p.title}} <p> {{p.titleEn}} </p>\n              </ion-label>\n            </ion-col>\n            \n            <ion-col size=\"5\">\n                <ion-label style=\"text-align: center;\">\n                    <h2> <img src=\"{{p.imagesvg}}\" id=\"imgsvg\"/></h2>\n                </ion-label>\n            </ion-col>\n              \n\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"2\" id=\"framebutton\" (click)=\"gotoquran(p.index)\" >\n            <ion-label id=\"buttonleft\">\n                  <ion-icon name=\"play\"></ion-icon>  \n            </ion-label>\n          </ion-col>\n\n          \n      </ion-row>\n      \n    </div>\n \n</ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding: 0px 12px;\n  font-size: 26px;\n  font-family: quranFont !important;\n  text-align: right;\n  line-height: 2;\n}\n\nion-label h2 {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\nion-label {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n#body {\n  background: #eae4ea;\n}\n\n#imgsvg {\n  height: 2em;\n}\n\n#buttonleft {\n  text-align: right;\n  border-radius: 0px;\n}\n\nion-row {\n  margin-bottom: 4px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0.0053px;\n}\n\n#framebutton {\n  background: #ffce00;\n  text-align: center;\n  padding: 11px;\n  height: 47px;\n  margin: 0px;\n  color: white;\n}\n\n#itemlist {\n  padding: 0px 0px;\n}\n\nion-label p {\n  font-size: 11px;\n  font-weight: lighter;\n}\n\nli h3 {\n  display: contents;\n  text-align: right;\n  margin-right: 15px;\n  color: black;\n}\n\nli {\n  list-style-type: none;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\n.boxbismillah {\n  border-bottom: 1px solid #666;\n}\n\n.number {\n  font-family: quranFontNumber !important;\n  display: contents;\n  font-size: 40px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFpemF0XFxEb2N1bWVudHNcXFF1cmFuSG91clxcMi4yL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsNkJBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUVBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtBQ0ZKOztBRElFO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdDO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNBSjs7QURHRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREtFO0VBQ0UsNkJBQUE7QUNGSjs7QURNRTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBoM3tcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICB9XG5cbiAgaW9uLWxhYmVsIGgyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cblxuICAuaXRlbS1pbm5lcntcbiAgICBwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2JvZHl7XG4gICAgYmFja2dyb3VuZDogI2VhZTRlYTtcbiAgfVxuXG4gICNpbWdzdmcge1xuICAgIGhlaWdodDogMmVtO1xuICB9XG5cbiAgI2J1dHRvbmxlZnQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC8vIGJhY2tncm91bmQ6ICNmMWRhMGI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG5cbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWFyZ2luOiAwLjAwNTNweDtcbiAgfVxuXG4gICNmcmFtZWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZjZTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI2l0ZW1saXN0e1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gIH1cblxuICBpb24tbGFiZWwgcCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG5cbiBsaSBoMyB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gXG4gIFxuICAuYm94YmlzbWlsbGFoe1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xuICB9XG5cblxuICAubnVtYmVyIHtcbiAgICBmb250LWZhbWlseTogcXVyYW5Gb250TnVtYmVyICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4iLCJoMyB7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuI2JvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWFlNGVhO1xufVxuXG4jaW1nc3ZnIHtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbiNidXR0b25sZWZ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwLjAwNTNweDtcbn1cblxuI2ZyYW1lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZmY2UwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNpdGVtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbmlvbi1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxubGkgaDMge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm94YmlzbWlsbGFoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XG59XG5cbi5udW1iZXIge1xuICBmb250LWZhbWlseTogcXVyYW5Gb250TnVtYmVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let HomePage = class HomePage {
    constructor(quranlisting, navCtrl, loadingCtrl) {
        this.quranlisting = quranlisting;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menulist = [];
        this.texttosearch = '';
        this.readquran = localStorage.getItem("qurantheme");
        this.presentloading();
    }
    ngOnInit() {
        this.quranlisting.surahlisting().subscribe(data => {
            this.menulist = data['data']['allsurah'];
        });
    }
    getItems(event) {
        const texto = event.target.value;
        this.texttosearch = texto;
    }
    gotoquran(data) {
        this.navCtrl.navigateForward(this.readquran);
        localStorage.setItem("readquran", data);
    }
    presentloading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: "Loading..",
                spinner: "bubbles",
                translucent: true,
                showBackdrop: true,
                duration: 2000,
            });
            return loader.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], HomePage);



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(menulist, texto) {
        if (texto.length === 0) {
            return menulist;
        }
        texto == texto.toLocaleLowerCase();
        return menulist.filter(menulist => {
            return menulist.title.toLowerCase().includes(texto);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//toLowerCase().indexOf(val.toLowerCase()) > -1)


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/pipes/filter.pipe.ts");



let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
        exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map