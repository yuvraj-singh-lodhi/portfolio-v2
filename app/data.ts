import { BiSolidEnvelope } from "react-icons/bi";
import {
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGmail,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiNginx,
  SiPython,
} from 'react-icons/si';
import { TbApi } from "react-icons/tb";

export const helpCommand = [
  {
    title: 'bio',
    info: 'Show my bio information',
  },
  {
    title: 'skills',
    info: 'List out all my skills',
  },
  {
    title: 'projects',
    info: 'List out my projects',
  },
  {
    title: 'contact',
    info: 'Show my contact details',
  },
  {
    title: 'exit',
    info: 'Exit the terminal mode',
  },
  {
    title: 'clear',
    info: 'Clear the terminal',
  },
];

export const skillsCommand = [
  { title: 'React.js', Icon: SiReact, level: 85 },
  { title: 'Next.js', Icon: SiNextdotjs, level: 75 },
  { title: 'Node.js', Icon: SiNodedotjs, level: 70 },
  { title: 'TypeScript', Icon: SiTypescript, level: 75 },
  { title: 'JavaScript', Icon: SiJavascript, level: 80 },
  { title: 'C#', Icon: SiCsharp, level: 85 },
  { title: 'ASP.NET Core', Icon: SiDotnet, level: 85 },
  { title: 'Django', Icon: SiDjango, level: 75 },
  { title: 'Python', Icon: SiPython, level: 70 },
  { title: 'Tailwind CSS', Icon: SiTailwindcss, level: 85 },
  { title: 'GSAP', Icon: SiGreensock, level: 75 },
  { title: 'CSS3', Icon: SiCss3, level: 80 },
  { title: 'HTML5', Icon: SiHtml5, level: 80 },

  { title: 'MySQL', Icon: SiMysql, level: 80 },
  { title: 'PostgreSQL', Icon: SiPostgresql, level: 70 },
  { title: 'SQL Server', Icon: SiMicrosoftsqlserver, level: 80 },
  { title: 'MongoDB', Icon: SiMongodb, level: 65 },
  { title: 'Prisma ORM', Icon: SiPrisma, level: 60 },

  { title: 'Postman', Icon: SiPostman, level: 70 },
  { title: 'RESTful APIs', Icon: TbApi, level: 85 },
  { title: 'Git', Icon: SiGit, level: 80 },
  { title: 'GitHub', Icon: SiGithub, level: 80 },
  { title: 'Vercel', Icon: SiVercel, level: 70 },
  { title: 'VS Code', Icon: SiVisualstudiocode, level: 90 },
  { title: 'Nginx', Icon: SiNginx, level: 65 },
];

export const projectsCommand = [
  {
    title: "The Fortress in Pixels",
    tech: [SiNextdotjs, SiCsharp, SiDotnet, SiPostgresql],
    link: "",
    cover: "",
    background: "bg-purple-800",
    description:
      "A digital asset management system showcasing historical landmarks. Built with ASP.NET Core and Next.js, featuring secure REST APIs and PostgreSQL integration.",
  },
  {
    title: "BlackWilbur",
    tech: [SiReact, SiDjango, SiMysql],
    link: "https://www.blackwilbur.com/",
    cover: "/blackwilbur.png",
    background: "bg-black",
    description:
      "A full-stack e-commerce platform supporting 500+ daily users. Features include authentication, Django REST APIs, and deployment via VPS with Nginx.",
  },
  {
    title: "Axoraa Landing Page",
    tech: [SiReact, SiTypescript, SiTailwindcss],
    link: "https://axoraa.vercel.app/",
    cover: "/Axoraa.png",
    background: 'bg-[#4D2C5E]',
    description:
      "A high-converting and responsive landing page built with React (Vite), TypeScript, Tailwind CSS, and GSAP animations. Features smooth micro-interactions and a custom demo booking form integrated with EmailJS, improving engagement and automating 100+ monthly confirmations.",
  },
  {
  title: 'ClientConnect CRM Suite',
  tech: [SiCsharp, SiDotnet, SiMicrosoftsqlserver],
  link: '', 
  cover: '', 
  background: 'bg-[#1F2937]',
  description:
    'A secure internal CRM platform built using ASP.NET MVC and Web APIs to streamline CSR call reporting. Features included call playback, downloadable call logs, export to Excel/PDF, and comprehensive customer detail views. Optimized for SQL Server-backed performance with role-based access, advanced filtering, and detailed audit trails.',
  },
  {
    title: "Coffee Shop Website",
    tech: [SiReact, SiSass, SiVercel],
    link: "https://coffeeshopwebsite.vercel.app/",
    cover: "/project-3.png",
    background: "bg-amber-700",
    description:
      "A visually appealing frontend website for a coffee shop built with React and Sass. Fully responsive and deployed on Vercel.",
  },
  {
    title: "Password Manager",
    tech: [SiHtml5, SiJavascript, SiCss3],
    link: "https://yuvraj-singh-lodhi.github.io/Password-Manager/",
    cover: "/project-4.png",
    background: "bg-stone-500",
    description:
      "A simple and secure password manager using vanilla JavaScript and browser local storage. Built for practicing DOM manipulation and UI design.",
  },
  {
    title: "Bubble Game",
    tech: [SiHtml5, SiJavascript, SiCss3],
    link: "https://yuvraj-singh-lodhi.github.io/Bubble_Game/",
    cover: "/project-5.png",
    background: "bg-indigo-500",
    description:
      "A fun, interactive web-based bubble pop game built using HTML, CSS, and JavaScript. Great for demonstrating event handling and game loops.",
  },
  {
    title: "VS Code Extension: React Snippets Suite",
    tech: [SiVisualstudiocode, SiTypescript],
    link: "https://marketplace.visualstudio.com/items?itemName=YuvrajSinghLodhi.react-snippets-pack",
    cover: "/project-6.png",
    background: "bg-stone-400",
    description:
      "A productivity-enhancing VS Code extension that provides React and TypeScript code snippets to speed up development.",
  },
  {
    title: "Auto Responder",
    tech: [SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiGmail, TbApi],
    link: "",
    cover: "/default-image.png",
    background: "bg-stone-400",
    description:
      "A background service that connects to Gmail API, processes 10K+ emails monthly, and stores data into SQL Server. Built with .NET Worker Services.",
  },
];

export const contactCommand = [
  {
    title: "Github",
    icon: SiGithub,
    username: "@yuvraj-singh-lodhi",
    link: "https://github.com/yuvraj-singh-lodhi",
  },
  {
    title: "LinkedIn",
    icon: SiLinkedin,
    username: "@yuvrajsinghlodhi",
    link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
  },
  {
    title: "Email",
    icon: BiSolidEnvelope,
    username: "yuvrajsinghlodhi30@gmail.com",
    link: "mailto:yuvrajsinghlodhi30@gmail.com",
  },
];
