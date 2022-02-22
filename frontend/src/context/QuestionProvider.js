import QuestionContext from './question-context';
import { useReducer, useEffect } from 'react';
import questions from '../questions.json';
import { FETCH_QUESTIONS } from './constants';

const defaultState = {
  userQuestions: [],
  currentIndex: 0,
  questions: []
};

const questionReducer = (state, action) => {
  console.log(state, action.type);
  switch (action.type) {
    case FETCH_QUESTIONS: {
      return {
        ...state,
        questions: questions
      };
    }
    default:
      return state;
  }
};

const QuestionProvider = (props) => {
  const [state, stateActionDispatch] = useReducer(
    questionReducer,
    defaultState
  );

  useEffect(() => {
    console.log('App Initialized');
    stateActionDispatch({ type: FETCH_QUESTIONS });
  }, []);

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
