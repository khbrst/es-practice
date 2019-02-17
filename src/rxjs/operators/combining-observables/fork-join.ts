import { forkJoin, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const observable = forkJoin(
  interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
  interval(500).pipe(take(4)),  // emit 0, 1, 2, 3 every half a second and complete
);
observable.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('This is how it ends!'),
);

// Logs:
// [2, 3] after 3 seconds
// "This is how it ends!" immediately after
