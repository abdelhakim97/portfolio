// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import mongodb from "./assets/techstack/mongodb.svg";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import laravel from "./assets/techstack/laravel.svg";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from './assets/techstack/python.svg'
import mysql from './assets/techstack/mysql.svg'
import php from './assets/techstack/php.svg'
// import fesweb from '../public/fesweb.jfif'
// Porject Images
import imgtable from './assets/projects/12sdsd121.jpg'
import ecom1 from './assets/projects/27fc123.jpg'
import ecom2 from './assets/projects/27df12.jpg'
import weaderapp from './assets/projects/27cvf56.jpg'
import porfilapp from './assets/projects/27sdw125.jpg'
import tsfapp from './assets/projects/27wx125.jpg'
import onlineapp from './assets/projects/27sd15.jpg'
// projet video
import videoWeather from './assets/videos/video_app_Weather.mp4'
import videotable from './assets/videos/27qsdq21.mp4'
import videoecom from './assets/videos/ecom.mp4'
import videoepor from './assets/videos/2751sd15.mp4'
import videoTsf from './assets/videos/27sd151.mp4'
import videoex from './assets/videos/24sd22.mp4'
// name company
import fesweb from './assets/Exp/27qd12sdc1211.png'
import fiverr from './assets/Exp/27sd121wcf21.png'
import logoofppt from './assets/Exp/27sdc122w512.png'
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};



