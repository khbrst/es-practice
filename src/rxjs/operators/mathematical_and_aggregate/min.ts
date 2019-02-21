import { of } from 'rxjs';
import { min } from 'rxjs/operators';

interface Person {
  age: number;
  name: string;
}
of<Person>(
  {age: 7, name: 'Foo'},
  {age: 5, name: 'Bar'},
  {age: 9, name: 'Beer'},
).pipe(
  min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1),
)
.subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
