const express = require('express');
const { verifyToken } = require('../middleware/token');
const {
	getMedicalHistory,
	upsertMedicalHistory,
} = require('../controller/medical_history.controller');
const router = express.Router();

router.post('/upsert', verifyToken, upsertMedicalHistory);
router.get('/mine', verifyToken, getMedicalHistory);

module.exports = router;
