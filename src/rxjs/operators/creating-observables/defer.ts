import { defer, of } from "rxjs";

/* Using an observable sequence */
const source = defer(function () {
  return of(42);
});

source.subscribe(
  function (x) { console.log('Next: ' + x); },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); },
);
