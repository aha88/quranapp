(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-read-quran-read-quran-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/read-quran/read-quran.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/read-quran/read-quran.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"gobackroot()\">\n       <ion-icon src=\"./../../../../assets/icon/backward.svg\"></ion-icon>\n       <label> Back </label>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">\n        {{indexing}} | {{SurahSatu}}\n    </ion-title>\n    \n    <ion-buttons id=\"goside\" slot=\"end\" (click)=\"gotonext()\">\n      <label> Next </label>\n       <ion-icon src=\"./../../../../assets/icon/forward.svg\"></ion-icon>\n    </ion-buttons>  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content> \n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" >\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"topmenu\">\n    <ion-col size=\"5\"  class=\"ion-text-left\">\n      <sub style=\"top: 2px;position: relative;\"> \n        {{SurahSatuT}} - ( {{batverse}} / {{count}} )\n      </sub>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <sub style=\"top: 2px;position: relative;\">\n        Juz {{juz}}\n      </sub>\n    </ion-col>\n    <ion-col style=\"text-align: right;\">\n      <sub>\n        <sub style=\"top: -6px;position: relative;\">Font Size</sub> \n        <ion-icon (click)=\"decfont()\" name=\"remove-circle-outline\"></ion-icon>\n        <ion-icon (click)=\"incfont()\" name=\"add-circle-outline\"></ion-icon>\n      </sub>\n    </ion-col>\n  </ion-row>\n<div id=\"background\">\n\n\n  <ion-card>\n    <ion-card-content style=\"overflow-y: scroll;\">\n      <div class=\"ion-text-center boxbismillah\">\n            <ion-grid id=\"surahheader\">\n              <ion-row *ngIf=\"bismillah\">\n                <ion-col size=\"12\">\n                  <h4 style=\"text-align: -webkit-center;\">\n                      <img style=\"height: 40px;width:auto;text-align: center;\" src=\"./../../assets/images/Bismillah.svg\">\n                  </h4>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </div>\n      <div style=\"height: 74vh;\"> \n            <h3 *ngFor=\"let p of serahall;\" >\n              <h3 id=\"{{p.audioID}}\" [style.font-size]=\"fontSize + 'px'\" [style.background]=\"isTrue === p.audioID  ?   bkgh3 : 'transparent' \" (click)=\"myverse(p)\" button=\"true\">\n                {{p.text}} \n                <h3 class=\"number\">&#1757;{{p.number}}</h3>\n              </h3>\n            </h3>\n      </div>\n    </ion-card-content>\n  </ion-card>  \n  <ion-row  *ngIf=\"hideout\" id=\"myDiv\">\n      <ion-icon (click)=\"closeT()\" name=\"menu\" id=\"closeT\"></ion-icon>\n    <ion-card id=\"cardbottom\">\n      <ion-card-content>\n        <p  [style.font-size]=\"fontSizeT + 'px'\" id=\"translation\">{{setfav}}. {{pageh.textEng}}</p> \n        <ion-icon (touchend)=\"endCount()\"  (click)=\"savebookmark()\" src=\"{{fav}}\"></ion-icon>\n        <ion-icon *ngIf=\"playStopbtn\" (click)=\"soundverse($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/volume-mute.svg\"></ion-icon>\n        <ion-icon *ngIf=\"playStopbtn\" (click)=\"soundstop($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/stop.svg\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>  \n  \n</div>  \n\n</ion-content>\n\n\n\n "

/***/ }),

/***/ "./src/app/page/read-quran/read-quran.module.ts":
/*!******************************************************!*\
  !*** ./src/app/page/read-quran/read-quran.module.ts ***!
  \******************************************************/
/*! exports provided: ReadQuranPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadQuranPageModule", function() { return ReadQuranPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _read_quran_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-quran.page */ "./src/app/page/read-quran/read-quran.page.ts");







