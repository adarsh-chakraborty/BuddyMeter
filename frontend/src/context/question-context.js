import React from 'react';

const QuestionContext = React.createContext({
  userQuestions: [],
  currentIndex: 0,
  questions: []
});

export default QuestionContext;
