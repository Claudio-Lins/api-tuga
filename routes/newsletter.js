const express = require('express');
const router = express.Router();


router.get('/newsletter', (req, res) => {
    Newsletter.findAll()
      .then(newsletter => res.json(newsletter))
      .catch(error => res.status(400).json(error));
  });



module.exports = router;