"use client";
import { motion, useMotionValue } from "framer-motion";
import type React from "react";
import { cn } from "@/helpers/cn";

export const Hero = ({
  children,
  className,
  containerClassName
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function _handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative flex items-center bg-[#131313] justify-center w-full group",
        containerClassName
      )}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-100/15 pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#131313] mask-[radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%"
      }}
      animate={{
        backgroundSize: "100% 100%"
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline"
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
