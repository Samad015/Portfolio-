import React from "react";
import portrait from "../../assets/images/samad-cutout.png";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import "./Greeting.css";

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  return (
    <section className="greet-main" aria-labelledby="greeting">
      <div className="greeting-copy">
        <p className="greeting-label">Developer portfolio</p>
        <h1 id="greeting">
          {greeting.title} <span>{greeting.username}.</span>
        </h1>
        <p className="greeting-description">
          {greeting.subTitle ||
            "Explore my work, read about how this site was built, or get in touch."}
        </p>
        <div className="greeting-actions">
          <Button text="Explore projects ↓" href="#home-projects" />
          <a className="main-button resume-button" href="/resume">
            Résumé
          </a>
        </div>
        <SocialMedia iconOnly />
      </div>
      <figure className="greeting-portrait">
        <span className="portrait-orbit" aria-hidden="true" />
        <img src={portrait} alt={`Portrait of ${greeting.username}`} />
        <span className="portrait-mark" aria-hidden="true">
          &gt;_
        </span>
        <span className="portrait-dots" aria-hidden="true" />
      </figure>
    </section>
  );
}
