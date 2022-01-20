const express = require('express')
const router = express.Router()
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')


const ImprensaLink = require('../models/ImprensaLink')

router.get('/imprensaLink', (req, res) => {
  ImprensaLink.findAll()
    .then((imprensaLink) => res.json(imprensaLink))
    .catch((error) => res.status(400).json(error))
})

router.get('/imprensaLink/:id', (req, res) => {
  ImprensaLink.findByPk(req.params.id)
    .then((imprensaLink) => {
      res.json(imprensaLink)
    })
    .catch((err) => {
      res.json({ error: err })
    })
})

router.post('/imprensaLink', (req, res) => {
  ImprensaLink.create(
    req.body
  ).then(function() {
    res.send('ImprensaLink created');
  }).catch(function(err) {
    res.send(err);
  })
});


router.put('/imprensaLink/:id', (req, res) => {
  ImprensaLink.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('imprensaLink updated')
    })
    .catch(function (err) {
      res.send(err)
    })
})

router.delete('/imprensaLink/:id', (req, res) => {
  ImprensaLink.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('imprensaLink deleted')
    })
    .catch(function (err) {
      res.send(err)
    })
})

module.exports = router
