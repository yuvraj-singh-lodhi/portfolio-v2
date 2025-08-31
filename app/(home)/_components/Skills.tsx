"use client";

import { skillsCommand } from "@/app/data";
import Title from "./Title";
import { IconType } from "react-icons";

const Skills = () => {
  return (
    <section className="py-12 px-6 sm:px-12 bg-black relative z-0">
      <Title
        text="Skills"
        className="flex flex-col items-start justify-start text-left mb-6 text-white text-2xl sm:text-3xl font-extrabold"
      />

      <div className="flex flex-wrap -m-1">
        {skillsCommand.map((skill) => {
          const Icon = skill.Icon as IconType;
          return (
            <div
              key={skill.title}
              className="relative m-1 flex justify-center items-center w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-md shadow-sm hover:shadow-md transition-all hover:bg-green-500 group"
            >
              <Icon className="text-2xl transition-colors duration-200 group-hover:text-white" />

              {/* Tooltip */}
              <span className="absolute bottom-full mb-1 w-max max-w-xs px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-300">
                {skill.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
