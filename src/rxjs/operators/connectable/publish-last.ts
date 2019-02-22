import { ConnectableObservable, interval } from 'rxjs';
import { publishLast, take, tap } from 'rxjs/operators';

const connectable = interval(1000).pipe(
  tap(x => console.log("side effect", x)),
  take(3),
  publishLast()
) as ConnectableObservable<number>;

connectable.subscribe(
  x => console.log("Sub. A", x),
  err => console.log("Sub. A Error", err),
  () => console.log("Sub. A Complete")
);

connectable.subscribe(
  x => console.log("Sub. B", x),
  err => console.log("Sub. B Error", err),
  () => console.log("Sub. B Complete")
);

connectable.connect();

// Results:
//    "side effect 0"
//    "side effect 1"
//    "side effect 2"
//    "Sub. A 2"
//    "Sub. B 2"
//    "Sub. A Complete"
//    "Sub. B Complete"
