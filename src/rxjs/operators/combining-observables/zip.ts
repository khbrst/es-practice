import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

const age$ = of<number>(27, 25, 29);
const name$ = of<string>('Foo', 'Bar', 'Beer');
const isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev })),
)
  .subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
