//
import "tailwindcss/tailwind.css";
import "./globals.css";
import type { Metadata } from "next/types";
import { Syne, DM_Sans } from "next/font/google";

import { cn } from "lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "ムンフエルデネ | Frontend Developer",
  description: "Full-stack developer specializing in Next.js, React, and TypeScript",
};

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html lang="ja" className={cn(syne.variable, dmSans.variable)}>
      <body className={cn("font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
