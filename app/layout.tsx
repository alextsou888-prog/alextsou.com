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
    default: 'Alex Tsou — Engineering Portfolio',
    template: '%s | Alex Tsou',
  },
  description:
    'Automation · Validation · Debug & RCA · System Integration · AI/NPU · Camera · Connectivity · Customer Engineering',
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
    siteName: 'Alex Tsou — Engineering Portfolio',
    title: 'Alex Tsou — Engineering Portfolio',
    description:
      'Automation · Validation · Debug & RCA · System Integration · AI/NPU · Camera · Connectivity · Customer Engineering',
    images: [
      {
        url: '/portfolio/alex-tsou-og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Alex Tsou — Engineering Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Tsou — Engineering Portfolio',
    description:
      'Automation · Validation · Debug & RCA · System Integration · AI/NPU · Camera · Connectivity · Customer Engineering',
    images: ['/portfolio/alex-tsou-og-preview.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1724' },
  ],
};

const themeBootstrap = `
  (() => {
    try {
      const saved = localStorage.getItem('alextsou-theme');
      const theme = saved === 'light' || saved === 'dark'
        ? saved
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Language is intentionally not persisted: every full page load starts in
  // Traditional Chinese (see app/page.tsx and PortfolioClient's initial state).
  return (
    <html lang="zh-Hant-TW" data-theme="light" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBootstrap }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
