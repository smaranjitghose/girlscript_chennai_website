require('dotenv').config();

const mongoose = require('mongoose');
// require the main application
const app = require('./app');

// Connect to Main DB
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log('Database Successfully Connected!'))
	.catch(() => console.log('Something is wrong in connecting DB'));

// main server settings
const PORT = process.env.PORT || 3000;

// listen to port 3000
const server = app.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log(`Application started on port:${PORT}`);
});

process.on('unhandledRejection', (err) => {
	console.log(err.name, err.message);
	server.close(() => {
		console.log('Closing server and requests');
		process.exit(1);
	});
});
