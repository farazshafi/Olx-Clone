import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/Arrow";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import "./Header.css";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { logout } from "../../firebase";

const Header = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    await logout()
    navigate('/login')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        {user ? (
          <div onClick={handleLogout} className="loginPage">
            <span>Logout</span>
            <hr />
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="loginPage">
            <span>Login</span>
            <hr />
          </div>
        )}

        <div className="sellMenu">
          <SellButton />
          <div
            onClick={() => navigate("/add_product")}
            className="sellMenuContent"
          >
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
