const mainController = require('../controllers/mainController');
const express = require('express');
const r = express.Router();

r.get('/', mainController.test);

module.exports = r;