const mongoose = require('mongoose');

const GPTAnalysis = new mongoose.Schema(
	{
		patient_query: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'PatientQuery',
			required: true,
		},
		response: {
			type: String,
		},
		is_accepted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('GPTAnalysis', GPTAnalysis);
