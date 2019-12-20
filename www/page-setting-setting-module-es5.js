(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/setting/setting.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/setting/setting.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n      </ion-title>\n        <ion-button color=\"warning\" slot=\"end\" (click)=\"savesetting()\">Save</ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n\n  <ion-row>\n    <ion-col>\n      <h6>Quran Translations</h6>\n        <ion-item>\n          <ion-label>Language<br>Translations</ion-label><br>\n          <ion-select name=\"language\" [(ngModel)]=\"selectcategorylanguage\" (ionChange)=\"checkValue($event)\" interface=\"action-sheet\" >\n              <ion-select-option value=\"ar\">Arab</ion-select-option>\n              <ion-select-option value=\"en\" >English</ion-select-option>\n              <ion-select-option value=\"id\">Indonedia</ion-select-option>\n          </ion-select>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h6>Notification</h6>\n        <ion-item>\n          <ion-label>Reminder Azan</ion-label><br>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"azan\" checked></ion-toggle>        \n        </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row>\n    <ion-col>\n      <h6>Prayer Setting</h6>\n      \n      <ion-item>\n      <ion-label>Prayer Method:</ion-label>\n        \n        <ion-select (ionChange)=\"checkValueTime($event)\"  [(ngModel)]=\"selectcategoryprayer\" name=\"prayer\"  interface=\"action-sheet\" style=\"width: 100%;\">\n            <ion-select-option value=\"0\" >Shia Ithna-Ansari</ion-select-option>\n            <ion-select-option value=\"1\">University of Islamic Sciences, Karachi</ion-select-option>\n            <ion-select-option value=\"2\" >Islamic Society of North America</ion-select-option>\n            <ion-select-option value=\"3\">Muslim World League</ion-select-option>\n            <ion-select-option value=\"4\">Umm Al-Qura University, Mecca</ion-select-option>\n            <ion-select-option value=\"5\">Egyptian General Authority of Survey\t</ion-select-option>\n            <ion-select-option value=\"7\">Institute of Geophysics, University of Tehran</ion-select-option>\n            <ion-select-option value=\"8\">Gulf Region</ion-select-option>\n            <ion-select-option value=\"9\">Kuwait</ion-select-option>\n            <ion-select-option value=\"10\">Qatar</ion-select-option>\n            <ion-select-option value=\"11\">Majlis Ugama Islam Singapura</ion-select-option>\n            <ion-select-option value=\"12\">Union des Organisations Islamiques de France</ion-select-option>\n            <ion-select-option value=\"13\">Diyanet İşleri Başkanlığı, Turkey</ion-select-option>\n            <ion-select-option value=\"14\">Spiritual Administration of Muslims of Russia</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col>\n        <h6>Quran Theme</h6>\n          <ion-item>\n            <ion-label>List Style</ion-label><br>\n            <ion-select name=\"qurantheme\" [(ngModel)]=\"selectthemequran\" (ionChange)=\"checkValuequran($event)\" interface=\"action-sheet\" >\n                <ion-select-option value=\"read-quran\">Standard</ion-select-option>\n                <ion-select-option value=\"read-quran2\" >Line-by-line</ion-select-option>\n            </ion-select>\n          </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/setting/setting.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/setting/setting.module.ts ***!
  \************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/page/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/page/setting/setting.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/setting/setting.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  margin-bottom: 9px;\n}\n\nh6 {\n  color: gray;\n}\n\nion-select {\n  width: 100%;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuXG5oNntcbiAgICBjb2xvcjpncmF5O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4iLCJpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuXG5oNiB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/setting/setting.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/setting/setting.page.ts ***!
  \**********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SettingPage = /** @class */ (function () {
    function SettingPage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.selectcategorylanguage = localStorage.getItem("language");
        this.selectcategoryprayer = localStorage.getItem("prayermethod");
        this.selectthemequran = localStorage.getItem('qurantheme');
    }
    SettingPage.prototype.ngOnInit = function () {
    };
    // checkValue(event){ 
    //   localStorage.setItem("language", event.detail.value );
    //   window.location.reload()
    // }
    // checkValueTime(event){
    //   localStorage.setItem("prayermethod", event.detail.value );
    // }
    SettingPage.prototype.savesetting = function () {
        this.presentloading();
        localStorage.setItem("language", this.selectcategorylanguage);
        localStorage.setItem("prayermethod", this.selectcategoryprayer);
        localStorage.setItem('qurantheme', this.selectthemequran);
        window.location.reload();
    };
    SettingPage.prototype.presentloading = function () {
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
    SettingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/page/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-setting-setting-module-es5.js.map