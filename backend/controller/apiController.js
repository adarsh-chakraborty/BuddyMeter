const Question = require('../model/Question');
const Quiz = require('../model/Quiz');

const getQuestions = async (req, res, next) => {
  const questions = await Question.find({});
  res.json(questions);
};

const postQuestions = async (req, res, next) => {
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
        queId: questions[key].queId,
        answer: questions[key].answer,
        index: questions[key].index
      });
    }

    const result = await Quiz.create({ questions: userQuestions, userName });
    console.log(result);
    if (result)
      return res.status(201).json({ status: 201, quizId: result._id });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = { postQuestions, getQuestions };
