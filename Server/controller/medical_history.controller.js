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

module.exports = { getMedicalHistory };
