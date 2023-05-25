const express = require('express');
const app = express();

let send = require('../controllers/mailController');

app.post('/send', send.sendMail);

module.exports = app;
