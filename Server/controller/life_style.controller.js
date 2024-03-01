const LifeStyle = require('../model/lifestyle.model');

const getLifeStyle = async (req, res) => {
	try {
		const data = await LifeStyle.findOne({ patient: req.user._id });
		return res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const upsertLifeStyle = async (req, res) => {
	try {
		const user = req.user;
		const { smoking, alcohol, sleep_time } = req.body;
		const lifestyle = {
			smoking,
			alcohol,
			sleep_time,
			patient: user._id,
		};
		await LifeStyle.updateOne({ patient: user._id }, lifestyle, {
			upsert: true,
		});
		res.status(201).send('Life Style updated');
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

module.exports = { getLifeStyle, upsertLifeStyle };
