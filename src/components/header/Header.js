import React, {useContext} from "react";
import {
  achievementSection,
  blogSection,
  greeting,
  talkSection
} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Header.scss";

export default function Header() {
  const {isDark, changeTheme} = useContext(StyleContext);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const links = [
    ["/projects", "Projects"],
    ["/about", "About"],
    ["/skills", "Skills"],
    ["/experience", "Experience"],
    ["/education", "Education"],
    ["/resume", "Resume"],
    ...(achievementSection.achievementsCards.length
      ? [["/achievements", "Achievements"]]
      : []),
    ...(blogSection.blogs.length ? [["/blogs", "Writing"]] : []),
    ...(talkSection.talks.length ? [["/talks", "Talks"]] : []),
    ["/contact", "Contact"]
  ];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <a className="site-name" href="/">
        <span className="site-mark" aria-hidden="true">
          &gt;_
        </span>
        {greeting.username}
      </a>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            className={
              path.startsWith(`${href}/`) ? "section-active" : undefined
            }
          >
            {label}
          </a>
        ))}
      </nav>
      <button className="theme-button" type="button" onClick={changeTheme}>
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </header>
  );
}
