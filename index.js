// const express = require('express') //using commen js
import express from 'express'; //using Es module scoope
const app = express()


import { simple } from './moduleFirst.js';
simple();

// const herry = require("./second");
import herry from './second.js'
console.log(herry());
// const path = require('./path')
// const osm = require('./osmodule')

// path();
// osm(); //for osmodule file function 

app.get('/',(req,res)=>{
    return res.send("hello world")
})
app.listen(3000,()=>{

console.log('app is lisning on port http://localhost:3000')
})

