const express = require('express')
const router = express.Router()
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const uploadPhoto = require('../middlewares/programasMiddleware')

const Programa = require('../models/Programa')

router.get('/programa', (req, res) => {
  Programa.findAll()
    .then((programa) => res.json(programa))
    .catch((error) => res.status(400).json(error))
})

router.get('/programa/:id', (req, res) => {
  Programa.findByPk(req.params.id)
    .then((programa) => {
      res.json(programa)
    })
    .catch((err) => {
      res.json({ error: err })
    })
})

router.post('/programa', uploadPhoto.single('cover'), async (req, res) => {
  if (req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/png' || req.file.mimetype == 'image/gif' || req.file.mimetype == 'image/webp') {
    sharp(req.file.path)
    .resize(1000)
    .toFile('./public/programa/' + req.file.filename)
    const { filename } = req.file
    const { title, description, playlist, ordem } = req.body
    const newPrograma = await Programa.create({
      title,
      description,
      playlist,
      ordem,
      fileUrl: filename,
    })
    res.json({ newPrograma })
  } else {
    res.status(400)
    res.json({ error: 'Somente aceito .jpeg, png, jpg ou gif' })
  }
})

router.put('/programa/:id', (req, res) => {
  Programa.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('Programa updated')
    })
    .catch(function (err) {
      res.send(err)
    })
})

router.patch('/programa/:id', (req, res) => {
  Programa.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('Programa updated')
    })
    .catch(function (err) {
      res.send(err)
    })
})

router.delete('/programa/:id', (req, res) => {
  Programa.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('Programa deleted')
    })
    .catch(function (err) {
      res.send(err)
    })
})

module.exports = router
