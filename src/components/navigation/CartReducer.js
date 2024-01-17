
const CartReducer = (state,action) => {
  console.log("action",action)

  switch(action.type){
    case "ADD_TO_CART":
      return {
            ...state,
            cart: [...state.cart, {...action.payload, qty: 1 }]
          }
         
          default:
            return state
        }


  }

 


  
  
    // switch (action.type) {
    //   case "ADD_TO_CART":
    //     console.log("hello there");
    //       return console.log("Hello")
    //     case "REMOVE_FROM_CART":
    //       return { ...state, cart:state.cart.filter(c =>c.id !== action.payload.id)}
    //     default:
    //       return state;
    //   }
    // };  




export default CartReducer