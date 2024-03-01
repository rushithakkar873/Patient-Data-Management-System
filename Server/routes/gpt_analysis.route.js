const express = require('express');
const { verifyToken } = require('../middleware/token');
const { updateGPTResponse } = require('../controller/gpt_analysis.controller');
const router = express.Router();

router.put('/update/:id', verifyToken, updateGPTResponse);

module.exports = router;
