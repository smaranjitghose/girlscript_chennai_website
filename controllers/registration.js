const EventRegistration = require('../models/registrationModel');

const registerUser = async (req, res) => {
	console.log(req.body);
	try {
		const userCreated = await EventRegistration.create(req.body);
		res.status(201).json({
			status: 'success',
			message: 'The user is registered now for the event',
			userCreated
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: 'Registration has failed',
			err
		});
	}
};

module.exports = registerUser;
