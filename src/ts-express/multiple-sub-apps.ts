import express from "express";

const hostname = '127.0.0.1';
const port = 3000;

const app = express(); // the main app
const admin = express(); // the sub app

// tslint:disable-next-line:variable-name
admin.get('/', function (_req, res) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
});

const secret = express();
// tslint:disable-next-line:variable-name
secret.get('/', function (_req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app

// respond with "hello world" when a GET request is made to the homepage
// tslint:disable-next-line:variable-name
app.get('/', function (_req, res) {
  res.send('hello world');
});
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
