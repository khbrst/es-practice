const assert = require("chai").assert;
const fs = require('fs');
const { PassThrough, Writable } = require('stream');

describe('Node.js.Stream', () => {
  describe('#Readable Streams for Stream Consumers', () => {
    it('should emit \'data\' event when readable stream into flowing mode', () => {
      const pass = new PassThrough();
      const writable = new Writable();

      pass.pipe(writable);
      pass.unpipe(writable);
      // readableFlowing is now false

      let isDataEventEmitted = false;
      pass.on('data', (chunk) => {
        assert.isNotNull(chunk.toString());
        isDataEventEmitted = true;
      });
      pass.write('ok');  // will not emit 'data'
      setImmediate(() => {
        assert.isNotTrue(isDataEventEmitted);
        pass.resume();     // must be called to make stream emit 'data'
      });
    });

    it('should return null when \'readable\' event emit by end of the stream has been reached', () => {
      const rr = fs.createReadStream(__dirname + '/empty.txt');
      rr.on('readable', () => {
        assert.isNull(rr.read());
      });
    });
  });
});
