import React, { createContext, useContext, useReducer } from 'react'
import CartReducer from '../../components/navigation/CartReducer';

export const CartContext = createContext();

const CartContextApi = ({children}) => { 
  const initialState ={count:0}
  const [state, dispatch] = useReducer(CartReducer,{
    initialState:initialState,
    cart:[]
  }); 

  console.log(state.cart.length);

  return (    
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextApi

//This is custom hook
export const useCart =()=>{
  return useContext(CartContext)
}