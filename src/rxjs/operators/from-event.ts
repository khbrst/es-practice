import { EventEmitter } from 'events';
import { fromEvent } from 'rxjs';

const eventEmitter = new EventEmitter();

const source = fromEvent(
  eventEmitter,
  'data',
  function (first, second) {
    return { foo: first, bar: second };
  });

source.subscribe(
  function (x) {
    console.log('Next: foo -' + x.foo + ', bar -' + x.bar);
  },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); }
);

eventEmitter.emit('data', 'baz', 'quux');
