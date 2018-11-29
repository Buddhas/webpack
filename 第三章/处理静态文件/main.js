import base from './src/css/base.css'
import common from './src/css/common.css'
import $ from 'jquery'
import(/*webpackChunkName: "util"*/ './src/js/util').then(module =>{
    console.log(module)
})
function a(){
    $.ajax({
        type:'get',
        url:'/text',
        data:{},
        success:(res)=>{
            console.log(res)
        }
    })
}

a()