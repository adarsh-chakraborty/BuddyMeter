const Question = require('../model/Question');

const getQuestions = async (req, res, next) => {
  const questions = await Question.find({});
  res.json(questions);
};

const postQuestions = (req, res, next) => {
  const data = req.body;

  const questions = [];

  for (const key in data) {
    questions.push({
      queId: data[key].queId,
      answer: data[key].answer,
      index: data[key].index
    });
  }

  console.log(questions);
  res.send('OK');
};

module.exports = { postQuestions, getQuestions };
