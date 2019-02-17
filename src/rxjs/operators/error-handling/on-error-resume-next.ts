import { of, onErrorResumeNext } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
  of(1, 2, 3, 0).pipe(
    map(x => {
      if (x === 0) { throw Error(); }
      return 10 / x;
    })
  ),
  of(1, 2, 3),
).subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
