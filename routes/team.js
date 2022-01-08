const express = require("express");
const router = express.Router();
const sharp = require("sharp");
// const unlink = require("fs/promises");
const fs = require("fs");
const path = require("path");

const uploadPhoto = require("../middlewares/teamMiddleware");

const Team = require("../models/Team");

router.get("/team", (req, res) => {
  Team.findAll()
    .then((team) => res.json(team))
    .catch((error) => res.status(400).json(error));
});

router.get("/team/:id", (req, res) => {
  Team.findByPk(req.params.id)
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

router.post(
  "/team",
  uploadPhoto.single("foto"),
  async (req, res) => {
    if (req.file.mimetype == "image/jpg" || req.file.mimetype == "image/jpeg") {
      const { filename } = req.file;
      const { name, email, telemovel, cargo } = req.body;
      const newTeam = await Team.create({
        name, email, telemovel, cargo, fileUrl: filename,});
        res.json({ newTeam });

        await sharp(req.file.path)
          .resize(10)

    } else {
      res.status(400);
      res.json({ error: "Somente aceito .jpeg, png, jpg ou gif" });
    }
  
      // if (
      //   req.file.mimetype === "image/jpg" ||
      //   req.file.mimetype === "image/jpeg" ||
      //   req.file.mimetype === "image/png" ||
      //   req.file.mimetype === "image/gif"
      // ) {
      //   await sharp(req.file.path)
      //     .resize(800)
      //     .toFile("./public/team/" + req.file.filename);
      //   const { filename } = req.file;
      //   const { name, email, telemovel, cargo } = req.body;
      //   const newTeam = await Team.create({
      //     name,
      //     email,
      //     telemovel,
      //     cargo,
      //     fileUrl: filename,
      //   });
      //   res.json({ newTeam });
      // } else {
      //   res.status(400);
      //   res.json({ error: "Tipo de ficheiro não suportado" });
      // }
  }
)

router.put("/team/:id", (req, res) => {
  Team.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send("Team updated");
    })
    .catch(function (err) {
      res.send(err);
    });
});

router.delete("/team/:id", (req, res) => {
  Team.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function () {
      res.send("Team deleted");
    })
    .catch(function (err) {
      res.send(err);
    });
});

module.exports = router;
