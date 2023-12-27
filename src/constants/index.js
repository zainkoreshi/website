import {
  hkbu,
  cluboard,
  cash_flow,
  freadom,
  bank,
  hkbuia,
  headstart,
  hkbucs,
  publiclab,
  zulip,
  hsbc,
  towerdefence,
  nimmt,
  connect,
  batman,
  managementwebsite,
  kcm,
  avrio,
  xymbia,
  dhealth,
  zainlogo,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
} from "react-icons/si";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1jRurDlAlY_mZJegMatpM2JeaLkhLooR_/view?usp=sharing";
export const repoLink = "https://github.com/zainkoreshi";

export const callToAction = "https://www.linkedin.com/in/zainkoreshi/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curriculars",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: hkbu,
    title: "Hong Kong Baptist University, Hong Kong",
    degree: "Bachelor of Science (Honours) in Computer Science",
    duration: "September 2021 - May 2025",
    content1: "Recipient of a renewable 130% Merit Scholarship",
    content2: "Academic Honours: President’s Honour Roll (2021-22) & Dean’s List (2021-22 & 2022-23)",
  },  
  {
    id: "education-2",
    icon: headstart,
    title: "Headstart School, Islamabad",
    degree: "High School Diploma in Science",
    duration: "August 2017 - August 2021",
    content1: "Recipient of a renewable 75% Merit Scholarship",
    content2: "Academic Honours: Valedictorian of Class of 2025, Summa cum Laude and multiple honours",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-7",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Hongkong and Shanghai Banking Corporation, HSBC (Central, Hong Kong SAR)",
    logo: hsbc,
    link: "https://www.hsbc.com",
    positions: [
      {
        title: "Student Work Placement Intern",
        duration: "January 2024 - June 2024",
        content: [
          {
            text: "Worked in Financial Securities and Transformation.",
            link: "",
          },
          {
            text: "Test and report automation.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Xymbia Inc. (Islamabad, Pakistan)",
    logo: xymbia,
    link: "https://www.xymbia.io",
    positions: [
      {
        title: "Software Engineering Intern",
        duration: "July 2023 - August 2023",
        content: [
          {
            text: "Manual and automated testing of the Xymbia Mobile, Web, and Desktop applications.",
            link: "",
          },
          {
            text: "Custom development of third-party plugins.",
            link: "",
          },          
          {
            text: "Created OpenAPI Specification for services.",
            link: "",
          },
        ],
      },
    ],
  },  
  {
    organisation: "dHealth - Blockchain for Healthcare (Kowloon, Hong Kong SAR)",
    logo: dhealth,
    link: "https://www.dhealth.com",
    positions: [
      {
        title: "Product Design Intern",
        duration: "October 2022 - March 2023",
        content: [
          {
            text: "Worked on 3 Mobile Applications and 2 Web Applications.",
            link: "",
          },
          {
            text: "Conducted regular UI/UX Testing.",
            link: "",
          },          
          {
            text: "Mapped out User Stories.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Avrio Accounting Solutions Inc. (Islamabad, Pakistan)",
    logo: avrio,
    link: "https://avrioas.ca",
    positions: [
      {
        title: "Business Developer Intern",
        duration: "October 2021 - January 2022",
        content: [
          {
            text: "Made Standard Operating Procedures (SOPs) and Systems for the Operation Department.",
            link: "",
          },
        ],
      },
      {
        title: "Project Manager",
        duration: "July 2021 - January 2022",
        content: [
          {
            text: "Managed the files of over 500 Personal and Corporate Tax Clients.",
            link: "",
          },          
          {
            text: "Delegated work to Bookkeepers, Junior and Senior Accountants.",
            link: "",
          },          
          {
            text: "Communicated with Clients, Colleagues and Government of Canada.",
            link: "",
          },
          {
            text: "Made Standard Operating Procedures (SOPs) and Systems for the Operation Department.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "KCM Accounting Limited (Islamabad, Pakistan)",
    logo: kcm,
    link: "https://marketplacebc.ca/marketplace/kcm-accounting-ltd/",
    positions: [
      {
        title: "Project Manager",
        duration: "May 2021 - July 2021",
        content: [
          {
            text: "Secured funding for more than 40 businesses (over $1,000,000 CAD in total), through the Government of B.C. Small and Medium Sized Business Recovery Grant, to help them recover from the COVID-19 Pandemic.",
            link: "",
          },
          {
            text: "Helped businesses apply for both steps of the application process, which included preparing and reviewing documentation, communicating with clients, colleagues and the Government of B.C., and preparing Recovery Plans.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Personal Website",
    github: "https://github.com/zainkoreshi/website",
    link: "https://main--zainkoreshi.netlify.app/#home",
    image: zainlogo,
    content:
      "Developed a personalised website aimed at presenting a comprehensive overview of my portfolio.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },      
      {
        id: "icon-6",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-2",
    title: "Event and Volunteer Management System",
    github: "https://github.com/zainkoreshi/eventManagementWebsite",
    link: "",
    image: managementwebsite,
    content:
      "Developed an event and volunteer management website to store, modify and retrieve data.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-3",
    title: "Tower Defence Game",
    github: "https://github.com/zainkoreshi/java_towerdefence",
    link: "",
    image: towerdefence,
    content:
      "Programmed a Tower Defence Game which includes different types of towers and upgrades. The aim is to defeat as many monsters as possible!",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    id: "project-4",
    title: "6 Nimmt ",
    github: "https://github.com/zainkoreshi/java_6nimmt",
    link: "",
    image: nimmt,
    content:
      "6 nimmt! / Take 6! is a card game for 2–10 players designed by Wolfgang Kramer in 1994. I coded this game in Java",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    id: "project-5",
    title: "Connect4",
    github: "https://github.com/zainkoreshi/java_connect4",
    link: "",
    image: connect,
    content:
      "Programmed a game in which the players choose a colour and then take turns dropping them into a grid. The first to make a sequence of four like-coloured tokens wins!",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    id: "project-6",
    title: "Escaping Bats: Gotham Edition",
    github: "https://github.com/zainkoreshi/python_dropncatch",
    link: "",
    image: batman,
    content:
      "Individually designed and implemented a Python mini-game using Processing 3, focused on drop and catch mechanics as a project objective.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Department of Computer Science, HKBU",
    title: "Peer Tutor",
    duration: "September 2023 - Present",
    content: [
      {
        text: "Helped six juniors with Python, Java, C and SQL on courses such as Object Oriented Programming, Data Structures and Algorithms, and Database Management",
        link: "https://www.comp.hkbu.edu.hk/v1/?page=news&id=453",
      },
    ],
    logo: hkbucs,
  },
  {
    organisation: "International Association, HKBU",
    title: "President",
    duration: "October 2022 - October 2023",
    content: [
      {
        text: "Ran the student union responsible for all International and Ethnic Minority Students enrolled at Hong Kong Baptist University",
        link: "https://www.instagram.com/hkbuia/",
      },
    ],
    logo: hkbuia,
  },
  {
    organisation: "Student Council, Headstart School",
    title: "President, Vice President and Class Leader",
    duration: "September 2017 - August 2021",
    content: [
      {
        text: "Re-elected to Student Council 4 years consecutively. Formulated School policy, organised events and represented the student body",
      },
    ],
    logo: headstart,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/zainkoreshi/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/zainkoreshi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:zainkoreshi769@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/ZainKoreshi",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/zainkoreshi/",
  },
];

export const aboutMe = {
    name: "Zain Koreshi",
    tagLine: "BSc (Hons.) in Computer Science • 2024 Intern @ HSBC • President of HKBU’s International Association",
    intro: "A penultimate student pursuing a Bachelors in Computer Science at HKBU. My primary skills are in front-end and back-end development."
}
