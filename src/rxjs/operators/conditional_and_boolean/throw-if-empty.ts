// RxJS v6+
import { Observable, of } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';

const exampleSource: Observable<string> = of();
const exampleObservable = exampleSource.pipe(
  throwIfEmpty(() => new Error('Observable.of() Empty!'))
);
exampleObservable.subscribe(
  (val) => console.log(val),
  (err) => console.error(err)
);
