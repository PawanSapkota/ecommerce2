import {Routes,Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Layout from "../hoc/layout/Layout"


function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Layout>
  )
}

export default App

