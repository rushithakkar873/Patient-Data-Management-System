const express = require('express');
const { verifyToken } = require('../middleware/token');
const {
	getLifeStyle,
	upsertLifeStyle,
} = require('../controller/life_style.controller');

const router = express.Router();

router.get('/mine', verifyToken, getLifeStyle);
router.post('/upsert', verifyToken, upsertLifeStyle);

module.exports = router;
