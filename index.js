const express = require('express')
const app = express()
const herry = require("./second");
app.get('/',(req,res)=>{
    return res.send("hello world")
})
app.listen(3000,()=>{

console.log('app is lisning on port http://localhost:3000')
})
console.log(herry)
