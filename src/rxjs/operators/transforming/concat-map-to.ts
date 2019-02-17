// RxJS v6+
import { interval, of } from 'rxjs';
import { concatMapTo, delay, take } from 'rxjs/operators';

// emit value every .5 seconds
const sampleInterval = interval(500).pipe(take(5));
const fakeRequest = of('Network request complete').pipe(delay(3000));
// wait for first to complete before next is subscribed
const example = sampleInterval.pipe(concatMapTo(fakeRequest));
// result
// output: Network request complete...3s...Network request complete'
example.subscribe(val => console.log(new Date(), val));
