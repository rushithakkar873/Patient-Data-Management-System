const express = require('express');
const {
	createUser,
	login,
	fetchUserData,
} = require('../controller/user.controller');
const { verifyToken } = require('../middleware/token');
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', login);
router.get('/:id', verifyToken, fetchUserData);

module.exports = router;
