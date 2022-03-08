const express = require('express');
const {
  getQuestions,
  postQuiz,
  getQuiz,
  postResult
} = require('../controller/apiController');
const Router = express.Router();

Router.route('/questions').get(getQuestions).post(postQuiz);
Router.route('/quiz/:quizId').get(getQuiz);
Router.route('/result').post(postResult);

module.exports = Router;
