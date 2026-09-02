import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

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

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
