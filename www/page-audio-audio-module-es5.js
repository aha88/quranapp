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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio.page */ "./src/app/page/audio/audio.page.ts");







var routes = [
    {
        path: '',
        component: _audio_page__WEBPACK_IMPORTED_MODULE_6__["AudioPage"]
    }
];
var AudioPageModule = /** @class */ (function () {
    function AudioPageModule() {
    }
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
    return AudioPageModule;
}());



/***/ }),

/***/ "./src/app/page/audio/audio.page.scss":
/*!********************************************!*\
  !*** ./src/app/page/audio/audio.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding: 0px 12px;\n  font-size: 26px;\n  font-family: quranFont !important;\n  text-align: right;\n  line-height: 2;\n}\n\nion-label h2 {\n  font-size: 24px;\n  font-weight: bolder;\n}\n\nion-label {\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n#buttonleft {\n  text-align: right;\n  border-radius: 0px;\n}\n\nion-row {\n  margin-bottom: 4px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0.0053px;\n}\n\n#framebutton {\n  background: #ffce00;\n  text-align: center;\n  padding: 11px;\n  height: 47px;\n  margin: 0px;\n  color: white;\n}\n\n#itemlist {\n  padding: 0px 0px;\n}\n\nion-label p {\n  font-size: 11px;\n  font-weight: lighter;\n}\n\nli h3 {\n  display: contents;\n  text-align: right;\n  margin-right: 15px;\n  color: black;\n}\n\nli {\n  list-style-type: none;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\nion-toolbar {\n  background: #0cd1e8 !important;\n}\n\n.boxbismillah {\n  border-bottom: 1px solid #666;\n}\n\n.number {\n  font-family: quranFontNumber !important;\n  display: contents;\n  font-size: 40px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9hdWRpby9DOlxcVXNlcnNcXGFpemF0XFxEb2N1bWVudHNcXFF1cmFuSG91clxcMi4yL3NyY1xcYXBwXFxwYWdlXFxhdWRpb1xcYXVkaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL2F1ZGlvL2F1ZGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsNkJBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBRUEsa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FESUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURJRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0M7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFBYSw4QkFBQTtBQ0NmOztBREFFO0VBQ0UsNkJBQUE7QUNHSjs7QURDRTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYXVkaW8vYXVkaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaDN7XG4gICAgcGFkZGluZzogMHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgfVxuXG4gIGlvbi1sYWJlbCBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgLml0ZW0taW5uZXJ7XG4gICAgcGFkZGluZy1yaWdodDowcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICNidXR0b25sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjFkYTBiO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBpb24tY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1hcmdpbjogMC4wMDUzcHg7XG4gIH1cblxuICAjZnJhbWVidXR0b257XG4gICAgYmFja2dyb3VuZDogI2ZmY2UwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNpdGVtbGlzdHtcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuXG4gbGkgaDMge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpb24tdG9vbGJhcnsgYmFja2dyb3VuZDogIzBjZDFlOCAhaW1wb3J0YW50OyB9XG4gIC5ib3hiaXNtaWxsYWh7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XG4gIH1cblxuXG4gIC5udW1iZXIge1xuICAgIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnROdW1iZXIgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiIsImgzIHtcbiAgcGFkZGluZzogMHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jYnV0dG9ubGVmdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMC4wMDUzcHg7XG59XG5cbiNmcmFtZWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmNlMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jaXRlbWxpc3Qge1xuICBwYWRkaW5nOiAwcHggMHB4O1xufVxuXG5pb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmxpIGgzIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMGNkMWU4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hiaXNtaWxsYWgge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2Njtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnROdW1iZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AudioPage = /** @class */ (function () {
    function AudioPage(quranlisting, loadingCtrl) {
        this.quranlisting = quranlisting;
        this.loadingCtrl = loadingCtrl;
        this.texttosearch = '';
        this.presentloading();
    }
    AudioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.quranlisting.audiolisting().subscribe(function (data) {
            _this.menulist = data['data']['audio'];
        });
    };
    AudioPage.prototype.speaker = function (po) {
        localStorage.setItem('speaker', po.reciter_name.replace(/\s/g, ""));
        console.log(po);
        this.presentloading();
        window.location.reload();
    };
    AudioPage.prototype.getItems = function (event) {
        var texto = event.target.value;
        this.texttosearch = texto;
    };
    AudioPage.prototype.presentloading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..",
                            spinner: "bubbles",
                            translucent: true,
                            showBackdrop: true,
                            duration: 2000,
                        })];
                    case 1:
                        loader = _a.sent();
                        return [2 /*return*/, loader.present()];
                }
            });
        });
    };
    AudioPage.ctorParameters = function () { return [
        { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    AudioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(/*! raw-loader!./audio.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/audio/audio.page.html"),
            styles: [__webpack_require__(/*! ./audio.page.scss */ "./src/app/page/audio/audio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], AudioPage);
    return AudioPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-audio-audio-module-es5.js.map