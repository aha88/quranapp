(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-audio-audio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/audio/audio.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/audio/audio.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Audio Reciter\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  \n  <ion-grid>\n    \n    <div>\n      <ion-row *ngFor=\"let po of menulist \">\n        <ion-col size=\"9\">\n          <ion-item full id=\"itemlist\">\n\n            <ion-col size=\"12\">\n              <ion-label>\n                {{po.reciter_name}} \n              </ion-label>\n            </ion-col>\n\n          </ion-item>\n        </ion-col>\n        <ion-col (click)=\"speaker(po)\" size=\"3\" id=\"framebutton\" >\n            <ion-label  id=\"buttonleft\">\n                 SELECT  \n            </ion-label>\n          </ion-col>\n      </ion-row>\n    </div>\n \n</ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/page/audio/audio.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/audio/audio.module.ts ***!
  \********************************************/
/*! exports provided: AudioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPageModule", function() { return AudioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio.page */ "./src/app/page/audio/audio.page.ts");







const routes = [
    {
        path: '',
        component: _audio_page__WEBPACK_IMPORTED_MODULE_6__["AudioPage"]
    }
];
let AudioPageModule = class AudioPageModule {
};
AudioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_audio_page__WEBPACK_IMPORTED_MODULE_6__["AudioPage"]]
    })
], AudioPageModule);



/***/ }),

/***/ "./src/app/page/audio/audio.page.scss":
/*!********************************************!*\
  !*** ./src/app/page/audio/audio.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding: 0px 12px;\n  font-size: 26px;\n  font-family: quranFont !important;\n  text-align: right;\n  line-height: 2;\n}\n\nion-label h2 {\n  font-size: 24px;\n  font-weight: bolder;\n}\n\nion-label {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n#buttonleft {\n  text-align: right;\n  border-radius: 0px;\n}\n\nion-row {\n  margin-bottom: 4px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0.0053px;\n}\n\n#framebutton {\n  background: #ffce00;\n  text-align: center;\n  padding: 11px;\n  height: 47px;\n  margin: 0px;\n  color: white;\n}\n\n#itemlist {\n  padding: 0px 0px;\n}\n\nion-label p {\n  font-size: 11px;\n  font-weight: lighter;\n}\n\nli h3 {\n  display: contents;\n  text-align: right;\n  margin-right: 15px;\n  color: black;\n}\n\nli {\n  list-style-type: none;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\nion-toolbar {\n  background: #0cd1e8 !important;\n}\n\n.boxbismillah {\n  border-bottom: 1px solid #666;\n}\n\n.number {\n  font-family: quranFontNumber !important;\n  display: contents;\n  font-size: 40px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL2F1ZGlvL2F1ZGlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9hdWRpby9hdWRpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLDZCQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUVBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtBQ0ZKOztBRElFO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdDO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNBSjs7QURHRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQWEsOEJBQUE7QUNDZjs7QURBRTtFQUNFLDZCQUFBO0FDR0o7O0FEQ0U7RUFDRSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2F1ZGlvL2F1ZGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGgze1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LWZhbWlseTogcXVyYW5Gb250ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gIH1cblxuICBpb24tbGFiZWwgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC5pdGVtLWlubmVye1xuICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjYnV0dG9ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gYmFja2dyb3VuZDogI2YxZGEwYjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cblxuICBpb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46IDAuMDA1M3B4O1xuICB9XG5cbiAgI2ZyYW1lYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmNlMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAjaXRlbWxpc3R7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCBwIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIH1cblxuIGxpIGgzIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5cbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLXRvb2xiYXJ7IGJhY2tncm91bmQ6ICMwY2QxZTggIWltcG9ydGFudDsgfVxuICAuYm94YmlzbWlsbGFoe1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xuICB9XG5cblxuICAubnVtYmVyIHtcbiAgICBmb250LWZhbWlseTogcXVyYW5Gb250TnVtYmVyICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4iLCJoMyB7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuI2J1dHRvbmxlZnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAuMDA1M3B4O1xufVxuXG4jZnJhbWVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZjZTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDExcHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2l0ZW1saXN0IHtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuaW9uLWxhYmVsIHAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5saSBoMyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzBjZDFlOCAhaW1wb3J0YW50O1xufVxuXG4uYm94YmlzbWlsbGFoIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XG59XG5cbi5udW1iZXIge1xuICBmb250LWZhbWlseTogcXVyYW5Gb250TnVtYmVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/audio/audio.page.ts":
/*!******************************************!*\
  !*** ./src/app/page/audio/audio.page.ts ***!
  \******************************************/
/*! exports provided: AudioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPage", function() { return AudioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AudioPage = class AudioPage {
    constructor(quranlisting, loadingCtrl) {
        this.quranlisting = quranlisting;
        this.loadingCtrl = loadingCtrl;
        this.texttosearch = '';
        this.presentloading();
    }
    ngOnInit() {
        this.quranlisting.audiolisting().subscribe(data => {
            this.menulist = data['data']['audio'];
        });
    }
    speaker(po) {
        localStorage.setItem('speaker', po.reciter_name.replace(/\s/g, ""));
        console.log(po);
        this.presentloading();
        window.location.reload();
    }
    getItems(event) {
        const texto = event.target.value;
        this.texttosearch = texto;
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
AudioPage.ctorParameters = () => [
    { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
AudioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio',
        template: __webpack_require__(/*! raw-loader!./audio.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/audio/audio.page.html"),
        styles: [__webpack_require__(/*! ./audio.page.scss */ "./src/app/page/audio/audio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], AudioPage);



/***/ })

}]);
//# sourceMappingURL=page-audio-audio-module-es2015.js.map