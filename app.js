const express = require('express');
const app = express();

app.use(express.json());

const Newsletter = require('./models/Newsletter');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/newsletter', async (req, res) => {
  const createNewsletter = await Newsletter.create(
    req.body
  ).then(function() {
    res.send('Newsletter created');
  }).catch(function(err) {
    res.send(err);
  })
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});