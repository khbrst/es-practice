// RxJS v6+
import { interval } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

const interval$ = interval(1000);
const debouncedInterval = interval$.pipe(
  debounceTime(500),
  take(5)
);
debouncedInterval.subscribe(val =>
  console.log(`Example Two: ${val}`)
);
