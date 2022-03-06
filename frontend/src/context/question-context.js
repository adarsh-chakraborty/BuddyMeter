import React from 'react';

// Parameter for createContext not really required but good for auto-complete.

const QuestionContext = React.createContext({
  userQuestions: {},
  currentIndex: 0,
  questions: [],
  loading: true,
  skipLimit: 0,
  userName: '',
  addQuestion: () => {},
  nextQuestion: () => {},
  prevQuestion: () => {},
  skipQuestion: () => {},
  setName: () => {}
});

export default QuestionContext;
