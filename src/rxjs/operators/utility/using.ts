import { interval, using } from 'rxjs';
import { take, timestamp } from 'rxjs/operators';

function resourceFactory() {
  return {
    unsubscribe: () => console.log('unsubscribed')
  };
}

function observableFactory() {
  return interval(1000);
}

using(resourceFactory, observableFactory).pipe(
  timestamp(),
  take(5)
).subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
