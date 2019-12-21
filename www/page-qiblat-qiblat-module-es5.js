(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-qiblat-qiblat-module"],{

/***/ "./node_modules/angular-coordinates/index.js":
/*!***************************************************!*\
  !*** ./node_modules/angular-coordinates/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/coordinates.pipe */ "./node_modules/angular-coordinates/src/coordinates.pipe.js"));
__export(__webpack_require__(/*! ./src/coordinates.module */ "./node_modules/angular-coordinates/src/coordinates.module.js"));
__export(__webpack_require__(/*! ./src/coordinates.component */ "./node_modules/angular-coordinates/src/coordinates.component.js"));
__export(__webpack_require__(/*! ./src/coordinates.service */ "./node_modules/angular-coordinates/src/coordinates.service.js"));
__export(__webpack_require__(/*! ./src/transformation-type.enum */ "./node_modules/angular-coordinates/src/transformation-type.enum.js"));
__export(__webpack_require__(/*! ./src/direction.enum */ "./node_modules/angular-coordinates/src/direction.enum.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/coordinates.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/coordinates.component.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var transformation_type_enum_1 = __webpack_require__(/*! ./transformation-type.enum */ "./node_modules/angular-coordinates/src/transformation-type.enum.js");
var getTransformationType_1 = __webpack_require__(/*! ./getTransformationType */ "./node_modules/angular-coordinates/src/getTransformationType.js");
var CoordinatesComponent = (function () {
    function CoordinatesComponent() {
        this.internalType = getTransformationType_1.getValidTransformationType();
    }
    Object.defineProperty(CoordinatesComponent.prototype, "type", {
        get: function () {
            return this.internalType;
        },
        set: function (type) {
            this.internalType = getTransformationType_1.getValidTransformationType(type);
        },
        enumerable: true,
        configurable: true
    });
    return CoordinatesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CoordinatesComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinatesComponent.prototype, "direction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CoordinatesComponent.prototype, "type", null);
CoordinatesComponent = __decorate([
    core_1.Component({
        selector: 'geo-coordinates',
        template: '{{ value | coordinates:type:direction }}'
    })
], CoordinatesComponent);
exports.CoordinatesComponent = CoordinatesComponent;
//# sourceMappingURL=coordinates.component.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/coordinates.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/coordinates.module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var coordinates_service_1 = __webpack_require__(/*! ./coordinates.service */ "./node_modules/angular-coordinates/src/coordinates.service.js");
var coordinates_component_1 = __webpack_require__(/*! ./coordinates.component */ "./node_modules/angular-coordinates/src/coordinates.component.js");
var coordinates_pipe_1 = __webpack_require__(/*! ./coordinates.pipe */ "./node_modules/angular-coordinates/src/coordinates.pipe.js");
var declarations = [coordinates_component_1.CoordinatesComponent, coordinates_pipe_1.CoordinatesPipe];
var CoordinatesModule = (function () {
    function CoordinatesModule() {
    }
    return CoordinatesModule;
}());
CoordinatesModule = __decorate([
    core_1.NgModule({
        providers: [coordinates_service_1.CoordinatesService],
        exports: declarations.slice(),
        declarations: declarations.slice()
    })
], CoordinatesModule);
exports.CoordinatesModule = CoordinatesModule;
//# sourceMappingURL=coordinates.module.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/coordinates.pipe.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/coordinates.pipe.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var coordinates_service_1 = __webpack_require__(/*! ./coordinates.service */ "./node_modules/angular-coordinates/src/coordinates.service.js");
var getTransformationType_1 = __webpack_require__(/*! ./getTransformationType */ "./node_modules/angular-coordinates/src/getTransformationType.js");
var CoordinatesPipe = (function () {
    function CoordinatesPipe(coordinatesService) {
        this.coordinatesService = coordinatesService;
    }
    CoordinatesPipe.prototype.transform = function (value, type, direction) {
        return this.coordinatesService.transform(value, getTransformationType_1.getValidTransformationType(type), direction);
    };
    return CoordinatesPipe;
}());
CoordinatesPipe = __decorate([
    core_1.Pipe({
        name: 'coordinates'
    }),
    __metadata("design:paramtypes", [coordinates_service_1.CoordinatesService])
], CoordinatesPipe);
exports.CoordinatesPipe = CoordinatesPipe;
//# sourceMappingURL=coordinates.pipe.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/coordinates.service.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/coordinates.service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transformation_type_enum_1 = __webpack_require__(/*! ./transformation-type.enum */ "./node_modules/angular-coordinates/src/transformation-type.enum.js");
var direction_enum_1 = __webpack_require__(/*! ./direction.enum */ "./node_modules/angular-coordinates/src/direction.enum.js");
var CoordinatesService = (function () {
    function CoordinatesService() {
    }
    CoordinatesService.prototype.transform = function (value, transformationType, direction) {
        if (!transformationType || !this.isValueValid(value, direction)) {
            return '';
        }
        else if (transformationType === transformation_type_enum_1.TransformationType.ToDegrees) {
            return this.transformToDegrees(value, direction);
        }
        else {
            return this.transformToDigit(value);
        }
    };
    CoordinatesService.prototype.isValueValid = function (value, direction) {
        return (!value && value === 0) || this.isValidDigit(value, direction) || this.isValidDegree(value);
    };
    CoordinatesService.prototype.transformToDigit = function (value) {
        var potentialNumber = Number(value);
        if (!Number.isNaN(potentialNumber)) {
            return potentialNumber;
        }
        return this.transformDegreesToNumber(value);
    };
    CoordinatesService.prototype.transformToDegrees = function (value, direction) {
        if (typeof value === 'string' && Number.isNaN(Number(value))) {
            return value;
        }
        else {
            var numberValue = Number(value);
            return this.transformNumberToDegrees(numberValue) +
                (direction ? " " + this.resolveDirection(numberValue, direction) : '');
        }
    };
    CoordinatesService.prototype.isValidDegree = function (value, direction) {
        if (typeof value !== 'string' || !this.isValidDegreeFormat(value)) {
            return false;
        }
        var values = this.extractValuesFromDegrees(value);
        var inBoundary = function (val) { return val >= 0 && val < 60; };
        if (!inBoundary(values[1]) || !inBoundary(values[2])) {
            return false;
        }
        var boundaries = this.getDirectionBoundaries(direction);
        var digitValue = this.sumDegreeValues(values);
        return !(digitValue < boundaries[0] || digitValue > boundaries[1]);
    };
    CoordinatesService.prototype.isValidDigit = function (value, direction) {
        var val;
        if (typeof value === 'number' && !Number.isNaN(value)) {
            val = value;
        }
        else if (typeof value === 'string') {
            val = Number(value);
            if (Number.isNaN(val)) {
                return false;
            }
        }
        else {
            return false;
        }
        var boundaries = this.getDirectionBoundaries(direction);
        return !(value < boundaries[0] || value > boundaries[1]);
    };
    CoordinatesService.prototype.isValidDegreeFormat = function (value) {
        return /^\d+°(\d+'(\d+")?)?(\s[NSWE])?$/.test(value);
    };
    CoordinatesService.prototype.transformNumberToDegrees = function (value) {
        var absoluteDegrees = Math.abs(Number(value));
        var fullDegrees = Math.floor(absoluteDegrees);
        var remainingMinutes = (absoluteDegrees - fullDegrees) * 60;
        var minutes = Math.floor(remainingMinutes);
        var remainingSeconds = (remainingMinutes - minutes) * 60;
        var seconds = Math.round(remainingSeconds);
        if (seconds === 60) {
            minutes += 1;
            seconds = 0;
        }
        if (minutes === 60) {
            fullDegrees += 1;
            minutes = 0;
        }
        return (fullDegrees + "\u00B0" + minutes + "'" + seconds + "\"");
    };
    CoordinatesService.prototype.transformDegreesToNumber = function (value) {
        return this.sumDegreeValues(this.extractValuesFromDegrees(value)) * (this.isMinusHemisphere(value) ? -1 : 1);
    };
    CoordinatesService.prototype.isMinusHemisphere = function (value) {
        return /[SW]$/.test(value);
    };
    CoordinatesService.prototype.sumDegreeValues = function (values) {
        return values[0] + values[1] / 60 + values[2] / (60 * 60);
    };
    CoordinatesService.prototype.resolveDirection = function (degrees, direction) {
        if (direction === direction_enum_1.Direction.Latitude) {
            return degrees < 0 ? 'S' : 'N';
        }
        else {
            return degrees < 0 ? 'W' : 'E';
        }
    };
    CoordinatesService.prototype.extractValuesFromDegrees = function (value) {
        var values = value.split(/\D/).filter(function (part) { return Boolean(part); }).map(function (v) { return Number(v); });
        return values.concat(Array(3 - values.length).fill(0));
    };
    CoordinatesService.prototype.getDirectionBoundaries = function (direction) {
        return !direction || direction === direction_enum_1.Direction.Longitude ? [-180, 180] : [-90, 90];
    };
    return CoordinatesService;
}());
exports.CoordinatesService = CoordinatesService;
//# sourceMappingURL=coordinates.service.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/direction.enum.js":
/*!****************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/direction.enum.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Latitude"] = 1] = "Latitude";
    Direction[Direction["Longitude"] = 2] = "Longitude";
})(Direction = exports.Direction || (exports.Direction = {}));
//# sourceMappingURL=direction.enum.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/getTransformationType.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/getTransformationType.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transformation_type_enum_1 = __webpack_require__(/*! ./transformation-type.enum */ "./node_modules/angular-coordinates/src/transformation-type.enum.js");
exports.getValidTransformationType = function (type) {
    if (!type || (type !== transformation_type_enum_1.TransformationType.ToDegrees && type !== transformation_type_enum_1.TransformationType.ToDigit)) {
        return transformation_type_enum_1.TransformationType.ToDegrees;
    }
    else {
        return type;
    }
};
//# sourceMappingURL=getTransformationType.js.map

/***/ }),

/***/ "./node_modules/angular-coordinates/src/transformation-type.enum.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-coordinates/src/transformation-type.enum.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TransformationType;
(function (TransformationType) {
    TransformationType[TransformationType["ToDigit"] = 1] = "ToDigit";
    TransformationType[TransformationType["ToDegrees"] = 2] = "ToDegrees";
})(TransformationType = exports.TransformationType || (exports.TransformationType = {}));
//# sourceMappingURL=transformation-type.enum.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/qiblat/qiblat.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/qiblat/qiblat.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        Qiblat\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <ion-content >\n     <div class=\"ion-text-center\">\n        <h2>\n          {{cardinalPosition}} {{compassDegree}}&deg;\n        </h2>\n     </div> \n\n      <img id=\"image\" src=\"../../../assets/images/compass.svg\">\n        <img src=\"../../../assets/images/compass-arrow.png\">\n\n        <div class=\"ion-text-center\">\n          <h2>\n            {{latCoords}} | {{lngCoords}}&deg;\n          </h2>\n       </div> \n   \n      </ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qiblat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qiblat.page */ "./src/app/page/qiblat/qiblat.page.ts");







var routes = [
    {
        path: '',
        component: _qiblat_page__WEBPACK_IMPORTED_MODULE_6__["QiblatPage"]
    }
];
var QiblatPageModule = /** @class */ (function () {
    function QiblatPageModule() {
    }
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
    return QiblatPageModule;
}());



/***/ }),

