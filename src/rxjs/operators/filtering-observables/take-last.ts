import { range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x => console.log(x));
