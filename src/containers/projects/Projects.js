import React from "react";
import {Fade} from "react-reveal";
import {openSource, socialMediaLinks} from "../../portfolio";
import "./Project.css";

export default function OpenSourceProjects({headingLevel = 1}) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  const CardHeading = headingLevel === 2 ? "h3" : "h2";
  if (!openSource.display || !openSource.repositories.length) return null;

  return (
    <section
      className="main open-source-projects"
      id="opensource"
      aria-labelledby="open-source-title"
    >
      <Heading className="heading" id="open-source-title">
        Open Source Projects
      </Heading>
      <div className="open-source-grid">
        {openSource.repositories.map(({name, description, language, demo}) => (
          <Fade bottom duration={450} distance="16px" key={name}>
            <article className="open-source-card">
              <CardHeading>
                <a href={`${socialMediaLinks.github}/${name}`}>
                  {name} <span aria-hidden="true">↗</span>
                </a>
              </CardHeading>
              <p>{description}</p>
              <div className="open-source-meta">
                <span>
                  <i aria-hidden="true" />
                  {language}
                </span>
                {demo && <a href={demo}>Live demo ↗</a>}
              </div>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
