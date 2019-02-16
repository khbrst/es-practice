// RxJS v6+
import { interval } from 'rxjs';
import { ignoreElements, take } from 'rxjs/operators';

// emit value every 100ms
const source = interval(100);
// ignore everything but complete
const example = source.pipe(
  take(5),
  ignoreElements()
);
// output: "COMPLETE!"
example.subscribe(
  val => console.log(`NEXT: ${val}`),
  val => console.log(`ERROR: ${val}`),
  () => console.log('COMPLETE!')
);
