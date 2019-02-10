// RxJS v6+
import { interval } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

// emit value every one seconds
const source = interval(1000);
// map all emissions to one value
const example = source.pipe(
  mapTo('HELLO WORLD!'),
  take(3)
);
// output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
example.subscribe(val => console.log(val));
