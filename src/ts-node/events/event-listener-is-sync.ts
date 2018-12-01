import { EventEmitter } from "events";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log('before setImmediate');
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
  console.log('after setImmediate');
});
console.log('before event emit');
myEmitter.emit('event', 'a', 'b');
console.log('after event emit');
