import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';  // Import the function

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// Keep the reportWebVitals call if needed
reportWebVitals(console.log);  // You can log performance metrics or send them elsewhere
