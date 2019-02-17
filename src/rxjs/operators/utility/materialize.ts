import { of } from 'rxjs';
import { map, materialize } from 'rxjs/operators';

const letters = of('a', 'b', 'c', 'd');
const upperCase = letters.pipe(map((x) => x.toUpperCase()));
const materialized = upperCase.pipe(materialize());
materialized.subscribe(x => console.log(x));
