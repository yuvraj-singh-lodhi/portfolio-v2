import { MovingBorderBtn } from "@/components/ui/moving-border";
import ContactDropdown from "@/app/(home)/_components/ContactDropdown";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
      {/* === Left Content === */}
      <div className="space-y-8 text-center lg:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Nice to meet you!
          <br />
          <span className="text-green-400">I&#39;m Yuvraj.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400">
          Full Stack Developer specializing in .NET, React, Django, and scalable
          backend systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
          <ContactDropdown />
        </div>
      </div>

      {/* === Right Decoration === */}
      <div className="relative w-72 h-72 lg:w-80 lg:h-80 -rotate-[25deg]">
        <div className="flex gap-4 translate-x-8 mb-3">
          <div className="w-32 h-32 rounded-2xl bg-green-500 shadow-xl" />
          <div className="w-32 h-32 rounded-full bg-indigo-500 shadow-xl" />
        </div>
        <div className="flex gap-4 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500 shadow-xl" />
          <div className="w-32 h-32 rounded-full bg-green-500 shadow-xl" />
        </div>

        {/* Subtle Glow */}
        <div className="absolute top-[40%] right-1/2 -z-10 blur-2xl w-40 h-40 rounded-full bg-green-400 opacity-20"></div>
      </div>
    </section>
  );
}
