const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(require('./routes/mailRoutes'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
