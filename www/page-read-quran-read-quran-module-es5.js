(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-read-quran-read-quran-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/read-quran/read-quran.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/read-quran/read-quran.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"gobackroot()\">\n       <ion-icon src=\"./../../../../assets/icon/backward.svg\"></ion-icon>\n       <label> Back </label>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">\n        {{indexing}} | {{SurahSatu}}\n    </ion-title>\n    \n    <ion-buttons id=\"goside\" slot=\"end\" (click)=\"gotonext()\">\n      <label> Next </label>\n       <ion-icon src=\"./../../../../assets/icon/forward.svg\"></ion-icon>\n    </ion-buttons>  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content> \n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" >\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n<div class=\"topmenu\">\n    <sub class=\"titlesize\"> \n    {{SurahSatuT}} - ( {{batverse}} / {{count}} )\n  </sub>\n  <sub class=\"fntsize\">\n      <sub style=\"top: -6px;position: relative;\">Font Size</sub> \n      <ion-icon (click)=\"decfont()\" name=\"remove-circle-outline\"></ion-icon>\n      <ion-icon (click)=\"incfont()\" name=\"add-circle-outline\"></ion-icon>\n  </sub>\n</div>\n<div id=\"background\">\n\n\n  <ion-card>\n    <ion-card-content style=\"overflow-y: scroll;\">\n      <div class=\"ion-text-center boxbismillah\">\n            <ion-grid id=\"surahheader\">\n              <ion-row *ngIf=\"bismillah\">\n                <ion-col size=\"12\">\n                  <h4 style=\"text-align: -webkit-center;\">\n                      <img style=\"height: 40px;width:auto;text-align: center;\" src=\"./../../assets/images/Bismillah.svg\">\n                  </h4>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </div>\n      <div style=\"height: 74vh;\"> \n            <h3 *ngFor=\"let p of serahall;\" >\n              <h3 id=\"{{p.audioID}}\" [style.font-size]=\"fontSize + 'px'\" [style.background]=\"isTrue === p.audioID  ?   bkgh3 : 'transparent' \" (click)=\"myverse(p)\" button=\"true\">\n                {{p.text}} \n                <h3 class=\"number\">&#1757;{{p.number}}</h3>\n              </h3>\n            </h3>\n      </div>\n    </ion-card-content>\n  </ion-card>  \n  <ion-row  *ngIf=\"hideout\" id=\"myDiv\">\n      <ion-icon (click)=\"closeT()\" name=\"menu\" id=\"closeT\"></ion-icon>\n    <ion-card id=\"cardbottom\">\n      <ion-card-content>\n        <p  [style.font-size]=\"fontSizeT + 'px'\" id=\"translation\">{{setfav}}. {{pageh.textEng}}</p> \n        <ion-icon (touchend)=\"endCount()\"  (click)=\"savebookmark()\" src=\"{{fav}}\"></ion-icon>\n        <ion-icon *ngIf=\"playStopbtn\" (click)=\"soundverse($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/volume-mute.svg\"></ion-icon>\n        <ion-icon *ngIf=\"playStopbtn\" (click)=\"soundstop($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/stop.svg\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>  \n  \n</div>  \n\n</ion-content>\n\n\n\n "

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

module.exports = "h3 {\n  padding: 0px 12px;\n  font-family: quranFont !important;\n  line-height: 2.2;\n}\n\nion-card {\n  background: white;\n  border-radius: 11px 11px 0px 0px;\n}\n\nion-card-content {\n  text-align: right !important;\n  width: 100%;\n}\n\n.card-content-md h3 {\n  display: initial;\n  margin: -10px;\n  color: #000000;\n}\n\n.boxbismillah {\n  border-bottom: 2px solid #666;\n  top: 0px;\n  position: relative;\n}\n\n.number {\n  font-size: 0.6em;\n  display: contents;\n}\n\n.topmenu {\n  background: #fdffe1;\n  color: #2c6b79;\n}\n\n.fntsize {\n  float: right;\n  margin-right: 5px;\n  position: initial;\n}\n\n.titlesize {\n  margin-left: 5px;\n  position: initial;\n}\n\n#goside {\n  margin-right: 20px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n#background {\n  background: #e0f7f9;\n  padding: 4px;\n  height: 100%;\n  background-size: max-content;\n}\n\n#surahheader {\n  background: white !important;\n}\n\n#closeT {\n  margin: auto;\n}\n\n#myDiv {\n  min-height: auto;\n  max-height: 380px;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  background: #42307b;\n  color: white;\n}\n\n#cardbottom {\n  width: 100%;\n  margin-top: 0px;\n}\n\n#cardbottom ion-card-content ion-icon {\n  font-size: 32px;\n  padding: 10px;\n}\n\n#translation {\n  text-align: left;\n  font-size: 14px;\n  overflow: scroll;\n  min-height: auto;\n  max-height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWFkLXF1cmFuL0M6XFxVc2Vyc1xcYWl6YXRcXERvY3VtZW50c1xcUXVyYW5Ib3VyXFwyLjIvc3JjXFxhcHBcXHBhZ2VcXHJlYWQtcXVyYW5cXHJlYWQtcXVyYW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3JlYWQtcXVyYW4vcmVhZC1xdXJhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLRTtFQUFTLGlCQUFBO0VBQWtCLGdDQUFBO0FDQTdCOztBRENFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRUo7O0FERUU7RUFDRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENFO0VBQ0Usa0JBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0VKOztBREVFO0VBQWEsNEJBQUE7QUNFZjs7QURERTtFQUFTLFlBQUE7QUNLWDs7QURKRTtFQUFRLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHdCQUFBO0VBQUEsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7QUNhaEc7O0FEWkU7RUFBYSxXQUFBO0VBQWEsZUFBQTtBQ2lCNUI7O0FEaEJFO0VBQXVDLGVBQUE7RUFBZ0IsYUFBQTtBQ3FCekQ7O0FEcEJFO0VBQWMsZ0JBQUE7RUFBaUIsZUFBQTtFQUFlLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGlCQUFBO0FDNEJuRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcmVhZC1xdXJhbi9yZWFkLXF1cmFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGgze1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMi4yO1xuICB9XG5cblxuICBpb24tY2FyZHtiYWNrZ3JvdW5kOiB3aGl0ZTtib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMHB4IDBweDt9XG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkLWNvbnRlbnQtbWQgaDN7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICBtYXJnaW46IC0xMHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuXG4gIC5ib3hiaXNtaWxsYWh7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cblxuICAubnVtYmVyIHtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cbiAgLnRvcG1lbnV7XG4gICAgYmFja2dyb3VuZDogI2ZkZmZlMTtcbiAgICBjb2xvcjogIzJjNmI3OTtcblxuICB9XG4gIC5mbnRzaXplIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgfVxuICAudGl0bGVzaXplIHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cblxuICAjZ29zaWRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAjYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBmN2Y5O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBtYXgtY29udGVudDtcblxuICB9XG5cbiAgI3N1cmFoaGVhZGVye2JhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7fVxuICAjY2xvc2VUIHttYXJnaW46IGF1dG87fVxuICAjbXlEaXYge21pbi1oZWlnaHQ6IGF1dG87IG1heC1oZWlnaHQ6IDM4MHB4OyBwb3NpdGlvbjogc3RpY2t5O2JvdHRvbTogMHB4O2JhY2tncm91bmQ6ICM0MjMwN2I7Y29sb3I6IHdoaXRlO31cbiAgI2NhcmRib3R0b20ge3dpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiAwcHg7fVxuICAjY2FyZGJvdHRvbSBpb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtmb250LXNpemU6IDMycHg7cGFkZGluZzogMTBweDt9XG4gICN0cmFuc2xhdGlvbiB7dGV4dC1hbGlnbjogbGVmdDtmb250LXNpemU6MTRweDtvdmVyZmxvdzpzY3JvbGwgO21pbi1oZWlnaHQ6IGF1dG87IG1heC1oZWlnaHQ6IDIzMHB4O31cblxuIiwiaDMge1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMi4yO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMHB4IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1jb250ZW50LW1kIGgzIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbiAgbWFyZ2luOiAtMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ib3hiaXNtaWxsYWgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4udG9wbWVudSB7XG4gIGJhY2tncm91bmQ6ICNmZGZmZTE7XG4gIGNvbG9yOiAjMmM2Yjc5O1xufVxuXG4uZm50c2l6ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4udGl0bGVzaXplIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbiNnb3NpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNlMGY3Zjk7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IG1heC1jb250ZW50O1xufVxuXG4jc3VyYWhoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4jY2xvc2VUIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jbXlEaXYge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM0MjMwN2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NhcmRib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4jY2FyZGJvdHRvbSBpb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jdHJhbnNsYXRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDIzMHB4O1xufSJdfQ== */"

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