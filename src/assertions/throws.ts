import { Assertion } from '../';
import { inspect } from './inspect';

export function throws(f: () => any): Assertion {
  try {
    const x = f();
    return { passed: false, message: `Did not throw
    returned:  ${ x && inspect(x) || '' }` };
  } catch (e) {
    return { passed: true, message: e.message };
  }
}
