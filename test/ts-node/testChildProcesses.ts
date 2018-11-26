import { assert } from "chai";
import { spawn } from 'child_process';

describe('Node.js.ChildProcesses', () => {
  describe('#Introduce', () => {
    it('spawn child process', () => {
      const ls = spawn('ls', ['-lh', '/usr']);

      ls.stdout.on('data', (data) => {
        assert.isNotNull(data.toString());
      });

      ls.stderr.on('data', (data) => {
        assert.fail(data);
      });

      ls.on('close', (code) => {
        assert.deepEqual(code, 0);
      });
    });
  });
});
