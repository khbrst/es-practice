// RxJS v6+
import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

// emit next and error notifications
const source = from([
  Notification.createNext('SUCCESS!'),
  Notification.createError('ERROR!')
]).pipe(
  // turn notification objects into notification values
  dematerialize()
);

// output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
source.subscribe({
  next: val => console.log(`NEXT VALUE: ${val}`),
  // tslint:disable-next-line:object-literal-sort-keys
  error: val => console.log(`ERROR VALUE: ${val}`)
});
