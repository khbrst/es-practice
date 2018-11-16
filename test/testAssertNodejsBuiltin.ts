import assert from 'assert';
import { describe } from 'mocha';

describe('Node.js.assert', () => {
  describe('#AssertionError', () => {
    it('generate and verify', () => {
      // Generate an AssertionError to compare the error message later:
      const { message } = new assert.AssertionError({
        actual: 1,
        expected: 2,
        operator: 'strictEqual',
      });

      // Verify error output:
      try {
        assert.strictEqual(1, 2);
      } catch (err) {
        assert(err instanceof assert.AssertionError);
        // actual:   `1 === 2`
        // expected: `1 strictEqual 2`
        // assert.strictEqual(err.message, message);
        assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
        assert.strictEqual(err.actual, 1);
        assert.strictEqual(err.expected, 2);
        assert.strictEqual(err.code, 'ERR_ASSERTION');
        // actual:   `===`
        // expected: `strictEqual`
        // assert.strictEqual(err.operator, 'strictEqual');
        assert.strictEqual(err.generatedMessage, true);
      }
    });
  });

  describe('#deepStrictEqual()', () => {
    it('show details and it will throw errors', () => {
      assert.throws(() => {
        // This fails because 1 !== '1'.
        assert.deepStrictEqual({ a: 1 }, { a: '1' });
        // AssertionError: Expected inputs to be strictly deep-equal:
        // + actual - expected
        //
        //   {
        // +   a: 1
        // -   a: '1'
        //   }
      });

      // The following objects don't have own properties
      const date = new Date();
      const object = {};
      const fakeDate = {};
      Object.setPrototypeOf(fakeDate, Date.prototype);

      assert.throws(() => {
        // Different [[Prototype]]:
        assert.deepStrictEqual(object, fakeDate);
        // AssertionError: Expected inputs to be strictly deep-equal:
        // + actual - expected
        //
        // + {}
        // - Date {}
      });

      assert.throws(() => {
        // Different type tags:
        assert.deepStrictEqual(date, fakeDate);
        // AssertionError: Expected inputs to be strictly deep-equal:
        // + actual - expected
        //
        // + 2018-04-26T00:49:08.604Z
        // - Date {}
      });

      try {
        assert.deepStrictEqual(NaN, NaN);
        // OK, because of the SameValue comparison
        // => Nope, result of it is different by Node.js version
      } catch (err) {
        assert(err instanceof assert.AssertionError);
      }

      assert.throws(() => {
        // Different unwrapped numbers:
        // tslint:disable-next-line:no-construct
        assert.deepStrictEqual(new Number(1), new Number(2));
        // AssertionError: Expected inputs to be strictly deep-equal:
        // + actual - expected
        //
        // + [Number: 1]
        // - [Number: 2]
      });

      // tslint:disable-next-line:no-construct
      assert.deepStrictEqual(new String('foo'), Object('foo'));
      // OK because the object and the string are identical when unwrapped.

      assert.deepStrictEqual(-0, -0);
      // OK

      // Different zeros using the SameValue Comparison:
      assert.deepStrictEqual(0, -0);
      // AssertionError: Expected inputs to be strictly deep-equal:
      // + actual - expected
      //
      // + 0
      // - -0

      const symbol1 = Symbol();
      const symbol2 = Symbol();
      assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
      // OK, because it is the same symbol on both objects.

      assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });
      // AssertionError [ERR_ASSERTION]: Inputs identical but not reference equal:
      //
      // {
      //   [Symbol()]: 1
      // }

      const weakMap1 = new WeakMap();
      const weakMap2 = new WeakMap([[{}, {}]]);
      const weakMap3 = new WeakMap();
      // It is not allowed in TypeScript
      // weakMap3.unequal = true;

      assert.deepStrictEqual(weakMap1, weakMap2);
      // OK, because it is impossible to compare the entries

      // Fails because weakMap3 has a property that weakMap1 does not contain:
      assert.deepStrictEqual(weakMap1, weakMap3);
      // AssertionError: Expected inputs to be strictly deep-equal:
      // + actual - expected
      //
      //   WeakMap {
      // +   [items unknown]
      // -   [items unknown],
      // -   unequal: true
      //   }
    });
  });

  describe('#doesNotThrow()', () => {
    it('will throw TypeError', () => {
      try {
        assert.doesNotThrow(
          () => {
            throw new TypeError('Wrong value');
          },
          SyntaxError,
        );
      } catch (err) {
        assert(err instanceof TypeError);
      }
    });

    it('will throw AssertionError', () => {
      try {
        assert.doesNotThrow(
          () => {
            throw new TypeError('Wrong value');
          },
          TypeError,
        );
      } catch (err) {
        assert(err instanceof assert.AssertionError);
      }
    });
  });
});
