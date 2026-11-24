import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LeadPopup } from '@/components/Brochure/LeadPopup';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  preload: true,
});

const SITE_URL = 'https://www.enrolliq.ai';
const APP_TITLE = 'EnrollIQ | Education CRM & Admission Management Software';
const APP_DESCRIPTION =
  'AI-powered education CRM for admissions. Capture leads from Meta, Google & Shiksha, auto-allocate to counselors, automate WhatsApp. Book a free demo.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  keywords: [
    'education CRM',
    'admission CRM',
    'student enrollment CRM',
    'admission management software',
    'CRM for colleges and universities',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/assets/favicon.webp',
        type: 'image/webp',
      },
    ],
    shortcut: '/assets/favicon.webp',
    apple: '/assets/favicon.webp',
  },
  verification: {
    google: 'Z_QgZLeXsrUWr3qHFZq_qiGbSqrnaMGcuyJzyCh7eig',
  },
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    url: SITE_URL,
    siteName: 'EnrollIQ',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: APP_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
        <LeadPopup />
      </body>
    </html>
  );
}
