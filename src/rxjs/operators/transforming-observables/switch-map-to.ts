// RxJS v6+
import { interval, timer } from 'rxjs';
import { switchMapTo, take } from 'rxjs/operators';

const source = timer(0, 5000);
const example = source.pipe(
  switchMapTo(interval(1100)),
  take(8)
);
example.subscribe(val => console.log(val));
