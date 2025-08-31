// ComponentDetailPage.tsx
"use client";

import { useParams } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { components } from "../../data";
import SpotifyPlayer from "../../(home)/_components/SpotifyPlayer";
import Navbar from "../../(home)/_components/Navbar";
import { CollapsibleSection } from "../../(home)/_components/CollapsibleSection";
import { CodeBlock } from "../../(home)/_components/CodeBlock";
import { TableOfContents } from "../../(home)/_components/TableOfContents";
import { InstallationSection } from "../../(home)/_components/InstallationSection";
import { PropsTable } from "../../(home)/_components/PropsTable";

export default function ComponentDetailPage() {
  const params = useParams();
  const { id } = params;
  const comp = components.find((c) => c.id === id);

  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID || "";

  if (!comp) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Component not found
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            The component you&#39;re looking for doesn&#39;t exist.
          </p>
        </div>
      </div>
    );
  }

  // Table of Contents sections
  const tocSections = [
    { id: "preview", label: "Preview" },
    { id: "about", label: "About" },
    { id: "installation", label: "Installation" },
    { id: "usage", label: "Usage" },
    { id: "code", label: "Code" },
    { id: "api", label: "API Reference" },
    ...(comp.examples ? [{ id: "examples", label: "Examples" }] : []),
  ];

  // Open state for each section
  const initialOpenState = tocSections.reduce((acc, sec) => {
    acc[sec.id] = sec.id === "preview" || sec.id === "about"; // default open Preview & About
    return acc;
  }, {} as Record<string, boolean>);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(initialOpenState);

  // Handle TOC click
  const handleSectionClick = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black space-y-20 overflow-hidden">
      {/* Header */}
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar  />
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {comp.name}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {comp.description}
            </p>
            <div className="flex items-center gap-2 mt-6">
              {comp.builtWith.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} onSectionClick={handleSectionClick} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Collapsible Sections */}
            {tocSections.map((section) => {
              const id = section.id;
              let content: React.ReactNode = null;

              switch (id) {
                case "preview":
                  content = (
                    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-8 border border-zinc-200 dark:border-zinc-700">
                      <div className="flex justify-center">
                        <SpotifyPlayer
                          clientId={CLIENT_ID}
                          clientSecret={CLIENT_SECRET}
                          playlistId={PLAYLIST_ID}
                          theme="dark"
                          centeredPreview={true}
                        />
                      </div>
                    </div>
                  );
                  break;

                case "about":
                  content = (
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {comp.about || `The ${comp.name} component is built using ${comp.builtWith.join(", ")}. ${comp.description}`}
                      </p>
                      {comp.links && (
                        <div className="flex gap-4 mt-4">
                          {comp.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center gap-1 text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                  break;

                case "installation":
                  content = <InstallationSection packageName={comp.npmPackage} dependencies={comp.dependencies} />;
                  break;

                case "usage":
                  content = (
                    <div className="space-y-4">
                      <CodeBlock code={comp.codeSnippet} language="tsx" />
                      {comp.envVariables && (
                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                          <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">
                            Environment Variables
                          </h4>
                          <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                            Make sure to set up the following environment variables:
                          </p>
                          <div className="space-y-1 text-xs font-mono">
                            {comp.envVariables.map((env) => (
                              <div key={env} className="text-amber-800 dark:text-amber-300">{env}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                  break;

                case "code":
                  content = (
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Copy and paste the following code into your project
                      </p>
                      <CodeBlock code={comp.fullCode} language="tsx" filename={comp.filename} />
                    </div>
                  );
                  break;

                case "api":
                  content = (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">Props</h3>
                        <PropsTable props={comp.props} />
                      </div>
                    </div>
                  );
                  break;

                case "examples":
                  content = comp.examples?.map((example, index) => (
                    <div key={index} className="space-y-8">
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-3">{example.title}</h3>
                      {example.preview && (
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700 mb-4">
                          <div className="flex justify-center">{example.preview}</div>
                        </div>
                      )}
                      <CodeBlock code={example.code} language="tsx" />
                      {example.description && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{example.description}</p>
                      )}
                    </div>
                  ));
                  break;

                default:
                  break;
              }

              return (
                <CollapsibleSection
                  key={id}
                  id={id}
                  title={section.label}
                  isOpen={openSections[id]}
                  onToggle={() =>
                    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
                  }
                >
                  {content}
                </CollapsibleSection>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
