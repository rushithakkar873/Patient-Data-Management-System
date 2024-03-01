const mongoose = require('mongoose');

const PatientQuerySchema = new mongoose.Schema(
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
			duration_days: {
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

const PatientQuery = mongoose.model('PatientQuery', PatientQuerySchema);

module.exports = PatientQuery;
