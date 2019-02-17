// RxJS v6+
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

// emit (1,2,3)
const source = of(1, 2, 3);
// start with 0
const example = source.pipe(startWith(0));
// output: 0,1,2,3
example.subscribe(val => console.log(val));
