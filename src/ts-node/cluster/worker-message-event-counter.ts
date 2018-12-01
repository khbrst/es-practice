import cluster from 'cluster';
import http from 'http';
import { cpus } from "os";

if (cluster.isMaster) {
  // Keep track of http requests
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Count requests
  function messageHandler(msg: { cmd: string; }) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // tslint:disable-next-line:forin
  for (const id in cluster.workers) {
    const worker = cluster.workers[id];
    if (worker) {
      worker.on('message', messageHandler);
    }
  }
} else {
  // Worker processes have a http server.
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    // notify master about the request
    if (process.send) {
      process.send({ cmd: 'notifyRequest' });
    }
  }).listen(8000);
}
