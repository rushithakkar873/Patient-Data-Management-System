const mongoose = require('mongoose');

const GPTAnalysisSchema = new mongoose.Schema(
	{
		patient_query: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'PatientQuery',
			required: true,
		},
		gemini_response: {
			type: String,
		},
		openai_response: {
			type: String,
		},
		custom_doctor_response: {
			type: String,
		},
		accepted: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const GPTAnalysis = mongoose.model('GPTAnalysis', GPTAnalysisSchema);

module.exports = GPTAnalysis;
