const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routerGet = require('./routes/Router');
require('dotenv').config();

// MIDDLE WARE
// parse application/json - We can log data from POSTMAN ("JSON")
app.use(express.json());

// URL encoded
app.use(express.urlencoded({ extended: false }));

// CRUD CALLING METHOD WITH MIDDLE WARE
app.use('/', routerGet);

// MONGOOSE CONNECTION
mongoose
  .connect(
    `mongodb+srv://${process.env.SECRET_NAME}:${process.env.SECRET_KEY}@cluster0.mpsttfz.mongodb.net/Node-API?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log('Server listen on post 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
