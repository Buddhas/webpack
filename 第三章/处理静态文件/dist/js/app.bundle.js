webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_css_base_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);

__webpack_require__(3)

__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(module =>{
    // console.log(module)
})
function ajax() {
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
        url: '/api',
        dataType: 'json',
        type: 'get',
        data: {
            test: 'ajax',
        },
        success: function (res) {
            var data=res;
            console.log(data);
        }
    })
};
function ajaxToutiao(){
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
        url: '/toutiao',
        dataType: 'json',
        type: 'get',
        data: "",
        success:(res)=>{
            console.log(res)
        }
    })
}
ajax()
ajaxToutiao()

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);