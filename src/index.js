import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css"; 
import { Amplify } from 'aws-amplify'
Amplify.configure(awsExports); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();