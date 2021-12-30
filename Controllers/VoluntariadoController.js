const Voluntariado = require('../models/Voluntariado');

//POST /Voluntariado


exports.post = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
  
  
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
  Voluntariado.findAll()
    .then((voluntariado) => {
      res.status(200).json(voluntariado);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getById = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota GET com ID! ${id}`);
};