/***/ "./src/app/page/qiblat/qiblat.page.scss":
/*!**********************************************!*\
  !*** ./src/app/page/qiblat/qiblat.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content img {\n  position: absolute;\n  max-width: 450px;\n  max-height: 450px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 30%;\n}\nion-content #div {\n  background: black;\n  height: 100%;\n  background-size: cover;\n}\nion-footer geo-coordinates {\n  color: black;\n  font-weight: 500;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXphdGhheml6YW4vRGVza3RvcC9kaXJlY3Rpb24vcXVyYW5hcHAvc3JjL2FwcC9wYWdlL3FpYmxhdC9xaWJsYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3FpYmxhdC9xaWJsYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0RSO0FER0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0RSO0FETUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3FpYmxhdC9xaWJsYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3A6IDMwJTtcbiAgICB9XG4gICAgI2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGdlby1jb29yZGluYXRlcyB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAzMCU7XG59XG5pb24tY29udGVudCAjZGl2IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWZvb3RlciBnZW8tY29vcmRpbmF0ZXMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/device-orientation/ngx */ "./node_modules/@ionic-native/device-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_coordinates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-coordinates */ "./node_modules/angular-coordinates/index.js");
/* harmony import */ var angular_coordinates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_coordinates__WEBPACK_IMPORTED_MODULE_4__);