var routes = [
    {
        path: '',
        component: _read_quran_page__WEBPACK_IMPORTED_MODULE_6__["ReadQuranPage"]
    }
];
var ReadQuranPageModule = /** @class */ (function () {
    function ReadQuranPageModule() {
    }
    ReadQuranPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_read_quran_page__WEBPACK_IMPORTED_MODULE_6__["ReadQuranPage"]]
        })
    ], ReadQuranPageModule);
    return ReadQuranPageModule;
}());



/***/ }),

/***/ "./src/app/page/read-quran/read-quran.page.scss":
/*!******************************************************!*\
  !*** ./src/app/page/read-quran/read-quran.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding: 0px 12px;\n  font-family: quranFont !important;\n  line-height: 2.2;\n}\n\nion-card {\n  background: white;\n  border-radius: 11px 11px 0px 0px;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\n.card-content-md h3 {\n  display: initial;\n  margin: -10px;\n  color: #000000;\n}\n\n.boxbismillah {\n  border-bottom: 2px solid #666;\n  top: 0px;\n  position: relative;\n}\n\n.number {\n  font-size: 0.6em;\n  display: contents;\n}\n\n.topmenu {\n  background: #fdffe1;\n  color: #2c6b79;\n}\n\n.fntsize {\n  float: right;\n  margin-right: 5px;\n  position: initial;\n}\n\n.titlesize {\n  margin-left: 5px;\n  position: initial;\n}\n\n#goside {\n  margin-right: 20px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n#background {\n  background: #e0f7f9;\n  padding: 4px;\n  height: 100%;\n  background-size: max-content;\n}\n\n#surahheader {\n  background: white !important;\n}\n\n#closeT {\n  margin: auto;\n}\n\n#myDiv {\n  min-height: auto;\n  max-height: 380px;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  background: #42307b;\n  color: white;\n}\n\n#cardbottom {\n  width: 100%;\n  margin-top: 0px;\n}\n\n#cardbottom ion-card-content ion-icon {\n  font-size: 32px;\n  padding: 10px;\n}\n\n#translation {\n  text-align: left;\n  font-size: 14px;\n  overflow: scroll;\n  min-height: auto;\n  max-height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL3JlYWQtcXVyYW4vcmVhZC1xdXJhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvcmVhZC1xdXJhbi9yZWFkLXF1cmFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREtFO0VBQVMsaUJBQUE7RUFBa0IsZ0NBQUE7QUNBN0I7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFSjs7QURFRTtFQUNFLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtBQ0VKOztBRENFO0VBQ0UsZUFBQTtBQ0VKOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDRUo7O0FERUU7RUFBYSw0QkFBQTtBQ0VmOztBRERFO0VBQVMsWUFBQTtBQ0tYOztBREpFO0VBQVEsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsd0JBQUE7RUFBQSxnQkFBQTtFQUFpQixXQUFBO0VBQVksbUJBQUE7RUFBb0IsWUFBQTtBQ2FoRzs7QURaRTtFQUFhLFdBQUE7RUFBYSxlQUFBO0FDaUI1Qjs7QURoQkU7RUFBdUMsZUFBQTtFQUFnQixhQUFBO0FDcUJ6RDs7QURwQkU7RUFBYyxnQkFBQTtFQUFpQixlQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsaUJBQUE7QUM0Qm5GIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9yZWFkLXF1cmFuL3JlYWQtcXVyYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaDN7XG4gICAgcGFkZGluZzogMHB4IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjI7XG4gIH1cblxuXG4gIGlvbi1jYXJke2JhY2tncm91bmQ6IHdoaXRlO2JvcmRlci1yYWRpdXM6IDExcHggMTFweCAwcHggMHB4O31cbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQtY29udGVudC1tZCBoM3tcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIG1hcmdpbjogLTEwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG5cbiAgLmJveGJpc21pbGxhaHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcbiAgICB0b3A6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gIC5udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuICAudG9wbWVudXtcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZmUxO1xuICAgIGNvbG9yOiAjMmM2Yjc5O1xuXG4gIH1cbiAgLmZudHNpemUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICB9XG4gIC50aXRsZXNpemUge1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgfVxuXG4gICNnb3NpZGUge1xuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICNiYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNlMGY3Zjk7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IG1heC1jb250ZW50O1xuXG4gIH1cblxuICAjc3VyYWhoZWFkZXJ7YmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDt9XG4gICNjbG9zZVQge21hcmdpbjogYXV0bzt9XG4gICNteURpdiB7bWluLWhlaWdodDogYXV0bzsgbWF4LWhlaWdodDogMzgwcHg7IHBvc2l0aW9uOiBzdGlja3k7Ym90dG9tOiAwcHg7YmFja2dyb3VuZDogIzQyMzA3Yjtjb2xvcjogd2hpdGU7fVxuICAjY2FyZGJvdHRvbSB7d2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDBweDt9XG4gICNjYXJkYm90dG9tIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge2ZvbnQtc2l6ZTogMzJweDtwYWRkaW5nOiAxMHB4O31cbiAgI3RyYW5zbGF0aW9uIHt0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtc2l6ZToxNHB4O292ZXJmbG93OnNjcm9sbCA7bWluLWhlaWdodDogYXV0bzsgbWF4LWhlaWdodDogMjMwcHg7fVxuXG4iLCJoMyB7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xuICBmb250LWZhbWlseTogcXVyYW5Gb250ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyLjI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDExcHggMTFweCAwcHggMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWNvbnRlbnQtbWQgaDMge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBtYXJnaW46IC0xMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJveGJpc21pbGxhaCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubnVtYmVyIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi50b3BtZW51IHtcbiAgYmFja2dyb3VuZDogI2ZkZmZlMTtcbiAgY29sb3I6ICMyYzZiNzk7XG59XG5cbi5mbnRzaXplIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi50aXRsZXNpemUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuI2dvc2lkZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2UwZjdmOTtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogbWF4LWNvbnRlbnQ7XG59XG5cbiNzdXJhaGhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbiNjbG9zZVQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNteURpdiB7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogIzQyMzA3YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY2FyZGJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbiNjYXJkYm90dG9tIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN0cmFuc2xhdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/read-quran/read-quran.page.ts":
/*!****************************************************!*\
  !*** ./src/app/page/read-quran/read-quran.page.ts ***!
  \****************************************************/
