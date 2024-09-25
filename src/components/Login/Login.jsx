import { useNavigate } from "react-router-dom";
import Logo from "../../assets/olx-logo.png";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="loginParentDiv">
        <h1 style={{textAlign:"center"}}>Login</h1>
        <img width="200px" height="200px" src={Logo}></img>
        <form style={{ marginBottom: "20px" }}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            style={{ marginBottom: "20px" }}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate("/login")}>Signup</a>
      </div>
    </div>
  );
};

export default Login;
