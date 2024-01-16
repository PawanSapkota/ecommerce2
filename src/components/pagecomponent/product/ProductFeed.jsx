import React, { useEffect, useState } from 'react'
import Product from '../ui/Product'

const ProductFeed = () => {
  
  const [getProductData,setGetProductData]=useState([])

    const url ="https://fakestoreapi.com/products"

    useEffect(() => {
     async function getData(){
        const response =await fetch(url);
        const data = await response.json()
        console.log(data)
        setGetProductData([...data])   
    
     }
     getData()  

    }, [])    

//     const login = localStorage.getItem('loggedin')
// if(!login){
  
// }
    //data correct 
    // localStorage.setItem('loggedin', true)
    
    
  return (
    <div className='grid gap-4 grid-cols-1 -mt-32  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer'>
       {
        getProductData.map((product,i)=>{
            return(
              <Product key={i}
              id={product.id}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
              title={product.title}           
              
              />
            )
        })
    }
     
      </div>
  )
}

export default ProductFeed