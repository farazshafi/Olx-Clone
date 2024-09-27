import { useNavigate } from "react-router-dom";
import Logo from "../../assets/olx-logo.png";
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { login } from "../../firebase";
import MyContext from "../../context/MyContext";
const Login = () => {
  const {user} = useContext(MyContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  })
  return (
    <div>
      <div className="loginParentDiv">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleClick} style={{ marginBottom: "20px" }}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            required={true}
            style={{ marginBottom: "20px" }}
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            required={true}
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a onClick={() => navigate("/sign_up")}>Signup</a>
      </div>
    </div>
  );
};

export default Login;
