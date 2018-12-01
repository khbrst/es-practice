import { EventEmitter } from "events";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
// Node.js process will crashed if an EventEmitter instance doesn't listen
// error event.
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
