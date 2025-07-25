"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-black p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        squareColor="rgba(229, 228, 226, 0.2)" // platinum white dimmed
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
