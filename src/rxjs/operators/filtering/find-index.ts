// RxJS v6+
import { from } from 'rxjs';
import { findIndex } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(findIndex(x => x === 3));
example.subscribe(val => console.log(`Found index: ${val}`));
