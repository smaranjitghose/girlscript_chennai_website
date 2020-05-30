const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Global Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

// Exmaple route for setup test
app.get('/', (req, res) => {
	res.json({ message: 'Application Setup is correct' });
});
module.exports = app;
