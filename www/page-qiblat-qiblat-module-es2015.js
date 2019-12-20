(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-qiblat-qiblat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/qiblat/qiblat.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/qiblat/qiblat.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        Qiblat\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <ion-content >\n    <ion-grid id=\"div\">\n    </ion-grid>\n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/page/qiblat/qiblat.module.ts":
/*!**********************************************!*\
  !*** ./src/app/page/qiblat/qiblat.module.ts ***!
  \**********************************************/
/*! exports provided: QiblatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QiblatPageModule", function() { return QiblatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qiblat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qiblat.page */ "./src/app/page/qiblat/qiblat.page.ts");







const routes = [
    {
        path: '',
        component: _qiblat_page__WEBPACK_IMPORTED_MODULE_6__["QiblatPage"]
    }
];
let QiblatPageModule = class QiblatPageModule {
};
QiblatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_qiblat_page__WEBPACK_IMPORTED_MODULE_6__["QiblatPage"]]
    })
], QiblatPageModule);



/***/ }),

/***/ "./src/app/page/qiblat/qiblat.page.scss":
/*!**********************************************!*\
  !*** ./src/app/page/qiblat/qiblat.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div {\n  background: black;\n  height: 100%;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9xaWJsYXQvQzpcXFVzZXJzXFxhaXphdFxcRG9jdW1lbnRzXFxRdXJhbkhvdXJcXDIuMi9zcmNcXGFwcFxccGFnZVxccWlibGF0XFxxaWJsYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3FpYmxhdC9xaWJsYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcWlibGF0L3FpYmxhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSIsIiNkaXYge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/qiblat/qiblat.page.ts":
/*!********************************************!*\
  !*** ./src/app/page/qiblat/qiblat.page.ts ***!
  \********************************************/
/*! exports provided: QiblatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QiblatPage", function() { return QiblatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QiblatPage = class QiblatPage {
    constructor() { }
    ngOnInit() {
    }
};
QiblatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qiblat',
        template: __webpack_require__(/*! raw-loader!./qiblat.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/qiblat/qiblat.page.html"),
        styles: [__webpack_require__(/*! ./qiblat.page.scss */ "./src/app/page/qiblat/qiblat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QiblatPage);



/***/ })

}]);
//# sourceMappingURL=page-qiblat-qiblat-module-es2015.js.map