// RxJS v6+
import { interval, timer } from 'rxjs';
import { skipUntil, take } from 'rxjs/operators';

// emit every .1s
const source = interval(100);
// skip emitted values from source until inner observable emits (.6s)
const example = source.pipe(
  skipUntil(timer(600)),
  take(10)
);
// output: 5...6...7...8........
example.subscribe(val => console.log(val));
