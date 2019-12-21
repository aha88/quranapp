(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-read-quran2-read-quran2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/read-quran2/read-quran2.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/read-quran2/read-quran2.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\" (click)=\"gobackroot()\">\n         <ion-icon src=\"./../../../../assets/icon/backward.svg\"></ion-icon>\n         <label> Back </label>\n      </ion-buttons>\n  \n      <ion-title class=\"ion-text-center\">\n          {{indexing}} | {{SurahSatu}}\n      </ion-title>\n      \n      <ion-buttons id=\"goside\" slot=\"end\" (click)=\"gotonext()\">\n        <label> Next </label>\n         <ion-icon src=\"./../../../../assets/icon/forward.svg\"></ion-icon>\n      </ion-buttons>  \n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content style=\"--background:fffefa;  \">   \n  \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" >\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row id=\"menusticky\">\n    <ion-col size=\"5\"  class=\"ion-text-left\">\n      <sub style=\"top: -6px;position: relative;\"> \n        {{SurahSatuT}} - ( {{batverse}} / {{count}} )\n      </sub>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <sub style=\"top: -6px;position: relative;\">\n        Juz {{juz}}\n      </sub>\n    </ion-col>\n    <ion-col>\n      <sub>\n        <sub style=\"top: -6px;position: relative;\">Font Size</sub> \n        <ion-icon (click)=\"decfont()\" name=\"remove-circle-outline\"></ion-icon>\n        <ion-icon (click)=\"incfont()\" name=\"add-circle-outline\"></ion-icon>\n      </sub>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-text-center boxbismillah\">\n    <ion-grid id=\"surahheader\" *ngIf=\"bismillah\">\n      <ion-row >\n        <ion-col size=\"12\">\n          <h4 style=\"text-align: -webkit-center;\">\n              <img style=\"margin-top:30px;height: 40px;width:auto;text-align: center;\" src=\"./../../assets/images/Bismillah.svg\">\n          </h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n    \n  <div *ngFor=\"let p of serahall;\" style=\"padding: 22px 0px;border-top: 1px solid #e1e1e1;\n    border-bottom: 1px solid #e1e1e1;\" [style.background]=\"isTrue === p.audioID  ?   bkgh3 : 'transparent' \">\n      <ion-row (click)=\"myverse(p)\">\n        <ion-col size=\"12\" class=\"ion-text-left fontnumber\">\n            &#1757;{{p.number}}\n        </ion-col>\n        <ion-col id=\"{{p.audioID}}\" [style.font-size]=\"fontSize + 'px'\"  button=\"true\">\n          {{p.text}}                     \n        </ion-col>\n      </ion-row>\n  </div>\n        \n  <ion-row  *ngIf=\"hideout\" id=\"myDiv\">\n    <ion-icon (click)=\"closeT()\" name=\"menu\" id=\"closeT\"></ion-icon>\n    <ion-row id=\"cardbottom\">\n      <ion-col>\n        <p  [style.font-size]=\"fontSizeT + 'px'\" id=\"translation\">{{setfav}}. {{pageh.textEng}}</p> \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-icon class=\"classicon\" (touchend)=\"endCount()\"  (click)=\"savebookmark()\" src=\"{{fav}}\"></ion-icon>\n        <ion-icon class=\"classicon\" *ngIf=\"playStopbtn\" (click)=\"soundverse($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/volume-mute.svg\"></ion-icon>\n        <ion-icon class=\"classicon\" *ngIf=\"playStopbtn\" (click)=\"soundstop($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/stop.svg\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-row>  \n    \n  </ion-content>\n  \n  \n  \n   "

/***/ }),

/***/ "./src/app/page/read-quran2/read-quran2.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/read-quran2/read-quran2.module.ts ***!
  \********************************************************/
/*! exports provided: ReadQuran2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadQuran2PageModule", function() { return ReadQuran2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _read_quran2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-quran2.page */ "./src/app/page/read-quran2/read-quran2.page.ts");







var routes = [
    {
        path: '',
        component: _read_quran2_page__WEBPACK_IMPORTED_MODULE_6__["ReadQuran2Page"]
    }
];
var ReadQuran2PageModule = /** @class */ (function () {
    function ReadQuran2PageModule() {
    }
    ReadQuran2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_read_quran2_page__WEBPACK_IMPORTED_MODULE_6__["ReadQuran2Page"]]
        })
    ], ReadQuran2PageModule);
    return ReadQuran2PageModule;
}());



