(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohamedmagdy/Downloads/work/AVICENNA ACADEMY/CenterCourses/src/main.ts */"zUnb");


/***/ }),

/***/ "3U8G":
/*!*****************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Student/lessons/lessons.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class LessonsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LessonsComponent.ɵfac = function LessonsComponent_Factory(t) { return new (t || LessonsComponent)(); };
LessonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonsComponent, selectors: [["app-lessons"]], decls: 325, vars: 0, consts: [[1, "container"], [1, "detailsStudent", 2, "overflow-x", "auto"], [1, "information"], [2, "width", "762px"], [1, "table"], ["scope", "col"], ["name", "timezone_offset", "id", "timezone-offset", 1, "span5", "form-control"], ["value", "-12:00"], ["value", "-11:00"], ["value", "-10:00"], ["value", "-09:50"], ["value", "-09:00"], ["value", "-08:00"], ["value", "-07:00"], ["value", "-06:00"], ["value", "-05:00"], ["value", "-04:50"], ["value", "-04:00"], ["value", "-03:50"], ["value", "-03:00"], ["value", "-02:00"], ["value", "-01:00"], ["value", "+00:00", "selected", "selected"], ["value", "+01:00"], ["value", "+02:00"], ["value", "+03:00"], ["value", "+03:50"], ["value", "+04:00"], ["value", "+04:50"], ["value", "+05:00"], ["value", "+05:50"], ["value", "+05:75"], ["value", "+06:00"], ["value", "+06:50"], ["value", "+07:00"], ["value", "+08:00"], ["value", "+08:75"], ["value", "+09:00"], ["value", "+09:50"], ["value", "+10:00"], ["value", "+10:50"], ["value", "+11:00"], ["value", "+11:50"], ["value", "+12:00"], ["value", "+12:75"], ["value", "+13:00"], ["value", "+14:00"], [1, "TimeTable"], [1, "table-responsive"], [1, "table", "table-bordered", "text-center"], [1, "bg-light-gray"], [1, "text-uppercase"], [1, "bg-sky", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"], [1, "margin-10px-top", "font-size14"], [1, "font-size13", "text-light-gray"], [1, "bg-green", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"], [1, "bg-yellow", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"], [1, "bg-purple", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"], [1, "bg-pink", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"], [1, "bg-lightred", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13"]], template: function LessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Student Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Student Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Class Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ahmed Mohmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "(GMT -12:00) Eniwetok, Kwajalein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "(GMT -11:00) Midway Island, Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(GMT -10:00) Hawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(GMT -9:30) Taiohae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(GMT -9:00) Alaska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(GMT -8:00) Pacific Time (US & Canada)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(GMT -7:00) Mountain Time (US & Canada)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(GMT -6:00) Central Time (US & Canada), Mexico City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(GMT -4:30) Caracas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(GMT -3:30) Newfoundland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "(GMT -3:00) Brazil, Buenos Aires, Georgetown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "(GMT -2:00) Mid-Atlantic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "(GMT -1:00) Azores, Cape Verde Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(GMT) Western Europe Time, London, Lisbon, Casablanca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "(GMT +2:00) Kaliningrad, South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "(GMT +3:30) Tehran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "(GMT +4:30) Kabul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "(GMT +5:45) Kathmandu, Pokhara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(GMT +6:00) Almaty, Dhaka, Colombo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "(GMT +6:30) Yangon, Mandalay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "(GMT +7:00) Bangkok, Hanoi, Jakarta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(GMT +8:45) Eucla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "(GMT +9:30) Adelaide, Darwin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "(GMT +10:00) Eastern Australia, Guam, Vladivostok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "(GMT +10:30) Lord Howe Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "(GMT +11:00) Magadan, Solomon Islands, New Caledonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "(GMT +11:30) Norfolk Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "(GMT +12:45) Chatham Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "(GMT +13:00) Apia, Nukualofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "(GMT +14:00) Line Islands, Tokelau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Time Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Saturday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Wednesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Thursday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Marta Healy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Kate Alley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "James Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Kate Alley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Marta Healy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "James Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Kate Alley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Marta Healy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "James Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "James Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Marta Healy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Kate Alley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Ivana Wong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Marta Healy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".table-responsive[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  border-radius: 30px;\n}\n\ntd[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.detailsStudent[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  border-radius: 30px;\n  margin-bottom: 1%;\n  padding: 2%;\n}\n\n.detailsStudent[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  padding: 1%;\n  text-align: center;\n}\n\n.TimeTable[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  padding: 1%;\n  text-align: center;\n  margin-top: 5%;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 30px;\n  margin-bottom: 2%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.bg-light-gray[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.bg-sky.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #00a2a7;\n}\n\n.bg-orange.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #af4305;\n}\n\n.bg-green.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #4ca520;\n}\n\n.bg-yellow.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #dcbf02;\n}\n\n.bg-pink.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #e82d8b;\n}\n\n.bg-purple.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #8343e8;\n}\n\n.bg-lightred.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #d84213;\n}\n\n.bg-sky[_ngcontent-%COMP%] {\n  background-color: #02c2c7;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e95601;\n}\n\n.bg-green[_ngcontent-%COMP%] {\n  background-color: #5bbd2a;\n}\n\n.bg-yellow[_ngcontent-%COMP%] {\n  background-color: #f0d001;\n}\n\n.bg-pink[_ngcontent-%COMP%] {\n  background-color: #ff48a4;\n}\n\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #9d60ff;\n}\n\n.bg-lightred[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n}\n\n.padding-15px-lr[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.padding-5px-tb[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.margin-10px-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.border-radius-5[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.margin-10px-top[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.font-size14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.text-light-gray[_ngcontent-%COMP%] {\n  color: #d6d5d5;\n}\n\n.font-size13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L2xlc3NvbnMvbGVzc29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUVJLGlDQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFTSTtFQUVJLGVBQUE7QUFQUjs7QUFTSTtFQUVJLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFQUjs7QUFRUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVVJO0VBRUksaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUlI7O0FBWUk7RUFDSSxnQkFBQTtBQVRSOztBQVdJO0VBQ0kseUJBQUE7QUFSUjs7QUFZWTtFQUNJLHdCQUFBO0FBVGhCOztBQVdZO0VBQ0ksd0JBQUE7QUFUaEI7O0FBWVE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBVlo7O0FBWVE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBVlo7O0FBZVk7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0FBWmhCOztBQWVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBYlo7O0FBZVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFiWjs7QUFnQkk7RUFDSSxtQ0FBQTtBQWJSOztBQWVJO0VBQ0ksbUNBQUE7QUFaUjs7QUFjSTtFQUNJLG1DQUFBO0FBWFI7O0FBYUk7RUFDSSxtQ0FBQTtBQVZSOztBQVlJO0VBQ0ksbUNBQUE7QUFUUjs7QUFXSTtFQUNJLG1DQUFBO0FBUlI7O0FBVUk7RUFDSSxtQ0FBQTtBQVBSOztBQVNJO0VBQ0kseUJBQUE7QUFOUjs7QUFRSTtFQUNJLHlCQUFBO0FBTFI7O0FBT0k7RUFDSSx5QkFBQTtBQUpSOztBQU1JO0VBQ0kseUJBQUE7QUFIUjs7QUFLSTtFQUNJLHlCQUFBO0FBRlI7O0FBSUk7RUFDSSx5QkFBQTtBQURSOztBQUdJO0VBQ0kseUJBQUE7QUFBUjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFBSTtFQUNJLG1CQUFBO0FBR1I7O0FBREk7RUFDSSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLGVBQUE7QUFNUjs7QUFKSTtFQUNJLGNBQUE7QUFPUjs7QUFMSTtFQUNJLGVBQUE7QUFRUiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvUHJvZmlsZXMvU3R1ZGVudC9sZXNzb25zL2xlc3NvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICAudGFibGUtcmVzcG9uc2l2ZVxuICAgIHtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuXG5cbiAgICB9XG4gICAgdGRcbiAgICB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmRldGFpbHNTdHVkZW50XG4gICAge1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggM3B4ICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgLmluZm9ybWF0aW9uXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5UaW1lVGFibGVcbiAgICB7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAzcHggI2NjYztcbiAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIGJvZHkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuYmctbGlnaHQtZ3JheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgfVxuICAgIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50YWJsZSB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgfVxuICAgICAgICB0aCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJnLXNreS5ib3gtc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMwMGEyYTc7XG4gICAgfVxuICAgIC5iZy1vcmFuZ2UuYm94LXNoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjYWY0MzA1O1xuICAgIH1cbiAgICAuYmctZ3JlZW4uYm94LXNoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjNGNhNTIwO1xuICAgIH1cbiAgICAuYmcteWVsbG93LmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggI2RjYmYwMjtcbiAgICB9XG4gICAgLmJnLXBpbmsuYm94LXNoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjZTgyZDhiO1xuICAgIH1cbiAgICAuYmctcHVycGxlLmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzgzNDNlODtcbiAgICB9XG4gICAgLmJnLWxpZ2h0cmVkLmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggI2Q4NDIxMztcbiAgICB9XG4gICAgLmJnLXNreSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMmMyYzc7XG4gICAgfVxuICAgIC5iZy1vcmFuZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk1NjAxO1xuICAgIH1cbiAgICAuYmctZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiZDJhO1xuICAgIH1cbiAgICAuYmcteWVsbG93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZDAwMTtcbiAgICB9XG4gICAgLmJnLXBpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0OGE0O1xuICAgIH1cbiAgICAuYmctcHVycGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlkNjBmZjtcbiAgICB9XG4gICAgLmJnLWxpZ2h0cmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgICB9XG4gICAgLnBhZGRpbmctMTVweC1sciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLnBhZGRpbmctNXB4LXRiIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLm1hcmdpbi0xMHB4LWJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5ib3JkZXItcmFkaXVzLTUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5tYXJnaW4tMTBweC10b3Age1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuZm9udC1zaXplMTQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50ZXh0LWxpZ2h0LWdyYXkge1xuICAgICAgICBjb2xvcjogI2Q2ZDVkNTtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZTEzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG4gICAge1xuICAgICAgICBcbiAgICBcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuICAgIHtcbiAgICAgICAgXG4gICAgICBcbiAgICBcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG4gICAge1xuICAgIFxuICAgICBcbiAgICBcbiAgICB9ICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxuICAgIHtcbiAgICAgICAgXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lessons',
                templateUrl: './lessons.component.html',
                styleUrls: ['./lessons.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "77dL":
/*!*******************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/parent/parent.component.ts ***!
  \*******************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ParentComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "83.333333%";
        document.getElementById('footer').style.marginLeft = "16.666667%";
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 215, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "s1"], [1, "col-12"], [1, "row"], [1, "col-2", "left-part"], [1, "content", "setting", "text-center", "active"], [1, "fas", "fa-user"], [1, "d-none", "d-sm-block"], ["data-toggle", "modal", "data-target", "#ConfirmEmail", 1, "content", "LogOut", "text-center"], [1, "fas", "fa-sign-out-alt"], [1, "col-10", "right-part"], [1, "student-profile", "py-4"], [1, "container"], [1, "col-lg-4"], [1, "card", 2, "border", "none"], [1, "card-header", "bg-transparent", "text-center", 2, "border", "none"], [1, "changePhoto", 2, "position", "relative"], ["data-toggle", "modal", "data-target", "#ChangeProfilePhoto", 1, "cover"], ["src", "../../../../assets/father2.jpg", "alt", "Teacher", 1, "profile_img"], [1, "row", "name"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangeUserName", 1, "fas", "fa-edit"], [1, "col-lg-8"], [1, "card", "shadow-sm"], [1, "card-header", "bg-transparent", "border-0"], [1, "mb-0"], [1, "far", "fa-clone", "pr-1"], [1, "card-body", "pt-0"], [1, "table", "table-bordered"], ["width", "30%"], ["width", "2%"], [2, "height", "26px"], [1, "fas", "fa-unlock"], [1, "form-group", "col-lg-12", "text-center"], ["type", "password", "placeholder", "Old Password", "id", "OldPass", "name", "OldPass", 1, "form-control", "OldPass"], ["type", "password", "placeholder", "New Password", "id", "NewPass", "name", "NewPass", 1, "form-control", "col-md-6"], ["type", "password", "placeholder", "Confirm Password", "id", "ConNewPass", "name", "ConNewPass", 1, "form-control", "col-md-6"], [1, "container", "sec-children", 2, "padding", "5%"], [1, "children"], [1, "card-header", "bg-transparent", "text-center"], ["src", "../../../../assets/child3.jpg", "alt", "student dp", 1, "profile_img"], [1, "card-body"], [1, "pr-1"], ["src", "../../../../assets/child.jpg", "alt", "student dp", 1, "profile_img"], ["src", "../../../../assets/child4.jpg", "alt", "student dp", 1, "profile_img"], ["ConfirmEmail", "ngForm"], ["id", "ConfirmEmail", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", 2, "margin-top", "20%"], [1, "modal-content"], [1, "modal-header"], [2, "color", "rgb(7, 12, 44)"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["role", "form-inline"], [2, "color", "rgb(83, 83, 83)"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"], ["id", "ChangeUserName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["type", "text", "placeholder", "New UserName", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"], ["id", "ChangeProfilePhoto", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "btn", "btn-default"], ["type", "file"], [1, "btn", "btn-success"]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ibrahim khalil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "General Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "name@mail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "123456789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Australia,NORTH SYDNEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Masa - Mohamed - Mahmoud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Masa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Student ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "2-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Section:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Student ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "4-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Section:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Mahmoud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Student ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "3-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Section:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "form", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Confirm Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h5", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Are You Sure Want LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Change UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Change Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".children[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  border-radius: 30px;\n  margin-bottom: 1%;\n  padding: 2%;\n  text-align: center;\n  margin-top: 2%;\n  margin-bottom: 8%;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n  padding: 10%;\n  margin-left: 16.666667%;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: #070c2c;\n  padding-top: 6%;\n  margin-top: 2%;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #5fcfdf;\n  color: white !important;\n  outline: 0px !important;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  cursor: pointer;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .LogOut[_ngcontent-%COMP%] {\n  bottom: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.student-profile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 2%;\n}\n\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border: 10px solid #ccc;\n  border-radius: 50%;\n}\n\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n}\n\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n\n#NewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-right: 2%;\n  margin-left: auto;\n}\n\n#ConNewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-left: 2%;\n  margin-right: auto;\n}\n\n.OldPass[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.name[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n}\n\n.name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border-radius: 50%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover {\n  background: rgba(7, 12, 45, 0.53);\n}\n\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 25px;\n  color: white;\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .sec-children[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n    width: 120px !important;\n    height: 120px !important;\n  }\n  .sec-children[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0% !important;\n  }\n  .sec-children[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 26%;\n  }\n\n  .sec-children[_ngcontent-%COMP%] {\n    padding: 15% !important;\n  }\n  .sec-children[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n    width: 170px !important;\n    height: 170px !important;\n  }\n  .sec-children[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 5% !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 12% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 12% 1%;\n  }\n  .s1[_ngcontent-%COMP%]   #NewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .s1[_ngcontent-%COMP%]   #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 4%;\n  }\n  .s1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 24%;\n  }\n\n  .sec-children[_ngcontent-%COMP%] {\n    padding: 15% !important;\n  }\n  .sec-children[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 5% !important;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 16% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 10%;\n  }\n  .s1[_ngcontent-%COMP%]   .sec-children[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n    width: 120px !important;\n    height: 120px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .sec-children[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .sec-children[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n\n  #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBRUMsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0csaUJBQUE7QUFGUDs7QUFRSTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVFJO0VBRUksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVNRO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQVJaOztBQVdRO0VBR0ksY0FBQTtFQUNBLGVBQUE7QUFYWjs7QUFjUTtFQUVJLFdBQUE7QUFiWjs7QUFlWTtFQUVJLGdCQUFBO0FBZGhCOztBQW1CUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBbEJaOztBQTZCQTtFQUNJLG1CQUFBO0FBMUJKOztBQTJCQztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQXpCRjs7QUEyQkc7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6Qko7O0FBNEJFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBMUJIOztBQTRCUTtFQUNMLGVBQUE7RUFDQSxXQUFBO0FBMUJIOztBQThCRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUE1Qkg7O0FBOEJFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTVCSDs7QUFtQ0E7RUFFQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWpDRDs7QUFvQ0E7RUFFQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbENEOztBQW9DQTtFQUVDLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBbENEOztBQW9DQTtFQVdDLGtCQUFBO0FBM0NEOztBQWtDRTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQWpDRjs7QUFtQ0M7RUFFQyxXQUFBO0FBbENGOztBQTBDRztFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeENIOztBQXlDRztFQUVDLGlDQUFBO0FBeENKOztBQXlDSTtFQUVDLGdDQUFBO0FBeENMOztBQTZDRztFQUVDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTVDSjs7QUFrREM7RUFLRTtJQUVDLHVCQUFBO0lBQ0Esd0JBQUE7RUFwREY7RUFzREM7SUFFQyxzQkFBQTtFQXJERjtFQXlEQztJQUVDLHdCQUFBO0VBeERGO0FBQ0Y7O0FBZ0VDO0VBSUk7SUFHRCxVQUFBO0VBbkVGOztFQXNFQTtJQUVDLHVCQUFBO0VBcEVEO0VBcUVDO0lBRUMsdUJBQUE7SUFDQSx3QkFBQTtFQXBFRjtFQXNFQztJQUVDLDRCQUFBO0VBckVGO0FBQ0Y7O0FBNkVDO0VBSUU7SUFFQywyQkFBQTtFQS9FRjtFQWtGQztJQUVDLGVBQUE7RUFqRkY7RUFvRkM7SUFFQyxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQW5GRjtFQXNGQztJQUVDLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQXJGRjtFQTBGRztJQUdELFVBQUE7RUExRkY7O0VBOEZEO0lBRUMsdUJBQUE7RUE1RkE7RUE4RkE7SUFFQyw0QkFBQTtFQTdGRDtBQUNGOztBQXFHQztFQUlFO0lBRUMsMkJBQUE7RUF2R0Y7RUE0R0c7SUFHRCxVQUFBO0VBNUdGO0VBa0hDO0lBRUMsdUJBQUE7SUFDQSx3QkFBQTtFQWpIRjtFQW1IQztJQUVDLHNCQUFBO0VBbEhGO0VBc0hDO0lBRUMsd0JBQUE7RUFySEY7O0VBNkhBO0lBRUMsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFQTNIRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgIC5jaGlsZHJlblxuICAge1xuXHQgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggM3B4ICNjY2M7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdCAgIG1hcmdpbi1ib3R0b206IDElO1xuXHQgICBwYWRkaW5nOiAyJTtcblx0ICAgdGV4dC1hbGlnbjogY2VudGVyOyBcblx0ICAgbWFyZ2luLXRvcDogMiU7XG5cdCAgIG1hcmdpbi1ib3R0b206IDglO1xuXHQgICB3aWR0aDogMTAwJTtcblx0ICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFxuICAgfVxuLnMxXG57XG4gICAgLnJpZ2h0LXBhcnRcbntcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG59XG4gICAgLmxlZnQtcGFydFxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDcsIDEyLCA0NCkgO1xuICAgICAgICBwYWRkaW5nLXRvcDogNiU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBcbiAgICAgICAgLmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZmNmZGY7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG91dGxpbmU6MHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgaDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICBcbiAgICAgICAgICAgIC5mYXNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLkxvZ091dFxuICAgICAgICB7XG4gICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICBcbiAgICBcblxufVxuXG5cbi5zdHVkZW50LXByb2ZpbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdC5jYXJkIHtcblx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xuXHRcdHBhZGRpbmc6IDIlO1xuICAgICAgICAuY2FyZC1oZWFkZXIge1xuXHRcdFx0LnByb2ZpbGVfaW1nIHtcblx0XHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRcdGJvcmRlcjogMTBweCBzb2xpZCAjY2NjO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGgzIHtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0fVxuICAgICAgICBwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblx0fVxuICAgIC50YWJsZSB7XG5cdFx0dGgge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHR9XG5cdFx0dGQge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHR9XG5cdH1cbn1cblxuXG5cbiNOZXdQYXNzXG57XG5cdG1heC13aWR0aDogMzglO1xuXHRtYXJnaW4tcmlnaHQ6IDIlO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblxufVxuI0Nvbk5ld1Bhc3NcbnsgIFxuXHRtYXgtd2lkdGg6IDM4JTtcblx0bWFyZ2luLWxlZnQ6IDIlO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uT2xkUGFzc1xue1xuXHR3aWR0aDo4MCU7XG5cdG1hcmdpbi1sZWZ0OmF1dG8gO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG8gO1xufVxuLm5hbWVcbntcblx0IC5mYS1lZGl0XG5cdHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDIlO1xuXHR9XG5cdGgzXG5cdHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblx0XG5cdC5jaGFuZ2VQaG90b1xuXHR7XG5cdFx0IC5jb3ZlclxuXHRcdHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdGhlaWdodDogMTUwcHg7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdCY6aG92ZXJcblx0XHRcdHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSg3LCAxMiwgNDUsIDAuNTMpO1xuXHRcdFx0XHRzcGFuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcblxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNwYW5cblx0XHRcdHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG5cdHtcblx0XHQuc2VjLWNoaWxkcmVuXG5cdFx0e1xuXHRcdFx0XG5cdFx0XHQucHJvZmlsZV9pbWdcblx0XHRcdHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdC5jYXJkLWhlYWRlclxuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcblx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0LmNhcmQtYm9keSBcblx0XHRcdHtcblx0XHRcdFx0cGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cdFxuXHRcdFxuXHRcblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG5cdHtcblx0XHQubmFtZVxuICAgICAgICAge1xuXHQgIFx0XHQuZmEtZWRpdFxuXHRcdFx0e1xuXHRcdFx0XHRcblx0XHRcdFx0cmlnaHQ6IDI2JTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnNlYy1jaGlsZHJlblxuXHRcdHtcblx0XHRcdHBhZGRpbmc6IDE1JSAhaW1wb3J0YW50O1xuXHRcdFx0LnByb2ZpbGVfaW1nXG5cdFx0XHR7XG5cdFx0XHRcdHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQuY2FyZFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1JSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcblxuXHRcdH1cblx0XHRcblx0ICBcblx0XG5cdH1cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG5cdHtcblx0XHQuczFcblx0XHR7XG5cdFx0IC5sZWZ0LXBhcnRcblx0XHQge1xuXHRcdFx0IHBhZGRpbmctdG9wOiAxMiUgIWltcG9ydGFudDtcbiBcblx0XHQgfVxuXHRcdCAucmlnaHQtcGFydFxuXHRcdCB7XG5cdFx0XHQgcGFkZGluZzogMTIlIDElO1xuXHRcdFx0XG5cdFx0IH1cblx0XHQgI05ld1Bhc3Ncblx0XHQge1xuXHRcdFx0IG1heC13aWR0aDogODAlO1xuXHRcdFx0IG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdCBtYXJnaW4tbGVmdDogYXV0bztcblx0XHQgXG5cdFx0IH1cblx0XHQgI0Nvbk5ld1Bhc3Ncblx0XHQgeyAgXG5cdFx0XHQgbWF4LXdpZHRoOiA4MCU7XG5cdFx0XHQgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdFx0IG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0IG1hcmdpbi10b3A6IDQlO1xuXHRcdFx0IFxuXHRcdCB9XG5cdFx0IC5uYW1lXG4gICAgICAgICB7XG5cdCAgXHRcdC5mYS1lZGl0XG5cdFx0XHR7XG5cdFx0XHRcdFxuXHRcdFx0XHRyaWdodDogMjQlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuc2VjLWNoaWxkcmVuXG5cdHtcblx0XHRwYWRkaW5nOiAxNSUgIWltcG9ydGFudDtcblx0XG5cdFx0LmNhcmRcblx0XHR7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1JSAhaW1wb3J0YW50O1xuXHRcdH1cblxuXG5cdH1cblx0XG5cdCBcblx0XG5cdH0gICAgXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxuXHR7XG5cdFx0LnMxXG5cdFx0e1xuXHRcdCAubGVmdC1wYXJ0XG5cdFx0IHtcblx0XHRcdCBwYWRkaW5nLXRvcDogMTYlICFpbXBvcnRhbnQ7XG5cdFxuXHRcdCB9XG5cdFx0IC5uYW1lXG4gICAgICAgICB7XG5cdCAgXHRcdC5mYS1lZGl0XG5cdFx0XHR7XG5cdFx0XHRcdFxuXHRcdFx0XHRyaWdodDogMTAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuc2VjLWNoaWxkcmVuXG5cdFx0e1xuXHRcdFx0XG5cdFx0XHQucHJvZmlsZV9pbWdcblx0XHRcdHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdC5jYXJkLWhlYWRlclxuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcblx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0LmNhcmQtYm9keSBcblx0XHRcdHtcblx0XHRcdFx0cGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cdFxuXHRcblx0XHR9ICBcblx0XHQjQ29uTmV3UGFzc1xuXHRcdHsgIFxuXHRcdFx0bWF4LXdpZHRoOiA4MCU7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdG1hcmdpbi10b3A6IDYlICFpbXBvcnRhbnQ7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8/4/":
/*!**************************************************************!*\
  !*** ./src/app/AllComponents/about-us/about-us.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");





function AboutUsComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mohamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutUsComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hossam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutUsComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ahmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutUsComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mohamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutUsComponent_ng_template_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hossam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutUsComponent_ng_template_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ahmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutUsComponent {
    constructor(wowService) {
        this.wowService = wowService;
    }
    ngOnInit() {
        this.wowService.init();
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            autoplay: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 102, vars: 1, consts: [[1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "intro", "fadeInUp", "wow", "ftco-animated"], [1, "lead"], [1, "s2"], [1, "vc_row", "wpb_row", "row", "pt-50", "bussiness_box", "justify-content-center"], ["data-wow-offset", "250", 1, "vc_column_container", "col-md-12", "fadeInUp", "wow", "ftco-animated"], [1, "wpb_wrapper", "vc_column-inner"], [1, "vc_custom_heading", "text-gray", "text-center", "align-left"], ["src", "../../../assets/target.png", "alt", "", 2, "width", "7%", "object-fit", "contain"], [1, "wpb_text_column", "wpb_content_element", "text-justify"], [1, "wpb_wrapper"], [1, "ftco-services", "ftco-no-pb", "text-center"], [1, "fadeInUp", "wow", "ftco-animated", 2, "margin-top", "8%", "margin-bottom", "5%"], [1, "container-wrap"], [1, "row", "no-gutters"], [1, "d-flex", "services", "text-center", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "fadeInUp", "wow", "ftco-animated", 2, "background", "rgb(7, 12, 44)"], [1, "media", "block-6", "d-block", "text-center", 2, "width", "100%"], [1, "media-body", "p-2", "mt-3", "text-center", 2, "width", "100%"], [1, "heading"], [1, "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-tertiary", "fadeInUp", "wow", "ftco-animated", 2, "background", "#5fcfdf"], [1, "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-fifth", "fadeInUp", "wow", "ftco-animated", 2, "background", "rgb(7, 12, 44)"], [1, "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-quarternary", "fadeInUp", "wow", "ftco-animated", 2, "background", "#5fcfdf"], [1, "media-body", "p-2", "mt-3", 2, "width", "100%"], [1, "heading", "text-center"], ["data-stellar-background-ratio", "0.5", 1, "ftco-intro"], [1, "row"], [1, "col-md-9"], [1, "mb-0"], [1, "col-md-3", "d-flex", "align-items-center", "align-items-centerMQ"], ["routerLink", "/Course", 1, "mb-0"], [1, "btn", "btn-secondary", "px-4", "py-3"], [1, "ftco-section", "testimony-section"], [1, "row", "justify-content-center", "mb-5", "pb-2"], [1, "col-md-8", "text-center", "heading-section", "ftco-animate", "fadeInUp", "ftco-animated"], [1, "mb-4", "AboutUsh2MQ"], [1, "AboutUsPMQ"], [1, "row", "ftco-animate", "justify-content-center", "fadeInUp", "ftco-animated"], [1, "col-md-12", 2, "margin-top", "5%"], [3, "options"], ["carouselSlide", ""], [1, "itemWidthXS", 2, "width", "400px", "margin-right", "auto", "margin-left", "auto"], [1, "testimony-wrap", "d-flex"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father1.jpg)"], [1, "text", "ml-2"], [1, "quote", "d-flex", "align-items-center", "justify-content-center"], [1, "icon-quote-left"], [1, "MQPOwl"], [1, "name"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father2.jpg)"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father4.jpg)"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Avicenna Academy is an Australian private institute aims to provide quality and deep education to Primary and Secondary students with a focus on Mathematics and Science via online tutoring and support. Our main programs is developed based on Singapore's education system which has been consistently ranked as one of the highest in the world by the Organization for Economic Co-operation and Development (OECD). We do also provide customised programs for different countries' curriculums depending on the student'sw requirements. Our tutors are well selected - to ensure they can effectively value-add to the learning process - qualified, experienced, and passionate. they consider every student as a challenge, track the progress & the soft skills of the student in the class, and transparently share the feedback with the parents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "MISSION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Empowering every student with our innovative teaching methodology to enhance their confidence in learning and unleash thier potential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Excellence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Innovation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Perseverance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Respect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Teaching Your Child Some Good Manners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Take a Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "What Parents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Says About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "owl-carousel-o", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AboutUsComponent_ng_template_96_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AboutUsComponent_ng_template_97_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AboutUsComponent_ng_template_98_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AboutUsComponent_ng_template_99_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, AboutUsComponent_ng_template_100_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AboutUsComponent_ng_template_101_Template, 11, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"]], styles: [".aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n\n.s2[_ngcontent-%COMP%] {\n  padding: 0% 20%;\n  position: relative;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column_container[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n  border: 1px solid #bfbfbf;\n  height: 100%;\n  border-radius: 18px;\n  padding: 60px 40px 40px !important;\n  transition: all 0.5s ease;\n  box-shadow: 2px 2px 12px 3px #ccc;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n  line-height: 36px;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 18px;\n  line-height: 30px;\n  color: #333;\n  font-weight: 300;\n  text-align: justify;\n}\n\n.ftco-intro[_ngcontent-%COMP%] {\n  background-image: url('teacherStudents.jpeg');\n  background-attachment: fixed;\n  padding: 8em 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.ftco-intro[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.5;\n  background: #070c2c;\n}\n\n.ftco-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 36px;\n  font-weight: 600;\n}\n\n.ftco-intro[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #5fcfdf;\n  border: 1px solid #5fcfdf;\n  color: #fff;\n}\n\n.testimony-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7em 0;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 600;\n  color: #5fcfdf;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #101850;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Work Sans\", Arial, sans-serif;\n  background: #fff;\n  font-size: 16px;\n  line-height: 1.8;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.testimony-section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\n  padding-top: 4em;\n  padding-bottom: 2em;\n  position: relative;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 18px;\n  line-height: 30px;\n  color: #252525;\n  font-weight: 300;\n  text-align: justify;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  margin-bottom: 0;\n  color: #5fcfdf;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  position: relative;\n}\n\n.ftco-services[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: -7%;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .no-gutters[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  display: block;\n  width: 20%;\n  position: relative;\n  transition: all 0.3s ease;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  line-height: 1.3;\n  position: relative;\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  margin: 0 auto;\n  margin-top: -60px;\n  border-radius: 50%;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  color: #fff;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .p-2[_ngcontent-%COMP%] {\n  padding: 0.5rem !important;\n}\n\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .mt-3[_ngcontent-%COMP%], .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n\n.intro[_ngcontent-%COMP%] {\n  padding: 1% 10%;\n  background: rgba(7, 12, 44, 0.952);\n  margin-bottom: 3%;\n}\n\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n@media (max-width: 767.98px) {\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-bottom: 3.5em !important;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s2[_ngcontent-%COMP%] {\n    padding: 0% 5%;\n  }\n  .s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n    padding: 40px 30px 30px !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s2[_ngcontent-%COMP%] {\n    padding: 0% 0%;\n  }\n  .s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n    padding: 40px 30px 30px !important;\n  }\n  .s2[_ngcontent-%COMP%]   .wpb_wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsh2MQ[_ngcontent-%COMP%] {\n    font-size: 34px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsPMQ[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .ftco-services[_ngcontent-%COMP%]   .no-gutters[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .s2[_ngcontent-%COMP%] {\n    padding: 0% 20%;\n  }\n  .s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n    padding: 40px 30px 30px !important;\n  }\n  .s2[_ngcontent-%COMP%]   .wpb_wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%]   .align-items-centerMQ[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n  }\n\n  .testimony-section[_ngcontent-%COMP%] {\n    padding: 7em 4%;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsh2MQ[_ngcontent-%COMP%] {\n    font-size: 32px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsPMQ[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    height: 100px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .MQPOwl[_ngcontent-%COMP%] {\n    text-align: left !important;\n    font-family: auto !important;\n    font-size: 15px !important;\n  }\n\n  .ftco-services[_ngcontent-%COMP%]   .no-gutters[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .s2[_ngcontent-%COMP%] {\n    padding: 0% 15%;\n  }\n  .s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n    padding: 40px 30px 30px !important;\n  }\n  .s2[_ngcontent-%COMP%]   .wpb_wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%]   .align-items-centerMQ[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n  }\n\n  .itemWidthXS[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%] {\n    background: #070c2cfa !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBQ0U7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFFRSxhQUFBO0FBREo7O0FBRUk7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUROOztBQUVNO0VBRUUsV0FBQTtFQUNBLGlEQUFBO0FBRFI7O0FBRVE7RUFDRSxXQUFBO0FBQVY7O0FBS0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFNQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtBQUpGOztBQUtFO0VBRUUsaUJBQUE7QUFKSjs7QUFNRTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBTEo7O0FBT0k7RUFFRSxxQkFBQTtBQU5OOztBQVNJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQVBOOztBQVNNO0VBRUUsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUlI7O0FBY0E7RUFFRSw2Q0FBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQWJGOztBQWNFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWdCSTtFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFmTjs7QUFpQk07RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQWZSOztBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQWtCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFoQlI7O0FBaUJRO0VBQ0UsY0FBQTtBQWZWOztBQWtCUTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBakJWOztBQXVCTTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXRCUjs7QUF5Qkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBdkJOOztBQXdCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF2QlI7O0FBMEJNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBeEJSOztBQTBCTTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBRUEsMEJBQUE7QUExQlI7O0FBNEJRO0VBRUUseUJBQUE7RUFDQSxrQkFBQTtBQTNCVjs7QUFtQ0k7RUFHQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBbENKOztBQW1DSTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FBbENSOztBQW9DSztFQUVHLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFLQSx5QkFBQTtBQW5DUjs7QUFvQ1E7RUFJSSxhQUFBO0VBR0EsdUJBQUE7QUFuQ1o7O0FBcUNRO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFJQSxrQkFBQTtBQXBDWjs7QUF1Q1E7RUFFSSwrQkFBQTtBQXRDWjs7QUF1Q1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBckNoQjs7QUF1Q2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBckNwQjs7QUF3Q1M7RUFFRywwQkFBQTtBQXZDWjs7QUF5Q1U7RUFFRSwyQkFBQTtBQXhDWjs7QUE2Q0E7RUFFRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQTNDRjs7QUE0Q0U7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUEzQ0o7O0FBOENBO0VBTVE7SUFFTSxnQ0FBQTtFQWpEWjtBQUNGOztBQXVEQTtFQUVFO0lBRUUsY0FBQTtFQXZERjtFQXdERTtJQUVFLGtDQUFBO0VBdkRKO0FBQ0Y7O0FBNkRBO0VBRUU7SUFFRSxjQUFBO0VBN0RGO0VBOERFO0lBRUUsa0NBQUE7RUE3REo7RUFrRUk7SUFFRSwwQkFBQTtFQWpFTjs7RUEyRUU7SUFFRSwwQkFBQTtFQXpFSjtFQTRFRTtJQUVFLDBCQUFBO0VBM0VKOztFQW9GSTtJQUVFLFdBQUE7RUFsRk47QUFDRjs7QUEyRkE7RUFFRTtJQUVFLGVBQUE7RUEzRkY7RUE0RkU7SUFFRSxrQ0FBQTtFQTNGSjtFQWdHSTtJQUVFLDBCQUFBO0VBL0ZOOztFQXlHRTtJQUVFLHlCQUFBO0VBdkdKOztFQTJHQTtJQUVFLGVBQUE7RUF6R0Y7RUEyR0U7SUFFRSwwQkFBQTtFQTFHSjtFQTZHRTtJQUVFLDBCQUFBO0VBNUdKO0VBK0dFO0lBRUUsdUJBQUE7SUFDQSx3QkFBQTtFQTlHSjtFQWdIRTtJQUVFLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtFQS9HSjs7RUF3SEk7SUFFRSxXQUFBO0VBdEhOO0FBQ0Y7O0FBMkhBO0VBRUU7SUFFRSxlQUFBO0VBM0hGO0VBNEhFO0lBRUUsa0NBQUE7RUEzSEo7RUFnSUk7SUFFRSwwQkFBQTtFQS9ITjs7RUF5SUU7SUFFRSx5QkFBQTtFQXZJSjs7RUEySUE7SUFFRSxzQkFBQTtFQXpJRjs7RUE0SUE7SUFFRSxnQ0FBQTtFQTFJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZVxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNWZjZmRmO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmhlcm8td3JhcFxuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5vdmVybGF5IFxuICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBvcGFjaXR5OiAuMztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMTIsIDQ0KTtcbiAgfVxuICAuc2xpZGVyLXRleHQgXG4gIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIC5icmVhZGNydW1ic1xuICAgICB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIHNwYW5cbiAgICAgICB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJyZWFkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiB9XG4uczJcbntcbiAgcGFkZGluZzogMCUgMjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC52Y19jb2x1bW5fY29udGFpbmVyXG4gIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuICAudmNfY29sdW1uLWlubmVyXG4gIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDYwcHggNDBweCA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggM3B4ICNjY2M7XG4gICAgXG4gICAgJjpob3ZlclxuICAgIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgXG4gICAgfVxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICB9XG4gICAgICBwXG4gICAgICB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgXG4gICAgICB9XG5cbiAgfVxufVxuLmZ0Y28taW50cm8gXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RlYWNoZXJTdHVkZW50cy5qcGVnJyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAtODRweDtcbiAgcGFkZGluZzogOGVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gICAgXG4gICAgfVxuICAgIGgyXG4gICAgIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVmY2ZkZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgfVxuICAudGVzdGltb255LXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA3ZW0gMDtcbiAgICAuaGVhZGluZy1zZWN0aW9uXG4gICAge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDE2LCAyNCwgODApOztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcFxuICAgICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC5vd2wtY2Fyb3VzZWxcbiAgICB7XG4gICAgICAub3dsLXN0YWdlLW91dGVyXG4gICAgICAge1xuICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9ueS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICAgXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgIH1cbiAgICAgIC51c2VyLWltZ1xuICAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRcbiAgICAgICAgIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICAgXG4gICBcbiAgXG4gICAgfVxuICAgIC5mdGNvLXNlcnZpY2VzXG57XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tdG9wOiAtNyU7XG4gICAgLm5vLWd1dHRlcnNcbiAgICAge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICB9XG4gICAgIC5zZXJ2aWNlc1xuICAgICAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC5tZWRpYVxuICAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvblxuICAgICAgICAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLm1lZGlhLWJvZHlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAucC0yXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tdC0zLCAubXktM1xuICAgICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICB9XG5cbn0gXG4uaW50cm9cbntcbiAgcGFkZGluZzogMSUgMTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDcsIDEyLCA0NCwgMC45NTIpO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgcFxuICB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpXG57XG4gICAgICAuZnRjby1zZXJ2aWNlc1xuICAgICAge1xuICAgICAgICAuc2VydmljZXNcbiAgICAgICAge1xuICAgICAgICAubWVkaWEtYm9keVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41ZW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG57XG4gIC5zMlxuICB7XG4gICAgcGFkZGluZzogMCUgNSU7XG4gICAgLnZjX2NvbHVtbi1pbm5lclxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDQwcHggMzBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICB9XG5cbiAgfSAgIFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG57XG4gIC5zMlxuICB7XG4gICAgcGFkZGluZzogMCUgMCU7XG4gICAgLnZjX2NvbHVtbi1pbm5lclxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDQwcHggMzBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICB9XG4gICAgLndwYl93cmFwcGVyXG4gICAge1xuICAgICAgcFxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcblxuXG4gICAgICB9XG4gXG4gICAgfVxuXG4gIH0gIFxuICAudGVzdGltb255LXNlY3Rpb25cbiAge1xuICAgIC5BYm91dFVzaDJNUVxuICAgIHtcbiAgICAgIGZvbnQtc2l6ZTogMzRweCAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgIC5BYm91dFVzUE1RXG4gICAge1xuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG5cbiAgfVxuICAuZnRjby1zZXJ2aWNlc1xuICB7XG4gICAgLm5vLWd1dHRlcnNcbiAgICB7XG4gICAgICAuc2VydmljZXNcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gXG4gXG4gICAgXG4gIFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcbntcbiAgLnMyXG4gIHtcbiAgICBwYWRkaW5nOiAwJSAyMCU7XG4gICAgLnZjX2NvbHVtbi1pbm5lclxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDQwcHggMzBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICB9XG4gICAgLndwYl93cmFwcGVyXG4gICAge1xuICAgICAgcFxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcblxuXG4gICAgICB9XG4gXG4gICAgfVxuXG4gIH0gIFxuICAuZnRjby1pbnRyb1xuICB7XG4gICAgLmFsaWduLWl0ZW1zLWNlbnRlck1RXG4gICAge1xuICAgICAgbWFyZ2luLXRvcDogOCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgfVxuICAudGVzdGltb255LXNlY3Rpb25cbiAge1xuICAgIHBhZGRpbmc6IDdlbSA0JTtcblxuICAgIC5BYm91dFVzaDJNUVxuICAgIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgIC5BYm91dFVzUE1RXG4gICAge1xuICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gICAgLnVzZXItaW1nXG4gICAge1xuICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5NUVBPd2xcbiAgICB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LWZhbWlseTogYXV0byAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG5cbiAgfVxuICAuZnRjby1zZXJ2aWNlc1xuICB7XG4gICAgLm5vLWd1dHRlcnNcbiAgICB7XG4gICAgICAuc2VydmljZXNcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0gICAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcbntcbiAgLnMyXG4gIHtcbiAgICBwYWRkaW5nOiAwJSAxNSU7XG4gICAgLnZjX2NvbHVtbi1pbm5lclxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDQwcHggMzBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICB9XG4gICAgLndwYl93cmFwcGVyXG4gICAge1xuICAgICAgcFxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcblxuXG4gICAgICB9XG4gXG4gICAgfVxuXG4gIH0gXG4gIC5mdGNvLWludHJvXG4gIHtcbiAgICAuYWxpZ24taXRlbXMtY2VudGVyTVFcbiAgICB7XG4gICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xuICAgIH1cblxuICB9XG4gIC5pdGVtV2lkdGhYU1xuICB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mdGNvLWludHJvIFxuICB7XG4gICAgYmFja2dyb3VuZDogIzA3MGMyY2ZhICFpbXBvcnRhbnQ7XG4gIH1cbn0gICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "8L1Y":
/*!********************************************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Instructor/instructor-side-bar/instructor-side-bar.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: InstructorSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorSideBarComponent", function() { return InstructorSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function () { return { exact: true }; };
class InstructorSideBarComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "83.333333%";
        document.getElementById('footer').style.marginLeft = "16.666667%";
    }
}
InstructorSideBarComponent.ɵfac = function InstructorSideBarComponent_Factory(t) { return new (t || InstructorSideBarComponent)(); };
InstructorSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorSideBarComponent, selectors: [["app-instructor-side-bar"]], decls: 46, vars: 4, consts: [[1, "s1"], [1, "col-12"], [1, "row"], [1, "col-2", "left-part"], ["routerLinkActive", "active", "routerLink", "LessonsInstructor", 1, "content", "Student", "text-center", 3, "routerLinkActiveOptions"], [1, "fas", "fa-book-open"], [1, "d-none", "d-sm-block"], ["routerLink", "editeProfileInstructor", "routerLinkActive", "active", 1, "content", "setting", "text-center", 3, "routerLinkActiveOptions"], [1, "fas", "fa-user"], ["data-toggle", "modal", "data-target", "#ConfirmEmail", 1, "content", "LogOut", "text-center"], [1, "fas", "fa-sign-out-alt"], [1, "col-10", "right-part"], ["ConfirmEmail", "ngForm"], [1, "container"], ["id", "ConfirmEmail", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", 2, "margin-top", "20%"], [1, "modal-content"], [1, "modal-header"], [2, "color", "rgb(7, 12, 44)"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["role", "form-inline"], [2, "color", "rgb(83, 83, 83)"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"]], template: function InstructorSideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirm Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Are You Sure Want LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n  padding: 10% 5%;\n  margin-left: 16.666667%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: #070c2c;\n  padding-top: 6%;\n  margin-top: 2%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #5fcfdf;\n  color: white !important;\n  outline: 0px !important;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  cursor: pointer;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .LogOut[_ngcontent-%COMP%] {\n  bottom: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 12% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 12% 1%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 16% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9JbnN0cnVjdG9yL2luc3RydWN0b3Itc2lkZS1iYXIvaW5zdHJ1Y3Rvci1zaWRlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUVBLGVBQUE7RUFDQSx1QkFBQTtBQUZKO0FBSUk7RUFFSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSFI7QUFLUTtFQUVJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFKWjtBQU9RO0VBR0ksY0FBQTtFQUNBLGVBQUE7QUFQWjtBQVVRO0VBRUksV0FBQTtBQVRaO0FBV1k7RUFFSSxnQkFBQTtBQVZoQjtBQWVRO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFkWjtBQXVCQTtFQUlZO0lBRUEsZUFBQTtFQXhCVjtBQUNGO0FBK0JBO0VBS1E7SUFFQSxlQUFBO0VBbENOO0FBQ0Y7QUF1Q0E7RUFJZ0I7SUFFSSwyQkFBQTtFQXpDbEI7RUE0Q2M7SUFFSSxlQUFBO0VBM0NsQjtBQUNGO0FBaURBO0VBSUc7SUFFQywyQkFBQTtFQW5ERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9JbnN0cnVjdG9yL2luc3RydWN0b3Itc2lkZS1iYXIvaW5zdHJ1Y3Rvci1zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zMVxue1xuICAgIC5yaWdodC1wYXJ0XG57XG4gICAgcGFkZGluZzogMTAlIDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjclO1xufVxuICAgIC5sZWZ0LXBhcnRcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYig3LCAxMiwgNDQpIDtcbiAgICAgICAgcGFkZGluZy10b3A6IDYlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgXG4gICAgICAgIC5hY3RpdmVcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWZjZmRmO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50XG4gICAgICAgIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgaDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICBcbiAgICAgICAgICAgIC5mYXNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLkxvZ091dFxuICAgICAgICB7XG4gICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICBcbiAgICBcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcbntcbiAgICAuczFcbiAgICB7XG4gICAgICAgICAgICAucmlnaHQtcGFydFxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMCUgMSU7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIFxuICAgIFxuICAgIFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG57XG4gICAgXG4gICAgLnMxXG4gICAge1xuICAgICAgICAucmlnaHQtcGFydFxuICAgIHtcbiAgICAgICAgcGFkZGluZzogMTAlIDElO1xuICAgIH1cbiAgICB9IFxuICBcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG57XG4gICAgLnMxXG5cdFx0e1xuICAgICAgICAgICAgICAgIC5sZWZ0LXBhcnRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMiUgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yaWdodC1wYXJ0XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMiUgMSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiBcblxufSAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxue1xuICAgIC5zMVxuXHRcdHtcblx0XHQgLmxlZnQtcGFydFxuXHRcdCB7XG5cdFx0XHQgcGFkZGluZy10b3A6IDE2JSAhaW1wb3J0YW50O1xuXHRcblx0XHQgfVxuICAgICAgICB9XG4gICAgXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructorSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instructor-side-bar',
                templateUrl: './instructor-side-bar.component.html',
                styleUrls: ['./instructor-side-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AhVO":
/*!*****************************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Student/edite-profile/edite-profile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeProfileComponent", function() { return EditeProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EditeProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditeProfileComponent.ɵfac = function EditeProfileComponent_Factory(t) { return new (t || EditeProfileComponent)(); };
EditeProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditeProfileComponent, selectors: [["app-edite-profile"]], decls: 121, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "student-profile", "py-4"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "card", "shadow-sm"], [1, "card-header", "bg-transparent", "text-center"], [1, "changePhoto", 2, "position", "relative"], ["data-toggle", "modal", "data-target", "#ChangeProfilePhoto", 1, "cover"], ["src", "../../assets/child.jpg", "alt", "student dp", 1, "profile_img"], [1, "row", "name"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangeUserName", 1, "fas", "fa-edit"], [1, "card-body"], [1, "mb-0"], [1, "pr-1"], [1, "col-lg-8"], [1, "card", "shadow-sm", "general-info"], [1, "card-header", "bg-transparent", "border-0"], [1, "far", "fa-clone", "pr-1"], [1, "card-body", "pt-0"], [1, "table", "table-bordered"], ["width", "30%"], ["width", "2%"], [2, "height", "26px"], [1, "fas", "fa-unlock"], [1, "form-group", "col-lg-12", "text-center"], ["type", "password", "placeholder", "Old Password", "id", "OldPass", "name", "OldPass", 1, "form-control", "OldPass"], ["type", "password", "placeholder", "New Password", "id", "NewPass", "name", "NewPass", 1, "form-control", "col-md-6"], ["type", "password", "placeholder", "Confirm Password", "id", "ConNewPass", "name", "ConNewPass", 1, "form-control", "col-md-6"], ["id", "ChangeUserName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "placeholder", "New UserName", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"], ["id", "ChangeProfilePhoto", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "btn", "btn-default"], ["type", "file"], [1, "btn", "btn-success"]], template: function EditeProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mohamed Ahmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Student ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Section:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "General Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Math - English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Academic Year\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Prefarred Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Monday - Thursday - Wednesday - Saturday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Prefarred Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "8 AM - 10 AM - 11 AM - 8 BM - 6 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Change UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Change Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".student-profile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 2%;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border: 10px solid #ccc;\n  border-radius: 50%;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n}\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n#NewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-right: 2%;\n  margin-left: auto;\n}\n#ConNewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-left: 2%;\n  margin-right: auto;\n}\n.OldPass[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.name[_ngcontent-%COMP%] {\n  position: relative;\n}\n.name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n}\n.name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border-radius: 50%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover {\n  background: rgba(7, 12, 45, 0.53);\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 25px;\n  color: white;\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .general-info[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 26%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .general-info[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n\n  #NewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 4%;\n  }\n\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 24%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 10%;\n  }\n\n  #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L2VkaXRlLXByb2ZpbGUvZWRpdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO0FBREo7QUFFQztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUc7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBREg7QUFHUTtFQUNMLGVBQUE7RUFDQSxXQUFBO0FBREg7QUFLRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFISDtBQUtFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUhIO0FBVUE7RUFFQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJEO0FBV0E7RUFFQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVEQ7QUFXQTtFQUVDLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEQ7QUFXQTtFQVdDLGtCQUFBO0FBbEJEO0FBU0U7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUFSRjtBQVVDO0VBRUMsV0FBQTtBQVRGO0FBaUJHO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmSDtBQWdCRztFQUVDLGlDQUFBO0FBZko7QUFnQkk7RUFFQyxnQ0FBQTtBQWZMO0FBb0JHO0VBRUMsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBbkJKO0FBK0JDO0VBRUM7SUFFQyxjQUFBO0VBOUJEOztFQW1DRztJQUdELFVBQUE7RUFsQ0Y7QUFDRjtBQXlDQztFQUVDO0lBRUMsY0FBQTtFQXpDRDs7RUE0Q0E7SUFFRCxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQTFDQzs7RUE2Q0Y7SUFFQyxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUEzQ0M7O0VBZ0RHO0lBR0QsVUFBQTtFQS9DRjtBQUNGO0FBcURDO0VBSUc7SUFHRSxVQUFBO0VBeERKOztFQTJERTtJQUVDLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUF6REg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvUHJvZmlsZXMvU3R1ZGVudC9lZGl0ZS1wcm9maWxlL2VkaXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnN0dWRlbnQtcHJvZmlsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblx0LmNhcmQge1xuXHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdFx0cGFkZGluZzogMiU7XG4gICAgICAgIC5jYXJkLWhlYWRlciB7XG5cdFx0XHQucHJvZmlsZV9pbWcge1xuXHRcdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRcdGhlaWdodDogMTUwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0Ym9yZGVyOiAxMHB4IHNvbGlkICNjY2M7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aDMge1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHR9XG4gICAgICAgIHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0fVxuXHR9XG4gICAgLnRhYmxlIHtcblx0XHR0aCB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblx0XHR0ZCB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblx0fVxufVxuXG5cblxuI05ld1Bhc3Ncbntcblx0bWF4LXdpZHRoOiAzOCU7XG5cdG1hcmdpbi1yaWdodDogMiU7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG59XG4jQ29uTmV3UGFzc1xueyAgXG5cdG1heC13aWR0aDogMzglO1xuXHRtYXJnaW4tbGVmdDogMiU7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5PbGRQYXNzXG57XG5cdHdpZHRoOjgwJTtcblx0bWFyZ2luLWxlZnQ6YXV0byA7XG5cdG1hcmdpbi1yaWdodDogYXV0byA7XG59XG4ubmFtZVxue1xuXHQgLmZhLWVkaXRcblx0e1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMiU7XG5cdH1cblx0aDNcblx0e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXHRcblx0LmNoYW5nZVBob3RvXG5cdHtcblx0XHQgLmNvdmVyXG5cdFx0e1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Jjpob3ZlclxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDcsIDEyLCA0NSwgMC41Myk7XG5cdFx0XHRcdHNwYW5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuXG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c3BhblxuXHRcdFx0e1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxuXHR7XG5cdFx0XG5cdCBcblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG5cdHtcblx0XHQuZ2VuZXJhbC1pbmZvXG5cdFx0e1xuXHRcdFx0bWFyZ2luLXRvcDogNyU7XG5cblx0XHR9XG5cdFx0Lm5hbWVcbiAgICAgICAgIHtcblx0ICBcdFx0LmZhLWVkaXRcblx0XHRcdHtcblx0XHRcdFx0XG5cdFx0XHRcdHJpZ2h0OiAyNiU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHQgIFxuXHRcblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcblx0e1xuXHRcdC5nZW5lcmFsLWluZm9cblx0XHR7XG5cdFx0XHRtYXJnaW4tdG9wOiA3JTtcblxuXHRcdH1cblx0XHQjTmV3UGFzc1xue1xuXHRtYXgtd2lkdGg6IDgwJTtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblxufVxuI0Nvbk5ld1Bhc3NcbnsgIFxuXHRtYXgtd2lkdGg6IDgwJTtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXRvcDogNCU7XG5cdFxufVxuLm5hbWVcbiAgICAgICAgIHtcblx0ICBcdFx0LmZhLWVkaXRcblx0XHRcdHtcblx0XHRcdFx0XG5cdFx0XHRcdHJpZ2h0OiAyNCU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0IFxuXHRcblx0fSAgICBcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgXG5cdHtcblx0XHQubmFtZVxuXHRcdHtcblx0XHRcdCAuZmEtZWRpdFxuXHRcdCAgIHtcblx0XHRcdCAgIFxuXHRcdFx0ICAgcmlnaHQ6IDEwJTtcblx0XHQgICB9XG5cdCAgIH1cblx0ICAgI0Nvbk5ld1Bhc3Ncblx0ICAgeyAgXG5cdFx0ICAgbWF4LXdpZHRoOiA4MCU7XG5cdFx0ICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdCAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdCAgIG1hcmdpbi10b3A6IDYlICFpbXBvcnRhbnQ7XG5cdFx0ICAgXG5cdCAgIH1cblx0XHRcblx0fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditeProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edite-profile',
                templateUrl: './edite-profile.component.html',
                styleUrls: ['./edite-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GP77":
/*!***********************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Student/save-video/save-video.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SaveVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveVideoComponent", function() { return SaveVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SaveVideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SaveVideoComponent.ɵfac = function SaveVideoComponent_Factory(t) { return new (t || SaveVideoComponent)(); };
SaveVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveVideoComponent, selectors: [["app-save-video"]], decls: 2, vars: 0, consts: [[2, "padding-left", "10%"], ["src", "../../../../../assets/novideo.png"]], template: function SaveVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-top: 10%;\n  width: 70%;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L3NhdmUtdmlkZW8vc2F2ZS12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L3NhdmUtdmlkZW8vc2F2ZS12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xue1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcbntcbiAgICBcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxue1xuICAgIFxuICBcblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG57XG5cbiBcblxufSAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxue1xuICAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-save-video',
                templateUrl: './save-video.component.html',
                styleUrls: ['./save-video.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GnuV":
/*!*************************************************************!*\
  !*** ./src/app/AllComponents/Auth/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { "padding-top.%": "5" }; };
class LoginComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 40, vars: 2, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1"], [1, "login-card"], [1, "text-center"], [1, "far", "fa-user"], [1, "row"], [1, "form-group", "col-lg-12"], ["type", "email", "placeholder", "Your E-mail", "id", "e-mail", "name", "e-mail", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "id", "password", "name", "password", 1, "form-control"], [1, "form-group", "text-center"], [1, "btn", "start-project-btn", "text-white", "form-control", 2, "background-color", "#5fcfdf"], [1, "row", 3, "ngStyle"], [1, "form-group", "col-md-6", "col-sm-12", "Forgotten"], ["routerLink", "/forgetPass"], ["routerLink", "/register", 1, "form-group", "col-md-6", "col-sm-12", "create"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Forgot Your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".s1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 3%;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 2%;\n  margin-bottom: 5%;\n  padding: 80px;\n  border-radius: 31px;\n  width: 55%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n  font-size: 75px;\n  margin-bottom: 1%;\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 60%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: black !important;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: black !important;\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 45px;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 45px;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 25px !important;\n    width: 75% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 25px !important;\n    width: 80% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9BdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBR0k7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUpSO0FBT0k7RUFFSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTlI7QUFPUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFOWjtBQVNZO0VBRUkseUJBQUE7QUFSaEI7QUFXZ0I7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FBVnBCO0FBWW9CO0VBRUksY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBWHhCO0FBWXdCO0VBSUkscUJBQUE7QUFiNUI7QUFrQm9CO0VBV0ksMkJBQUE7QUExQnhCO0FBaUJ3QjtFQUVJLGNBQUE7QUFoQjVCO0FBaUI0QjtFQUVJLHVCQUFBO0FBaEJoQztBQXVCb0I7RUFZSSw0QkFBQTtBQWhDeEI7QUF1QndCO0VBRUksY0FBQTtBQXRCNUI7QUF1QjRCO0VBRUksdUJBQUE7QUF0QmhDO0FBaUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBL0JKO0FBaUNBO0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBL0JGO0FBZ0NFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQS9CSjtBQWlDRTtFQUVFLGFBQUE7QUFoQ0o7QUFpQ0k7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWhDTjtBQWlDTTtFQUVFLFdBQUE7RUFDQSxpREFBQTtBQWhDUjtBQWlDUTtFQUNFLFdBQUE7QUEvQlY7QUFvQ0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFsQ047QUFxQ0M7RUFJUTtJQU1HLGFBQUE7RUExQ1Y7RUFzQ1U7SUFFSSxlQUFBO0VBckNkO0FBQ0Y7QUErQ0M7RUFJTztJQU1HLGFBQUE7RUFyRFQ7RUFpRFM7SUFFSSxlQUFBO0VBaERiO0FBQ0Y7QUF5REM7RUFJTztJQUVJLHdCQUFBO0lBQ0EscUJBQUE7RUEzRFY7RUE0RFU7SUFFSSw2QkFBQTtFQTNEZDtFQTZEVTtJQUVJLDZCQUFBO0VBNURkO0VBK0RTO0lBRUksZUFBQTtFQTlEYjtBQUNGO0FBd0VDO0VBSU87SUFFSSx3QkFBQTtJQUNBLHFCQUFBO0VBMUVWO0VBMkVTO0lBRUksMEJBQUE7RUExRWI7RUE2RVM7SUFFSSxlQUFBO0VBNUViO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BbGxDb21wb25lbnRzL0F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuczEge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgIFxuICAgICBcbiAgICBoMVxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBjb2xvcjojNWZjZmRmIDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICB9XG4gICAgLm9yZGVyLTJcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOSU7XG4gICAgICAgIHRvcDogMjUlO1xuXG4gICAgfVxuICAgIC5sb2dpbi1jYXJkXG4gICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlY2QxO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgICAgIHdpZHRoOiA1NSUgO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAuZmEtdXNlclxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDc1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC50ZXh0LWxpZ2h0Qmx1ZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVmY2ZkZiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sXG4gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY0O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGFydC1wcm9qZWN0LWJ0blxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICM1ZmNmZGYhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAuRm9yZ290dGVuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuLmFzaWRlXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM1ZmNmZGY7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uaGVyby13cmFwXG4ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLm92ZXJsYXkgXG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IC4zO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCAxMiwgNDQpO1xuICB9XG4gIC5zbGlkZXItdGV4dCBcbiAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLmJyZWFkY3J1bWJzXG4gICAgIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgc3BhblxuICAgICAgIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnJlYWQge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxuIHtcbiAgICAgLnMxXG4gICAgIHtcbiAgICAgICAgIC5sb2dpbi1jYXJkXG4gICAgICAgICB7XG4gICAgICAgICAgICBoMVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgICAgIFxuXG4gICAgICAgICB9XG4gICAgIH1cbiAgIFxuICAgICBcbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuIHtcbiAgICAuczFcbiAgICB7XG4gICAgICAgIC5sb2dpbi1jYXJkXG4gICAgICAgIHtcbiAgICAgICAgICAgaDFcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgICAgXG5cbiAgICAgICAgfVxuICAgIH1cbiAgIFxuIFxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcbiB7XG4gICAgLnMxXG4gICAge1xuICAgICAgICAubG9naW4tY2FyZFxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAuRm9yZ290dGVuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3JlYXRlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgaDFcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICB9XG4gICAgIFxuICAgICAgIFxuXG4gICAgICAgIH1cbiAgICB9XG4gXG4gIFxuIFxuIH0gICAgXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgXG4ge1xuICAgIC5zMVxuICAgIHtcbiAgICAgICAgLmxvZ2luLWNhcmRcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICBoMVxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAuZmEtdXNlclxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgIFxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgIFxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JApw":
/*!*******************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Student/side-bar/side-bar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function () { return { exact: true }; };
class SideBarComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "83.333333%";
        document.getElementById('footer').style.marginLeft = "16.666667%";
        // document.getElementById('ftco-navbar').style.width= "83.333333%"
        // document.getElementById('ftco-navbar').style.marginLeft= "16.666667%"
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 51, vars: 6, consts: [[1, "s1"], [1, "col-12"], [1, "row"], [1, "col-2", "left-part"], ["routerLinkActive", "active", "routerLink", "LessonsChild", 1, "content", "Student", "text-center", 3, "routerLinkActiveOptions"], [1, "fas", "fa-book-open"], [1, "d-none", "d-sm-block"], ["routerLink", "editeProfile", "routerLinkActive", "active", 1, "content", "setting", "text-center", 3, "routerLinkActiveOptions"], [1, "fas", "fa-user"], ["routerLink", "saveVideo", "routerLinkActive", "active", 1, "content", "setting", "text-center", 3, "routerLinkActiveOptions"], [1, "fas", "fa-photo-video"], ["data-toggle", "modal", "data-target", "#LogOut", 1, "content", "LogOut", "text-center"], [1, "fas", "fa-sign-out-alt"], [1, "col-10", "right-part"], ["LogOut", "ngForm"], [1, "container"], ["id", "LogOut", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", 2, "margin-top", "20%"], [1, "modal-content"], [1, "modal-header"], [2, "color", "rgb(7, 12, 44)"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["role", "form-inline"], [2, "color", "rgb(83, 83, 83)"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirm Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Are You Sure Want LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n  padding: 7%;\n  margin-left: 16.666667%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: #070c2c;\n  padding-top: 6%;\n  margin-top: 2%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #5fcfdf;\n  color: white !important;\n  outline: 0px !important;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n  cursor: pointer;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n.s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%]   .LogOut[_ngcontent-%COMP%] {\n  bottom: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n    margin-left: 16.666667%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 10% 1%;\n    margin-left: 16.666667%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 12% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    padding: 12% 1%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%] {\n    padding-top: 16% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUEsV0FBQTtFQUNBLHVCQUFBO0FBRko7QUFJSTtFQUVJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIUjtBQUtRO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUpaO0FBT1E7RUFHSSxjQUFBO0VBQ0EsZUFBQTtBQVBaO0FBVVE7RUFFSSxXQUFBO0FBVFo7QUFXWTtFQUVJLGdCQUFBO0FBVmhCO0FBZVE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQWRaO0FBdUJBO0VBS0k7SUFFQSxlQUFBO0lBQ0EsdUJBQUE7RUF6QkY7QUFDRjtBQTZCQTtFQUlRO0lBRUEsZUFBQTtJQUNBLHVCQUFBO0VBL0JOO0FBQ0Y7QUFxQ0E7RUFJUTtJQUVJLDJCQUFBO0VBdkNWO0VBMENNO0lBRUksZUFBQTtFQXpDVjtBQUNGO0FBaURBO0VBSUs7SUFFSSwyQkFBQTtFQW5EUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9TdHVkZW50L3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMxXG57XG4gICAgLnJpZ2h0LXBhcnRcbntcbiAgICBwYWRkaW5nOiA3JTtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcbn1cbiAgICAubGVmdC1wYXJ0XG4gICAge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBib3R0b206MDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoNywgMTIsIDQ0KSA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIFxuICAgICAgICAuYWN0aXZlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3V0bGluZTowcHggIWltcG9ydGFudDtcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICBoNVxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgIFxuICAgICAgICAgICAgLmZhc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAuTG9nT3V0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gIFxuICAgIFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxueyBcblxuICAgLnMxXG57XG4gICAgLnJpZ2h0LXBhcnRcbntcbiAgICBwYWRkaW5nOiAxMCUgMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG59XG59IFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG57XG4gICAgLnMxXG4gICAge1xuICAgICAgICAucmlnaHQtcGFydFxuICAgIHtcbiAgICAgICAgcGFkZGluZzogMTAlIDElO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcbiAgICB9XG4gICAgfSBcbiAgICBcbiAgXG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxue1xuICAgICAgIC5zMVxuICAgICAgIHtcbiAgICAgICAgLmxlZnQtcGFydFxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTIlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtcGFydFxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMiUgMSU7XG4gICAgICAgIH1cblxuXG4gICAgICAgfVxuXG4gXG5cbn0gICAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcbntcbiAgICAuczFcbiAgICB7XG4gICAgIC5sZWZ0LXBhcnRcbiAgICAge1xuICAgICAgICAgcGFkZGluZy10b3A6IDE2JSAhaW1wb3J0YW50O1xuXG4gICAgIH1cblxuXG4gICAgfSAgXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "O1j+":
/*!******************************************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Instructor/instructor-lessons/instructor-lessons.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InstructorLessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorLessonsComponent", function() { return InstructorLessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class InstructorLessonsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructorLessonsComponent.ɵfac = function InstructorLessonsComponent_Factory(t) { return new (t || InstructorLessonsComponent)(); };
InstructorLessonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorLessonsComponent, selectors: [["app-instructor-lessons"]], decls: 373, vars: 0, consts: [[1, "container"], [1, "detailsInstructor", 2, "overflow-x", "auto"], [1, "information"], [2, "width", "762px"], [1, "table"], ["scope", "col"], ["name", "timezone_offset", "id", "timezone-offset", 1, "span5", "form-control"], ["value", "day"], ["value", "week", "selected", ""], ["value", "month"], ["value", "-12:00"], ["value", "-11:00"], ["value", "-10:00"], ["value", "-09:50"], ["value", "-09:00"], ["value", "-08:00"], ["value", "-07:00"], ["value", "-06:00"], ["value", "-05:00"], ["value", "-04:50"], ["value", "-04:00"], ["value", "-03:50"], ["value", "-03:00"], ["value", "-02:00"], ["value", "-01:00"], ["value", "+00:00", "selected", "selected"], ["value", "+01:00"], ["value", "+02:00"], ["value", "+03:00"], ["value", "+03:50"], ["value", "+04:00"], ["value", "+04:50"], ["value", "+05:00"], ["value", "+05:50"], ["value", "+05:75"], ["value", "+06:00"], ["value", "+06:50"], ["value", "+07:00"], ["value", "+08:00"], ["value", "+08:75"], ["value", "+09:00"], ["value", "+09:50"], ["value", "+10:00"], ["value", "+10:50"], ["value", "+11:00"], ["value", "+11:50"], ["value", "+12:00"], ["value", "+12:75"], ["value", "+13:00"], ["value", "+14:00"], [1, "TimeTable"], [1, "table-responsive"], [1, "table", "table-bordered", "text-center"], [1, "bg-light-gray"], [1, "text-uppercase"], [1, "bg-sky", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13", "d-none", "d-lg-block"], [1, "bg-sky", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13", "d-block", "d-lg-none"], [1, "margin-10px-top", "font-size13"], [1, "font-size13", "text-light-gray"], [1, "bg-green", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13", "d-none", "d-lg-block"], [1, "bg-green", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13", "d-block", "d-lg-none"], [1, "bg-yellow", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13", "d-none", "d-lg-block"], [1, "bg-yellow", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13", "d-block", "d-lg-none"], [1, "bg-purple", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13", "d-none", "d-lg-block"], [1, "bg-purple", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13", "d-block", "d-lg-none"], [1, "bg-pink", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13", "d-none", "d-lg-block"], [1, "bg-pink", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size16", "xs-font-size13", "d-block", "d-lg-none"], [1, "bg-lightred", "padding-5px-tb", "padding-15px-lr", "border-radius-5", "margin-10px-bottom", "text-white", "font-size13", "xs-font-size13"]], template: function InstructorLessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Instructor Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Instructor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ahmed Mohmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Day View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Week View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Month View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "(GMT -12:00) Eniwetok, Kwajalein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(GMT -11:00) Midway Island, Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(GMT -10:00) Hawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(GMT -9:30) Taiohae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(GMT -9:00) Alaska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(GMT -8:00) Pacific Time (US & Canada)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(GMT -7:00) Mountain Time (US & Canada)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "(GMT -6:00) Central Time (US & Canada), Mexico City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(GMT -4:30) Caracas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "(GMT -3:30) Newfoundland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "(GMT -3:00) Brazil, Buenos Aires, Georgetown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "(GMT -2:00) Mid-Atlantic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(GMT -1:00) Azores, Cape Verde Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(GMT) Western Europe Time, London, Lisbon, Casablanca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(GMT +2:00) Kaliningrad, South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "(GMT +3:30) Tehran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "(GMT +4:30) Kabul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(GMT +5:45) Kathmandu, Pokhara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "(GMT +6:00) Almaty, Dhaka, Colombo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "(GMT +6:30) Yangon, Mandalay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "(GMT +7:00) Bangkok, Hanoi, Jakarta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "(GMT +8:45) Eucla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "(GMT +9:30) Adelaide, Darwin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "(GMT +10:00) Eastern Australia, Guam, Vladivostok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "(GMT +10:30) Lord Howe Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "(GMT +11:00) Magadan, Solomon Islands, New Caledonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "(GMT +11:30) Norfolk Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "(GMT +12:45) Chatham Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "(GMT +13:00) Apia, Nukualofa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "(GMT +14:00) Line Islands, Tokelau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Time Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Saturday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Wednesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Thursday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "classId:1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "classId:2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "classId:1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "classId:3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Year 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "classId:1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "9:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "classId:3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Year 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "classId:2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "classId:1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "10:00-11:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "classId:3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Year 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "classId:1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "classId:2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "classId:1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "classId:1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "1-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "classId:2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "1:00-2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "classId:3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "3-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Year 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "classId:1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "1-B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Year 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "classId:2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "2-C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "classId:2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "2-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Year 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Break");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "12:00-1:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".table-responsive[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  border-radius: 30px;\n}\n\ntd[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.detailsInstructor[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  border-radius: 30px;\n  margin-bottom: 1%;\n  padding: 2%;\n}\n\n.detailsInstructor[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  padding: 1%;\n  text-align: center;\n}\n\n.TimeTable[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 12px 3px #ccc;\n  padding: 1%;\n  text-align: center;\n  margin-top: 5%;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 30px;\n  margin-bottom: 2%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.bg-light-gray[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.bg-sky.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #00a2a7;\n}\n\n.bg-orange.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #af4305;\n}\n\n.bg-green.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #4ca520;\n}\n\n.bg-yellow.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #dcbf02;\n}\n\n.bg-pink.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #e82d8b;\n}\n\n.bg-purple.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #8343e8;\n}\n\n.bg-lightred.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 0px 0px #d84213;\n}\n\n.bg-sky[_ngcontent-%COMP%] {\n  background-color: #02c2c7;\n}\n\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #e95601;\n}\n\n.bg-green[_ngcontent-%COMP%] {\n  background-color: #5bbd2a;\n}\n\n.bg-yellow[_ngcontent-%COMP%] {\n  background-color: #f0d001;\n}\n\n.bg-pink[_ngcontent-%COMP%] {\n  background-color: #ff48a4;\n}\n\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #9d60ff;\n}\n\n.bg-lightred[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n}\n\n.padding-15px-lr[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.padding-5px-tb[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.margin-10px-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.border-radius-5[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.margin-10px-top[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.font-size14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.text-light-gray[_ngcontent-%COMP%] {\n  color: #d6d5d5;\n}\n\n.font-size13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .font-size13[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 7% !important;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 14% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9JbnN0cnVjdG9yL2luc3RydWN0b3ItbGVzc29ucy9pbnN0cnVjdG9yLWxlc3NvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxpQ0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBS0k7RUFFSSxlQUFBO0FBSFI7O0FBS0k7RUFFSSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSFI7O0FBSVE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7QUFIWjs7QUFNSTtFQUVJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpSOztBQVFJO0VBQ0ksZ0JBQUE7QUFMUjs7QUFPSTtFQUNJLHlCQUFBO0FBSlI7O0FBUVk7RUFDSSx3QkFBQTtBQUxoQjs7QUFPWTtFQUNJLHdCQUFBO0FBTGhCOztBQVFRO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQU5aOztBQVFRO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQU5aOztBQVdZO0VBQ0ksc0JBQUE7RUFDQSxnQ0FBQTtBQVJoQjs7QUFXUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVRaOztBQVdRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBVFo7O0FBWUk7RUFDSSxtQ0FBQTtBQVRSOztBQVdJO0VBQ0ksbUNBQUE7QUFSUjs7QUFVSTtFQUNJLG1DQUFBO0FBUFI7O0FBU0k7RUFDSSxtQ0FBQTtBQU5SOztBQVFJO0VBQ0ksbUNBQUE7QUFMUjs7QUFPSTtFQUNJLG1DQUFBO0FBSlI7O0FBTUk7RUFDSSxtQ0FBQTtBQUhSOztBQUtJO0VBQ0kseUJBQUE7QUFGUjs7QUFJSTtFQUNJLHlCQUFBO0FBRFI7O0FBR0k7RUFDSSx5QkFBQTtBQUFSOztBQUVJO0VBQ0kseUJBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtBQUdSOztBQURJO0VBQ0kseUJBQUE7QUFJUjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFLUjs7QUFISTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFNUjs7QUFKSTtFQUNJLG1CQUFBO0FBT1I7O0FBTEk7RUFDSSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksZ0JBQUE7QUFTUjs7QUFQSTtFQUNJLGVBQUE7QUFVUjs7QUFSSTtFQUNJLGNBQUE7QUFXUjs7QUFUSTtFQUNJLGVBQUE7QUFZUjs7QUFWSTtFQUdJO0lBRUksMEJBQUE7RUFVVjtBQUNGOztBQUVJO0VBRUk7SUFFSSwwQkFBQTtFQUZWO0FBQ0Y7O0FBUUk7RUFHSTtJQUVJLDJCQUFBO0VBVFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvUHJvZmlsZXMvSW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWxlc3NvbnMvaW5zdHJ1Y3Rvci1sZXNzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRhYmxlLXJlc3BvbnNpdmVcbiAgICB7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAzcHggI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuXG4gICAgfVxuICAgIHRkXG4gICAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5kZXRhaWxzSW5zdHJ1Y3RvclxuICAgIHtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIC5pbmZvcm1hdGlvblxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuVGltZVRhYmxlXG4gICAge1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggM3B4ICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmJnLWxpZ2h0LWdyYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIH1cbiAgICAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgfVxuICAgICAgICB0aCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFibGUge1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIH1cbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iZy1za3kuYm94LXNoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjMDBhMmE3O1xuICAgIH1cbiAgICAuYmctb3JhbmdlLmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggI2FmNDMwNTtcbiAgICB9XG4gICAgLmJnLWdyZWVuLmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzRjYTUyMDtcbiAgICB9XG4gICAgLmJnLXllbGxvdy5ib3gtc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICNkY2JmMDI7XG4gICAgfVxuICAgIC5iZy1waW5rLmJveC1zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggI2U4MmQ4YjtcbiAgICB9XG4gICAgLmJnLXB1cnBsZS5ib3gtc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICM4MzQzZTg7XG4gICAgfVxuICAgIC5iZy1saWdodHJlZC5ib3gtc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICNkODQyMTM7XG4gICAgfVxuICAgIC5iZy1za3kge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjMmM3O1xuICAgIH1cbiAgICAuYmctb3JhbmdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5NTYwMTtcbiAgICB9XG4gICAgLmJnLWdyZWVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViYmQyYTtcbiAgICB9XG4gICAgLmJnLXllbGxvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGQwMDE7XG4gICAgfVxuICAgIC5iZy1waW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDhhNDtcbiAgICB9XG4gICAgLmJnLXB1cnBsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZDYwZmY7XG4gICAgfVxuICAgIC5iZy1saWdodHJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gICAgfVxuICAgIC5wYWRkaW5nLTE1cHgtbHIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5wYWRkaW5nLTVweC10YiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5tYXJnaW4tMTBweC1ib3R0b20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuYm9yZGVyLXJhZGl1cy01IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAubWFyZ2luLTEwcHgtdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZTE0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAudGV4dC1saWdodC1ncmF5IHtcbiAgICAgICAgY29sb3I6ICNkNmQ1ZDU7XG4gICAgfVxuICAgIC5mb250LXNpemUxMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcbiAgICB7XG4gICAgICAgIFxuICAgICAgICAuZm9udC1zaXplMTNcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBcbiAgICBcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuICAgIHtcbiAgICAgICAgXG4gICAgICAgXG4gICAgXG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxuICAgIHtcbiAgICAgICAgLmNvbnRhaW5lclxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNyUgIWltcG9ydGFudDtcblxuICAgICAgICB9XG4gICAgXG4gICAgIFxuICAgIFxuICAgIH0gICAgXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgXG4gICAge1xuICAgICAgIFxuICAgICAgICAuY29udGFpbmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNCUgIWltcG9ydGFudDtcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructorLessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instructor-lessons',
                templateUrl: './instructor-lessons.component.html',
                styleUrls: ['./instructor-lessons.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OhCk":
/*!******************************************************!*\
  !*** ./src/app/AllComponents/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");





function HomeComponent_ng_template_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mohamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hossam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ahmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mohamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hossam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ahmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["AboutUs"]; };
class HomeComponent {
    constructor(wowService) {
        this.wowService = wowService;
    }
    ngOnInit() {
        this.wowService.init();
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 216, vars: 3, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade", 2, "margin-top", "4%"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "cover"], ["src", "../../../assets/3.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-md-block"], ["src", "../../../assets/logoGif.gif", "alt", "", 1, "MQimg", 2, "width", "55%", "height", "auto", "max-height", "auto", "padding-bottom", "5%"], ["src", "../../../assets/logo2.png", "alt", "", 2, "display", "none", "width", "80%", "height", "auto", "max-height", "auto", "padding-bottom", "5%"], [1, "slogan"], [1, "block-button", "small", "text-center", "d-none", "d-md-block", "show-for-medium-up"], ["itemprop", "telephone", "href", "tel:+0123456789", 1, "button"], [1, "txt"], [1, "block-button", "small", "text-center", "d-block", "d-md-none", "show-for-medium-up"], [1, "carousel-item"], ["src", "../../../assets/4.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "../../../assets/5.jpg", "alt", "Second slide", 1, "d-block", "w-100"], [1, "aside"], [1, "ftco-services", "ftco-no-pb"], [1, "container-wrap"], [1, "row", "no-gutters"], [1, "col-md-3", "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "fadeInUp", "wow", "ftco-animated", 2, "background", "rgb(7, 12, 44)"], [1, "media", "block-6", "d-block", "text-center"], [1, "icon", "d-flex", "justify-content-center", "align-items-center"], ["src", "../../../assets/teacher.png", "alt", "", 2, "width", "55%", "object-fit", "contain"], [1, "media-body", "p-2", "mt-3"], [1, "heading"], [1, "col-md-3", "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-tertiary", "fadeInUp", "wow", "ftco-animated", 2, "background", "#5fcfdf"], ["src", "../../../assets/reading.png", "alt", "", 2, "width", "55%", "object-fit", "contain"], [1, "col-md-3", "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-fifth", "fadeInUp", "wow", "ftco-animated", 2, "background", "rgb(7, 12, 44)"], ["src", "../../../assets/book.png", "alt", "", 2, "width", "55%", "object-fit", "contain"], [1, "col-md-3", "d-flex", "services", "align-self-stretch", "pb-4", "px-4", "ftco-animate", "bg-quarternary", "fadeInUp", "wow", "ftco-animated", 2, "background", "#5fcfdf"], ["src", "../../../assets/certificate.png", "alt", "", 2, "width", "55%", "object-fit", "contain"], [1, "ftco-section", "ftco-no-pt", "ftc-no-pb"], [1, "container"], [1, "row", "d-flex"], [1, "col-md-5", "order-md-last", "wrap-about", "py-5", "wrap-about", "bg-light"], ["data-wow-offset", "220", 1, "text", "px-4", "ftco-animate", "fadeInUp", "wow", "ftco-animated"], [1, "mb-4"], [1, "styleP"], [1, "btn", "btn-secondary", "px-4", "py-3", 3, "routerLink"], ["data-wow-offset", "220", 1, "col-md-7", "wrap-about", "py-5", "pr-md-4", "ftco-animate", "fadeInUp", "wow", "ftco-animated"], [1, "row", "mt-5"], [1, "col-lg-6"], [1, "services-2", "d-flex"], [1, "icon", "mt-2", "d-flex", "justify-content-center", "justify-content-center2", "align-items-center"], ["src", "../../../assets/security-2.png", "alt", "", 2, "width", "55%", "background-repeat", "no-repeat", "background-position", "100% 100%", "margin-left", "10%"], [1, "text", "pl-3"], ["src", "../../../assets/teacher2.png", "alt", "", 2, "width", "55%", "background-repeat", "no-repeat", "background-position", "100% 100%", "margin-left", "10%"], ["src", "../../../assets/video.png", "alt", "", 2, "width", "55%", "background-repeat", "no-repeat", "background-position", "100% 100%"], [2, "color", "white"], ["id", "labels"], [1, "fadeInUp", "wow", 2, "text-align", "center", "font-weight", "bold", "color", "rgb(7, 12, 44)"], [2, "color", "#5fcfdf"], [1, "row"], [1, "col-md-6", "offerMQ", "fadeInUp", "wow", 2, "padding", "10% 5% 10% 15%"], [1, "dl"], [1, "brand"], [1, "discount", "alizarin"], [1, "type"], [1, "descr"], [1, "col-md-6", "offerMQ", "fadeInUp", "wow", 2, "padding", "10% 15% 10% 5%"], [1, "form-group", "text-center", "fadeInUp", "wow"], [1, "btn", "start-project-btn", "btn-danger", "text-white", "btn-offers", "form-control"], ["data-stellar-background-ratio", "0.5", 1, "ftco-intro"], [1, "overlay"], [1, "col-md-9"], [1, "mb-0"], [1, "col-md-3", "d-flex", "align-items-center", "align-items-centerMQ"], ["routerLink", "/Course", 1, "mb-0"], [1, "btn", "btn-secondary", "px-4", "py-3"], [1, "ftco-section", "testimony-section"], [1, "row", "justify-content-center", "mb-5", "pb-2"], [1, "col-md-8", "text-center", "heading-section", "ftco-animate", "fadeInUp", "ftco-animated"], [1, "mb-4", "AboutUsh2MQ"], [1, "AboutUsPMQ"], [1, "row", "ftco-animate", "justify-content-center", "fadeInUp", "ftco-animated"], [1, "col-md-12", 2, "margin-top", "5%"], [3, "options"], ["carouselSlide", ""], [1, "itemWidthXS", 2, "width", "400px", "margin-right", "auto", "margin-left", "auto"], [1, "testimony-wrap", "d-flex"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father1.jpg)"], [1, "text", "ml-2"], [1, "quote", "d-flex", "align-items-center", "justify-content-center"], [1, "icon-quote-left"], [1, "MQPOwl"], [1, "name"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father2.jpg)"], [1, "user-img", "mr-4", 2, "background-image", "url(../../../assets/father4.jpg)"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Step by Step Learning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Call now for free assessment -(01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " (01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Step by Step Learning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Call now for free assessment -(01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " (01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Step by Step Learning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Call now for free assessment -(01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " (01) 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Certified Teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Special Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Book & Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Welcome to AVICENNA ACADEMY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn\u2019t been rewritten, then they are still using her.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "What We Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Safety First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Far far away, behind the word mountains, far from the countries Vokalia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Far far away, behind the word mountains, far from the countries Vokalia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Creative Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Far far away, behind the word mountains, far from the countries Vokalia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h1", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Best price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Far far away, behind the word mountains, far from the countries Vokalia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " AVICENNA Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " 5% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " When you Select 2 Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " AVICENNA Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " 10% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " When you Select 3 Subject Or More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Go to Courses Now For Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Teaching Your Child Some Good Manners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Take a Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "What Parents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Says About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "owl-carousel-o", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, HomeComponent_ng_template_210_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, HomeComponent_ng_template_211_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, HomeComponent_ng_template_212_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, HomeComponent_ng_template_213_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](214, HomeComponent_ng_template_214_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](215, HomeComponent_ng_template_215_Template, 11, 0, "ng-template", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"]], styles: [".carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.carousel-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-image: linear-gradient(180deg, rgba(7, 12, 44, 0.223), rgba(7, 12, 44, 0.716), rgba(7, 12, 44, 0.958));\n}\n.carousel-item[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin-bottom: 1.5rem;\n  font-family: Lato, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  letter-spacing: 1px;\n  line-height: 130%;\n  padding-top: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 1.6rem;\n}\n.carousel-item[_ngcontent-%COMP%]   .block-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.carousel-item[_ngcontent-%COMP%]   .block-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #5fcfdf;\n  padding: 1rem 1.5rem;\n  text-transform: uppercase;\n  margin-top: 0.5rem;\n  margin-bottom: 15px;\n  border-radius: 3px;\n  color: #FFF;\n  font-size: 1rem;\n  letter-spacing: 3px;\n  text-decoration: none;\n}\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 500px;\n  max-height: 600px;\n  background-size: 100% 100%;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 15%;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   .GitFitStrong[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: -230px;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-right: 162px;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   .GitFitStrong[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 662;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .PositionCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  left: 20%;\n  font-size: 20px;\n}\n.carousel-item[_ngcontent-%COMP%]   .CoverPhoto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  width: 30%;\n  margin-right: 5%;\n  margin-top: 4%;\n}\n.carousel-item[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background: #5fcfdf;\n}\n.ftco-services[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: -7%;\n}\n.ftco-services[_ngcontent-%COMP%]   .no-gutters[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  line-height: 1.3;\n  position: relative;\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  margin: 0 auto;\n  margin-top: -60px;\n  border-radius: 50%;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 22px;\n  color: #fff;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .p-2[_ngcontent-%COMP%] {\n  padding: 0.5rem !important;\n}\n.ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .mt-3[_ngcontent-%COMP%], .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n.ftco-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ftco-section[_ngcontent-%COMP%]   .wrap-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.ftco-section[_ngcontent-%COMP%]   .wrap-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.ftco-section[_ngcontent-%COMP%]   .services-2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ftco-section[_ngcontent-%COMP%]   .services-2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.ftco-section[_ngcontent-%COMP%]   .services-2[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.ftco-section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  line-height: 1;\n  position: relative;\n  width: 200px;\n  height: 80px;\n  background: #5fcfdf;\n  border-radius: 50%;\n}\n.ftco-section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n}\n.ftco-section[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #5fcfdf;\n  color: #fff;\n  background: #5fcfdf;\n  border-radius: 40px;\n}\n.ftco-section[_ngcontent-%COMP%]   .styleP[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n.ftco-intro[_ngcontent-%COMP%] {\n  background-image: url('teacherStudents.jpeg');\n  background-attachment: fixed;\n  padding: 8em 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n}\n.ftco-intro[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.5;\n  background: #070c2c;\n}\n.ftco-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 36px;\n  font-weight: 600;\n}\n.ftco-intro[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #5fcfdf;\n  border: 1px solid #5fcfdf;\n  color: #fff;\n}\n.testimony-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7em 0;\n}\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 600;\n  color: #5fcfdf;\n}\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #101850;\n}\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Work Sans\", Arial, sans-serif;\n  background: #fff;\n  font-size: 16px;\n  line-height: 1.8;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n.testimony-section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\n  padding-top: 4em;\n  padding-bottom: 2em;\n  position: relative;\n}\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(0, 0, 0, 0.8);\n}\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 18px;\n  line-height: 30px;\n  color: #252525;\n  font-weight: 300;\n  text-align: justify;\n}\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  margin-bottom: 0;\n  color: #5fcfdf;\n}\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  position: relative;\n}\n#labels[_ngcontent-%COMP%] {\n  padding: 2% 0;\n}\n#labels[_ngcontent-%COMP%]   .btn-offers[_ngcontent-%COMP%] {\n  background-color: #5fcfdf;\n  border: #5fcfdf;\n  width: 50%;\n  height: 50px;\n}\n#labels[_ngcontent-%COMP%]   .btn-offers[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.alizarin[_ngcontent-%COMP%] {\n  background: #101850;\n}\n.dl[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 30px 0;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 2px 2px 12px 3px #ccc;\n}\n.dl[_ngcontent-%COMP%]:before {\n  content: \" \";\n  height: 20px;\n  width: 20px;\n  background: #ddd;\n  border-radius: 20px;\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  margin-left: -10px;\n}\n.dl[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  padding: 10px 15px;\n  margin-top: 10px;\n  text-align: center;\n  min-height: 100px;\n}\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  min-height: 50px;\n  position: relative;\n  font-size: 80px;\n  line-height: 80px;\n  text-align: center;\n  font-weight: bold;\n  padding: 20px 15px 0;\n  color: white;\n}\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]:after {\n  content: \" \";\n  border-right: 20px solid transparent;\n  border-left: 20px solid transparent;\n  position: absolute;\n  bottom: -20px;\n  left: 20%;\n}\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-top: -30px;\n}\n.dl[_ngcontent-%COMP%]   .discount.alizarin[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #101850;\n}\n.dl[_ngcontent-%COMP%]   .discount.peter-river[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #3498db;\n}\n.dl[_ngcontent-%COMP%]   .discount.emerald[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #2ecc71;\n}\n.dl[_ngcontent-%COMP%]   .discount.amethyst[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #9b59b6;\n}\n.dl[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%] {\n  color: #999;\n  margin-top: 10px;\n  padding: 20px 15px;\n}\n.dl[_ngcontent-%COMP%]   .ends[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  color: white;\n  margin-bottom: 10px;\n}\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%] {\n  min-height: 50px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 20px 15px;\n}\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   a.open-code[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  border-radius: 4px;\n  margin-top: 10px;\n  padding: 10px 15px;\n  color: white;\n  background: #f0f0f0;\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .carousel-item[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .block-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .justify-content-center2[_ngcontent-%COMP%] {\n    width: 145px !important;\n  }\n\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsh2MQ[_ngcontent-%COMP%] {\n    font-size: 34px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsPMQ[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .MQimg[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    padding-bottom: 20% !important;\n  }\n\n  .ftco-services[_ngcontent-%COMP%] {\n    margin-top: -9%;\n  }\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-bottom: 3.5em !important;\n  }\n\n  .justify-content-center2[_ngcontent-%COMP%] {\n    width: 110px !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%]   .align-items-centerMQ[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n  }\n\n  .testimony-section[_ngcontent-%COMP%] {\n    padding: 7em 4%;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsh2MQ[_ngcontent-%COMP%] {\n    font-size: 32px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .AboutUsPMQ[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    height: 100px !important;\n  }\n  .testimony-section[_ngcontent-%COMP%]   .MQPOwl[_ngcontent-%COMP%] {\n    text-align: left !important;\n    font-family: auto !important;\n    font-size: 15px !important;\n  }\n\n  #labels[_ngcontent-%COMP%]   .offerMQ[_ngcontent-%COMP%] {\n    padding: 10% 15% !important;\n  }\n\n  .MQimg[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .ftco-services[_ngcontent-%COMP%] {\n    margin-top: -13%;\n  }\n\n  .carousel-item[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n  }\n  .carousel-item[_ngcontent-%COMP%]   .block-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .justify-content-center2[_ngcontent-%COMP%] {\n    width: 140px !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%]   .align-items-centerMQ[_ngcontent-%COMP%] {\n    margin-top: 8% !important;\n  }\n\n  #labels[_ngcontent-%COMP%]   .offerMQ[_ngcontent-%COMP%] {\n    padding: 10% !important;\n  }\n  #labels[_ngcontent-%COMP%]   .btn-offers[_ngcontent-%COMP%] {\n    width: 81%;\n  }\n\n  .itemWidthXS[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .ftco-intro[_ngcontent-%COMP%] {\n    background: #070c2cfa !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKO0FBQ0k7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxpSEFBQTtBQUFSO0FBRVk7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURoQjtBQU1nQjtFQUVJLHFCQUFBO0FBTHBCO0FBT2dCO0VBRUksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUHBCO0FBY1k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQVpoQjtBQXdCZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBdEJwQjtBQXdCb0I7RUFDSSxpQkFBQTtBQXRCeEI7QUF3Qm9CO0VBQ0ksbUJBQUE7QUF0QnhCO0FBeUJvQjtFQUNJLG1CQUFBO0FBdkJ4QjtBQTBCb0I7RUFDSSxpQkFBQTtBQXhCeEI7QUEyQm9CO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtBQTFCeEI7QUE2Qm9CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUEzQnhCO0FBZ0NnQjtFQUVJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQS9CcEI7QUFrQ1k7RUFFSSxtQkFBQTtBQWpDaEI7QUFzQ1E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcENaO0FBd0NBO0VBR0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXZDSjtBQXdDSTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FBdkNSO0FBeUNLO0VBRUcsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUtBLHlCQUFBO0FBeENSO0FBeUNRO0VBSUksYUFBQTtFQUdBLHVCQUFBO0FBeENaO0FBMENRO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFJQSxrQkFBQTtBQXpDWjtBQTRDUTtFQUVJLCtCQUFBO0FBM0NaO0FBNENZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTFDaEI7QUE0Q2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBMUNwQjtBQTZDUztFQUVHLDBCQUFBO0FBNUNaO0FBOENVO0VBRUUsMkJBQUE7QUE3Q1o7QUFrREE7RUFFSSxrQkFBQTtBQWhESjtBQW1EWTtFQUNJLGdCQUFBO0FBakRoQjtBQW1EZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFqRHBCO0FBcURRO0VBRUksbUJBQUE7QUFwRFo7QUF1RGdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBckRwQjtBQXVEb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFyRHhCO0FBMkRTO0VBRUcsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUlBLGtCQUFBO0FBMURaO0FBMkRZO0VBRUksZUFBQTtFQUNBLFdBQUE7QUExRGhCO0FBNkRTO0VBRUcseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTVEWjtBQThEUztFQUdHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUE5RFo7QUFrRUk7RUFFRiw2Q0FBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQWpFRjtBQWtFRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFqRUo7QUFvRUk7RUFFRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkVOO0FBcUVNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFuRVI7QUFzRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFuRUo7QUFzRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBcEVSO0FBcUVRO0VBQ0UsY0FBQTtBQW5FVjtBQXNFUTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBckVWO0FBMkVNO0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMUVSO0FBNkVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQTNFTjtBQTRFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEzRVI7QUE4RU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE1RVI7QUE4RU07RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUVBLDBCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQTlFUjtBQWdGUTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7QUEvRVY7QUF1Rkk7RUFDSSxhQUFBO0FBcEZSO0FBcUZRO0VBRUkseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFwRlo7QUFxRlk7RUFFSSxxQkFBQTtBQXBGaEI7QUF3Rk07RUFDRSxtQkFBQTtBQXJGUjtBQXdGTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQXJGUjtBQXNGUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFwRlY7QUFzRlE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFwRlY7QUFzRlE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQXBGVjtBQXFGVTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQW5GWjtBQXFGVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFuRlo7QUF1RlU7RUFDRSw4QkFBQTtBQXJGWjtBQXlGVTtFQUNFLDhCQUFBO0FBdkZaO0FBMkZVO0VBQ0UsOEJBQUE7QUF6Rlo7QUE2RlU7RUFDRSw4QkFBQTtBQTNGWjtBQThGUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBNUZWO0FBOEZRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTVGVjtBQThGUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNUZWO0FBNkZVO0VBQ0UsY0FBQTtBQTNGWjtBQTZGVTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBM0ZaO0FBcUdJO0VBSWdCO0lBR0ksaUJBQUE7RUF2R3RCO0VBNEdzQjtJQUdJLGlCQUFBO0VBNUcxQjs7RUEySFU7SUFHSSxZQUFBO0lBQ0EsYUFBQTtFQTFIZDtFQWdJYztJQUVJLGVBQUE7RUEvSGxCO0VBa0lrQjtJQUVJLGVBQUE7RUFqSXRCOztFQXdJRTtJQUVJLHVCQUFBO0VBdElOOztFQTBJSTtJQUVFLDBCQUFBO0VBeElOO0VBMklJO0lBRUUsMEJBQUE7RUExSU47O0VBK0lFO0lBRUUscUJBQUE7RUE3SUo7QUFDRjtBQWtKSTtFQUdJO0lBRUssOEJBQUE7RUFuSlg7O0VBc0pNO0lBRUksZUFBQTtFQXBKVjtFQXVKYztJQUVJLGdDQUFBO0VBdEpsQjs7RUEySkU7SUFFSSx1QkFBQTtFQXpKTjs7RUE2Skk7SUFFRSx5QkFBQTtFQTNKTjs7RUErSkU7SUFFRSxlQUFBO0VBN0pKO0VBK0pJO0lBRUUsMEJBQUE7RUE5Sk47RUFpS0k7SUFFRSwwQkFBQTtFQWhLTjtFQW1LSTtJQUVFLHVCQUFBO0lBQ0Esd0JBQUE7RUFsS047RUFvS0k7SUFFRSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7RUFuS047O0VBMEtJO0lBRUUsMkJBQUE7RUF4S047O0VBNEtFO0lBRUUsc0JBQUE7RUExS0o7QUFDRjtBQStLSTtFQUVJO0lBRUksZ0JBQUE7RUEvS1Y7O0VBbUxVO0lBR0ksNEJBQUE7RUFsTGQ7RUF1TGM7SUFHSSxpQkFBQTtFQXZMbEI7O0VBZ01NO0lBRUksdUJBQUE7RUE5TFY7O0VBa01RO0lBRUUseUJBQUE7RUFoTVY7O0VBc01RO0lBRUUsdUJBQUE7RUFwTVY7RUF1TVU7SUFHSSxVQUFBO0VBdk1kOztFQTZNTTtJQUVFLHNCQUFBO0VBM01SOztFQTZNTTtJQUVFLGdDQUFBO0VBM01SO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BbGxDb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcm91c2VsLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY292ZXJcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoNywgMTIsIDQ0LCAwLjIyMykscmdiYSg3LCAxMiwgNDQsIDAuNzE2KSwgcmdiYSg3LCAxMiwgNDQsIDAuOTU4KSk7XG4gICAgfVxuICAgICAgICAgICAgLnNsb2dhblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvY2stYnV0dG9uXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnV0dG9uXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWZjZmRmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuMjUsLjAxNSwuOTk1KSxib3JkZXIgLjNzIGN1YmljLWJlemllciguMjUsLjI1LC4wMTUsLjk5NSksLXdlYmtpdC1ib3gtc2hhZG93IC4zcyBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDo2MDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkNvdmVyUGhvdG97XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBoMXtcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICAgIH1cbiAgICAgICAgICAgICAgICAuUG9zaXRpb25DYXB0aW9ue1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGgzLGg0LC5HaXRGaXRTdHJvbmcsaDEscHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMzBweDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuR2l0Rml0U3Ryb25ne1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjYyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ0bntcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJvdXNlbC1jYXB0aW9uXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuYXNpZGVcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWZjZmRmO1xuICAgICAgICB9XG5cblxuLmZ0Y28tc2VydmljZXNcbntcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IC03JTtcbiAgICAubm8tZ3V0dGVyc1xuICAgICB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgIH1cbiAgICAgLnNlcnZpY2VzXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC5tZWRpYVxuICAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvblxuICAgICAgICAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLm1lZGlhLWJvZHlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAucC0yXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tdC0zLCAubXktM1xuICAgICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICB9XG5cbn0gXG4uZnRjby1zZWN0aW9uIHtcbiAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLndyYXAtYWJvdXRcbiAgICAgICAge1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZXMtMlxuICAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIC50ZXh0IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICAuaWNvblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgc3BhblxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAuYnRuLXNlY29uZGFyeVxuICAgICAgICAge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVmY2ZkZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDojNWZjZmRmIDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICB9XG4gICAgICAgICAuc3R5bGVQXG4gICAgICAgICB7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgIH1cbiBcbiAgICB9XG4gICAgLmZ0Y28taW50cm8gXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RlYWNoZXJTdHVkZW50cy5qcGVnJyk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAtODRweDtcbiAgcGFkZGluZzogOGVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gICAgXG4gICAgfVxuICAgIGgyXG4gICAgIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVmY2ZkZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgfVxuICAudGVzdGltb255LXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA3ZW0gMDtcbiAgICAuaGVhZGluZy1zZWN0aW9uXG4gICAge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDE2LCAyNCwgODApOztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcFxuICAgICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC5vd2wtY2Fyb3VzZWxcbiAgICB7XG4gICAgICAub3dsLXN0YWdlLW91dGVyXG4gICAgICAge1xuICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9ueS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICAgXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgIH1cbiAgICAgIC51c2VyLWltZ1xuICAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0XG4gICAgICAgICB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICB9XG4gICAgIFxuICAgXG4gIFxuICAgIH1cbiAgICAjbGFiZWxzIHtcbiAgICAgICAgcGFkZGluZzogMiUgMDtcbiAgICAgICAgLmJ0bi1vZmZlcnNcbiAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmY2ZkZjtcbiAgICAgICAgICAgIGJvcmRlcjogIzVmY2ZkZjtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWxpemFyaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTYsIDI0LCA4MCk7XG4gICAgICB9XG4gICAgXG4gICAgICAuZGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJyYW5kIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXNjb3VudCB7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHggMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpc2NvdW50LmFsaXphcmluIHtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgcmdiKDE2LCAyNCwgODApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzY291bnQucGV0ZXItcml2ZXIge1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjMzQ5OGRiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzY291bnQuZW1lcmFsZCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICMyZWNjNzE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXNjb3VudC5hbWV0aHlzdCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICM5YjU5YjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXNjciB7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVuZHMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY291cG9uIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgICAgICAgYS5vcGVuLWNvZGUge1xuICAgICAgICAgICAgY29sb3I6ICMxNmEwODU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2RlIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG4gICAge1xuICAgICAgICBcbiAgICBcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuICAgIHtcbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5zbG9nYW5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2NrLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAuZnRjby1zZXJ2aWNlc1xuICAgIHtcblxuICAgICAgICAuc2VydmljZXNcbiAgICAgICAge1xuICAgICAgICAgIFxuICAgICAgICAgICAgLmljb25cbiAgICAgICAgICAgIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZWRpYS1ib2R5XG4gICAgICAgICAgICB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9IFxuICAgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyMlxuICAgIHtcbiAgICAgICAgd2lkdGg6IDE0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50ZXN0aW1vbnktc2VjdGlvblxuICAgIHtcbiAgICAgIC5BYm91dFVzaDJNUVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDM0cHggIWltcG9ydGFudDtcbiAgXG4gICAgICB9XG4gICAgICAuQWJvdXRVc1BNUVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgXG4gICAgICB9XG4gIFxuICAgIH1cbiAgICAuTVFpbWdcbiAgICB7XG4gICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcbiAgICB7XG4gICAgICAgIFxuICAgICAgICAuY2Fyb3VzZWwtY2FwdGlvblxuICAgICAgICAge1xuICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMCUgIWltcG9ydGFudDtcbiBcbiAgICAgICAgIH1cbiAgICAgICAgLmZ0Y28tc2VydmljZXNcbiAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTklO1xuICAgICAgICAgICAgLnNlcnZpY2VzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLm1lZGlhLWJvZHlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyMiBcbiAgICB7XG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnRjby1pbnRyb1xuICAgIHtcbiAgICAgIC5hbGlnbi1pdGVtcy1jZW50ZXJNUVxuICAgICAge1xuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICBcbiAgICB9XG4gICAgLnRlc3RpbW9ueS1zZWN0aW9uXG4gICAge1xuICAgICAgcGFkZGluZzogN2VtIDQlO1xuICBcbiAgICAgIC5BYm91dFVzaDJNUVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgXG4gICAgICB9XG4gICAgICAuQWJvdXRVc1BNUVxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgXG4gICAgICB9XG4gICAgICAudXNlci1pbWdcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5NUVBPd2xcbiAgICAgIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgXG4gICAgICB9XG4gIFxuICAgIH1cbiAgICAjbGFiZWxzXG4gICAge1xuICAgICAgLm9mZmVyTVFcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZzogMTAlIDE1JSAhaW1wb3J0YW50O1xuICAgICAgfVxuICBcbiAgICB9XG4gICAgLk1RaW1nXG4gICAge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICBcbiAgICAgXG4gICAgXG4gICAgfSAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcbiAgICB7XG4gICAgICAgIC5mdGNvLXNlcnZpY2VzXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMyU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgXG4gICAgICAgICAgICAuc2xvZ2FuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2NrLWJ1dHRvblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC5idXR0b25cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICBcbiAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfSAgXG4gICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyMiBcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZ0Y28taW50cm9cbiAgICAgICAge1xuICAgICAgICAgIC5hbGlnbi1pdGVtcy1jZW50ZXJNUVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgIH0gIFxuICAgICAgICAjbGFiZWxzXG4gICAgICAgIHtcbiAgICAgICAgICAub2ZmZXJNUVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgICAgIC5idG4tb2ZmZXJzXG4gICAgICAgICAgICB7XG4gICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgxJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5pdGVtV2lkdGhYU1xuICAgICAgICB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZnRjby1pbnRybyBcbiAgICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzBjMmNmYSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }]; }, null); })();


/***/ }),

