import { of } from 'rxjs';

of(10, 20, 30)
  .subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
  );

of([1, 2, 3])
  .subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
  );
