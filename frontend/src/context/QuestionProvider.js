import QuestionContext from './question-context';
import { useReducer, useEffect } from 'react';
import {
  ADD_QUESTION,
  NEXT_PAGE,
  PREV_PAGE,
  FETCH_QUESTIONS,
  SKIP_QUESTION,
  SET_NAME,
  ERROR,
  SET_PLAYER_NAME
} from './constants';

const defaultState = {
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
};

const questionReducer = (state, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      return {
        ...state,
        questions: [...action.payload],
        loading: false,
        error: null
      };
    }

    case ADD_QUESTION: {
      state.userQuestions[action.payload.index] = action.payload;
      return { ...state };
    }

    case SKIP_QUESTION: {
      const filteredQuestions = state.questions.filter(
        (que) => que._id !== action.payload
      );
      return {
        ...state,
        questions: [...filteredQuestions],
        skipLimit: state.skipLimit + 1
      };
    }

    case NEXT_PAGE: {
      return { ...state, currentIndex: state.currentIndex + 1 };
    }

    case PREV_PAGE: {
      return { ...state, currentIndex: state.currentIndex - 1 };
    }

    case SET_NAME: {
      return { ...state, userName: action.payload };
    }

    case ERROR: {
      return { ...state, error: action.payload, loading: false };
    }

    case SET_PLAYER_NAME: {
      return { ...state, playerName: action.payload };
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

        if (!res.ok) {
          if (res.status === 500) {
            throw new Error('Internal server error');
          }
          const responseError = await res.json();
          stateActionDispatch({
            type: ERROR,
            payload: responseError.error ?? responseError
          });
          return;
        }

        const questions = await res.json();
        stateActionDispatch({ type: FETCH_QUESTIONS, payload: questions });
      } catch (e) {
        stateActionDispatch({
          type: ERROR,
          payload: e.message
        });
      }
    };

    fetchQuestions();
  }, []);

  const addQuestion = (payload) => {
    stateActionDispatch({ type: ADD_QUESTION, payload });
  };

  const skipQuestion = (payload) => {
    stateActionDispatch({ type: SKIP_QUESTION, payload });
  };

  const nextQuestion = () => {
    stateActionDispatch({ type: NEXT_PAGE });
  };

  const prevQuestion = () => {
    stateActionDispatch({ type: PREV_PAGE });
  };

  const setName = (payload) => {
    stateActionDispatch({ type: SET_NAME, payload });
  };

  const setError = () => {};

  const setPlayerName = (payload) => {
    stateActionDispatch({ type: SET_PLAYER_NAME, payload });
  };

  const questionContext = {
    // add variables and function pointers here
    userQuestions: state.userQuestions,
    questions: state.questions,
    currentIndex: state.currentIndex,
    loading: state.loading,
    skipLimit: state.skipLimit,
    userName: state.userName,
    error: state.error,
    playerName: state.playerName,
    addQuestion,
    nextQuestion,
    prevQuestion,
    skipQuestion,
    setName,
    setError,
    setPlayerName
  };

  return (
    <QuestionContext.Provider value={questionContext}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