/***/ "QMPM":
/*!******************************************************************************************************!*\
  !*** ./src/app/AllComponents/Profiles/Instructor/instructor-profile/instructor-profile.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InstructorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorProfileComponent", function() { return InstructorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InstructorProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructorProfileComponent.ɵfac = function InstructorProfileComponent_Factory(t) { return new (t || InstructorProfileComponent)(); };
InstructorProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorProfileComponent, selectors: [["app-instructor-profile"]], decls: 108, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "student-profile", "py-4"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "card", 2, "border", "none"], [1, "card-header", "bg-transparent", "text-center", 2, "border", "none"], [1, "changePhoto", 2, "position", "relative"], ["data-toggle", "modal", "data-target", "#ChangeProfilePhoto", 1, "cover"], ["src", "../../assets/father2.jpg", "alt", "Teacher", 1, "profile_img"], [1, "row", "name"], ["aria-hidden", "true", "data-toggle", "modal", "data-target", "#ChangeUserName", 1, "fas", "fa-edit"], [1, "col-lg-8"], [1, "card", "shadow-sm"], [1, "card-header", "bg-transparent", "border-0"], [1, "mb-0"], [1, "far", "fa-clone", "pr-1"], [1, "card-body", "pt-0"], [1, "table", "table-bordered"], ["width", "30%"], ["width", "2%"], [2, "height", "26px"], [1, "fas", "fa-unlock"], [1, "form-group", "col-lg-12", "text-center"], ["type", "password", "placeholder", "Old Password", "id", "OldPass", "name", "OldPass", 1, "form-control", "OldPass"], ["type", "password", "placeholder", "New Password", "id", "NewPass", "name", "NewPass", 1, "form-control", "col-md-6"], ["type", "password", "placeholder", "Confirm New Password", "id", "ConNewPass", "name", "ConNewPass", 1, "form-control", "col-md-6"], ["id", "ChangeUserName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "placeholder", "New UserName", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"], ["id", "ChangeProfilePhoto", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "btn", "btn-default"], ["type", "file"], [1, "btn", "btn-success"]], template: function InstructorProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ibrahim khalil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "General Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Math");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "name@mail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "123456789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Australia,NORTH SYDNEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Change UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Change Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".student-profile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 2%;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border: 10px solid #ccc;\n  border-radius: 50%;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.student-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n}\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n.student-profile[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px 10px;\n  color: #000;\n}\n#NewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-right: 2%;\n  margin-left: auto;\n}\n#ConNewPass[_ngcontent-%COMP%] {\n  max-width: 38%;\n  margin-left: 2%;\n  margin-right: auto;\n}\n.OldPass[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.name[_ngcontent-%COMP%] {\n  position: relative;\n}\n.name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15%;\n}\n.name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 10px auto;\n  border-radius: 50%;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover {\n  background: rgba(7, 12, 45, 0.53);\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.changePhoto[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 25px;\n  color: white;\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .general-info[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 26%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .general-info[_ngcontent-%COMP%] {\n    margin-top: 7%;\n  }\n\n  #NewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 4%;\n  }\n\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 24%;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .name[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%] {\n    right: 10%;\n  }\n\n  #ConNewPass[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9Qcm9maWxlcy9JbnN0cnVjdG9yL2luc3RydWN0b3ItcHJvZmlsZS9pbnN0cnVjdG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtBQURKO0FBRUM7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUVHO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQURIO0FBR1E7RUFDTCxlQUFBO0VBQ0EsV0FBQTtBQURIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSEg7QUFLRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFISDtBQVVBO0VBRUMsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSRDtBQVdBO0VBRUMsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVREO0FBV0E7RUFFQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVREO0FBV0E7RUFXQyxrQkFBQTtBQWxCRDtBQVNFO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FBUkY7QUFVQztFQUVDLFdBQUE7QUFURjtBQWlCRztFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZkg7QUFnQkc7RUFFQyxpQ0FBQTtBQWZKO0FBZ0JJO0VBRUMsZ0NBQUE7QUFmTDtBQW9CRztFQUVDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQW5CSjtBQThCQztFQUVDO0lBRUMsY0FBQTtFQTdCRDs7RUFrQ0c7SUFHRCxVQUFBO0VBakNGO0FBQ0Y7QUF3Q0M7RUFFQztJQUVDLGNBQUE7RUF4Q0Q7O0VBMkNBO0lBRUQsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUF6Q0M7O0VBNENGO0lBRUMsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VBMUNDOztFQStDRztJQUdELFVBQUE7RUE5Q0Y7QUFDRjtBQW9EQztFQUlHO0lBR0UsVUFBQTtFQXZESjs7RUEwREU7SUFFRCxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VBeEREO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BbGxDb21wb25lbnRzL1Byb2ZpbGVzL0luc3RydWN0b3IvaW5zdHJ1Y3Rvci1wcm9maWxlL2luc3RydWN0b3ItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3R1ZGVudC1wcm9maWxlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXHQuY2FyZCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0XHRwYWRkaW5nOiAyJTtcbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcblx0XHRcdC5wcm9maWxlX2ltZyB7XG5cdFx0XHRcdHdpZHRoOiAxNTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHRcdFx0XHRib3JkZXI6IDEwcHggc29saWQgI2NjYztcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoMyB7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdH1cbiAgICAgICAgcCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHR9XG5cdH1cbiAgICAudGFibGUge1xuXHRcdHRoIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0fVxuXHRcdHRkIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0fVxuXHR9XG59XG5cblxuXG4jTmV3UGFzc1xue1xuXHRtYXgtd2lkdGg6IDM4JTtcblx0bWFyZ2luLXJpZ2h0OiAyJTtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cbn1cbiNDb25OZXdQYXNzXG57ICBcblx0bWF4LXdpZHRoOiAzOCU7XG5cdG1hcmdpbi1sZWZ0OiAyJTtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLk9sZFBhc3Ncbntcblx0d2lkdGg6ODAlO1xuXHRtYXJnaW4tbGVmdDphdXRvIDtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvIDtcbn1cbi5uYW1lXG57XG5cdCAuZmEtZWRpdFxuXHR7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAxNSU7XG5cdH1cblx0aDNcblx0e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXHRcblx0LmNoYW5nZVBob3RvXG5cdHtcblx0XHQgLmNvdmVyXG5cdFx0e1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Jjpob3ZlclxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDcsIDEyLCA0NSwgMC41Myk7XG5cdFx0XHRcdHNwYW5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuXG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c3BhblxuXHRcdFx0e1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcblx0e1xuXHRcdFxuXHRcblx0fVxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG5cdHsgXG5cdFx0LmdlbmVyYWwtaW5mb1xuXHRcdHtcblx0XHRcdG1hcmdpbi10b3A6IDclO1xuXG5cdFx0fVxuXHRcdC5uYW1lXG4gICAgICAgICB7IFxuXHQgIFx0XHQuZmEtZWRpdFxuXHRcdFx0e1xuXHRcdFx0XHRcblx0XHRcdFx0cmlnaHQ6IDI2JTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0XG5cdCAgXG5cdFxuXHR9XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxuXHR7XG5cdFx0LmdlbmVyYWwtaW5mb1xuXHRcdHtcblx0XHRcdG1hcmdpbi10b3A6IDclO1xuXG5cdFx0fVxuXHRcdCNOZXdQYXNzXG57XG5cdG1heC13aWR0aDogODAlO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG59XG4jQ29uTmV3UGFzc1xueyAgXG5cdG1heC13aWR0aDogODAlO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tdG9wOiA0JTtcblx0XG59XG4ubmFtZVxuICAgICAgICAge1xuXHQgIFx0XHQuZmEtZWRpdFxuXHRcdFx0e1xuXHRcdFx0XHRcblx0XHRcdFx0cmlnaHQ6IDI0JTtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHQgXG5cdFxuXHR9ICAgIFxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcblx0e1xuXHRcdC5uYW1lXG5cdFx0e1xuXHRcdFx0IC5mYS1lZGl0XG5cdFx0ICAge1xuXHRcdFx0ICAgXG5cdFx0XHQgICByaWdodDogMTAlO1xuXHRcdCAgIH1cblx0ICAgfVxuXHQgICAjQ29uTmV3UGFzc1xuXHRcdHsgIFxuXHRcdFx0bWF4LXdpZHRoOiA4MCU7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdG1hcmdpbi10b3A6IDYlICFpbXBvcnRhbnQ7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructorProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instructor-profile',
                templateUrl: './instructor-profile.component.html',
                styleUrls: ['./instructor-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = function () { return { "width.%": "100", "max-width.%": "95" }; };
const _c1 = function () { return { "width.%": "20" }; };
const _c2 = function () { return { "width.%": "100", "background-size": "cover", "background-repeat": "no-repeat" }; };
const _c3 = function () { return { "margin-right": "auto" }; };
const _c4 = function () { return [""]; };
const _c5 = function () { return { exact: true }; };
const _c6 = function () { return ["AboutUs"]; };
const _c7 = function () { return ["ExpressionOfInterest"]; };
const _c8 = function () { return ["Course"]; };
const _c9 = function () { return ["contactUs"]; };
const _c10 = function () { return ["/student/LessonsChild"]; };
const _c11 = function () { return ["/instructor/LessonsInstructor"]; };
const _c12 = function () { return ["Parent"]; };
const _c13 = function () { return ["login"]; };
const _c14 = function () { return ["register"]; };
class AppComponent {
    constructor() {
        this.title = 'AVICENNAACADEMY';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 132, vars: 48, consts: [["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0//animate.css", "rel", "stylesheet"], ["id", "ftco-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "ftco_navbar", "ftco-navbar-light"], [1, "container", "d-flex", "align-items-center", 3, "ngStyle"], [1, "navbar-brand", 3, "ngStyle"], ["src", "../assets/logo.png", "alt", "", 1, "logo", 3, "ngStyle"], ["type", "button", "data-toggle", "collapse", "data-target", "#ftco-nav", "aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "ftco-nav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", 3, "ngStyle"], ["aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#ftco-nav", "data-toggle", "collapse", 1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "MQNav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", "MQNav-link", 3, "routerLinkActiveOptions", "routerLink"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#ftco-nav", "data-toggle", "collapse", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"], ["aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#ftco-nav", "data-toggle", "collapse", 1, "dropdown-item"], ["aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#ftco-nav", "data-toggle", "collapse", 1, "btn", "login", "my-2", "my-sm-0", "form-control", 3, "routerLink"], ["aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#ftco-nav", "data-toggle", "collapse", 1, "btn", "login", "my-2", "my-sm-0", "form-control", 2, "margin-left", "2%", 3, "routerLink"], ["href", "https://api.whatsapp.com/send?phone=+20123456789&text=\u0645\u0631\u062D\u0628\u0627", "target", "_blank", 1, "float"], [1, "fab", "fa-whatsapp", "my-float"], ["id", "footer", 1, "footer"], [1, "review-section", "py-5"], [1, "cover"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-6", "order-2", "order-lg-1", 2, "margin", "auto", "width", "60%"], [1, "w-100", "h-100"], [1, "text-white", "text-center", "font-weight-bold", "mb-3"], [1, "input-group", "mb-3"], ["type", "email", "name", "email", "placeholder", "Review...", 1, "form-control"], [1, "input-group-append"], ["data-localize", "Subscribe", "type", "submit", 1, "btn", "start-project-btn", "text-white"], [1, "footer-main"], [1, "container", 2, "padding-left", "0"], [1, "row", "py-5"], [1, "col-12", "col-lg-3"], [1, "h-100", "mx-auto"], ["src", "../assets/logo.png", "alt", "", 2, "background-size", "100% 100%", "width", "100%"], [1, "col-12", "col-lg-3", "mt-4", "mt-lg-0"], [1, "contact-info", "text-center", "text-lg-left"], [1, "ftco-heading-2"], [1, "nav", "flex-column"], [1, "nav-item"], [1, "mr-2"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], [1, "text-white"], ["aria-hidden", "true", 1, "fas", "fa-phone-alt"], ["aria-hidden", "true", 1, "fas", "fa-envelope"], [1, "col-12", "col-lg-3", "mt-3", "mt-lg-0", "text-center", "text-lg-left"], [1, "nav-item", "active"], [1, "nav-link", "hovertext", 3, "routerLink"], [1, "sr-only"], [1, "col-12", "col-lg-3", "mt-4", "mt-lg-0", "text-center", "text-lg-left"], [1, "contact-info"], [1, "nav-item", "social-icons"], ["target", "_blank", "rel", "nofollow noopener", "role", "link"], ["aria-hidden", "true", 1, "fab", "fa-twitter", "hovertext"], ["aria-hidden", "true", 1, "fab", "fa-facebook", "hovertext"], ["aria-hidden", "true", 1, "fab", "fa-linkedin", "hovertext"], [1, "ftco-heading-2", 2, "margin-top", "20px", "margin-bottom", "-10px"], ["src", "../assets/visa.png", "alt", "", 1, "visa", 2, "width", "25%"], ["src", "../assets/paypal.png", "alt", "", 1, "paypal", 2, "width", "50%", "padding", "5%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Expression Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Courses & Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Give us Your Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Review Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Have a Questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Area, City - Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "+20123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\tinfo@yourdomain.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Expression Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Courses & Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Connect With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c7))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c8))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c9));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #070c2c !important;\n  padding-top: 5px;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\n.navbar[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  float: right;\n  background-color: #5fcfdf;\n  color: white;\n  border: none;\n  width: 115px;\n}\n.navbar[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n  color: #5fcfdf;\n  background-color: white;\n}\n.navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 5px #5fcfdf solid;\n}\n.float[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 75px;\n  right: 5px;\n  background-color: #25d366;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 100;\n}\n.float[_ngcontent-%COMP%]   .my-float[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.footer-main[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-color: #070c2c;\n}\n.footer-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: white;\n}\n.footer-main[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%] {\n  color: #a5a5a5 !important;\n}\n.footer-main[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.footer-main[_ngcontent-%COMP%]   .hovertext[_ngcontent-%COMP%]:hover {\n  color: #5fcfdf !important;\n}\n.footer-main[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #F5F6F4 !important;\n  padding: 0.3rem 0rem;\n}\n.footer-main[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-right: 10px;\n  color: #F5F6F4;\n}\n.footer-main[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.footer-main[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.1rem 0rem;\n  color: #a5a5a5 !important;\n}\n.review-section[_ngcontent-%COMP%] {\n  background: #070c2c;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: 1;\n  margin-bottom: -1%;\n}\n.review-section[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.review-section[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%] {\n  margin-left: -5px !important;\n  z-index: 1000;\n}\n.review-section[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #5fcfdf !important;\n}\n.review-section[_ngcontent-%COMP%]   .AtheerFooter[_ngcontent-%COMP%] {\n  color: #5fcfdf;\n  letter-spacing: 10px;\n  font-family: cursive;\n}\n.show-for-medium-up[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .MQNav-link[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    width: 75px;\n    font-size: 13px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    margin-left: 0%;\n    margin-right: 5%;\n  }\n\n  .footer[_ngcontent-%COMP%]   .visa[_ngcontent-%COMP%] {\n    width: 13% !important;\n  }\n  .footer[_ngcontent-%COMP%]   .paypal[_ngcontent-%COMP%] {\n    width: 30% !important;\n    padding: 5% !important;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    margin-left: 0%;\n    margin-right: 5%;\n  }\n\n  .footer[_ngcontent-%COMP%]   .visa[_ngcontent-%COMP%] {\n    width: 13% !important;\n  }\n  .footer[_ngcontent-%COMP%]   .paypal[_ngcontent-%COMP%] {\n    width: 30% !important;\n    padding: 5% !important;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    width: 40% !important;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    margin-left: 0%;\n    margin-right: 5%;\n  }\n\n  .review-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .review-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding: 0% 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBREo7QUFFUTtFQUVELFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURQO0FBRVE7RUFFQyxjQUFBO0VBQ0EsdUJBQUE7QUFEVDtBQUtJO0VBRUksZ0NBQUE7QUFKUjtBQVdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQVJKO0FBU0k7RUFDRSxnQkFBQTtBQVBOO0FBVUk7RUFHSSxzQkFBQTtFQUNBLHlCQUFBO0FBVFI7QUFVUTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFUWjtBQVdRO0VBRUkseUJBQUE7QUFWWjtBQWFRO0VBRUkseUJBQUE7QUFaWjtBQW1CWTtFQUVJLHlCQUFBO0FBbEJoQjtBQXVCYTtFQUVHLHlCQUFBO0VBQ0Esb0JBQUE7QUF0QmhCO0FBeUJhO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXZCaEI7QUEyQlk7RUFFSSxlQUFBO0FBMUJoQjtBQTRCWTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBMUJoQjtBQThCUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBM0JaO0FBNEJZO0VBSVksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQTdCeEI7QUFpQ1k7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUEvQmhCO0FBZ0NnQjtFQUNJLG9DQUFBO0FBOUJwQjtBQWlDZ0I7RUFFQyxjQUFBO0VBQ0Msb0JBQUE7RUFDQSxvQkFBQTtBQWhDbEI7QUEwQ1k7RUFDSSxxQkFBQTtBQXZDaEI7QUEwQ1E7RUFNWTtJQUVJLGVBQUE7RUE3Q3RCO0VBK0NrQjtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBN0N0QjtBQUNGO0FBa0RRO0VBT1k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUF0RHRCOztFQTZEYztJQUVJLHFCQUFBO0VBM0RsQjtFQStEYztJQUVJLHFCQUFBO0lBQ0Esc0JBQUE7RUE5RGxCO0FBQ0Y7QUFxRVE7RUFPWTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQXpFdEI7O0VBZ0ZjO0lBRUkscUJBQUE7RUE5RWxCO0VBa0ZjO0lBRUkscUJBQUE7SUFDQSxzQkFBQTtFQWpGbEI7O0VBc0ZVO0lBRUkscUJBQUE7RUFwRmQ7QUFDRjtBQXlGUTtFQU9ZO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBN0Z0Qjs7RUFvR2M7SUFFSSwwQkFBQTtFQWxHbEI7RUFvR2M7SUFFSSxjQUFBO0VBbkdsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmF2YmFyXG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCAxMiwgNDQpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OjEwMCA7XG4gICAgICAgIC5sb2dpblxuICAgIHtcbiAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmY2ZkZjtcbiAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgICAgJjpob3ZlclxuICAgICAgICB7XG4gICAgICAgICBjb2xvcjogIzVmY2ZkZjtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZVxuICAgIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4ICM1ZmNmZGYgc29saWQ7XG5cbiAgICB9XG4gICAgXG5cbn1cblxuLmZsb2F0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvdHRvbTogNzVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIC5teS1mbG9hdCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZm9vdGVyLW1haW4ge1xuICAgICAgXG4gICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxMiwgNDQpO1xuICAgICAgICBoMlxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXdoaXRlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAgI2E1YTVhNSAhaW1wb3J0YW50XG5cbiAgICAgICAgfVxuICAgICAgICAuZmFzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICAuaG92ZXJ0ZXh0XG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgLmNvbnRhY3QtaW5mbyAge1xuICAgICAgICAgICAgIGxpXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjVGNkY0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjNyZW0gMHJlbTtcblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAuc29jaWFsLWljb25zIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGNUY2RjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdi1pdGVtXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjFyZW0gMHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogICNhNWE1YTUgIWltcG9ydGFudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5yZXZpZXctc2VjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMTIsIDQ0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTElO1xuICAgICAgICAgICAgLmNvdmVyXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAtYXBwZW5kIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmNmZGYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5BdGhlZXJGb290ZXJ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBjb2xvcjogIzVmY2ZkZjtcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmUgO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIC5zaG93LWZvci1tZWRpdW0tdXBcbiAgICAgICAge1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcbiAgICAgICAge1xuICAgICAgICAgICAgLm5hdmJhclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC5NUU5hdi1saW5rXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC5uYXZiYXJcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbGxhcHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAudmlzYVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzJSAhaW1wb3J0YW50O1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBheXBhbFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSBcbiAgICAgICAge1xuICAgICAgICAgICAgLm5hdmJhclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3RlclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC52aXNhXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMlICFpbXBvcnRhbnQ7XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGF5cGFsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyLWJyYW5kXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgfSAgICBcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIC5uYXZiYXJcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbGxhcHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXZpZXctc2VjdGlvblxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoM1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlIDUlO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgfVxuICAgIFxuICAgICBcblxuICAgICAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VRV+":
/*!*************************************************************************!*\
  !*** ./src/app/AllComponents/Auth/forget-pass/forget-pass.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassComponent", function() { return ForgetPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { "width.%": "80", "margin-left": "auto", "margin-right": "auto" }; };
class ForgetPassComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
ForgetPassComponent.ɵfac = function ForgetPassComponent_Factory(t) { return new (t || ForgetPassComponent)(); };
ForgetPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPassComponent, selectors: [["app-forget-pass"]], decls: 34, vars: 2, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1"], [1, "forget-pass"], [1, "text-center"], [1, "far", "fa-user"], [1, "row"], [1, "form-group", "col-lg-12", "text-center"], ["type", "email", "placeholder", "Please enter your email address", "id", "e-mail", "name", "e-mail", 1, "form-control", 3, "ngStyle"], [1, "form-group", "col-6"], ["routerLink", "/login", 1, "btn", "start-project-btn", "btn-cancel", "btn-danger", 2, "margin-left", "50%"], [1, "btn", "start-project-btn", "text-white", "btn-send", "btn-danger", "form-control", 2, "background-color", "#5fcfdf", "margin-right", "50%", "border-color", "#5fcfdf"]], template: function ForgetPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Forgotten Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forgotten Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgotten Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".s1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 6%;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 2%;\n  margin-bottom: 5%;\n  padding: 80px;\n  border-radius: 31px;\n  width: 55%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n  font-size: 75px;\n  margin-bottom: 0%;\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 50%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .Forgotten[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: black !important;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: black !important;\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%] {\n    padding: 45px;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%] {\n    padding: 45px;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%] {\n    padding: 15px !important;\n    width: 75% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (max-width: 450px) {\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    padding-top: 10px !important;\n    width: 80% !important;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .s1[_ngcontent-%COMP%]   .forget-pass[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n    font-size: 55px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9BdXRoL2ZvcmdldC1wYXNzL2ZvcmdldC1wYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFJQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRko7QUFPSTtFQUlJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVJSO0FBWUk7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBWFI7QUFjSTtFQUVJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiUjtBQWNRO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJaO0FBZ0JZO0VBRUkseUJBQUE7QUFmaEI7QUFrQmdCO0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQWpCcEI7QUFtQm9CO0VBRUksY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBbEJ4QjtBQW1Cd0I7RUFJSSxxQkFBQTtBQXBCNUI7QUF5Qm9CO0VBV0ksMkJBQUE7QUFqQ3hCO0FBd0J3QjtFQUVJLGNBQUE7QUF2QjVCO0FBd0I0QjtFQUVJLHVCQUFBO0FBdkJoQztBQThCb0I7RUFhSSw0QkFBQTtBQXhDeEI7QUE4QndCO0VBRUksY0FBQTtBQTdCNUI7QUErQjRCO0VBRUksdUJBQUE7QUE5QmhDO0FBeUNBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdkNKO0FBeUNBO0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBdkNGO0FBd0NFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXZDSjtBQXlDRTtFQUVFLGFBQUE7QUF4Q0o7QUF5Q0k7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXhDTjtBQXlDTTtFQUVFLFdBQUE7RUFDQSxpREFBQTtBQXhDUjtBQXlDUTtFQUNFLFdBQUE7QUF2Q1Y7QUE0Q0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUExQ047QUE2Q0M7RUFJUTtJQU1HLGFBQUE7RUFsRFY7RUE4Q1U7SUFFSSxlQUFBO0VBN0NkO0FBQ0Y7QUF1REM7RUFJTztJQU1HLGFBQUE7RUE3RFQ7RUF5RFM7SUFFSSxlQUFBO0VBeERiO0FBQ0Y7QUFpRUM7RUFJTztJQUVJLHdCQUFBO0lBQ0EscUJBQUE7RUFuRVY7RUFvRVM7SUFFSSxlQUFBO0VBbkViO0FBQ0Y7QUE2RUM7RUFJTztJQUVJLHVCQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtFQS9FVjtFQWdGUztJQUVJLDBCQUFBO0VBL0ViO0VBaUZTO0lBRUksVUFBQTtFQWhGYjtFQWtGUztJQUVJLGVBQUE7RUFqRmI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvQXV0aC9mb3JnZXQtcGFzcy9mb3JnZXQtcGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zMSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYig3OCwgMTc1LCAxODApIDAscmdiKDc4LCAxNzUsIDE4MCkgMTAwJSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTIwZGVnLHJnYigyNTUsIDI1NSwgMjU1KSAwLHJnYig3OCwgMTc1LCAxODApIDEwMCUpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYig3LCAxMiwgNDQpIDAscmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICBcbiAgIFxuICAgICBcbiAgICBoMVxuICAgIHtcbiAgICAgXG4gICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBjb2xvcjojNWZjZmRmIDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICAgIH1cbiAgICAub3JkZXItMlxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA5JTtcbiAgICAgICAgdG9wOiAyNSU7XG5cbiAgICB9XG4gICAgLmZvcmdldC1wYXNzXG4gICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlY2QxO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgICAgIHdpZHRoOiA1NSUgO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAuZmEtdXNlclxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDc1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC50ZXh0LWxpZ2h0Qmx1ZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVmY2ZkZiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sXG4gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY0O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGFydC1wcm9qZWN0LWJ0blxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICM1ZmNmZGYhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAuRm9yZ290dGVuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuLmFzaWRlXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM1ZmNmZGY7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uaGVyby13cmFwXG4ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLm92ZXJsYXkgXG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IC4zO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCAxMiwgNDQpO1xuICB9XG4gIC5zbGlkZXItdGV4dCBcbiAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLmJyZWFkY3J1bWJzXG4gICAgIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgc3BhblxuICAgICAgIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnJlYWQge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxuIHtcbiAgICAgLnMxXG4gICAgIHtcbiAgICAgICAgIC5mb3JnZXQtcGFzc1xuICAgICAgICAge1xuICAgICAgICAgICAgaDFcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nOiA0NXB4O1xuICAgICAgICBcblxuICAgICAgICAgfVxuICAgICB9XG4gICBcbiAgICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcbiB7XG4gICAgLnMxXG4gICAge1xuICAgICAgICAuZm9yZ2V0LXBhc3NcbiAgICAgICAge1xuICAgICAgICAgICBoMVxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcGFkZGluZzogNDVweDtcbiAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxuICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxuIHtcbiAgICAuczFcbiAgICB7XG4gICAgICAgIC5mb3JnZXQtcGFzc1xuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgIGgxXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgfVxuICAgICBcbiAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxuIFxuICBcbiBcbiB9ICAgIFxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxuIHtcbiAgICAuczFcbiAgICB7XG4gICAgICAgIC5mb3JnZXQtcGFzc1xuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgIGgxXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5idG4tZGFuZ2VyXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZhLXVzZXJcbiAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxuICAgICBcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forget-pass',
                templateUrl: './forget-pass.component.html',
                styleUrls: ['./forget-pass.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WwqB":
/*!************************************************************!*\
  !*** ./src/app/AllComponents/courses/courses.component.ts ***!
  \************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["closebutton"];
function CoursesComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoursesComponent_div_26_div_2_Template, 3, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_26_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addCard(item_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enroll Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.visable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.describe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r7.price, " / 1 hr");
} }
function CoursesComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_91_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addCard(item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r11.price, " $ ");
} }
function CoursesComponent_h2_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.totalPriceShow, " \u00A0 $");
} }
function CoursesComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Discount 5 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.totalPriceShow, " \u00A0 $");
} }
function CoursesComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Discount 10 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.totalPriceShow, " \u00A0 $");
} }
class CoursesComponent {
    constructor(wowService, router) {
        this.wowService = wowService;
        this.router = router;
        this.subjects = [
            {
                id: "1",
                name: "math",
                photo: "../../../assets/math.jpg",
                describe: "Some text to describe the course etc...",
                price: 25,
                visable: true
            },
            {
                id: "2",
                name: "biology",
                photo: "../../../assets/biology.jpg",
                describe: "Some text to describe the course etc...",
                price: 30,
                visable: true
            },
            {
                id: "3",
                name: "chemistry",
                photo: "../../../assets/chemistry.jpg",
                describe: "Some text to describe the course etc...",
                price: 20,
                visable: true
            },
            {
                id: "4",
                name: "art",
                photo: "../../../assets/art.jpg",
                describe: "Some text to describe the course etc...",
                price: 16,
                visable: true
            },
            {
                id: "5",
                name: "english",
                photo: "../../../assets/english2.jpg",
                describe: "Some text to describe the course etc...",
                price: 33,
                visable: true
            },
            {
                id: "6",
                name: "geography",
                photo: "../../../assets/geography.jpg",
                describe: "Some text to describe the course etc...",
                price: 23,
                visable: true
            },
            {
                id: "7",
                name: "history",
                photo: "../../../assets/history.jpg",
                describe: "Some text to describe the course etc...",
                price: 28,
                visable: true
            },
            {
                id: "8",
                name: "physics",
                photo: "../../../assets/physics.jpg",
                describe: "Some text to describe the course etc...",
                price: 29,
                visable: true
            },
            {
                id: "9",
                name: "Computer",
                photo: "../../../assets/Computer.jpg",
                describe: "Some text to describe the course etc...",
                price: 44,
                visable: true
            }
        ];
        this.subjectSelect = [];
        this.totalPrice = 0;
        this.totalPriceShow = 0;
    }
    ngOnInit() {
        this.wowService.init();
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    addCard(id) {
        for (let i = 0; i < this.subjects.length; i++) {
            if (id == this.subjects[i].id) {
                if (this.subjects[i].visable == true) {
                    this.subjects[i].visable = false;
                    this.subjectSelect.push(this.subjects[i]);
                }
                else {
                    this.subjects[i].visable = true;
                    for (let j = 0; j < this.subjectSelect.length; j++) {
                        if (id == this.subjectSelect[j].id) {
                            this.subjectSelect.splice(j, 1);
                        }
                    }
                }
            }
        }
        this.totalPrice = 0;
        this.totalPriceShow = 0;
        for (let k = 0; k < this.subjectSelect.length; k++) {
            this.totalPrice = this.totalPrice + this.subjectSelect[k].price;
            if (this.subjectSelect.length == 1) {
                this.totalPriceShow = this.totalPrice;
            }
            if (this.subjectSelect.length == 2) {
                this.totalPriceShow = this.totalPrice - (this.totalPrice * 5 / 100);
            }
            if (this.subjectSelect.length >= 3) {
                this.totalPriceShow = this.totalPrice - (this.totalPrice * 10 / 100);
            }
        }
        if (this.subjectSelect.length == 0) {
            this.closebutton.nativeElement.click();
        }
        // console.log(this.subjectSelect);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-courses"]], viewQuery: function CoursesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, decls: 100, vars: 5, consts: [[1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "popular", "page_section"], [1, "row"], [1, "col"], [1, "section_title", "text-center", "fadeInUp", "wow", "ftco-animated"], [2, "text-align", "center", "font-weight", "bold", "color", "rgb(7, 12, 44)"], [2, "color", "#5fcfdf"], [1, "row", "course_boxes"], ["class", "col-lg-4 course_box ftco-animate  fadeInUp wow ftco-animated", 4, "ngFor", "ngForOf"], ["id", "labels"], [1, "fadeInUp", "wow", 2, "text-align", "center", "font-weight", "bold", "color", "rgb(7, 12, 44)"], [1, "col-md-6", "offerMQ", "fadeInUp", "wow", 2, "padding", "10% 5% 10% 15%"], [1, "dl"], [1, "brand"], [1, "discount", "alizarin"], [1, "type"], [1, "descr"], [1, "col-md-6", "offerMQ", "fadeInUp", "wow", 2, "padding", "10% 15% 10% 5%"], ["Payment", "ngForm"], ["id", "Payment", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", 2, "margin-top", "2%"], [1, "modal-content"], [1, "modal-header"], [2, "color", "rgb(7, 12, 44)"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["closebutton", ""], [1, "modal-body"], [1, "checkout-inner"], ["for", "Country"], [1, "text-lightBlue"], [1, "form-group", "col-lg-12"], ["name", "numberChild", "aria-label", "Default select example", 1, "form-control"], ["disabled", "", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "checkout-summary"], [1, "Cart-Total"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "anotherSubject"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "background", "#5fcfdf", "border-color", "#5fcfdf"], [1, "col-lg-4", "course_box", "ftco-animate", "fadeInUp", "wow", "ftco-animated"], [1, "card"], ["class", "coverSelected", 4, "ngIf"], [1, "imgback"], [1, "cover"], ["alt", "Math", 1, "card-img-top", 3, "src"], [1, "card-body", "text-center"], [1, "card-title"], ["href", "courses.html"], [1, "card-text"], [1, "price_box", "d-flex", "flex-row", "align-items-center"], ["data-toggle", "modal", "data-target", "#Payment", 1, "course_author_name", 3, "click"], [1, "btn", "d-block", "btn-primary", "btn-outline-primary", "py-3"], [1, "course_price", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "coverSelected"], [1, "select"], [1, "sub-total"], ["id", "sub-total", 2, "width", "20%"], ["type", "button", 1, "close", 3, "click"], ["id", "Grandtotal"], ["id", "Discount5%"], [2, "color", "red", "margin-top", "5%", "font-size", "24px"], ["id", "Discount10%"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CoursesComponent_div_26_Template, 19, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " AVICENNA Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 5% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " When you Select 2 Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " AVICENNA Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 10% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " When you Select 3 Subject Or More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "form", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Course reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Choose Your Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Choose Your Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Ahmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mahmoud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Cart Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, CoursesComponent_div_91_Template, 7, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, CoursesComponent_h2_92_Template, 4, 1, "h2", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CoursesComponent_div_93_Template, 7, 1, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, CoursesComponent_div_94_Template, 7, 1, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Add Another Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjectSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjectSelect.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjectSelect.length == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjectSelect.length >= 3);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n\n.s2[_ngcontent-%COMP%] {\n  padding: 0% 10%;\n  position: relative;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column_container[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%] {\n  border: 1px solid #bfbfbf;\n  height: 100%;\n  border-radius: 18px;\n  padding: 60px 40px 40px !important;\n  transition: all 0.5s ease;\n  box-shadow: 2px 2px 12px 3px #ccc;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n  line-height: 36px;\n}\n\n.s2[_ngcontent-%COMP%]   .vc_column-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 18px;\n  line-height: 30px;\n  color: #333;\n  font-weight: 300;\n  text-align: justify;\n}\n\n.ftco-intro[_ngcontent-%COMP%] {\n  background-image: url(\"/../../assets/teacherStudents.jpeg\");\n  background-attachment: fixed;\n  padding: 8em 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  position: relative;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.ftco-intro[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.5;\n  background: #070c2c;\n}\n\n.ftco-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 36px;\n  font-weight: 600;\n}\n\n.ftco-intro[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #5fcfdf;\n  border: 1px solid #5fcfdf;\n  color: #fff;\n}\n\n.testimony-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7em 0;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 600;\n  color: #5fcfdf;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #101850;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .heading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Work Sans\", Arial, sans-serif;\n  background: #fff;\n  font-size: 16px;\n  line-height: 1.8;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.testimony-section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\n  padding-top: 4em;\n  padding-bottom: 2em;\n  position: relative;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-family: \"Roboto\", sans-serif !important;\n  font-size: 18px;\n  line-height: 30px;\n  color: #252525;\n  font-weight: 300;\n  text-align: justify;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  margin-bottom: 0;\n  color: #5fcfdf;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.testimony-section[_ngcontent-%COMP%]   .testimony-wrap[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n  position: relative;\n}\n\n.page_section[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.page_section[_ngcontent-%COMP%]   .section_title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: block;\n  color: #1a1a1a;\n  font-weight: 500;\n  padding-top: 24px;\n}\n\n.page_section[_ngcontent-%COMP%]   .coverSelected[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.64);\n}\n\n.page_section[_ngcontent-%COMP%]   .coverSelected[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  color: #f70000;\n  font-size: 40px;\n  border: 1px red solid;\n  text-align: center;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 26%;\n  transform: rotate(330deg);\n}\n\n.page_section[_ngcontent-%COMP%]   .imgback[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.page_section[_ngcontent-%COMP%]   .imgback[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-image: linear-gradient(180deg, rgba(7, 12, 44, 0.072), rgba(7, 12, 44, 0.225), rgba(7, 12, 44, 0.41));\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%] {\n  margin-top: 68px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%] {\n  margin-bottom: 108px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: #f8f9fb;\n  border: none;\n  box-shadow: 2px 2px 12px 3px #ccc;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #1a1a1a;\n  line-height: 1.2;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #a5a5a5;\n  margin-top: -12px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 67px;\n  background: #eaebec;\n  margin-top: 30px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_price[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 67px;\n  background: #5fcfdf;\n  margin-left: auto;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 7px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_image[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-left: 3%;\n  width: 70%;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #1a1a1a;\n  width: 69%;\n  margin-left: 3%;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #5fcfdf !important;\n  background: 0 0 !important;\n  color: #5fcfdf !important;\n  padding: 9px 12px;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 24px 36px -11px rgba(0, 0, 0, 0.09);\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #5fcfdf !important;\n  color: white !important;\n}\n\n.page_section[_ngcontent-%COMP%]   .course_boxes[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a5a5a5;\n}\n\n.checkout-inner[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 30px;\n  background: #ffffff;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 30px;\n  background: #f3f6ff;\n  margin-bottom: 30px;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   p.sub-total[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  border-top: 1px solid #dddddd;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   p.ship-cost[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  border-top: 1px solid #dddddd;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 12px;\n  border-top: 1px solid #dddddd;\n  margin: 0;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: #f3f6ff;\n  margin-bottom: 30px;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-content[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 2px 10px;\n  font-family: \"Source Code Pro\", monospace;\n  font-weight: 700;\n  font-size: 25px;\n  text-align: center;\n  color: #000000;\n  background: #20b7ff;\n  border: none;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.checkout-inner[_ngcontent-%COMP%]   .checkout-payment[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #20b7ff;\n  background: #000000;\n}\n\n.anotherSubject[_ngcontent-%COMP%] {\n  border: 1px solid #5fcfdf !important;\n  background: 0 0 !important;\n  color: #5fcfdf !important;\n  padding: 9px 12px;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 24px 36px -11px rgba(0, 0, 0, 0.09);\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.anotherSubject[_ngcontent-%COMP%]:hover {\n  background: #5fcfdf !important;\n  color: white !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 5% 0;\n}\n\n.alizarin[_ngcontent-%COMP%] {\n  background: #101850;\n}\n\n.dl[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 30px 0;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 2px 2px 12px 3px #ccc;\n}\n\n.dl[_ngcontent-%COMP%]:before {\n  content: \" \";\n  height: 20px;\n  width: 20px;\n  background: #ddd;\n  border-radius: 20px;\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  margin-left: -10px;\n}\n\n.dl[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  padding: 10px 15px;\n  margin-top: 10px;\n  text-align: center;\n  min-height: 100px;\n}\n\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  min-height: 50px;\n  position: relative;\n  font-size: 80px;\n  line-height: 80px;\n  text-align: center;\n  font-weight: bold;\n  padding: 20px 15px 0;\n  color: white;\n}\n\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]:after {\n  content: \" \";\n  border-right: 20px solid transparent;\n  border-left: 20px solid transparent;\n  position: absolute;\n  bottom: -20px;\n  left: 20%;\n}\n\n.dl[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-top: -30px;\n}\n\n.dl[_ngcontent-%COMP%]   .discount.alizarin[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #101850;\n}\n\n.dl[_ngcontent-%COMP%]   .discount.peter-river[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #3498db;\n}\n\n.dl[_ngcontent-%COMP%]   .discount.emerald[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #2ecc71;\n}\n\n.dl[_ngcontent-%COMP%]   .discount.amethyst[_ngcontent-%COMP%]:after {\n  border-top: 20px solid #9b59b6;\n}\n\n.dl[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%] {\n  color: #999;\n  margin-top: 10px;\n  padding: 20px 15px;\n}\n\n.dl[_ngcontent-%COMP%]   .ends[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  color: white;\n  margin-bottom: 10px;\n}\n\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%] {\n  min-height: 50px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 20px 15px;\n}\n\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   a.open-code[_ngcontent-%COMP%] {\n  color: #16a085;\n}\n\n.dl[_ngcontent-%COMP%]   .coupon[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  border-radius: 4px;\n  margin-top: 10px;\n  padding: 10px 15px;\n  color: white;\n  background: #f0f0f0;\n}\n\n@media (max-width: 767.98px) {\n  .ftco-services[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    padding-bottom: 3.5em !important;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .page_section[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_price[_ngcontent-%COMP%] {\n    width: 30% !important;\n  }\n  .page_section[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%] {\n    width: 64% !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .page_section[_ngcontent-%COMP%] {\n    padding: 50px 20%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .page_section[_ngcontent-%COMP%] {\n    padding: 50px 12%;\n  }\n\n  #labels[_ngcontent-%COMP%]   .offerMQ[_ngcontent-%COMP%] {\n    padding: 10% 15% !important;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .page_section[_ngcontent-%COMP%] {\n    padding: 50px 0%;\n  }\n  .page_section[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    height: 180px !important;\n  }\n  .page_section[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_price[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n  .page_section[_ngcontent-%COMP%]   .course_box[_ngcontent-%COMP%]   .price_box[_ngcontent-%COMP%]   .course_author_name[_ngcontent-%COMP%] {\n    width: 59% !important;\n  }\n\n  #labels[_ngcontent-%COMP%]   .offerMQ[_ngcontent-%COMP%] {\n    padding: 10% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUNFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBRUUsYUFBQTtBQURKOztBQUVJO0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFFTTtFQUVFLFdBQUE7RUFDQSxpREFBQTtBQURSOztBQUVRO0VBQ0UsV0FBQTtBQUFWOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBSE47O0FBTUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFLRTtFQUVFLGlCQUFBO0FBSko7O0FBTUU7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQUxKOztBQU9JO0VBRUUscUJBQUE7QUFOTjs7QUFTSTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFQTjs7QUFTTTtFQUVFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJSOztBQWNBO0VBRUUsMkRBQUE7RUFDQSw0QkFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFiRjs7QUFjRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFnQkk7RUFFRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZk47O0FBaUJNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFmSjs7QUFrQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaEJSOztBQWlCUTtFQUNFLGNBQUE7QUFmVjs7QUFrQlE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWpCVjs7QUF1Qk07RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0QlI7O0FBeUJJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQXZCTjs7QUF3Qk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdkJSOztBQTBCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXhCUjs7QUEwQk07RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUVBLDBCQUFBO0FBMUJSOztBQTRCUTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7QUEzQlY7O0FBbUNJO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUdBLHNCQUFBO0FBakNSOztBQW9DUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxDWjs7QUFxQ1E7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFwQ1Y7O0FBcUNVO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFwQ1o7O0FBd0NRO0VBRUUsa0JBQUE7QUF2Q1Y7O0FBd0NVO0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsZ0hBQUE7QUF2Q1o7O0FBMENRO0VBRUksZ0JBQUE7QUF6Q1o7O0FBMkNZO0VBRUksb0JBQUE7QUExQ2hCOztBQTJDZ0I7RUFFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQTFDcEI7O0FBMkNvQjtFQUVJLHFCQUFBO0FBMUN4Qjs7QUE0Q29CO0VBRUksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBM0N4Qjs7QUE2Q3NCO0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE1Q3hCOztBQTZDd0I7RUFDSSxnQkFBQTtBQTNDNUI7O0FBNEM0QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTFDaEM7O0FBNkM0QjtFQUNJLGdCQUFBO0FBM0NoQzs7QUE2Q2dDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBM0NwQzs7QUErQ3dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBN0M1Qjs7QUErQzRCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBN0NoQzs7QUE4Q2dDO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE1Q3BDOztBQStDNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTdDaEM7O0FBOENnQztFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUE1Q3BDOztBQWdEZ0M7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUE5Q3BDOztBQWdEb0M7RUFFRSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUdBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQS9DdEM7O0FBZ0RzQztFQUVFLDhCQUFBO0VBQ0EsdUJBQUE7QUEvQ3hDOztBQW1Eb0M7RUFDSSxjQUFBO0FBakR4Qzs7QUEyREs7RUFFQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXpETjs7QUEwRE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhEUjs7QUF5RFE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXZEVjs7QUF5RFE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FBdkRWOztBQXlEUTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUF2RFY7O0FBMERVO0VBQ0UsWUFBQTtBQXhEWjs7QUEyRFE7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUE1RFY7O0FBc0RVO0VBQ0UsWUFBQTtBQXBEWjs7QUE0RE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUExRFI7O0FBMkRRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBekRWOztBQTJEUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBekRWOztBQTBEVTtFQUNFLGFBQUE7QUF4RFo7O0FBNERVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTFEWjs7QUEyRFk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUF6RGQ7O0FBK0RLO0VBRUMsb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFHQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUE3RE47O0FBOERNO0VBRUUsOEJBQUE7RUFDQSx1QkFBQTtBQTdEUjs7QUFpRUs7RUFDQyxhQUFBO0FBOUROOztBQWdFSTtFQUNFLG1CQUFBO0FBN0ROOztBQWdFSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQTdETjs7QUE4RE07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBNURSOztBQThETTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTVEUjs7QUE4RE07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQTVEUjs7QUE2RFE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUEzRFY7O0FBNkRRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQTNEVjs7QUErRFE7RUFDRSw4QkFBQTtBQTdEVjs7QUFpRVE7RUFDRSw4QkFBQTtBQS9EVjs7QUFtRVE7RUFDRSw4QkFBQTtBQWpFVjs7QUFxRVE7RUFDRSw4QkFBQTtBQW5FVjs7QUFzRU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXBFUjs7QUFzRU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcEVSOztBQXNFTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBcEVSOztBQXFFUTtFQUNFLGNBQUE7QUFuRVY7O0FBcUVRO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFuRVY7O0FBMkVBO0VBTVE7SUFFTSxnQ0FBQTtFQTlFWjtBQUNGOztBQW9GQTtFQVFRO0lBRUUscUJBQUE7RUExRlI7RUE2RlE7SUFFRSxxQkFBQTtFQTVGVjtBQUNGOztBQXlHQTtFQUVFO0lBRUUsaUJBQUE7RUF6R0Y7QUFDRjs7QUErR0E7RUFFRTtJQUVFLGlCQUFBO0VBL0dGOztFQW9IRTtJQUVFLDJCQUFBO0VBbEhKO0FBQ0Y7O0FBeUhBO0VBRUU7SUFFRSxnQkFBQTtFQXpIRjtFQTBIRTtJQUVFLHdCQUFBO0VBekhKO0VBK0hNO0lBRUUscUJBQUE7RUE5SFI7RUFpSVE7SUFFRSxxQkFBQTtFQWhJVjs7RUE2SUU7SUFFRSx1QkFBQTtFQTNJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNpZGVcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5oZXJvLXdyYXBcbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gIH1cbiAgLnNsaWRlci10ZXh0IFxuICB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAuYnJlYWRjcnVtYnNcbiAgICAge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBzcGFuXG4gICAgICAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5icmVhZCB7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gfVxuLnMyXG57XG4gIHBhZGRpbmc6IDAlIDEwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAudmNfY29sdW1uX2NvbnRhaW5lclxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgLnZjX2NvbHVtbi1pbm5lclxuICB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHggNDBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xuICAgIFxuICAgICY6aG92ZXJcbiAgICB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgIFxuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgfVxuICAgICAgcFxuICAgICAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIFxuICAgICAgfVxuXG4gIH1cbn1cbi5mdGNvLWludHJvIFxue1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi8uLi9hc3NldHMvdGVhY2hlclN0dWRlbnRzLmpwZWcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIC04NHB4O1xuICBwYWRkaW5nOiA4ZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gICAgXG4gICAgfVxuICAgIGgyXG4gICAgIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVmY2ZkZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgfVxuICAudGVzdGltb255LXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA3ZW0gMDtcbiAgICAuaGVhZGluZy1zZWN0aW9uXG4gICAge1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDE2LCAyNCwgODApOztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcFxuICAgICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC5vd2wtY2Fyb3VzZWxcbiAgICB7XG4gICAgICAub3dsLXN0YWdlLW91dGVyXG4gICAgICAge1xuICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlc3RpbW9ueS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgIFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICAgXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgIH1cbiAgICAgIC51c2VyLWltZ1xuICAgICAgIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRcbiAgICAgICAgIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICAgXG4gICBcbiAgXG4gICAgfVxuICAgIC5wYWdlX3NlY3Rpb25cbiAgICAge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAuc2VjdGlvbl90aXRsZSBcbiAgICAgICAge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb3ZlclNlbGVjdGVkXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY0KTtcbiAgICAgICAgICAuc2VsZWN0XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNDcsIDAsIDApO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjYlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW1nYmFja1xuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIC5jb3ZlclxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSg3LCAxMiwgNDQsIDAuMDcyKSxyZ2JhKDcsIDEyLCA0NCwgMC4yMjUpLCByZ2JhKDcsIDEyLCA0NCwgMC40MSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY291cnNlX2JveGVzIFxuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2OHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY291cnNlX2JveFxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDhweDtcbiAgICAgICAgICAgICAgICAuY2FyZFxuICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDNweCAjY2NjO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcFxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLWJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E1YTVhNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlX2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2N3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWViZWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdXJzZV9wcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdXJzZV9hdXRob3JfaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY291cnNlX2F1dGhvcl9uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2OSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNWZjZmRmIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogMCAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGYhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyNHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwuMDkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMjRweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsLjA5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwuMDkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzVmY2ZkZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E1YTVhNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgIH1cbiAgICAgLmNoZWNrb3V0LWlubmVyXG4gICAgICB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAuY2hlY2tvdXQtc3VtbWFyeSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2Y2ZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBwLnN1Yi10b3RhbCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgcC5zaGlwLWNvc3Qge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jaGVja291dC1wYXltZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYXltZW50LW1ldGhvZHMge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YzZjZmZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIC5wYXltZW50LWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWJ0biB7XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMGI3ZmY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjBiN2ZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICB9XG4gICAgIC5hbm90aGVyU3ViamVjdFxuICAgICB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNWZjZmRmIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IDAgMCFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzVmY2ZkZiFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiA5cHggMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyNHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwuMDkpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDI0cHggMzZweCAtMTFweCByZ2JhKDAsMCwwLC4wOSk7XG4gICAgICBib3gtc2hhZG93OiAwIDI0cHggMzZweCAtMTFweCByZ2JhKDAsMCwwLC4wOSk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAmOmhvdmVyXG4gICAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6IzVmY2ZkZiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgIFxuICAgICB9XG4gICAgIHNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogNSUgMDtcbiAgICB9XG4gICAgLmFsaXphcmluIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxNiwgMjQsIDgwKTtcbiAgICB9XG4gIFxuICAgIC5kbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAzcHggI2NjYztcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgIH1cbiAgICAgIC5icmFuZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5kaXNjb3VudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAudHlwZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRpc2NvdW50LmFsaXphcmluIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCByZ2IoMTYsIDI0LCA4MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXNjb3VudC5wZXRlci1yaXZlciB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgIzM0OThkYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRpc2NvdW50LmVtZXJhbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICMyZWNjNzE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXNjb3VudC5hbWV0aHlzdCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgIzliNTliNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRlc2NyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAgIH1cbiAgICAgIC5lbmRzIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuY291cG9uIHtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgICAgIGEub3Blbi1jb2RlIHtcbiAgICAgICAgICBjb2xvcjogIzE2YTA4NTtcbiAgICAgICAgfVxuICAgICAgICAuY29kZSB7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcbiBcbiAgICBcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweClcbntcbiAgICAgIC5mdGNvLXNlcnZpY2VzXG4gICAgICB7XG4gICAgICAgIC5zZXJ2aWNlc1xuICAgICAgICB7XG4gICAgICAgIC5tZWRpYS1ib2R5XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVlbSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcbntcbiAgLnBhZ2Vfc2VjdGlvblxuICB7XG4gICAgLmNvdXJzZV9ib3hcbiAgICB7XG4gICAgICAucHJpY2VfYm94XG4gICAgICB7XG4gICAgICAgIC5jb3Vyc2VfcHJpY2VcbiAgICAgICAgIHtcbiAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gICAgICAgICB9XG4gICAgICAgXG4gICAgICAgICAgLmNvdXJzZV9hdXRob3JfbmFtZSBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogNjQlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgIFxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuICAgIFxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpXG57XG4gIC5wYWdlX3NlY3Rpb25cbiAge1xuICAgIHBhZGRpbmc6IDUwcHggMjAlO1xuXG4gIH1cbiAgICBcbiAgXG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxue1xuICAucGFnZV9zZWN0aW9uXG4gIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEyJTtcblxuICB9XG4gICNsYWJlbHNcbiAge1xuICAgIC5vZmZlck1RXG4gICAge1xuICAgICAgcGFkZGluZzogMTAlIDE1JSAhaW1wb3J0YW50O1xuICAgIH1cblxuICB9XG5cbiBcblxufSAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxue1xuICAucGFnZV9zZWN0aW9uXG4gIHtcbiAgICBwYWRkaW5nOiA1MHB4IDAlO1xuICAgIC5jYXJkLWltZy10b3BcbiAgICB7XG4gICAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb3Vyc2VfYm94XG4gICAge1xuICAgICAgLnByaWNlX2JveFxuICAgICAge1xuICAgICAgICAuY291cnNlX3ByaWNlXG4gICAgICAgICB7XG4gICAgICAgICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAgIC5jb3Vyc2VfYXV0aG9yX25hbWUgXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDU5JSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICBcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbiAgI2xhYmVsc1xuICB7XG4gICAgLm9mZmVyTVFcbiAgICB7XG4gICAgICBwYWRkaW5nOiAxMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgfVxuICAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.scss']
            }]
    }], function () { return [{ type: ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { closebutton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closebutton']
        }] }); })();


/***/ }),

