// RxJS v6+
import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

// emit every .1s
const source = interval(100);
// skip the first 5 emitted values
const example = source.pipe(
  skip(5),
  take(10)
);
// output: 5...6...7...8........
example.subscribe(val => console.log(val));
