const Question = require('../model/Question');
const Quiz = require('../model/Quiz');
const mongoose = require('mongoose');

const getQuestions = async (req, res, next) => {
  const questions = await Question.find({});
  res.json(questions);
};

const getQuiz = async (req, res, next) => {
  const quizId = req.params.quizId;

  if (!mongoose.isValidObjectId(quizId)) {
    return res.json({ error: 'Invalid quiz Id.' });
  }

  const quiz = await Quiz.findById(quizId).populate({
    path: 'questions.queID'
  });

  if (!quiz) {
    return res.status(404).json({ error: `Quiz doesn't exists.` });
  }

  res.json(quiz);
};

const postQuiz = async (req, res, next) => {
  const { userName, questions } = req.body;

  if (!userName || !questions) {
    return res
      .status(400)
      .json({ error: 'Username and questions are required!' });
  }

  try {
    const userQuestions = [];

    for (const key in questions) {
      userQuestions.push({
        queID: questions[key].queId,
        answer: questions[key].answer,
        index: questions[key].index
      });
    }
    console.log(userQuestions);
    const result = await Quiz.create({ userName, questions: userQuestions });
    console.log(result);
    if (result)
      return res.status(201).json({ status: 201, quizId: result._id });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { postQuiz, getQuestions, getQuiz };
