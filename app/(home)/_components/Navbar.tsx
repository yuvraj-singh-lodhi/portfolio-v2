import { SiGithub, SiLinkedin } from "react-icons/si";
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
      Label: "GitHub",
      Icon: SiGithub,
    },
    {
      Link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
  ];

  return (
    <nav
      className={cn(
        "py-6 px-4 flex items-center justify-between w-full max-w-7xl mx-auto animate-move-down",
        className
      )}
    >
      {/* Logo / Name */}
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-white hover:text-green-400 transition">
          Yuvraj Singh Lodhi 
        </h1>
      </Link>

      {/* Developer mode icon */}
      <div className="flex items-center gap-5">
        <ActionTooltip label="Developer Mode" side="bottom" link="/developer">
          <FaCode className="size-6 text-white hover:text-green-400 transition" />
        </ActionTooltip>

        {/* Social icons */}
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} aria-label={social.Label} key={index} target="_blank">
              <Icon className="size-5 text-white hover:text-green-400 hover:scale-110 transition" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
