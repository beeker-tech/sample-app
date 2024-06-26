import '../adapters/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Nav, Toast } from './layout/index';

export const metadata = {
  title: 'Beeker - Demo dashboard',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Nav />
        {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
