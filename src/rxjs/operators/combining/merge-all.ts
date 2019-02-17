// RxJS v6+
import { of } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

const myPromise = (val: any) =>
  new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
// emit 1,2,3
const source = of(1, 2, 3);

const example = source.pipe(
  // map each value to promise
  map(val => myPromise(val)),
  // emit result from source
  mergeAll()
);

/*
  output:
  "Result: 1"
  "Result: 2"
  "Result: 3"
*/
example.subscribe(val => console.log(val));
