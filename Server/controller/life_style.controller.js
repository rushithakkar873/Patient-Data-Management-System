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

module.exports = { getLifeStyle };