/***/ }),

/***/ "./src/app/page/read-quran2/read-quran2.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/read-quran2/read-quran2.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 0px 12px;\n  font-family: quranFont !important;\n  line-height: 2.2;\n  text-align: right;\n}\n\n.boxbismillah {\n  border-bottom: 2px solid #666;\n  top: 0px;\n  position: relative;\n}\n\n#translation {\n  text-align: left;\n}\n\n.classicon {\n  font-size: 30px;\n  margin-right: 15px;\n}\n\n#menusticky {\n  position: fixed;\n  z-index: 20;\n  background: aliceblue;\n  width: 100%;\n}\n\n.number {\n  font-size: 0.6em;\n  display: contents;\n}\n\n.topmenu {\n  background: #fdffe1;\n  color: #2c6b79;\n}\n\n.fntsize {\n  float: right;\n  margin-right: 5px;\n  position: initial;\n}\n\n.titlesize {\n  margin-left: 5px;\n  position: initial;\n}\n\n#goside {\n  margin-right: 20px;\n}\n\n.fontnumber {\n  font-size: 1.7em;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n#background {\n  background: #e0f7f9;\n  padding: 4px;\n  height: 100%;\n  background-size: max-content;\n}\n\n#surahheader {\n  background: white !important;\n}\n\n#closeT {\n  margin: auto;\n}\n\n#myDiv {\n  min-height: auto;\n  max-height: 380px;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  background: #f1e4e4;\n  color: #030303;\n}\n\n#cardbottom {\n  width: 100%;\n  margin-top: 0px;\n}\n\n#cardbottom ion-card-content ion-icon {\n  font-size: 32px;\n  padding: 10px;\n}\n\nion-content {\n  --background:fffefa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL3JlYWQtcXVyYW4yL3JlYWQtcXVyYW4yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9yZWFkLXF1cmFuMi9yZWFkLXF1cmFuMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0UsNkJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLGdCQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREdFO0VBQWEsNEJBQUE7QUNDZjs7QURBRTtFQUFTLFlBQUE7QUNJWDs7QURIRTtFQUFRLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHdCQUFBO0VBQUEsZ0JBQUE7RUFBaUIsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLGNBQUE7QUNZaEc7O0FEWEU7RUFBYSxXQUFBO0VBQWEsZUFBQTtBQ2dCNUI7O0FEZkU7RUFBdUMsZUFBQTtFQUFnQixhQUFBO0FDb0J6RDs7QURsQkU7RUFDRSxtQkFBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcmVhZC1xdXJhbjIvcmVhZC1xdXJhbjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICBmb250LWZhbWlseTogcXVyYW5Gb250ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5ib3hiaXNtaWxsYWh7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgI3RyYW5zbGF0aW9uIHsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5jbGFzc2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAjbWVudXN0aWNreSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm51bWJlciB7XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG4gIC50b3BtZW51e1xuICAgIGJhY2tncm91bmQ6ICNmZGZmZTE7XG4gICAgY29sb3I6ICMyYzZiNzk7XG5cbiAgfVxuICAuZm50c2l6ZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cbiAgLnRpdGxlc2l6ZSB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICB9XG5cbiAgI2dvc2lkZSB7XG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gIH1cblxuICAuZm9udG51bWJlciB7XG4gICAgZm9udC1zaXplOiAxLjdlbTsgIFxuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICNiYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNlMGY3Zjk7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IG1heC1jb250ZW50O1xuXG4gIH1cblxuICAjc3VyYWhoZWFkZXJ7YmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDt9XG4gICNjbG9zZVQge21hcmdpbjogYXV0bzt9XG4gICNteURpdiB7bWluLWhlaWdodDogYXV0bzsgbWF4LWhlaWdodDogMzgwcHg7IHBvc2l0aW9uOiBzdGlja3k7Ym90dG9tOiAwcHg7YmFja2dyb3VuZDogI2YxZTRlNDtjb2xvcjogcmdiKDMsIDMsIDMpO31cbiAgI2NhcmRib3R0b20ge3dpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiAwcHg7fVxuICAjY2FyZGJvdHRvbSBpb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtmb250LXNpemU6IDMycHg7cGFkZGluZzogMTBweDt9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDpmZmZlZmE7XG4gIH0iLCJpb24tY29sIHtcbiAgcGFkZGluZzogMHB4IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ib3hiaXNtaWxsYWgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3RyYW5zbGF0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNsYXNzaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4jbWVudXN0aWNreSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5udW1iZXIge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnRvcG1lbnUge1xuICBiYWNrZ3JvdW5kOiAjZmRmZmUxO1xuICBjb2xvcjogIzJjNmI3OTtcbn1cblxuLmZudHNpemUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLnRpdGxlc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4jZ29zaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZm9udG51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNlMGY3Zjk7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IG1heC1jb250ZW50O1xufVxuXG4jc3VyYWhoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4jY2xvc2VUIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jbXlEaXYge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWU0ZTQ7XG4gIGNvbG9yOiAjMDMwMzAzO1xufVxuXG4jY2FyZGJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbiNjYXJkYm90dG9tIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOmZmZmVmYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/read-quran2/read-quran2.page.ts":
/*!******************************************************!*\
  !*** ./src/app/page/read-quran2/read-quran2.page.ts ***!
  \******************************************************/
