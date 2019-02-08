import { ConnectableObservable, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

const source = from([1, 2, 3]);
const subject = new Subject();
// It is reported issue.
// https://github.com/ReactiveX/rxjs/issues/2972
const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v: number) => console.log(`observerA: ${v}`),
});
multicasted.subscribe({
  next: (v: number) => console.log(`observerB: ${v}`),
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
