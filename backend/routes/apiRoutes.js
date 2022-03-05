const express = require('express');
const { getQuestions, postQuestions } = require('../controller/apiController');
const Router = express.Router();

Router.route('/questions').get(getQuestions).post(postQuestions);

module.exports = Router;
