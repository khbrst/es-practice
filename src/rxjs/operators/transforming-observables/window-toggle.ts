// RxJS v6+
import { interval, timer } from 'rxjs';
import { mergeAll, take, tap, windowToggle } from 'rxjs/operators';

// emit immediately then every 1s
const source = timer(0, 1000);
// toggle window on every 5
const toggle = interval(5000);
const example = source.pipe(
  // turn window on every 5s
  windowToggle(toggle, val => interval((val + 1) * 1000)),
  tap(_ => console.log('NEW WINDOW!'))
);

example
  .pipe(
    // window emits nested observable
    mergeAll(),
    take(10)
  )
  .subscribe(val => console.log(val));
