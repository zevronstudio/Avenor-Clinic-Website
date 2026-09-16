import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avenor Medical Clinic | Modern Care. Trusted Expertise. Better Health.',
  description: 'Avenor Medical Clinic provides thoughtful primary and specialty care in Boston, with modern care and trusted expertise centered around you.',
  openGraph: {
    title: 'Avenor Medical Clinic',
    description: 'Modern Care. Trusted Expertise. Better Health.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e4d4f',
  colorScheme: 'light',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
