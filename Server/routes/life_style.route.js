const express = require('express');
const { verifyToken } = require('../middleware/token');
const { getLifeStyle } = require('../controller/life_style.controller');

const router = express.Router();

router.get('/mine', verifyToken, getLifeStyle);

module.exports = router;
