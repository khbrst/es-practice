// RxJS v6+
import { of } from 'rxjs';
import { concat } from 'rxjs/operators';

// emits 1,2,3
const sourceOne = of(1, 2, 3);
// emits 4,5,6
const sourceTwo = of(4, 5, 6);
// emit values from sourceOne, when complete, subscribe to sourceTwo
const example = sourceOne.pipe(concat(sourceTwo));
// output: 1,2,3,4,5,6
example.subscribe(val =>
  console.log('Example: Basic concat:', val)
);
