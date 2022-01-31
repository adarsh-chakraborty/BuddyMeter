import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />

      <Container as="main">
        <HomeScreen />
      </Container>
    </>
  );
}

export default App;
