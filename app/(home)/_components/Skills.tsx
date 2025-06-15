"use client";

import { skillsCommand } from "@/app/data";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <Title
        text="Skills"
        className="text-left mb-10 text-3xl font-extrabold sm:text-4xl"
      />
      <HoverEffect items={skillsCommand} />
    </section>
  );
};

export default Skills;
