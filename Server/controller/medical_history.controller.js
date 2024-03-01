const MedicalHistory = require('../model/medical_history.model');

const getMedicalHistory = async (req, res) => {
	try {
		const data = await MedicalHistory.findOne({ patient: req.user._id });
		return res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const upsertMedicalHistory = async (req, res) => {
	try {
		const user = req.user;
		const {
			allergies,
			past_medical_history,
			family_medical_history,
			current_medication,
			vaccination_history,
		} = req.body;
		const medical_history = {
			allergies,
			past_medical_history,
			family_medical_history,
			current_medication,
			vaccination_history,
			patient: user._id,
		};
		await MedicalHistory.updateOne({ patient: user._id }, medical_history, {
			upsert: true,
		});
		res.status(201).send('Medical history updated');
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

module.exports = { getMedicalHistory, upsertMedicalHistory };
