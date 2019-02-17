import { of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

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
  elementAt(2),
).subscribe(x => console.log(x));
