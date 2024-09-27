import { useNavigate } from "react-router-dom";
import Logo from "../../assets/olx-logo.png";
import "./SignUp.css";
import { useContext, useEffect, useState } from "react";
import { signUp } from "../../firebase";
import MyContext from "../../context/MyContext";

const SignUp = () => {
  const { user } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(name, email, password, number);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const navigate = useNavigate("/login");
  return (
    <div>
      <div className="signupParentDiv">
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="phone">phone</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
            className="input"
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            style={{ marginBottom: "10px" }}
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
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <a onClick={() => navigate("/login")} style={{ marginTop: "20px" }}>
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUp;
