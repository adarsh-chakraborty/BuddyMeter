import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CreateQuiz from './screens/CreateQuiz';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
