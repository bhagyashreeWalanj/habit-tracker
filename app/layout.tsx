import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import GlobalContextProvider from "@/types/contextApi";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Dynamically import all icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Toaster } from "@/components/ui/toaster";

// Add all icons to the library
library.add(fas, far, fab);

const fontPoppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FitTrack",
  description: "Habit Tracker system",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* @ts-expect-error Server Component */}
      <ClerkProvider>
        <GlobalContextProvider>
          <body
            className={cn(
              "min-h-screen --font-poppins antialiased ",
              fontPoppins.variable
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <Toaster />
          </body>
        </GlobalContextProvider>
      </ClerkProvider>
    </html>
  );
}
