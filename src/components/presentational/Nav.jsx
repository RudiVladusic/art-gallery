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
      <div className="navbar-wrapper">
        <div
          className={isBurgerOpen ? `burger open` : `burger`}
          onClick={openMobileMenuHandler}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
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
        <Link to="https://github.com/RudiVladusic">
          <FontAwesomeIcon icon={faGithub} /> Rudi Vladušić
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
