const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  queID: {
    type: mongoose.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

const quizSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  questions: {
    type: [questionSchema],
    required: true
  }
});

module.exports = mongoose.model('Quiz', quizSchema);
