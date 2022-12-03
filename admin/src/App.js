import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import { useContext } from "react";
import { AuthContext } from "./context/darkmodeContext";
function App() {
  const { dark } = useContext(AuthContext);

  return (
    <div className={dark ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/list/:type"} element={<List />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/new/:user"} element={<New />} />
          <Route path={"/single"} element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