/***/ "XWQr":
/*!******************************************************************************************!*\
  !*** ./src/app/AllComponents/expression-of-interest/expression-of-interest.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ExpressionOfInterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionOfInterestComponent", function() { return ExpressionOfInterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");







function ExpressionOfInterestComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_29_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
} }
function ExpressionOfInterestComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_34_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.lastName.errors.required);
} }
function ExpressionOfInterestComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_40_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpressionOfInterestComponent_div_40_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email || ctx_r2.f.email.errors.pattern);
} }
function ExpressionOfInterestComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile Number Must Be Only Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_45_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpressionOfInterestComponent_div_45_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.pattern);
} }
function ExpressionOfInterestComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Your Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_78_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.numberChild.errors.required);
} }
function ExpressionOfInterestComponent_div_79_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_79_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_79_div_2_div_9_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.numberChildren.controls[i_r15].get("name").errors == null ? null : ctx_r16.numberChildren.controls[i_r15].get("name").errors.required);
} }
function ExpressionOfInterestComponent_div_79_div_2_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_79_div_2_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_79_div_2_div_41_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.numberChildren.controls[i_r15].get("AcademicYear").errors == null ? null : ctx_r17.numberChildren.controls[i_r15].get("AcademicYear").errors.required);
} }
function ExpressionOfInterestComponent_div_79_div_2_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_79_div_2_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_79_div_2_div_46_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.numberChildren.controls[i_r15].get("Subject").errors == null ? null : ctx_r18.numberChildren.controls[i_r15].get("Subject").errors.required);
} }
function ExpressionOfInterestComponent_div_79_div_2_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_79_div_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_79_div_2_div_52_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.numberChildren.controls[i_r15].get("PreferredDays").errors == null ? null : ctx_r19.numberChildren.controls[i_r15].get("PreferredDays").errors.required);
} }
function ExpressionOfInterestComponent_div_79_div_2_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpressionOfInterestComponent_div_79_div_2_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpressionOfInterestComponent_div_79_div_2_div_57_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.numberChildren.controls[i_r15].get("PreferredTime").errors == null ? null : ctx_r20.numberChildren.controls[i_r15].get("PreferredTime").errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ExpressionOfInterestComponent_div_79_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student Frist Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpressionOfInterestComponent_div_79_div_2_div_9_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Academic Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Year 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Year 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Year 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Year 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Year 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Year 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Year 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Year 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Year 9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Year 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Year 11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Year 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExpressionOfInterestComponent_div_79_div_2_div_41_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "ng-multiselect-dropdown", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ExpressionOfInterestComponent_div_79_div_2_div_46_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Preferred Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "ng-multiselect-dropdown", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ExpressionOfInterestComponent_div_79_div_2_div_52_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Preferred Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ng-multiselect-dropdown", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ExpressionOfInterestComponent_div_79_div_2_div_57_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Child ", i_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "namechild", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "namechild", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("name").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("name").errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("name").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("name").errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "AcademicYear", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("AcademicYear").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("AcademicYear").errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("AcademicYear").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("AcademicYear").errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "Subject", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("Subject").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("Subject").errors.required)))("placeholder", "Choose Subject")("settings", ctx_r13.dropdownSettings3)("data", ctx_r13.Subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("Subject").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("Subject").errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "Day", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("PreferredDays").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("PreferredDays").errors.required)))("placeholder", "Choose Day")("settings", ctx_r13.dropdownSettings2)("data", ctx_r13.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("PreferredDays").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("PreferredDays").errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "time", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("PreferredTime").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("PreferredTime").errors.required)))("placeholder", "Choose Time")("settings", ctx_r13.dropdownSettings)("data", ctx_r13.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.submitted && (ctx_r13.numberChildren.controls[i_r15].get("PreferredTime").errors == null ? null : ctx_r13.numberChildren.controls[i_r15].get("PreferredTime").errors.required));
} }
function ExpressionOfInterestComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpressionOfInterestComponent_div_79_div_2_Template, 58, 37, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.numberChildren.controls);
} }
class ExpressionOfInterestComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.days = [];
        this.selectedDays = [];
        this.time = [];
        this.selectTime = [];
        this.Subject = [];
        this.numberChild = 1;
        this.checkNumberChilds = false;
        this.submitted = false;
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dropdownSettings2 = {
            singleSelection: false,
            idField: 'item_id2',
            textField: 'item_text2',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dropdownSettings3 = {
            singleSelection: false,
            idField: 'item_id3',
            textField: 'item_text3',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*com$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
            numberChild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comment: [''],
            numberChildren: this.formBuilder.array([])
        });
    }
    get numberChildren() {
        return this.registerForm.get("numberChildren");
    }
    newchild() {
        return this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PreferredDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            AcademicYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PreferredTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        this.days = [
            "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ];
        this.time = [
            '8 AM',
            '9 AM',
            '10 AM',
            '11 AM',
        ];
        this.Subject = [
            'Mathematics',
            'Science',
            'Biology',
        ];
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
    numformgroupValdiation() {
        var Childs = +document.getElementById("numberChildren").value;
        this.numberChild = Childs;
        while (this.numberChildren.length !== 0) {
            this.numberChildren.removeAt(0);
        }
        for (let i = 0; i < Childs; i++) {
            this.numberChildren.push(this.newchild());
        }
        this.numformschildren();
    }
    numformschildren() {
        this.checkNumberChilds = true;
        return Array(this.numberChild);
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var dataFormCome = this.registerForm.value;
        var dataFormGo = {
            "firstName": dataFormCome.firstName,
            "lastName": dataFormCome.lastName,
            "email": dataFormCome.email,
            "phone": dataFormCome.phone,
            "numberChild": dataFormCome.numberChild,
            "comment": dataFormCome.comment,
        };
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(dataFormCome));
        console.log(dataFormCome);
    }
}
ExpressionOfInterestComponent.ɵfac = function ExpressionOfInterestComponent_Factory(t) { return new (t || ExpressionOfInterestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ExpressionOfInterestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpressionOfInterestComponent, selectors: [["app-expression-of-interest"]], decls: 91, vars: 22, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread", "RegisterH2"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1"], [1, "Expression-Of-Interest"], [1, "text-center"], [1, "far", "fa-user"], [1, "text-center", "RegisterH"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group", "col-lg-6"], ["for", "name"], ["type", "text", "formControlName", "firstName", "placeholder", "Frist Name", "id", "Frist name", "name", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastName", "placeholder", "Last Name", "id", "Last name", "name", "name", 1, "form-control", 3, "ngClass"], ["for", "e-mail"], ["formControlName", "email", "type", "email", "placeholder", "E-mail", "id", "e-mail", "name", "e-mail", 1, "form-control", 3, "ngClass"], ["for", "Country"], ["formControlName", "phone", "type", "phone", "placeholder", "Mobile Number", "id", "phone", "name", "phone", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-lg-12"], ["id", "numberChildren", "formControlName", "numberChild", "name", "numberChild", "aria-label", "Default select example", 1, "form-control", 3, "ngClass", "change"], ["value", "", "disabled", "", "selected", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [4, "ngIf"], [1, "form-group"], ["for", "message"], ["formControlName", "comment", "rows", "4", "id", "message", "name", "message", 1, "form-control"], [1, "large-24", "columns"], ["type", "checkbox", 1, "politiqueConfidentialiteCheck"], ["for", "rgpd-check-2-1", 1, "politiqueConfidentialiteCheckLabel"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "start-project-btn", "text-white", "form-control", 2, "background-color", "#5fcfdf"], [1, "invalid-feedback"], ["formArrayName", "numberChildren", 1, "row", "content-child"], ["class", "col-md-5 infoStudent", 4, "ngFor", "ngForOf"], [1, "col-md-5", "infoStudent"], [3, "formGroupName"], [1, "childHead", "text-center"], ["type", "text", "formControlName", "name", "placeholder", "Student Frist Name", 1, "form-control", 3, "ngClass", "id", "name"], ["formControlName", "AcademicYear", "aria-label", "Default select example", 1, "form-control", 3, "ngClass", "id"], ["for", "Subject"], ["formControlName", "Subject", "name", "time", 1, "checkBoxSelection", 3, "ngClass", "placeholder", "settings", "data", "id"], ["formControlName", "PreferredDays", "name", "days", 1, "checkBoxSelection", 3, "ngClass", "placeholder", "settings", "data", "id"], ["formControlName", "PreferredTime", "name", "time", 1, "checkBoxSelection", 3, "ngClass", "placeholder", "settings", "data", "id"]], template: function ExpressionOfInterestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Expression Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Expression Of Interest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Expression Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExpressionOfInterestComponent_Template_form_ngSubmit_23_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Frist Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ExpressionOfInterestComponent_div_29_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ExpressionOfInterestComponent_div_34_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ExpressionOfInterestComponent_div_40_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ExpressionOfInterestComponent_div_45_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Number Of Children ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExpressionOfInterestComponent_Template_select_change_51_listener() { return ctx.numformgroupValdiation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Number Of Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ExpressionOfInterestComponent_div_78_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ExpressionOfInterestComponent_div_79_Template, 3, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "textarea", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Subscribe To AVICENNA Academy comms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.numberChild.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.numberChild.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkNumberChilds == true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"]], styles: [".s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n  margin-bottom: 5%;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding: 50px;\n  border-radius: 31px;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n  font-size: 75px;\n  margin-bottom: 2%;\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 4%;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%]   .childHead[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #070c2c;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 5%;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%]   .infoStudent[_ngcontent-%COMP%] {\n  border: 2px solid #7070708a;\n  border-radius: 20px;\n  padding: 30px;\n  margin: 2%;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #707070;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 60%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .Expression-Of-Interest[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n@media only screen and (max-width: 767px) {\n  .RegisterH2[_ngcontent-%COMP%] {\n    font-size: 1.8rem !important;\n    margin-bottom: 0% !important;\n  }\n\n  .Expression-Of-Interest[_ngcontent-%COMP%] {\n    padding: 30px !important;\n    width: 85% !important;\n  }\n  .Expression-Of-Interest[_ngcontent-%COMP%]   .RegisterH[_ngcontent-%COMP%] {\n    font-size: 1.5rem !important;\n    margin-bottom: 18% !important;\n  }\n  .Expression-Of-Interest[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n    font-size: 60px !important;\n  }\n  .Expression-Of-Interest[_ngcontent-%COMP%]   .politiqueConfidentialiteCheckLabel[_ngcontent-%COMP%] {\n    font-size: 0.5rem !important;\n  }\n  .Expression-Of-Interest[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n  .Expression-Of-Interest[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%]   .infoStudent[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9leHByZXNzaW9uLW9mLWludGVyZXN0L2V4cHJlc3Npb24tb2YtaW50ZXJlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFJSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQVFJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQVBSO0FBVUk7RUFFSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFVUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFUWjtBQVdRO0VBVUksV0FBQTtFQUNBLGVBQUE7QUFsQlo7QUFTWTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUmhCO0FBWVk7RUFFSSwyQkFBQTtFQUNELG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFYZjtBQWlCUztFQUVHLGlCQUFBO0VBQ0EsY0FBQTtBQWhCWjtBQWtCWTtFQUVJLHlCQUFBO0FBakJoQjtBQW9CZ0I7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FBbkJwQjtBQXFCb0I7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFwQnhCO0FBcUJ3QjtFQUlJLHFCQUFBO0FBdEI1QjtBQTRCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTFCSjtBQTRCQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQTFCRjtBQTJCRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUExQko7QUE0QkU7RUFFRSxhQUFBO0FBM0JKO0FBNEJJO0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUEzQk47QUE0Qk07RUFFRSxXQUFBO0VBQ0EsaURBQUE7QUEzQlI7QUE0QlE7RUFDRSxXQUFBO0FBMUJWO0FBK0JJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBN0JOO0FBMkNDO0VBRUM7SUFHRSw0QkFBQTtJQUNBLDRCQUFBO0VBM0NGOztFQTZDQTtJQUVFLHdCQUFBO0lBQ0EscUJBQUE7RUEzQ0Y7RUE0Q0U7SUFHRSw0QkFBQTtJQUNBLDZCQUFBO0VBNUNKO0VBK0NFO0lBRUUsMEJBQUE7RUE5Q0o7RUFpREU7SUFFRSw0QkFBQTtFQWhESjtFQW9ERTtJQUVFLDBCQUFBO0VBbkRKO0VBb0RJO0lBRUUsd0JBQUE7RUFuRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvZXhwcmVzc2lvbi1vZi1pbnRlcmVzdC9leHByZXNzaW9uLW9mLWludGVyZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMxIHtcblxuICAgIGgxXG4gICAge1xuICAgICBcbiAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDtcbiAgICAgICAgY29sb3I6IzVmY2ZkZiA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcblxuXG4gICAgfVxuICAgIC5vcmRlci0yXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDklO1xuICAgICAgICB0b3A6IDI1JTtcblxuICAgIH1cbiAgICAuRXhwcmVzc2lvbi1PZi1JbnRlcmVzdFxuICAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWNkMTtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgICAgICB3aWR0aDogNzUlIDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgLmZhLXVzZXJcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICBjb2xvcjogIzVmY2ZkZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1jaGlsZFxuICAgICAgICB7XG4gICAgICAgICAgICAuY2hpbGRIZWFkXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig3LCAxMiwgNDQpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgICAgICAuaW5mb1N0dWRlbnRcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwOGE7XG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMiU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICBcbiAgICAgICAgXG4gICAgICAgICBsYWJlbFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQtbGlnaHRCbHVlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY2RjQ7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0LXByb2plY3QtYnRuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzVmY2ZkZiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4uYXNpZGVcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5oZXJvLXdyYXBcbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gIH1cbiAgLnNsaWRlci10ZXh0IFxuICB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAuYnJlYWRjcnVtYnNcbiAgICAge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBzcGFuXG4gICAgICAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5icmVhZCB7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG4ge1xuICAgICBcbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuIHtcbiAgICAgXG4gICBcbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG4ge1xuICAuUmVnaXN0ZXJIMlxuICB7XG4gICAgXG4gICAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5FeHByZXNzaW9uLU9mLUludGVyZXN0XG4gIHtcbiAgICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIC5SZWdpc3RlckhcbiAgICB7XG4gIFxuICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4JSAhaW1wb3J0YW50O1xuICAgIH1cbiBcbiAgICAuZmEtdXNlclxuICAgIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweCAhaW1wb3J0YW50O1xuICBcbiAgICB9XG4gICAgLnBvbGl0aXF1ZUNvbmZpZGVudGlhbGl0ZUNoZWNrTGFiZWxcbiAgICB7XG4gICAgICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgXG4gICAgLmNvbnRlbnQtY2hpbGRcbiAgICB7XG4gICAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcbiAgICAgIC5pbmZvU3R1ZGVudFxuICAgICAge1xuICAgICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICB9XG4gICAgXG5cbiAgICBcbiAgfVxuXG4gIFxuIFxuIH0gICAgXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgXG4ge1xuICAgICBcbiB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpressionOfInterestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expression-of-interest',
                templateUrl: './expression-of-interest.component.html',
                styleUrls: ['./expression-of-interest.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllComponents/home/home.component */ "OhCk");
