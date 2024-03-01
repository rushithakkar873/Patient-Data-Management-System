import * as jwt from 'jsonwebtoken';
import User from '../model/user';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization?.split(' ')[1];
		if (!token) {
			return res.status(403).json({ message: 'Missing Token' });
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (!decoded) {
			return res.status(401).json({ message: 'Invalid Token' });
		}

		const { email } = decoded;

		const user = await User.findOne({ email });
		if (!user) {
			res.status(401).json({ message: 'User does not exist' });
			return;
		}

		req.body.user = user;

		next();
	} catch (error) {
		return res.status(401).json({ message: 'Unauthorized: Invalid token' });
	}
};
