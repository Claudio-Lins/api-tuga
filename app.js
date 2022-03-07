// //////////////////////////////////
// DEVELOP //
// //////////////////////////////////


const express = require('express');
const app = express();
const cors = require('cors')

// GET ROUTE FOR NEWSLETTER
const newsletter = require('./routes/newsletter');
const schedule = require('./routes/schedule');
const voluntariado = require('./routes/voluntariado');
const imprensa = require('./routes/imprensa');
const team = require('./routes/team');
const programa = require('./routes/programa');

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )
  app.use(cors())
  next()
})

//ROUTES 
app.use('/', newsletter);
app.use('/:id', newsletter);

app.use('/', schedule);
app.use('/:id', schedule); 

app.use('/', voluntariado);
app.use('/:id', voluntariado); 

app.use('/', imprensa);
app.use('/', imprensaPdf);
app.use('/:id', imprensa); 
app.use('/:id', imprensaPdf); 

app.use('/', team);
app.use('/:id', team); 

app.use('/', programa);
app.use('/:id', programa); 

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
