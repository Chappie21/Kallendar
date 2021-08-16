import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Importar estilo custom de bootstrap
import './sass/custom.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

