import { range } from 'rxjs';
import { count } from 'rxjs/operators';

const numbers = range(1, 7);
const result = numbers.pipe(count(i => i % 2 === 1));
result.subscribe(x => console.log(x));
// Results in:
// 4
