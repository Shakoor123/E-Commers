import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { AuthContext } from "./context/darkmodeContext";
function App() {
  const { dark, user } = useContext(AuthContext);
  // const [user, setUser] = useState(true);
  return (
    <div className={dark ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={user ? <Home /> : <Login />} />
          <Route path={"/list/:type"} element={user && <List />} />
          <Route path={"/login"} element={user ? <Home /> : <Login />} />
          <Route path={"/new/:user"} element={user && <New />} />
          <Route path={"/single"} element={user && <Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
