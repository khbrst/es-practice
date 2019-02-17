// RxJS v6+
import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

// emit every 5s
const source = interval(5000);
// emit every 1s
const secondSource = interval(1000);
const example = source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
example.subscribe(val => console.log(val));
