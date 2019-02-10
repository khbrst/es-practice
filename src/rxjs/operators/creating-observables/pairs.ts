import { pairs } from 'rxjs';

const obj = {
  foo: 42,
  // tslint:disable-next-line:object-literal-sort-keys
  bar: 56,
  baz: 78
};

pairs(obj)
  .subscribe(
    value => console.log(value),
    err => console.log('error: ', err),
    () => console.log('the end!')
  );
