import React from "react";
import {socialMediaLinks} from "../../portfolio";
import "./SocialMedia.scss";

const icons = {
  GitHub: ["fab fa-github", "#333"],
  LinkedIn: ["fab fa-linkedin-in", "#0e749b"],
  Email: ["fas fa-envelope", "#141414"],
  gitlab: ["fab fa-gitlab", "#a84c00"],
  facebook: ["fab fa-facebook-f", "#385693"],
  medium: ["fab fa-medium", "#141414"],
  stackoverflow: ["fab fa-stack-overflow", "#a34400"],
  instagram: ["fab fa-instagram", "#9d2c6a"],
  twitter: ["fab fa-twitter", "#186b94"],
  kaggle: ["fab fa-kaggle", "#176889"]
};

export default function SocialMedia({iconOnly = false}) {
  const {display, github, linkedin, gmail, ...otherLinks} = socialMediaLinks;
  const links = [
    ["GitHub", github],
    ["LinkedIn", linkedin],
    ["Email", gmail && `mailto:${gmail}`],
    ...Object.entries(otherLinks)
  ].filter(([, href]) => href);

  if (!display || !links.length) return null;

  return (
    <ul className="profile-links" aria-label="Profile links">
      {links.map(([label, href]) => {
        const icon = iconOnly && icons[label];
        return (
          <li key={label}>
            {icon ? (
              <a
                className="profile-icon"
                href={href}
                aria-label={label}
                title={label}
                style={{"--profile-brand": icon[1]}}
              >
                <i className={icon[0]} aria-hidden="true" />
              </a>
            ) : (
              <a href={href}>{label}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
