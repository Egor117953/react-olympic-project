import React from 'react';
import ReactDOM from 'react-dom/client'; 
import HomePage from './components/HomePage.jsx';
import './index.css'; 

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HomePage /> 
  </React.StrictMode>
);