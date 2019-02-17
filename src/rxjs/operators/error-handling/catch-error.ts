import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
  map(n => {
    if (n === 4) {
      throw new Error('four!');
    }
    return n;
  }),
  // tslint:disable-next-line:variable-name
  catchError((_err, caught) => caught),
  take(9),
).subscribe(x => console.log(x));

// 1, 2, 3, 1, 2, 3, ...
