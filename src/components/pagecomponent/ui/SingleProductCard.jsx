import React, {  useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { useCart } from "../../../hoc/context/CartContext";


// const initialState = {
//   items: [],
// };

// const cartReducer = (state , action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };
// const addToCart = (item) => ({
//   type: 'ADD_TO_CART',
//   payload: item,
// });

const SingleProductCard = ({
  id,
  category,
  image,
  title,
  description,
  price, 
  
}) => {
    let max = 1000;
    let min= 100;  
  
  const [ratingNumber]=useState(Math.trunc(Math.random() * (max-min + 1) + min))
  const [stocks]=useState(Math.trunc(Math.random() * 10)+1)
  const [rating]=useState(Math.trunc(Math.random() * 5)+1)  
  const [count,setCount]=useState(0)

 
  const {dispatch} =useCart()

  const addItemToCart = () => {
   
    dispatch({type: 'ADD_TO_CART', 
    payload:{
      id, 
      category, image, title, description, price
    }})
  }
 

  return (
    <div className="grid grid-cols-12 w-11/12 gap-4 mx-auto bg-white p-4">
      <div className="col-span-3">
        <img src={image} className="w-full " alt="fads" />
      </div>
      <div className="col-span-9">
        <h1 className=" font-bold text-gray-700">{title}</h1>
        <h1 className=" font-thin text-lg text-gray-700 mt-2">{description}</h1>
        <div className="flex items-center gap-4 mt-4 ">
            <div className="flex items-center">
            <p className="font-thin text-gray-700 leading-none pr-1">{rating}</p>
            {Array(rating)
            .fill()
            .map((_, i) => {
              return <FaStar key={i} className="text-yellow-500 leading-1" />;
            })}

            </div>

            <div>
                <p className=" text-blue-400 text-sm font-bold">{ratingNumber}:ratings</p>
            </div>
       
        </div>
        <div className="mt-2 flex gap-4 items-center">
          <p className="font-bold text-gray-700">${price}</p>
          <p className="text-xs font-thin text-gray-500" >{category}</p>

        </div>

        <div className="mt-4 flex flex-col">
          <p className="font-thin text-gray-700"> No of Stocks:<span className="font-bold ">{stocks}</span></p>
          <h1 className=" text-xl text-gray-700">{count}</h1>
          <div className="flex gap-4 mt-1">
            <button className="font-bold text-2xl bg-blue-500 rounded-sm" onClick={(()=>{
              if(stocks === count){
                return count
              }
              else{
                setCount(pre=>pre + 1)
              }          
            
            })}><IoIosAdd  className="text-white"/></button>
            <button className="font-bold text-2xl bg-red-500 rounded-sm" onClick={(()=>{
             
              if (count === 0){
                return 0
              }
              else{
                setCount(pre=>pre - 1 )
              }
            })}><RiSubtractLine className="text-white"/></button>

          </div>
          <button onClick={()=> addItemToCart()} 
              className="button w-1/4 mt-2">Add to Cart</button>

          {/* {
            cart.some(p=> p.id === id)?(
              <button onClick={(()=>{
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:{
                  id,
                  category,
                  image,
                  title,
                  description,
                  price,}})
              })}  className="button w-1/4 mt-2">Remove From Cart</button>

            ):(
              <button onClick={(()=>{
                dispatch({
                  type:"ADD_TO_CART",
                  payload:{
                  id,
                  category,
                  image,
                  title,
                  description,
                  price,}})
              })} 
              className="button w-1/4 mt-2">Add to Cart</button>
            )
          } */}

               
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
