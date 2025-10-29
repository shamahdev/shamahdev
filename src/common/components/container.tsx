import clsx from "clsx";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  maxWidth?: string;
}> &
  ComponentPropsWithoutRef<"section">;

export function Container({
  maxWidth = "1280px",
  children,
  ...props
}: ContainerProps) {
  return (
    <section
      style={{ maxWidth }}
      {...props}
      className={clsx("flex w-full justify-center", props.className)}
    >
      {children}
    </section>
  );
}
