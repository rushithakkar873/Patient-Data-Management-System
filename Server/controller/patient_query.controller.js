const { geminiModel } = require('../config/gemini');
const GPTAnalysis = require('../model/gpt_analysis.model');
const LifeStyle = require('../model/lifestyle.model');
const MedicalHistory = require('../model/medical_history.model');
const PatientQuery = require('../model/patient_query.model');
const {
	addAnalysis,
	generateAnalysis,
	getOpenAIresponse,
} = require('./gpt_analysis.controller');

const createPatientQuery = async (req, res) => {
	try {
		const { user } = req;
		let { medical_history, life_style, current_symptoms } = req.body;
		let find_medical_history = await MedicalHistory.findOne({
			patient: user._id,
		});
		let find_life_style = await LifeStyle.findOne({
			patient: user._id,
		});
		const data_to_be_submitted = {
			current_symptoms,
			patient: user._id,
		};
		if (find_medical_history) {
			await MedicalHistory.updateOne({ patient: user._id }, medical_history);
			data_to_be_submitted['medical_history'] = find_medical_history._id;
		} else {
			const new_medical_history = await MedicalHistory.create({
				...medical_history,
				patient: user._id,
			});
			data_to_be_submitted['medical_history'] = new_medical_history._id;
		}
		if (find_life_style) {
			await LifeStyle.updateOne({ patient: user._id }, life_style);
			data_to_be_submitted['life_style'] = find_life_style._id;
		} else {
			const new_life_style = await LifeStyle.create({
				...life_style,
				patient: user._id,
			});
			data_to_be_submitted['life_style'] = new_life_style._id;
		}
		const patient_query = await PatientQuery.create(data_to_be_submitted);
		res.status(201).send('Your query has been raised');

		const prompt = `I'm a prominent doctor from India, I have patient with below diagnosis problem. I want You to help me in advising my patient. I won't take your input directly but I will analyze your response and suggest prescription to my patient, that will save my time
		Here are the patient details:
		medical history: ${JSON.stringify(medical_history)}
		life_style: ${JSON.stringify(life_style)}
		current symptoms: ${JSON.stringify(current_symptoms)}
		your response should be in three paragraph don't add any heading and *:
		"a paragraph of case assessment"
		"a paragraph of recommendation of medicines, life style modification etc"
		"a paragraph of caution patient and doctor should be take care of"
		`;
		const gemini_recommendation = await generateAnalysis(prompt);
		const open_ai_recommendation = await getOpenAIresponse(prompt);
		console.log('\nGemini response\n', gemini_recommendation);
		console.log('-----------------------------------');
		console.log('\nOpenAI response\n', open_ai_recommendation);
		await addAnalysis({
			patient_query: patient_query._id,
			gemini_response: gemini_recommendation,
			openai_response: open_ai_recommendation,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const getPatientQueries = async (req, res) => {
	try {
		const { user } = req;
		const filters = {};
		if (user.role === 'patient') {
			filters.patient = user._id;
		} else {
			filters['$or'] = [{ doctor_id: null }, { doctor_id: user._id }];
		}
		const queries = await PatientQuery.find(filters)
			.populate('patient', 'name email age gender')
			.populate(
				'medical_history',
				'allergies past_medical_history family_medical_history current_medication vaccination_history'
			)
			.populate('life_style', 'smoking alcohol sleep_time')
			.populate('doctor_id', 'name email')
			.sort({ createdAt: -1 })
			.exec();
		return res.json(queries);
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

module.exports = {
	createPatientQuery,
	getPatientQueries,
};
