import { FaGithub, FaLinkedin } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiGit } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Pritha Karki",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/getparas/the-iCoder-space",
  },
  {
    id: 2,
    name: "Barbershop Booking Application",
    description:
      "A booking application that allows users to reserve seats for haircuts, beard trims, and styling services. Built with PHP, MySQL, JavaScript, and CSS, featuring real-time availability updates and seamless payment integration.",
    image: projectImage2,
    githubLink: "https://github.com/getparas/barbershopBookingApplication",
  },
  {
    id: 3,
    name: "Sensai: Career Coach Platform",
    description:
      "Sensai is an all-encompassing career coaching platform designed to enhance professional profiles with tools for resume building, interview preparation, and job tracking. It features personalized user onboarding, interactive dashboards with market insights, a markdown-based resume builder, mock interview modules, cover letter generation, and a job application tracker, all wrapped in a modern, engaging UI.",
    image: projectImage3,
    githubLink: "https://github.com/getparas/sensai",
  },
  {
    id: 4,
    name: "All Projects",
    description:
      "A consolidated showcase of all personal and collaborative development projects spanning web applications, tools, and platforms.",
    image: projectImage4,
    githubLink: "https://github.com/getparas",
  },
];
export const BIO = [
  "I am a self-taught frontend developer specializing in React, Next.js, and Tailwind CSS. Over the past few years, I’ve honed my skills by building interactive and responsive web applications that delight users and solve real-world problems.",
  "My passion lies in crafting clean, maintainable code and continuously learning emerging technologies to push the boundaries of web development.",
  "Outside of coding, I enjoy collaborating with designers, contributing to open-source projects, and sharing knowledge with the developer community.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-teal-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "2+ years",
  },
  {
    icon: <SiGit className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "Git",
    experience: "2.5+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Junior Frontend Developer",
    company: "The Zenith Method",
    duration: "October 2024 - Present",
    description:
      "As a Junior Frontend Developer at The Zenith Method, I collaborate with senior developers and designers to implement responsive user interfaces using React and Tailwind CSS. I write modular components, assist in code reviews, fix bugs, and optimize performance. My responsibilities also include maintaining coding standards and continuously learning best practices to contribute to high-quality, scalable web applications.",
  },
];

export const EDUCATION = [
  {
    degree: "+2",
    stream: "Humanities",
    institution: "National Examination Board (NEB), Nepal",
    duration: "2017 - 2019",
    description:
      "Completed higher secondary education in the Humanities stream, focusing on literature, history, and social studies, and achieved top grades in core subjects.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tribhuvan University",
    duration: "2021 - Running",
    description:
      "Pursuing a degree in Computer Applications, focusing on software development, algorithms, and database management. Engaged in projects involving web development and collaborative coding.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/getparas",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/icoder46/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
