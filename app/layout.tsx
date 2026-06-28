import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nexova | Premium Websites for Local Businesses in Switzerland',
  description:
    'Nexova builds modern, mobile-friendly websites for local businesses in Switzerland, with SEO basics, contact forms, booking systems, and simple automations.',
  keywords: ['website agency Switzerland', 'website Sion', 'website Valais', 'local business website', 'SEO Switzerland', 'Nexova'],
  openGraph: {
    title: 'Nexova | Premium Websites for Local Businesses in Switzerland',
    description: 'Modern websites for local businesses in Switzerland — SEO, contact forms, booking systems, and automations.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#080c14] text-slate-200 antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
