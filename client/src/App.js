import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Productss from "./pages/Products";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const cuser = useSelector((state) => state.user.currentUser);
  console.log(cuser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Productss />} />
          <Route path="/login" element={cuser ? <Home /> : <Login />} />
          <Route path="/signup" element={cuser ? <Home /> : <Signup />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={cuser ? <Cart /> : <Login />} />
          <Route path="/success" element={cuser ? <Success /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
