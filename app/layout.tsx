import type { Metadata } from "next"
import { Raleway, Fira_Code } from "next/font/google"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" })

export const metadata: Metadata = {
  title: "Moonex",
  description: "Trade, earn, and own crypto on the all-in-one multi-chain DEX",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${firaCode.variable} font-sans`}>{children}</body>
    </html>
  )
}

