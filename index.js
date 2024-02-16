const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routerGet = require('./routes/Router');
require('dotenv').config();

// ------- MIDDLEWARE ---------

// parse application/json - We can log data from POSTMAN ("JSON")
app.use(express.json());

// Enable middleware for parsing URL-encoded data
// This middleware is used to handle form submissions where data is sent in the URL-encoded format
// It is necessary to include this middleware to read data from forms, not just JSON
app.use(express.urlencoded({ extended: false }));

// CRUD CALLING METHOD WITH MIDDLE WARE
app.use('/api/product', routerGet);

// WELCOME PAGE
app.get('/', (req, res) => {
  res.send('Welcome connection');
});

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
