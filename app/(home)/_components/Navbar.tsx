import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";
import { ActionTooltip } from "./ActionTooltip";

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
     <Link href="/"><h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
      Yuvraj Singh Lodhi 👨🏻‍💻
      </h1>
      </Link>
      <ActionTooltip label="developer mode" side="bottom" link="/developer">
        <FaCode className="size-8" />
      </ActionTooltip>

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
