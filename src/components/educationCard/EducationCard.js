import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school, headingLevel = 2}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <Heading className="education-text-school">
              {school.schoolName}
            </Heading>

            <div className="education-text-details">
              <p
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </p>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              {school.descBullets?.length > 0 && (
                <div className="education-text-bullets">
                  <ul>
                    <GetDescBullets descBullets={school.descBullets} />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
