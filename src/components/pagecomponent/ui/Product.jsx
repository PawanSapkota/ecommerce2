import React from 'react'

const Product = ({category,description,price,image,title,id}) => {
  return (
   <div className='bg-white relative'>
   
    <p className='text-xs text-gray-400 absolute top-1 right-1 '>{category}</p>

    <img alt='fdsa' className='object-contain w-[200px] h-[200px]' src={image}/>
    <h2 className='text-sm text-gray-700 ellipsis'>{title}</h2>

   
   </div>
  )
}

export default Product