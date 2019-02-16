// RxJS v6+
import { interval } from 'rxjs';
import { take, throttleTime } from 'rxjs/operators';

// emit value every 1 second
const source = interval(1000);
/*
  throttle for five seconds
  last value emitted before throttle ends will be emitted from source
*/
const example = source.pipe(
  throttleTime(5000),
  take(3)
);
// output on doc: 0...6...12
// output actual: 0...5...10
example.subscribe(val => console.log(val));
