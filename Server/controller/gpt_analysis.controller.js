const { geminiModel } = require('../config/gemini');
const GPTAnalysis = require('../model/gpt_analysis.model');

const addAnalysis = async (analysis) => {
	try {
		await GPTAnalysis.create(analysis);
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const generateAnalysis = async (prompt) => {
	try {
		const geminiRes = await geminiModel.generateContent(prompt);
		const feedback = geminiRes.response.text().replace('*', '');
		return feedback;
	} catch (error) {
		res.status(500).send('Internal server error');
	}
};

const updateGPTResponse = async (req, res) => {
	try {
		const { id } = req.params;
		const { is_accepted, response } = req.body;
		await GPTAnalysis.findByIdAndUpdate(id, { is_accepted, response });
		res.send('Updated');
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

module.exports = { addAnalysis, generateAnalysis, updateGPTResponse };
