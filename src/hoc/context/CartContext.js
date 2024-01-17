import React, { createContext, useContext, useReducer } from 'react'
import CartReducer from '../../components/navigation/CartReducer';

export const CartContext = createContext();

const CartContextApi = ({children}) => { 
  const initialState ={cart:[]}
  const [state, dispatch] = useReducer(CartReducer,initialState );   
  

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