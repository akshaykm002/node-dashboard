const express = require('express');
const { getInsights, addInsights } = require('../controllers/insightController.js');

const router = express.Router();

router.get('/', getInsights); 
router.post('/import', addInsights); 

module.exports = router;

