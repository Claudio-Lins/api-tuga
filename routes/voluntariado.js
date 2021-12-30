const express = require('express');
const router = express.Router();

const Voluntariado = require('../models/Voluntariado');



router.get('/voluntariado', (req, res) => {
  Voluntariado.findAll()
      .then(voluntariado => res.json(voluntariado))
      .catch(error => res.status(400).json(error));
  });

router.get('/voluntariado/:id', (req, res) => {
  Voluntariado.findByPk(req.params.id)
    .then(voluntariado => {
      res.json(voluntariado);
    })
    .catch(err => {
      res.json({ error: err });
    });
})


router.post('/voluntariado', (req, res) => {
  Voluntariado.create(
    req.body
  ).then(function() {
    res.send('Voluntariado created');
  }).catch(function(err) {
    res.send(err);
  })
});


router.put('/voluntariado/:id', (req, res) => {
  Voluntariado.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('Voluntariado updated');
  }).catch(function(err) {
    res.send(err);
  })
})

router.delete('/voluntariado/:id', (req, res) => {
  Voluntariado.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('Voluntariado deleted');
  }).catch(function(err) {
    res.send(err);
  })
})



module.exports = router;