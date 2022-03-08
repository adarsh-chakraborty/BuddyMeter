import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import QuestionContext from '../context/question-context';
import Loader from '../components/Loader';
import Container from '../components/Container';
import Error from '../components/Error';

const Finish = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizId, setQuizId] = useState('https://quizapp.com/');
  const ctx = useContext(QuestionContext);

  useEffect(() => {
    const postQuiz = async () => {
      try {
        const response = await axios.post(
          '/api/questions',
          { userName: ctx.userName, questions: ctx.userQuestions },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );
        setQuizId(response.data.quizId);
        setLoading(false);
      } catch (error) {
        setError(
          error.response.data.error ?? 'Something went wrong, try again later.'
        );
        setLoading(false);
      }
    };

    postQuiz();
  }, [ctx]);

  if (loading) {
    return (
      <Container classNames="mt-44 items-center">
        <Loader text="Creating your quiz..." />
      </Container>
    );
  }

  if (error) {
    return (
      <Container classNames="mt-44 items-center">
        <Error text={error} />
      </Container>
    );
  }

  return (
    <Container classNames="items-center justify-center flex-col mt-44 gap-2">
      <div className="text-2xl">Your quiz has been created!</div>
      <div className="text-slate-900 text-sm border border-gray-400 px-4 py-3 rounded shadow-md">
        {`http://localhost:3000/quiz/${quizId}`}
      </div>
      <div className="text-sm text-gray-500">
        Copy the url and share with your friends.
      </div>
    </Container>
  );
};

export default Finish;
