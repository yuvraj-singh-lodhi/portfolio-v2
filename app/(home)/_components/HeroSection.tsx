"use client";

import ContactDropdown from "@/app/(home)/_components/ContactDropdown";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center py-12 sm:py-16 lg:py-20">
      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center sm:text-left space-y-6 px-4">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Yuvraj Singh Lodhi
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-green-400 font-semibold">
          Full-Stack Developer
        </p>

        {/* Brief Description */}
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed">
          Building scalable web applications with <span className="text-white">React, Next.js, .NET, REST APIs, SQL/NoSQL databases, and end-to-end solutions</span>. 
          1.8+ years of experience creating full-stack apps across multiple domains.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-400" />
            <span>Jabalpur, MP, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-400" />
            <span>+91 7389830244</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-green-400" />
            <span>yuvrajsinghlodhi30@gmail.com</span>
          </div>
          <Link
            href="https://github.com/yuvraj-singh-lodhi"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Globe className="w-4 h-4 text-green-400" />
            <span>GitHub</span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center pt-4">
          <ContactDropdown />
        </div>
      </div>
    </section>
  );
}
