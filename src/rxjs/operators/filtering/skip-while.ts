// RxJS v6+
import { interval } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

// emit every .1s
const source = interval(100);
// skip emitted values from source while value is less than 5
const example = source.pipe(
  skipWhile(val => val < 5),
  take(10)
);
// output: 5...6...7...8........
example.subscribe(val => console.log(val));
