const CartReducer = (state, action) => {
  console.log("action", action);
  console.log("state", state);


  // const addToCartReducer = (state, newItem) => {
  //   const existingItem = state.cart.find((item) => item.id === newItem.id);
  
  //   if (existingItem) {
      
  //     const updatedCart = state.cart.map((item) =>
  //       item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
  //     );
  //     return { ...state, cart: updatedCart };
  //   } else {
      
  //     return { ...state, cart: [...state.cart, { ...newItem, qty: 1 }] };
  //   }
  // };

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    // case "ADD_TO_CART":
    //   return addToCartReducer(state, action.payload);
      

    case "REMOVE_FROM_CART":
      return { ...state, cart:state.cart.filter(c =>c.id !== action.payload.id)}

        
    // case "UPDATE_CART_QTY":
    //   return{...state,cart:state.cart.filter(c=> c.id === action.payload.id ? (c.id = action.payload.qty) : c.qty ) }

    
    case "UPDATE_CART_QTY":
      const itemToRemove = state.cart.find((c) => c.id === action.payload.id);
      const updatedCart = state.cart.filter((c) => c.id !== action.payload.id);

    
      if (itemToRemove) {
        itemToRemove.qty -= 1;
      
        if   (itemToRemove.qty === 0) {
          return { ...state, cart: updatedCart };
        }

        
        return { ...state, cart: [...updatedCart, itemToRemove] };
      }

      
      return state;

    default:
      return state;
  }
};



export default CartReducer;
