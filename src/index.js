import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import PortfolioProvider from './context/PortfolioProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
