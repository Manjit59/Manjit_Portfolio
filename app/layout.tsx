import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manjit Patra',
  description: 'Created by Manjit Patra',
  generator: 'Manjit Patra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
