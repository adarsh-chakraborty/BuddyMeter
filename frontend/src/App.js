import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import GetStarted from './screens/GetStarted';
import CreateAccount from './screens/CreateAccount';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
