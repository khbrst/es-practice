import { interval } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';

const seconds = interval(1000);
const minutes = interval(60 * 1000);

seconds.pipe(timeoutWith(900, minutes))
  .subscribe(
    value => console.log(value), // After 900ms, will start emitting `minutes`,
    //                              since first value of `seconds` will not arrive fast enough.
    err => console.log(err),     // Would be called after 900ms in case of `timeout`,
    //                              but here will never be called.
  );
