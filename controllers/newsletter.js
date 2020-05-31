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
		if (
			err.code === 11000 &&
			err.errmsg.includes('E11000 duplicate key error')
		) {
			return res.status(404).json({
				status: 'fail',
				message: 'The user is already subscribed'
			});
		}
		res.status(404).json({
			status: 'fail',
			message: 'Subscribing to newsletter has failed',
			err
		});
	}
};

module.exports = signInToLetter;
