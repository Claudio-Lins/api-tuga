const express = require('express');
const app = express();

// GET ROUTE FOR NEWSLETTER
const newsletter = require('./routes/newsletter');

app.use(express.json());

const Newsletter = require('./models/Newsletter');

app.use(express.json());

//ROUTES 
app.use('/', newsletter);
app.use('/:id', newsletter); 

app.listen(4000, () => {
  console.log('Listening on port 4000');
});