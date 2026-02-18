import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grita Karaoke',
  description: 'A private karaoke rooms venue in the heart of Barcelona.',
  icons: {
    icon: [
      { url: '/images/favicon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/images/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Load Forum font for headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Forum&family=Inter+Display:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
