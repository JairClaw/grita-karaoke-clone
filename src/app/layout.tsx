import type { Metadata } from 'next';
import { Inter, Forum } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-forum',
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
    <html lang="en" className={`${inter.variable} ${forum.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
