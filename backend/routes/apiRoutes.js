const express = require('express');
const { getQuestions } = require('../controller/apiController');
const Router = express.Router();

Router.route('/questions').get(getQuestions);

module.exports = Router;
