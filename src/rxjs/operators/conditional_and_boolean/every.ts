import { of } from 'rxjs';
import { every } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6).pipe(
  every(x => x < 5),
).subscribe(x => console.log(x)); // -> false
