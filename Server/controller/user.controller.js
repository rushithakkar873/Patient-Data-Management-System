const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const hashPassword = async (password) => {
	const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);
	return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
	const match = await bcrypt.compare(
		password.toString(),
		hashedPassword.toString()
	);
	return match;
};

const generateToken = (id) => {
	const secretKey = process.env.SECRET_KEY;
	const payload = {
		id,
	};
	const token = jwt.sign(payload, secretKey, { expiresIn: '1w' });
	return token;
};

const createUser = async (req, res) => {
	try {
		const { name, date_of_birth, city, state, gender, email, password, role } =
			req.body;
		const new_user = new User({
			name,
			email,
			password: await hashPassword(password),
			role,
			gender,
			date_of_birth,
			city,
			state,
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
		const compareResult = await comparePassword(user.password, password);
		if (compareResult) {
			res.status(200).json({
				token: generateToken(user._id),
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
