import type { Metadata } from "next"
import { Barlow_Semi_Condensed, Source_Sans_3, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/marketing/theme-provider"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://zerotoneai.com"),
  title: "Zerotone — We Bring People Together to Solve Real Problems",
  description:
    "Zerotone pairs business analysts, finance specialists, and technologists to understand your operation first, then fix what's actually slowing it down — process, people, or software.",
  keywords: [
    "operations diagnosis",
    "business analysts",
    "process improvement",
    "custom ERP",
    "AI-enabled systems",
    "construction management software",
  ],
  openGraph: {
    title: "Zerotone — We Bring People Together to Solve Real Problems",
    description:
      "We don't sell software off a shelf. We understand your operation first, then build and run the system it actually needs.",
    url: "https://zerotoneai.com",
    siteName: "Zerotone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerotone — We Bring People Together to Solve Real Problems",
    description:
      "We don't sell software off a shelf. We understand your operation first, then build and run the system it actually needs.",
  },
}

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased h-full", barlowSemiCondensed.variable, sourceSans.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-text-secondary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
