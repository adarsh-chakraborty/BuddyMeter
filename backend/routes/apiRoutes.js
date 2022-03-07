const express = require('express');
const {
  getQuestions,
  postQuiz,
  getQuiz
} = require('../controller/apiController');
const Router = express.Router();

Router.route('/questions').get(getQuestions).post(postQuiz);
Router.route('/quiz/:quizId').get(getQuiz);

module.exports = Router;
