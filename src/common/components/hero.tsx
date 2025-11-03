import type React from "react";
import { cn } from "@/helpers/cn";

export const Hero = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center bg-[#131313] justify-center w-full group",
        className
      )}
    >
     {children}
    </div>
  );
};
