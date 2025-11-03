import { primaryFont, secondaryFont } from "@/styles/fonts";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shamah.dev | Shaddam Amru Hasibuan",
  description:
    "Frontend Product Engineer based in Indonesia. Expertise in React, Next.js",
  keywords: [
    "Shaddam Amru Hasibuan",
    "shamah.dev",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "Indonesia",
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
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=shamah.dev&author=Shaddam+Amru+Hasibuan&websiteUrl=https%3A%2F%2Fshamah.dev&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F53106916&theme=default",
        width: 1200,
        height: 630,
        alt: "shamah.dev - Shaddam Amru Hasibuan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "shamah.dev | Shaddam Amru Hasibuan",
    description:
      "Frontend Product Engineer based in Indonesia. Explore projects and expertise in web, brand, and immersive technology.",
    creator: "@shamahdev",
    images: ["https://dynamic-og-image-generator.vercel.app/api/generate?title=shamah.dev&author=Shaddam+Amru+Hasibuan&websiteUrl=https%3A%2F%2Fshamah.dev&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F53106916&theme=default"],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
