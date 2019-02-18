import { asyncScheduler, Observable } from "rxjs";
import { observeOn } from "rxjs/operators";

const source = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(observeOn(asyncScheduler));

console.log('just before subscribe');
source.subscribe(x => console.log(x));
console.log('just after subscribe');
