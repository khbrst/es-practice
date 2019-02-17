import { of } from "rxjs";
import { repeat } from "rxjs/operators";

const numbers = of(1);
const takeFourNumbers = numbers.pipe(
  repeat(4)
);
takeFourNumbers.subscribe(x => console.log(x));
