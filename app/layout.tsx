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
    default: 'Alex Tsou | Software Tool Development & System Integration',
    template: '%s | Alex Tsou',
  },
  description:
    '20+ years of engineering experience in C#/.NET and Python engineering-tool development, device/equipment control, SDK/API integration, and HW/FW/SW system integration, with supporting validation, debug, and root-cause analysis experience across Camera SoC, Wi-Fi/5G, Automotive, and AI/NPU.',
  alternates: { canonical: '/' },
  keywords: [
    'software tool development',
    'engineering tool development',
    'system integration',
    'C# .NET',
    'Python',
    'device control',
    'equipment control',
    'SDK integration',
    'API integration',
    'system validation',
    'SoC validation',
    'test automation',
    'firmware validation',
    'Camera SoC',
    'IPCam',
    'Wi-Fi FPGA',
    'Wi-Fi MAC',
    '5G',
    'AI/NPU',
    'HW FW SW debug',
    'RCA',
    'semiconductor R&D',
    'Linux',
    'ATE',
    'embedded systems',
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
    title: 'Alex Tsou | Software Tool Development & System Integration',
    description:
      '20+ years of engineering experience in C#/.NET and Python engineering-tool development, device/equipment control, SDK/API integration, and HW/FW/SW system integration, with supporting validation, debug, and root-cause analysis experience across Camera SoC, Wi-Fi/5G, Automotive, and AI/NPU.',
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
    title: 'Alex Tsou | Software Tool Development & System Integration',
    description:
      '20+ years of engineering experience in C#/.NET and Python engineering-tool development, device/equipment control, SDK/API integration, and HW/FW/SW system integration, with supporting validation, debug, and root-cause analysis experience across Camera SoC, Wi-Fi/5G, Automotive, and AI/NPU.',
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
