"use client";
import * as React from "react";
import { Button } from "../ui/button";

interface MovingElementProps {
  children: React.ReactNode;
  className?: string;
  change?: () => void;
  toChange?: boolean;
  ariaLabel: string;
}

export const MovingElement: React.FC<MovingElementProps> = ({
  children,
  className = "",
  change,
  toChange = true,
  ariaLabel,
}) => {
  const [transform, setTransform] = React.useState({ x: 0, y: 0 });
  const [textTransform, setTextTransform] = React.useState({ x: 0, y: 0 });

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    const item = event.currentTarget as HTMLElement;
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

    const newTransform = { x: xRange * 5, y: yRange * 5 };
    const newTextTransform = { x: xRange * 10, y: yRange * 10 };

    setTransform(newTransform);
    setTextTransform(newTextTransform);
  };

  const handlePointerLeave = () => {
    setTransform({ x: 0, y: 0 });
    setTextTransform({ x: 0, y: 0 });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      className="cursor-target"
    >
      <Button
        variant={toChange ? "ghost" : undefined}
        onClick={change}
        className={className}
        aria-label={ariaLabel}
      >
        <span
          style={{
            transform: `translate(${textTransform.x}px, ${textTransform.y}px)`,
            transition: "transform 0.2s ease-out",
            display: "inline-block",
          }}
        >
          {children}
        </span>
      </Button>
    </div>
  );
};
