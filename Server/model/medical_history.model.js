const mongoose = require('mongoose');

const MedicalHistory = new mongoose.Schema(
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
			type: {
				name: {
					type: String,
				},
				status: {
					type: String,
					enum: ['yes', 'no'],
				},
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('MedicalHistory', MedicalHistory);
