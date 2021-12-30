const express = require('express');
const app = express();

app.use(express.json());

const Newsletter = require('./models/Newsletter');

app.use(express.json());

app.get('/newsletter', (req, res) => {
  Newsletter.findAll()
    .then(newsletter => res.json(newsletter))
    .catch(error => res.status(400).json(error));
});

app.get('/newsletter/:id', (req, res) => {
  Newsletter.findByPk(req.params.id)
    .then(newsletter => {
      res.json(newsletter);
    })
    .catch(err => {
      res.json({ error: err });
    });
})

app.post('/newsletter', (req, res) => {
  Newsletter.create(
    req.body
  ).then(function() {
    res.send('Newsletter created');
  }).catch(function(err) {
    res.send(err);
  })
});

app.put('/newsletter/:id', (req, res) => {
  Newsletter.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('Newsletter updated');
  }).catch(function(err) {
    res.send(err);
  })
})

app.delete('/newsletter/:id', (req, res) => {
  Newsletter.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('Newsletter deleted');
  }).catch(function(err) {
    res.send(err);
  })
})

app.listen(4000, () => {
  console.log('Listening on port 4000');
});