import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import CreateQuiz from './screens/CreateQuiz';
import HomeScreen from './screens/HomeScreen';
import QuestionContext from './context/question-context';
import { useContext } from 'react';
import Finish from './screens/Finish';

function App() {
  const { currentIndex, userName } = useContext(QuestionContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/create-quiz"
            element={userName.trim() === '' ? <HomeScreen /> : <CreateQuiz />}
          />
          <Route
            path="/finish"
            element={
              currentIndex === 9 ? <Finish /> : <Navigate to="/create-quiz" />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
