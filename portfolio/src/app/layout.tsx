//
import "tailwindcss/tailwind.css";
import type { Metadata } from "next/types";
import { Inter } from "@next/font/google";

import { cn } from "lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio app",
};

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html>
      <body>
        <div className={cn("flex min-h-screen w-full flex-col")}>
          {children}
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
