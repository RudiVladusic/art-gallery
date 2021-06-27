import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <header>
        <h2>
          <a href="https://github.com/RudiVladusic">
            <FontAwesomeIcon icon={faGithub} /> Rudi Vladušić
          </a>
        </h2>
      </header>
      <div className="attribution">
        <h4>
          All images and information is fetched with{" "}
          <a href="https://metmuseum.github.io/">
            Metropolian Museum of Art API
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
