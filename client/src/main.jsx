import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from  '../js/reportWebVitals.js';
// import { ModalProvider } from "react-modal-hook";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <PayPalScriptProvider>
        <Router>
          <App/>
        </Router>
      </PayPalScriptProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();


