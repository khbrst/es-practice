import { interval, of } from 'rxjs';
import { mergeMapTo, take } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMapTo(interval(1000).pipe(
    take(3)
  )),
);
result.subscribe(x => console.log(x));
