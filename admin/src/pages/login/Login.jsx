import "./login.scss";
import { AuthContext } from "../../context/darkmodeContext";
import { useState, useContext, useEffect } from "react";
import { publicRequest } from "../../requestMethod";
const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cuser, setCuser] = useState({});
  useEffect(() => {
    setCuser(JSON.parse(localStorage.getItem("eCommersUser")) || {});
    if (cuser.Token) {
      setUser(cuser);
    }
  }, [cuser]);

  const handleLogin = async () => {
    try {
      const res = await publicRequest.post("/auth/login", { email, password });
      if (res.status === 200) {
        localStorage.setItem("eCommersUser", JSON.stringify(res.data));
        setUser(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="wrapper">
        <h3 className="title">Log In</h3>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="username"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="username"
          placeholder="Password"
        />
        <button className="username" onClick={handleLogin}>
          log-In
        </button>
      </div>
    </div>
  );
};

export default Login;
