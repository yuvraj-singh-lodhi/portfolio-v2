"use client";

import { useState } from "react";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { projectsCommand } from "@/app/data";
import { IoClose } from "react-icons/io5";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="py-12 px-6 sm:px-12 bg-black relative z-0">
      <Title
        text="Projects"
        className="flex flex-col items-start justify-start text-left mb-6"
      />

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsCommand.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div
              className={cn(
                "flex flex-col h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.03] bg-neutral-900",
                project.background
              )}
            >
              <img
                src={project.cover}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col justify-between p-6 space-y-4 text-white">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="size-6 text-white/80 hover:text-white transition"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden relative text-white p-6">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>

            <img
              src={selectedProject.cover}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-3xl font-bold mb-2">
              {selectedProject.title}
            </h2>

            {selectedProject.description && (
              <p className="text-base text-gray-300 mb-4">
                {selectedProject.description}
              </p>
            )}

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-400 hover:underline mb-4"
              >
                View Project ↗
              </a>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {selectedProject.tech.map((Icon: any, i: number) => (
                <Icon key={i} className="size-6 text-white/80 hover:text-white" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
