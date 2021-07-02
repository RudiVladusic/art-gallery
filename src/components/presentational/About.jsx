import React from "react";

const About = () => {
  return (
    <main className="about-main">
      <header>
        <h2>About</h2>
      </header>

      <article>
        <header>
          <h3>Gallery of fine arts</h3>
          <p>
            This is a project created with ReactJS. All images and information
            is fetched with
            <a href="https://metmuseum.github.io/">
              Metropolian Museum of Art API
            </a>
          </p>

          <p>
            I hope you will enjoy your stay at this virtual gallery! Explore and
            bookmark your favorite art pieces :D
          </p>
        </header>
      </article>
    </main>
  );
};

export default About;
