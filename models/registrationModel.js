const mongoose = require('mongoose');
const { isEmail } = require('validator');

const registrationSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: new Date().toDateString()
	},
	name: {
		type: String,
		required: [true, 'A  name is required to register for event']
	},
	registrationNumber: {
		type: String,
		required: [true, 'A registration number is needed'],
		validate: {
			validator: function (value) {
				return /^(RA)+[0-9]{13}$/.test(value);
			},
			message: 'The registration number format is incorret'
		}
	},
	year: {
		type: Number,
		required: [true, 'Year of study is required'],
		min: [1, 'The year of study cannot be less than 1'],
		max: [4, 'The year of study cannot be more than 4']
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
	},
	reason: {
		type: String,
		required: [true, 'An email is needed for newsletter'],
		minlength: [10, 'The reason to join must be more than 10 letters']
	}
});

const EventRegistration = mongoose.model('registration', registrationSchema);
module.exports = EventRegistration;
