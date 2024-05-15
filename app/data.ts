import { BiSolidEnvelope } from 'react-icons/bi';
import {
  SiApifox,
  SiCloudflare,
  SiCsharp,
  SiCss3,
  SiDocker,
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
  SiX,
  SiXdadevelopers,
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
  {
    title: 'React',
    Icon: SiReact,
    level: 80,
  },
  {
    title: 'Nextjs',
    Icon: SiNextdotjs,
    level: 50,
  },
  {
    title: 'Nodejs',
    Icon: SiNodedotjs,
    level: 50,
  },
  {
    title: 'CSharp',
    Icon: SiCsharp,
    level: 75,
  },
  {
    title: 'javascript',
    Icon: SiJavascript,
    level: 65,
  },
  {
    title: 'Asp .Net',
    Icon: SiDotnet, 
    level: 75,
  },
  {
    title: 'Tailwind',
    Icon: SiTailwindcss,
    level: 85,
  },
  {
    title: 'GSAP',
    Icon: SiGreensock,
    level: 75,
  },
  {
    title: 'CSS',
    Icon: SiCss3,
    level: 75,
  },
  
  {
    title: 'MongoDB',
    Icon: SiMongodb,
    level: 70,
  },
  {
    title: 'Sql Server',
    Icon: SiMicrosoftsqlserver,
    level: 75,
  },
  {
    title: 'MySql',
    Icon: SiMysql,
    level: 75,
  },
  {
    title: 'Git & GitHub',
    Icon: SiGit,SiGithub,
    level: 85,
  },
  {
    title: 'Postman',
    Icon: SiPostman ,
    level: 60,
  },
  {
    title: 'Vercel',
    Icon: SiVercel ,
    level: 60,
  },
];

export const projectsCommand = [
  {
    title: 'Portfolio',
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb],
    link: '#',
    cover: '/project-1.png',
    background: 'bg-fuchsia-800',
  },
  {
    title: 'GameHUb',
    tech: [SiReact, SiSass,SiCsharp],
    link: '',
    cover: '/project-2.png',
    background: 'bg-cyan-600',
  },
  {
    title: 'coffee shop website',
    tech: [SiReact, SiSass,SiVercel],
    link: 'https://coffeeshopwebsite.vercel.app/',
    cover: '/project-3.png',
    background: 'bg-amber-700',
  },
  {
    title: 'Password-Manager',
    tech: [SiHtml5,SiJavascript, SiCss3],
    link: 'https://yuvraj-singh-lodhi.github.io/Password-Manager/',
    cover: '/project-4.png',
    background: 'bg-stone-500',
  },
  {
    title: 'Bubble Game',
    tech: [SiHtml5,SiJavascript, SiCss3],
    link: 'https://yuvraj-singh-lodhi.github.io/Bubble_Game/',
    cover: '/project-5.png',
    background: 'bg-indigo-500',
  },
  {
    title: 'VS code Extension React Snippets Suite',
    tech: [SiVisualstudiocode,SiTypescript],
    link: 'https://marketplace.visualstudio.com/items?itemName=YuvrajSinghLodhi.react-snippets-pack',
    cover: '/project-6.png',
    background: 'bg-stone-400',
  },{
    title: 'Auto Responder',
    tech: [SiCsharp, SiDotnet,SiMicrosoftsqlserver, SiGmail,TbApi],
    link: '',
    cover: '',
    background: 'bg-stone-400',
  },
];

export const contactCommand = [
  {
    title: 'Github',
    icon: SiGithub,
    username: '@yuvraj-singh-lodhi',
    link: 'https://github.com/yuvraj-singh-lodhi',
  },
  {
    title: 'LinkedIn',
    icon: SiLinkedin,
    username: '@bishalmoktan',
    link: 'https://www.linkedin.com/in/yuvrajsinghlodhi/',
  },
  {
    title: 'Email',
    icon: BiSolidEnvelope,
    username: 'yuvrajsinghlodhi30@gmail.com',
    link: 'mailto:yuvrajsinghlodhi30@gmail.com',
  },
];
