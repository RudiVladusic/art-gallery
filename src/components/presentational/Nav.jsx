import { Link } from "react-router-dom";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(Boolean);
  const [isBurgerOpen, setIsBurgerOpen] = useState(Boolean);

  const openMobileMenuHandler = () => {
    setIsNavOpen(!isNavOpen);
    setIsBurgerOpen(!isBurgerOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav>
      <div className="nav-header-center">
        <header>
          <Link to="/">
            <h2>Fine Art</h2>
          </Link>
        </header>
      </div>
      <div className="nav-desktop-links">
        <Link to="/">Home</Link>
        <Link to="/myfavorites">Favorites</Link>
        <Link to="/about">About</Link>
      </div>

      <div
        className={isBurgerOpen ? `burger open` : `burger`}
        onClick={openMobileMenuHandler}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={isNavOpen ? `mobile-nav active` : `mobile-nav`}>
        <Link onClick={openMobileMenuHandler} to="/">
          Home
        </Link>
        <Link onClick={openMobileMenuHandler} to="/myfavorites">
          Favorites
        </Link>
        <Link onClick={openMobileMenuHandler} to="/about">
          About
        </Link>
        <a href="https://github.com/RudiVladusic">
          <FontAwesomeIcon icon={faGithub} /> Rudi Vladušić
        </a>
      </div>
    </nav>
  );
};

export default Nav;
