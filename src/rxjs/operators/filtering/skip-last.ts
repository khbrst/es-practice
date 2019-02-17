import { range } from 'rxjs';
import { skipLast } from 'rxjs/operators';

const many = range(1, 5);
const skipLastTwo = many.pipe(skipLast(2));
skipLastTwo.subscribe(x => console.log(x));

// Results in:
// 1 2 3
