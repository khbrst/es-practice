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

  describe('#Buffers and Character Encodings', () => {
    it('Buffer.toString with character encodings', () => {
      const buf = Buffer.from('hello world', 'ascii');

      assert.deepEqual(buf.toString('hex'),
        '68656c6c6f20776f726c64');
      assert.deepEqual(buf.toString('base64'),
        'aGVsbG8gd29ybGQ=');

      assert.deepEqual(Buffer.from('fhqwhgads', 'ascii').toString('hex'),
        '666871776867616473');
      assert.deepEqual(Buffer.from('fhqwhgads', 'utf16le').toString('hex'),
        '660068007100770068006700610064007300');
    });
  });

  describe('#Buffers and TypedArray', () => {
    it('shares memory using the TypeArray object\'s .buffer property', () => {
      const arr = new Uint16Array(2);

      arr[0] = 5000;
      arr[1] = 4000;

      // Copies the contents of `arr`
      const buf1 = Buffer.from(arr);
      // Shares memory with `arr`
      const buf2 = Buffer.from(arr.buffer);

      assert.deepEqual(buf1.toString('hex'), '88a0');
      assert.deepEqual(buf2.toString('hex'), '8813a00f');

      arr[1] = 6000;

      assert.deepEqual(buf1.toString('hex'), '88a0');
      assert.deepEqual(buf2.toString('hex'), '88137017');

      const arr2 = new Uint16Array(20);
      const buf = Buffer.from(arr2.buffer, 0, 16);

      assert.lengthOf(buf, 16);
    });
  });

  describe('#alloc', () => {
    it('alloc new buffer with zero-filled', () => {
      const buf = Buffer.alloc(5);
      assert.deepEqual(buf.toString('hex'), '0000000000');
    });

    it('alloc new buffer with fill', () => {
      const buf = Buffer.alloc(5, 'a');
      assert.deepEqual(buf.toString('hex'), '6161616161');
    });

    it('alloc new buffer with fill and encoding', () => {
      const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
      assert.deepEqual(buf.toString('hex'), '68656c6c6f20776f726c64');
    });
  });

  describe('#slice', () => {
    it('overlap memory using slice', () => {
      // Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
      // from the original `Buffer`.
      const buf1 = Buffer.allocUnsafe(26);

      for (let i = 0; i < 26; i++) {
        // 97 is the decimal ASCII value for 'a'
        buf1[i] = i + 97;
      }

      const buf2 = buf1.slice(0, 3);

      assert.deepEqual(buf2.toString('ascii', 0, buf2.length), 'abc');

      buf1[0] = 33;

      assert.deepEqual(buf2.toString('ascii', 0, buf2.length), '!bc');
    });

    it('use negative index', () => {
      const buf = Buffer.from('buffer');

      assert.deepEqual(buf.slice(-6, -1).toString(), 'buffe');
      // (Equivalent to buf.slice(0, 5))

      assert.deepEqual(buf.slice(-6, -2).toString(), 'buff');
      // (Equivalent to buf.slice(0, 4))

      assert.deepEqual(buf.slice(-5, -2).toString(), 'uff');
      // (Equivalent to buf.slice(1, 4))
    });
  });
});
