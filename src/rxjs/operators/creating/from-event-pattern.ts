import { EventEmitter } from 'events';
import { fromEventPattern } from 'rxjs';

const eventEmitter = new EventEmitter();

const source = fromEventPattern(
  (handler) => eventEmitter.addListener('data', handler),
  (handler) => eventEmitter.removeListener('data', handler),
  (first, second) => 'Next: first -' + first + ', second -' + second
);

source.subscribe(
  function (x) {
    console.log(x);
  },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); }
);

eventEmitter.emit('data', 'baz', 'quux');
