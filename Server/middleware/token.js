const User = require('../model/user.model');
const { verify } = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization?.split(' ')[1];
		if (!token) {
			return res.status(403).json({ message: 'Missing Token' });
		}

		const decoded = verify(token, process.env.SECRET_KEY);
		if (!decoded) {
			return res.status(401).json({ message: 'Invalid Token' });
		}

		const { id } = decoded;
		const user = await User.findById(id);
		if (!user) {
			res.status(401).json({ message: 'User does not exist' });
			return;
		}

		req.user = user;

		next();
	} catch (error) {
		return res.status(401).json({ message: 'Unauthorized: Invalid token' });
	}
};

module.exports = { verifyToken };
