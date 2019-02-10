// RxJS v6+
import { of } from 'rxjs';
import { mergeScan } from 'rxjs/operators';

const source = of(1, 2, 3);
const example = source.pipe(mergeScan((acc, curr) => of(acc + curr), 0));
example.subscribe(val => console.log(val));
