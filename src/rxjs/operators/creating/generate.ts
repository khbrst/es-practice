import { generate } from "rxjs";

const source = generate(
  0,
  function (x) { return x < 3; },
  function (x) { return x + 1; },
  function (x) { return x; },
);

source.subscribe(
  function (x) { console.log('Next: ' + x); },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); },
);
