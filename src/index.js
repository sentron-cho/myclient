import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Request from './Request.jsx';
import Day02A1 from './Day02/Day02A1.jsx';
// import Console from './Day03/Console.jsx';
import SpreadExam from './Day05/SpreadExam.jsx';
import PromiseExam from './Day06/PromiseExam.jsx';
import PromiseAsync from './Day06/PromiseAsync.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Request /> */}
    <Day02A1 />
  </React.StrictMode>
);

// SpreadExam.exam01()
// SpreadExam.exam02()
SpreadExam.exam03()

// Console.time()
// Console.log()
// Console.dir()
// Console.rest()
// Console.trace()

// PromiseExam.callback()
// PromiseExam.callbackFunc()
// PromiseExam.promise()
// PromiseExam.promiseCatch()
// PromiseExam.promiseThen()

// PromiseAsync.promise()
// PromiseAsync.prominseAsync()