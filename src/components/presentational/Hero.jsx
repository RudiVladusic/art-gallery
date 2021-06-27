import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <header className="hero-header">
        <h2>
          <Link to="/">Gallery of fine arts</Link>
        </h2>
      </header>
    </div>
  );
};

export default Hero;
