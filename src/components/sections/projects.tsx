"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/project-modal";
import { StaticImageData } from "next/image";

interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData | null;
}

export function Projects({
  data,
  all,
}: {
  data: Record<string, IProjectData>;
  all: string;
}) {
  const [hoveredProject, setHoveredProject] = useState<{
    name: string;
    image: StaticImageData;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    projectName: string,
    projectData: IProjectData,
    event: React.MouseEvent
  ) => {
    // Only show modal if project has a valid image
    if (projectData.IMAGE && projectData.IMAGE.src) {
      setHoveredProject({
        name: projectName,
        image: projectData.IMAGE,
      });
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredProject) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="projects" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">projects.</h2>

      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            className="cursor-target"
            onMouseEnter={(e) => handleMouseEnter(key, value, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-primary/90 text-lg">{key}</p>

                  <p className="flex items-center gap-1 text-sm">
                    {value.LIVE_PREVIEW && (
                      <a
                        className="flex items-center gap-1"
                        href={value.LIVE_PREVIEW}
                      >
                        live preview <ArrowUpRight size={18} />
                      </a>
                    )}
                    {value.GITHUB && (
                      <a
                        className="flex items-center gap-1"
                        href={value.GITHUB}
                      >
                        github <ArrowUpRight size={18} />
                      </a>
                    )}
                  </p>
                </div>
              </div>

              <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                {value.DESCRIPTION.map((desc, index) => (
                  <li key={index}>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                {value.TECH_STACK.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-muted px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center bg-background hover:bg-accent disabled:opacity-50 shadow-sm px-4 py-2 border border-input rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground cursor-target disabled:pointer-events-none"
          href={all}
        >
          View all projects
        </a>
      </div>

      {/* Modal */}
      <ProjectModal
        isVisible={!!hoveredProject}
        projectName={hoveredProject?.name || ""}
        projectImage={hoveredProject?.image || ({} as StaticImageData)}
        mousePosition={mousePosition}
      />
    </div>
  );
}
