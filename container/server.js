'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var pod = process.env.HOSTNAME || '';
  res.send(`Hello world!\n***V2***\nPod: ${pod}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);