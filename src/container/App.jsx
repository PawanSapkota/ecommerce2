import {Routes,Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Layout from "../hoc/layout/Layout"
import SingleProduct from "../components/pagecomponent/product/SingleProduct"
import CartContextApi from "../hoc/context/CartContext"


function App() {
  return (
    <CartContextApi >
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleproduct/:id/:title" element={<SingleProduct/>}/>
    </Routes>
  </Layout>

    </CartContextApi>
  )
}

export default App

