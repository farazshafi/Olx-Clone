import { useNavigate } from "react-router-dom";
import Logo from "../../assets/olx-logo.png";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate("/login")
  return (
    <div>
      <div className="signupParentDiv">
        <h1 style={{textAlign:"center"}}>Sign Up</h1>
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a onClick={()=> navigate("/login")} style={{ marginTop: "20px" }}>Login</a>
      </div>
    </div>
  );
};

export default SignUp;
