import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Nembe Digital Skills & Innovation Academy (NDSIA)',
    template: '%s | NDSIA',
  },
  description: 'Empowering People. Transforming Communities. Building the Future. NDSIA equips youth and adults in Bayelsa State with digital skills for employment, entrepreneurship, and innovation.',
  keywords: ['NDSIA', 'Nembe', 'Bayelsa State', 'Digital Skills', 'Coding Academy', 'Niger Delta tech development', 'Nonprofit digital literacy', 'Tech education Nigeria'],
  authors: [{ name: 'NDSIA Team' }],
  creator: 'NDSIA Technology Board',
  openGraph: {
    title: 'Nembe Digital Skills & Innovation Academy',
    description: 'Empowering People. Transforming Communities. Building the Future.',
    url: 'https://ndsia.org.ng',
    siteName: 'NDSIA',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full antialiased`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
