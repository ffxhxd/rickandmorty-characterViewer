import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logoImg from "../../Assets/logo.png";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="main-nav" role="nav-bar">
      <div className="logo">
        <img className="logo-img" src={logoImg} alt="rick and morty logo" />
      </div>

      <div className={toggle ? "mobile" : "menu-link"}>
        <ul className="nav-ul res">
          <Link to="/">
            <li className="nav-li">Home</li>
          </Link>
          <Link to="/characters">
            <li className="nav-li">Characters</li>
          </Link>
          <Link to="/episodes">
            <li className="nav-li">Episodes</li>
          </Link>
          <Link to="/locations">
            <li className="nav-li">Locations</li>
          </Link>
        </ul>
      </div>

      <div className="hamburger-menu">
        {toggle ? (
          <RxCross2 size={30} onClick={() => setToggle(!toggle)} />
        ) : (
          <GiHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
        )}
      </div>
    </nav>
  );
};

export default Header;
