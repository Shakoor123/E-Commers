import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Productss from "./pages/Products";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "./redux/userRedux";
function App() {
  const dispatch = useDispatch();
  const [oUser, setOUser] = useState({});
  const cuser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const getOldUser = async () => {
      if (JSON.parse(localStorage.getItem("eCommers")).Token) {
        dispatch(loginSuccess(JSON.parse(localStorage.getItem("eCommers"))));
      }
    };
    getOldUser();
  }, []);

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
