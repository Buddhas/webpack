import base from './src/css/base.css'
import common from './src/css/common.css'
import $ from 'jquery'
import(/*webpackChunkName: "util"*/ './src/js/util').then(module =>{
    // console.log(module)
})
console.log(124)
function ajax() {
    $.ajax({
        url: '/api',
        dataType: 'json',
        // contentType:"application/json",
        type: 'get',
        data: {
            test: 'ajax',
        },
        success: function (res) {
            var data=res;
            console.log(data);
            var str="";

            // $("#list").html(template("list_template",data));
            // data.forEach(function(item,key){
            //     str+="<li class="+item.is_show+">"+item.name+"</li>"
            // });
            // $("#list").html(str)

        }
    })
};
function ajaxToutiao(){
    $.ajax({
        url: '/toutiao',
        dataType: 'json',
        // contentType:"application/json",
        type: 'get',
        data: "",
        success:(res)=>{
            console.log(res)
        }
    })
}
ajax()
ajaxToutiao()