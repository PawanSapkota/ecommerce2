import React from 'react';
import ReactDOM from 'react-dom/client';
import "./container/index.css"
import App from './container/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CartContextApi from './hoc/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextApi>
    <BrowserRouter>   
     <App />   
    </BrowserRouter>

    </CartContextApi>
  </React.StrictMode>
);


reportWebVitals();
