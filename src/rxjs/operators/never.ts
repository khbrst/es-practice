// Deprecated in favor of using NEVER constant.
import { NEVER } from 'rxjs';
import { startWith } from 'rxjs/operators';

function info() {
  console.log('Will not be called');
}
const result = NEVER.pipe(startWith(7));
result.subscribe(x => console.log(x), info, info);
