// RxJS v6+
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  // will return undefined when no job is found
  { name: 'Sarah', age: 35 }
]);
// grab title property under job
const example = source.pipe(pluck('job', 'title'));
// output: "Developer" , undefined
example.subscribe(val => console.log(val));