/* harmony import */ var _AllComponents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllComponents/contact-us/contact-us.component */ "hgms");
/* harmony import */ var _AllComponents_expression_of_interest_expression_of_interest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllComponents/expression-of-interest/expression-of-interest.component */ "XWQr");
/* harmony import */ var _AllComponents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AllComponents/about-us/about-us.component */ "8/4/");
/* harmony import */ var _AllComponents_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AllComponents/Auth/login/login.component */ "GnuV");
/* harmony import */ var _AllComponents_Auth_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AllComponents/Auth/forget-pass/forget-pass.component */ "VRV+");
/* harmony import */ var _AllComponents_Auth_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AllComponents/Auth/change-pass/change-pass.component */ "hxk/");
/* harmony import */ var _AllComponents_Auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AllComponents/Auth/register/register.component */ "aF5r");
/* harmony import */ var _AllComponents_Profiles_Student_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/lessons/lessons.component */ "3U8G");
/* harmony import */ var _AllComponents_Profiles_Student_edite_profile_edite_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/edite-profile/edite-profile.component */ "AhVO");
/* harmony import */ var _AllComponents_Profiles_Student_save_video_save_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/save-video/save-video.component */ "GP77");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-show-hide-password */ "X8Cx");
/* harmony import */ var _AllComponents_Profiles_Student_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/side-bar/side-bar.component */ "JApw");
/* harmony import */ var _AllComponents_courses_courses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AllComponents/courses/courses.component */ "WwqB");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_side_bar_instructor_side_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-side-bar/instructor-side-bar.component */ "8L1Y");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_lessons_instructor_lessons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-lessons/instructor-lessons.component */ "O1j+");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_profile_instructor_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-profile/instructor-profile.component */ "QMPM");
/* harmony import */ var _AllComponents_Profiles_parent_parent_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AllComponents/Profiles/parent/parent.component */ "77dL");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_17__["NgwWowModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"],
            ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_20__["ShowHidePasswordModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _AllComponents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
        _AllComponents_expression_of_interest_expression_of_interest_component__WEBPACK_IMPORTED_MODULE_6__["ExpressionOfInterestComponent"],
        _AllComponents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
        _AllComponents_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _AllComponents_Auth_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPassComponent"],
        _AllComponents_Auth_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_10__["ChangePassComponent"],
        _AllComponents_Auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _AllComponents_Profiles_Student_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_12__["LessonsComponent"],
        _AllComponents_Profiles_Student_edite_profile_edite_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditeProfileComponent"],
        _AllComponents_Profiles_Student_save_video_save_video_component__WEBPACK_IMPORTED_MODULE_14__["SaveVideoComponent"],
        _AllComponents_Profiles_Student_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_21__["SideBarComponent"],
        _AllComponents_courses_courses_component__WEBPACK_IMPORTED_MODULE_22__["CoursesComponent"],
        _AllComponents_Profiles_Instructor_instructor_side_bar_instructor_side_bar_component__WEBPACK_IMPORTED_MODULE_23__["InstructorSideBarComponent"],
        _AllComponents_Profiles_Instructor_instructor_lessons_instructor_lessons_component__WEBPACK_IMPORTED_MODULE_24__["InstructorLessonsComponent"],
        _AllComponents_Profiles_Instructor_instructor_profile_instructor_profile_component__WEBPACK_IMPORTED_MODULE_25__["InstructorProfileComponent"],
        _AllComponents_Profiles_parent_parent_component__WEBPACK_IMPORTED_MODULE_26__["ParentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_17__["NgwWowModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"],
        ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_20__["ShowHidePasswordModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _AllComponents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
                    _AllComponents_expression_of_interest_expression_of_interest_component__WEBPACK_IMPORTED_MODULE_6__["ExpressionOfInterestComponent"],
                    _AllComponents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                    _AllComponents_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _AllComponents_Auth_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_9__["ForgetPassComponent"],
                    _AllComponents_Auth_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_10__["ChangePassComponent"],
                    _AllComponents_Auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _AllComponents_Profiles_Student_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_12__["LessonsComponent"],
                    _AllComponents_Profiles_Student_edite_profile_edite_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditeProfileComponent"],
                    _AllComponents_Profiles_Student_save_video_save_video_component__WEBPACK_IMPORTED_MODULE_14__["SaveVideoComponent"],
                    _AllComponents_Profiles_Student_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_21__["SideBarComponent"],
                    _AllComponents_courses_courses_component__WEBPACK_IMPORTED_MODULE_22__["CoursesComponent"],
                    _AllComponents_Profiles_Instructor_instructor_side_bar_instructor_side_bar_component__WEBPACK_IMPORTED_MODULE_23__["InstructorSideBarComponent"],
                    _AllComponents_Profiles_Instructor_instructor_lessons_instructor_lessons_component__WEBPACK_IMPORTED_MODULE_24__["InstructorLessonsComponent"],
                    _AllComponents_Profiles_Instructor_instructor_profile_instructor_profile_component__WEBPACK_IMPORTED_MODULE_25__["InstructorProfileComponent"],
                    _AllComponents_Profiles_parent_parent_component__WEBPACK_IMPORTED_MODULE_26__["ParentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_17__["NgwWowModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"],
                    ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_20__["ShowHidePasswordModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF5r":
/*!*******************************************************************!*\
  !*** ./src/app/AllComponents/Auth/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class RegisterComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 55, vars: 0, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread", "RegisterH2"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1"], [1, "contact-us-card"], [1, "text-center"], [1, "far", "fa-user"], [1, "text-center", "RegisterH"], [1, "row"], [1, "form-group", "col-lg-6"], ["for", "name"], ["type", "text", "placeholder", "Frist Name", "id", "Frist name", "name", "name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "id", "Last name", "name", "name", 1, "form-control"], ["for", "e-mail"], ["type", "email", "placeholder", "E-mail", "id", "e-mail", "name", "e-mail", 1, "form-control"], ["for", "Country"], [1, "form-group"], ["type", "tel", "placeholder", "Mobile Number", "id", "phone", "name", "phone", 1, "form-control"], ["for", "Password"], ["type", "password", "placeholder", "Password", "id", "Password", "name", "Password", 1, "form-control"], ["for", "ConfirmPass"], ["type", "password", "placeholder", "Confirm Password", "id", "ConfirmPass", "name", "ConfirmPass", 1, "form-control"], [1, "form-group", "text-center"], [1, "btn", "start-project-btn", "text-white", "form-control", 2, "background-color", "#5fcfdf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register Of Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Register Of Instructor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Frist Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".s1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 5%;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding: 50px;\n  border-radius: 31px;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n  font-size: 75px;\n  margin-bottom: 1%;\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 4%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%]   .childHead[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #070c2c;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin-bottom: 5%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .content-child[_ngcontent-%COMP%]   .infoStudent[_ngcontent-%COMP%] {\n  border: 2px solid #7070708a;\n  border-radius: 20px;\n  padding: 30px;\n  margin: 2%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #707070;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 60%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n@media only screen and (max-width: 767px) {\n  .RegisterH[_ngcontent-%COMP%] {\n    font-size: 1.9rem !important;\n    margin-bottom: 18% !important;\n  }\n\n  .RegisterH2[_ngcontent-%COMP%] {\n    font-size: 1.9rem !important;\n    margin-bottom: 0% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9BdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDRixrQkFBQTtBQUNGO0FBSUk7RUFJSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVNJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQVJSO0FBV0k7RUFFSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFXUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWWjtBQVlRO0VBVUksV0FBQTtFQUNBLGVBQUE7QUFuQlo7QUFVWTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBVGhCO0FBYVk7RUFFSSwyQkFBQTtFQUNELG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFaZjtBQWtCUztFQUVHLGlCQUFBO0VBQ0EsY0FBQTtBQWpCWjtBQW1CWTtFQUVJLHlCQUFBO0FBbEJoQjtBQXFCZ0I7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FBcEJwQjtBQXNCb0I7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFyQnhCO0FBc0J3QjtFQUlJLHFCQUFBO0FBdkI1QjtBQThCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTVCSjtBQThCQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQTVCRjtBQTZCRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE1Qko7QUE4QkU7RUFFRSxhQUFBO0FBN0JKO0FBOEJJO0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE3Qk47QUE4Qk07RUFFRSxXQUFBO0VBQ0EsaURBQUE7QUE3QlI7QUE4QlE7RUFDRSxXQUFBO0FBNUJWO0FBaUNJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBL0JOO0FBNkNDO0VBRUM7SUFHRSw0QkFBQTtJQUNBLDZCQUFBO0VBN0NGOztFQStDQTtJQUdFLDRCQUFBO0lBQ0EsNEJBQUE7RUE5Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvQXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zMSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICBcbiAgXG4gICAgIFxuICAgIGgxXG4gICAge1xuICAgICBcbiAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGNvbG9yOiM1ZmNmZGYgO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuXG4gICAgfVxuICAgIC5vcmRlci0yXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDklO1xuICAgICAgICB0b3A6IDI1JTtcblxuICAgIH1cbiAgICAuY29udGFjdC11cy1jYXJkXG4gICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlY2QxO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgICAgIHdpZHRoOiA3NSUgO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAuZmEtdXNlclxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDc1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWNoaWxkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC5jaGlsZEhlYWRcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDcsIDEyLCA0NCk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgICAgICAgIC5pbmZvU3R1ZGVudFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzA4YTtcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgbWFyZ2luOiAyJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgIGxhYmVsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1saWdodEJsdWUgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGYhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbFxuICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGNDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQtcHJvamVjdC1idG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjNWZjZmRmIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuLmFzaWRlXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM1ZmNmZGY7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uaGVyby13cmFwXG4ge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLm92ZXJsYXkgXG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IC4zO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCAxMiwgNDQpO1xuICB9XG4gIC5zbGlkZXItdGV4dCBcbiAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLmJyZWFkY3J1bWJzXG4gICAgIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgc3BhblxuICAgICAgIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnJlYWQge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxuIHtcbiAgICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcbiB7XG4gICAgIFxuICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxuIHtcbiAgLlJlZ2lzdGVySFxuICB7XG5cbiAgICBmb250LXNpemU6IDEuOXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE4JSAhaW1wb3J0YW50O1xuICB9XG4gIC5SZWdpc3RlckgyXG4gIHtcbiAgICBcbiAgICBmb250LXNpemU6IDEuOXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gXG4gfSAgICBcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcbiB7XG4gICAgIFxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hgms":
/*!******************************************************************!*\
  !*** ./src/app/AllComponents/contact-us/contact-us.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ContactUsComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById('footer').style.width = "100%";
        document.getElementById('footer').style.marginLeft = "0%";
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 48, vars: 0, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1", "text-center"], [1, "contact-us-card"], ["type", "hidden"], [1, "row"], [1, "form-group", "col-lg-6"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "name", "email", 1, "form-control"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "phone", 1, "form-control"], ["id", "Address", "name", "phone", 1, "form-control"], [1, "form-group", 2, "padding", "0% 20%"], ["for", "message"], ["rows", "4", "id", "message", "name", "message", 1, "form-control"], [1, "form-group", "text-center"], [1, "btn", "start-project-btn", "text-white", "form-control", 2, "background-color", "#5fcfdf"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".s1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  padding: 5%;\n}\n.s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 3%;\n  margin-bottom: 5%;\n  padding: 50px;\n  border-radius: 31px;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #707070;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 60%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n@media only screen and (max-width: 767px) {\n  .contact-us-card[_ngcontent-%COMP%] {\n    width: 90% !important;\n    padding: 20px !important;\n  }\n  .contact-us-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFLSSxpQkFBQTtFQUNBLE9BQUE7RUFDQyxRQUFBO0VBQ0QsY0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFNSTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFMUjtBQVFJO0VBRUksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBUVM7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUFOWjtBQVFZO0VBQ0kseUJBQUE7QUFOaEI7QUFRZ0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBTnBCO0FBUW9CO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTnhCO0FBT3dCO0VBRUkscUJBQUE7QUFONUI7QUFZQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUE7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQVdFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUU7RUFFRSxhQUFBO0FBWEo7QUFZSTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWE47QUFZTTtFQUVFLFdBQUE7RUFDQSxpREFBQTtBQVhSO0FBWVE7RUFDRSxXQUFBO0FBVlY7QUFlSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQWJOO0FBMkJDO0VBRUE7SUFPRSxxQkFBQTtJQUNBLHdCQUFBO0VBL0JEO0VBeUJDO0lBRUMsNEJBQUE7RUF4QkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0FsbENvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMxIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA1JTtcblxuICAgIGgxXG4gICAge1xuICAgICBcbiAgIFxuICAgICAgICBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICByaWdodDogMDtcbiAgICAgICAgY29sb3I6IzVmY2ZkZiA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgfVxuICAgIC5vcmRlci0yXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDklO1xuICAgICAgICB0b3A6IDI1JTtcblxuICAgIH1cbiAgICAuY29udGFjdC11cy1jYXJkXG4gICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlY2QxO1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgICAgIHdpZHRoOiA3NSUgO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0LWxpZ2h0Qmx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGYhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdGFydC1wcm9qZWN0LWJ0bntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4uYXNpZGVcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzVmY2ZkZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5oZXJvLXdyYXBcbiB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAub3ZlcmxheSBcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDEyLCA0NCk7XG4gIH1cbiAgLnNsaWRlci10ZXh0IFxuICB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAuYnJlYWRjcnVtYnNcbiAgICAge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBzcGFuXG4gICAgICAge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5icmVhZCB7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXG4ge1xuICAgICBcbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KVxuIHtcbiAgICAgXG4gICBcbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgXG4ge1xuIC5jb250YWN0LXVzLWNhcmRcbiB7IFxuICAgaDFcbiAgIHtcbiAgICBmb250LXNpemU6IDIuMnJlbSAhaW1wb3J0YW50O1xuXG4gICB9XG4gICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gfVxuICBcbiBcbiB9ICAgIFxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIFxuIHtcbiAgICAgXG4gfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hxk/":
/*!*************************************************************************!*\
  !*** ./src/app/AllComponents/Auth/change-pass/change-pass.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function() { return ChangePassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { "width.%": "80", "margin-left": "auto", "margin-right": "auto" }; };
const _c1 = function () { return [""]; };
class ChangePassComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangePassComponent.ɵfac = function ChangePassComponent_Factory(t) { return new (t || ChangePassComponent)(); };
ChangePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePassComponent, selectors: [["app-change-pass"]], decls: 40, vars: 8, consts: [[1, "content"], [1, "hero-wrap", "hero-wrap-2", 2, "background-image", "url('../../../assets/aboutUs.jpg')"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-9", "ftco-animate", "text-center", "fadeInUp", "ftco-animated"], [1, "mb-2", "bread"], [1, "breadcrumbs"], [1, "mr-2"], ["routerLink", ""], [1, "fas", "fa-angle-right"], [1, "aside"], [1, "s1"], [1, "contact-us-card"], [1, "text-center"], [1, "far", "fa-user"], [1, "row"], [1, "form-group", "col-lg-12", "text-center"], ["type", "password", "placeholder", "Please enter your Old Password", "id", "OldPass", "name", "OldPass", 1, "form-control", 3, "ngStyle"], ["type", "password", "placeholder", "Please enter your New Password", "id", "NewPass", "name", "NewPass", 1, "form-control", 3, "ngStyle"], ["type", "password", "placeholder", "Please Confirm New Password", "id", "ConNewPass", "name", "ConNewPass", 1, "form-control", 3, "ngStyle"], [1, "form-group", "col-lg-6"], [1, "btn", "start-project-btn", "btn-danger", 2, "margin-left", "50%", 3, "routerLink"], [1, "btn", "start-project-btn", "text-white", "form-control", 2, "background-color", "#5fcfdf", "margin-right", "50%"]], template: function ChangePassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".s1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.s1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 8%;\n  left: 0;\n  right: 0;\n  color: #5fcfdf;\n  font-weight: bold;\n}\n.s1[_ngcontent-%COMP%]   .order-2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9%;\n  top: 25%;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%] {\n  background-color: #ecececd1;\n  margin-top: 2%;\n  margin-bottom: 5%;\n  padding: 80px;\n  border-radius: 31px;\n  width: 55%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%] {\n  font-size: 75px;\n  margin-bottom: 0%;\n  color: #5fcfdf;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .text-lightBlue[_ngcontent-%COMP%] {\n  color: #5fcfdf !important;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  background-color: #F5F6F4;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 50%;\n  height: 50px;\n}\n.s1[_ngcontent-%COMP%]   .contact-us-card[_ngcontent-%COMP%]   .start-project-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.aside[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  background: #5fcfdf;\n  margin-bottom: 5%;\n}\n.hero-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n}\n.hero-wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  opacity: 0.3;\n  background: #070c2c;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.1);\n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-wrap[_ngcontent-%COMP%]   .bread[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsQ29tcG9uZW50cy9BdXRoL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBS0k7RUFJSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQVVJO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQVRSO0FBWUk7RUFFSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFZUTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYWjtBQWNZO0VBRUkseUJBQUE7QUFiaEI7QUFnQmdCO0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQWZwQjtBQWlCb0I7RUFFSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFoQnhCO0FBaUJ3QjtFQUlJLHFCQUFBO0FBbEI1QjtBQXlCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXZCSjtBQXlCQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXZCRjtBQXdCRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF2Qko7QUF5QkU7RUFFRSxhQUFBO0FBeEJKO0FBeUJJO0VBRUUseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUF4Qk47QUF5Qk07RUFFRSxXQUFBO0VBQ0EsaURBQUE7QUF4QlI7QUF5QlE7RUFDRSxXQUFBO0FBdkJWO0FBNEJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBMUJOIiwiZmlsZSI6InNyYy9hcHAvQWxsQ29tcG9uZW50cy9BdXRoL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnMxIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgICBcbiAgXG4gICBcbiAgICAgXG4gICAgaDFcbiAgICB7XG4gICAgIFxuICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDtcbiAgICAgICAgY29sb3I6IzVmY2ZkZiA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5cbiAgICB9XG4gICAgLm9yZGVyLTJcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogOSU7XG4gICAgICAgIHRvcDogMjUlO1xuXG4gICAgfVxuICAgIC5jb250YWN0LXVzLWNhcmRcbiAgICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjZDE7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgcGFkZGluZzogODBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICAgICAgd2lkdGg6IDU1JSA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIC5mYS11c2VyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgICAgICAgY29sb3I6ICM1ZmNmZGY7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgLnRleHQtbGlnaHRCbHVlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWZjZmRmIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY2RjQ7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0LXByb2plY3QtYnRuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzVmY2ZkZiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgIH1cbiAgICBcbn1cbi5hc2lkZVxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNWZjZmRmO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmhlcm8td3JhcFxuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5vdmVybGF5IFxuICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICBvcGFjaXR5OiAuMztcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMTIsIDQ0KTtcbiAgfVxuICAuc2xpZGVyLXRleHQgXG4gIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIC5icmVhZGNydW1ic1xuICAgICB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIHNwYW5cbiAgICAgICB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJyZWFkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiB9XG5cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVxuIHtcbiAgICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweClcbiB7XG4gICAgIFxuICAgXG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIFxuIHtcbiBcbiAgXG4gXG4gfSAgICBcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSBcbiB7XG4gICAgIFxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-pass',
                templateUrl: './change-pass.component.html',
                styleUrls: ['./change-pass.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _AllComponents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllComponents/about-us/about-us.component */ "8/4/");
/* harmony import */ var _AllComponents_Auth_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllComponents/Auth/change-pass/change-pass.component */ "hxk/");
/* harmony import */ var _AllComponents_Auth_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllComponents/Auth/forget-pass/forget-pass.component */ "VRV+");
/* harmony import */ var _AllComponents_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllComponents/Auth/login/login.component */ "GnuV");
/* harmony import */ var _AllComponents_Auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllComponents/Auth/register/register.component */ "aF5r");
/* harmony import */ var _AllComponents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AllComponents/contact-us/contact-us.component */ "hgms");
/* harmony import */ var _AllComponents_courses_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AllComponents/courses/courses.component */ "WwqB");
/* harmony import */ var _AllComponents_expression_of_interest_expression_of_interest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AllComponents/expression-of-interest/expression-of-interest.component */ "XWQr");
/* harmony import */ var _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AllComponents/home/home.component */ "OhCk");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_lessons_instructor_lessons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-lessons/instructor-lessons.component */ "O1j+");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_profile_instructor_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-profile/instructor-profile.component */ "QMPM");
/* harmony import */ var _AllComponents_Profiles_Instructor_instructor_side_bar_instructor_side_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AllComponents/Profiles/Instructor/instructor-side-bar/instructor-side-bar.component */ "8L1Y");
/* harmony import */ var _AllComponents_Profiles_parent_parent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AllComponents/Profiles/parent/parent.component */ "77dL");
/* harmony import */ var _AllComponents_Profiles_Student_edite_profile_edite_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/edite-profile/edite-profile.component */ "AhVO");
/* harmony import */ var _AllComponents_Profiles_Student_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/lessons/lessons.component */ "3U8G");
/* harmony import */ var _AllComponents_Profiles_Student_save_video_save_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/save-video/save-video.component */ "GP77");
/* harmony import */ var _AllComponents_Profiles_Student_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AllComponents/Profiles/Student/side-bar/side-bar.component */ "JApw");





















