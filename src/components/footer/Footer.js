import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import {greeting, socialMediaLinks} from "../../portfolio";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <a className="site-footer-name" href="/">
            {greeting.username}
          </a>
          {socialMediaLinks.gmail && (
            <a
              className="site-footer-email"
              href={`mailto:${socialMediaLinks.gmail}`}
            >
              {socialMediaLinks.gmail}
            </a>
          )}
        </div>
        <SocialMedia iconOnly />
      </div>
    </footer>
  );
}
