// RxJS v6+
import { Observable, of } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

// emit 'Observable.of() Empty!' when empty, else any values from source
const exampleSource: Observable<string> = of();
const exampleObservable = exampleSource.pipe(defaultIfEmpty('Observable.of() Empty!'));
// output: 'Observable.of() Empty!'
exampleObservable.subscribe((val: any) => console.log(val));
