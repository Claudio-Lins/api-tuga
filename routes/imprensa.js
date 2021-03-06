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


// POST Imprensa
  router.post('/imprensa', async (req, res) => {
    const { title, linkYoutube, datePublished} = req.body
    const newImprensa = await Imprensa.create({
      title,
      linkYoutube,
      datePublished,
    })
    res.json({ newImprensa })
  })

router.post(
  '/imprensaPdf',
  uploadFile.single('pressPost'),
  async (req, res) => {
    if (
      req.file.mimetype == 'application/pdf' ||
      req.file.mimetype == 'image/jpg' ||
      req.file.mimetype == 'image/png' ||
      req.file.mimetype == 'image/jpeg'
    ) {
      const { filename } = req.file
      const { title, linkYoutube, datePublished } = req.body
      const newImprensa = await Imprensa.create({
        title,
        linkYoutube,
        datePublished,
        fileUrl: filename,
      })
      res.json({ newImprensa })
    } else {
      res.status(400)
      res.json({ error: 'Somente aceito .jpeg, png, jpg ou gif' })
    }
  }
)

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
