// RxJS v6+
import { ConnectableObservable, interval } from 'rxjs';
import { publish, take, tap } from 'rxjs/operators';

// emit value every 1 second
const source = interval(1000);
const example = source.pipe(
  take(5),
  // side effects will be executed once
  tap(_ => console.log('Do Something!')),
  // do nothing until connect() is called
  publish()
) as ConnectableObservable<number>;

/*
  source will not emit values until connect() is called
  output: (after 5s)
  "Do Something!"
  "Subscriber One: 0"
  "Subscriber Two: 0"
  "Do Something!"
  "Subscriber One: 1"
  "Subscriber Two: 1"
*/
example.subscribe(val =>
  console.log(`Subscriber One: ${val}`)
);
example.subscribe(val =>
  console.log(`Subscriber Two: ${val}`)
);

console.log('Wait for connect...');

// call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
  example.connect();
}, 5000);
