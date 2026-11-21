import React from "react";
import {Fade} from "react-reveal";
import {socialMediaLinks, workExperiences} from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience({headingLevel = 1}) {
  if (!workExperiences.display) return null;

  const Heading = headingLevel === 2 ? "h2" : "h1";
  const RoleHeading = headingLevel === 2 ? "h3" : "h2";

  return (
    <section
      className="main work-experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Heading className="heading" id="experience-title">
        Experience
      </Heading>
      <div className="work-experience-grid">
        {workExperiences.experience.map(
          ({company, role, date, location, descBullets}) => (
            <Fade bottom duration={450} distance="18px" key={company + role}>
              <article className="work-experience-card">
                <p className="work-experience-company">{company}</p>
                <RoleHeading>{role}</RoleHeading>
                {(date || location) && (
                  <p className="work-experience-meta">
                    {[date, location].filter(Boolean).join(" · ")}
                  </p>
                )}
                {descBullets?.length > 0 && (
                  <ul>
                    {descBullets.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            </Fade>
          )
        )}
      </div>
      {socialMediaLinks.linkedin && (
        <a className="work-experience-link" href={socialMediaLinks.linkedin}>
          View LinkedIn profile ↗
        </a>
      )}
    </section>
  );
}
