import React from "react";
import {Fade} from "react-reveal";
import {techStack} from "../../portfolio";
import "./Progress.scss";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={550} distance="20px">
      <section
        className="skills-container"
        aria-labelledby="proficiency-heading"
      >
        <h2 className="heading" id="proficiency-heading">
          Proficiency
        </h2>
        <p className="proficiency-note">Illustrative levels</p>
        <ul className="proficiency-list">
          {techStack.experience.map(({Stack, progressPercentage}) => (
            <li key={Stack}>
              <span>{Stack}</span>
              <div className="proficiency-track" aria-hidden="true">
                <div
                  className="proficiency-fill"
                  style={{width: progressPercentage}}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Fade>
  );
}
