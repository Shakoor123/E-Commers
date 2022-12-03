import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <h3 className="title">Log In</h3>
        <input type="text" className="username" placeholder="UserName" />
        <input type="password" className="username" placeholder="Password" />
        <button className="username">log-In</button>
      </div>
    </div>
  );
};

export default Login;
