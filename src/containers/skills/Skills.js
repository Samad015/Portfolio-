import React from "react";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import "./Skills.scss";

export default function Skills({headingLevel = 1}) {
  if (!skillsSection.display) return null;

  const Heading = headingLevel === 2 ? "h2" : "h1";

  return (
    <section
      className="main skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <Fade bottom duration={500} distance="20px">
        <Heading className="heading" id="skills-title">
          {skillsSection.title}
        </Heading>
      </Fade>
      <ul className="skills-service-list">
        {skillsSection.skills.map((skill, index) => (
          <Fade
            bottom
            duration={450}
            delay={(index % 3) * 65}
            distance="18px"
            key={skill}
          >
            <li>
              <span aria-hidden="true">★</span>
              {skill}
            </li>
          </Fade>
        ))}
      </ul>
      {skillsSection.softwareSkills.length > 0 && <SoftwareSkill />}
      <Fade bottom duration={450} distance="18px">
        <div className="skills-invitation">
          <p>{skillsSection.invitation}</p>
          <Button
            text="Get in touch"
            href={headingLevel === 2 ? "#home-contact" : "/contact"}
          />
        </div>
      </Fade>
    </section>
  );
}
