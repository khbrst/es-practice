// RxJS v6+
import { interval } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

// emit value every 1s
const source = interval(1000);
// sample last emitted value from source every 2s
const example = source.pipe(
  sampleTime(2000),
  take(5)
);
// output: 2..4..6..8..
example.subscribe(val => console.log(val));
