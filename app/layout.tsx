import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppProvider } from '@/providers/app-provider';
import { Toaster } from 'sonner';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvrajsinghlodh.vercel.app/'),

  title: {
    template: '%s | Yuvraj ',
    default: 'Yuvraj Singh Lodhi',
  },
  authors: {
    name: 'Yuvraj',
  },
  icons: {
    icon: '/favicon.ico',
  },

  description:
  "Experienced individual with a strong background in development tools and coding languages, seeking a Software Developer position to contribute my skills and experience.",
  openGraph: {
    title: 'Yuvraj Singh Lodhi',
    description:
    "Experienced individual with a strong background in development tools and coding languages, seeking a Software Developer position to contribute my skills and experience.",
    url: 'https://yuvrajsinghlodh.vercel.app/',
    siteName: 'Yuvraj Singh Lodhi',
    images: '/project-1.png',
    type: 'website',
  },
  keywords: ['Yuvraj', 'Yuvraj Singh Lodhi', 'YuvrajSinghLodhi'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
