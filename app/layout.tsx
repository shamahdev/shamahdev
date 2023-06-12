import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const Font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Shaddam Amru Hasibuan',
  description: 'Shaddam Amru Hasibuan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  )
}
