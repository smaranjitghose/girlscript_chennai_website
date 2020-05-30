const Newsletter = require('../models/newsletterModel');

const signInToLetter = async (req, res) => {
	try {
		const newSubscriber = await Newsletter.create(req.body);
		res.status(201).json({
			status: 'success',
			message: 'The user is now subscribed to newsletter',
			data: newSubscriber
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			err
		});
	}
};

module.exports = signInToLetter;
