const express = require('express');
const router = express.Router();

const logementCtrl = require('../controllers/logement.controller');

router.get('/', logementCtrl.getLogements);

module.exports = router;