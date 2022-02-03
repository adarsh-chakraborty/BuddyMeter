import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import QuizCreation from './screens/QuizCreation';
import CreateAccount from './screens/CreateAccount';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create-quiz" element={<QuizCreation />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
