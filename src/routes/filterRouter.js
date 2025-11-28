const express = require('express');
const filterController = require('../controllers/filterController');
const Router = express.Router();

Router.get('/admin/filter/create', filterController.createG);
Router.post('/admin/filter/create', filterController.createP);

module.exports = Router;