const mongoose = require('mongoose');
const { user_role } = require('../constants');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		date_of_birth: {
			type: Date,
		},
		age: {
			type: Number,
		},
		gender: {
			type: String,
			enum: ['male', 'female', 'other'],
		},
		city: {
			type: String,
		},
		state: {
			type: String,
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
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', function (next) {
	const birthDate = new Date(this.date_of_birth);
	const today = new Date();
	const age = today.getFullYear() - birthDate.getFullYear();
	const month = today.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	this.age = age;
	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
