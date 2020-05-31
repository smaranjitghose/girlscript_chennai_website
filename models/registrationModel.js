const mongoose = require('mongoose');
const { isEmail } = require('validator');

const registrationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A  name is required to register for event']
	},
	email: {
		type: String,
		required: [true, 'An email is needed for newsletter'],
		validate: {
			validator: function (value) {
				return isEmail(value);
			},
			message: 'The email should be in valid format'
		}
	}
});

const EventRegistration = mongoose.model('registration', registrationSchema);
module.exports = EventRegistration;
