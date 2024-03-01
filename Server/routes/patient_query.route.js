const express = require('express');
const { verifyToken } = require('../middleware/token');
const {
	createPatientQuery,
	getPatientQueries,
} = require('../controller/patient_query.controller');
const router = express.Router();

router.post('/create', verifyToken, createPatientQuery);
router.get('/', verifyToken, getPatientQueries);
module.exports = router;
