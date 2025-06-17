import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <nav className="p-4 border-b">
          <h1 className="text-xl font-bold">Project Management Tool</h1>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  )
}