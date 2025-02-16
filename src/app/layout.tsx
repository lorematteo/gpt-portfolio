import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MainLayout } from '@/layouts/main-layout';

import Providers from './provdiers';

const inter = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MattéoGPT',
  description:
    'Chat with my virtual twin and explore every aspect of my life, education, and career. Get instant answers and insights in a fun, interactive way.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white font-primary text-black dark:bg-dark-gray dark:text-white`}
      >
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
