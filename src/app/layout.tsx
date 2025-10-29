import { primaryFont, secondaryFont } from "@/styles/fonts";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shamah.dev | Shaddam Amru Hasibuan",
  description:
    "Shaddam Amru Hasibuan (shamah.dev) — Frontend Product Engineer and UI/UX Designer based in Indonesia with expertise in modern web technologies, brand design, VR/AR, and project mentoring.",
  keywords: [
    "Shaddam Amru Hasibuan",
    "shamah.dev",
  ],
  authors: [{ name: "Shaddam Amru Hasibuan", url: "https://shamah.dev" }],
  creator: "Shaddam Amru Hasibuan",
  publisher: "shamah.dev",
  openGraph: {
    title: "shamah.dev | Shaddam Amru Hasibuan",
    description:
      "Frontend Product Engineer based in Indonesia. Explore projects and expertise in web, brand, and immersive technology.",
    url: "https://shamah.dev",
    siteName: "shamah.dev",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://shamah.dev"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  applicationName: "shamah.dev",
  category: "Technology",
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
