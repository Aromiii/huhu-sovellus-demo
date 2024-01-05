import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"

const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
  display: "swap",
  variable: "--font-poppins",
})
const opensauce = localFont({
  src: "../../public/fonts/OpenSauceOne-Regular.ttf",
  variable: "--font-opensauce",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${opensauce.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
