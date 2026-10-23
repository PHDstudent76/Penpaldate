import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Penpaldate',
  description: 'A safer way to meet people and plan smarter dates.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
