/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samad",
  title: "Hello, I’m",
  subTitle:
    "I build responsive web applications and REST APIs with MERN and Next.js.",
  bio: "I’m continuously learning and improving my skills. I’m looking for opportunities to start my career and contribute to real-world projects.",
  resumeLink: "/AbdulSamadKhan.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/samad015",
  linkedin: "https://www.linkedin.com/in/abdul-samad-khan-aa5386316/",
  gmail: "techsamad15@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I can help with",
  skills: [
    "Full-stack web development (MERN + Next.js)",
    "REST API development and integration",
    "Authentication and backend logic",
    "Responsive frontend development",
    "Database management (MongoDB)"
  ],
  invitation: "Feel free to connect or reach out for opportunities.",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Invertis University",
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "Fourth-year student",
      desc: "Bareilly, India"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend / Design", progressPercentage: "90%"},
    {Stack: "Backend", progressPercentage: "70%"},
    {Stack: "Programming", progressPercentage: "60%"}
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      company: "LifeAdmin OS",
      role: "Software Engineer Intern",
      date: "October 2026 – Present",
      location: "Remote",
      descBullets: [
        "Review and maintain application code, identify technical issues, and suggest changes to improve maintainability.",
        "Test application changes, investigate bugs, and work with the engineering team on fixes and quality assurance."
      ]
    },
    {
      company: "EduSkills",
      role: "MERN Stack Intern",
      descBullets: [
        "Built REST APIs for login and CRUD operations using Node.js, Express.js, and MongoDB.",
        "Developed reusable React components for full-stack training projects."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: true,
  repositories: [
    {
      name: "Tameer-Fabricator",
      description:
        "A MERN marketplace for rolling shutters, with a product catalog, quote requests, a dealer directory, and workshop tools.",
      language: "JavaScript",
      demo: "https://tameer-fabricator.onrender.com"
    },
    {
      name: "Digital-Payment-System",
      description:
        "A Node.js and Express backend for wallet management and transactions, with JWT authentication and email OTP verification.",
      language: "JavaScript"
    },
    {
      name: "Healthvoice-ai",
      description:
        "A healthcare AI project with a JavaScript client and server.",
      language: "JavaScript"
    },
    {
      name: "Dynamic-News-Portal",
      description:
        "A responsive React and Tailwind CSS news app with headlines by category and search.",
      language: "JavaScript"
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Selected work",
  projects: [],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact",
  subtitle:
    "Have a project in mind or want to get in touch? Send me a message.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Enable when your handle is configured
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
