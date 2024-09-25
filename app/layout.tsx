import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Highratings.com',
  description: 'Find and rate your favorite movies, TV shows, music, and books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Highratings.com</h1>
            <button className="text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </header>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
