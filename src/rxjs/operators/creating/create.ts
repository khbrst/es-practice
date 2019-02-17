import { Observable } from 'rxjs';

// Rx.Observable.create is an alias for the Observable constructor
// https://stackoverflow.com/a/45912937/10358228
const source = new Observable(function (observer) {
  observer.next(42);
  observer.complete();

  // Note that this is optional, you do not have to return this if you require no cleanup
  return function () { console.log('disposed'); };
});

const subscription = source.subscribe(
  function (x) { console.log('Next: ' + x); },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); },
);
subscription.unsubscribe();
