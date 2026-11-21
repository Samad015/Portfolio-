import React from "react";
import {Fade} from "react-reveal";
import ArcadeJump from "../greeting/ArcadeJump";
import {bigProjects} from "../../portfolio";
import "./StartupProjects.css";

const portfolioStack = ["React", "Express", "MongoDB", "Docker"];

function PortfolioPreview() {
  return (
    <div className="portfolio-preview" aria-hidden="true">
      <div className="portfolio-preview-window">
        <div className="portfolio-preview-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="portfolio-preview-layout">
          <div className="portfolio-preview-copy">
            <span />
            <span />
            <span />
          </div>
          <div className="portfolio-preview-mark">S.</div>
        </div>
        <div className="portfolio-preview-grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function PortfolioStack() {
  return (
    <ul className="project-stack" aria-label="Technologies">
      {portfolioStack.map(technology => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export default function StartupProject({headingLevel = 1}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const ProjectHeading = headingLevel === 1 ? "h2" : "h3";
  return (
    <section className="main project-showcase">
      <Heading className="heading">Projects</Heading>
      <Fade bottom distance="16px" duration={450}>
        <article className="featured-project">
          <div className="featured-project-copy">
            <ProjectHeading className="project-title">
              This portfolio
            </ProjectHeading>
            <p>
              A multi-page developer portfolio with an animated homepage, a
              keyboard-friendly arcade interaction, and a contact form.
            </p>
            <PortfolioStack />
            <a className="main-button" href="/projects/portfolio">
              View case study <span aria-hidden="true">↗</span>
            </a>
          </div>
          <PortfolioPreview />
        </article>
      </Fade>
      {bigProjects.projects.map(project => (
        <Fade bottom distance="16px" duration={450} key={project.projectName}>
          <article className="project-entry">
            <div>
              <ProjectHeading className="project-title">
                {project.projectName}
              </ProjectHeading>
              <p>{project.projectDesc}</p>
              <div className="project-links">
                {project.footerLink?.map(link => (
                  <a href={link.url} key={link.url}>
                    {link.name} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
            {project.image && <img src={project.image} alt="" loading="lazy" />}
          </article>
        </Fade>
      ))}
    </section>
  );
}

export function PortfolioCaseStudy() {
  return (
    <article className="main portfolio-case-study">
      <a className="project-back" href="/projects">
        <span aria-hidden="true">← </span>All projects
      </a>
      <header className="case-study-intro">
        <div>
          <h1 className="heading">This portfolio</h1>
          <p>
            A developer portfolio with dedicated pages for projects, skills,
            experience, education, résumé, and contact. The homepage brings
            those sections together in a single scrolling view.
          </p>
          <PortfolioStack />
        </div>
        <PortfolioPreview />
      </header>
      <Fade bottom distance="16px" duration={450}>
        <section className="case-study-details">
          <h2>How it works</h2>
          <dl>
            <div>
              <dt>Interface</dt>
              <dd>
                React renders the pages and tracks arcade jumps. CSS handles the
                theme, startup animation, and jump motion.
              </dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                An Express endpoint validates and rate-limits submissions. With
                MongoDB and SMTP configured, it stores the message and sends it
                to the portfolio inbox.
              </dd>
            </div>
            <div>
              <dt>Deployment</dt>
              <dd>
                Docker Compose runs the app alongside MongoDB. A named volume
                keeps message data across container restarts.
              </dd>
            </div>
          </dl>
          <div className="case-study-arcade">
            <ArcadeJump />
          </div>
        </section>
      </Fade>
    </article>
  );
}
