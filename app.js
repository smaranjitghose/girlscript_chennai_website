const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Global Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// DataBase Models
const signInToLetter = require('./controllers/newsletter');

// Exmaple route for setup test
app.get('/', (req, res) => {
	res.json({ message: 'Application Setup is correct' });
});

// the API EndPoint to sigin to newsletter
app.post('/newsletter', signInToLetter);

// the API endpoint for registrations details

app.post('/register', async (req, res) => {
	console.log(req.body);
	res.status(201).json({
		status: 'success',
		message: 'The user is registered now for the event'
	});
});

module.exports = app;
