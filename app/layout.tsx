import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Bain — Software Engineer | Backend Developer",
  description:
    "Suraj Bain is a Computer Science undergraduate focused on backend engineering, software development, Go, PostgreSQL, REST APIs, and scalable application architecture.",
  authors: [{ name: "Suraj Bain" }],
  openGraph: {
    title: "Suraj Bain — Software Engineer | Backend Developer",
    description:
      "Computer Science undergraduate focused on backend engineering, Go, PostgreSQL, REST APIs, and scalable architecture.",
    type: "website",
    locale: "en_IN",
    siteName: "Suraj Bain",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans bg-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}