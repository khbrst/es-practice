// RxJS v6+
import { interval } from 'rxjs';
import { take, throttle } from 'rxjs/operators';

// emit value every 1 second
const source = interval(1000);
// throttle for 2 seconds, emit latest value
const example = source.pipe(
  throttle(_ => interval(2000)),
  take(4)
);
// output on doc: 0...3...6...9
// output actual: 0...2...4...4
example.subscribe(val => console.log(val));
