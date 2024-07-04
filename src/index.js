import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactForm from './Form';
import ReactForm1 from './Form-1';
import BoxColor from './Practical-1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReactForm />
    <App /> 
    <ReactForm1 />
    <BoxColor/>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
