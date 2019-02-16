// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
// no arguments, emit first value
const example = source.pipe(first());
// output: "First value: 1"
example.subscribe(val => console.log(`First value: ${val}`));
