"use client";

import { useState } from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ActionTooltip } from "./ActionTooltip";

export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { link: "https://github.com/yuvraj-singh-lodhi", label: "GitHub", Icon: SiGithub },
    { link: "https://www.linkedin.com/in/yuvrajsinghlodhi/", label: "LinkedIn", Icon: SiLinkedin },
  ];

  const components = [{ link: "/components", label: "Components" }];

  return (
    <nav
      className={cn(
        "py-6 px-4 w-full max-w-7xl mx-auto flex items-center justify-between flex-wrap relative",
        className
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 z-50">
        <h1 className="text-2xl font-bold text-white hover:text-green-400 transition">
          YL
        </h1>
      </Link>

      {/* Hamburger for mobile */}
      <button
        className="lg:hidden text-white text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-5">
        <ActionTooltip label="Developer Mode" side="bottom" link="/developer">
          <FaCode className="size-6 text-white hover:text-green-400 transition" />
        </ActionTooltip>

        {socials.map(({ link, label, Icon }, index) => (
          <Link href={link} aria-label={label} key={index} target="_blank" rel="noopener noreferrer">
            <Icon className="size-5 text-white hover:text-green-400 hover:scale-110 transition" />
          </Link>
        ))}

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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-neutral-900 shadow-lg flex flex-col items-start p-4 gap-4 z-40">
          <ActionTooltip label="Developer Mode" side="bottom" link="/developer">
            <FaCode className="size-6 text-white hover:text-green-400 transition" />
          </ActionTooltip>

          {socials.map(({ link, label, Icon }, index) => (
            <Link
              href={link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-green-400 text-sm font-medium transition"
            >
              <Icon /> {label}
            </Link>
          ))}

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
      )}
    </nav>
  );
};

export default Navbar;
