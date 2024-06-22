import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Context } from './components/ContextProvider/Context';
import { ToastContainer, toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Context>
);

