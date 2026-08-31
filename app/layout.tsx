import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { CustomCursor, SmoothScrollProvider } from "@/components/motion";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Zerotone Construct",
    template: "%s | Zerotone Construct",
  },
  description:
    "Zerotone is the team and the system behind your construction operation — estimating, budgets, purchase orders, schedule, billing, and accounting, built around how you work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowSemiCondensed.variable} ${sourceSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-secondary">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
