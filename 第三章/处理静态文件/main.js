import base from './src/css/base.css'
import common from './src/css/common.css'

import(/*webpackChunkName: "util"*/ './src/js/util').then(module =>{
    console.log(module)
})