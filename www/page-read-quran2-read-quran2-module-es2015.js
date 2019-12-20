(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-read-quran2-read-quran2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/read-quran2/read-quran2.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/read-quran2/read-quran2.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\" (click)=\"gobackroot()\">\n         <ion-icon src=\"./../../../../assets/icon/backward.svg\"></ion-icon>\n         <label> Back </label>\n      </ion-buttons>\n  \n      <ion-title class=\"ion-text-center\">\n          {{indexing}} | {{SurahSatu}}\n      </ion-title>\n      \n      <ion-buttons id=\"goside\" slot=\"end\" (click)=\"gotonext()\">\n        <label> Next </label>\n         <ion-icon src=\"./../../../../assets/icon/forward.svg\"></ion-icon>\n      </ion-buttons>  \n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content style=\"--background:fffefa;  \"> \n  \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" >\n      <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-row id=\"menusticky\">\n      <ion-col size=\"5\"  class=\"ion-text-left\">\n        <sub style=\"top: -6px;position: relative;\"> \n          {{SurahSatuT}} - ( {{batverse}} / {{count}} )\n        </sub>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-center\">\n        <sub style=\"top: -6px;position: relative;\">\n          Juz {{juz}}\n        </sub>\n      </ion-col>\n      <ion-col>\n        <sub>\n          <sub style=\"top: -6px;position: relative;\">Font Size</sub> \n          <ion-icon (click)=\"decfont()\" name=\"remove-circle-outline\"></ion-icon>\n          <ion-icon (click)=\"incfont()\" name=\"add-circle-outline\"></ion-icon>\n        </sub>\n      </ion-col>\n    </ion-row>\n  \n  \n \n        <div class=\"ion-text-center boxbismillah\">\n              <ion-grid id=\"surahheader\" *ngIf=\"bismillah\">\n                <ion-row >\n                  <ion-col size=\"12\">\n                    <h4 style=\"text-align: -webkit-center;\">\n                        <img style=\"height: 40px;width:auto;text-align: center;\" src=\"./../../assets/images/Bismillah.svg\">\n                    </h4>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n        </div>\n        \n              <div *ngFor=\"let p of serahall;\" style=\"padding: 22px 0px;border-top: 1px solid #e1e1e1;\n              border-bottom: 1px solid #e1e1e1;\" [style.background]=\"isTrue === p.audioID  ?   bkgh3 : 'transparent' \">\n                <ion-row (click)=\"myverse(p)\">\n                  <ion-col size=\"12\" class=\"ion-text-left fontnumber\">\n                      &#1757;{{p.number}}\n                  </ion-col>\n                  <ion-col id=\"{{p.audioID}}\" [style.font-size]=\"fontSize + 'px'\"  button=\"true\">\n                    {{p.text}}                     \n                  </ion-col>\n                  \n                </ion-row>\n\n              </div>\n       \n\n        \n    <ion-row  *ngIf=\"hideout\" id=\"myDiv\">\n        <ion-icon (click)=\"closeT()\" name=\"menu\" id=\"closeT\"></ion-icon>\n      <ion-row id=\"cardbottom\">\n        <ion-col>\n          <p  [style.font-size]=\"fontSizeT + 'px'\" id=\"translation\">{{setfav}}. {{pageh.textEng}}</p> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon class=\"classicon\" (touchend)=\"endCount()\"  (click)=\"savebookmark()\" src=\"{{fav}}\"></ion-icon>\n          <ion-icon class=\"classicon\" *ngIf=\"playStopbtn\" (click)=\"soundverse($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/volume-mute.svg\"></ion-icon>\n          <ion-icon class=\"classicon\" *ngIf=\"playStopbtn\" (click)=\"soundstop($event)\" id=\"{{audio}}\" src=\"./../../../../assets/icon/stop.svg\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-row>  \n    \n  \n  </ion-content>\n  \n  \n  \n   "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _read_quran2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-quran2.page */ "./src/app/page/read-quran2/read-quran2.page.ts");







const routes = [
    {
        path: '',
        component: _read_quran2_page__WEBPACK_IMPORTED_MODULE_6__["ReadQuran2Page"]
    }
];
let ReadQuran2PageModule = class ReadQuran2PageModule {
};
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



/***/ }),

