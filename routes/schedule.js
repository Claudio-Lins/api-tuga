const express = require('express');
const router = express.Router();

const Schedule = require('../models/Schedule');



router.get('/schedule', (req, res) => {
    Schedule.findAll()
      .then(schedule => res.json(schedule))
      .catch(error => res.status(400).json(error));
  });

router.get('/schedule/:id', (req, res) => {
  Schedule.findByPk(req.params.id)
    .then(schedule => {
      res.json(schedule);
    })
    .catch(err => {
      res.json({ error: err });
    });
})

router.post('/schedule', (req, res) => {
  Schedule.create(
    req.body
  ).then(function() {
    res.send('schedule created');
  }).catch(function(err) {
    res.send(err);
  })
});


router.put('/schedule/:id', (req, res) => {
  Schedule.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('schedule updated');
  }).catch(function(err) {
    res.send(err);
  })
})

router.delete('/schedule/:id', (req, res) => {
  Schedule.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.send('schedule deleted');
  }).catch(function(err) {
    res.send(err);
  })
})



module.exports = router;