const { geminiModel } = require('../config/gemini');
const { openai } = require('../config/open_ai');
const GPTAnalysis = require('../model/gpt_analysis.model');

const addAnalysis = async (analysis) => {
	try {
		await GPTAnalysis.create(analysis);
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const getGeminiResponse = async (prompt) => {
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
		const { accepted, response } = req.body;
		await GPTAnalysis.findByIdAndUpdate(id, {
			accepted,
			custom_doctor_response: response,
		});
		res.send('Updated');
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const getOpenAIresponse = async (query) => {
	try {
		if (!query) {
			return;
		}

		const prompt = {
			role: 'user',
			content: query,
		};

		return '';

		const completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [prompt],
			temperature: 0.2,
		});
		return completion.choices[0].message.content.replace('*', '');
	} catch (error) {
		console.error('Error:', error);
		return;
	}
};

module.exports = {
	addAnalysis,
	generateAnalysis: getGeminiResponse,
	updateGPTResponse,
	getOpenAIresponse,
};
