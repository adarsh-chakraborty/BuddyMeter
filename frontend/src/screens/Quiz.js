import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Loader from '../components/Loader';
import Button from '../components/Button';
import QuestionContext from '../context/question-context';
import Question from '../components/Question';
import Result from './Result';
import Error from '../components/Error';

const Quiz = () => {
  const { playerName, setPlayerName } = useContext(QuestionContext);
  const { quiz: quizId } = useParams();
  const [quiz, setQuiz] = useState();
  const [error, setError] = useState();
  const [userQuestions, setUserQuestions] = useState({});
  const [loading, setLoading] = useState('Loading Quiz...');
  const [name, setName] = useState('');
  const [result, setResult] = useState();

  // Questionaire
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = quiz?.questions[currentIndex];

  const [selectedOption, setSelectedOption] = useState({
    queId: currentQuestion?.queID?._id ?? null,
    answer: null
  });

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${quizId}`);
        setLoading(null);

        if (!response.ok) {
          if (response.status === 500) {
            throw new Error('Internal server error');
          }
          const responseError = await response.json();
          setError(responseError.error ?? responseError);
          return;
        }

        const resJson = await response.json();
        console.log(resJson);
        setQuiz(resJson);
      } catch (e) {
        setLoading(null);
        setError('❌ Could not connect to the server. Please try again later.');
      }
    };

    getQuiz();
  }, [quizId]);

  useEffect(() => {
    if (userQuestions[currentIndex] && currentIndex < 10) {
      const { queId, answer } = userQuestions[currentIndex];
      setSelectedOption({ queId, answer });
    }
  }, [currentIndex, userQuestions]);

  useEffect(() => {
    const finalizeQuiz = async () => {
      try {
        const { data } = await axios.post('/api/result', {
          quizId: quizId,
          userQuestions,
          playerName
        });
        setLoading(null);
        setResult(data.score);
        console.log(data);
      } catch (error) {
        setLoading(null);
        setError(
          error.response.data.error ?? 'Something went wrong, try again later.'
        );
      }
    };
    if (currentIndex === 10) {
      setLoading('Submitting your answers...');
      finalizeQuiz();
    }
  }, [currentIndex, quizId, userQuestions, playerName]);

  // Error
  if (error) {
    return (
      <Container classNames="mt-44 items-center">
        <Error text={error} />
      </Container>
    );
  }

  // Loading
  if (loading || !quiz) {
    return (
      <Container classNames="mt-44 items-center">
        <Loader text={loading} />
      </Container>
    );
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  if (!playerName || playerName.length === 0) {
    return (
      <Container classNames="mt-44 items-center flex-col">
        <div className="text-2xl">
          <span className="font-semibold">{quiz.userName}</span> has made an
          quiz for you!
        </div>
        <input
          type="text"
          value={name}
          onChange={nameChangeHandler}
          placeholder="Enter your name..."
          className="focus:ring-0 border-gray-500 focus:border-gray-600 focus:border-2   mt-4 transition-colors duration-150 border   rounded-sm shadow-md focus:bg-slate-100 hover:bg-slate-50"
        />
        <div className="py-2 text-sm text-gray-500">
          Enter your name to continue.
        </div>

        <Button
          btnText="Start"
          btnType="submit"
          classNames="mt-1 p-2 w-48"
          disabled={name.trim() === ''}
          onClick={() => {
            setPlayerName(name);
          }}
        />
      </Container>
    );
  }

  const onNextHandler = () => {
    setUserQuestions((prevQuestions) => {
      prevQuestions[currentIndex] = { index: currentIndex, ...selectedOption };
      return { ...prevQuestions };
    });
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (currentIndex === 9) return;
    setSelectedOption({ queId: null, answer: null });
  };

  const onBackHandler = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const onRadioChange = (queId, answer) => {
    setSelectedOption({ queId, answer });
  };

  if (result) {
    return <Result score={result} />;
  }

  if (currentIndex < 10) {
    return (
      <Container>
        <Question
          currentIndex={currentIndex}
          currentQuestion={currentQuestion.queID}
          onNext={onNextHandler}
          onBack={onBackHandler}
          onRadioChange={onRadioChange}
          selectedOption={selectedOption}
        />
      </Container>
    );
  }

  return (
    // This screen will never render or sometimes when it cannot load result in rare occasions.
    <Container>
      <div className="mt-44 text-3xl font-bold text-gray-800">
        Quiz has Ended!
      </div>
    </Container>
  );
};

export default Quiz;
