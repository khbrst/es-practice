import { interval } from 'rxjs';
import { bufferToggle, take } from 'rxjs/operators';

// emit value every second
const sourceInterval = interval(1000);
// start first buffer after 5s, and every 5s after
const startInterval = interval(5000);
// emit value after 3s, closing corresponding buffer
const closingInterval = (val: any) => {
  console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
  return interval(3000);
};

// every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
const bufferToggleInterval = sourceInterval.pipe(
  bufferToggle(
    startInterval,
    closingInterval
  ),
  take(3)
);

// log to console
// ex. emitted buffers [4,5,6]...[9,10,11]
bufferToggleInterval.subscribe(val =>
  console.log('Emitted Buffer:', val)
);
