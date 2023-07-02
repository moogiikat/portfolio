//
import "tailwindcss/tailwind.css";
import type { Metadata } from "next/types";
import { Inter } from "@next/font/google";

import { classNames } from "lib/utils";

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
    <div className={classNames("flex min-h-screen w-full flex-col")}>
      {children}
    </div>
  );
};
export default RootLayout;
