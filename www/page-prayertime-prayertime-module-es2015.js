(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-prayertime-prayertime-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/prayertime/prayertime.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/prayertime/prayertime.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Prayer Times\n      </ion-title>\n\n      <ion-buttons slot=\"primary\">\n        Reset\n        <ion-icon slot=\"end\" (click)=\"getlocation()\" name=\"locate\" style=\"font-size: 24px;\"></ion-icon>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>\n  \n\n<ion-content >\n  <ion-grid id=\"div\">\n\n    <ion-row>\n      <ion-col>\n        <ion-card *ngIf=\"hidedate\">\n          <ion-card-content class=\"ion-text-center\">\n              <b> {{date_hijri}}  {{date_hijri_day}},  {{date_hijri_year}}</b> <br> \n              <p style=\"font-size: .8em\">{{date_gregorian}}<br>  \n                <sub style=\"font-size: 1em\">{{coorState}}, {{coorCounty}} </sub>\n              </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n \n\n    <ion-row id=\"secondbox\">\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <ion-row class=\"border\">\n              <ion-col>\n                <h3><b>Next Prayer</b></h3>\n              </ion-col>\n              <ion-col class=\"text-right\">\n                <h3><b>Time Prayer</b></h3>\n              </ion-col>\n            </ion-row>\n            \n            <hr>\n            \n            <ion-row>\n              <ion-col>\n                <h3>Fajr </h3>\n              </ion-col>\n              <ion-col class=\"text-right\">\n                <h3>{{p0}}</h3>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <h3>Sunrise</h3>\n              </ion-col>\n              <ion-col class=\"text-right\">\n                <h3>{{p1}}</h3>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <h3>Dhuhr</h3>\n              </ion-col>\n              <ion-col class=\"text-right\">\n                <h3>{{p2}}</h3>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <h3>Asr</h3>\n              </ion-col>\n              <ion-col class=\"text-right\">\n                <h3>{{p3}}</h3>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h3>Maghrib</h3>\n            </ion-col>\n            <ion-col class=\"text-right\">\n              <h3>{{p4}}</h3>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h3>\n                Isha\n              </h3>\n            </ion-col>\n            <ion-col class=\"text-right\">\n              <h3>\n                {{p5}}\n              </h3>\n          </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row id=\"secondbox\">\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <ion-button (click)=\"gotoqiblat()\" expand=\"full\" color=\"danger\">\n                <ion-icon src=\"./../../../../assets/icon/kaaba-mecca.svg\" id=\"iconmecca\"></ion-icon> QIBLAT\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/prayertime/prayertime.module.ts":
/*!******************************************************!*\
  !*** ./src/app/page/prayertime/prayertime.module.ts ***!
  \******************************************************/
/*! exports provided: PrayertimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayertimePageModule", function() { return PrayertimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prayertime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayertime.page */ "./src/app/page/prayertime/prayertime.page.ts");







const routes = [
    {
        path: '',
        component: _prayertime_page__WEBPACK_IMPORTED_MODULE_6__["PrayertimePage"]
    }
];
let PrayertimePageModule = class PrayertimePageModule {
};
PrayertimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prayertime_page__WEBPACK_IMPORTED_MODULE_6__["PrayertimePage"]]
    })
], PrayertimePageModule);



/***/ }),

/***/ "./src/app/page/prayertime/prayertime.page.scss":
/*!******************************************************!*\
  !*** ./src/app/page/prayertime/prayertime.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div {\n  background: url('maxresdefault.jpg');\n  height: 100%;\n  background-size: max-content;\n}\n\nion-card {\n  font-size: 20px;\n}\n\nion-card {\n  background: white;\n}\n\n.text-right {\n  text-align: right;\n}\n\n#iconmecca {\n  margin-right: 1em;\n}\n\n#secondbox {\n  margin-top: -20px;\n}\n\n.border {\n  border-bottom: 1px solid #b9b9b9;\n}\n\n#btnmedium {\n  --background: #4e397a;\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL3ByYXllcnRpbWUvcHJheWVydGltZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvcHJheWVydGltZS9wcmF5ZXJ0aW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcHJheWVydGltZS9wcmF5ZXJ0aW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXYge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXhyZXNkZWZhdWx0LmpwZycpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IG1heC1jb250ZW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50ZXh0LXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuI2ljb25tZWNjYXtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbiNzZWNvbmRib3h7XG4gICAgbWFyZ2luLXRvcDotMjBweDtcbn1cblxuLmJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOWI5Yjk7XG59XG5cbiNidG5tZWRpdW0ge1xuICAgIC0tYmFja2dyb3VuZDogIzRlMzk3YTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9IiwiI2RpdiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWF4cmVzZGVmYXVsdC5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBtYXgtY29udGVudDtcbn1cblxuaW9uLWNhcmQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNpY29ubWVjY2Ege1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuI3NlY29uZGJveCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOWI5Yjk7XG59XG5cbiNidG5tZWRpdW0ge1xuICAtLWJhY2tncm91bmQ6ICM0ZTM5N2E7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/prayertime/prayertime.page.ts":
/*!****************************************************!*\
  !*** ./src/app/page/prayertime/prayertime.page.ts ***!
  \****************************************************/