var QiblatPage = /** @class */ (function () {
    function QiblatPage(deviceOrientation, platform) {
        this.deviceOrientation = deviceOrientation;
        this.platform = platform;
        this.direction = angular_coordinates__WEBPACK_IMPORTED_MODULE_4__["Direction"];
        this.type = angular_coordinates__WEBPACK_IMPORTED_MODULE_4__["TransformationType"];
        this.latCoords = localStorage.getItem('latitude');
        this.lngCoords = localStorage.getItem('longitude');
    }
    QiblatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.deviceCompassInfo();
        });
    };
    QiblatPage.prototype.ngOnDestroy = function () {
        this.deviceSubscription.unsubscribe();
    };
    QiblatPage.prototype.deviceCompassInfo = function () {
        var _this = this;
        this.deviceOrientation.getCurrentHeading().then(function (data) {
            _this.rotateCompass(data.magneticHeading);
            _this.compassDegree = Math.floor(data.magneticHeading);
            _this.cardinalPosition = _this.getCardinal(_this.compassDegree);
        }, function (error) { return console.log(error); });
        this.deviceSubscription = this.deviceOrientation.watchHeading().subscribe(function (data) {
            _this.rotateCompass(data.magneticHeading);
            _this.compassDegree = Math.floor(data.magneticHeading);
            _this.cardinalPosition = _this.getCardinal(_this.compassDegree);
        });
    };
    QiblatPage.prototype.rotateCompass = function (deg) {
        document.querySelector('#image').style.transform = "rotate(" + -deg + "deg)";
    };
    QiblatPage.prototype.getCardinal = function (angle) {
        var directions = 8;
        var degree = 360 / directions;
        angle = angle + degree / 2;
        if (angle >= 0 * degree && angle < 1 * degree) {
            return 'N';
        }
        if (angle >= 1 * degree && angle < 2 * degree) {
            return 'NE';
        }
        if (angle >= 2 * degree && angle < 3 * degree) {
            return 'E';
        }
        if (angle >= 3 * degree && angle < 4 * degree) {
            return 'SE';
        }
        if (angle >= 4 * degree && angle < 5 * degree) {
            return 'S';
        }
        if (angle >= 5 * degree && angle < 6 * degree) {
            return 'SW';
        }
        if (angle >= 6 * degree && angle < 7 * degree) {
            return 'W';
        }
        if (angle >= 7 * degree && angle < 8 * degree) {
            return 'NW';
        }
        return 'N';
    };
    QiblatPage.ctorParameters = function () { return [
        { type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    QiblatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qiblat',
            template: __webpack_require__(/*! raw-loader!./qiblat.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/qiblat/qiblat.page.html"),
            styles: [__webpack_require__(/*! ./qiblat.page.scss */ "./src/app/page/qiblat/qiblat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], QiblatPage);
    return QiblatPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-qiblat-qiblat-module-es5.js.map