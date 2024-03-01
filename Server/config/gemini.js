const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

module.exports = { geminiModel };
