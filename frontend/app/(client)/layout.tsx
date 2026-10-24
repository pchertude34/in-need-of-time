import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@in-need-of-time/utils";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TooltipProvider, Toaster } from "@in-need-of-time/ui";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans-app",
});

export const metadata: Metadata = {
  title: "In Time of Need",
  description: "Find free food, shelter, healthcare, jobs and more. A directory for anyone who needs a helping hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background min-h-[100dvh] font-sans antialiased", fontSans.variable)}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Header />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
