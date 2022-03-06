import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import QuestionContext from '../context/question-context';

const Finish = () => {
  const [loading, setLoading] = useState(true);
  const ctx = useContext(QuestionContext);

  useEffect(() => {
    const postQuiz = async () => {
      const response = await axios.post('/api/questions', ctx.userQuestions, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
    };

    postQuiz();
  }, []);

  return <div>Finish</div>;
};

export default Finish;
