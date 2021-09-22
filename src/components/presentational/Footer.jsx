import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/RudiVladusic">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <div className="attribution">
        <p>
          All images and information is fetched with{" "}
          <a href="https://metmuseum.github.io/">
            Metropolian Museum of Art API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
