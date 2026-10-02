import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'}
          onMouseEnter={() => setMenu("home")}
          onMouseLeave={() => setMenu("")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onMouseEnter={() => setMenu("menu")}
          onMouseLeave={() => setMenu("")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onMouseEnter={() => setMenu("mobile-app")}
          onMouseLeave={() => setMenu("")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a href="#footer"
          onMouseEnter={() => setMenu("contact-us")}
          onMouseLeave={() => setMenu("")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-serch-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
