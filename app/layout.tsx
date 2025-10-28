import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Amthal X Emojot",
  description: "Amthal HR Management System powered by Emojot",
  generator: "v0.app",
  icons: {
    icon: "/mystaff-logo.png",
    shortcut: "/mystaff-logo.png",
    apple: "/mystaff-logo.png",
  },
  openGraph: {
    title: "Amthal X Emojot",
    description: "Amthal HR Management System powered by Emojot",
    images: [
      {
        url: "/mystaff-logo.png",
        width: 1200,
        height: 630,
        alt: "Amthal X Emojot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amthal X Emojot",
    description: "Amthal HR Management System powered by Emojot",
    images: ["/mystaff-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${montserrat.variable}`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
