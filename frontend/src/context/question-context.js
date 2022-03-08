import React from 'react';

// Parameter for createContext not really required but good for auto-complete.

const QuestionContext = React.createContext({
  userQuestions: {},
  currentIndex: 0,
  questions: [],
  loading: true,
  skipLimit: 0,
  userName: '',
  error: null,
  playerName: '',
  addQuestion: () => {},
  nextQuestion: () => {},
  prevQuestion: () => {},
  skipQuestion: () => {},
  setName: () => {},
  setError: () => {},
  setPlayerName: () => {}
});

export default QuestionContext;
