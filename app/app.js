const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('../router/userRoute');

// cors middleware
app.use(cors());

// json payload middleware
app.use(express.json());

// actuator
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Service is up',
  });
});

app.use('/users', userRoute);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = app;
