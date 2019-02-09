import { iif, of } from 'rxjs';

let subscribeToFirst: boolean;
const firstOrSecond = iif(
  () => subscribeToFirst,
  of('first'),
  of('second'),
);

subscribeToFirst = true;
firstOrSecond.subscribe((value) => console.log(value));

subscribeToFirst = false;
firstOrSecond.subscribe((value) => console.log(value));
