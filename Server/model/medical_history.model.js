const mongoose = require('mongoose');

const MedicalHistorySchema = new mongoose.Schema(
	{
		patient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		allergies: {
			type: String,
		},
		past_medical_history: {
			type: String,
		},
		family_medical_history: {
			type: String,
		},
		current_medication: {
			type: String,
		},
		vaccination_history: {
			type: [],
		},
	},
	{
		timestamps: true,
	}
);

const MedicalHistory = mongoose.model('MedicalHistory', MedicalHistorySchema);

module.exports = MedicalHistory;
