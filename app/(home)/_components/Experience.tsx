"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { experiences, ExperienceItem } from "@/app/data";
import Title from "./Title";

export default function Experience(): JSX.Element {
  return (
    <section className="py-12 px-6 sm:px-12 bg-black relative z-0">
      {/* Title same as Skills */}
      <Title
        text="Experience"
        className="flex flex-col items-start justify-start text-left mb-6 text-white text-2xl sm:text-3xl font-extrabold"
      />

      <div className="relative border-l-2 border-gray-700/40 pl-6 space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceItem }): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-3 top-2 w-6 h-6 rounded-full border-2 border-gray-800 bg-gradient-to-tr from-green-500 to-teal-400 shadow-md"></div>

      <div className="rounded-lg bg-zinc-900 p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
        <div
          className="flex items-center justify-between"
          onClick={() => setOpen(!open)}
        >
          <div>
            <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
            <p className="text-gray-300 text-sm font-medium">{exp.role}</p>
            <p className="text-gray-400 text-xs">
              {exp.period} {exp.type ? `• ${exp.type}` : ""}
            </p>
          </div>
          {open ? (
            <ChevronUp className="text-green-400 transition-transform" />
          ) : (
            <ChevronDown className="text-green-400 transition-transform" />
          )}
        </div>

        {open && (
          <div className="mt-4 space-y-2 text-sm text-gray-300 transition-all duration-300 ease-in-out">
            {exp.description &&
              exp.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="pl-2 border-l-2 border-green-500/50 text-gray-200"
                >
                  {desc}
                </p>
              ))}
            {exp.skills && (
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full hover:bg-green-500/40 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
