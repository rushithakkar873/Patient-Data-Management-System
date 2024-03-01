const mongoose = require('mongoose');

const PatientQuery = new mongoose.Schema(
	{
		patient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		medical_history: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'MedicalHistory',
		},
		life_style: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'LifeStyle',
		},
		current_symptoms: {
			description: {
				type: String,
			},
			duration: {
				type: Number,
			},
			affected_area: {
				type: String,
			},
		},
		prescription: {
			medicine: {
				type: Array,
			},
			review: {
				type: String,
			},
		},
		doctor_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('PatientQuery', PatientQuery);
