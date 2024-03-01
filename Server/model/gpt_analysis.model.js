const mongoose = require('mongoose');

const GPTAnalysisSchema = new mongoose.Schema(
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

const GPTAnalysis = mongoose.model('GPTAnalysis', GPTAnalysisSchema);

module.exports = GPTAnalysis;
