import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education({headingLevel = 1}) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <Heading className="education-heading">Education</Heading>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard
              key={index}
              school={school}
              headingLevel={headingLevel + 1}
            />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
