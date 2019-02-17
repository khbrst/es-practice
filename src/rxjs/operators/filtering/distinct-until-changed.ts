import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
  distinctUntilChanged(),
).subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4

interface Person {
  age: number;
  name: string;
}

of<Person>(
  { age: 4, name: 'Foo' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo' },
  { age: 6, name: 'Foo' },
).pipe(
  distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
).subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
