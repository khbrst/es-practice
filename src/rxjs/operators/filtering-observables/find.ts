// RxJS v6+
import { from } from 'rxjs';
import { find } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(find(x => x === 3));
example.subscribe(val => console.log(`Found value: ${val}`));
