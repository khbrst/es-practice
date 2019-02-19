import { interval } from 'rxjs';
import { take, timestamp } from 'rxjs/operators';

interval(1000).pipe(
  timestamp(),
  take(5)
).subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
