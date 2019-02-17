// RxJS v6+
import { interval, timer } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

// emit immediately, then every 5s
const source = timer(0, 5000);
// switch to new inner observable when source emits, invoke project function and emit values
const example = source.pipe(
  switchMap(
    _ => interval(2000),
    (outerValue, innerValue, outerIndex, innerIndex) => ({
      outerValue,
      // tslint:disable-next-line:object-literal-sort-keys
      innerValue,
      outerIndex,
      innerIndex
    })
  ),
  take(6)
);
/*
    Output:
    {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
    {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
    {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
    {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
*/
example.subscribe(val => console.log(val));
