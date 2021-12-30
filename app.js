const express = require('express');

const Newsletter = require('./models/Newsletter');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});