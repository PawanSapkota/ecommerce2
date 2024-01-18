import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../hoc/layout/Layout";
import SingleProduct from "../components/pagecomponent/product/SingleProduct";

import Home from "../pages/home/Home";

function App() {
  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/singleproduct/:id/:title" element={<SingleProduct />} />          
             <Route path="*">Pagenot founsd</Route>
          </Route>
          <Route path="*">Pagenot founsd</Route>
        </Routes>        
      </BrowserRouter>
    
  );
}

export default App;
