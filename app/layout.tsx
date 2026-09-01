import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
});

const APP_TITLE = "EnrollIQ CRM - Login & Onboarding Portal";
const APP_DESCRIPTION =
  "Official login and onboarding authentication portal for EnrollIQ Education CRM, featuring interactive enrollment insights carousel, social sign-in, and account registration.";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: APP_DESCRIPTION,
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
      </body>
    </html>
  );
}
