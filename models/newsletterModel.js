const mongoose = require('mongoose');
const { isEmail } = require('validator');

const newsletterSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'An email is needed for newsletter'],
		validate: {
			validator: function (value) {
				return isEmail(value);
			},
			message: 'The email should be in valid format'
		},
		unique: [true, 'The email is already subscribed']
	}
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);
module.exports = Newsletter;
