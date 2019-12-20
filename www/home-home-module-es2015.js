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

module.exports = "h3 {\n  padding: 0px 12px;\n  font-size: 26px;\n  font-family: quranFont !important;\n  text-align: right;\n  line-height: 2;\n}\n\nion-label h2 {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\nion-label {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n#body {\n  background: #eae4ea;\n}\n\n#imgsvg {\n  height: 2em;\n}\n\n#buttonleft {\n  text-align: right;\n  border-radius: 0px;\n}\n\nion-row {\n  margin-bottom: 4px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0.0053px;\n}\n\n#framebutton {\n  background: #ffce00;\n  text-align: center;\n  padding: 11px;\n  height: 47px;\n  margin: 0px;\n  color: white;\n}\n\n#itemlist {\n  padding: 0px 0px;\n}\n\nion-label p {\n  font-size: 11px;\n  font-weight: lighter;\n}\n\nli h3 {\n  display: contents;\n  text-align: right;\n  margin-right: 15px;\n  color: black;\n}\n\nli {\n  list-style-type: none;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\n.boxbismillah {\n  border-bottom: 1px solid #666;\n}\n\n.number {\n  font-family: quranFontNumber !important;\n  display: contents;\n  font-size: 40px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSw2QkFBQTtBQ0RKOztBRElFO0VBQ0UsbUJBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBRUEsa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FESUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURJRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0M7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0FDQUo7O0FES0U7RUFDRSw2QkFBQTtBQ0ZKOztBRE1FO0VBQ0UsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGgze1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LWZhbWlseTogcXVyYW5Gb250ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gIH1cblxuICBpb24tbGFiZWwgaDIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC5pdGVtLWlubmVye1xuICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlNGVhO1xuICB9XG5cbiAgI2ltZ3N2ZyB7XG4gICAgaGVpZ2h0OiAyZW07XG4gIH1cblxuICAjYnV0dG9ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gYmFja2dyb3VuZDogI2YxZGEwYjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cblxuICBpb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46IDAuMDA1M3B4O1xuICB9XG5cbiAgI2ZyYW1lYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmNlMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAjaXRlbWxpc3R7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCBwIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIH1cblxuIGxpIGgzIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5cbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiBcbiAgXG4gIC5ib3hiaXNtaWxsYWh7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XG4gIH1cblxuXG4gIC5udW1iZXIge1xuICAgIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnROdW1iZXIgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiIsImgzIHtcbiAgcGFkZGluZzogMHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlYWU0ZWE7XG59XG5cbiNpbWdzdmcge1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuI2J1dHRvbmxlZnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAuMDA1M3B4O1xufVxuXG4jZnJhbWVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZjZTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2l0ZW1saXN0IHtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuaW9uLWxhYmVsIHAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5saSBoMyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3hiaXNtaWxsYWgge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2Njtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnROdW1iZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

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