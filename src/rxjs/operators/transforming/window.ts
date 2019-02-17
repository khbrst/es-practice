// RxJS v6+
import { interval, timer } from 'rxjs';
import { mapTo, mergeAll, scan, take, window } from 'rxjs/operators';

// emit immediately then every 1s
const source = timer(0, 1000);
const example = source.pipe(
  window(interval(3000)),
  take(3)
);
const count = example.pipe(
  mapTo(1),
  scan(acc => acc + 1, 0),
  take(2)
);
/*
  "Window 1:"
  0
  1
  2
  "Window 2:"
  3
  4
  5
  ...
*/
count.subscribe((val: any) => console.log(`Window ${val}:`));
example
  .pipe(mergeAll())
  .subscribe(val => console.log(val));
