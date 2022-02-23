import QuestionContext from './question-context';
import { useReducer, useEffect } from 'react';
import { FETCH_QUESTIONS } from './constants';

const defaultState = {
  userQuestions: [],
  currentIndex: 0,
  questions: [],
  loading: true
};

const questionReducer = (state, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      return { ...state, questions: [...action.payload], loading: false };
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
    // fetch the questions and send the dispatch
    const fetchQuestions = async () => {
      try {
        const res = await fetch('/api/questions');

        if (res.ok) {
          const questions = await res.json();

          stateActionDispatch({ type: FETCH_QUESTIONS, payload: questions });
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchQuestions();
  }, []);

  const questionContext = {
    // add variables and function pointers here
    userQuestions: state.userQuestions,
    questions: state.questions,
    currentIndex: state.currentIndex,
    loading: state.loading
  };

  return (
    <QuestionContext.Provider value={questionContext}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
