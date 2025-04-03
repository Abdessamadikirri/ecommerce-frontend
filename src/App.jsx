import { Routes, Route, Router } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Signuppage from "./pages/signuppage/singuppage"
import Loginpage from "./pages/loginpage/loginpag"
import Aboutpage from "./pages/aboutpage/aboutpage"
import Contactpage from "./pages/contactpage/contactpage"
import Shoppage from "./pages/shoppage/shoppage"
import Abouthoneypage from "./pages/abouthoney/abouthoney"
import Productpage from "./pages/productpage/productpage"
import NavBar from "./components/header/navbar"
import Footer from "./components/footer/footer"
import Cartpage from "./pages/cartpage/cartpage"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/abouthoney" element={<Abouthoneypage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
