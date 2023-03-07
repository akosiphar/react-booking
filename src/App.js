import './App.css';
import AppNavBar from './components/AppNavbar';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';

// React fragments allows us to return multiple elements
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <AppNavBar />
    <Container>
      <Home />
    </Container>
    </Fragment>
  );
}

export default App;
