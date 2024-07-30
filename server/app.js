const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require("xss-clean");
const compression = require('compression');
const { errorHandler } = require('./middlewares/error');
const logger = require('./middlewares/logger');
const cors = require('cors');

const app = express();

// service
app.use(express.json());

// logger
app.use(logger);

app.use(cors());


// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// compress all responses
app.use(compression());

// error handler
app.use(errorHandler);

module.exports = app;
