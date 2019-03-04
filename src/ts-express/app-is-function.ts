import express from "express";
import http from "http";
import https from "https";

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// respond with "hello world" when a GET request is made to the homepage
// tslint:disable-next-line:variable-name
app.get('/', function (_req, res) {
  res.send('hello world');
});
http.createServer(app).listen(port, hostname);
https.createServer({}, app).listen(port + 1, hostname);
console.log(`Server running at http://${hostname}:${port}/ and https://${hostname}:${port + 1}/`);
