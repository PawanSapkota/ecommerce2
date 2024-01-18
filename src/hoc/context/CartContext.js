import React, { createContext, useContext, useReducer, useState } from 'react'
import CartReducer from '../../components/navigation/CartReducer';

const initialState ={
  cart:[],
  TotalAmount:0,
  totalItem: 0
}
export const CartContext = createContext();

const CartContextApi = ({children}) => { 
  const [state, dispatch] = useReducer(CartReducer,initialState );  
  const [count, setCount] = useState(0); 
  

  console.log(state.cart.length);

  return (    
    <CartContext.Provider value={{state,dispatch,count,setCount}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextApi

//This is custom hook
export const useCart =()=>{
  return useContext(CartContext)
}