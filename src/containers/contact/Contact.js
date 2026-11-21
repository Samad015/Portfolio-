import React from "react";
import {Fade} from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import ContactForm from "./ContactForm";
import "./Contact.scss";

export default function Contact({headingLevel = 1}) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  const {title, subtitle, number, email_address: email} = contactInfo;

  return (
    <Fade bottom duration={550} distance="24px">
      <section
        className="main contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="contact-intro">
          <div>
            <Heading className="contact-heading" id="contact-heading">
              {title}
            </Heading>
            <p>{subtitle}</p>
            {(number || email) && (
              <div className="contact-details">
                {number && <a href={`tel:${number}`}>{number}</a>}
                {email && <a href={`mailto:${email}`}>{email}</a>}
              </div>
            )}
            <SocialMedia />
          </div>
          <div className="contact-art" aria-hidden="true">
            <div className="contact-envelope" />
          </div>
        </div>
        <ContactForm headingLevel={headingLevel + 1} />
      </section>
    </Fade>
  );
}
