const express = require('express');
import dotenv from 'dotenv';

const cors = require('cors');
const app = express();
require('./Routes/index')(app);

dotenv.config();

app.use(cors());
app.use(express.json());



app.listen(3333);
