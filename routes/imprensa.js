const express = require('express')
const router = express.Router()
const sharp = require('sharp')
// const unlink = require("fs/promises");
const fs = require('fs')
const path = require('path')

const uploadFile = require('../middlewares/imprensaMiddleware')

const Imprensa = require('../models/Imprensa')

router.get('/imprensa', (req, res) => {
  Imprensa.findAll()
    .then((imprensa) => res.json(imprensa))
    .catch((error) => res.status(400).json(error))
})

router.get('/imprensa/:id', (req, res) => {
  Imprensa.findByPk(req.params.id)
    .then((imprensa) => {
      res.json(imprensa)
    })
    .catch((err) => {
      res.json({ error: err })
    })
})

router.post('/imprensa', uploadFile.single('destaque'), async (req, res) => {
  if (req.file.mimetype == 'application/pdf') {
    const { filename } = req.file
    const { title, linkYoutube } = req.body
    const newImprensa = await Imprensa.create({
      title,
      linkYoutube,
      fileUrl: filename,
    })
    res.json({ newImprensa })
  } 
  else {
    res.status(400)
    res.json({ error: 'Somente aceito .PDF' })
  }
})


router.put('/imprensa/:id', (req, res) => {
  Imprensa.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('imprensa updated')
    })
    .catch(function (err) {
      res.send(err)
    })
})

router.delete('/imprensa/:id', (req, res) => {
  Imprensa.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('imprensa deleted')
    })
    .catch(function (err) {
      res.send(err)
    })
})

module.exports = router
