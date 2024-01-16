import React from 'react'
import Toolbar from './Toolbar'
import CartContextApi from '../../hoc/context/CartContext'

const ToolbarParent = () => {
  return (
    <CartContextApi>
        <Toolbar/>

    </CartContextApi>
    
  )
}

export default ToolbarParent