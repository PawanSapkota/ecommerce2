import React from 'react'
import Caraousel from '../../components/pagecomponent/ui/Carousel'
import ProductFeed from '../../components/pagecomponent/product/ProductFeed'



const Home = () => {
  return (
    <div className='bg-gray-100 mx-auto'>
        <Caraousel/>
        <div className="w-11/12 mx-auto ">
        <ProductFeed/>
      </div>
    </div>
  )
}

export default Home