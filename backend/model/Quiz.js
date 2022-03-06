const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  userName: String,
  questions: []
});
module.exports = mongoose.model('Quiz', quizSchema);
