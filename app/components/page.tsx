"use client";

import Link from "next/link";
import { components } from "../data";
import Navbar from "../(home)/_components/Navbar";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-black space-y-20 overflow-hidden">
      {/* Header / Navbar */}
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar isFooter={false} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-10">
            My Components
          </h1>
          <p className="text-gray-400 mt-2">
            Explore the components I built and published to NPM.
          </p>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((comp) => (
            <Link key={comp.id} href={`/components/${comp.id}`}>
              <div className="p-6 border border-gray-800 rounded-2xl hover:shadow-xl hover:border-green-500 transition cursor-pointer bg-neutral-900/80 backdrop-blur-md">
                <h2 className="text-xl font-semibold text-white">{comp.name}</h2>
                <p className="text-gray-400 mt-2">{comp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {comp.builtWith.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-green-400 bg-green-900/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Navbar */}
        <div className="border-t mt-10">
          <Navbar isFooter={true} className="flex-col gap-4" />
        </div>
      </div>
    </div>
  );
}
