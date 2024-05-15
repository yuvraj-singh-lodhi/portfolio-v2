// import Link from 'next/link';
// import React from 'react'
// import { SiGithub, SiLinkedin } from "react-icons/si";
// export default function Navbar() {
//     const socials = [
//         {
//             Link: "https://github.com/yuvraj-singh-lodhi",
//             Label: "Github",
//             Icon: SiGithub
//         },
//         {
//             Link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
//             Label: "Linkedin",
//             Icon: SiLinkedin
//         }
//     ]
//   return (
//     <nav className='py-10 flex justify-between items-center'>
//         <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Yuvraj Singh Lodhi 👨‍💻</h1>
//         <div className='flex items-center gap-5'>
//             {socials.map((social,index)=>{
//              const Icon = social.Icon;
//              return <Link href={social.Link} key={index} aria-label={social.Label}>
//                 <Icon className='w-5 h-5  hover:scale-125 transition-all'/>
//                 </Link>
//             })}
//         </div>
//     </nav>
//   )
// }
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";

const Navbar = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter: boolean;
}) => {
  const socials = [
    {
      Link: "https://github.com/yuvraj-singh-lodhi",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
  ];
  return (
    <nav
      className={cn(
        "py-8 flex items-center justify-between animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
      Yuvraj Singh Lodhi 👨🏻‍💻
      </h1>
      {/* <ActionTooltip label="developer mode" side="bottom" link="/developer">
        <FaCode className="size-8" />
      </ActionTooltip> */}

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} aria-label={social.Label} key={index}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