const routes = [
    { path: '', component: _AllComponents_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'contactUs', component: _AllComponents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
    { path: 'ExpressionOfInterest', component: _AllComponents_expression_of_interest_expression_of_interest_component__WEBPACK_IMPORTED_MODULE_9__["ExpressionOfInterestComponent"] },
    { path: 'AboutUs', component: _AllComponents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'login', component: _AllComponents_Auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _AllComponents_Auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'forgetPass', component: _AllComponents_Auth_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPassComponent"] },
    { path: 'changePass', component: _AllComponents_Auth_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_3__["ChangePassComponent"] },
    { path: 'student', component: _AllComponents_Profiles_Student_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__["SideBarComponent"],
        children: [
            {
                path: 'LessonsChild',
                component: _AllComponents_Profiles_Student_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_16__["LessonsComponent"],
            },
            {
                path: 'editeProfile',
                component: _AllComponents_Profiles_Student_edite_profile_edite_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditeProfileComponent"],
            },
            {
                path: 'saveVideo',
                component: _AllComponents_Profiles_Student_save_video_save_video_component__WEBPACK_IMPORTED_MODULE_17__["SaveVideoComponent"],
            }
        ],
    },
    { path: 'instructor', component: _AllComponents_Profiles_Instructor_instructor_side_bar_instructor_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["InstructorSideBarComponent"],
        children: [
            {
                path: 'LessonsInstructor',
                component: _AllComponents_Profiles_Instructor_instructor_lessons_instructor_lessons_component__WEBPACK_IMPORTED_MODULE_11__["InstructorLessonsComponent"],
            },
            {
                path: 'editeProfileInstructor',
                component: _AllComponents_Profiles_Instructor_instructor_profile_instructor_profile_component__WEBPACK_IMPORTED_MODULE_12__["InstructorProfileComponent"],
            },
        ],
    },
    { path: 'Parent', component: _AllComponents_Profiles_parent_parent_component__WEBPACK_IMPORTED_MODULE_14__["ParentComponent"] },
    { path: 'Course', component: _AllComponents_courses_courses_component__WEBPACK_IMPORTED_MODULE_8__["CoursesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map