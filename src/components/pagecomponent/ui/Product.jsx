import React, {  useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({category,description,price,image,title,id}) => {
  const [rating]=useState(Math.trunc(Math.random() * 5) +  1)
 
 
  return (
   <div className='bg-white relative p-4 z-50'>
   
    <p className='text-xs text-gray-400 absolute top-1 right-1 '>{category}</p>
    
    <Link className='flex w-full justify-center items-center pt-2 ' to={`/singleproduct/${id}/product=${title}`}>

    <img alt='fdsa' className='object-contain w-[200px] h-[200px]' src={image}/>

    </Link>
    <h2 className='text-sm font-bold text-gray-700 my-2 line-clamp-1'>{title}</h2>


    <div className='flex gap-1 '   >
    {
      Array(rating).fill().map((_,i)=>{
        return(
          <FaStar key={i} className='text-yellow-500'/>
        )
      })
    }
    </div>
    <p className='text-xs my-2 text-gray-600 line-clamp-2'>{description}</p>

    <p className='font-bold text-gray-800'>${price}</p>

    <button  className=' w-full text-center font-bold my-2 text-gray-700 button'>Add to Cart</button>

   
   </div>
  )
}

export default Product