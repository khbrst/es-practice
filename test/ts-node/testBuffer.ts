import { assert } from "chai";

describe('Node.js Buffer', () => {
  describe('#Introduce', () => {
    it('create buffers', () => {
      // Creates a zero-filled Buffer of length 10.
      const buf1 = Buffer.alloc(10);
      assert.lengthOf(buf1, 10);
      for (const val of buf1) {
        assert.deepEqual(val, 0);
      }

      // Creates a Buffer of length 10, filled with 0x1.
      const buf2 = Buffer.alloc(10, 1);
      assert.lengthOf(buf2, 10);
      for (const val of buf2) {
        assert.deepEqual(val, 1);
      }

      // Creates an uninitialized buffer of length 10.
      // This is faster than calling Buffer.alloc() but the returned
      // Buffer instance might contain old data that needs to be
      // overwritten using either fill() or write().
      const buf3 = Buffer.allocUnsafe(10);
      assert.lengthOf(buf3, 10);

      // Creates a Buffer containing [0x1, 0x2, 0x3].
      const buf4 = Buffer.from([1, 2, 3]);
      assert.lengthOf(buf4, 3);

      // Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
      const buf5 = Buffer.from('tést');
      assert.lengthOf(buf5, 5);

      // Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
      const buf6 = Buffer.from('tést', 'latin1');
      assert.lengthOf(buf6, 4);
    });
  });
});
