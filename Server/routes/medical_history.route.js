const express = require('express');
const { verifyToken } = require('../middleware/token');
const {
	getMedicalHistory,
} = require('../controller/medical_history.controller');
const router = express.Router();

router.get('/mine', verifyToken, getMedicalHistory);

module.exports = router;
