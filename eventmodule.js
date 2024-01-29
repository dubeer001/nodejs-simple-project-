// import { EventEmitter } from 'node:events';
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('the water is full');
  setTimeout(()=>{
    console.log('Its a gentel reminder please turn off the motor')
  },3000)
});


console.log(myEmitter.emit('waterfull'))

module.exports = myEmitter;
