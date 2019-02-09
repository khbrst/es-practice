import { from } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";
import { take } from "rxjs/operators";

function convertAnArray() {
  const array = [10, 20, 30];
  const result = from(array);

  result.subscribe(x => console.log(x));
}

function convertAnInfiniteIterable() {
  function* generateDoubles(seed: number) {
    let i = seed;
    while (true) {
      yield i;
      i = 2 * i; // double it
    }
  }

  const iterator = generateDoubles(3);
  const result = from(iterator).pipe(take(10));

  result.subscribe(x => console.log(x));
}

function withAsyncScheduler() {
  console.log('start');

  const array = [10, 20, 30];
  const result = from(array, async);

  result.subscribe(x => console.log(x));

  console.log('end');
}

convertAnArray();
convertAnInfiniteIterable();
withAsyncScheduler();
