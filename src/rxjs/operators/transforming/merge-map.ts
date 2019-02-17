// flatMap is an alias for mergeMap!
import { interval, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(
    map(i => x + i),
    take(3)
  )),
);
result.subscribe(x => console.log(x));
