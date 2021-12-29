const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
const app = express();
require('./Routes/newsletter')(app);
require('./Routes/schedule')(app);
require('./Routes/voluntariado')(app);

dotenv.config();

app.use(cors());
app.use(express.json());


app.use((req, res) => {
  res.status(404)
  res.json({ error: 'Page not found!!!!' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
});
