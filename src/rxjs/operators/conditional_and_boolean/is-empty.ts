import { empty } from "rxjs";
import { isEmpty } from "rxjs/operators";

const emptyObservable = empty();
emptyObservable.pipe(
  isEmpty()
).subscribe((x) => console.log(x));
