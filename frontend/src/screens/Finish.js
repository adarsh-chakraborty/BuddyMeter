import React from 'react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import QuestionContext from '../context/question-context';
import Loader from '../components/Loader';
import Container from '../components/Container';
import Error from '../components/Error';
import { CopyToClipboard } from 'react-copy-to-clipboard';

let PORT = 7000;


const Finish = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizId, setQuizId] = useState();
  const ctx = useContext(QuestionContext);
  const [copied, setCopied] = useState(false);

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


  useEffect(() => {

    fetch('/getPort').then(data => data.json()).then(data => {
      console.log(data)
      PORT = data.port
    })
  }, [])

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

  const copyHandler = () => {
    setCopied(true);
  };

  const hostname = `http://${window.location.hostname}:${PORT}`;

  return (
    <Container classNames="items-center justify-center flex-col mt-44 gap-2">
      <div className="text-2xl">Your quiz has been created!</div>
      <div className="flex items-center justify-center">
        <div className="text-slate-900 text-sm border border-gray-400 px-4 py-3 rounded shadow-md">
          {`${hostname}/quiz/${quizId}`}
        </div>
        <CopyToClipboard
          text={`${hostname}/quiz/${quizId}`}
          onCopy={copyHandler}
        >
          <div className="ml-2 cursor-pointer text-gray-700">
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 transition duration-100 ease-out hover:scale-105 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            )}
          </div>
        </CopyToClipboard>
      </div>
      <div className="text-sm text-gray-500">
        Copy the url and share with your friends.
      </div>
    </Container>
  );
};

export default Finish;
