import React, { useEffect, useState } from 'react'
import SingleProductCard from '../ui/SingleProductCard'
import {   useParams } from 'react-router-dom'

const SingleProduct = () => { 
  const { id } = useParams();
  // const location =useLocation()
  // const {rating} =location.state;
  const [getSingleProductData,setGetSingleProductData]=useState([])

  const url =`https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    async function getData(){
      const response =await fetch(url);
      const data = await response.json();
      console.log(data);
      setGetSingleProductData(data)      
    }
    getData()   
  }, [])
  

const {image,category,description,title,price} =getSingleProductData;
     
  return (
    <div>  
          <SingleProductCard id={id}  category={category} image={image} description={description} title={title} price={price}/>        
    </div>
  )
}

export default SingleProduct