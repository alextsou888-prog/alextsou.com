import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alextsou.com'),
  title: {
    default: 'Alex Tsou | Software Quality & Test Automation Portfolio',
    template: '%s | Alex Tsou',
  },
  description:
    'Engineering portfolio covering test automation, API testing, network validation, automotive systems, CI/CD, and computer vision.',
  alternates: { canonical: '/' },
  keywords: [
    'test automation',
    'software quality',
    'Python',
    'API testing',
    'Playwright',
    'Selenium',
    'network validation',
    'automotive testing',
    'computer vision',
  ],
  authors: [{ name: 'Alex Tsou' }],
  creator: 'Alex Tsou',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Alex Tsou Engineering Portfolio',
    title: 'Alex Tsou | Software Quality & Test Automation Portfolio',
    description:
      'Building reliable systems through rigorous automation, validation, and evidence-driven engineering.',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Alex Tsou — Software Quality, Automation, and Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Tsou | Software Quality & Test Automation Portfolio',
    description:
      'Building reliable systems through rigorous automation, validation, and evidence-driven engineering.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1628',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
