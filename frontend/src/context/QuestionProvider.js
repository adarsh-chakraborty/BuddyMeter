import QuestionContext from './question-context';
import { useReducer } from 'react';

const defaultQuestionState = {
  userQuestions: [],
  currentIndex: 0,
  questions: []
};

const questionReducer = (state, action) => {
  return defaultQuestionState;
};

const QuestionProvider = (props) => {
  const [state, setState] = useReducer(questionReducer, defaultQuestionState);

  const questionContext = {
    // add variables and functions here
    userQuestions: state.userQuestions,
    questions: state.questions,
    currentIndex: state.currentIndex
  };

  return (
    <QuestionContext.Provider value={questionContext}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
