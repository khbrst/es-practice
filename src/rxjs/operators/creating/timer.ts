import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = timer(3000, 1000).pipe(take(3));
numbers.subscribe(x => console.log(x));