/*! exports provided: ReadQuranPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadQuranPage", function() { return ReadQuranPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/audio.service */ "./src/app/service/audio.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ReadQuranPage = /** @class */ (function () {
    function ReadQuranPage(dataquran, dataqurantranslate, navCtrl, loadingCtrl, audioTr, http) {
        this.dataquran = dataquran;
        this.dataqurantranslate = dataqurantranslate;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.audioTr = audioTr;
        this.http = http;
        this.serahall = [];
        this.serahallt = [];
        this.hideout = false;
        this.bismillah = true;
        this.fontSize = 21;
        this.fontSizeT = 16;
        this.bkgh3 = "#e0ffff";
        this.url = "http://apidata.scallyresources.com/audio/";
        this.speaker = localStorage.getItem('speaker') + "/";
        this.playStopbtn = true;
        this.presentloading();
    }
    ReadQuranPage.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.batverse = parseInt(localStorage.getItem("bookmark"));
            //complete()  signify that the refreshing has completed and to close the refresher
            event.target.complete();
        }, 2000);
    };
    ReadQuranPage.prototype.ngOnInit = function () {
        var _this = this;
        var quranid = localStorage.getItem('readquran');
        this.dataquran.surah(quranid).subscribe(function (data) {
            _this.SurahSatu = data["data"]["name"];
            _this.indexing = data["data"]["index"];
            _this.count = data["data"]["count"];
            _this.serahall = data["data"]["verse"];
            _this.juz = data["data"]["juz"][0]['index'];
        });
        this.dataqurantranslate.suraht(quranid).subscribe(function (datat) {
            _this.SurahSatuT = datat["data"]["name"];
            _this.serahallt = datat["data"]["verse"];
        });
        if (localStorage.getItem('readquran') == "1" || localStorage.getItem('readquran') == "9") {
            this.bismillah = false;
        }
        ;
        this.http.get('http://api.aladhan.com/v1/methods').subscribe(function (data) {
        }, function (error) {
            _this.playStopbtn = false;
        });
        if (parseInt(localStorage.getItem('bookmarkSurah')) == parseInt(localStorage.getItem('readquran'))) {
            this.batverse = parseInt(localStorage.getItem("bookmark"));
            this.isTrue = "v" + localStorage.getItem('bookmark');
        }
    };
    ReadQuranPage.prototype.incfont = function () {
        this.fontSize = this.fontSize + 1.1;
        this.fontSizeT = this.fontSizeT + 1.1;
    };
    ReadQuranPage.prototype.decfont = function () {
        this.fontSize = this.fontSize - 1.1;
        this.fontSizeT = this.fontSizeT - 1.1;
    };
    ReadQuranPage.prototype.closeT = function () {
        this.hideout = false;
    };
    ReadQuranPage.prototype.gotonext = function () {
        this.total = parseInt(localStorage.getItem('readquran'));
        this.tot = 1;
        this.all = this.tot + this.total;
        localStorage.setItem('readquran', this.all);
        window.location.reload();
        this.presentloading();
    };
    ReadQuranPage.prototype.myverse = function (p) {
        console.log(event);
        this.hideout = true;
        this.pageh = this.serahallt[p.verse - 1];
        this.isTrue = p.audioID;
        this.isSurah = this.indexing;
        this.setfav = p.verse;
        this.audio = p['audioID'];
        this.dataaudio = p['url'];
        if (parseInt(localStorage.getItem("bookmark")) == p.verse && parseInt(localStorage.getItem("bookmarkSurah")) == this.indexing) {
            this.fav = "./../../../../assets/icon/bookmark.svg";
        }
        else {
            this.fav = "./../../../../assets/icon/openbook.svg";
        }
    };
    ReadQuranPage.prototype.savebookmark = function (p) {
        localStorage.setItem('bookmark', this.setfav);
        localStorage.setItem('bookmarkSurah', this.indexing);
    };
    ReadQuranPage.prototype.endCount = function () {
        this.batverse = parseInt(localStorage.getItem("bookmark"));
        this.fav = "./../../../../assets/icon/bookmark.svg";
    };
    ReadQuranPage.prototype.gobackroot = function () {
        this.presentloading();
        this.navCtrl.navigateBack('tabs/home');
    };
    ReadQuranPage.prototype.soundverse = function ($event) {
        this.urlaudio = this.url + this.speaker + this.dataaudio;
        switch (this.audio) {
            //baseon audio id
            case this.audio: {
                this.audioTr.preload(this.audio, this.urlaudio);
                this.audioTr.play(this.audio);
                break;
            }
        }
    };
    ReadQuranPage.prototype.soundstop = function () {
        switch (this.audio) {
            //baseon audio id
            case this.audio: {
                this.audioTr.stop(this.audio);
                break;
            }
        }
    };
    ReadQuranPage.prototype.presentloading = function () {
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
    ReadQuranPage.ctorParameters = function () { return [
        { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
        { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _service_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    ReadQuranPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-read-quran',
            template: __webpack_require__(/*! raw-loader!./read-quran.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/read-quran/read-quran.page.html"),
            styles: [__webpack_require__(/*! ./read-quran.page.scss */ "./src/app/page/read-quran/read-quran.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
            _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _service_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ReadQuranPage);
    return ReadQuranPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-read-quran-read-quran-module-es5.js.map