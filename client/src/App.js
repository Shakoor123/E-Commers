import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Productss from './pages/Products';
import Signup from './pages/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [cuser, setUser] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={cuser?<Home />:<Login/>} />
      <Route path="/products/:category"  element={cuser?<Productss />:<Login/>} />
      <Route path="/login" element={cuser?<Home/>:<Login />} />
      <Route path="/signup" element={cuser?<Home/>:<Signup />} />
      <Route path="/product/:id" element={cuser?<Product />:<Login/>} />
      <Route path="/cart"  element={cuser?<Cart />:<Login/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
