import React from 'react';

const QuestionContext = React.createContext({
  userQuestions: {},
  currentIndex: 0,
  questions: [],
  loading: true,
  addQuestion: () => {}
});

export default QuestionContext;
