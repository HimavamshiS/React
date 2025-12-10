import { navbarLogoIcon, aboutUs } from "../utils/constants";
// import { aboutUs } from "../utils/constants";
import { useState } from "react";

let Navbar = () => {
  let [loginButtonval, setLoginButtonval] = useState("login");
  return (
    <div id="navbar">
      <img className="navimg navswiggylogo" src={navbarLogoIcon} alt="swiggy" />
      <h1>Navbar</h1> <h2>HOME</h2>
      <img className="navimg aboutus" src={aboutUs} alt="swiggy" />
      <button
        id="login"
        onClick={() => {
          // loginButtonval == "login" ? "logout" : "login";
          setLoginButtonval(loginButtonval == "login" ? "logout" : "login");
        }}
      >
        {loginButtonval}
      </button>
    </div>
  );
};
export default Navbar;
