const express = require('express');
import dotenv from 'dotenv';

const cors = require('cors');
const app = express();
require('./Routes/index')(app);


app.use(cors());
app.use(express.json());


app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