// Enter your Personal Details here
export const personalDetails = {
  name: "ABDELHAKIM AKAYOU",
  tagline: "a Full Stack Developer",
  img: '',
  button_cv: '  DOWNLOAD CV',
  about: `Hi, I am ABDELHAKIM AKAYOU! Specializing in web development, I proudly work to perfect my skills and make the most of my experience through the Fiverr platform. I offer my services exceptionally in web, always seeking to provide high quality and fully satisfy my clients.

In addition to my work on Fiverr, I also invest in inspiring and innovative domestic projects. I firmly believe that challenges open up creative opportunities, which is why I constantly strive to achieve my goals and exceed my clients' expectations.

I am here to explore collaboration opportunities and connect with exceptional professionals. Let's talk about how I can support your project or team. I am always happy to communicate and build new relationships. Thank you!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abdelhakim-akayou-678806283/",
  github: "https://github.com/abdelhakim97",
  twitter: "https://x.com/AAkayou73232",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    img: fesweb,
    Position: "Front-end AND Back-end",
    link:'https://www.linkedin.com/company/fesweb/',
    Company: `FESWEB · Internship`,
    Location: "Fès, Fès-Meknès, Maroc",
    SKILLS: 'Laravel,React.Js,MySql,API Rest,UML,Git,PostMan...',
    Type: "Internship",
    description: "Design of an e-commerce website for sending product  quotes by email for curtains and anti-welding strip doors",
    Duration: "March 2024 - Apr 2024 · 2 months",
  },
  {
    img: fiverr,
    Position: "Full Stack Developer | Fiverr Freelancer",
    link:'https://www.fiverr.com/',
    Company: `Fiverr`,
    Location: "Online",
    Type: "FULL Time",
    SKILLS: 'Laravel,React.Js,MySql,API Rest,UML,Git,PostMan...',
    description: 'As a seasoned Full Stack Developer, I provide comprehensive web development services on Fiverr. With a strong foundation in both front-end and back-end technologies, I specialize in creating robust, scalable, and user-friendly web applications.',
    Duration: "January 2022 - April 2023",
  },

];

// Enter your Education Details here
export const eduDetails = [
  {
    img: logoofppt,
    Position: "Full Stack Developer",
    Company: "ISTA : Specialized Institute of Applied Technology IFRANE",
    Location: "Ifrane, Fès-Meknès, Maroc",
    Type: "Full Time",
    SKILLS: 'Laravel,React.Js,MySql,MongoDb,php,Js,Css,Python...',
    description: 'I studied at the Specialized Institute of Applied Technology (ISTA) in the field of Digital Development, where I learned a variety of programming skills, including HTML, CSS, JavaScript, PHP, and MySQL, along with other languages and frameworks. Over the course of two years, I gained valuable experience, enabling me to develop a complete and professional website from scratch. It was a rewarding experience that equipped me with the skills needed for comprehensive web development.',
    Duration: "Oct 2022 - Jul 2024 · 2 years",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  mongodb: mongodb,
  laravel: laravel,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: python,
  mysql: mysql,
  php: php
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "National Innovation Competition Project (Fès-Meknès)",
    image: imgtable,
    description: `
    Our project for the National Innovation Competition (Fès-Meknès) is a web application using intelligent surveillance cameras to enforce school rules. It detects uniform violations, unauthorized accessories, smoking, and mobile phone use, while also assisting with attendance. This enhances discipline and the learning environment using advanced image recognition and detection algorithms.`,
    techstack: "Python,OpenCV,streamlit,ultralytics yolov8",
    previewLink: "#",
    githubLink: "Private",
    linkVideo:videotable
  },

  {
    title: "E-Commerce (1/2)  Application - (Client) Side",
    image: ecom1,
    description: `Design of an e-commerce website for sending quotes via email for curtain products and anti-welding strip doors.`,
    techstack: "React.JS/Redux, Rest API",
    previewLink: "https://lanieremaroc.com/laniere-rideau/",
    githubLink: "Private",
    linkVideo:videoecom
  },
  {
    title: "E-Commerce (2/2) Application - (Admin) Side",
    image: ecom2,
    description: `Developed the admin side of an e-commerce application to manage products, orders, and customer interactions efficiently. The application features a comprehensive dashboard, allowing administrators to oversee all aspects of the online store.`,
    techstack: "Laravel, Rest API",
    previewLink: "https://lanieremaroc.com/laniere_controlpanel/",
    githubLink: "Private",
    linkVideo:videoecom
  },
  {
    title: "Weather App",
    image: weaderapp,
    description: `Developed a responsive Weather App using React.js. This application fetches real-time weather data, providing users with up-to-date forecasts for any location. With a clean and intuitive interface, it ensures a seamless user experience across all devices.`,
    techstack: "React.Js,Api",
    previewLink: "https://abdelhakim97.github.io/Weather-App-React-JS/",
    githubLink: "https://github.com/abdelhakim97/Weather-App-React-JS.git",
    linkVideo:videoWeather
  },
  {
    title: "Portfolio Version 01",
    image: porfilapp,
    description: `This is a simple portfolio project using HTML and CSS, and it is the first project I built.`,
    techstack: "HTML/CSS",
    previewLink: "https://abdelhakim97.github.io/The-first-website-using-html-and-css/",
    githubLink: "https://github.com/abdelhakim97/The-first-website-using-html-and-css.git",
    linkVideo:videoepor
  },
  {
    title: "π Tsf Physics(Unit Converter)",
    image: tsfapp,
    description: `Developed an online Unit Converter for transforming values in physics. This tool allows users to easily convert units from one format to another, ensuring accurate and quick transformations.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://abdelhakim97.github.io/The-first-website-responsive-using-JavaScript-and-html-and-css/",
    githubLink: "https://github.com/abdelhakim97/The-first-website-responsive-using-JavaScript-and-html-and-css.git",
  linkVideo:videoTsf
  },
  {
    title: "Online Exam System",
    image: onlineapp,
    description: `Developed a robust Online Exam System using PHP to facilitate seamless and secure assessments. This application allows educators to create, manage, and grade exams efficiently, providing students with a user-friendly interface for taking tests online.`,
    techstack: "HTML/CSS, JavaScript/PHP",
    previewLink: "#",
    githubLink: "https://github.com/abdelhakim97/online-exam-system-php.git",
    linkVideo:videoex
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "",
  phone: "",
};
