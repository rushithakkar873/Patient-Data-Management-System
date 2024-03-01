const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password) => {
	const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);
	return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
	const match = await bcrypt.compare(password, hashedPassword);
	return match;
};

const generateToken = (email) => {
	const secretKey = process.env.SECRET_KEY;
	const payload = {
		email: email,
	};
	const token = jwt.sign(payload, secretKey, { expiresIn: '1w' });
	return token;
};

const createUser = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		const new_user = new User({
			name,
			email,
			password: await hashPassword(password),
			role,
		});
		await new_user
			.save()
			.then((user) => {
				res
					.status(201)
					.send(`${user.role} created successfully for email ${user.email}`);
			})
			.catch((error) => {
				throw new Error('Error creating user');
			});
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) res.status(404).send('user not found');
		if (comparePassword(user.password, password)) {
			res.status(200).json({
				token: generateToken(user.email),
			});
		} else {
			res.status(400).send('password does not match');
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
};

module.exports = {
	createUser,
	login,
};