/***/ "./src/app/page/read-quran2/read-quran2.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/read-quran2/read-quran2.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 0px 12px;\n  font-family: quranFont !important;\n  line-height: 2.2;\n  text-align: right;\n}\n\n.boxbismillah {\n  border-bottom: 2px solid #666;\n  top: 0px;\n  position: relative;\n}\n\n#translation {\n  text-align: left;\n}\n\n.classicon {\n  font-size: 30px;\n  margin-right: 15px;\n}\n\n#menusticky {\n  position: fixed;\n  z-index: 20;\n  background: aliceblue;\n  width: 100%;\n}\n\n.number {\n  font-size: 0.6em;\n  display: contents;\n}\n\n.topmenu {\n  background: #fdffe1;\n  color: #2c6b79;\n}\n\n.fntsize {\n  float: right;\n  margin-right: 5px;\n  position: initial;\n}\n\n.titlesize {\n  margin-left: 5px;\n  position: initial;\n}\n\n#goside {\n  margin-right: 20px;\n}\n\n.fontnumber {\n  font-size: 1.7em;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n#background {\n  background: #e0f7f9;\n  padding: 4px;\n  height: 100%;\n  background-size: max-content;\n}\n\n#surahheader {\n  background: white !important;\n}\n\n#closeT {\n  margin: auto;\n}\n\n#myDiv {\n  min-height: auto;\n  max-height: 380px;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  background: #f1e4e4;\n  color: #030303;\n}\n\n#cardbottom {\n  width: 100%;\n  margin-top: 0px;\n}\n\n#cardbottom ion-card-content ion-icon {\n  font-size: 32px;\n  padding: 10px;\n}\n\nion-content {\n  --background:fffefa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWFkLXF1cmFuMi9DOlxcVXNlcnNcXGFpemF0XFxEb2N1bWVudHNcXFF1cmFuSG91clxcMi4yL3NyY1xcYXBwXFxwYWdlXFxyZWFkLXF1cmFuMlxccmVhZC1xdXJhbjIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3JlYWQtcXVyYW4yL3JlYWQtcXVyYW4yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUU7RUFDRSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0U7RUFBYSw0QkFBQTtBQ0NmOztBREFFO0VBQVMsWUFBQTtBQ0lYOztBREhFO0VBQVEsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsd0JBQUE7RUFBQSxnQkFBQTtFQUFpQixXQUFBO0VBQVksbUJBQUE7RUFBb0IsY0FBQTtBQ1loRzs7QURYRTtFQUFhLFdBQUE7RUFBYSxlQUFBO0FDZ0I1Qjs7QURmRTtFQUF1QyxlQUFBO0VBQWdCLGFBQUE7QUNvQnpEOztBRGxCRTtFQUNFLG1CQUFBO0FDcUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9yZWFkLXF1cmFuMi9yZWFkLXF1cmFuMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBpb24tY29se1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBxdXJhbkZvbnQgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMi4yO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgLmJveGJpc21pbGxhaHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcbiAgICB0b3A6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAjdHJhbnNsYXRpb24geyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNsYXNzaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gICNtZW51c3RpY2t5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjA7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubnVtYmVyIHtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cbiAgLnRvcG1lbnV7XG4gICAgYmFja2dyb3VuZDogI2ZkZmZlMTtcbiAgICBjb2xvcjogIzJjNmI3OTtcblxuICB9XG4gIC5mbnRzaXplIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgfVxuICAudGl0bGVzaXplIHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cblxuICAjZ29zaWRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgfVxuXG4gIC5mb250bnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEuN2VtOyAgXG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgI2JhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogI2UwZjdmOTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogbWF4LWNvbnRlbnQ7XG5cbiAgfVxuXG4gICNzdXJhaGhlYWRlcntiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O31cbiAgI2Nsb3NlVCB7bWFyZ2luOiBhdXRvO31cbiAgI215RGl2IHttaW4taGVpZ2h0OiBhdXRvOyBtYXgtaGVpZ2h0OiAzODBweDsgcG9zaXRpb246IHN0aWNreTtib3R0b206IDBweDtiYWNrZ3JvdW5kOiAjZjFlNGU0O2NvbG9yOiByZ2IoMywgMywgMyk7fVxuICAjY2FyZGJvdHRvbSB7d2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDBweDt9XG4gICNjYXJkYm90dG9tIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb24ge2ZvbnQtc2l6ZTogMzJweDtwYWRkaW5nOiAxMHB4O31cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOmZmZmVmYTtcbiAgfSIsImlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgZm9udC1mYW1pbHk6IHF1cmFuRm9udCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMi4yO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJveGJpc21pbGxhaCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jdHJhbnNsYXRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2xhc3NpY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbiNtZW51c3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4udG9wbWVudSB7XG4gIGJhY2tncm91bmQ6ICNmZGZmZTE7XG4gIGNvbG9yOiAjMmM2Yjc5O1xufVxuXG4uZm50c2l6ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4udGl0bGVzaXplIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbiNnb3NpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mb250bnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2UwZjdmOTtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogbWF4LWNvbnRlbnQ7XG59XG5cbiNzdXJhaGhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbiNjbG9zZVQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNteURpdiB7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2YxZTRlNDtcbiAgY29sb3I6ICMwMzAzMDM7XG59XG5cbiNjYXJkYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuI2NhcmRib3R0b20gaW9uLWNhcmQtY29udGVudCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ZmZmZWZhO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dataquran_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataquran.service */ "./src/app/dataquran.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/audio.service */ "./src/app/service/audio.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ReadQuran2Page = class ReadQuran2Page {
    constructor(dataquran, dataqurantranslate, navCtrl, loadingCtrl, audioTr, http) {
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
    ionRefresh(event) {
        setTimeout(() => {
            this.batverse = parseInt(localStorage.getItem("bookmark"));
            //complete()  signify that the refreshing has completed and to close the refresher
            event.target.complete();
        }, 2000);
    }
    ngOnInit() {
        var quranid = localStorage.getItem('readquran');
        this.dataquran.surah(quranid).subscribe(data => {
            this.SurahSatu = data["data"]["name"];
            this.indexing = data["data"]["index"];
            this.count = data["data"]["count"];
            this.serahall = data["data"]["verse"];
            this.juz = data["data"]["juz"][0]['index'];
        });
        this.dataqurantranslate.suraht(quranid).subscribe(datat => {
            this.SurahSatuT = datat["data"]["name"];
            this.serahallt = datat["data"]["verse"];
        });
        if (localStorage.getItem('readquran') == "1" || localStorage.getItem('readquran') == "9") {
            this.bismillah = false;
        }
        ;
        this.http.get('http://api.aladhan.com/v1/methods').subscribe(data => {
        }, error => {
            this.playStopbtn = false;
        });
        if (parseInt(localStorage.getItem('bookmarkSurah')) == parseInt(localStorage.getItem('readquran'))) {
            this.batverse = parseInt(localStorage.getItem("bookmark"));
            this.isTrue = "v" + localStorage.getItem('bookmark');
        }
    }
    incfont() {
        this.fontSize = this.fontSize + 1.1;
        this.fontSizeT = this.fontSizeT + 1.1;
    }
    decfont() {
        this.fontSize = this.fontSize - 1.1;
        this.fontSizeT = this.fontSizeT - 1.1;
    }
    closeT() {
        this.hideout = false;
    }
    gotonext() {
        this.total = parseInt(localStorage.getItem('readquran'));
        this.tot = 1;
        this.all = this.tot + this.total;
        localStorage.setItem('readquran', this.all);
        window.location.reload();
        this.presentloading();
    }
    myverse(p) {
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
    }
    savebookmark(p) {
        localStorage.setItem('bookmark', this.setfav);
        localStorage.setItem('bookmarkSurah', this.indexing);
        this.fav = "./../../../../assets/icon/bookmark.svg";
    }
    endCount() {
        this.batverse = parseInt(localStorage.getItem("bookmark"));
        this.fav = "./../../../../assets/icon/bookmark.svg";
    }
    gobackroot() {
        this.presentloading();
        this.navCtrl.navigateBack('tabs/home');
    }
    soundverse($event) {
        this.urlaudio = this.url + this.speaker + this.dataaudio;
        switch (this.audio) {
            //baseon audio id
            case this.audio: {
                this.audioTr.preload(this.audio, this.urlaudio);
                this.audioTr.play(this.audio);
                break;
            }
        }
    }
    soundstop() {
        switch (this.audio) {
            //baseon audio id
            case this.audio: {
                this.audioTr.stop(this.audio);
                break;
            }
        }
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
ReadQuran2Page.ctorParameters = () => [
    { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
    { type: _dataquran_service__WEBPACK_IMPORTED_MODULE_2__["DataquranService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _service_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-read-quran2-read-quran2-module-es2015.js.map