import { interval } from "rxjs";
import { map, switchAll, take } from "rxjs/operators";

const source = interval(1000);
const inner = interval(300);
const switched = source.pipe(
  map(_ => inner),
  switchAll(),
  take(10)
);
switched.subscribe(x => console.log(x));