/*! exports provided: ReadQuran2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadQuran2Page", function() { return ReadQuran2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/audio.service */ "./src/app/service/audio.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ReadQuran2Page = /** @class */ (function () {
    function ReadQuran2Page(dataquran, dataqurantranslate, navCtrl, loadingCtrl, audioTr, http) {
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
    ReadQuran2Page.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.batverse = parseInt(localStorage.getItem("bookmark"));
            //complete()  signify that the refreshing has completed and to close the refresher
            event.target.complete();
        }, 2000);
    };
    ReadQuran2Page.prototype.ngOnInit = function () {
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
        this.http.get('https://geoip-db.com/json/').subscribe(function (data) {
        }, function (error) {
            _this.playStopbtn = false;
        });
        if (parseInt(localStorage.getItem('bookmarkSurah')) == parseInt(localStorage.getItem('readquran'))) {
            this.batverse = parseInt(localStorage.getItem("bookmark"));
            this.isTrue = "v" + localStorage.getItem('bookmark');
        }
    };
    ReadQuran2Page.prototype.incfont = function () {
        this.fontSize = this.fontSize + 1.1;
        this.fontSizeT = this.fontSizeT + 1.1;
    };
    ReadQuran2Page.prototype.decfont = function () {
        this.fontSize = this.fontSize - 1.1;
        this.fontSizeT = this.fontSizeT - 1.1;
    };
    ReadQuran2Page.prototype.closeT = function () {
        this.hideout = false;
    };
    ReadQuran2Page.prototype.gotonext = function () {
        this.total = parseInt(localStorage.getItem('readquran'));
        this.tot = 1;
        this.all = this.tot + this.total;
        localStorage.setItem('readquran', this.all);
        window.location.reload();
        this.presentloading();
    };
    ReadQuran2Page.prototype.myverse = function (p) {
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
    ReadQuran2Page.prototype.savebookmark = function (p) {
        localStorage.setItem('bookmark', this.setfav);
        localStorage.setItem('bookmarkSurah', this.indexing);
        this.fav = "./../../../../assets/icon/bookmark.svg";
    };
    ReadQuran2Page.prototype.endCount = function () {
        this.batverse = parseInt(localStorage.getItem("bookmark"));
        this.fav = "./../../../../assets/icon/bookmark.svg";
    };
    ReadQuran2Page.prototype.gobackroot = function () {
        this.presentloading();
        this.navCtrl.navigateBack('tabs/home');
    };
    ReadQuran2Page.prototype.soundverse = function ($event) {
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
    ReadQuran2Page.prototype.soundstop = function () {
        switch (this.audio) {
            //baseon audio id
            case this.audio: {
                this.audioTr.stop(this.audio);
                break;
            }
        }
    };
    ReadQuran2Page.prototype.presentloading = function () {
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
    ReadQuran2Page.ctorParameters = function () { return [
        { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
        { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _service_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    ReadQuran2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-read-quran2',
            template: __webpack_require__(/*! raw-loader!./read-quran2.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/read-quran2/read-quran2.page.html"),
            styles: [__webpack_require__(/*! ./read-quran2.page.scss */ "./src/app/page/read-quran2/read-quran2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
            _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _service_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ReadQuran2Page);
    return ReadQuran2Page;
}());



/***/ })

}]);
//# sourceMappingURL=page-read-quran2-read-quran2-module-es5.js.map