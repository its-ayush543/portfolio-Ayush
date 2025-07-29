import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  isVisible: boolean;
  projectName: string;
  projectImage: StaticImageData;
  mousePosition: { x: number; y: number };
}

export function ProjectModal({
  isVisible,
  projectName,
  projectImage,
  mousePosition,
}: ProjectModalProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isVisible) {
      // Offset the modal to prevent it from covering the cursor
      setPosition({
        x: mousePosition.x + 20,
        y: mousePosition.y - 100,
      });
    }
  }, [isVisible, mousePosition]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-opacity duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-background border border-border rounded-lg shadow-xl overflow-hidden max-w-sm">
        <div className="relative w-full">
          <Image
            src={projectImage}
            alt={projectName}
            width={300}
            height={200}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm text-primary text-center leading-tight">
            {projectName}
          </h3>
        </div>
      </div>
    </div>
  );
}
