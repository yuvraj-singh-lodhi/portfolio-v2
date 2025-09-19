"use client";

import { useState } from "react";
import Title from "./Title";
import { components, ComponentInfo } from "../../data";
import { IoClose } from "react-icons/io5";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);

  return (
    <section className="py-12 px-6 sm:px-12 bg-black relative z-0 min-h-screen">
      <Title
        text="My Components"
        className="flex flex-col items-start justify-start text-left mb-6 text-white text-2xl sm:text-3xl font-extrabold"
      />
      <p className="text-gray-400 mb-8">
        Explore the components I built and published to NPM.
      </p>

      {/* Components Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((comp) => (
          <div
            key={comp.id}
            className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.03] bg-neutral-900 p-6"
            onClick={() => setSelectedComponent(comp)}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{comp.name}</h3>
            {comp.description && (
              <p className="text-sm text-gray-300 line-clamp-4 mb-4">{comp.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {comp.builtWith.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium text-green-400 bg-green-900/20 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden relative text-white p-6">
            <button
              onClick={() => setSelectedComponent(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>

            <h2 className="text-3xl font-bold mb-2">{selectedComponent.name}</h2>

            {selectedComponent.description && (
              <p className="text-base text-gray-300 mb-4">{selectedComponent.description}</p>
            )}

            {selectedComponent.links && selectedComponent.links.length > 0 && (
              <div className="mb-4">
                {selectedComponent.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-green-400 hover:underline mr-4 mb-2"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2 justify-center">
              {selectedComponent.builtWith.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium text-green-400 bg-green-900/20 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
