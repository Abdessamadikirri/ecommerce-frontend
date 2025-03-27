

import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Signuppage from "./pages/signuppage/singuppage"
import Loginpage from "./pages/loginpage/loginpag"
import Aboutpage from "./pages/aboutpage/aboutpage"
import Contactpage from "./pages/contactpage/contactpage"
import Shoppage from "./pages/shoppage/shoppage"
import Abouthoneypage from "./pages/abouthoney/abouthoney"




function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/shop" element={<Shoppage />} />
      <Route path="/abouthoney" element={<Abouthoneypage />} />
    </Routes>
  )
}

export default App
