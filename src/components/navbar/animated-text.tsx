"use client";
import * as React from "react";

const STAGGER = 0.025;

interface AnimatedTextProps {
  children: string;
  href: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  href,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      className="relative block w-fit leading-[1.2rem] rounded-lg p-0 text-base text-primary/90 whitespace-nowrap sm:px-2 sm:py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent transition-all duration-300 ease-in-out"
        style={{
          width: isHovered ? "100%" : "0%",
        }}
      />

      <span className="relative inline-block cursor-pointer">
        {children.split("").map((l, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            <span
              className="block transition-transform duration-300 ease-in-out"
              style={{
                transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
                transitionDelay: `${i * STAGGER}s`,
              }}
            >
              {l}
            </span>
            <span
              className="block absolute left-0 top-0 transition-transform duration-300 ease-in-out"
              style={{
                transform: isHovered ? "translateY(0%)" : "translateY(100%)",
                transitionDelay: `${i * STAGGER}s`,
              }}
            >
              {l}
            </span>
          </span>
        ))}
      </span>
    </a>
  );
};