/*! exports provided: PrayertimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayertimePage", function() { return PrayertimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");







let PrayertimePage = class PrayertimePage {
    constructor(navCtrl, http, geolocation, platform, notification, alertCtrl, loadingCtrl, backgroundMode) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.platform = platform;
        this.notification = notification;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.backgroundMode = backgroundMode;
        this.address = "http://api.aladhan.com/v1/calendar?latitude=" + localStorage.getItem('latitude') + "&longitude=" + localStorage.getItem('longitude') +
            "&method=" + localStorage.getItem('prayermethod');
        this.myUrl = this.address;
        this.abc = "20:20";
        this.hidedate = true;
        this.backgroundMode.enable();
        this.platform.ready().then(() => {
            this.notification.on('trigger').subscribe(res => {
                let msg = res.data ? res.data.mydata : '';
                this.showAlert(res.title, res.text, msg);
            });
        });
        this.timeschedule();
        this.presentloading();
    }
    ngOnInit() {
        this.deviceLocation();
        var d = new Date();
        let vaf = d.getDate();
        let arrayday = vaf - 1;
        this.http.get(this.myUrl).subscribe(data => {
            let url_pray = data['data'][arrayday]['timings'];
            let datehijrimonth = data['data'][arrayday]['date']['hijri']['month'];
            let url_datereason = data['data'][arrayday]['date'];
            let url_datehijri = data['data'][arrayday]['date']['hijri'];
            let url_datetimezone = data['data'][arrayday]['meta'];
            localStorage.setItem('fajrNoti', url_pray['Fajr']);
            localStorage.setItem('sunriseNoti', url_pray['Sunrise']);
            localStorage.setItem('dhuhrNoti', url_pray['Dhuhr']);
            localStorage.setItem('asrNoti', url_pray['Asr']);
            localStorage.setItem('maghribNoti', url_pray['Maghrib']);
            localStorage.setItem('ishaNoti', url_pray['Isha']);
            this.date_hijri = datehijrimonth['en'];
            this.date_hijri_day = url_datehijri['day'];
            this.date_hijri_year = url_datehijri['year'];
            this.date_timezone = url_datetimezone['timezone'];
            this.date_gregorian = url_datereason['readable'];
        });
        if (localStorage.getItem('asrNoti') != null) {
            this.asrhr = (localStorage.getItem('asrNoti')[0] + localStorage.getItem('asrNoti')[1]);
            this.asrmin = (localStorage.getItem('asrNoti')[3] + localStorage.getItem('asrNoti')[4]);
            this.p3 = this.asrhr + ":" + this.asrmin;
            this.sunrisehr = (localStorage.getItem('sunriseNoti')[0] + localStorage.getItem('sunriseNoti')[1]);
            this.sunrisemin = (localStorage.getItem('sunriseNoti')[3] + localStorage.getItem('sunriseNoti')[4]);
            this.p1 = this.sunrisehr + ":" + this.sunrisemin;
            this.fajrhr = (localStorage.getItem('fajrNoti')[0] + localStorage.getItem('fajrNoti')[1]);
            this.fajrmin = (localStorage.getItem('fajrNoti')[3] + localStorage.getItem('fajrNoti')[4]);
            this.p0 = this.fajrhr + ":" + this.fajrmin;
            this.dhuhrhr = (localStorage.getItem('dhuhrNoti')[0] + localStorage.getItem('dhuhrNoti')[1]);
            this.dhuhrmin = (localStorage.getItem('dhuhrNoti')[3] + localStorage.getItem('dhuhrNoti')[4]);
            this.p2 = this.dhuhrhr + ":" + this.dhuhrmin;
            this.maghribhr = (localStorage.getItem('maghribNoti')[0] + localStorage.getItem('maghribNoti')[1]);
            this.maghribmin = (localStorage.getItem('maghribNoti')[3] + localStorage.getItem('maghribNoti')[4]);
            this.p4 = this.maghribhr + ":" + this.maghribmin;
            this.ishahr = (localStorage.getItem('ishaNoti')[0] + localStorage.getItem('ishaNoti')[1]);
            this.ishamin = (localStorage.getItem('ishaNoti')[3] + localStorage.getItem('ishaNoti')[4]);
            this.p5 = this.ishahr + ":" + this.ishamin;
        }
    }
    deviceLocation() {
        this.http.get('https://geoip-db.com/json/')
            .subscribe((data) => {
            this.coorState = data.state;
            this.coorCounty = data.country_name;
        }, error => {
            this.hidedate = false;
        });
    }
    getlocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            localStorage.setItem('latitude', this.lat);
            localStorage.setItem('longitude', this.long);
        }).catch((error) => { });
        this.presentloading();
        window.location.reload();
    }
    gotoqiblat() {
        this.presentloading();
        this.navCtrl.navigateForward('qiblat');
    }
    timeschedule() {
        if (localStorage.getItem('asrNoti') != null) {
            this.asrhr = (localStorage.getItem('asrNoti')[0] + localStorage.getItem('asrNoti')[1]);
            this.asrmin = (localStorage.getItem('asrNoti')[3] + localStorage.getItem('asrNoti')[4]);
            this.p3 = this.asrhr + ":" + this.asrmin;
            this.sunrisehr = (localStorage.getItem('sunriseNoti')[0] + localStorage.getItem('sunriseNoti')[1]);
            this.sunrisemin = (localStorage.getItem('sunriseNoti')[3] + localStorage.getItem('sunriseNoti')[4]);
            this.p1 = this.sunrisehr + ":" + this.sunrisemin;
            this.fajrhr = (localStorage.getItem('fajrNoti')[0] + localStorage.getItem('fajrNoti')[1]);
            this.fajrmin = (localStorage.getItem('fajrNoti')[3] + localStorage.getItem('fajrNoti')[4]);
            this.p0 = this.fajrhr + ":" + this.fajrmin;
            this.dhuhrhr = (localStorage.getItem('dhuhrNoti')[0] + localStorage.getItem('dhuhrNoti')[1]);
            this.dhuhrmin = (localStorage.getItem('dhuhrNoti')[3] + localStorage.getItem('dhuhrNoti')[4]);
            this.p2 = this.dhuhrhr + ":" + this.dhuhrmin;
            this.maghribhr = (localStorage.getItem('maghribNoti')[0] + localStorage.getItem('maghribNoti')[1]);
            this.maghribmin = (localStorage.getItem('maghribNoti')[3] + localStorage.getItem('maghribNoti')[4]);
            this.p4 = this.maghribhr + ":" + this.maghribmin;
            this.ishahr = (localStorage.getItem('ishaNoti')[0] + localStorage.getItem('ishaNoti')[1]);
            this.ishamin = (localStorage.getItem('ishaNoti')[3] + localStorage.getItem('ishaNoti')[4]);
            this.p5 = this.ishahr + ":" + this.ishamin;
        }
        this.notification.schedule([
            {
                id: 1,
                title: "Azan for Farj",
                text: "Drop everything lets pray",
                trigger: { at: new Date(new Date().setHours(this.fajrhr, this.fajrmin, 0, 0)) },
                foreground: true,
                sound: "file://azan2.mp3",
                smallIcon: 'res://QH-icon-v5.png',
                icon: 'file://icon/QH-icon-v5.png'
            },
            {
                id: 2,
                title: "Azan for Dhuhr",
                text: "Drop everything lets pray",
                trigger: { at: new Date(new Date().setHours(this.dhuhrhr, this.dhuhrmin, 0, 0)) },
                foreground: true,
                sound: "file://azan2.mp3",
                smallIcon: 'res://QH-icon-v5.png',
                icon: 'file://icon/QH-icon-v5.png'
            },
            {
                id: 3,
                title: "Azan for Asr",
                text: "Drop everything lets pray",
                trigger: { at: new Date(new Date().setHours(this.asrhr, this.asrmin, 0, 0)) },
                foreground: true,
                sound: "file://azan2.mp3",
                smallIcon: 'res://QH-icon-v5.png',
                icon: 'file://icon/QH-icon-v5.png'
            },
            {
                id: 4,
                title: "Azan for Maghrib",
                text: "Drop everything lets pray",
                trigger: { at: new Date(new Date().setHours(this.maghribhr, this.maghribmin, 0, 0)) },
                foreground: true,
                sound: "file://azan2.mp3",
                smallIcon: 'res://QH-icon-v5.png',
                icon: 'file://icon/QH-icon-v5.png'
            },
            {
                id: 5,
                title: "Azan for Isha",
                text: "Drop everything lets pray",
                trigger: { at: new Date(new Date().setHours(this.ishahr, this.ishamin, 0, 0)) },
                foreground: true,
                sound: "file://azan2.mp3",
                smallIcon: 'res://QH-icon-v5.png',
                icon: 'file://icon/QH-icon-v5.png'
            }
        ]);
    }
    showAlert(header, sub, msg) {
        this.alertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['ok']
        }).then(alert => alert.present());
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
PrayertimePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundMode"] }
];
PrayertimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayertime',
        template: __webpack_require__(/*! raw-loader!./prayertime.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/prayertime/prayertime.page.html"),
        styles: [__webpack_require__(/*! ./prayertime.page.scss */ "./src/app/page/prayertime/prayertime.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundMode"]])
], PrayertimePage);



/***/ })

}]);
//# sourceMappingURL=page-prayertime-prayertime-module-es2015.js.map