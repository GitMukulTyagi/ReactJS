import React from 'react';
import ReactDOM from 'react-dom/client';
import Myfunction from './Myfunction';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App/>
    <h2>Hello We are learning ReactJS</h2>
    <h2>This is 2nd Chapter</h2>
    <Myfunction/>
    </>
  </React.StrictMode>
);

