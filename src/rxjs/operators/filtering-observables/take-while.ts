// RxJS v6+
import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

// emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
// allow values until value from source is greater than 4, then complete
const example = source.pipe(takeWhile(val => val <= 4));
// output: 1,2,3,4
example.subscribe(val => console.log(val));
