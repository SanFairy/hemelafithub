import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language';
import { CartProvider } from '@/lib/cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HemelaFitHub | Premium Home Fitness Equipment',
  description: 'HemelaFitHub designs compact, high-quality home fitness equipment — adjustable dumbbells, resistance bands, yoga mats, massage guns and more. Small gear, big results.',
  keywords: 'home fitness, home gym, adjustable dumbbells, resistance bands, yoga mat, massage gun, jump rope, ab roller, grip trainer',
  robots: 'index, follow',
  metadataBase: new URL('https://hemelafithub.com'),
  openGraph: {
    title: 'HemelaFitHub | Premium Home Fitness Equipment',
    description: 'Compact, high-quality home fitness gear. From adjustable dumbbells to massage guns — everything you need to stay strong at home.',
    url: 'https://hemelafithub.com',
    siteName: 'HemelaFitHub',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen pt-32 md:pt-36">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
