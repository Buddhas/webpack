import sum from './sum.js'

let minus = require('./minus.js')

require(['./muti'],function(muti){
    console.log("muti(2*3)=",muti(2,3))
})

console.log("sun(32+5)=",sum(32,5))
console.log("minus(32-5)=",minus(32,5))
