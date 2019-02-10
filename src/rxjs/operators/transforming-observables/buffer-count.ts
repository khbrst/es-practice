import { interval } from 'rxjs';
import { bufferCount, take } from 'rxjs/operators';

const numbers = interval(100).pipe(
  bufferCount(2, 1),
  take(5)
);
numbers.subscribe(x => console.log(x));
