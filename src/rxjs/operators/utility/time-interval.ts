import { interval } from "rxjs";
import { take, timeInterval, timeout } from "rxjs/operators";

const seconds = interval(1000);

seconds.pipe(
  timeInterval(),
  take(3)
).subscribe(
  value => console.log(value),
  err => console.log(err),
);

// NOTE: The values will never be this precise,
// intervals created with `interval` or `setInterval`
// are non-deterministic.

// {value: 0, interval: 1000}
// {value: 1, interval: 1000}
// {value: 2, interval: 1000}
