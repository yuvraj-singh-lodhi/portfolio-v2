'use client';

import { useState } from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const ContactDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-50">
      <MovingBorderBtn
        borderRadius="0.5rem"
        className="px-5 py-2 text-white font-semibold text-base hover:text-green-400 transition cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        📬 Connect with Me
      </MovingBorderBtn>

      {open && (
        <div className="absolute mt-2 w-64 origin-top-right rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black/10 focus:outline-none p-4 space-y-3">
          <a
            href="mailto:yuvrajsinghlodhi30@gmail.com?subject=Let's%20Connect&body=Hi%20Yuvraj%2C%20I%20wanted%20to%20reach%20out%20about..."
            className="flex items-center gap-3 text-white hover:text-green-400 transition"
          >
            <MdEmail size={20} /> Email
          </a>
          <Link
            href="https://github.com/yuvraj-singh-lodhi"
            target="_blank"
            className="flex items-center gap-3 text-white hover:text-green-400 transition"
          >
            <SiGithub size={20} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/yuvrajsinghlodhi/"
            target="_blank"
            className="flex items-center gap-3 text-white hover:text-green-400 transition"
          >
            <SiLinkedin size={20} /> LinkedIn
          </Link>
          <Link
            href="https://drive.google.com/file/d/16ayFHg_hIxdrE3QcwItdLaX1oJn6fxZy/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-3 text-white hover:text-green-400 transition"
          >
            <MdFileDownload size={20} /> Resume
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;
