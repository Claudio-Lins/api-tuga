const express = require('express')
const router = express.Router()
const sharp = require('sharp')
// const unlink = require("fs/promises");
const fs = require('fs')
const path = require('path')

const sendData = require('../middlewares/horariosMiddleware')

const Horario = require('../models/Horario')

router.get('/horario', (req, res) => {
  Horario.findAll()
    .then((horario) => res.json(horario))
    .catch((error) => res.status(400).json(error))
})

router.get('/horario/:id', (req, res) => {
  Horario.findByPk(req.params.id)
    .then((horario) => {
      res.json(horario)
    })
    .catch((err) => {
      res.json({ error: err })
    })
})

router.post('/horario', sendData.single('cover'), async (req, res) => {
  if (req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/png') {
    sharp(req.file.path)
    .resize(1000)
    .toFile('./public/horarios/' + req.file.filename)
    const { filename } = req.file
    const { href, hour, duration, title, subtitle } = req.body
    const newHorario = await Horario.create({
      href, hour, duration, title, subtitle,
      fileUrl: filename,
    })
    res.json({ newHorario })
  } else {
    res.status(400)
    res.json({ error: 'Somente aceito .jpeg, png, jpg' })
  }
})

router.put('/horario/:id', (req, res) => {
  Horario.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('Horario updated')
    })
    .catch(function (err) {
      res.send(err)
    })
})

router.delete('/horario/:id', (req, res) => {
  Horario.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send('Horario deleted')
    })
    .catch(function (err) {
      res.send(err)
    })
})

module.exports = router
