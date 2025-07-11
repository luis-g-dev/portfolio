'use client'

import './globals.css'
import { ThemeProvider } from "@/contexts/theme-context"
import { VibeButton } from "@/components/vibe-button"
import Footer from '@/components/Footer'
import { ThemeBackground } from '@/components/theme-background'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <head>
        <title>mousefulness</title>
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0%200%2024%2024' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12.586%2012.586%2019%2019'/><path d='M3.688%203.037a.497.497%200%200%200-.651.651l6.5%2015.999a.501.501%200%200%200%20.947-.062l1.569-6.083a2%202%200%200%201%201.448-1.479l6.124-1.579a.5.5%200%200%200%20.063-.947z'/></svg>"/>
        <script src="https://unpkg.com/htmx.org@1.10.4"></script>
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
        <ThemeBackground/>
          <div className="flex-grow"> {/* flex-grow for footer to be at the bottom */}
            {children}
            <VibeButton/>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
