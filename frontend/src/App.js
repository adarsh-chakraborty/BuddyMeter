import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HomeScreen />
      </main>
    </div>
  );
}

export default App;
