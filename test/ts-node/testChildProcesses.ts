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
        assert.strictEqual(code, 0);
      });
    });
  });

  describe('#spawn', () => {
    it('run \'ps ax | grep ssh\'', () => {
      const ps = spawn('ps', ['ax']);
      const grep = spawn('grep', ['ssh']);

      ps.stdout.on('data', (data) => {
        grep.stdin.write(data);
      });

      ps.stderr.on('data', (data) => {
        assert.fail(data);
      });

      ps.on('close', (code) => {
        assert.strictEqual(code, 0);
        grep.stdin.end();
      });

      grep.stdout.on('data', (data) => {
        assert.isNotNull(data.toString());
      });

      grep.stderr.on('data', (data) => {
        assert.fail(data);
      });

      grep.on('close', (code) => {
        assert.strictEqual(code, 0);
      });
    });

    it('will fail', () => {
      const subprocess = spawn('bad_command');

      subprocess.on('error', (err) => {
        assert.isNotNull(err);
      });
    });
  });
});
