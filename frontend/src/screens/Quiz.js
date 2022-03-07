import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { quiz: quizId } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${quizId}`);
        setLoading(false);

        if (!response.ok) {
          const errorResponse = JSON.parse(await response.text());

          const errorMessage = errorResponse
            ? errorResponse.error
            : '❌ Could not connect to the server. Please try again later.';

          setError(errorMessage);
          return;
        }

        const quizQuestions = await response.json();
        setQuiz(quizQuestions);
      } catch (e) {
        setLoading(false);
        setError('❌ Could not connect to the server. Please try again later.');
      }
    };

    getQuiz();
  }, [quizId]);

  // Loading
  // Error
  return <div>{quizId}</div>;
};

export default Quiz;
