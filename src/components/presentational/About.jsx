import React from "react";

const About = () => {
  return (
    <main className="about-main">
      <article>
        <header>
          <h3>About</h3>
        </header>
        <p>This is a project created with ReactJS.</p>
        <p>
          All images and information is fetched with{" "}
          <a className="about-main__link" href="https://metmuseum.github.io/">
            Metropolian Museum of Art API
          </a>
        </p>
        <p>
          Explore and bookmark your favorite art pieces, i hope you enjoy the
          view ^^
        </p>
      </article>
    </main>
  );
};

export default About;
