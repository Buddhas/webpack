import base from './src/css/base.css'
require('./src/css/common.css')
import $ from 'jquery'
import(/*webpackChunkName: "util"*/ './src/js/util').then(module =>{
    // console.log(module)
})
function ajax() {
    $.ajax({
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
    $.ajax({
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