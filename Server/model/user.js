const mongoose = require('mongoose');
const { user_role } = require('../constants');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: Object.values(user_role),
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
