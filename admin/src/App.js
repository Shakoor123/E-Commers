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
  const { dark, user } = useContext(AuthContext);
  // const [user, setUser] = useState(true);
  // let cuser = JSON.parse(localStorage.getItem("eCommersUser")) || {};
  // if (cuser.Token) {
  //   setUser(cuser);
  // }
  return (
    <div className={dark ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={user ? <Home /> : <Login />} />
          <Route path={"/list/:type"} element={user ? <List /> : <Login />} />
          <Route path={"/login"} element={user ? <Home /> : <Login />} />
          <Route path={"/new/:user"} element={user ? <New /> : <Login />} />
          <Route path={"/single"} element={user ? <Single /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
