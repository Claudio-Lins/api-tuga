const express = require('express');
const app = express();
const cors = require('cors');

// GET ROUTE FOR NEWSLETTER
const newsletter = require('./routes/newsletter');
const schedule = require('./routes/schedule');
const voluntariado = require('./routes/voluntariado');

app.use(express.json());
app.use(cors({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  }
}));

//ROUTES 
app.use('/', newsletter);
app.use('/:id', newsletter);

app.use('/', schedule);
app.use('/:id', schedule); 

app.use('/', voluntariado);
app.use('/:id', voluntariado); 

app.listen(4000, () => {
  console.log('Listening on port 4000');
});