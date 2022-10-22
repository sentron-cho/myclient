import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Request from './Request';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Request />
  </React.StrictMode>
);