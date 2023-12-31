import "./Header.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { RICKMORTY_LOGO_URL } from "../../Utils/Constants";

const Header = () => {
  const [toggleMenuButton, setToggleMenuButton] = useState(true);

  return (
    <header className="header-container">
      <img src={RICKMORTY_LOGO_URL} alt="Logo-RickandMorty" />
      <nav className="nav responsive-nav">
        <div>
          {toggleMenuButton ? (
            <RxCross1
              className="toggleIcons"
              size={40}
              onClick={() => setToggleMenuButton(!toggleMenuButton)}
            />
          ) : (
            <RxHamburgerMenu
              className="toggleIcons"
              size={40}
              onClick={() => setToggleMenuButton(!toggleMenuButton)}
            />
          )}
        </div>
        {toggleMenuButton && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
