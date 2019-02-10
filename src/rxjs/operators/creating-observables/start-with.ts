import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

of("from source")
  .pipe(startWith("first", "second"))
  .subscribe(x => console.log(x));
