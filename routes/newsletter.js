const express = require('express');
const router = express.Router();

const Newsletter = require('../models/Newsletter');



router.get('/newsletter', (req, res) => {
    Newsletter.findAll()
      .then(newsletter => res.json(newsletter))
      .catch(error => res.status(400).json(error));
  });

router.get('/newsletter/:id', (req, res) => {
  Newsletter.findByPk(req.params.id)
    .then(newsletter => {
      res.json(newsletter);
    })
    .catch(err => {
      res.json({ error: err });
    });
})

router.post('/newsletter', (req, res) => {
  Newsletter.create(
    req.body
  ).then(function() {
    res.send('Newsletter created');
  }).catch(function(err) {
    res.send(err);
  })
});


router.put('/newsletter/:id', (req, res) => {
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

router.delete('/newsletter/:id', (req, res) => {
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



module.exports = router;