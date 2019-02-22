import { interval } from "rxjs";
import { share, take, tap } from "rxjs/operators";

const published = interval(1000).pipe(
  take(2),
  tap(x => console.log('Side effect')),
  share()
);

published.subscribe(
  (x) => console.log('Next: SourceA ' + x),
  (err) => console.log('Error: ' + err),
  () => console.log('Completed')
);

published.subscribe(
  (x) => console.log('Next: SourceB ' + x),
  (err) => console.log('Error: ' + err),
  () => console.log('Completed')
);
