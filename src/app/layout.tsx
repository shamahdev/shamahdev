import { primaryFont, secondaryFont } from "@/styles/fonts";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shamah.dev | Shaddam Amru Hasibuan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-antialiased font-primary",
          primaryFont.variable,
          secondaryFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
