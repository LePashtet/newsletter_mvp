const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require("xss-clean");
const compression = require('compression');
const { errorHandler } = require('./middlewares/error');
const logger = require('./middlewares/logger');
const cors = require('cors');
const v1 = require('./routes/v1/routes');

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

app.use('/api/v1', v1);


module.exports = app;
