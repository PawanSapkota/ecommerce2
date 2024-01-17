import React from 'react';
import ReactDOM from 'react-dom/client';
import "./container/index.css"
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import CartContextApi from './hoc/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextApi>    
     <App />
    </CartContextApi>
  </React.StrictMode>
);


reportWebVitals();
