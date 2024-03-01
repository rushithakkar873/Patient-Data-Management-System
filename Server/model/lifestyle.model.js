const mongoose = require('mongoose');

const LifeStyle = new mongoose.Schema(
	{
		patient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		smoking: {
			type: String,
			enum: ['yes', 'no'], //todo: add keyword life often, sometimes, never
		},
		alcohol: {
			type: String,
			enum: ['yes', 'no'],
		},
		sleep_time: {
			type: String,
			enum: ['less than 6 hours', '6-8 hours', 'more than 8 hours'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('LifeStyle', LifeStyle);
