const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(routes);

var MONGODB_URI = 'mongodb://localhost/mongoRelTest';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});
