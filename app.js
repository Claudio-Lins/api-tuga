const express = require('express');
const app = express();

// GET ROUTE FOR NEWSLETTER
const newsletter = require('./routes/newsletter');
const schedule = require('./routes/schedule');

app.use(express.json());


app.use(express.json());

//ROUTES 
app.use('/', newsletter);
app.use('/:id', newsletter);

app.use('/', schedule);
app.use('/:id', schedule); 

app.listen(4000, () => {
  console.log('Listening on port 4000');
});