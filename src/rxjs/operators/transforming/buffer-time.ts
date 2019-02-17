import { interval } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

const numbers = interval(100).pipe(
  bufferTime(150, 100),
  take(5)
);
numbers.subscribe(x => console.log(x));
