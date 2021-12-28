const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
const app = express();
require('./Routes/index')(app);

dotenv.config();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log('Server started on port 4000!');
});
