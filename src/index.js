import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.scss";
import './services/i18n';


const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
    <App />
    </React.Suspense>
  </React.StrictMode>
);



// For React versions older than 18.0
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
