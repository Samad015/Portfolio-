import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import OpenSourceProjects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Contact from "./contact/Contact";
import Button from "../components/button/Button";
import SplashScreen from "./splashScreen/SplashScreen";
import {
  achievementSection,
  blogSection,
  educationInfo,
  greeting,
  skillsSection,
  splashScreen,
  talkSection,
  workExperiences
} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.css";

const homeSections = [
  "skills",
  "education",
  "projects",
  "experience",
  ...(achievementSection.achievementsCards.length ? ["achievements"] : []),
  ...(blogSection.blogs.length ? ["blogs"] : []),
  ...(talkSection.talks.length ? ["talks"] : []),
  "resume",
  "contact"
];

function PageSheet({title, children, headingLevel = 1}) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  return (
    <Fade bottom duration={550} distance="24px">
      <section className="main page-sheet">
        <Heading className="heading">{title}</Heading>
        {children || <p>Coming soon.</p>}
      </section>
    </Fade>
  );
}

function PortfolioPage({path, headingLevel = 1}) {
  const hasSkills =
    skillsSection.skills.length > 0 || skillsSection.softwareSkills.length > 0;
  const hasExperience = workExperiences.experience.length > 0;
  const hasEducation = educationInfo.schools.length > 0;

  switch (path) {
    case "/about":
      return (
        <PageSheet headingLevel={headingLevel} title="About Samad">
          <p>
            {greeting.bio ||
              greeting.subTitle ||
              "I’m Samad. This is where I share my projects, what I’m learning, and how to get in touch."}
          </p>
          <Button text="View projects" href="/projects" />
        </PageSheet>
      );
    case "/skills":
      return hasSkills ? (
        <>
          <Skills headingLevel={headingLevel} />
          <StackProgress />
        </>
      ) : (
        <PageSheet headingLevel={headingLevel} title="Skills">
          <p>My skills and tools will be listed here.</p>
        </PageSheet>
      );
    case "/experience":
      return hasExperience ? (
        <WorkExperience headingLevel={headingLevel} />
      ) : (
        <PageSheet headingLevel={headingLevel} title="Experience">
          <p>My work experience will be listed here.</p>
        </PageSheet>
      );
    case "/education":
      return hasEducation ? (
        <Fade bottom duration={550} distance="24px">
          <Education headingLevel={headingLevel} />
        </Fade>
      ) : (
        <PageSheet headingLevel={headingLevel} title="Education">
          <p>My education details will be listed here.</p>
        </PageSheet>
      );
    case "/projects":
      return <OpenSourceProjects headingLevel={headingLevel} />;
    case "/achievements":
      return achievementSection.achievementsCards.length ? (
        <Achievement />
      ) : (
        <PageSheet headingLevel={headingLevel} title="Achievements" />
      );
    case "/blogs":
      return blogSection.blogs.length ? (
        <Blogs />
      ) : (
        <PageSheet headingLevel={headingLevel} title="Writing" />
      );
    case "/talks":
      return talkSection.talks.length ? (
        <Talks />
      ) : (
        <PageSheet headingLevel={headingLevel} title="Talks" />
      );
    case "/resume":
      return greeting.resumeLink ? (
        <PageSheet headingLevel={headingLevel} title="Resume">
          <Button
            text={
              headingLevel === 1 ? "Open PDF in new tab ↗" : "View résumé ↗"
            }
            href={headingLevel === 1 ? greeting.resumeLink : "/resume"}
            newTab={headingLevel === 1}
          />
          {headingLevel === 1 && (
            <iframe
              className="resume-preview"
              src={greeting.resumeLink}
              title="Abdul Samad Khan’s résumé"
            />
          )}
        </PageSheet>
      ) : (
        <PageSheet headingLevel={headingLevel} title="Resume">
          <p>My résumé PDF will be available here.</p>
        </PageSheet>
      );
    case "/contact":
      return <Contact headingLevel={headingLevel} />;
    default:
      return (
        <PageSheet headingLevel={headingLevel} title="Page not found">
          <Button text="Back to home" href="/" />
        </PageSheet>
      );
  }
}

function HomePage() {
  return (
    <>
      <Greeting />
      {homeSections.map(slug => (
        <div className="home-section" id={`home-${slug}`} key={slug}>
          <PortfolioPage path={`/${slug}`} headingLevel={2} />
        </div>
      ))}
    </>
  );
}

export default function Main() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const homeAnchor = path === "/" && window.location.hash.startsWith("#home-");
  const [loading, setLoading] = useState(
    path === "/" &&
      !homeAnchor &&
      splashScreen.enabled &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), splashScreen.duration);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    if (homeAnchor) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
  }, [homeAnchor]);

  return (
    <div className={isDark ? "site dark-mode" : "site"}>
      <StyleProvider value={{isDark, changeTheme: () => setIsDark(!isDark)}}>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main className="portfolio-page" id="main-content">
              {path === "/" ? <HomePage /> : <PortfolioPage path={path} />}
            </main>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
}
