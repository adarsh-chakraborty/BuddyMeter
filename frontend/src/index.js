import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import QuestionProvider from './context/QuestionProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
