import { interval } from 'rxjs';
import { buffer, take } from 'rxjs/operators';

const numbers = interval(100).pipe(
  buffer(interval(550)),
  take(5)
);
numbers.subscribe(x => console.log(x));
