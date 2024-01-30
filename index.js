 const express = require('express') //using commen js
// import express from 'express'; //using Es module scoope
const app = express()

// import {myEmitter } from "./eventmodule.js";

// const myEmitter = require('./eventmodule.js')
// console.log( myEmitter.listeners('waterfull'));


// import { simple } from './moduleFirst.js'; // importing module first file
const simple=require('./moduleFirst.js');
// simple();

const herry = require("./second");
// import herry from './second.js'
// console.log(herry());
// const path = require('./path')
// const osm = require('./osmodule')

// path();
// osm(); //for osmodule file function 

// app.get('/',(req,res)=>{
//     return res.send("hello world")
// })
// app.listen(3000,()=>{

// console.log('app is lisning on port http://localhost:3000')
// })

// const Link = require('./httpserver.js')
// console.log(Link());