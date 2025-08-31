"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { ActionTooltip } from "./ActionTooltip";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  isFooter?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ className, isFooter = false }) => {
  const socials = [
    {
      link: "https://github.com/yuvraj-singh-lodhi",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
  ];

  const components = [
    {
      link: "/components",
      label: "Components",
    }
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

      {/* Right side: Developer + Socials + Components */}
      <div className="flex items-center gap-5">
        {/* Developer Mode Icon */}
        <ActionTooltip label="Developer Mode" side="bottom" link="/developer">
          <FaCode className="size-6 text-white hover:text-green-400 transition" />
        </ActionTooltip>

        {/* Social Icons */}
        {socials.map(({ link, label, Icon }, index) => (
          <Link
            href={link}
            aria-label={label}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="size-5 text-white hover:text-green-400 hover:scale-110 transition" />
          </Link>
        ))}

        {/* Component Links */}
        {components.map(({ link, label }, index) => (
          <Link
            href={link}
            key={`component-${index}`}
            className="text-white hover:text-green-400 text-sm font-medium transition"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
