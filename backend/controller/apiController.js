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
    return res.status(400).json({ error: 'Error: Invalid Quiz ID.' });
  }

  const quiz = await Quiz.findById(quizId, { 'questions.answer': 0 }).populate({
    path: 'questions.queID'
  });

  if (!quiz) {
    return res
      .status(404)
      .json({ error: `Could not find the quiz or it may have been deleted.` });
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
    const result = await Quiz.create({ userName, questions: userQuestions });
    if (result)
      return res.status(201).json({ status: 201, quizId: result._id });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const postResult = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const quiz = await Quiz.findById(data.quizId).populate({
    path: 'questions.queID'
  });

  if (!quiz)
    return res
      .status(404)
      .json({ error: `Quiz doesn't exists. It might've been deleted.` });

  let score = 0;
  const { userQuestions } = data;
  for (let i = 0; i < 10; i++) {
    if (
      userQuestions[i]?.answer === quiz.questions[i]?.answer &&
      userQuestions[i]?.index === quiz.questions[i]?.index &&
      userQuestions[i]?.queId === quiz.questions[i].queID._id.toString()
    ) {
      score++;
    }
  }

  res.json({ score });
};
module.exports = { postQuiz, getQuestions, getQuiz, postResult };
